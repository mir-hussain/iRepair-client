import "./App.css";
import Home from "../Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "../SharedComponents/Navbar/Navbar";
import Dashboard from "../Dashboard/Dashboard";
import Admin from "../Admin/Admin";
import Login from "../Login/Login";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
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
          <PrivateRoute path='/dashboard'>
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute path='/admin'>
            <Admin />
          </PrivateRoute>
          <Route path='/login'>
            <Login />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
