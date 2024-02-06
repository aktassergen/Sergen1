import React from 'react'
import RecipeCard from '../recipe-card/RecipeCard'
import { useApi } from '../../context/ApiContext';
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

const RecipeList = () => {
  const { recipes, deleteRecipe, editRecipe } = useApi();

  const handleDelete = (id) => {
    deleteRecipe(id);
  };

  return (
    <div className='recipe-list'>
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <RecipeCard
            {...recipe}
            onDelete={handleDelete} // onDelete prop'u ile delete işlemi sağlanır
            onEdit={editRecipe} // Sadece fonksiyonu iletiyoruz, veri değil
          />
        </div>
      ))}
    </div>
  );
};

export default RecipeList;