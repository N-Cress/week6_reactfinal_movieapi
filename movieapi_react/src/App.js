import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Search from "./pages/Search.jsx"
import Movie from "./pages/Movie.jsx";
import "./styles.css";

function App() {
  return (
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home/>}> </Route>
            <Route path={"/search"} element={<Search/>}> </Route>
            <Route path={"/search/:id"} element={<Search/>}> </Route>
            <Route path={"/movies/:id"} element={<Movie/>}> </Route>
          </Routes>
        </div>
      </Router>
  );
}

export default App;
