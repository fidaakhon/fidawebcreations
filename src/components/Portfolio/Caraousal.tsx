"use client";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import Image from 'next/image';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './Carousel.module.css';
import Portfolio1 from '../images/portfolio1.jpg';
import Portfolio2 from '../images/portfolio2.jpg';
import Portfolio3 from '../images/portfolio3.jpg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default () => {
    return (
        <div className={styles.container}>
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                //   scrollbar={{ draggable: true }}
                className={styles.swiper}
            >
                <SwiperSlide>
                    <div className={styles.slide}>
                        <div className="image">
                            <Image src={Portfolio1} alt="" className={styles.img} />
                        </div>
                        <div className={styles.text}>
                            <h1 className="text-xl font-bold text-left">Blog Platform</h1>
                            <p className="text-sm">This is a blog post platform using reactjs and bootstrap.</p>
                            <div className={styles.demo}>
                                <a href="https://blog-platform-1.herokuapp.com/" target="_blank" rel="noopener noreferrer" className={styles.btn}>Demo <ArrowRightAltIcon className={styles.arrow} /> </a>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.slide}>
                        <div className="image">
                            <Image src={Portfolio2} alt="" className={styles.img} />
                        </div>
                        <div className={styles.text}>
                            <h1 className="text-xl font-bold text-left">Blog Platform</h1>
                            <p className="text-sm">This is a blog post platform using reactjs and bootstrap.</p>
                            <div className={styles.demo}>
                                <a href="https://blog-platform-1.herokuapp.com/" target="_blank" rel="noopener noreferrer" className={styles.btn}>Demo <ArrowRightAltIcon className={styles.arrow} /> </a>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.slide}>
                        <div className="image">
                            <Image src={Portfolio3} alt="" className={styles.img} />
                        </div>
                        <div className={styles.text}>
                            <h1 className="text-xl font-bold text-left">Blog Platform</h1>
                            <p className="text-sm">This is a blog post platform using reactjs and bootstrap.</p>
                            <div className={styles.demo}>
                                <a href="https://blog-platform-1.herokuapp.com/" target="_blank" rel="noopener noreferrer" className={styles.btn}>Demo <ArrowRightAltIcon className={styles.arrow} /> </a>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};