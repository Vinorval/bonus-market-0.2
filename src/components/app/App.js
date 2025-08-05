import { Routes, Route } from 'react-router';

import Navigation from "../navigation/Navigation";
import Header from "../header/Header";
import Footer from '../footer/Footer';

import CompanyPage from '../../pages/company/CompanyPage';
import StaffPage from '../../pages/company/StaffPage';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <Routes>
        <Route path='/company' element={<CompanyPage />} />
        <Route path='/staff' element={<StaffPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
