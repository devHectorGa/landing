import { DynamicRoutes } from './components';
import { routes } from './routes/routes';

function App() {
  return <DynamicRoutes routes={routes} />;
}

export default App;
