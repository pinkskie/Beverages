import styles from './CategoriesPage.module.css'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'


const CategoriesPage = () => {
    const { id } = useParams();
    const [ingredients, setIngredients] = useState([])

    useEffect (() => {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`)
        .then(res => res.json())
        .then(data => 
            setIngredients(data.drinks))
    }, [])

    return  (
        <div className={styles.wrapper}>
            <div>
                <h1>Categories</h1>
                <hr/>
            </div>
            <div className={styles.itembox}>
                {ingredients.map(x => <Link to='/'>{ x.strCategory }</Link>)}
            </div>
        </div>
    )
}

export default CategoriesPage;