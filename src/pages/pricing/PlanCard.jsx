import React from 'react'

const PlanCard = ({ name, price, features, featured = false }) => {
    return (
        <div className={`bg-white border border-indigo-600 border-opacity-10   rounded-md shadow-xl cursor-pointer relative ${featured ? "border-2" : "border border-opacity-10"
            }`}>
            {featured ? (
                <span className='bg-primary text-white px-6 py-1 rounded-full uppercase text-sm font-semibold whitespace-nowrap absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>Most popular</span>
            ) : null}

            <div className='bg-white border border-indogo-600 border-opacity-10 rounded-md shadow-xl cursor-pointer'>
                <div className='px-6 py-12 border-b-2 border-gray-200'>
                    <p className='text-3xl font-semibold text-center mb-4'>{name}</p>
                    <div className='flex justify-center items-center'>
                        <div className='flex items-start'>
                            <p className='text-4xl font-bold text-primary'>$</p>
                            <p className='text-6xl font-bold'>{price}</p>
                        </div>
                        <p className='text-2xl text-gray-400'>/month</p>
                    </div>
                </div>
                <div className='p-12 bg-gray-100 min-h-[400px]'>
                    <ul className='space-y-3'>
                        {
                            features.map((feature, index) => (
                                <li key={index} className='flex items-center space-x-4'>
                                    <span className='text-2xl text-primary'>✓</span>
                                    <p className='text-lg'>{feature}</p>
                                </li>
                            ))
                        }

                    </ul>

                    <button className='mt-12 w-full py-4 px-8 rounded-lg text-lg whitespace-nowrap bg-primary text-white hover:bg-white hover:text-primary focus:outline-none focus:ring-4 focus:ring-indigo-600 focus:ring-opacity-50 transition-all'>
                        Get Started
                    </button>

                </div>
            </div>
        </div>
    )
}

export default PlanCard