import React from 'react'
import styles from './Contacts.module.css'

const Contacts = () => {
    return (
        <>
        <div className={styles.wrapper}>
            <h1>Contact Us</h1>
            <hr/>
        </div>
        <div className={styles.content}>
            <div className={styles.contacts}>
                <p><span>Telegram: </span>@pinksky</p>
                <p><span>Phone: </span>+7707 929 3252</p>
                <p><span>E-mail: </span>lipn5757@gmail.com</p>
            </div>
            <hr className={styles.hr2}/>
            <form>
                <input type='text' placeholder='Name'/>
                <input type='text' placeholder='Phone'/>
                <input type='text' placeholder='E-mail'/>   
                <textarea placeholder='Message'/>
            </form>
            <div>
                <button className={styles.sendBtn}>Send</button>
            </div>
        </div>
        </>
    )
}

export default Contacts;