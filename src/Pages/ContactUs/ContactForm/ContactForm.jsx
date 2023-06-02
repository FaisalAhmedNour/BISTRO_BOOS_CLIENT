import { useState } from 'react';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        // You can send the form data to a server or perform any other actions
        console.log('Form submitted!');
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Message:', message);

        // Clear form fields
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
    };

    return (
        <form onSubmit={handleSubmit} className="w-[1320px] p-20 bg-[#F3F3F3] mx-auto">
            <div className='grid grid-cols-2 gap-10'>
                <div className="mb-4">
                    <label htmlFor="name" className="block mb-2 font-[600] text-xl text-gray-700">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder='Enter your name'
                        className="w-full px-3 py-2 placeholder-gray-400 border-none rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-base leading-10"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block mb-2 font-[600] text-xl text-gray-700">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='Enter your email'
                        className="w-full px-3 py-2 placeholder-gray-400 border-none rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-base leading-10"
                        required
                    />
                </div>
            </div>
            <div className="mb-4">
                <label htmlFor="phone" className="block mb-2 font-[600] text-xl text-gray-700">
                    Phone
                </label>
                <input
                    type="number"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                        placeholder='Enter your phone number'
                    className="w-full px-3 py-2 placeholder-gray-400 border-none rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-base leading-10"
                    required
                />
            </div>
            <div className="mb-4">
                <label htmlFor="message" className="block mb-2 font-[600] text-xl text-gray-700">
                    Message
                </label>
                <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                        placeholder='Write your message here'
                    className="w-full px-3 py-2 placeholder-gray-400 border-none rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-base"
                    rows="10"
                    required
                />
            </div>
            <button
                type="submit"
                className="px-8 py-4 mt-10 flex mx-auto text-white bg-gradient-to-r from-[#835D23] to-[#B58130] rounded-md font-[700] text-xl  focus:outline-none"
            >
                Send Message
                <i className="fa-solid fa-paper-plane ms-2 mt-1"></i>
            </button>
        </form>
    );
};

export default ContactForm;
