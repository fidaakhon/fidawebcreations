"use client";
import React from 'react';
import Image from 'next/image';
import Fida from '../images/AboutPic.jpg';
import DownloadButton from './CvDownload';
import { useEffect, useState } from 'react';

export default function About() {
    const [isScreenSmall, setIsScreenSmall] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 769px)");
        if (mediaQuery.matches) {
            setIsScreenSmall(true);
        } else {
            setIsScreenSmall(false);
        }
    }, []);
    return (
        <>
            {!isScreenSmall ?
                <div className='mb-20'>
                    <h1 className="text-center text-3xl font-bold">About Me</h1>
                    <h3 className="text-center text-sm">My introduction</h3>
                    <div className="flex justify-center gap-40 mt-10  ">
                        <div className="image">
                            <Image src={Fida} alt="Fida" className='w-60 rounded-md' />
                        </div>
                        <div className="">
                            <p className=" text-sm">Web developer with extensive knowledge and years of <br /> experience, and working in a web technology an UI/UX design,<br /> delivering quality work.</p>
                            <div className="experience flex gap-16 mt-10">
                                <div className="years w-16 text-center">
                                    <h1 className='font-bold text-lg'>02+</h1>
                                    <p className='text-xs text-center'>Years experience</p>
                                </div>
                                <div className="projects w-16 text-center">
                                    <h1 className='font-bold text-lg'>10+</h1>
                                    <p className='text-xs'>Projects completed</p>
                                </div>
                                <div className="companies w-16 text-center">
                                    <h1 className='font-bold text-lg'>03+</h1>
                                    <p className='text-xs'>Companies worked</p>
                                </div>
                            </div>
                            <div className="flex justify-center gap-4 mt-10">
                                <DownloadButton />
                            </div>
                        </div>
                    </div>
                </div> :
                <div className='flex flex-col justify-center mb-10' style={{width:"95vw"}}>
                    <h1 className="text-center text-3xl font-bold">About Me</h1>
                    <h3 className="text-center text-gray-400 text-sm">My introduction</h3>
                    <div className="image flex justify-center mt-5">
                        <Image src={Fida} alt="Fida" className='w-60 h-64 rounded-md' />
                    </div>
                    <div className="w-80 flex flex-col justify-center">
                            <p className="text-lg ml-5 text-center mt-2">Web developer with extensive knowledge and years of experience, and working in a web technology an UI/UX design, delivering quality work.</p>
                            <div className="experience flex gap-10 mt-10 ml-6">
                                <div className="years w-16 text-center">
                                    <h1 className='font-bold text-lg'>02+</h1>
                                    <p className='text-sm text-center'>Years experience</p>
                                </div>
                                <div className="projects w-16 text-center">
                                    <h1 className='font-bold text-lg'>10+</h1>
                                    <p className='text-sm'>Projects completed</p>
                                </div>
                                <div className="companies w-16 text-center">
                                    <h1 className='font-bold text-lg'>03+</h1>
                                    <p className='text-sm'>Companies worked</p>
                                </div>
                            </div>
                            <div className="flex justify-center gap-4 mt-10">
                                <DownloadButton />
                            </div>
                        </div>
                </div>
            }
        </>
    );
}