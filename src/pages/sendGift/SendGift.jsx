import React, { useState } from 'react';
import ImageIcon from '@mui/icons-material/Image';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import WebcamRecord from './WebcamRecord';
import { toast } from 'react-toastify';


const SendGift = () => {
    const [message, setMessage] = useState('');
    const [photo, setPhoto] = useState(null);
    const [amount, setAmount] = useState('50.00');
    const [sendMoney, setSendMoney] = useState(false);
    const [webcamOpen, setWebcamOpen] = useState(false);

    const handlePhotoChange = (event) => {
        setPhoto(event.target.files[0]);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Here you can handle the submission of the gift form
        console.log('Message:', message);
        console.log('Photo:', photo);
        if (sendMoney) {
            console.log('Amount:', amount);
        }

        // Reset the form
        setMessage('');
        setPhoto(null);
        setAmount('50.00');
        setSendMoney(false);
        toast.success('Gift sent successfully!');


    };
    const handleOpenCamera = (event) => {
        event.preventDefault();
        setWebcamOpen(prev => !prev)
    }

    return (
        <div className="container mx-auto py-6">
            <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Send a gift to Carl:</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block mb-2">Message:</label>
                        <textarea className="w-full h-20 py-2 px-4 rounded-lg border border-gray-300 mb-4 resize-none" placeholder="Happy birthday!" value={message} onChange={(e) => setMessage(e.target.value)} />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2">Photo:</label>
                        <label htmlFor="file-upload" className="cursor-pointer">
                            <div className="border border-gray-300 rounded-lg p-4 flex items-center">
                                <ImageIcon className="w-8 h-8 text-primary mr-2" /> {/* ImageIcon */}
                                {photo && (
                                    <p className="text-gray-600">Selected Photo: {photo.name}</p>
                                )}
                            </div>
                        </label>
                        <input id="file-upload" type="file" className="hidden" onChange={handlePhotoChange} />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2">Would you like to include a monetary gift? :) </label>
                        <input type="checkbox" className="mr-2 text-primary" checked={sendMoney} onChange={(e) => setSendMoney(e.target.checked)} />
                        <span className="text-gray-600">Sure, I'm happy to send some money.</span>
                    </div>
                    {sendMoney && (
                        <div className="mb-4">
                            <label className="block mb-2">Amount:</label>
                            <div className="border border-gray-300 rounded-lg p-4 flex items-center">
                                <AttachMoneyIcon className="w-8 h-8 text-primary mr-2" /> {/* AttachMoneyIcon */}
                                <input
                                    type="number"
                                    step="0.01"
                                    className="w-full py-2 px-4 rounded-lg border border-gray-300"
                                    value={amount}
                                    onChange={(e) => setAmount(parseFloat(e.target.value).toFixed(2))}
                                />
                            </div>
                        </div>
                    )}
                </form>
                <button className="w-full bg-primary text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300 mt-4" onClick={handleOpenCamera}>Record a video message</button>
                {webcamOpen && <WebcamRecord />}
                <button className="mt-4 w-full bg-primary text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300" onClick={handleSubmit}>Send Gift</button>

            </div>
        </div>
    );
};

export default SendGift;