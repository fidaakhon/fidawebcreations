"use client";
import styles from "./Footer.module.css";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Footer() {
    return (
        <footer className="footer" style={{backgroundColor:"hsl(250, 69%, 61%)"}}>
            <div className={styles.container}>
                <div className="logo">
                    <h1 className="text-white text-3xl font-bold mb-3">Fida Akhoon</h1>
                    <p className="text-white text-sm">Frontend Developer</p>
                </div>
                <div className={styles.manu}>
                    <a href="#About">About</a>
                    <a href="#Services">Services</a>
                    <a href="#Portfolio">Portfolio</a>
                </div>
                <div className={styles.socialIcons}>
                    <a href="https://www.instagram.com/fida_akhoon/"><InstagramIcon /></a>
                    <a href="https://www.facebook.com/fida.akhoon"><FacebookOutlinedIcon /></a>
                    <a href="#"><GitHubIcon /></a>
                </div>
            </div>
            <div>
                <p className="text-gray-300 text-xs text-center pb-10">© 2024 Fida Akhoon. All rights reserved.</p>
            </div>
        </footer>
    );
}