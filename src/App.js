import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Home } from "./components/Home.jsx";
import { Assistance } from "./components/Assistance.jsx";
import { Store } from "./components/Store.jsx";
import { Blog } from "./components/Blog.jsx";
import { Profile } from "./components/Profile.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Store" element={<Store />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Assistance" element={<Assistance />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
