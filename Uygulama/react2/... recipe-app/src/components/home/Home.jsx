import React from 'react'
import './Home.css'
import NewRecipeForm from '../newRecipeForm/NewRecipeForm'

const Home = () => {
  return (
    <div className='home'>

    <h1>Welcome to the Recipe Sharing Platform</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, incidunt.</p>
    <NewRecipeForm/>
    </div>
  )
}

export default Home