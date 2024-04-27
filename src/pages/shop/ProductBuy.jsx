import React from 'react'
import { Modal, Select } from '@mui/material';
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
const ProductBuy = ({ modalOpen, handleClose }) => {
    return (
        <Modal open={modalOpen} onClose={handleClose}>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:w-[60rem] w-[90vw] h-[600px] bg-white shadow-lg p-5 rounded-lg ">
                <div>
                    <div className='flex justify-between items-center'>
                        <Splide
                            options={{
                                width: "60%",
                                perPage: 1,
                                arrow: false,
                                pagination: false,
                                drag: "free",
                                gap: "2rem",
                                mediaQuery: "max",
                                breakpoints: {

                                    1200: {
                                        perPage: 1,
                                    },

                                },
                            }}
                        >
                            <SplideSlide
                                className="min-h-[15rem] min-w-[15rem] rounded-xl overflow-hidden transition-transform duration-300 ease-in-out transform scale-100 hover:scale-105 bg-[#0b6e4f] flex items-center justify-center  cursor-pointer"
                            >
                                <img
                                    src="../../../public/img/shop/album.jpg"
                                    alt="product"
                                    className="w-full h-[400px] rounded-lg"
                                />

                            </SplideSlide>
                            <SplideSlide
                                className="min-h-[15rem] min-w-[15rem] rounded-xl overflow-hidden transition-transform duration-300 ease-in-out transform scale-100 hover:scale-105 bg-[#0b6e4f] flex items-center justify-center  cursor-pointer"
                            >
                                <img
                                    src="../../../public/img/shop/album2.JPG"
                                    alt="product"
                                    className="w-full h-[400px] rounded-lg"
                                />
                            </SplideSlide>
                            <SplideSlide
                                className="min-h-[15rem] min-w-[15rem] rounded-xl overflow-hidden transition-transform duration-300 ease-in-out transform scale-100 hover:scale-105 bg-[#0b6e4f] flex items-center justify-center  cursor-pointer"
                            >
                                <img
                                    src="../../../public/img/shop/album3.JPG"
                                    alt="product"
                                    className="w-full h-[400px] rounded-lg"
                                />
                            </SplideSlide>
                            <SplideSlide
                                className="min-h-[15rem] min-w-[15rem] rounded-xl overflow-hidden transition-transform duration-300 ease-in-out transform scale-100 hover:scale-105 bg-[#0b6e4f] flex items-center justify-center  cursor-pointer"
                            >
                                <img
                                    src="../../../public/img/shop/album4.JPG"
                                    alt="product"
                                    className="w-full h-[400px] rounded-lg"
                                />
                            </SplideSlide>
                        </Splide>
                        <div className='flex flex-col gap-5'>
                            <input type='Number' placeholder='Quantity' className='w-[20rem] h-12 p-2 mt-5 border-2 border-primary rounded-lg' />
                            <p className='text-primary'>Size:</p>
                            <select className='w-[20rem] h-12 rounded-lg border-primary border-2' placeholder='Size'>
                                <option>Small</option>
                                <option>Medium</option>
                                <option>Large</option>
                            </select>
                            <button className='bg-primary text-surface-mid-light w-[20rem] h-12 rounded-lg mt-5'>Add to cart</button>

                        </div>


                    </div>
                    <div className='p-5 w-[8rem] h-[8rem] flex items-center  border-2 border-dashed border-primary mt-5 cursor-pointer'>
                        <AddPhotoAlternateIcon fontSize='large' className='text-primary  mx-auto' />
                    </div>
                </div>
                <div>
                </div>
            </div>
        </Modal>
    )
}

export default ProductBuy