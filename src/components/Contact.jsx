import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        // Replace with actual Service ID, Template ID, and Public Key from EmailJS
        const SERVICE_ID = 'service_id';
        const TEMPLATE_ID = 'template_id';
        const PUBLIC_KEY = 'public_key';

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                alert("Message sent successfully!");
                e.target.reset();
            }, (error) => {
                console.log(error.text);
                alert("Failed to send message. Please try again or contact directly.");
            });
    };

    return (
        <div
            name="contact"
            className="w-full h-screen bg-gradient-to-b from-white to-gray-200 dark:from-black dark:to-gray-800 p-4 text-black dark:text-white transition-colors duration-500"
        >
            <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-neon">
                        Contact
                    </p>
                    <p className="py-6">Submit the form below to get in touch with me</p>
                </div>

                <div className="flex justify-center items-center">
                    <form
                        ref={form}
                        onSubmit={sendEmail}
                        className="flex flex-col w-full md:w-1/2"
                    >
                        <input
                            type="text"
                            name="user_name"
                            placeholder="Enter your name"
                            required
                            className="p-2 bg-transparent border-2 rounded-md text-black dark:text-white focus:outline-none focus:border-neon border-gray-400 dark:border-gray-600"
                        />
                        <input
                            type="text"
                            name="user_email"
                            placeholder="Enter your email"
                            required
                            className="my-4 p-2 bg-transparent border-2 rounded-md text-black dark:text-white focus:outline-none focus:border-neon border-gray-400 dark:border-gray-600"
                        />
                        <textarea
                            name="message"
                            placeholder="Enter your message"
                            rows="10"
                            required
                            className="p-2 bg-transparent border-2 rounded-md text-black dark:text-white focus:outline-none focus:border-neon border-gray-400 dark:border-gray-600"
                        ></textarea>

                        <button className="text-white font-bold bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
                            Let's Talk
                        </button>
                    </form>
                </div>

                <div className="flex justify-center gap-8 mt-10">
                    <a href="https://github.com/codewithharshv" target="_blank" rel="noreferrer" className="hover:text-neon duration-300"><FaGithub size={30} /></a>
                    <a href="https://www.linkedin.com/in/h-v-7498s" target="_blank" rel="noreferrer" className="hover:text-neon duration-300"><FaLinkedin size={30} /></a>
                    <a href="mailto:work.harry08@gmail.com" className="hover:text-neon duration-300"><FaEnvelope size={30} /></a>
                </div>
            </div>
        </div>
    );
};

export default Contact;
