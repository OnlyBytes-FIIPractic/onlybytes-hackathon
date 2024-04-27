import React from 'react'
import Product from './Product'
import { Card, Typography } from "@material-tailwind/react";

const Shop = () => {
  return (
    <div className="flex flex-wrap mx-auto w-full gap-2 mt-10 ">
      <div className='mx-auto  flex flex-col items-center'>
        <img className='rounded-lg w-[80rem] h-[40rem] mx-auto' src="../../../public/img/shop/shop_banner3.JPG" alt="shop" />
        <Typography variant='h1' className='text-primary p-4 border-t-4 border-t-primary w-full text-center mt-4'>Browse our products</Typography>

        <div className='flex mx-auto p-4 border-t-4 border-t-primary mt-4 gap-2'>
          <Product imgSrc={"../../../public/img/shop/album.jpg"} name="T-Shirt" price={40} />
          <Product imgSrc={"../../../public/img/shop/tshirt.JPG"} name="Puzzle" price={15} />
          <Product imgSrc={"../../../public/img/shop/cup.jpg"} name="Cup" price={5} />
          <Product imgSrc={"../../../public/img/shop/puzzle.jpg"} name="Puzzle" price={5} />
        </div>
      </div>

    </div>

  )
}

export default Shop