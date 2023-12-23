import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Shop } from "./pages/shop/shop";
import { Contact } from "./pages/contact";
import { Cart } from "./pages/cart/cart";
import { ShopContextProvider } from "./context/shop-context";
import { useEffect, useState } from "react";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  email={email}
                  loggedIn={loggedIn}
                  setLoggedIn={setLoggedIn}
                />
              }
            />
            <Route path="/login" element={<Login setLoggedIn={setLoggedIn} setEmail={setEmail} />} />
            <Route path="/register" element={<Register setLoggedIn={setLoggedIn} setEmail={setEmail} />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/shop" element={<Shop />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
