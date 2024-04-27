import React, { useEffect } from 'react'
import { UserAuth } from '../context/AuthContext';

const BdayTrigger = ({ currentUser }) => {

    const { user } = UserAuth();

    useEffect(() => {
    
        const checkBirthday = async () => {
            // Check if the reminder has already been triggered for the current user
            const reminderRef = db.collection('reminders').doc(currentUser.uid);
            const reminderDoc = await reminderRef.get();
            if (reminderDoc.exists && reminderDoc.data().triggered) {
                // If the reminder has already been triggered, do nothing
                return;
            }

            // If the reminder has not been triggered, proceed with the reminder logic
            const today = new Date();
            const threeDaysLater = new Date(today);
            threeDaysLater.setDate(threeDaysLater.getDate() + 3);

            // Check if the current user's birthday is in 3 days
            if (
                currentUser &&
                currentUser.birthday &&
                new Date(currentUser.birthday).getDate() === threeDaysLater.getDate() &&
                new Date(currentUser.birthday).getMonth() === threeDaysLater.getMonth()
            ) {
                try {
                    // Create a time capsule document in the database
                    const timeCapsuleRef = await db.collection('timeCapsules').add({
                        userId: currentUser.uid,
                        birthday: currentUser.birthday,
                        photos: [] // Placeholder for photos
                    });

                    // Filter all photos from this year and store them in the time capsule document
                    const photosFromThisYear = await db.collection('photos').where('userId', '==', currentUser.uid).where('uploadDate', '>=', new Date(new Date().getFullYear(), 0, 1)).get();
                    const photoUpdates = photosFromThisYear.docs.map((doc) => doc.ref.update({ timeCapsuleId: timeCapsuleRef.id }));

                    // Send notifications to family members about the upcoming birthday
                    // Add your notification logic here

                    // Update the reminder flag to indicate that it has been triggered
                    await reminderRef.set({ triggered: true });
                } catch (error) {
                    console.error('Error creating time capsule:', error);
                }
            }
        };

        checkBirthday();
    }, [currentUser]);

    return null; // No UI rendering for this component
};


export default BdayTrigger;