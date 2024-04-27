import React, { useState } from 'react'
import img from "../../../public/img/capsule_image.png"
import { Card } from "@material-tailwind/react";
import { IconButton, Typography } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import Example from './Example';

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
const Capsule = () => {
    const [active, setActive] = useState(1);

    const next = () => {
        if (active === Math.ceil(images.length / 6)) return; // Assuming 6 images per page
        setActive(active + 1);
    };

    const prev = () => {
        if (active === 1) return;
        setActive(active - 1);
    };

    return (
        <>
            <div className="relative mt-8 h-72 w-full overflow-hidden rounded-xl bg-surface-dark">
                <div className="absolute inset-0 h-full w-full" />
            </div>
            <div className='flex row justify-center'>
                <Card className=" border-3 border-brown-100/50  mx-3 p-6 -mt-[17rem] mb-6 lg:mx-4 shadow-2xl">
                    <div className="grid grid-cols-4 gap-4">
                        {images.slice((active - 1) * 8, active * 8).map((image, index) => (
                            <div key={index} className="w-[10rem] rounded-md shadow-xl overflow-hidden">
                                <img
                                    src={image}
                                    alt="gallery"
                                    className='w-full h-full object-cover'
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
                    <h1 className='italic mt-4 text-2xl'>Your memories are here!</h1>
                    <p className='italic mt-10'>We've kept our promise! Now, prepare to be enthralled by the treasure trove we've created just for you. Take a heartfelt journey through your life's most precious moments, shared with your beloved family. Each memory, a gem, waiting to be discovered and cherished once more. So you received:</p>
                   
                    <ul class="list-disc list-inside mt-6"> 
                        <li class="font-semibold italic">Your photo album containing memories starting from the moment you started the capsule</li>
                         <li class="font-semibold italic">A video slideshow we made just for you</li> 
                    </ul>
                    <img
                        src={images[3]}
                        alt="gallery"
                        className=' object-cover w-[25rem] mt-6 rounded-md'
                    >
                    </img>
                </Card>
                <div>
                <Player
      playsInline
      poster="/assets/poster.png"
      src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
    />
                </div>
            </div>
        </>
    );
}

export default Capsule;