import "./App.css";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { Home } from "./components/Home.jsx";
import { Assistance } from "./components/Assistance.jsx";
import { Store } from "./components/Store.jsx";
import { Blog } from "./components/Blog.jsx";
import { Profile } from "./components/Profile.jsx";

function App() {
  return (
    <div className="App">
      hello world
      <BrowserRouter>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/Store">Page 1</Link>
              </li>
              <li>
                <Link to="/Assistance">Page 2</Link>
              </li>
              <li>
                <Link to="/Blog">Page 3</Link>
              </li>
              <li>
                <Link to="/page4">Page 4</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Store" component={Store} />
            <Route path="/Assistance" component={Assistance} />
            <Route path="/Blog" component={Blog} />
            <Route path="/Profile" component={Profile} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
