import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import styles from './Ingredients.module.css'
import { Link, useParams } from 'react-router-dom'
import { NavItem } from 'react-bootstrap'

const Ingredients = () => {
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
                <h1>Ingredients</h1>
                <hr/>
            </div>
            <div className={styles.itembox}>
                <Link to='/'>gin</Link>
                <Link to='/'>rum</Link>
                <Link to='/'>amaretto</Link>
                <Link to='/'>chocolate</Link>
                <Link to='/'>gin</Link>
                <Link to='/'>rum</Link>
                <Link to='/'>amaretto</Link>
                <Link to='/'>chocolate</Link>
                <Link to='/'>gin</Link>
                <Link to='/'>rum</Link>
                <Link to='/'>amaretto</Link>
                <Link to='/'>chocolate</Link>
                <Link to='/'>gin</Link>
                <Link to='/'>rum</Link>
                <Link to='/'>amaretto</Link>
                <Link to='/'>chocolate</Link>
                <Link to='/'>gin</Link>
                <Link to='/'>rum</Link>
                <Link to='/'>amaretto</Link>
                <Link to='/'>chocolate</Link>
                <Link to='/'>gin</Link>
                <Link to='/'>rum</Link>
                <Link to='/'>amaretto</Link>
                <Link to='/'>chocolate</Link>
                <Link to='/'>gin</Link>
                <Link to='/'>rum</Link>
                <Link to='/'>amaretto</Link>
                <Link to='/'>chocolate</Link>
              
               
            </div>
        </div>
    )
}

export default Ingredients;