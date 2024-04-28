import React, { useState, useEffect } from 'react';
import { Button } from "@material-tailwind/react";
import {
    getDocs,
    collection,
    doc,
} from "firebase/firestore";
import { db } from '../../configs/firebase'
import DownloadIcon from '@mui/icons-material/Download';
import { UserAuth } from "@/context/AuthContext.jsx";


const SlideshowFamily = ({ userId }) => {
    const [videoUrl, setVideoUrl] = useState('');
    const [downloaded, setDownloaded] = useState(false);
    const { user } = UserAuth();
    useEffect(() => {
        if (user) {
            fetchFamilies();
        }
    }, [user]);

    const generateSlideshow = async () => {
        try {
            const fetchFamilies = async () => {
                try {
                    const familiesRef = collection(db, 'families');
                    const querySnapshot = await getDocs(familiesRef);

                    const familyData = {}; // Object to store matched families
                    for (const doc of querySnapshot.docs) {
                        const membersQuery = query(collection(familiesRef, doc.id, 'members'), where('id', '==', user.id));
                        const membersSnapshot = await getDocs(membersQuery);

                        if (!membersSnapshot.empty) { // If member found in family
                            familyData[doc.id] = doc.data(); // Add family to object
                        }
                    }

                    console.log(familyData);
                    // Implement the rest of your functionality here
                } catch (error) {
                    console.error(error);
                }
            };

            console.log("USER FAMILIES")
            console.log(userFamilies)

            const response = await fetch('http://127.0.0.1:5000/generate_slideshow', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ photoData }),
            });

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
                Download Slideshow
            </Button>
            {downloaded && <p className='text-center mt-1 '>Download Successful</p>}
        </div>
    );
};

export default SlideshowFamily;

