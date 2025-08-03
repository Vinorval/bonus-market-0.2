import { Routes, Route } from 'react-router';

import Navigation from "../navigation/Navigation";
import Header from "../header/Header";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <Routes></Routes>
    </div>
  );
}

export default App;
