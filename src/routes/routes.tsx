import { RouteType } from '../components/DynamicRoutes/DynamicRoutes.types';
import { Home, Sell } from '../pages';

export const routes: RouteType[] = [
  { element: <Home />, path: '/' },
  { element: <Sell />, path: '/vender/:section' },
  { element: <Sell />, path: '/vender' },
];
