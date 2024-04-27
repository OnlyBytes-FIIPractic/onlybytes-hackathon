import React from 'react'

const ContactPlan = ({ }) => {
    return (
        <div className='w-[900px]'>

            <div className="bg-white border border-indigo-600 border-opacity-10   rounded-md shadow-xl cursor-pointer w-full ">
                <div className='bg-white border border-indogo-600 border-opacity-10 rounded-md shadow-xl cursor-pointer  w-full '>
                    <div className='px-6 py-12 border-b-2 border-gray-200'>
                        <p className='text-3xl font-semibold text-center mb-4'>Contact Us</p>
                        <div className='flex justify-center items-center'>
                            <div className='flex items-start'>
                                <p className='text-4xl font-bold text-primary'>$</p>
                                <p className='text-6xl font-bold'>?</p>
                            </div>
                            <p className='text-2xl text-gray-400'>/month</p>
                        </div>
                    </div>
                    <div className='p-12 bg-gray-100 min-h-[400px]  w-full '>
                        <p className='mt-4 mb-4 text-justify'>Every family is unique, and so are your memories and milestones. That's why we offer custom plans designed to fit your family's specific desires and requirements. Whether you're looking to preserve the precious memories of family reunions, birthdays, anniversaries, or any special moment in between, we are here to ensure that your digital time capsule or family memorabilia is just as special as your family itself.</p>
                        <input type="text" placeholder="Name" className='w-full py-4 px-8 rounded-lg text-lg whitespace-nowrap bg-white text-indigo-600 hover:bg-gray-50 focus:outline-none focus:ring-4 focus:ring-indigo-600 focus:ring-opacity-50 transition-all' />
                        <input type="email" placeholder="Email" className='mt-4 w-full py-4 px-8 rounded-lg text-lg whitespace-nowrap bg-white text-indigo-600 hover:bg-gray-50 focus:outline-none focus:ring-4 focus:ring-indigo-600 focus:ring-opacity-50 transition-all' />
                        <textarea placeholder="Message" className='mt-4 w-full py-4 px-8 rounded-lg text-lg whitespace-nowrap bg-white text-indigo-600 hover:bg-gray-50 focus:outline-none focus:ring-4 focus:ring-indigo-600 focus:ring-opacity-50 transition-all' />
                        <button className='mt-12 w-full py-4 px-8 rounded-lg text-lg whitespace-nowrap bg-primary text-white hover:bg-white hover:text-primary focus:outline-none focus:ring-4 focus:ring-indigo-600 focus:ring-opacity-50 transition-all'>
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactPlan