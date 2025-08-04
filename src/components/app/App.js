import { Routes, Route } from 'react-router';

import Navigation from "../navigation/Navigation";
import Header from "../header/Header";
import Footer from '../footer/Footer';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <Routes></Routes>
      <Footer />
    </div>
  );
}

export default App;
