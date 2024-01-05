"use client";
import React from 'react';
import Swiper from './Swiper';
import styles from './Swiper.module.css';

export default function Testimonial() {
    return (
        <div>
            <h1 className='text-3xl text-center font-bold'>Testimonial</h1>
            <p className='text-sm text-gray-400 text-center'>My client saying</p>
            <div className={styles.testimonials}>
                <Swiper />
            </div>
        </div>
    );
}