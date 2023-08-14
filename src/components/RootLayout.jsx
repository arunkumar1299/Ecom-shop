import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import { Provider } from "react-redux";
import store from "../store/store";

const RootLayout = () => {
  return (
    <div>
      <Provider store={store}>
      <Navigation />
      <main>
        <Outlet />
      </main>
      </Provider>
    </div>
  );
};

export default RootLayout;
