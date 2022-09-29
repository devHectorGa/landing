import { RoutesProps } from './DynamicRoutes.types';
import { Layout } from '../layout';
import { Routes, Route } from 'react-router-dom';

export const DynamicRoutes = ({ routes: incomeRoutes, ...props }: RoutesProps): JSX.Element => {
  const routes = incomeRoutes.map(({ layout: RouteLayout = Layout, element, ...props }) => (
    <Route {...props} element={<RouteLayout>{element}</RouteLayout>} />
  ));

  return <Routes {...props}>{routes}</Routes>;
};
