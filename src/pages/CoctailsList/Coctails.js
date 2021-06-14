import React from 'react'
import { useEffect , useState } from 'react'
import styles from './Coctails.module.css'
import { Link } from 'react-router-dom'
import favorites from '../../assets/favorites.png'
import useLocalStorage from '../../utils/useLocalStorage'


const Coctails = () => {

    const [list , setList] = useState([])
    const [wishlist, setWishlist] = useLocalStorage('wishlist',[]);
    
    const removeFromWishList = id => setWishlist([...wishlist.filter(cocktail => cocktail.idDrink !== id)])
    const addToWishList = cocktail => {
        if(wishlist.find((x) => x.idDrink === cocktail.idDrink)){
            removeFromWishList(cocktail.idDrink)
        } else {
            setWishlist([...wishlist,cocktail])  
        }
    };
    
    useEffect (() => {
        fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=')
        .then(res => res.json())
        .then(data => {
            setList(data.drinks);
        })
    },[])

    return (
        <>
        <h1 className={styles.h1x}>Cocktails</h1>
        <div className={styles.divider}>
            <hr/>
            <div></div>
            <hr/>
        </div>
        <div className={styles.wrapper}>
            {list.map(x => (
                <div key={x.idDrink} className={styles.coctail}>
                    <Link to={`/coctails/${x.idDrink}`}><img src={x.strDrinkThumb} alt={x.strDrink} /></Link>
                    <button className={styles.coctailName}><span>{x.strDrink}<img src={favorites} onClick={() => addToWishList(x)} alt='favorites'/></span></button>
                </div>
            ))}
        </div>
        </>
    )
}

export default Coctails;