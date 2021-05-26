import React from 'react'
import styles from './Сategories.module.css'
import glassesLogo from '../../assets/categories/glass 1.png'
import wineLogo from '../../assets/categories/wine 1.png'
import ingridLogo from '../../assets/categories/ingrid 1.png'
import check from '../../assets/categories/checkmark 1.png'

const Categories = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.glasses}>
                <section><h3>Large selection of glasses</h3>
                    <ul>
                        <li>A glass is a visiting card of any cocktail.</li>
                        <li>A prerequisite for a good cocktail is its <br/>appearance.</li>
                        <li>A properly selected glass is 50% of success.</li>
                    </ul>
                    <button>Show</button>
                </section>
                    <div>
                        <img src={glassesLogo} alt='glasses'/>
                    </div>
            </div>
            <div className={styles.categories}>
                <div>
                    <img src={wineLogo} alt='wine'/>
                </div>
                <section><h3>Our database contains a wide variety <br/> of cocktail categories.</h3>
                    <ul>
                        <li>You will find any ingredients you like.</li>
                        <li>Cocktails of different categories for any <br/> evening.</li>
                        <li>For each ingredient, you are guaranteed to <br/> find several cocktails.</li>
                    </ul>
                    <button>Show</button>
                </section>
            </div>
            <div className={styles.ingredients}>
                <div>
                    <img src={ingridLogo} alt='ingrid'/>
                </div>
                <section><h3>Our database contains a wide variety <br/> of cocktail categories.</h3>
                    <ul>
                        <li>You will find any ingredients you like.</li>
                        <li>Cocktails of different categories for any <br/> evening.</li>
                        <li>For each ingredient, you are guaranteed to <br/> find several cocktails.</li>
                    </ul>
                    <button>Show</button>
                </section>
            </div>
        </div>
    )
}

export default Categories;