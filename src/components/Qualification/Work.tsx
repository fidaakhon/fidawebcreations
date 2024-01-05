"use client"
import React from 'react';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const Work = () => {
    return (
        <div className='flex justify-center'>
            <div className="education ml-14" style={{ display: "grid", gridTemplateColumns: "1fr", columnGap: "", width: "50vw", }}>
                <div className="education1 flex gap-1">
                    <div className="headings">
                        <h1 className='text-sm font-bold'>WordPress</h1>
                        <p className='text-xs'>Digiskilss</p>
                        <p className='text-xs'> <CalendarMonthIcon style={{ width: 20, height: 15 }} /> 2020-2021</p>
                    </div>
                    <div className="circleLine" style={{marginLeft:"13.3vw"}}>
                        <div className="circle  mt-2" style={{ backgroundColor: "hsl(250, 69%, 61%)", width: 10, height: 10, borderRadius: "50%" }}></div>
                        <div className="line1" style={{ height: 40, width: 2, backgroundColor: "hsl(250, 69%, 61%)", marginLeft: 4 }}></div>
                    </div>
                </div>
                <div className="education1 flex gap-1">
                    <div className="circleLine " style={{marginLeft:"21.2vw", marginTop:"-10px"}}>
                        <div className="circle  mt-2" style={{ backgroundColor: "hsl(250, 69%, 61%)", width: 10, height: 10, borderRadius: "50%" }}></div>
                        <div className="line1" style={{ height: 40, width: 2, backgroundColor: "hsl(250, 69%, 61%)", marginLeft: 4 }}></div>
                    </div>
                    <div className="headings ml-16">
                        <h1 className='text-sm font-bold'>Frontend Developer</h1>
                        <p className='text-xs'>Linkedln</p>
                        <p className='text-xs'> <CalendarMonthIcon style={{ width: 20, height: 15 }} /> 2021-2022</p>
                    </div>
                </div>
                <div className="education1 flex gap-1">
                    <div className="headings">
                        <h1 className='text-sm font-bold'>Reactjs Developer</h1>
                        <p className='text-xs'>Contract</p>
                        <p className='text-xs'> <CalendarMonthIcon style={{ width: 20, height: 15 }} /> 2022-2023</p>
                    </div>
                    <div className="circleLine  -mt-3" style={{marginLeft:"10vw"}}>
                        <div className="circle  mt-2" style={{ backgroundColor: "hsl(250, 69%, 61%)", width: 10, height: 10, borderRadius: "50%" }}></div>
                        <div className="line1" style={{ height: 40, width: 2, backgroundColor: "hsl(250, 69%, 61%)", marginLeft: 4 }}></div>
                    </div>
                </div>
                <div className="education1 flex gap-1">
                    <div className="circleLine " style={{marginLeft:"21.2vw", marginTop:"-14px"}}>
                        <div className="circle  mt-2" style={{ backgroundColor: "hsl(250, 69%, 61%)", width: 10, height: 10, borderRadius: "50%" }}></div>
                        <div className="line1" style={{ height: 40, width: 2, backgroundColor: "hsl(250, 69%, 61%)", marginLeft: 4 }}></div>
                        <div className="circle  " style={{ backgroundColor: "hsl(250, 69%, 61%)", width: 10, height: 10, borderRadius: "50%" }}></div>
                    </div>
                    <div className="headings ml-16">
                        <h1 className='text-sm font-bold'>Nextjs Developer </h1>
                        <p className='text-xs'>Freelance</p>
                        <p className='text-xs'> <CalendarMonthIcon style={{ width: 20, height: 15 }} /> 2023-2024</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Work;