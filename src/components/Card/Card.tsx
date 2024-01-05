"use client";
import React from "react";
import styles from "./Card.module.css";
import Pic from "../images/ProjectPic.png";
import Image from "next/image";
import SendIcon from '@mui/icons-material/Send';

const Card = () => {
    return (
        <div className={styles.container}>
            <div className="text pl-10 pt-16">
                <h2 className="text-xl font-bold">You have a new project</h2>
                <p className="text-sm mt-3">Contact me i will give you 30% discount for your new project</p>
                <a href="#Contact"><button className={styles.btn}>Contact me <SendIcon className="text-sm" /></button></a>
            </div>
            <div className="image pt-10 pr-10">
                <Image src={Pic} alt="AboutPic" width={220} height={350} />
            </div>
        </div>
    )
};

export default Card;