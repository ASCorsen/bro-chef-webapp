import './App.css';
import { Switch, Route } from 'react-router-dom';
import NavBar from "./components/navigation/NavBar";
import Home from "./pages/Home";
import Recipe from "./pages/Recipe";
import AboutUs from "./pages/AboutUs";
import OurApp from "./pages/OurApp";
import Contacts from "./pages/Contacts";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import Footer from "./components/footer/Footer";

function App() {
  return (
<>
  <NavBar/>
  <div className="content">
    <Switch>
      <Route exact path="/">
      <Home/>
      </Route>
      <Route path="/recipe-info/:id">
        <Recipe/>
      </Route>
      <Route path="/about-us">
        <AboutUs/>
      </Route>
      <Route path="/our-app">
        <OurApp/>
      </Route>
      <Route path="/contacts">
        <Contacts/>
      </Route>
      <Route path="/log-in">
        <LogIn/>
      </Route>
      <Route path="/sign-up">
        <SignUp/>
      </Route>
    </Switch>
</div>
  <Footer/>
</>
  );
}

export default App;
