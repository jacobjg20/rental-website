import './css/App.css';
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
            <div>
              <Header />
              <main>
                <p>Checkout Page</p>
              </main>
            </div>
          } />
          <Route path="/Login" element= {
            <div>
              <Header />
              <Login />
            </div>
          } />
        </Routes>
    </Router>

  );
}

export default App;
