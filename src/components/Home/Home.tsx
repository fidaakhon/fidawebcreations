"use client";
import Fida from '../images/fida.png'
import Image from 'next/image';
import SendIcon from '@mui/icons-material/Send';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import SwipeDownAltSharpIcon from '@mui/icons-material/SwipeDownAltSharp';
import { useEffect, useState } from 'react';

export default function Home() {
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
                <div className='max-h-screen mb-16'>
                    <div className="flex h-90 w-90 justify-center gap-40 mt-16 " >
                        <div className="flex">
                            <div className="social_icons m-4 flex flex-col gap-3">
                                <a href="https://www.linkedin.com/in/fida-akhoon-5a2a2b1a1/" target="_blank" rel="noreferrer">
                                    <LinkedInIcon style={{ width: 40, height: 40, color: "hsl(250, 69%, 61%)" }} />
                                </a>
                                <a href="" target="_blank" rel="noreferrer">
                                    <GitHubIcon style={{ width: 40, height: 40, color: "hsl(250, 69%, 61%)" }} />
                                </a>
                            </div>
                            <div className="About_heading w-">
                                <h1 className="text-4xl font-extrabold">Hi, I'am Fida AkhooN</h1>
                                <h2 className="text-xl font-bold mt-2 mb-2">Frontend Developer</h2>
                                <p>High level experience in web design and development knowledge,<br /> producing quality work.</p>
                                <a href="#Contact">
                                    <button className="p-3 rounded-xl text-white text-sm mt-5" style={{ background: "hsl(250, 69%, 61%)" }}>Contact Me <SendIcon style={{ width: 15, height: 15 }} /> </button>
                                </a>
                            </div>
                        </div>
                        <div className="home__img h-70 w-60">
                            <svg className="home__blob" viewBox="0 0 200 187" xmlns="http://www.w3.org/2000/svg">
                                <mask id="mask0" className="bg-blue-600" mask-type="alpha">
                                    <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
                                130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
                                97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
                                0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z" fill="hsl(250, 69%, 61%)" />
                                </mask>
                                <g mask="url(#mask0)">
                                    <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
                                165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
                                129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
                                -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z" fill="hsl(250, 69%, 61%)" />
                                    <foreignObject x="-2" y="0" width="100%" height="100%">
                                        <Image
                                            src={Fida}
                                            alt="Your Alt Text"
                                            layout="fill"
                                            objectFit="cover"

                                        />
                                    </foreignObject>
                                </g>
                            </svg>
                        </div>
                    </div>
                    <div className="scroll_down">
                        <a href="#About">
                            <button className="p-3 rounded-xl  text-xs mt-14 ml-40" ><SwipeDownAltSharpIcon style={{ width: 20, height: 20, color: "hsl(250, 69%, 61%)" }} /> Scroll down <ArrowDownwardIcon style={{ width: 10, height: 10, color: "hsl(250, 69%, 61%)" }} /> </button>
                        </a>
                    </div>
                </div> :
                <div className='max-h-screen mb-16'>
                    <div className="flex justify-center gap-4" >
                        <div className="social_icons m-4 flex flex-col gap-3">
                            <a href="https://www.linkedin.com/in/fida-akhoon-5a2a2b1a1/" target="_blank" rel="noreferrer">
                                <LinkedInIcon style={{ width: 40, height: 40, color: "hsl(250, 69%, 61%)" }} />
                            </a>
                            <a href="" target="_blank" rel="noreferrer">
                                <GitHubIcon style={{ width: 40, height: 40, color: "hsl(250, 69%, 61%)" }} />
                            </a>
                        </div>
                        <div className="home__img h-50 w-40">
                            <svg className="home__blob" viewBox="0 0 200 187" xmlns="http://www.w3.org/2000/svg">
                                <mask id="mask0" className="bg-blue-600" mask-type="alpha">
                                    <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
                                        130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
                                        97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
                                        0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z" fill="hsl(250, 69%, 61%)" />
                                </mask>
                                <g mask="url(#mask0)">
                                    <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
                                        165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
                                        129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
                                        -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z" fill="hsl(250, 69%, 61%)" />
                                    <foreignObject x="-2" y="0" width="100%" height="100%">
                                        <Image
                                            src={Fida}
                                            alt="Your Alt Text"
                                            layout="fill"
                                            objectFit="cover"

                                        />
                                    </foreignObject>
                                </g>
                            </svg>
                        </div>
                    </div>
                    <div className="About_heading ml-8 mt-8">
                        <h1 className="text-4xl font-extrabold">Hi, I'am Fida AkhooN</h1>
                        <h2 className="text-xl font-bold mt-2 mb-4">Frontend Developer</h2>
                        <p>High level experience in web design and development knowledge,<br /> producing quality work.</p>
                        <a href="#Contact">
                            <button className="p-5 rounded-xl text-white text-lg mt-8" style={{ background: "hsl(250, 69%, 61%)" }}>Contact Me <SendIcon style={{ width: 20, height: 20, fontSize:20 }} /> </button>
                        </a>
                    </div>
                </div>
            }
        </>
    )
}