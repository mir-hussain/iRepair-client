import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Home from "../Home/Home";
import AdminSidebar from "./AdminComponents/AdminSidebar/AdminSidebar";
import OrderList from "./AdminComponents/OrderList/OrderList";
import AddService from "./AdminComponents/AddService/AddService";
import MakeAdmin from "./AdminComponents/MakeAdmin/MakeAdmin";
import ManageServices from "./AdminComponents/ManageServices/ManageService";
import "./Admin.css";

const Admin = () => {
  let { path } = useRouteMatch();

  return (
    <div className='admin'>
      <AdminSidebar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path={`${path}/order-list`}>
          <OrderList />
        </Route>
        <Route path={`${path}/add-service`}>
          <AddService />
        </Route>
        <Route path={`${path}/make-admin`}>
          <MakeAdmin />
        </Route>
        <Route path={`${path}/manage-service`}>
          <ManageServices />
        </Route>
      </Switch>
    </div>
  );
};

export default Admin;
