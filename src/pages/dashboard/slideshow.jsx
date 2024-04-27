import React, { useState } from 'react';
import { Button } from "@material-tailwind/react";

const SlideshowGenerator = () => {
    const [videoUrl, setVideoUrl] = useState('');
    const [downloaded, setDownloaded] = useState(false);

    const generateSlideshow = async () => {
        try {
            const response = await fetch('http://127.0.0.1:5000/generate_slideshow');
            if (!response.ok) {
                throw new Error('Failed to generate slideshow');
            }
            const blob = await response.blob();
            const url = URL.createObjectURL(blob);
            setVideoUrl(url);
            
            const a = document.createElement('a');
            a.href = url;
            a.download = 'slideshow_with_transitions.mp4';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);

            setDownloaded(true);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <Button
                className="shadow-md bg-secondary hover:bg-primary ml-auto"
                ripple
                onClick={generateSlideshow}>
                Generate Slideshow
              </Button>
            {downloaded && <p>Video downloaded</p>}
        </div>
    );
};

export default SlideshowGenerator;
