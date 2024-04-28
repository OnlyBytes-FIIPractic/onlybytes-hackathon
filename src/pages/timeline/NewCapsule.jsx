import React, { useState, useEffect } from 'react'
import CapsuleImage from "../../../public/img/capsule2.png"
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AddCapsuleModal from './AddCapsuleModal';

const NewCapsule = ({ timeToCreate }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [timeLeft, setTimeLeft] = useState('');

    const handleClose = () => setModalOpen(false);
    const handleOpenCapsule = () => setModalOpen(true);
    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date();
            const target = new Date(timeToCreate);
            const difference = target - now;

            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((difference / 1000 / 60) % 60);
            const seconds = Math.floor((difference / 1000) % 60);

            if (difference > 0) {
                setTimeLeft(`${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`);
            } else {
                setTimeLeft('Time is up!');
                clearInterval(timer);
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [timeToCreate]);
    return (
        <>
            <div className='mt-7 mx-auto w-[40rem] h-[17rem] transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg flex flex-col gap-y-2 border-2 border-dashed shadow-md rounded-xl p-4 max-w-[40rem] cursor-pointer  hover:shadow-primary'
                onClick={handleOpenCapsule}>
                <div className='flex items-center gap-10 mx-auto my-auto'>
                    <img src={CapsuleImage} alt="capsule" className='w-[12rem] h-[13rem] mx-auto my-auto ' />
                    <div className='flex flex-col items-center gap-3'>
                        <p>
                            <span className='text-primary font-bold text-lg'>Create a new capsule</span>
                        </p>
                        <AddCircleIcon className='text-primary' fontSize='large' />
                    </div>
                </div>
            </div>
            {modalOpen && <AddCapsuleModal modalOpen={modalOpen} handleClose={handleClose} timeLeft={timeLeft} />}
        </>
    )
}

export default NewCapsule