import styles from './GlassesPage.module.css'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'


const GlassesPage = () => {
    const { id } = useParams();
    const [ingredients, setIngredients] = useState([])

    useEffect (() => {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list`)
        .then(res => res.json())
        .then(data => 
            setIngredients(data.drinks))
    }, [])

    return  (
        <div className={styles.wrapper}>
            <div>
                <h1>Glasses</h1>
                <hr/>
            </div>
            <div className={styles.itembox}>
                {ingredients.map(x => <Link to='/'>{ x.strGlass }</Link>)}
            </div>
        </div>
    )
}

export default GlassesPage;