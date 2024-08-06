// src/components/HomePage.tsx
import React from 'react';
import myHeroImage from "../assets/my_Project_image_1.jpg";

const HomePage = () => {
  return (
    <div className="relative flex m-5 overflow-hidden">
        <div className=" relative w-screen h-screen">
            <img
                src={myHeroImage}
                alt="hero image"
                className="w-full h-full object-cover overflow-hidden rounded-lg"
            />

            <div className="absolute inset-[50px] flex flex-col items-start justify-end bg-black bg-opacity-20 p-8 rounded-lg space-y-52">

                <div className="p-8 rounded-lg">
                    <h1 className="lg:text-8xl md:text-6xl text-4xl font-bold text-white leading-loose capitalize">Bringing Concepts to Digital Reality</h1>
                    <p className="lg:text-3xl md:text-2xl text-xl text-gray-300 pt-6">Web Developer | Web Design | Web3 Enthusiast</p>
                </div>

                <div className="bg-white bg-opacity-10 backdrop-blur-lg p-8 rounded-lg">
                    <div className="py-4 flex gap-10 px-6">
                        <h2 className="text-white text-2xl md:text-2xl lg:text-3xl font-semibold"> Explore my work and discover how I can help elevate your next project.</h2>
                            <div className="bg-white rounded-lg h-50 w-2"></div>
                            <p className="text-gray-300 text-lg md:text-xl font-normal">
                            Welcome to my portfolio! I’m Praise Georgewill, a passionate and versatile web developer specializing in crafting beautiful and functional websites and applications. With a deep understanding of web3 technologies, I am dedicated to bringing innovative solutions to the digital landscape.
                            </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default HomePage;
