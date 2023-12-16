import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Movies from "./components/Movies";
import Contact from "./components/Contact";
import Addtocart from "./components/Addtocart";
import Carddetail from "./components/Carddetail";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Loginsignup from "./components/Login";
import "./App.css";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const [cart, setCart] = useState([]);
  // const [authorized, setAuthorized] = useState(false);

  const handleClick = (item) => {
    const updatedCart = cart.map((cartItem) => {
      if (item.id === cartItem.id) {
        return { ...cartItem, quantity: cartItem.quantity + 1 };
      }
      return cartItem;
    });

    setCart([...updatedCart, { ...item, quantity: 1 }]);
  };

  // useEffect(() => {
  //   const checkToken = localStorage.getItem("googleToken");
  //   if (checkToken) {
  //     setAuthorized(true);
  //   } else {
  //     setAuthorized(false);
  //   }
  // }, []);

  return (
    <>
      <Navbar size={cart.length} />
      <Routes>
        <Route path="/" element={<Loginsignup />} />
     <Route element={<ProtectedRoute />}>
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Movies" element={<Movies />} />
          <Route
            path="/movies/:dataId"
            element={<Addtocart handleClick={handleClick} setCart={setCart} />}
          />
          <Route
            path="/carddetail"
            element={<Carddetail cart={cart} setCart={setCart} />}
          />
     </Route>
      </Routes>
    </>
  );
}

export default App;
