import "./App.css";
import Home from "../Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Navbar from "../SharedComponents/Navbar/Navbar";
import Dashboard from "../Dashboard/Dashboard";
import Admin from "../Admin/Admin";
import Services from "../Services/Services";
import Login from "../Login/Login";
import { createContext, useState } from "react";

export const UserContext = createContext();

function App() {
  const [user, setUser] = useState({
    email: "",
    selectedService: {
      name: "",
      status: "pending",
    },
  });
  return (
    <UserContext.Provider value={[user, setUser]}>
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
          <Route path='/login'>
            <Login />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
