import React, { useState } from 'react'
import {
    Card,
    Dialog,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";
import { IconButton, Typography } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import SlideshowGenerator from './Slideshow';
import { UserAuth } from "@/context/AuthContext.jsx";
import GiftAnimation from '../utils/GiftAnimation';
import img from './purple-and-blue-background-ajp62v7qahujohnv.jpg'


const images = [
    "https://source.unsplash.com/ztpUS4N1xhY",
    "https://source.unsplash.com/mPFSPqZOO7s",
    "https://source.unsplash.com/uPEnxrdSKIw",
    "https://source.unsplash.com/hFKZ5-OT9Ys",
    "https://source.unsplash.com/xoTt2fjs7d0",
    "https://source.unsplash.com/Vc2dD4l57og",
    "https://source.unsplash.com/hqnQWmIt3cY",
    "https://source.unsplash.com/NTGg2rtWDwg",
    "https://source.unsplash.com/uyX3qAQhZVA",
    "https://source.unsplash.com/LV-NvIcA-Gg",
    "https://source.unsplash.com/0qnRfgnZIsI",
    "https://source.unsplash.com/mpwF3Mv2UaU",
    "https://source.unsplash.com/gfMWhkDCwYM",
    "https://source.unsplash.com/8KtqjrskUg8",
    "https://source.unsplash.com/qAaGXj-AOv4",
    "https://source.unsplash.com/Vc2dD4l57og",
    "https://source.unsplash.com/hqnQWmIt3cY",
    "https://source.unsplash.com/NTGg2rtWDwg",
    "https://source.unsplash.com/uyX3qAQhZVA",
    "https://source.unsplash.com/LV-NvIcA-Gg",
    "https://source.unsplash.com/0qnRfgnZIsI",
    "https://source.unsplash.com/mpwF3Mv2UaU",
    "https://source.unsplash.com/gfMWhkDCwYM",
    "https://source.unsplash.com/8KtqjrskUg8",
    "https://source.unsplash.com/qAaGXj-AOv4",
    "https://source.unsplash.com/0qnRfgnZIsI",
    "https://source.unsplash.com/mpwF3Mv2UaU",
    "https://source.unsplash.com/gfMWhkDCwYM",
    "https://source.unsplash.com/8KtqjrskUg8",
    "https://source.unsplash.com/qAaGXj-AOv4",
    "https://source.unsplash.com/Vc2dD4l57og",
    "https://source.unsplash.com/hqnQWmIt3cY",
    "https://source.unsplash.com/NTGg2rtWDwg",
    "https://source.unsplash.com/uyX3qAQhZVA",
    "https://source.unsplash.com/LV-NvIcA-Gg",
    "https://source.unsplash.com/0qnRfgnZIsI",
    "https://source.unsplash.com/mpwF3Mv2UaU",
    "https://source.unsplash.com/gfMWhkDCwYM",
    "https://source.unsplash.com/8KtqjrskUg8",
    "https://source.unsplash.com/qAaGXj-AOv4",
];

const tippingData = {
    user1: {
      username: 'John Doe',
      amountTipped: 50
    },
    user2: {
      username: 'Alice Smith',
      amountTipped: 30
    },
    user3: {
      username: 'Bob Johnson',
      amountTipped: 100
    },
    user4: {
        username: 'John Bobson',
        amountTipped: 176
    }
  };

const BirthdayCapsule = () => {
    const [active, setActive] = useState(1);
    const [open, setOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(images[0]);
    const { user } = UserAuth();
    const [boxClicked, setBoxClicked] = useState(false);

    const handleOpen = (image) => {
        setCurrentImage(image);
        setOpen(!open);
    }

    const next = () => {
        if (active === Math.ceil(images.length / 6)) return;
        setActive(active + 1);
    };

    const prev = () => {
        if (active === 1) return;
        setActive(active - 1);
    };

    const handleBoxClick = () => {
        setBoxClicked(true);
    };


    return (
        <>
            <div className="relative mt-8 h-72 w-full overflow-hidden rounded-xl bg-purple-400">
                <div className="absolute inset-0 h-full w-full" />
            </div>
            {boxClicked ?
                (
                    <div className='flex flex-col justify-center items-center'>
                        <div className='flex flex-row justify-center w-[80vw]'>
                            <Card className=" border-3 border-brown-100/50  mx-3 p-6 -mt-[17rem] mb-6 lg:mx-4 shadow-2xl">
                                <div className="grid grid-cols-4 gap-4">
                                    {images.slice((active - 1) * 8, active * 8).map((image, index) => (
                                        <div key={index} className="w-[10rem] rounded-md shadow-xl overflow-hidden">
                                            <img
                                                src={image}
                                                alt="gallery"
                                                className='w-full h-full object-cover'
                                                onClick={() => handleOpen(image)}
                                            />
                                        </div>
                                    ))}
                                </div>
                                <div className="flex items-center gap-4 mx-auto mt-10 mb-10">
                                    <IconButton
                                        size="sm"
                                        variant="outlined"
                                        onClick={prev}
                                        disabled={active === 1}
                                    >
                                        <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" />
                                    </IconButton>
                                    <Typography color="gray" className="font-normal">
                                        Page <strong className="text-gray-900">{active}</strong> of{" "}
                                        <strong className="text-gray-900">{Math.ceil(images.length / 10)}</strong>
                                    </Typography>
                                    <IconButton
                                        size="sm"
                                        variant="outlined"
                                        onClick={next}
                                        disabled={active === Math.ceil(images.length / 10)}
                                    >
                                        <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
                                    </IconButton>
                                </div>
                            </Card>
                            <Card className="flex items-center border-3 border-brown-100/50 mx-3 p-10 -mt-[17rem] mb-6 lg:mx-4 w-[25rem]">
                                <h1 className='italic mt-4 text-2xl'>Happy Birthday! </h1>
                                <h1>Your memories are here!</h1>
                                <p className='italic mt-10'>We've kept our promise! Now, prepare to be enthralled by the treasure trove we've created just for you. Take a heartfelt journey through your life's most precious moments, shared with your beloved family. Each memory, a gem, waiting to be discovered and cherished once more. So you received:</p>

                                <ul class="list-disc list-inside mt-8 mb-8">
                                    <li class="font-semibold italic">Your photo album containing memories starting from the moment you started the capsule</li>
                                    <li class="font-semibold italic">A video slideshow we made just for you</li>
                                    <li class="font-semibold italic">Gift Cards</li>
                                    <li class="font-semibold italic">Received Money</li>
                                </ul>
                                <SlideshowGenerator userId={user.uid} />
                            </Card>
                        </div>
                        <div className='flex flex-col justify-center items-center'>

                        <Card className="flex items-center justify-center border-3 border-brown-100/50 mx-3 p-10 mb-6 lg:mx-4 w-[76vw] overflow-x-auto">
                                <h1 className='italic text-bold text-xl text-center mb-4'>Gift Cards</h1>
                                <div className='flex'>
                                {Object.entries(tippingData).map(([userId, { username, amountTipped }]) => (
                                    <Card key={userId} className='mr-4 p-4'>
                                    <video
                                        src="https://firebasestorage.googleapis.com/v0/b/onlybytes-hacakthon.appspot.com/o/videos%2Fvideo.webm?alt=media"
                                        width="400"
                                        height="300"
                                        className='rounded-md'
                                        controls
                                    ></video>
                                    <p className='text-center mt-3 font-bold'>{username}</p>
                                    <p className='text-center mt-3'>Tipped: {amountTipped}$</p>
                                    </Card>
                                ))}
                                </div>
                            </Card>
                          
                        </div>
                    </div>) : (
                    <div className='flex flex-col justify-center items-center -mt-[17rem]'>
                        <Card className="flex items-center justify-center border-3 border-brown-100/50 mx-3 p-10 mb-6 lg:mx-4 w-[80vw]">
                            <GiftAnimation onBoxClick={handleBoxClick} />
                        </Card>
                    </div>)}
            <Dialog className='w-[600px] h-[700px]' open={open} handler={handleOpen}>
                <DialogBody>
                    <img
                        className='w-full h-[550px] object-fit'
                        src={currentImage}
                        alt="gallery"
                    />
                </DialogBody>
                <DialogFooter>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum in voluptatem enim obcaecati corrupti nisi libero soluta quaerat sapiente officia animi error rem, nemo officiis magnam sunt! Recusandae, soluta vel.</p>
                    <p className='font-bold text-primary mt-4'>12.10.2025</p>
                </DialogFooter>
            </Dialog>
        </>
    );
}

export default BirthdayCapsule;