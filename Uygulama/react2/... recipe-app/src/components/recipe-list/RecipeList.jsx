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

const RecipeList = ({ recipes, deleteNote, startEditing }) => {
  const handleDelete = (recipeId) => {
    deleteNote(recipeId);
  };

  const handleEdit = (recipe) => {
    startEditing(recipe);
  };

  return (
    <div className='recipe-list'>
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <RecipeCard
            {...recipe}
            deleteNote={() => handleDelete(recipe.id)}
            onEdit={() => handleEdit(recipe)}
          />
        </div>
      ))}
    </div>
  );
};

export default RecipeList;