import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
    const education = [
        {
            id: 1,
            degree: 'B.Sc. in Information Technology',
            institution: 'Nirmala Memorial Foundation College of Commerce & Science, Mumbai',
            duration: '2023 – 2026',
            details: 'Current CGPA: 8.9 (Sem V). Focusing on Full Stack Development, Data Structures, and Software Engineering.',
        },
        {
            id: 2,
            degree: 'Higher Secondary Certificate (HSC)',
            institution: 'Nirmala Memorial Foundation College',
            duration: '2021 – 2023',
            details: 'Stream: Science. Learned basics of programming and electronics.',
        },
    ];

    return (
        <div
            name="education"
            className="w-full h-screen bg-gradient-to-b from-white to-gray-200 dark:from-gray-800 dark:to-black text-black dark:text-white transition-colors duration-500"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-neon">
                        Education
                    </p>
                </div>

                <div className="flex flex-col gap-8 mt-10 border-l-4 border-neon ml-4">
                    {education.map(({ id, degree, institution, duration, details }) => (
                        <motion.div
                            key={id}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: id * 0.2 }}
                            className="relative pl-8"
                        >
                            <div className="absolute w-4 h-4 bg-neon rounded-full -left-[10px] top-6 border-4 border-white dark:border-black"></div>
                            <div className="glass dark:glass p-6 rounded-lg shadow-md shadow-gray-400 dark:shadow-gray-700 hover:scale-105 duration-300">
                                <h3 className="text-2xl font-bold text-black dark:text-neon">{degree}</h3>
                                <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">{institution}</p>
                                <p className="text-sm text-gray-500 dark:text-gray-400 italic mb-2">{duration}</p>
                                <p className="text-gray-600 dark:text-gray-300">{details}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Education;
