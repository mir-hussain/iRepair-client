import "./App.css";
import Home from "../Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Navbar from "../SharedComponents/Navbar/Navbar";
import Dashboard from "../Dashboard/Dashboard";
import Admin from "../Admin/Admin";
import Services from "../Services/Services";

function App() {
  return (
    <div className='dashboard'>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/home'>
            <Home />
          </Route>
          <Route path='/dashboard'>
            <Dashboard />
          </Route>
          <Route path='/admin'>
            <Admin />
          </Route>
          <Route path='/services'>
            <Services />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
