import { useState, useEffect } from 'react'

// Search by drink id: www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007

// Search by ingredient: www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin

// Get random: www.thecocktaildb.com/api/json/v1/1/random.php

function getIngredients (obj) {
    let drinkIng = []
    let i = 1
    while (obj[`strIngredient${i}`] != null || obj[`strMeasure${i}`] != null) {
        let ing = obj[`strIngredient${i}`]
        let measure = obj[`strMeasure${i}`]
        if(!drinkIng.includes(ing)){
            drinkIng.push({ ingredient: ing, measure: measure })
        }
        i++
    }
    return drinkIng
}





export default function Drinks() {
    const [drinks, setDrinks] = useState([])
    const [ingredients, setIngredients] = useState([])

    async function fetchDrinks() {
        try {
            const res = await fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
            const data = await res.json()
            setDrinks(data.drinks[0])
            setIngredients(getIngredients(data.drinks[0]))
            console.log('data', data.drinks)
        } catch (err) {
            console.error(err);
        }
    }

  return (
    <>
    <form>
        <input type="text" name="" />
    </form>
    <button
        onClick={fetchDrinks}
    >
        Mix It Up! <i class="fa-solid fa-shuffle"></i> 
    </button>
    
        <section className='drink-container'>
            <ul>
                {drinks.strDrink && <li>Name: {drinks.strDrink}</li>}
                {drinks.strDrinkThumb && <img src={drinks.strDrinkThumb} alt="drink"></img>}
                {drinks.strVideo && 
                <video
                    // src={drinks.strVideo}
                    width="300"
                    height="300">
                    <source src={drinks.strVideo}/>
                </video>}
                <li>{drinks.strInstructions}</li>
                {ingredients && ingredients.map(el => {
                    if(el.ingredient != null) {
                        return <li key={`${el.ingredient}-${el.measure}`}>{`${el.ingredient}: ${el.measure ? el.measure : ''}`}</li>
                    }
                })}
            </ul>
        </section>
    </>
  )
}
