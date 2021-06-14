import styles from './CategoriesPage.module.css'
import styles2 from '../CoctailsList/Coctails.module.css' 
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import favorites from '../../assets/favorites.png'

const CategoriesPage = () => {
    const {categories_name} = useParams()
    const [ingredients, setIngredients] = useState([])
    const [list , setList] = useState([])

    useEffect (() => {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`)
        .then(res => res.json())
        .then(data => 
            setIngredients(data.drinks))
    }, [])

    useEffect (() => {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${categories_name}`)
        .then(res => res.json())
        .then(data => 
            setList(data.drinks))    
        },[categories_name])

    return categories_name ? (
        <>
        <h1 className={styles2.h1x}>{categories_name}</h1>  {/* Component */}
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
            <div>
                <h1>Categories</h1>
                    <div className={styles.divider}>
                        <hr/>
                        <div></div>
                        <hr/>
                    </div>
            </div>
            <div className={styles.itembox}>
                {ingredients.map(x => <Link to={`/categoriesPage/${x.strCategory}`}>{ x.strCategory }</Link>)}
            </div>
        </div>
    )
}

export default CategoriesPage;
