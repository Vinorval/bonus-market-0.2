import { Routes, Route } from 'react-router';

import Navigation from "../navigation/Navigation";
import Header from "../header/Header";
import Footer from '../footer/Footer';

import CompanyPage from '../../pages/company/CompanyPage';
import StaffPage from '../../pages/company/StaffPage';
import VacancyPage from '../../pages/company/VacancyPage';
import BrendsPage from '../../pages/company/BrendsPage';
import BrendPage from '../../pages/company/BrendPage';
import ShopsPage from '../../pages/company/ShopsPage';
import PromotionsPage from '../../pages/company/PromotionsPage';
import PromoPage from '../../pages/company/PromoPage';
import ServicesPage from '../../pages/company/ServicesPage';
import NewsListPage from '../../pages/company/NewsListPage';
import NewsPage from '../../pages/company/NewsPage';
import ContactsPage from '../../pages/company/ContactsPage';

import ShopPage from '../../pages/shop/ShopPage';
import DeliveryPage from '../../pages/shop/DeliveryPage';
import PayInfoPage from '../../pages/shop/PayInfoPage';
import RefundPage from '../../pages/shop/RefundPage';
import OrderCreatePage from '../../pages/shop/OrderCreatePage';

import LoginPage from '../../pages/auth/LoginPage';
import SignUpPage from '../../pages/auth/SignUpPage';
import ForgotPasswordPage from '../../pages/auth/ForgotPasswordPage';

import ProfilePage from '../../pages/profile/ProfilePage';
import HistoryOrdersPage from '../../pages/profile/HistoryOrdersPage';
import FavouritesPage from '../../pages/profile/FavouritesPage';

import CategoryPage from '../../pages/catalog/CategoryPage';
import CatalogPage from '../../pages/catalog/Catalog.page';

import NotFoundPage from '../../pages/NotFoundPage';
import HomePage from '../../pages/HomePage';

import BasketPage from '../../pages/basket/BasketPage';
import OrderFormPage from '../../pages/basket/OrderFormPage';

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
        <Route path="/brends/:brend" element={ <BrendPage /> } />
        <Route path='/shops' element={<ShopsPage />} />
        <Route path='/news-list' element={<NewsListPage />} />
        <Route path="/news-list/:news" element={ <NewsPage /> } />
        <Route path='/promotions' element={<PromotionsPage />} />
        <Route path="/promotions/:promo" element={ <PromoPage /> } />
        <Route path='/services' element={<ServicesPage />} />
        <Route path='/contacts' element={<ContactsPage />} />

        <Route path='/shop' element={<ShopPage />} />
        <Route path='/delivery' element={<DeliveryPage />} />
        <Route path='/pay' element={<PayInfoPage />} />
        <Route path='/refund' element={<RefundPage />} />
        <Route path='/make_order' element={<OrderCreatePage />} />

        <Route path='/log-in' element={<LoginPage />} />
        <Route path='/sign-up' element={<SignUpPage />} />
        <Route path='/forgot-password' element={<ForgotPasswordPage />} />

        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/orders' element={<HistoryOrdersPage />} />
        <Route path='/favourites' element={<FavouritesPage />} />

        <Route path='/category' element={<CategoryPage />} />
        <Route path='/category/:catalog' element={<CatalogPage />} />

        <Route path='/' element={<HomePage />} />

        <Route path='/basket' element={<BasketPage />} />
        <Route path='/order-forma' element={<OrderFormPage />} />

        <Route path='*' element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
