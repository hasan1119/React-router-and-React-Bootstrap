import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/home/Home.js";
import About from "./components/about/About.js";
import NotFound from "./components/notFound/NotFound.js";
import Contact from "./components/contact/Contact.js";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Foods from "./components/foods/Foods.js";
import Details from "./components/details/Details.js";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>

          <Route path="/about">
            <About></About>
          </Route>

          <Route path="/contact">
            <Contact></Contact>
          </Route>

          <Route path="/foods/:id">
            <Details></Details>
          </Route>

          <Route exact path="/foods">
            <Foods></Foods>
          </Route>

          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route>
            <NotFound></NotFound>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
