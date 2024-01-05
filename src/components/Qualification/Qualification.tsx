"use client"
import React, { useState } from 'react';
import SchoolIcon from '@mui/icons-material/School';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import Education from './Education';
import Work from './Work';

const Qualification = () => {
    const [category, setCategory] = useState(true);
    return (
        <div>
            <h1 className='text-center text-3xl font-bold'>Qualification</h1>
            <p className='text-center text-sm text-gray-500'>My personal journey</p>
            <div className="buttons flex gap-10 text-gray-500 justify-center mt-9">
                <button className="btn hover:text-blue-500" onClick={() => setCategory(true)} > <SchoolIcon /> Education</button>
                <button className="btn hover:text-blue-500" onClick={() => setCategory(false)}> <HomeRepairServiceIcon /> Experience</button>
            </div>

            <div className="education">
                {category ?
                    <Education /> : <Work />}
            </div>
        </div>
    );
};

export default Qualification;