import React, { useEffect } from 'react'
import { UserAuth } from '../context/AuthContext';
import { getFamilyByUserId } from '@/configs/firebaseFunctions';
import { db } from '../configs/firebase'
import { collection, getDocs} from "firebase/firestore";

const BdayTrigger = () => {

    const { user } = UserAuth();

    useEffect(() => {

        const family = getFamilyByUserId(user.uid);
    
        const checkBirthday = async () => {
            
            // get the users birthday

            const userBday = collection(db, `users/${user.uid}/birthday`);
            const userBdaySnapshot = await getDocs(userBday);
            if (!userBdaySnapshot.empty) {
                const userBdayData = userBdaySnapshot.docs[0].data();
                console.log('User birthday data:', userBdayData);
            } else {
                console.log('No birthday found for this user');
            }
           

            const currentYear = new Date().getFullYear();

            const bdayCapsulesRef = collection(db, `users/${user.uid}/bdayCapsules`);

            const bdayCapsulesSnapshot = await getDocs(bdayCapsulesRef);
            if (!bdayCapsulesSnapshot.empty) {
                // If the birthday capsule already exists for this year
                const bdayCapsuleDoc = bdayCapsulesSnapshot.docs[0]; // Assuming there's only one document per year
                const bdayCapsuleData = bdayCapsuleDoc.data();
                console.log('Birthday capsule data:', bdayCapsuleData);
                if (bdayCapsuleData.triggered) {
                    console.log('Birthday capsule already created for this year');
                    // If the reminder has already been triggered, do nothing
                    return;
                }
            } else {
                console.log('No birthday capsule found for this user');
                
            }
                        
            // // Check if the collection exists, create it if not
            // const photosDoc = doc(db, `users/${user.uid}`);
            // setDoc(photosDoc, {}, { merge: true }) // Using merge: true to avoid overwriting existing data

            // // Add photo document to the collection
            // setDoc(doc(photosRef), photoData)
            //     .then(() => {
            //         console.log('Photo details stored successfully!');
            //         // Clear form fields after successful upload
            //         setPhotoUpload(null);
            //         setdate('');
            //         setDescription('');
            //         setLocation('');
            //     })
            //     .catch((error) => {
            //         console.error('Error storing photo details:', error);
            //     });
       

            // // If the reminder has not been triggered, proceed with the reminder logic
            // const today = new Date();
            // const threeDaysLater = new Date(today);
            // threeDaysLater.setDate(threeDaysLater.getDate() + 3);

            // // Check if the current user's birthday is in 3 days
            // if (
            //     currentUser &&
            //     currentUser.birthday &&
            //     new Date(currentUser.birthday).getDate() === threeDaysLater.getDate() &&
            //     new Date(currentUser.birthday).getMonth() === threeDaysLater.getMonth()
            // ) {
            //     try {
            //         // Create a time capsule document in the database
            //         const timeCapsuleRef = await db.collection('timeCapsules').add({
            //             userId: currentUser.uid,
            //             birthday: currentUser.birthday,
            //             photos: [] // Placeholder for photos
            //         });

            //         // Filter all photos from this year and store them in the time capsule document
            //         const photosFromThisYear = await db.collection('photos').where('userId', '==', currentUser.uid).where('uploadDate', '>=', new Date(new Date().getFullYear(), 0, 1)).get();
            //         const photoUpdates = photosFromThisYear.docs.map((doc) => doc.ref.update({ timeCapsuleId: timeCapsuleRef.id }));

            //         // Send notifications to family members about the upcoming birthday
            //         // Add your notification logic here

            //         // Update the reminder flag to indicate that it has been triggered
            //         await reminderRef.set({ triggered: true });
            //     } catch (error) {
            //         console.error('Error creating time capsule:', error);
            //     }
            // }
        };

        checkBirthday();
    }, []);

    return null; // No UI rendering for this component
};


export default BdayTrigger;