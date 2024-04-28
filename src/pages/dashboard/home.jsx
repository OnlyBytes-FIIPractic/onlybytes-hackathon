import React from "react";
import { Carousel } from "@material-tailwind/react";

export function Home() {
  const slideStyle = (bgImage) => ({
    backgroundImage: `url(${bgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '55vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    textShadow: '2px 2px 10px rgba(0,0,0,0.8)',
    position: 'relative'
  });

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    zIndex: 1
  };

  const textStyle = {
    zIndex: 2,
    color: 'white',
    textAlign: 'center',
    padding: '0 10%',
    textShadow: '2px 2px 8px rgba(0,0,0,0.6)'
  };

  return (
    <div className="flex flex-col pt-4 w-full">
      <Carousel
        className="w-full rounded-xl"
        transition={{duration: 0.5}}
        autoplay
        loop
      >
        <div style={slideStyle('https://wallpapers.com/images/hd/happy-family-pictures-qbekz1yxokj59dte.jpg')}>
          <div style={overlayStyle}></div>
          <div style={textStyle}>
            <h3 className="text-4xl font-bold">Build Your Family Legacy</h3>
            <p className="text-xl mt-2">Start a private group where your family can grow closer, sharing and preserving
              unforgettable moments together.</p>
          </div>
        </div>

        <div
          style={slideStyle('https://www.usatoday.com/gcdn/presto/2020/12/07/USAT/25e1ba73-d5e9-4d24-84d8-43d38b8fe294-GettyImages-1189805626.jpg')}>
          <div style={overlayStyle}></div>
          <div style={textStyle}>
            <h3 className="text-4xl font-bold">Seal Your Memories in Time</h3>
            <p className="text-xl mt-2">Secure your precious memories—photos, videos, and notes, locking them away to be
              revealed on a future special date.</p>
          </div>
        </div>

        <div
          style={slideStyle('https://locallens.com/wp-content/uploads/2022/02/Kauai-FamilyTrip-Gabrielle-18745-14.jpg')}>
          <div style={overlayStyle}></div>
          <div style={textStyle}>
            <h3 className="text-4xl font-bold">Celebrate with a Surprise</h3>
            <p className="text-xl mt-2">Deliver surprise birthday capsules filled with messages, videos, and digital
              gifts, set to open on their special day.</p>
          </div>
        </div>

        <div style={slideStyle('https://www.sheknows.com/wp-content/uploads/2018/08/kcz9btbap3vlpiwob7qm.jpeg?w=1920')}>
          <div style={overlayStyle}></div>
          <div style={textStyle}>
            <h3 className="text-4xl font-bold">Relive Your Best Moments</h3>
            <p className="text-xl mt-2">Automatically turn your photos and videos into beautiful slideshows to reminisce
              about the good times with family and friends.</p>
          </div>
        </div>

        <div
          style={slideStyle('https://studyfinds.org/wp-content/uploads/2023/05/Family-road-trip-with-parents-taking-selfie-with-kids-scaled.jpg')}>
          <div style={overlayStyle}></div>
          <div style={textStyle}>
            <h3 className="text-4xl font-bold">Wear Your Memories</h3>
            <p className="text-xl mt-2">Create custom merchandise from your favorite memories. Wear them, share them,
              and keep them close to your heart.</p>
          </div>
        </div>
      </Carousel>

      {/*Features*/}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center p-8 py-28">
        <div className="bg-white p-6 shadow-lg rounded-lg">
          <i className="fa-solid fa-user-group text-3xl text-blue-600 mx-auto"></i>
          <h3 className="text-xl font-semibold mt-4">Family Groups</h3>
          <p className="mt-2">Create private groups to connect and share with your family securely.</p>
        </div>
        <div className="bg-white p-6 shadow-lg rounded-lg">
          <i className="fa-solid fa-hourglass text-3xl text-blue-600 mx-auto"></i>
          <h3 className="text-xl font-semibold mt-4">Memory Capsules</h3>
          <p className="mt-2">Seal your memories and open them at a future date or occasion.</p>
        </div>
        <div className="bg-white p-6 shadow-lg rounded-lg">
          <i className="fa-solid fa-gift text-3xl text-blue-600 mx-auto"></i>
          <h3 className="text-xl font-semibold mt-4">Birthday Surprises</h3>
          <p className="mt-2">Surprise your loved ones with timed messages and virtual gifts.</p>
        </div>
      </div>

      {/*Testimonials*/}
      <div className="bg-gray-100 p-8 py-28 mx-[-1rem]">
        <h2 className="text-center text-3xl font-semibold">Hear From Our Users</h2>
        <div className="flex flex-wrap justify-center items-center mt-8">
          <div className="m-4 bg-white p-6 shadow-lg rounded-lg max-w-md">
            <blockquote className="italic">"It's not just an app, it's a way to bridge generations. Love it!"
            </blockquote>
            <p className="mt-4 font-semibold">- Hugh Jass</p>
          </div>
          <div className="m-4 bg-white p-6 shadow-lg rounded-lg max-w-md">
            <blockquote className="italic">"This app helped our family stay connected through all the ups and downs of
              the last year. Highly recommend it!"
            </blockquote>
            <p className="mt-4 font-semibold">- Mike Litoris</p>
          </div>
          <div className="m-4 bg-white p-6 shadow-lg rounded-lg max-w-md">
            <blockquote className="italic">"Our family loves the birthday capsule feature. It's become a beautiful
              tradition for us!"
            </blockquote>
            <p className="mt-4 font-semibold">- Ben Dover</p>
          </div>
        </div>
      </div>

      <footer className="text-center p-4 mt-14 text-gray-600">
        © 2024 Family Time Capsule. All rights reserved.
      </footer>
    </div>
  );
}

export default Home;
