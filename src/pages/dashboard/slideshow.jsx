import React, { useState } from 'react';
import { Button } from "@material-tailwind/react";
import {
    getDocs,
    collection,
    addDoc,
    deleteDoc,
    updateDoc,
    doc,
  } from "firebase/firestore";
  import { ref, uploadBytes } from "firebase/storage";
import firebase from 'firebase/app';
 import { getStorage } from 'firebase/storage';

 const firebaseConfig = {
    apiKey: "AIzaSyAT_sisQpKdbvxVAA0aOqGR4tqLygBD5D8",
    authDomain: "onlybytes-hacakthon.firebaseapp.com",
    projectId: "onlybytes-hacakthon",
    storageBucket: "onlybytes-hacakthon.appspot.com",
    messagingSenderId: "638024607719",
    appId: "1:638024607719:web:f19ec514421f1215257f42",
    measurementId: "G-RKPC7HL874"
  };
  
  const firebaseApp = initializeApp(firebaseConfig);
  const storage = getStorage(firebaseApp);
  
  const SlideshowGenerator = () => {
      const [videoUrl, setVideoUrl] = useState('');
      const [downloaded, setDownloaded] = useState(false);
  
      const generateSlideshow = async () => {
          try {
              const userId = "yTIgtK5HrkPTCEsAQVlmwZnjSQv2";
              const db = firebaseApp.firestore();
              const userRef = collection(db, 'users', userId);
              const photosSnapshot = await getDocs(userRef);
              const photoUrls = photosSnapshot.docs.map(doc => doc.data().url);
              
              const response = await fetch('http://127.0.0.1:5000/generate_slideshow', {
                  method: 'POST',
                  headers: {
                      'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({ photoUrls }),
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
                  Generate Slideshow
              </Button>
              {downloaded && <p>Video downloaded</p>}
          </div>
      );
  };
  
  export default SlideshowGenerator;

