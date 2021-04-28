import { memo, VFC } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home } from '../components/Pages/Home';
import { HomeRoutes } from './HomeRoutes';
import {Header} from "../components/Organisms/Header"

export const Router: VFC = memo(() => {
  
  return (
    <Switch>
      <Route>
        <Home />
      </Route>
      <Route
        path="/home"
        render={({ match: { url } }) => (
          <Switch>
            {HomeRoutes.map((route) => (
              <Route key={route.path} exact={route.exact} path={`${url}route.path`} >
              <Header>{route.children}</Header>
              
              </Route>
            ))}
          </Switch>
        )}
      />
    </Switch>
  );
});
