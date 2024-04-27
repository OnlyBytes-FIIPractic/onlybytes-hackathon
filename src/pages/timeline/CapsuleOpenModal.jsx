import React from 'react'
import { Modal } from '@mui/material';
import confetti from 'canvas-confetti';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const UnlockButton = ({ timeLeft, handleOpenCapsule, capsuleData }) => {
    const isActive = (timeLeft === "Time is up!" && capsuleData.open === false);
    const handleOpen = () => {
        handleOpenCapsule(capsuleData.id);
        confetti({
            particleCount: 200,
            spread: 100,
            origin: { y: 0.6 },
            zIndex: 1600
        });
        console.log(capsuleData.open)
        toast.success("Capsule Unlocked!");
    };
    return (
        <button
            className={`mt-5 mx-auto p-2 rounded-lg font-bold text-lg transition-all duration-300
                        ${isActive ? "bg-primary hover:bg-secondary text-white" : "bg-red-500 text-white cursor-not-allowed"}`}
            onClick={isActive ? handleOpen : undefined}
            disabled={!isActive || capsuleData.open}
        >
            {isActive ? "Unlock Capsule" : `${timeLeft}`}
        </button>
    );
};

const CapsuleOpenModal = ({ handleOpenCapsule, capsuleData, modalOpen, handleClose, timeLeft }) => {

    return (
        <>
            <Modal open={modalOpen} onClose={handleClose}>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:w-[45rem] w-[90vw] bg-surface-darkest shadow-lg p-5 rounded-lg">
                    <div className='flex flex-col gap-6'>
                        <div>
                            <div className='flex justify-between'>
                                <p className='text-purple-500 font-bold'>Date Created: {capsuleData.dateCreated?.split("T")[0]}</p>
                                <p className='text-primary font-bold '>Date to be oppened: {capsuleData.targetDate?.split("T")[0]}</p>
                            </div>
                            {capsuleData.open ? <Link to={"/dashboard/capsule"}><img src="../../../public/img/capsule_opened.png" alt="placeholder" className='mx-auto w:[15rem] h:[15rem] md:w-[20rem] md:h-[20rem] mt-8' /></Link> : <img src="../../../public/img/capsule_image.png" alt="placeholder" className='mx-auto w:[15rem] h:[15rem] md:w-[20rem] md:h-[20rem] mt-8' />}
                            {capsuleData.open ? <p className='text-primary text-center font-bold text-2xl mt-5'>Click on the capsule!</p> : <p className='text-primary text-center font-bold text-2xl mt-5'>Capsule Locked</p>}
                        </div>
                        <UnlockButton timeLeft={timeLeft} handleOpenCapsule={handleOpenCapsule} capsuleData={capsuleData} />
                    </div>

                </div>
            </Modal>
        </>
    )
}

export default CapsuleOpenModal