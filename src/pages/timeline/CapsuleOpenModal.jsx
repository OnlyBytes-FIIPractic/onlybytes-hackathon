import React from 'react'
import { Modal } from '@mui/material';

const UnlockButton = ({ timeLeft, onClick }) => {
    const isActive = timeLeft === "Time is up!";

    return (
        <button
            className={`mt-5 mx-auto p-2 rounded-lg font-bold text-lg transition-all duration-300
                        ${isActive ? "bg-primary hover:bg-secondary text-white" : "bg-red-500 text-white cursor-not-allowed"}`}
            onClick={isActive ? onClick : undefined}
            disabled={!isActive}
        >
            {isActive ? "Unlock Capsule" : `Unlock in: ${timeLeft}`}
        </button>
    );
};

const CapsuleOpenModal = ({ heading, subHeading, targetDate, dateCreated, modalOpen, handleClose, timeLeft }) => {
    const handleUnlock = () => {
        console.log("Capsule has been unlocked!");
    };
    return (
        <>
            <Modal open={modalOpen} onClose={handleClose}>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:w-[45rem] w-[90vw] bg-surface-darkest shadow-lg p-5 rounded-lg">
                    <div className='flex flex-col gap-6'>
                        <div>
                            <div className='flex justify-between'>
                                <p className='text-purple-500 font-bold'>Date Created: {dateCreated?.split("T")[0]}</p>
                                <p className='text-primary font-bold '>Date to be oppened: {targetDate?.split("T")[0]}</p>
                            </div>
                            <img src="../../../public/img/capsule_image.png" alt="placeholder" className='mx-auto w:[15rem] h:[15rem] md:w-[20rem] md:h-[20rem] mt-8' />

                        </div>
                        <UnlockButton timeLeft={timeLeft} onClick={handleUnlock} />

                    </div>

                </div>
            </Modal>
        </>
    )
}

export default CapsuleOpenModal