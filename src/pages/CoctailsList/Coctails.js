import React from 'react'
import { useEffect,useState } from 'react'
import List from 'components/List/List'

const Coctails = () => {

    const [list , setList] = useState([])

    useEffect (() => {
        fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=')
        .then(res => res.json())
        .then(data => {
            setList(data.drinks);
        })
    },[])
{/* понять */}
    return (
        <List data={list}/> 
    )
}

export default Coctails;