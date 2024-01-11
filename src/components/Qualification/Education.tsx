"use client"
import React from 'react';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { useState, useEffect } from 'react';

const Education = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 768px)");
        if (mediaQuery.matches) {
            setIsSmallScreen(true);
        }
        else {
            setIsSmallScreen(false);
        }
    }, []);
    return (
        <>
            {!isSmallScreen ?
                <div className='flex justify-center'>
                    <div className="education ml-14" style={{ display: "grid", gridTemplateColumns: "1fr", columnGap: "", width: "50vw", }}>
                        <div className="education1 flex gap-1">
                            <div className="headings">
                                <h1 className='text-sm font-bold'>Matric</h1>
                                <p className='text-xs'>GHS Kushum</p>
                                <p className='text-xs'> <CalendarMonthIcon style={{ width: 20, height: 15 }} /> 2015-2017</p>
                            </div>
                            <div className="circleLine" style={{ marginLeft: "13.6vw" }}>
                                <div className="circle  mt-2" style={{ backgroundColor: "hsl(250, 69%, 61%)", width: 10, height: 10, borderRadius: "50%" }}></div>
                                <div className="line1" style={{ height: 40, width: 2, backgroundColor: "hsl(250, 69%, 61%)", marginLeft: 4 }}></div>
                            </div>
                        </div>
                        <div className="education1 flex gap-1">
                            <div className="circleLine " style={{ marginLeft: "21.2vw", marginTop: "-10px" }}>
                                <div className="circle  mt-2" style={{ backgroundColor: "hsl(250, 69%, 61%)", width: 10, height: 10, borderRadius: "50%" }}></div>
                                <div className="line1" style={{ height: 40, width: 2, backgroundColor: "hsl(250, 69%, 61%)", marginLeft: 4 }}></div>
                            </div>
                            <div className="headings ml-16">
                                <h1 className='text-sm font-bold'>Fsc</h1>
                                <p className='text-xs'>Govt Collge Township LHR</p>
                                <p className='text-xs'> <CalendarMonthIcon style={{ width: 20, height: 15 }} /> 2017-2019</p>
                            </div>
                        </div>
                        <div className="education1 flex gap-1">
                            <div className="headings">
                                <h1 className='text-sm font-bold'>MS Office</h1>
                                <p className='text-xs'>Corvit</p>
                                <p className='text-xs'> <CalendarMonthIcon style={{ width: 20, height: 15 }} /> 2019-2020</p>
                            </div>
                            <div className="circleLine  -mt-3" style={{ marginLeft: "13.4vw" }}>
                                <div className="circle  mt-2" style={{ backgroundColor: "hsl(250, 69%, 61%)", width: 10, height: 10, borderRadius: "50%" }}></div>
                                <div className="line1" style={{ height: 40, width: 2, backgroundColor: "hsl(250, 69%, 61%)", marginLeft: 4 }}></div>
                            </div>
                        </div>
                        <div className="education1 flex gap-1">
                            <div className="circleLine " style={{ marginLeft: "21.2vw", marginTop: "-14px" }}>
                                <div className="circle  mt-2" style={{ backgroundColor: "hsl(250, 69%, 61%)", width: 10, height: 10, borderRadius: "50%" }}></div>
                                <div className="line1" style={{ height: 40, width: 2, backgroundColor: "hsl(250, 69%, 61%)", marginLeft: 4 }}></div>
                                <div className="circle  " style={{ backgroundColor: "hsl(250, 69%, 61%)", width: 10, height: 10, borderRadius: "50%" }}></div>
                            </div>
                            <div className="headings ml-16">
                                <h1 className='text-sm font-bold'>BS Information Technology</h1>
                                <p className='text-xs'>University of the Punjab</p>
                                <p className='text-xs'> <CalendarMonthIcon style={{ width: 20, height: 15 }} /> 2020-2024</p>
                            </div>
                        </div>
                    </div>
                </div> :
                <div className='flex justify-center'>
                    <div className="education ml-1" style={{ display: "grid", gridTemplateColumns: "1fr", columnGap: "", width: "90vw", }}>
                        <div className="education1 flex gap-1 ml-5">
                            <div className="headings">
                                <h1 className='text-sm font-bold'>Matric</h1>
                                <p className='text-xs'>GHS Kushum</p>
                                <p className='text-xs'> <CalendarMonthIcon style={{ width: 20, height: 15 }} /> 2015-2017</p>
                            </div>
                            <div className="circleLine" style={{ marginLeft: "13vw" }}>
                                <div className="circle  mt-2" style={{ backgroundColor: "hsl(250, 69%, 61%)", width: 10, height: 10, borderRadius: "50%" }}></div>
                                <div className="line1" style={{ height: 40, width: 2, backgroundColor: "hsl(250, 69%, 61%)", marginLeft: 4 }}></div>
                            </div>
                        </div>
                        <div className="education1 flex gap-1">
                            <div className="circleLine " style={{ marginLeft: "42.5vw", marginTop: "-10px" }}>
                                <div className="circle  mt-2" style={{ backgroundColor: "hsl(250, 69%, 61%)", width: 10, height: 10, borderRadius: "50%" }}></div>
                                <div className="line1" style={{ height: 57, width: 2, backgroundColor: "hsl(250, 69%, 61%)", marginLeft: 4 }}></div>
                            </div>
                            <div className="headings ml-4">
                                <h1 className='text-sm font-bold'>Fsc</h1>
                                <p className='text-xs'>Govt Collge Township LHR</p>
                                <p className='text-xs'> <CalendarMonthIcon style={{ width: 20, height: 15 }} /> 2017-2019</p>
                            </div>
                        </div>
                        <div className="education1 flex ml-6 ">
                            <div className="headings">
                                <h1 className='text-sm font-bold'>MS Office</h1>
                                <p className='text-xs'>Corvit</p>
                                <p className='text-xs'> <CalendarMonthIcon style={{ width: 20, height: 15 }} /> 2019-2020</p>
                            </div>
                            <div className="circleLine  -mt-3" style={{ marginLeft: "12vw" }}>
                                <div className="circle  mt-2" style={{ backgroundColor: "hsl(250, 69%, 61%)", width: 10, height: 10, borderRadius: "50%" }}></div>
                                <div className="line1" style={{ height: 50, width: 2, backgroundColor: "hsl(250, 69%, 61%)", marginLeft: 4 }}></div>
                            </div>
                        </div>
                        <div className="education1 flex gap-1">
                            <div className="circleLine " style={{ marginLeft: "42.5vw", marginTop: "-14px" }}>
                                <div className="circle  mt-2" style={{ backgroundColor: "hsl(250, 69%, 61%)", width: 10, height: 10, borderRadius: "50%" }}></div>
                                <div className="line1" style={{ height: 60, width: 2, backgroundColor: "hsl(250, 69%, 61%)", marginLeft: 4 }}></div>
                                <div className="circle  " style={{ backgroundColor: "hsl(250, 69%, 61%)", width: 10, height: 10, borderRadius: "50%" }}></div>
                            </div>
                            <div className="headings ml-5">
                                <h1 className='text-sm font-bold'>BS Information Technology</h1>
                                <p className='text-xs'>University of the Punjab</p>
                                <p className='text-xs'> <CalendarMonthIcon style={{ width: 20, height: 15 }} /> 2020-2024</p>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    );
};

export default Education;