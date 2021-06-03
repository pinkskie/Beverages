import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import styles from './Ingredients.module.css'
import { Link, useParams } from 'react-router-dom'


const Ingredients = () => {
    const { id } = useParams();
    const [ingredients, setIngredients] = useState([])

    useEffect (() => {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list`)
        .then(res => res.json())
        .then(data => 
            setIngredients(data.drinks))
    }, [])

    return  (
        <div className={styles.wrapper}>
            <div>
                <h1>Ingredients</h1>
                <hr/>
            </div>
            <div className={styles.itembox}>
                {ingredients.map(x => <Link to='/'>{ x.strIngredient1 }</Link>)}
            </div>
        </div>
    )
}

export default Ingredients;