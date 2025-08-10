import { Routes, Route } from 'react-router';

import Navigation from "../navigation/Navigation";
import Header from "../header/Header";
import Footer from '../footer/Footer';

import CompanyPage from '../../pages/company/CompanyPage';
import StaffPage from '../../pages/company/StaffPage';
import VacancyPage from '../../pages/company/VacancyPage';
import BrendsPage from '../../pages/company/BrendsPage';
import ShopsPage from '../../pages/company/ShopsPage';


import PromotionsPage from '../../pages/company/PromotionsPage';
import ServicesPage from '../../pages/company/ServicesPage';
import NewsListPage from '../../pages/company/NewsListPage';
import NewsPage from '../../pages/company/NewsPage';
import ShopPage from '../../pages/shop/ShopPage';
import DeliveryPage from '../../pages/shop/DeliveryPage';
import PayInfoPage from '../../pages/shop/PayInfoPage';
import RefundPage from '../../pages/shop/RefundPage';
import OrderCreatePage from '../../pages/shop/OrderCreatePage';

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
        <Route path='/news-list' element={<NewsListPage />} />
        <Route path="/news-list/:news" element={ <NewsPage /> } />
        <Route path='/promotions' element={<PromotionsPage />} />
        <Route path='/services' element={<ServicesPage />} />

        <Route path='/shop' element={<ShopPage />} />
        <Route path='/delivery' element={<DeliveryPage />} />
        <Route path='/pay' element={<PayInfoPage />} />
        <Route path='/refund' element={<RefundPage />} />
        <Route path='/make_order' element={<OrderCreatePage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
