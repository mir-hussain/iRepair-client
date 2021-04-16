import React from "react";
import "./Dashboard.css";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Home from "../Home/Home";
import Sidebar from "./Sidebar/Sidebar";
import Book from "./DashboardContent/Book/Book";
import BookingList from "./DashboardContent/BookingList/BookingList";
import Review from "./DashboardContent/Review/Review";

const Dashboard = () => {
  let { path } = useRouteMatch();
  return (
    <div className='dashboard'>
      <Sidebar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path={`${path}/book`}>
          <Book />
        </Route>
        <Route path={`${path}/booking-list`}>
          <BookingList />
        </Route>
        <Route path={`${path}/review`}>
          <Review />
        </Route>
      </Switch>
    </div>
  );
};

export default Dashboard;
