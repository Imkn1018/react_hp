import { Home } from '../components/Pages/Home';
import { Profile } from '../components/Pages/Profile';
import { Images } from '../components/Pages/Images';
import { Page404 } from '../components/Pages/Page404';

export const HomeRoutes = [
  {
    path: '/',
    exact: true,
    children: <Home />,
  },
  {
    path: '/profile',
    exact: false,
    children: <Profile />,
  },
  {
    path: '/Images',
    exact: false,
    children: <Images />,
  },
  {
    path: '*',
    exact: false,
    children: <Page404 />,
  },
];
