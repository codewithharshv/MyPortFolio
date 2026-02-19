import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { Link } from 'react-scroll';

const Hero = () => {
    return (
        <div
            name="home"
            className="h-screen w-full bg-gradient-to-b from-white via-white to-gray-100 dark:from-black dark:via-black dark:to-gray-900 text-black dark:text-white transition-colors duration-500"
        >
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">

                {/* Text Section */}
                <div className="flex flex-col justify-center h-full w-full md:w-1/2 z-10">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <h2 className="text-4xl sm:text-7xl font-bold text-black dark:text-white font-signature">
                            I'm a <span className="text-neon">Full Stack Developer</span>
                        </h2>
                        <div className="text-gray-600 dark:text-gray-400 py-4 max-w-md text-xl font-semibold">
                            <TypeAnimation
                                sequence={[
                                    'Building Real-World Web Applications',
                                    1000,
                                    'Creating Dynamic User Experiences',
                                    1000,
                                    'Passionate About Backend & APIs',
                                    1000,
                                ]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                            />
                        </div>
                        <p className="text-gray-600 dark:text-gray-500 py-4 max-w-md">
                            I specialize in building exceptional digital experiences. Currently, I focus on building responsive full-stack web applications using React, Node.js, and modern UI libraries.
                        </p>

                        <div className="flex gap-4">
                            <Link
                                to="projects"
                                smooth
                                duration={500}
                                className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer hover:scale-105 duration-200"
                            >
                                View Projects
                            </Link>
                            <a
                                href="/resume.pdf"
                                download={true}
                                className="group w-fit px-6 py-3 my-2 flex items-center rounded-md border text-cyan-600 border-cyan-600 hover:bg-cyan-600 hover:text-white dark:text-neon dark:border-neon dark:hover:bg-neon dark:hover:text-black cursor-pointer hover:scale-105 duration-200"
                            >
                                Download Resume
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* 3D Animation Section */}
                <div className="hidden md:flex w-full md:w-1/2 h-full z-0 items-center justify-center">
                    <div className="h-[500px] w-[500px]">
                        <Canvas>
                            <ambientLight intensity={1} />
                            <directionalLight position={[3, 2, 1]} />
                            <Sphere args={[1, 100, 200]} scale={2.5}>
                                <MeshDistortMaterial
                                    color="#00f3ff"
                                    attach="material"
                                    distort={0.5}
                                    speed={2}
                                />
                            </Sphere>
                            <OrbitControls enableZoom={false} autoRotate />
                        </Canvas>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
