import HubHomePage from './pages/HubHomePage';
import OriginsMapPage from './pages/OriginsMapPage';
import BenchmarkCmssPage from './pages/BenchmarkCmssPage';

function getRoute() {
  if (typeof window === 'undefined') {
    return '/';
  }

  const hashRoute = window.location.hash.replace(/^#/, '').replace(/\/+$/, '');
  if (hashRoute.startsWith('/')) {
    return hashRoute || '/';
  }

  const base = (import.meta.env.BASE_URL || '/').replace(/\/+$/, '');
  const pathname = window.location.pathname.replace(/\/+$/, '');

  if (!base || base === '/') {
    return pathname || '/';
  }

  if (pathname === base) {
    return '/';
  }

  if (pathname.startsWith(`${base}/`)) {
    return pathname.slice(base.length) || '/';
  }

  return pathname || '/';
}

export default function App() {
  const route = getRoute();

  if (route === '/origins-map') {
    return <OriginsMapPage />;
  }

  if (route === '/benchmark-cmss') {
    return <BenchmarkCmssPage />;
  }

  return <HubHomePage />;
}
