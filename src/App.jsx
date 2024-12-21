import "./App.css";
import { Routes, Route } from "react-router";

import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { Product } from "./pages/Product";
import { Cart } from "./pages/Cart";
import { Checkout } from "./pages/Checkout";
import { Contact } from "./pages/Contact";

function App() {
  return (
    <>
      <Navbar />
      <section className="max-w-screen-2xl mx-auto mb-20 min-h-[80vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="product/:id" element={<Product />} />
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </section>
      <Footer />
    </>
  );
}

export default App;
