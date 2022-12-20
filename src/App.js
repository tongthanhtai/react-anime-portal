import logo from './logo.svg';
import './App.css';
import { AboutPages } from './pages/AboutPages/AboutPages';
import { HomePage } from './pages/HomePage/HomePage';
import { Header } from './components/header/Header';
import { Banner } from './components/banner/Banner';


function App() {
  return (
    <div>
      <Header />
      <Banner />
      <HomePage />
      <AboutPages />
    </div>
  );
}

export default App;
