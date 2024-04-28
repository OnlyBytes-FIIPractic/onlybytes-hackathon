import React, { useState } from 'react'
import { storage, db } from '../../configs/firebase'
import { collection, doc, setDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { v4 } from 'uuid';
import ImageIcon from '@mui/icons-material/Image';
import { toast } from 'react-toastify';


import { UserAuth } from '../../context/AuthContext';


const UploadPhoto = () => {
    const { user } = UserAuth();

    const [photoUpload, setPhotoUpload] = useState(null);
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');

    const handleFileChange = (event) => {
        setPhotoUpload(event.target.files[0]);
    };

    const handleDateChange = (event) => {
        setDate(event.target.value);
    };

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };

    const handleLocationChange = (event) => {
        setLocation(event.target.value);
    };

    const uploadImage = () => {
        if (photoUpload === null) return;

        // Upload photo to Firebase Storage
        const imageRef = ref(storage, `${user.uid}/${photoUpload.name + v4()}`);
        uploadBytes(imageRef, photoUpload)
            .then((snapshot) => {
                console.log('Successfully uploaded the photo!', snapshot);

                // Get download URL of the uploaded photo
                getDownloadURL(imageRef)
                    .then((downloadURL) => {
                        console.log('File available at', downloadURL);

                        // Store photo details in Firestore
                        const photosRef = collection(db, `users/${user.uid}/photos`);
                        const photoData = {
                            url: downloadURL,
                            date: date,
                            description: description,
                            location: location
                        };

                        // Check if the collection exists, create it if not
                        const photosDoc = doc(db, `users/${user.uid}`);
                        setDoc(photosDoc, {}, { merge: true }) // Using merge: true to avoid overwriting existing data

                        // Add photo document to the collection
                        setDoc(doc(photosRef), photoData)
                            .then(() => {
                                console.log('Photo details stored successfully!');
                                // Clear form fields after successful upload
                                setPhotoUpload(null);
                                setDate('');
                                setDescription('');
                                setLocation('');
                                toast.success('Photo uploaded successfully!');
                            })
                            .catch((error) => {
                                console.error('Error storing photo details:', error);
                            });
                    })
                    .catch((error) => {
                        console.error('Error getting download URL:', error);
                    });
            })
            .catch((error) => {
                console.error('Error uploading file:', error);
            });
    };

    return (
        <div className="container mx-auto py-6">
            <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Create a Memory:</h2>
                <div className="mb-4">
                    <label className="block mb-2">Image:</label>
                    {/* Wrap the ImageIcon inside a label */}
                    <label htmlFor="file-upload" className="cursor-pointer">
                        <div className="border border-gray-300 rounded-lg p-4">
                            <ImageIcon className="w-8 h-8 text-primary" /> {/* ImageIcon */}
                        </div>
                        {photoUpload && (
                            <p className="text-primary">Selected Photo: {photoUpload.name}</p>
                        )}
                    </label>
                    {/* Hidden input for file upload */}
                    <input id="file-upload" type="file" className="hidden" onChange={handleFileChange} />
                </div>

                <label className="block mb-2">Date of the event:</label> {/* Updated label text */}
                <input type="date" className="w-full py-2 px-4 rounded-lg border border-gray-300 mb-4" value={date} onChange={handleDateChange} placeholder="Select Date" /> {/* Updated placeholder text */}
                <label className="block mb-2">Description:</label>
                <textarea className="w-full h-20 py-2 px-4 rounded-lg border border-gray-300 mb-4 resize-none" value={description} onChange={handleDescriptionChange} /> {/* Fixed size textarea */}
                <label className="block mb-2">Location:</label>
                <input type="text" className="w-full py-2 px-4 rounded-lg border border-gray-300 mb-4" value={location} onChange={handleLocationChange} />
                <button className="bg-primary text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300" onClick={uploadImage}>Upload</button>
            </div>
        </div>
    );

};


export default UploadPhoto