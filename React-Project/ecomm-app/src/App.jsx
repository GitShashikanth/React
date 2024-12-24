import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/aboutus/About.jsx";
import Home from "./components/home/Home.jsx";
import Nav from "./components/nav/Nav.jsx";
import Products from "./components/products/Products.jsx";
import ProductDetails from "./components/product-details/ProductDetails.jsx";
import ProfileContainer from "./components/profile/ProfileContainer.jsx";
import Details from "./components/profile/profile-components/Details.jsx";
import Address from "./components/profile/profile-components/Address.jsx";
import Orders from "./components/profile/profile-components/Orders.jsx";
import WishList from "./components/profile/profile-components/WishList.jsx";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/productdetails/:id" element={<ProductDetails />} />
        <Route path="/profile" element={<ProfileContainer />}>
          <Route path="details" element={<Details />} />
          <Route path="address" element={<Address />} />
          <Route path="orders" element={<Orders />} />
          <Route path="wishlist" element={<WishList />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
