import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navigation_Bar from "./Navigation_Bar";
import Home from "./Home";
import Footer from "./Footer";
import About from "./About";
import Product from "./Product";
import Contact from "./Contact";
import react from "react";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation_Bar />
        <Switch>
        <Route path="/" exact component={() => <Home />} />
        <Route path="/about" exact component={() => <About />} />
        <Route path="/products" exact component={() => <Product />} />
        <Route path="/contact" exact component={() => <Contact />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
