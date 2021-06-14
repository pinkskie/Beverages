import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import styles from './Ingredients.module.css'
import styles2 from '../CoctailsList/Coctails.module.css' 
import { Link, useParams } from 'react-router-dom'
import favorites from '../../assets/favorites.png'


const Ingredients = () => {
    const {ingredients_name } = useParams();
    const [ingredients, setIngredients] = useState([])
    const [list , setList] = useState([])

    useEffect (() => {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list`)
        .then(res => res.json())
        .then(data => 
            setIngredients(data.drinks))
    }, [])

    useEffect (() => {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredients_name}`)
        .then(res => res.json())
        .then(data=>
            setList(data.drinks))
    }, [ingredients_name]) 
    
    return ingredients_name ? (
        <>
        <h1 className={styles2.h1x}>{ingredients_name}</h1>  {/* Component */}
        <hr className={styles2.hrr}/>
        <div className={styles2.wrapper}>
            {list.map(x => (
                <div key={x.idDrink} className={styles2.coctail}>
                    <Link to={`/coctails/${x.idDrink}`}><img src={x.strDrinkThumb} alt={x.strDrink} /></Link>
                    <button className={styles2.coctailName}><span>{x.strDrink}<img src={favorites} alt='favorites'/></span></button>
                </div>
            ))}
        </div>
        </>
    ) : (

        <div className={styles.wrapper}>
            <div> {/* Component */}
                <h1>Ingredients</h1>
                    <div className={styles.divider}>
                        <hr/>
                        <div></div>
                        <hr/>
                    </div>
            </div>
            <div className={styles.itembox}>
                {ingredients.map(x => <Link to={`/ingredientsPage/${x.strIngredient1}`}>{ x.strIngredient1 }</Link>)}
            </div>
        </div>
    )
}

export default Ingredients;