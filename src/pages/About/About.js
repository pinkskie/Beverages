import React from 'react'
import styles  from  './About.module.css'
import face from '../../assets/face.jpg'
const About = () => {
    return (
        <>
            <div className={styles.wrapper}>
                <h1>About Us</h1>    
                <hr/>
            </div>
            <div className={styles.content}>
                <img src={face} alt='wrong'/>
                <div>
                    <p>Beverages Digital started as a humble side project in May 2021 and quickly <br/>
                    <span>doesn't</span> became a reference publication that took on a life of its own. <br/>
                    You have made this possible and I am incredibly grateful for this amazing <br/>
                    opportunity to inspire you to become your best versions.</p>
                    <p>This store is for you, the alcoholics, the affluents, lovers just for drink or for <br/>
                    the ambitious who dare to think innovatively at a time of unprecedented change.</p>
                </div>
            </div>
        </>
    )
}

export default About;