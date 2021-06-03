import React, { useEffect, useState } from 'react'
import styles from './SearchPage.module.css'

const SearchPage = () => {
    
    const [inputText, setInputText] = useState('')
    // useEffect(() => {
    //     fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=')
    //     .then(res => res.json())
    //     .then(data => 
    //         setSearch(data.drinks))
    // },[])
    useEffect(() => {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputText}`)
        .then(res => res.json())
        .then(data => 
        setInputText(data.drinks))
    },[inputText])
    return (
        <>
            {/* // <List data={search}/> */}
            
                <h1 className={styles.h1x}>Search</h1>
                <hr className={styles.hrr}/>
                <div className={styles.searchInner}>
                <input 
                    type='text' 
                    id='input'
                    placeholder='COCKTAIL NAME'
                    onChange={e => setInputText(e.target.value)}>
                </input>  
                <button>Search</button>
            </div>
        </>
    )
}

export default SearchPage;