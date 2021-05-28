import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import styles from './Details.module.css'
import { Link, useParams } from 'react-router-dom'
import { NavItem } from 'react-bootstrap'
import germany from '../../assets/details/de.png'
import greatBritain from '../../assets/details/gb.png'
import italy from '../../assets/details/it.png'
import check from '../../assets/categories/checkmark 1.png'

const Details = () => {
    const { id } = useParams();
    const [ingredients, setIngredients] = useState([])


    useEffect (() => {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then(res => res.json())
        .then(data => 
            setIngredients(data.drinks))
    }, [])

  
    return  (
        <div className={styles.wrapper}>
            <div>
                <h1>{ingredients.map(x => (x.strDrink))}</h1>
                <hr/>
            </div>
            <div className={styles.ingredients}>
                <span>
                    <h1>Ingredients</h1>
                    <section className={styles.itembox}>
                    </section>
                </span>
            </div>
            <div className={styles.gridWrapper}>

                
                    <section className={styles.details}>
                        <h1>Details</h1>
                        <ul>
                            <li><img src={check} alt='check'/> Category: {ingredients.map(x => (x.strCategory))}</li>
                            <li><img src={check} alt='check'/> IBA: {ingredients.map(x => (x.strIBA))} Contemporary Classics</li> {/* if null */}
                            <li><img src={check} alt='check'/> Alcoholic: {ingredients.map(x => (x.strAlcoholic))}</li>
                            <li><img src={check} alt='check'/> Glass: {ingredients.map(x => (x.strGlass))}</li>
                        </ul>
                    </section>
               

                <section className={styles.detailsImage}>
                    {ingredients.map(x => <img src={x.strDrinkThumb} alt='coctail'/>)}
                </section>

                <section className={styles.detailsInstructions}>
                    <h1>Instructions</h1>
                    <span>
                        <button><img src={germany} alt='de'/></button>
                        <button><img src={greatBritain} alt='gb'/></button>
                        <button><img src={italy} alt='it'/></button>
                    </span>
                    <p>{ingredients.map(x => x.strInstructions)}</p>
                </section>
            </div>
            <button className={styles.Btn}><span>ADD TO WISHLIST</span></button>
        </div>
    )
}

export default Details;