import "./App.css";
import HamburgerMenu from "./components/HamburgerMenu";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Portfolio from "./components/Pages/Portfolio";
import Blog from "./components/Pages/Blog";
import Contact from "./components/Pages/Contact";

function App() {
  return (
    <>
      <Router>
        <HamburgerMenu />

        <div className="pages">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/blog" component={Blog} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
