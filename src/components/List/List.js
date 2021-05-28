import styles from  './List.module.css'
import React from 'react'
import { Link } from 'react-router-dom'
import favorites from '../../assets/favorites.png'

const List = ({data}) => (
    <>
        <h1 className={styles.h1x}>Cocktails</h1>
        <hr className={styles.hrr}/>
        <div className={styles.wrapper}>
            {data.map(x => (
                <div key={x.idDrink} className={styles.coctail}>
                    <Link to={`/coctails/${x.idDrink}`}><img src={x.strDrinkThumb} alt={x.strDrink} /></Link>
                    <button className={styles.coctailName}><span>{x.strDrink}<img src={favorites} alt='favorites'/></span></button>
                </div>
            ))}
        </div>
    </>
)

export default List;