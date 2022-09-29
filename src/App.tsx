import { DynamicRoutes } from './components';
import { GlobalStyle } from './components/styles/globalStyles';
import { routes } from './routes/routes';

function App() {
  return (
    <>
      <GlobalStyle />
      <DynamicRoutes routes={routes} />
    </>
  );
}

export default App;
