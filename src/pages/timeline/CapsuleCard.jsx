import React, { useState, useEffect } from 'react';
import CapsuleOpenModal from './CapsuleOpenModal';


const CapsuleCard = ({ heading, subHeading, targetDate, dateCreated }) => {
    const [timeLeft, setTimeLeft] = useState('');
    const [modalOpen, setModalOpen] = useState(false);
    const handleClose = () => setModalOpen(false);
    const handleOpen = () => setModalOpen(true);
    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date();
            const target = new Date(targetDate);
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
    }, [targetDate]);
    return (
        <>
            <div className='transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl flex flex-col gap-y-2 border shadow-md rounded-xl p-4 max-w-[40rem] cursor-pointer'
                onClick={handleOpen}>
                <div className='text-secondary font-bold text-lg border-b'>{heading}</div>
                <div className='text-sm text-gray-700'>{subHeading}</div>
                <p className='text-purple-500 font-bold'>Date Created: {dateCreated?.split("T")[0]}</p>
                <p className='text-primary font-bold '>Date to be oppened: {targetDate?.split("T")[0]}</p>
                <div className='mt-2 text-red-500 font-semibold text-center'>Time left: {timeLeft}</div>
            </div>
            {modalOpen && <CapsuleOpenModal heading={heading} subHeading={subHeading} targetDate={targetDate} dateCreated={dateCreated} modalOpen={modalOpen} handleClose={handleClose} timeLeft={timeLeft} />}
        </>
    );
}

export default CapsuleCard

