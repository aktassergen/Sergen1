import React, { useContext } from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './components/home/Home';
import RecipeList from './components/recipe-list/RecipeList';
import Setting from "./components/settings/Setting";
import { ApiProvider } from "./context/ApiContext";
import { UserPreferencesContext } from "./context/UserPreferencesContext";

function App() {
  const { theme } = useContext(UserPreferencesContext); 

  return (
    <ApiProvider>
      <div className={`app ${theme === 'dark' ? 'dark-mode' : 'light-mode'}`}>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipe-list" element={<RecipeList />} />
            <Route path="/settings" element={<Setting />} /> {/* Eklendi */}
          </Routes>
        </Router>
      </div>
    </ApiProvider>
  );
}

export default App;
