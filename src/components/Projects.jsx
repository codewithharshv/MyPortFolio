import React from 'react';
import Tilt from 'react-parallax-tilt';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: 'GyroMouse',
            description: 'Mobile-based virtual mouse app using Android (Java) controlling PC via UDP & Python.',
            tech: ['Android', 'Java', 'Python', 'UDP'],
            link: 'https://github.com/codewithharshv/GYROMOUSE.git',
            demo: '#',
            color: 'from-purple-500 to-indigo-500',
        },
        {
            id: 2,
            title: 'BloodLife Center',
            description: 'Responsive blood donation website with Firebase Authentication.',
            tech: ['HTML', 'CSS', 'JS', 'Firebase'],
            link: 'https://github.com/codewithharshv/BloodLifeCenter.git',
            demo: '#',
            color: 'from-red-500 to-pink-500',
        },
        {
            id: 3,
            title: 'Weather Web App',
            description: 'Full-stack weather app using Node.js with real-time API integration.',
            tech: ['Node.js', 'HTML/CSS', 'API'],
            link: 'https://github.com/codewithharshv/weather.git',
            demo: '#',
            color: 'from-blue-400 to-cyan-400',
        },
        {
            id: 4,
            title: 'To-Do List App',
            description: 'Interactive task management app with LocalStorage persistence.',
            tech: ['HTML', 'CSS', 'JS'],
            link: 'https://github.com/codewithharshv',
            demo: '#',
            color: 'from-yellow-400 to-orange-400',
        },
        {
            id: 5,
            title: 'Calculator Web App',
            description: 'Responsive calculator using modern CSS Grid & Flexbox.',
            tech: ['HTML', 'CSS', 'JS'],
            link: 'https://github.com/codewithharshv',
            demo: '#',
            color: 'from-green-400 to-emerald-400',
        },
        {
            id: 6,
            title: 'Portfolio Website',
            description: 'Modern developer portfolio built with React, Vite, and Tailwind.',
            tech: ['React', 'Tailwind', 'Framer Motion'],
            link: 'https://github.com/codewithharshv/MyPortFolio.git',
            demo: '#',
            color: 'from-gray-600 to-gray-800',
        },
    ];

    return (
        <div
            name="projects"
            className="bg-gradient-to-b from-gray-200 to-white dark:from-gray-800 dark:to-black w-full text-black dark:text-white md:h-screen transition-colors duration-500"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-neon">
                        Projects
                    </p>
                    <p className="py-6">Check out some of my work</p>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                    {projects.map(({ id, title, description, tech, link, demo, color }) => (
                        <Tilt key={id} className="parallax-effect-glare-scale" perspective={500} glareEnable={true} glareMaxOpacity={0.45} scale={1.02}>
                            <div className={`shadow-md shadow-gray-400 dark:shadow-gray-600 rounded-lg duration-200 hover:scale-105 glass dark:glass bg-gradient-to-br ${color} bg-opacity-10 dark:bg-opacity-10`}>
                                <div className="p-4 h-48 flex flex-col justify-center items-center text-center">
                                    <h3 className="text-2xl font-bold mb-2">{title}</h3>
                                    <p className="text-sm text-gray-700 dark:text-gray-200">{description}</p>
                                </div>
                                <div className="flex justify-center gap-2 pb-2 flex-wrap px-2">
                                    {tech.map((t, index) => (
                                        <span key={index} className="text-xs bg-white dark:bg-black bg-opacity-50 dark:bg-opacity-50 px-2 py-1 rounded text-black dark:text-white">{t}</span>
                                    ))}
                                </div>
                                <div className="flex items-center justify-center">
                                    <a href={link} target="_blank" rel="noreferrer" className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 flex items-center justify-center gap-2 bg-white dark:bg-black rounded-lg text-black dark:text-white">
                                        <FaGithub /> Code
                                    </a>
                                </div>
                            </div>
                        </Tilt>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
