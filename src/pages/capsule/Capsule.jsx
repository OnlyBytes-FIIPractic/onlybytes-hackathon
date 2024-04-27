import React, { useState } from 'react'
import img from "../../../public/img/capsule_image.png"
import { Card } from "@material-tailwind/react";
import { IconButton, Typography } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
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
        if (active === images.length) return;
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
            <Card className="mx-3 -mt-48 mb-6 lg:mx-4 bg-surface-darkest">

                <div class="columns-1 gap-2 lg:gap-4 sm:columns-2 lg:columns-3 xl:columns-4 [&>img:not(:first-child)]:mt-5 lg:[&>img:not(:first-child)]:mt-8">
                    {images.slice((active - 1) * 9, active * 9).map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt="gallery"
                        />
                    ))}

                </div>
                <div className="flex items-center gap-8 mx-auto mt-10 mb-10">
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
                        <strong className="text-gray-900">10</strong>
                    </Typography>
                    <IconButton
                        size="sm"
                        variant="outlined"
                        onClick={next}
                        disabled={active === 10}
                    >
                        <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
                    </IconButton>
                </div>
            </Card>
        </>
    )
}

export default Capsule