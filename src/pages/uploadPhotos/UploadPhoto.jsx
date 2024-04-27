import React, { useState } from 'react'
import { storage, db } from '../../configs/firebase'
import { collection, doc, setDoc} from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL  } from 'firebase/storage';
import { v4 } from 'uuid';

import { UserAuth } from '../../context/AuthContext';


const UploadPhoto = () => {
    const { user } = UserAuth();
    
    const [photoUpload, setPhotoUpload] = useState(null);
    const [dateUploaded, setDateUploaded] = useState('');
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');

    const handleFileChange = (event) => {
        setPhotoUpload(event.target.files[0]);
    };

    const handleDateChange = (event) => {
        setDateUploaded(event.target.value);
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
                        dateUploaded: dateUploaded,
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
                            setDateUploaded('');
                            setDescription('');
                            setLocation('');
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
        <div>
            <h2>Upload Photo</h2>
            <input type="file" onChange={handleFileChange} />
            <br />
            <label>Date Uploaded:</label>
            <input type="date" value={dateUploaded} onChange={handleDateChange} />
            <br />
            <label>Description:</label>
            <textarea value={description} onChange={handleDescriptionChange} />
            <br />
            <label>Location:</label>
            <input type="text" value={location} onChange={handleLocationChange} />
            <br />
            <button onClick={uploadImage}>Upload</button>
        </div>
    );
};


export default UploadPhoto