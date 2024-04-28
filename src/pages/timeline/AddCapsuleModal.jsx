import React from 'react';
import { Modal } from '@mui/material';
import { Typography } from '@material-tailwind/react';


const AddCapsuleModal = ({ modalOpen, handleClose, timeLeft }) => {
    return (
        <Modal open={modalOpen} onClose={handleClose}>
            <div className="flex justify-center items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="flex flex-col items-center w-[26rem]   p-5 rounded-lg">
                    <img src="../../../public/img/capsule_image.png" alt="capsule" className='w-full h-auto mx-auto mt-10' />
                    <div className='p-4 bg-red-600 rounded-md'>
                        <p className='text-white font-semibold'>{timeLeft}</p>

                    </div>
                </div>
                <div className="md:w-[45rem] w-[90vw] h-[600px] bg-surface-darkest shadow-lg p-5 rounded-lg ml-5">
                    <Typography variant="h1" className='text-primary text-center'>Create a new capsule</Typography>
                    <div className='flex flex-col items-center w-full mx-auto mt-10 gap-2'>
                        <p className='text-secondary font-bold underline'>Currently you have 120 memories stored in this capsule</p>

                        <div className='flex flex-col'>
                            <p className='text-primary font-semibold'>Pick a range to open:</p>
                            <select className='w-[20rem] h-12 rounded-lg border-primary border-2'>
                                <option value="1">1 year from now</option>
                                <option value="2">3 years from now</option>
                                <option value="3">5 years from now</option>
                                <option value="3">10 years from now</option>
                            </select>
                        </div>
                        <div className='flex flex-col'>
                            <p className='text-primary font-semibold'>Enter capsule name:</p>
                            <input type="text" className='w-[20rem] h-12 rounded-lg border-primary border-2' />
                        </div>
                        <div className='flex flex-col'>
                            <p className='text-primary font-semibold'>Enter capsule description:</p>
                            <textarea className='w-[20rem] h-24 rounded-lg border-primary border-2' />
                        </div>
                        <button className='mt-5 mx-auto p-2 rounded-lg font-bold text-lg transition-all duration-300 bg-primary text-white opacity-50' disabled>Create Capsule</button>
                    </div>
                </div>
            </div>
        </Modal>
    )
}

export default AddCapsuleModal;
