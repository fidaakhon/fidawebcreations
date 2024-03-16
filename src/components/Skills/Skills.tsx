"use client";
import BasicAccordion from "./Accordion";
import styles from "./Skills.module.css";
import React  from "react";
import { useState, useEffect } from "react";

export default function Skills() {
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)  //hydration remedy
    }, [])
    return (
        <div className="z-0" >
            <div className="heading mb-8">
                <h1 className="text-center text-3xl font-bold">Skills</h1>
                <p className="text-center text-sm text-gray-400">My technical level</p>
            </div>
            <div className="flex justify-center">
                <div className={styles.accordi0n}>
                    {isClient && <BasicAccordion />}
                </div>
            </div>
        </div>
    );
}