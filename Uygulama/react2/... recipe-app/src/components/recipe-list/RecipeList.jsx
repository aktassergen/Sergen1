import React from 'react'
import RecipeCard from '../recipe-card/RecipeCard'
import './recipeList.css' 
// const RecipeList = ({myName, myLName, age, title, myArray}) => {
//   return (
//     <div>
//         <p>{myName}</p>
//         <p>{myLName}</p>
//         <p>{age}</p>
//         <p>{title}</p>
//         {myArray.map((num) => <p>{num * 2}</p>)}
//     </div>
//   )
// }
const RecipeList = ({recipes}) => {
  return (
    <div className='recipe-list'>
        {recipes.map((recipe) => <RecipeCard key={recipe.id} {...recipe} />)}
    </div>
  )
}

export default RecipeList