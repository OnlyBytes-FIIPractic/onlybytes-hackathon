import React, { Fragment, useEffect, useState } from 'react'
import CapsuleCard from './CapsuleCard'
import { Typography } from '@material-tailwind/react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const capsulesArr = [
    {
        id: 1,
        heading: "Roots and Wings Capsule",
        subHeading: "The Roots and Wings Capsule celebrates the foundational values and the soaring achievements of the family. Filled with generational stories, cherished family recipes, and major milestones like graduations and first homes, this capsule captures the essence of what keeps the family grounded as well as what allows future generations to fly.",
        dateCreated: "2020-01-01T00:00:00",
        targetDate: "2023-01-01T00:00:00",
        open: false
    },
    {
        id: 2,
        heading: "Ancestral Anthology Capsule",
        subHeading: "Dedicated to the rich tapestry of the family's heritage, the Ancestral Anthology Capsule is a comprehensive collection of historical documents, vintage photographs, and oral histories. It serves as a bridge connecting current and future generations with their distant origins, offering insights into the family's roots spread across different cultures and continents.",
        dateCreated: "2023-01-01T00:00:00",
        targetDate: "2028-01-01T00:00:00",
        open: false

    },
    {
        id: 3,
        heading: "Festive Keepsake Capsule",
        subHeading: "The Festive Keepsake Capsule encapsulates the joy and spirit of family celebrations and traditions. From holiday decorations and snapshots of family reunions to videos of birthday parties and festive gatherings, this capsule preserves the laughter and love that define the family’s happiest moments together.",
        dateCreated: "2024-01-01T00:00:00",
        targetDate: "2029-01-01T00:00:00",
        open: false

    },
    {
        id: 4,
        heading: "Legacy of Love Capsule",
        subHeading: "This capsule is a heartfelt tribute to the enduring love and wisdom passed down through the family. It features letters of advice from older generations, wedding memorabilia, touching family vows, and poignant moments of family support and unity. The Legacy of Love Capsule is a treasure trove of emotional wealth, meant to inspire and guide the family through all of life’s ups and downs.",
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