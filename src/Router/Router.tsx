import { memo, VFC } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home } from '../components/Pages/Home';
import { HomeRoutes } from './HomeRoutes';
import { Header } from '../components/Organisms/Header';
import { Layout } from '../components/Templates/Layout';
import { Page404 } from '../components/Pages/Page404';

export const Router: VFC = memo(() => {
  return (
    <Switch>
      <Route
        path="/home"
        // prors matchのなかにあるurlを使用する　この場合のurl=> http://localhost:3000/home
        render={({ match: { url } }) => (
          <Switch>
            {HomeRoutes.map((route) => (
              <Route
                key={route.path}
                exact={route.exact}
                path={`${url}${route.path}`}
              >
                <Layout>{route.children}</Layout>
              </Route>
            ))}
          </Switch>
        )}
      />
      <Route path="*">
        <Page404 />
      </Route>
    </Switch>
  );
});
