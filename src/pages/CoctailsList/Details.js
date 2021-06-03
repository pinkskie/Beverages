import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import styles from './Details.module.css'
import { Link, useParams } from 'react-router-dom'
import { NavItem, Tab, Tabs } from 'react-bootstrap'
import germany from '../../assets/details/de.png'
import greatBritain from '../../assets/details/gb.png'
import italy from '../../assets/details/it.png'
import check from '../../assets/categories/checkmark 1.png'

const Details = () => {
    const { id } = useParams();
    const [details, setdetails] = useState({})
    const [key, setKey] = useState('home');

    useEffect (() => {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then(res => res.json())
        .then(data => 
            setdetails(data.drinks[0]))
    }, [])

    const convert = (obj) => {
        return Object
          .keys(obj)
        .filter(item => item.includes('strIngredient'))
        .map(item => obj[item])
        .filter(Boolean)
    }
    return  (
        <div className={styles.wrapper}>
            <div>
                <h1>{details.strDrink}</h1>
                <hr/>
            </div>
            <div className={styles.ingredients}>
                <span>
                    <h1>Ingredients</h1>
                    <section className={styles.itembox}>
                        {convert(details).map(x=> <Link>{x}</Link>)} {/* помогли */}
                    </section>
                </span>
            </div>
            <div className={styles.gridWrapper}>
                <section className={styles.details}>
                    <span>
                        <h1>Details</h1>
                        <ul>
                            <li><img src={check} alt='check'/> Category: {details.strCategory}</li>
                            <li><img src={check} alt='check'/> IBA: {details.strIBA}</li> {/* if null */}
                            <li><img src={check} alt='check'/> Alcoholic: {details.strAlcoholic}</li>
                            <li><img src={check} alt='check'/> Glass: {details.strGlass}</li>
                        </ul>
                    </span>
                </section>
            
                <section className={styles.detailsImage}>
                   <img src={details.strDrinkThumb} alt='coctail'/>
                </section>

                <section className={styles.detailsInstructions}>
                    <span>
                        <h1>Instructions</h1> 
                        <Tabs 
                            id="controlled-tab-example"
                            activeKey={key}
                            onSelect={(k) => setKey(k)}
                            className={`mb-3 ${styles.tabs}`}
                        >
                        <Tab eventKey="home" title={<img src={germany} alt='de'/>}>
                            <p>{details.strInstructionsDE}</p>
                        </Tab>
                        <Tab eventKey="profile" title={<img src={greatBritain} alt='gb'/>}>
                            <p>{details.strInstructions}</p>
                        </Tab>
                        <Tab eventKey="contact" title={<img src={italy} alt='it'/>}>
                            <p>{details.strInstructionsIT}</p>
                        </Tab>
                        </Tabs>
                     {/* изучить */}
                    </span>
                </section>
            </div>
            <button className={styles.Btn}><span>ADD TO WISHLIST</span></button>
        </div>
    )
}

export default Details;
