import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaJava, FaPython, FaGitAlt } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss, SiCplusplus } from 'react-icons/si';

const Skills = () => {
    const skills = [
        {
            id: 1,
            src: <FaHtml5 size={50} className="text-orange-500" />,
            title: 'HTML',
            style: 'shadow-orange-500',
        },
        {
            id: 2,
            src: <FaCss3Alt size={50} className="text-blue-500" />,
            title: 'CSS',
            style: 'shadow-blue-500',
        },
        {
            id: 3,
            src: <FaJs size={50} className="text-yellow-500" />,
            title: 'JavaScript',
            style: 'shadow-yellow-500',
        },
        {
            id: 4,
            src: <FaReact size={50} className="text-blue-600" />,
            title: 'React',
            style: 'shadow-blue-600',
        },
        {
            id: 5,
            src: <SiTailwindcss size={50} className="text-sky-400" />,
            title: 'Tailwind',
            style: 'shadow-sky-400',
        },
        {
            id: 6,
            src: <FaNodeJs size={50} className="text-green-500" />,
            title: 'Node JS',
            style: 'shadow-green-500',
        },
        {
            id: 7,
            src: <SiExpress size={50} className="text-black dark:text-white" />,
            title: 'Express',
            style: 'shadow-gray-400 dark:shadow-white',
        },
        {
            id: 8,
            src: <SiMongodb size={50} className="text-green-400" />,
            title: 'MongoDB',
            style: 'shadow-green-400',
        },
        {
            id: 9,
            src: <FaJava size={50} className="text-red-500" />,
            title: 'Java',
            style: 'shadow-red-500',
        },
        {
            id: 10,
            src: <SiCplusplus size={50} className="text-blue-800" />,
            title: 'C++',
            style: 'shadow-blue-800',
        },
        {
            id: 11,
            src: <FaPython size={50} className="text-yellow-400" />,
            title: 'Python',
            style: 'shadow-yellow-400',
        },
        {
            id: 12,
            src: <FaGitAlt size={50} className="text-red-600" />,
            title: 'Git',
            style: 'shadow-red-600',
        },
    ];

    return (
        <div
            name="skills"
            className="bg-gradient-to-b from-white to-gray-200 dark:from-black dark:to-gray-800 w-full text-black dark:text-white md:h-screen transition-colors duration-500"
        >
            <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div>
                    <p className="text-4xl font-bold border-b-4 border-neon p-2 inline">
                        Skills
                    </p>
                    <p className="py-6">These are the technologies I've worked with</p>
                </div>

                <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
                    {skills.map(({ id, src, title, style }) => (
                        <motion.div
                            key={id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: id * 0.05 }}
                            whileHover={{ scale: 1.05 }}
                            className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style} glass dark:glass`}
                        >
                            <div className="w-20 mx-auto flex justify-center items-center h-20">{src}</div>
                            <p className="mt-4">{title}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
