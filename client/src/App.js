import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
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

// Components
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Segment basic padded>
          <Header />
          <NavBar />
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

        <Footer />
      </Router>
    </div>
  );
}

export default App;
