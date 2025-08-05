import { Routes, Route } from 'react-router';

import Navigation from "../navigation/Navigation";
import Header from "../header/Header";
import Footer from '../footer/Footer';

import CompanyPage from '../../pages/company/CompanyPage';
import StaffPage from '../../pages/company/StaffPage';
import VacancyPage from '../../pages/company/VacancyPage';
import BrendsPage from '../../pages/company/BrendsPage';
import ShopsPage from '../../pages/company/ShopsPage';



import ServicesPage from '../../pages/company/ServicesPage';

import ShopPage from '../../pages/shop/ShopPage';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <Routes>
        <Route path='/company' element={<CompanyPage />} />
        <Route path='/staff' element={<StaffPage />} />
        <Route path='/vacancy' element={<VacancyPage />} />
        <Route path='/brends' element={<BrendsPage />} />
        <Route path='/shops' element={<ShopsPage />} />



        <Route path='/services' element={<ServicesPage />} />

        <Route path='/shop' element={<ShopPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
