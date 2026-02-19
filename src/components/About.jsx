import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <div
            name="about"
            className="w-full h-screen bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-black text-black dark:text-white transition-colors duration-500"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-neon">
                        About
                    </p>
                </div>

                <motion.p
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="text-xl mt-20"
                >
                    I am Harsh Vishwakarma, a passionate Full Stack Developer and MERN Stack enthusiast.
                    Currently pursuing my B.Sc. in Information Technology at Nirmala Memorial Foundation College,
                    I have maintained a CGPA of 8.9 while actively building real-world projects.
                </motion.p>

                <br />

                <motion.p
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="text-xl"
                >
                    My journey involves deep diving into technologies like React, Node.js, and Android development.
                    I have hands-on experience in building responsive web applications, integrating APIs, and even
                    developing mobile-controlled hardware solutions like GyroMouse. I love solving complex problems
                    and am constantly learning new technologies to create dynamic user experiences.
                </motion.p>
            </div>
        </div>
    );
};

export default About;
