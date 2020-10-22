import React from "react";
const Login = React.lazy(() => import("./components/auth/Login"));
const PageNotFound = React.lazy(() => import("./components/page404"));
export const protectTedRoute = [
  {
    path: "/",
    exact: true,
    component: Home,
  },
  {
    component: PageNotFound,
  },
];
export const routes = [
  {
    path: "/login",
    component: Login,
  },
];
