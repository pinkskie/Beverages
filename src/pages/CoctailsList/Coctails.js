import React from 'react'
import styles  from './Coctails.module.css'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'
import favorites from '../../assets/favorites.png'

const Coctails = () => {

    const [list , setList] = useState([])

    useEffect (() => {
        fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=')
        .then(res => res.json())
        .then(data => {
            setList(data.drinks);
        })
    },[])

    return (
        <div className={styles.wrapper}>
            {list.map(x => (
                <div key={x.idDrink} className={styles.coctail}>
                    <Link to={`/coctails/${x.idDrink}`}><img src={x.strDrinkThumb} alt={x.strDrink} /></Link>
                    <button className={styles.coctailName}><span>{x.strDrink}<img src={favorites} alt='favorites'/></span></button>
                </div>
            ))}
        </div>
    )
}

export default Coctails;