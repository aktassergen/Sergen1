import React, { useContext } from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './components/home/Home';
import RecipeList from './components/recipe-list/RecipeList';
import Setting from "./components/settings/Setting"; // Setting bileşenini sadece bir kez import et
import { ApiProvider } from "./context/ApiContext";
import { UserPreferencesContext } from "./context/UserPreferencesContext";
import LoginPage from "./components/login-page/LoginPage";
import PrivateRoute from "./services/PrivateRoute";

function App() {
  const { theme } = useContext(UserPreferencesContext); 

  return (
    <ApiProvider>
      <div className={`app ${theme === 'dark' ? 'dark-mode' : 'light-mode'}`}>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/recipe-list" element={<RecipeList />} />
            {/* <Route path="/settings" element={<Setting />} />  */}
            <Route
              path="/settings"
              element={<PrivateRoute element={<Setting />} />}
            />
          </Routes>
        </Router>
      </div>
    </ApiProvider>
  );
}

export default App;
