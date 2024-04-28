import React from 'react'
import PlanCard from './PlanCard'
import ContactPlan from './ContactPlan'
import GiftAnimation from '../utils/GiftAnimation'
const plans = [
    {
        name: 'Growth',
        price: '9',
        features: [
            '5 gb of aditional storage',

        ],
        featured: false
    },
    {
        name: 'Pro',
        price: '39',
        features: [
            '25 gb of aditional storage',
            'Shop discounts',
        ],
        featured: true
    },
    {
        name: 'Enterprise',
        price: '99',
        features: [
            '100 gb of aditional storage',
            'Shop discounts',
            'Premium support',
            'Discount for member adding'
        ],
        featured: false
    },

]
const Plan = () => {
    return (
        <div className='flex flex-col w-full  items-center'>
            <div className="w-[80%] bg-gray-200 rounded-full dark:bg-gray-700 mt-10">
                <div className="bg-primary text-base font-medium text-white text-center p-0.5 leading-none rounded-full" style={{ width: "60%" }}> 60%</div>
            </div>
            <div>
                <p className='font-bold mt-2'>You've used 1,2 GB out of 2 GB (60%)</p>
            </div>
            <div className="h-full px-6 py-12 lg:flex lg:justify-center lg:items-center mt-10">
                <div className="grid lg:grid-cols-3 gap-12 lg-gap-0">
                    {plans.map((plan, index) => (
                        <div className={`w-full max-w-md mx-auto ${plan.featured
                            ? 'order-first lg:order-none lg:scale-110 lg:transform lg:z-10'
                            : 'lg:transform lg:scale-90'
                            }`}>
                            <PlanCard {...plan} key={index} />
                        </div>
                    ))}
                </div>
            </div>
            <div className='mt-20'>
                <ContactPlan />
            </div>

        </div>
    )
}

export default Plan