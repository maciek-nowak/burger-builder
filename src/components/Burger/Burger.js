import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import './Burger.css'

const burger = (props) => {
    let ingredientsNames = Object.keys(props.ingredients);
    let fullIngredientsList = [];

    for (const ingredient of ingredientsNames) {
        for (let i = 0; i < props.ingredients[ingredient]; i++) {
            fullIngredientsList.push(ingredient);
        }
    }

    console.log(fullIngredientsList);

    const innerIngredients = fullIngredientsList.map(
        (ingredientName, index) => <BurgerIngredient type={ingredientName} key={ingredientName + index}/>
    );

    return (
        <div className='Burger'>
            <BurgerIngredient type="bread-top"/>
            {innerIngredients.length ? innerIngredients : <p>Start burger customization</p>}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
}

export default burger;