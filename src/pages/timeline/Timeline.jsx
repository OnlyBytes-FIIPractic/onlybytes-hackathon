import React, { Fragment, useEffect, useState } from 'react'
import CapsuleCard from './CapsuleCard'
import { Typography } from '@material-tailwind/react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const capsules = [
    {
        heading: "Event 1",
        subheading: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
        dateCreated: "2020-01-01T00:00:00",
        targetDate: "2023-01-01T00:00:00"
    },
    {
        heading: "Event 2",
        subheading: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
        dateCreated: "2023-01-01T00:00:00",
        targetDate: "2028-01-01T00:00:00"
    },
    {
        heading: "Event 3",
        subheading: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
        dateCreated: "2024-01-01T00:00:00",
        targetDate: "2029-01-01T00:00:00"
    },
    {
        heading: "Event 4",
        subheading: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
        dateCreated: "2030-01-01T00:00:00",
        targetDate: "2035-01-01T00:00:00"
    },
]

const Timeline = ({ }) => {
    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div className='flex flex-col gap-y-3 w-full my-4'>
            <Typography variant="h1" className='text-primary text-center'>Timeline</Typography>
            <p className='text-center text-primary font-bold'>2015</p>
            <Circle />
            {capsules.map((capsule, index) => (
                <Fragment key={index}>
                    <div className='grid grid-cols-[1fr_auto_1fr] gap-x-2 items-center mx-auto'>
                        {index % 2 == 0 ? (
                            <div data-aos="fade-right">
                                <CapsuleCard heading={capsule.heading} subHeading={capsule.subheading} targetDate={capsule.targetDate} dateCreated={capsule.dateCreated} />

                            </div>
                        ) :
                            (
                                <div></div>
                            )}
                        <Pillar />
                        {index % 2 != 0 ? (
                            <div data-aos="fade-left">
                                <CapsuleCard heading={capsule.heading} subHeading={capsule.subheading} targetDate={capsule.targetDate} dateCreated={capsule.dateCreated} />
                            </div>
                        ) :
                            (
                                <div></div>
                            )}

                    </div>
                    {index < (capsule.length - 1) && <Circle />}
                </Fragment>

            ))}
            <Circle />
            <p className='text-center text-primary font-bold'>2035</p>

        </div>
    )
}
const Circle = () => {
    return (
        <div className='bg-gradient-to-r from-primary to-secondary rounded-full w-4 h-4 bg-blue-500 mx-auto'></div>
    )
}
const Pillar = () => {
    return (
        <div className='bg-gradient-to-b from-primary to-secondary rounded-t-full rounded-b-full w-2 h-full bg-blue-500 mx-auto'></div>
    )
}


export default Timeline;