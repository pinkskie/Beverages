import React from 'react'
import styles from './Сategories.module.css'
import glassesLogo from '../../assets/categories/glass 1.png'
import wineLogo from '../../assets/categories/wine 1.png'
import ingridLogo from '../../assets/categories/ingrid 1.png'
import { Link } from 'react-router-dom'
import check from '../../assets/categories/checkmark 1.png'

const Categories = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.glasses}>
                <section>
                    <h3>Large selection of glasses</h3>
                    <ul>
                        <li><img src={check} alt='check'/> A glass is a visiting card of any cocktail.</li>
                        <li><img src={check} alt='check'/> A prerequisite for a good cocktail is its appearance.</li>
                        <li><img src={check} alt='check'/> A properly selected glass is 50% of success.</li>
                    </ul>
                    <div><Link to='/glassesPage' className={styles.showBtn}>Show</Link></div>
                </section>
                    <div className={styles.glassesImg}>
                        <img src={glassesLogo} alt='glasses'/>
                    </div>
            </div>
            <div className={styles.categories}>
                <div className={styles.categoriesImg}>
                    <img src={wineLogo} alt='wine'/>
                </div>
                <section>
                    <h3>Our database contains a wide variety <br/> of cocktail categories.</h3>
                    <ul>
                        <li><img src={check} alt='check'/> You will find any ingredients you like.</li>
                        <li><img src={check} alt='check'/> Cocktails of different categories for any evening.</li>
                        <li><img src={check} alt='check'/> For each ingredient, you are guaranteed to find several cocktails.</li>
                    </ul>
                    <div><Link to='/categoriesPage' className={styles.showBtn}>Show</Link></div>
                </section>
            </div>
            <div className={styles.ingredients}>
                <div className={styles.ingredientsImg}> 
                    <img src={ingridLogo} alt='ingrid'/>
                </div>
                <section>
                    <h3>Our database contains a wide variety <br/> of cocktail categories.</h3>
                    <ul>
                        <li><img src={check} alt='check'/> You will find any ingredients you like.</li>
                        <li><img src={check} alt='check'/> Cocktails of different categories for any evening.</li>
                        <li><img src={check} alt='check'/> For each ingredient, you are guaranteed to find several cocktails.</li>
                    </ul>
                    <div><Link to='/ingredientsPage' className={styles.showBtn}>Show</Link></div>
                </section>
            </div>
        </div>
    )
}

export default Categories;