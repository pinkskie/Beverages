import React, { useEffect, useState } from 'react'
import styles from './SearchPage.module.css'
import { Link } from 'react-router-dom'
import favorites from '../../assets/favorites.png'

const SearchPage = () => {
    
    const [inputText, setInputText] = useState('')
    const [searchResult, setSearchResult] = useState([])
    
    const handleChange = e => { 
        setInputText(e.target.value);
    } 

    useEffect(() => {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputText}`)
        .then(res => res.json())
        .then(data => {
            if(data.drinks !== null){
                setSearchResult(data.drinks)
            } else {
                setSearchResult([])
                }
            } 
        )
    },[inputText])

    
    return (
        <>
            <div className={styles.wrapper}>
                <h1 className={styles.h1x}>Search</h1>
                    <div className={styles.divider}>
                        <hr/>
                        <div></div>
                        <hr/>
                    </div>
                <div className={styles.searchInner}>
                    <input 
                        type='text' 
                        id='input'
                        placeholder='COCKTAIL NAME'
                        onChange={handleChange}>
                    </input>  
                    <button>Search</button>
                </div>
            <div className={styles.gridWrapper}> 
                {searchResult.map((val, key) => {
                    return (
                    <div key={val.idDrink} className={styles.coctail}>
                        <Link to={`/coctails/${val.idDrink}`}><img src={val.strDrinkThumb} alt={val.strDrink} /></Link>
                        <button className={styles.coctailName}><span>{val.strDrink}<img src={favorites} alt='favorites'/></span></button>
                    </div>
                    )
                })}
            </div>
        </div>
        </>
    )
}

export default SearchPage;