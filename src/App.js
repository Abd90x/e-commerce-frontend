import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import ShopCategory from "./pages/ShopCategory";
import Cart from "./pages/Cart";
import Product from "./pages/Product";
import NoPage from "./pages/NoPage";
import Footer from "./components/Footer/Footer";
import LoginSignup from "./pages/LoginSignup";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/speakers"
            element={<ShopCategory category="speakers" />}
          />
          <Route
            path="/headsets"
            element={<ShopCategory category="headsets" />}
          />
          <Route
            path="/keyboards"
            element={<ShopCategory category="keyboards" />}
          />
          <Route path="/mouses" element={<ShopCategory category="mouses" />} />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
