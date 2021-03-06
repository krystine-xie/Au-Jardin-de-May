import "./App.css";
import { useState } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import { Segment } from "semantic-ui-react";

// Pages
import HomePage from "./views/HomePage";
import StorePage from "./views/StorePage";
import AboutPage from "./views/AboutPage";
import LoginPage from "./views/LoginPage";
import RegisterPage from "./views/RegisterPage";
import ContactPage from "./views/ContactPage";
import ProductPage from "./views/ProductPage";
import ShoppingCartPage from "./views/ShoppingCartPage";
import AccountPage from "./views/AccountPage";
import ShippingPage from "./views/ShippingPage";
import PaymentPage from "./views/PaymentPage";
import PlaceOrderPage from "./views/PlaceOrderPage";
import OrderPage from "./views/OrderPage";
import UserListPage from "./views/UserListPage";
import EditUserPage from "./views/EditUserPage";
import EditProductPage from "./views/EditProductPage";

import ProductListPage from "./views/ProductListPage";
import OrderListPage from "./views/OrderListPage";

// Components
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// React-Intl
import { IntlProvider } from "react-intl";
import { LOCALES } from "../src/i18n/locales";
import { messages } from "../src/i18n/messages";

function App() {
  const locale = LOCALES.ENGLISH;

  const [currentLocale, setCurrentLocale] = useState(getInitialLocal());

  function getInitialLocal() {
    const savedLocale = localStorage.getItem("locale");
    return savedLocale || LOCALES.ENGLISH;
  }

  const handleLanguageChange = (e) => {
    setCurrentLocale(e.target.value);
    localStorage.setItem("locale", e.target.value);
  };

  return (
    <IntlProvider
      messages={messages[currentLocale]}
      locale={locale}
      defaultLocale={LOCALES.ENGLISH}
    >
      <div className="App">
        <Router>
          <Segment basic padded>
            <Header />
            <NavBar
              currentLocale={currentLocale}
              handleLanguageChange={handleLanguageChange}
            />
          </Segment>
          <Route path="/" exact render={() => <HomePage />} />
          <Route path="/store" exact render={() => <StorePage />} />
          <Route path="/about" exact render={() => <AboutPage />} />
          <Route path="/login" exact render={() => <LoginPage />} />
          <Route path="/register" exact render={() => <RegisterPage />} />
          <Route path="/contact" exact render={() => <ContactPage />} />
          <Route path="/collection/:id" render={() => <ProductPage />} />
          <Route path="/cart/:id?" render={() => <ShoppingCartPage />} />
          <Route path="/profile" render={() => <AccountPage />} />
          <Route path="/shipping" render={() => <ShippingPage />} />
          <Route path="/payment" render={() => <PaymentPage />} />
          <Route path="/placeorder" render={() => <PlaceOrderPage />} />
          <Route path="/order/:id" render={() => <OrderPage />} />

          <Route path="/admin/userlist" exact render={() => <UserListPage />} />
          <Route
            path="/admin/users/:id/edit"
            exact
            render={() => <EditUserPage />}
          />
          <Route path="/admin/productlist" render={() => <ProductListPage />} />
          <Route
            path="/admin/products/:id/edit"
            render={() => <EditProductPage />}
          />

          <Route path="/admin/orderlist" render={() => <OrderListPage />} />

          <Footer />
        </Router>
      </div>
    </IntlProvider>
  );
}

export default App;
