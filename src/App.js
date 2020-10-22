import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import { history } from "./history";
import ProtectedRoute from "./ProtectedRoute";
import { routes, protectTedRoute } from "./routes";

function App() {
  return (
    <Router history={history}>
      <React.Suspense fallback={""}>
        <Switch>
          {routes.map((route, i) => (
            <Route key={i} {...route} />
          ))}
          {protectTedRoute.map((route, i) => (
            <ProtectedRoute key={i} {...route} />
          ))}
        </Switch>
      </React.Suspense>
    </Router>
  );
}

export default App;
