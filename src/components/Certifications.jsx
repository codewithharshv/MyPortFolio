import React from 'react';
import { motion } from 'framer-motion';
import { FaCertificate } from 'react-icons/fa';

const Certifications = () => {
    const certs = [
        {
            id: 1,
            title: 'HTML Training',
            issuer: 'IIT Bombay (Spoken Tutorial)',
            date: 'Jan 2024',
        },
        {
            id: 2,
            title: 'C++ Programming',
            issuer: 'IIT Bombay (Spoken Tutorial)',
            date: 'Jan 2024',
        },
        {
            id: 3,
            title: 'Arduino & IoT',
            issuer: 'TANTRANIKETAN',
            date: 'Feb 2024',
        },
        {
            id: 4,
            title: 'Artificial Intelligence & Machine Learning',
            issuer: 'Quantumlearning',
            date: 'June 2025',
        },
        {
            id: 5,
            title: 'GenAI Powered Data Analytics',
            issuer: 'Tata',
            date: 'August 2025',
        },
    ];

    return (
        <div
            name="certifications"
            className="w-full bg-gradient-to-b from-gray-200 to-white dark:from-black dark:to-gray-800 text-black dark:text-white min-h-screen transition-colors duration-500"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-neon">
                        Certifications
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
                    {certs.map(({ id, title, issuer, date }) => (
                        <motion.div
                            key={id}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                            className="glass dark:glass p-6 rounded-lg shadow-orange-500 shadow-sm flex flex-col items-center text-center bg-white dark:bg-transparent"
                        >
                            <FaCertificate size={40} className="text-neon mb-4" />
                            <h3 className="text-xl font-bold">{title}</h3>
                            <p className="text-gray-600 dark:text-gray-400 mt-2">{issuer}</p>
                            <p className="text-sm text-gray-500 mt-1">{date}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Certifications;
