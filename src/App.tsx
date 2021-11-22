import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './routes';

export function App() {
  return (
    <Router>
      <Header />
      <Routes />
      <Footer />
    </Router>
  );
}
