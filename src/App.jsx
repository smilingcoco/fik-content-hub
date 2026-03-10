import HubHomePage from './pages/HubHomePage';
import OriginsMapPage from './pages/OriginsMapPage';

function getRoute() {
  if (typeof window === 'undefined') {
    return '/';
  }

  const cleanPath = window.location.pathname.replace(/\/+$/, '');
  return cleanPath || '/';
}

export default function App() {
  const route = getRoute();

  if (route === '/origins-map') {
    return <OriginsMapPage />;
  }

  return <HubHomePage />;
}
