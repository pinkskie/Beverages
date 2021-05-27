import React from 'react'
import styles  from './Coctails.module.css'
import alco from '../../assets/cock.png'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'


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
                    <div className={styles.coctailName}>{x.strDrink}</div>
                </div>
            ))}
        </div>
    )
}

export default Coctails;