import React, { Fragment, useEffect, useState } from 'react'
import CapsuleCard from './CapsuleCard'
import { Typography } from '@material-tailwind/react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const capsulesArr = [
    {
        id: 1,
        heading: "Event 1",
        subHeading: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
        dateCreated: "2020-01-01T00:00:00",
        targetDate: "2023-01-01T00:00:00",
        open: false
    },
    {
        id: 2,
        heading: "Event 2",
        subHeading: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
        dateCreated: "2023-01-01T00:00:00",
        targetDate: "2028-01-01T00:00:00",
        open: false

    },
    {
        id: 3,
        heading: "Event 3",
        subHeading: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
        dateCreated: "2024-01-01T00:00:00",
        targetDate: "2029-01-01T00:00:00",
        open: false

    },
    {
        id: 4,
        heading: "Event 4",
        subHeading: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
        dateCreated: "2030-01-01T00:00:00",
        targetDate: "2035-01-01T00:00:00",
        open: false

    },
]

const Timeline = ({ }) => {
    const [capsules, setCapsules] = useState(capsulesArr);
    useEffect(() => {
        AOS.init();
    }, [])

    const handleOpenCapsule = (id) => {
        console.log(id);
        const updatedCapsules = capsules.map(capsule => {
            if (capsule.id === id) {
                return { ...capsule, open: true }
            }
            return capsule;
        })
        setCapsules(updatedCapsules);
    };


    return (
        <div className='flex flex-col gap-y-3 w-full my-4'>
            <Typography variant="h1" className='text-primary text-center'>Family Timeline</Typography>
            <p className='text-center text-primary font-bold'>2015</p>
            <Circle />
            {capsules && capsules.map((capsule, index) => (
                <Fragment key={index}>
                    <div className='grid grid-cols-[1fr_auto_1fr] gap-x-2 items-center mx-auto'>
                        {index % 2 == 0 ? (
                            <div data-aos="fade-right">
                                <CapsuleCard capsuleData={capsule} handleOpenCapsule={handleOpenCapsule} />

                            </div>
                        ) :
                            (
                                <div></div>
                            )}
                        <Pillar />
                        {index % 2 != 0 ? (
                            <div data-aos="fade-left">
                                <CapsuleCard capsuleData={capsule} handleOpenCapsule={handleOpenCapsule} />
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