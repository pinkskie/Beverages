import React from 'react'
import styles from './Contacts.module.css'

const Contacts = () => {
    return (
        <>
        <div className={styles.wrapper}>
            <div className={styles.title}>
                <h1>Contact Us</h1>
                    <div className={styles.divider}>
                        <hr/>
                        <div></div>
                        <hr/>
                    </div>
            </div>
            <div className={styles.content}>
                <div className={styles.contacts}>
                    <p><span>Telegram: </span>@pinksky</p>
                    <p><span>Phone: </span>8-800 555 3535</p>
                    <p><span>E-mail: </span>lipPeep@gmail.com</p>
                </div>
                <hr className={styles.hr2}/>
                <form className={styles.data}>
                    <input type='text' placeholder='Name'/>
                    <input type='text' placeholder='Phone'/>
                    <input type='text' placeholder='E-mail'/>   
                    <textarea placeholder='Message'/>
                </form>
                <div>
                    <button className={styles.sendBtn}>Send</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default Contacts;