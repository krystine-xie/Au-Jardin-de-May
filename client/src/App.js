import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

// Pages
import HomePage from './views/HomePage';
import StorePage from './views/StorePage';
import AboutPage from './views/AboutPage';
import LoginPage from './views/LoginPage';
import RegisterPage from './views/RegisterPage';
import ContactPage from './views/ContactPage';


function App() {
  return (
    <div className="App">
      <Router>
        <Route
          path="/"
          exact
          render={() => 
          <HomePage />}
        />
        <Route
          path="/store"
          exact
          render={() => 
          <StorePage />}
        />
        <Route
          path="/about"
          exact
          render={() => 
          <AboutPage />}
        />
        <Route
          path="/login"
          exact
          render={() => 
          <LoginPage />}
        /> 
        <Route
          path="/register"
          exact
          render={() => 
          <RegisterPage />}
        />
        <Route
          path="/contact"
          exact
          render={() => 
          <ContactPage />}
        />                              
      </Router>
    </div>
  );
}

export default App;
