import React from 'react'
import styles from './Wishlist.module.css'
import useLocalStorage from '../../utils/useLocalStorage'
import { Link } from 'react-router-dom'
import favorites from '../../assets/favorites.png'

const Wishlist = () => {
    
    const [wishlist, setWishlist] = useLocalStorage('wishlist',[]);
    const removeFromWishList = id => setWishlist([...wishlist.filter(cocktail => cocktail.idDrink !== id)])

    return (
        <>
        <div className={styles.wrapper}>
            <h1 className={styles.title}>Wishlist</h1>
            <div className={styles.divider}>
                <hr/>
                <div></div>
                <hr/>
            </div>
            <div className={styles.gridWrapper}>
            {wishlist.map(x => (
                <div key={x.idDrink} className={styles.coctail}>
                    <Link to={`/coctails/${x.idDrink}`}><img src={x.strDrinkThumb} alt={x.strDrink} /></Link>
                    <button className={styles.coctailName}><span>{x.strDrink}<img src={favorites} onClick={() => removeFromWishList(x.idDrink)} alt='favorites'/></span></button>
                </div>
                ))}
            </div>
        </div>
        </>
    )
}

export default Wishlist;
