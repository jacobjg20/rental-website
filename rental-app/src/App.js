import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Header from "./Header"
import Login from "./Login"
import Home from "./Home"
import { useStateValue } from "./StateProvider"

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element= {
            <div>
              <Header />
              <Home />
            </div>
          } />
          <Route path="/Checkout" element= {
            <main>
              <p>Checkout Page</p>
            </main>
          } />
          <Route path="/Login" element= {
            <Login />
          } />
        </Routes>
    </Router>

  );
}

export default App;
