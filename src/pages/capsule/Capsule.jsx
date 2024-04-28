import React, { useState } from 'react'
import {
    Card,
    Dialog,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";
import { IconButton, Typography } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import SlideshowBirthday from './SlideshowBirthday';
import { UserAuth } from "@/context/AuthContext.jsx";


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
    const [open, setOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(images[0]);
    const [storage, setStorage] = useState([]);
    const { user } = UserAuth();
    const [fileName, setFileName] = useState("");
    const [date, setDate] = useState("");
    const [location, setLocation] = useState("");
    const [author, setAuthor] = useState("");

    const handleOpen = (image) => {
        setCurrentImage(image);
        setOpen(!open);
    }

    const addToStorage = () => {
        const newItem = {
            fileName,
            date,
            location,
            author
        };
        setStorage([...storage, newItem]);
        // Clear input fields
        setFileName("");
        setDate("");
        setLocation("");
        setAuthor("");
    };

    const next = () => {
        if (active === Math.ceil(images.length / 6)) return;
        setActive(active + 1);
    };

    const prev = () => {
        if (active === 1) return;
        setActive(active - 1);
    };

    const storageData = [
        {
            fileName: "familyphoto.jpg",
            author: "John Doe",
            location: "New York",
            date: "2024-04-28"
        },
        {
            fileName: "johnnykid.png",
            author: "Jane Smith",
            location: "Los Angeles",
            date: "2024-04-29"
        },
        {
            fileName: "letterforme.docx",
            author: "Michael Johnson",
            location: "Chicago",
            date: "2024-04-30"
        },
        {
            fileName: "myfile.txt",
            author: "Emily Davis",
            location: "San Francisco",
            date: "2024-05-01"
        },
        {
            fileName: "myfirsthackathon.txt",
            author: "William Brown",
            location: "Houston",
            date: "2024-05-02"
        },
        {
            fileName: "us.jpg",
            author: "Olivia Wilson",
            location: "Miami",
            date: "2024-05-03"
        }
    ];

    return (
        <>
            <div className="relative mt-8 h-72 w-full overflow-hidden rounded-xl bg-surface-dark">
                <div className="absolute inset-0 h-full w-full" />
            </div>
            <div className='flex flex-col justify-center items-center'>
                <div className='flex row justify-center'>
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
                        <h1 className='italic mt-4 text-2xl'>Your memories are here!</h1>
                        <p className='italic mt-10'>We've kept our promise! Now, prepare to be enthralled by the treasure trove we've created just for you. Take a heartfelt journey through your life's most precious moments, shared with your beloved family. Each memory, a gem, waiting to be discovered and cherished once more. So you received:</p>

                        <ul class="list-disc list-inside mt-8 mb-8">
                            <li class="font-semibold italic">Your photo album containing memories starting from the moment you started the capsule</li>
                            <li class="font-semibold italic">A video slideshow we made just for you</li>
                        </ul>
                        <SlideshowBirthday userId={user.uid} />
                    </Card>
                </div>
                <Card className='w-[76vw] flex justify-center items-center p-4'>
            <h1 className='my-2 font-bold text-2xl mb-8'>Storage</h1>
            <div className="flex justify-between w-full border-t border-gray-200 py-4">
                <p className="w-1/4 font-bold">File</p>
                <p className="w-1/4 font-bold">Author</p>
                <p className="w-1/4 font-bold">Location</p>
                <p className="w-1/4 font-bold">Date</p>
            </div>
            {storageData.map((item, index) => (
                <div key={index} className="flex justify-between w-full border-t border-gray-200 py-4 px-6">
                    <p className="w-1/4 text-sm">{item.fileName}</p>
                    <p className="w-1/4 text-sm">{item.author}</p>
                    <p className="w-1/4 text-sm">{item.location}</p>
                    <p className="w-1/4 text-sm">{item.date}</p>
                    <i className="fa-solid fa-download mr-2 hover:text-purple-200 cursor-pointer"/>

                </div>
            ))}
        </Card>
            </div>
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

export default Capsule;