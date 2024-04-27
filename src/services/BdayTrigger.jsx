import React, { useEffect } from 'react'
import { UserAuth } from '../context/AuthContext';
import { getFamilyByUserId } from '@/configs/firebaseFunctions';
import { db } from '../configs/firebase'
import { collection, getDocs, doc, addDoc} from "firebase/firestore";

const BdayTrigger = () => {

    const { user } = UserAuth();

    useEffect(() => {

        const family = getFamilyByUserId(user.uid);
    
        const checkBirthday = async () => {
            
            const today = new Date();
            const threeDaysLater = new Date(today);
            threeDaysLater.setDate(threeDaysLater.getDate() + 3);

            // user.birthday is a string, convert it to a Date object
            const birthday = new Date(user.birthday);
            if (birthday.getDate() === threeDaysLater.getDate() && birthday.getMonth() === threeDaysLater.getMonth()) {
                console.log('User birthday is in 3 days!');
            } else {
                console.log('User birthday is not in 3 days');
                return;
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

                const capsuleData = {
                    gifts : {},
                    photos : {},
                    year : currentYear.toString(),
                }

                console.log('No birthday capsule found for this user');
                const bdayCapsuleRef = doc(collection(db, `users/${user.uid}/bdayCapsules`));
                
               addDoc(bdayCapsulesRef, capsuleData)
    .           then((docRef) => {
                    console.log('Capsule details stored successfully with ID:', docRef.id);
                })
                .catch((error) => {
                    console.error('Error storing capsule details:', error);
                });
            }
        };

        checkBirthday();
    }, []);

    return null; // No UI rendering for this component
};


export default BdayTrigger;