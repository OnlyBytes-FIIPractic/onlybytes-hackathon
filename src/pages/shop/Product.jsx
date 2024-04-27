import React, { useState } from 'react'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ProductBuy from './ProductBuy';
import { Modal } from '@mui/material';

const Product = ({ imgSrc, name, price }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const handleClose = () => setModalOpen(false);
    const handleOpen = () => setModalOpen(true);

    return (
        <>
            <div className='flex flex-col w-[20rem] h-[30rem] rounded-lg p-2 shadow-md cursor-pointer  hover:shadow-md hover:shadow-primary' onClick={handleOpen}>
                <img className='w-full h-[350px] rounded-lg' src={imgSrc} alt='product' />
                <div className='w-full px-[20px] pb-[27px] pt-2 flex flex-col'>
                    <span className='font-semibold text-[#0d1b39] text-[20px] my-[5px]'>
                        {name}
                    </span>
                    <div className='flex w-full items-center'>
                        <span className='font-semibold text-[22px] text-[#0D1B39]'>
                            ${price}
                        </span>
                        <AddCircleIcon className='ml-auto text-[#0D1B39]' fontSize='large' />
                    </div>
                </div>
            </div>
            {modalOpen && <ProductBuy modalOpen={modalOpen} handleClose={handleClose} />}
        </>
    )
}

export default Product