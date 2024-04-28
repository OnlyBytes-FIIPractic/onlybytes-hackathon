import React, { useState, useEffect } from 'react';
import Webcam from 'react-webcam';
import { ref, uploadBytes } from 'firebase/storage';
import { storage } from '@/configs/firebase';

const WebcamRecord = () => {
    const webcamRef = React.useRef(null);
    const mediaRecorderRef = React.useRef(null);
    const [capturing, setCapturing] = React.useState(false);
    const [recordedChunks, setRecordedChunks] = React.useState([]);

    const handleStartCaptureClick = React.useCallback(() => {
        setCapturing(true);
        mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream, {
            mimeType: "video/webm"
        });
        mediaRecorderRef.current.addEventListener(
            "dataavailable",
            handleDataAvailable
        );
        mediaRecorderRef.current.start();
    }, [webcamRef, setCapturing, mediaRecorderRef]);

    const handleDataAvailable = React.useCallback(
        ({ data }) => {
            if (data.size > 0) {
                setRecordedChunks((prev) => prev.concat(data));
            }
        },
        [setRecordedChunks]
    );

    const handleStopCaptureClick = React.useCallback(() => {
        mediaRecorderRef.current.stop();
        setCapturing(false);
    }, [mediaRecorderRef, setCapturing]);

    const handleDownload = React.useCallback(async () => {
        if (recordedChunks.length) {
            try {
                const storageRef = ref(storage, "videos/video.webm");
                await uploadBytes(storageRef, new Blob(recordedChunks, { type: "video/webm" }));
                console.log("Video uploaded successfully!");
                setRecordedChunks([]);
            } catch (error) {
                console.error("Error uploading video:", error);
            }
        }
    }, [recordedChunks]);

    return (
        <div className='mt-2'>
            <Webcam audio={true} ref={webcamRef} />
            {capturing ? (
                <button className='p-2 bg-primary text-white rounded-lg mt-2 mb-2' onClick={handleStopCaptureClick}>Stop Capture</button>
            ) : (
                <button className='p-2 bg-primary text-white rounded-lg mt-2 mb-2' onClick={handleStartCaptureClick}>Start Capture</button>
            )}
            {recordedChunks.length > 0 && (
                <button onClick={handleDownload}>Download</button>
            )}
        </div>
    );
}

export default WebcamRecord;
