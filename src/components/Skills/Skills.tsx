"use client";
import BasicAccordion from "./Accordion";
import styles from "./Skills.module.css";

export default function Skills() {
    return (
        <div className="z-0" >
            <div className="heading mb-8">
                <h1 className="text-center text-3xl font-bold">Skills</h1>
                <p className="text-center text-sm text-gray-400">My technical level</p>
            </div>
            <div className="flex justify-center">
                <div className={styles.accordi0n}>
                    <BasicAccordion />
                </div>
            </div>
        </div>
    );
}