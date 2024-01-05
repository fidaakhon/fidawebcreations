"use client";
import styles from './Contact.module.css';
import CallIcon from '@mui/icons-material/Call';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import SendIcon from '@mui/icons-material/Send';

export default function Contact() {
    return (
        <div className={styles.outerContainer}>
            <h1 className='text-3xl text-center font-bold'>Contact Me</h1>
            <p className='text-sm text-gray-400 text-center'>Get in touch</p>
            <div className={styles.container}>
                <div className={styles.info}>
                    <div className="phone flex gap-3">
                        <div className="icon">
                            <CallIcon style={{ color: "hsl(250, 69%, 61%)", fontSize: 35, marginTop: 6 }} />
                        </div>
                        <div className="text">
                            <h3 className='font-bold'>Call Me</h3>
                            <p className='text-sm text-gray-400'>+91 1234567890</p>
                        </div>
                    </div>
                    <div className="email flex gap-3">
                        <div className="icon">
                            <MailOutlineIcon style={{ color: "hsl(250, 69%, 61%)", fontSize: 35, marginTop: 6 }} />
                        </div>
                        <div className="text">
                            <h3 className='font-bold'>Email</h3>
                            <p className='text-sm text-gray-400'>fidaurr900@gmail.com</p>
                        </div>
                    </div>
                    <div className="phone flex gap-3">
                        <div className="icon">
                            <LocationOnOutlinedIcon style={{ color: "hsl(250, 69%, 61%)", fontSize: 35, marginTop: 6 }} />
                        </div>
                        <div className="text">
                            <h3 className='font-bold'>Location</h3>
                            <p className='text-sm text-gray-400'>Lahore Pakistan</p>
                        </div>
                    </div>
                </div>
                <div className={styles.form}>
                    <form>
                        <div className={styles.NameEmail}>
                            <div className={styles.name}>
                                <label htmlFor="name" className='text-black'>Name</label><br />
                                <input type="text" id='name' className='text-sm ' style={{ backgroundColor: "hsl(250, 70%, 96%, 1)" }} placeholder='Enter your name' />
                            </div>
                            <div className={styles.name}>
                                <label htmlFor="email" className='text-black'>Email</label><br />
                                <input type="email" id='email' className='text-sm' style={{ backgroundColor: "hsl(250, 70%, 96%, 1)" }} placeholder='Enter your email' />
                            </div>
                        </div>
                        <div className={styles.name}>
                            <label htmlFor="email" className='text-black'>Project</label><br />
                            <input type="email" id='email' className='text-sm' style={{ backgroundColor: "hsl(250, 70%, 96%, 1)", width: "98%" }} placeholder='Write your project' />
                        </div>
                        <div className={styles.name}>
                            <label htmlFor="email" className='text-black'>Message</label><br />
                            <textarea className='text-sm' rows={5} cols={39} style={{ backgroundColor: "hsl(250, 70%, 96%, 1)" }} placeholder='Write your message' />
                        </div>
                        <button type='submit' className={styles.btn}>Send Message <SendIcon className='text-sm' /></button>
                    </form>
                </div>
            </div>
        </div>
    )
}