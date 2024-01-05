"use client";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import Testimonial1 from '../images/testimonial1.jpg';
import Testimonial2 from '../images/testimonial2.jpg';
import Testimonial3 from '../images/testimonial3.jpg';
import StarIcon from '@mui/icons-material/Star';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import styles from './Swiper.module.css';
import react from 'react';
import { useEffect, useState } from 'react';

export default () => {
    const [width, setWidth] = useState(window.innerWidth);
    const [isScreenSmall, setIsScreenSmall] = useState(false);

    useEffect(() => {
        if (width < 769) {
            setIsScreenSmall(true);
        } else {
            setIsScreenSmall(false);
        }
    }, []);
    return (
        <>
            {!isScreenSmall ? <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={10}
                slidesPerView={2}
                //   navigation
                pagination={{ clickable: true }}
                //   scrollbar={{ draggable: true }}
                className={styles.container}
            >
                <SwiperSlide>
                    <div className={styles.testimonial1}>
                        <div className={styles.profile}>
                            <div className={styles.imgName}>
                                <div >
                                    <Image src={Testimonial1} alt="testimonial1" className={styles.img} />
                                </div>
                                <div className={styles.name}>
                                    <h1 className='text-lg font-bold'>Sara Smith</h1>
                                    <p className='text-xs text-gray-400'>Client</p>
                                </div>
                            </div>
                            <div className={styles.stars}>
                                <StarIcon className="str mt-4 text-blue-200" />
                                <StarIcon className="str mt-4 text-blue-200" />
                                <StarIcon className="str mt-4 text-blue-200" />
                                <StarIcon className="str mt-4 text-blue-200" />
                                <StarIcon className="str mt-4 text-blue-200" />
                            </div>
                        </div>
                        <div className={styles.text}>
                            <p className='text-sm text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.testimonial1}>
                        <div className={styles.profile}>
                            <div className={styles.imgName}>
                                <div >
                                    <Image src={Testimonial3} alt="testimonial1" className={styles.img} />
                                </div>
                                <div className={styles.name}>
                                    <h1 className='text-lg font-bold'>Raul Harris</h1>
                                    <p className='text-xs text-gray-400'>Client</p>
                                </div>
                            </div>
                            <div className={styles.stars}>
                                <StarIcon className="str mt-4 text-blue-200" />
                                <StarIcon className="str mt-4 text-blue-200" />
                                <StarIcon className="str mt-4 text-blue-200" />
                                <StarIcon className="str mt-4 text-blue-200" />
                                <StarIcon className="str mt-4 text-blue-200" />
                            </div>
                        </div>
                        <div className={styles.text}>
                            <p className='text-sm text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.testimonial1}>
                        <div className={styles.profile}>
                            <div className={styles.imgName}>
                                <div >
                                    <Image src={Testimonial2} alt="testimonial1" className={styles.img} />
                                </div>
                                <div className={styles.name}>
                                    <h1 className='text-lg font-bold'>Peter Smith</h1>
                                    <p className='text-xs text-gray-400'>Client</p>
                                </div>
                            </div>
                            <div className={styles.stars}>
                                <StarIcon className="str mt-4 text-blue-200" />
                                <StarIcon className="str mt-4 text-blue-200" />
                                <StarIcon className="str mt-4 text-blue-200" />
                                <StarIcon className="str mt-4 text-blue-200" />
                                <StarIcon className="str mt-4 text-blue-200" />
                            </div>
                        </div>
                        <div className={styles.text}>
                            <p className='text-sm text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.</p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper> :
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={10}
                    slidesPerView={1}
                    //   navigation
                    pagination={{ clickable: true }}
                    //   scrollbar={{ draggable: true }}
                    className={styles.container}
                >
                    <SwiperSlide>
                        <div className={styles.testimonial1}>
                            <div className={styles.profile}>
                                <div className={styles.imgName}>
                                    <div >
                                        <Image src={Testimonial1} alt="testimonial1" className={styles.img} />
                                    </div>
                                    <div className={styles.name}>
                                        <h1 className='text-lg font-bold'>Sara Smith</h1>
                                        <p className='text-xs text-gray-400'>Client</p>
                                    </div>
                                </div>
                                <div className={styles.stars}>
                                    <StarIcon className="mt-4 text-blue-200" />
                                    <StarIcon className="mt-4 text-blue-200" />
                                    <StarIcon className="mt-4 text-blue-200" />
                                    <StarIcon className="mt-4 text-blue-200" />
                                    <StarIcon className="mt-4 text-blue-200" />
                                </div>
                            </div>
                            <div className={styles.text}>
                                <p className='text-sm text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.testimonial1}>
                            <div className={styles.profile}>
                                <div className={styles.imgName}>
                                    <div >
                                        <Image src={Testimonial3} alt="testimonial1" className={styles.img} />
                                    </div>
                                    <div className={styles.name}>
                                        <h1 className='text-lg font-bold'>Raul Harris</h1>
                                        <p className='text-xs text-gray-400'>Client</p>
                                    </div>
                                </div>
                                <div className={styles.stars}>
                                    <StarIcon className="str mt-4 text-blue-200" />
                                    <StarIcon className="str mt-4 text-blue-200" />
                                    <StarIcon className="str mt-4 text-blue-200" />
                                    <StarIcon className="str mt-4 text-blue-200" />
                                    <StarIcon className="str mt-4 text-blue-200" />
                                </div>
                            </div>
                            <div className={styles.text}>
                                <p className='text-sm text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.testimonial1}>
                            <div className={styles.profile}>
                                <div className={styles.imgName}>
                                    <div >
                                        <Image src={Testimonial2} alt="testimonial1" className={styles.img} />
                                    </div>
                                    <div className={styles.name}>
                                        <h1 className='text-lg font-bold'>Peter Smith</h1>
                                        <p className='text-xs text-gray-400'>Client</p>
                                    </div>
                                </div>
                                <div className={styles.stars}>
                                    <StarIcon className="str mt-4 text-blue-200" />
                                    <StarIcon className="str mt-4 text-blue-200" />
                                    <StarIcon className="str mt-4 text-blue-200" />
                                    <StarIcon className="str mt-4 text-blue-200" />
                                    <StarIcon className="str mt-4 text-blue-200" />
                                </div>
                            </div>
                            <div className={styles.text}>
                                <p className='text-sm text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>}
        </>
    );
};