import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate(); // Частіше за все називають navigate
  const { pathname, search, hash, key, state } = useLocation();

  const handleRedirect = () => {
    navigate("/users");
  };

  return (
    <div>
      <h2>Header</h2>
      <p>Pathname: {pathname}</p>
      <p>Search: {search}</p>
      <p>Hash: {hash}</p>
      <p>Key: {key}</p>
      <div className="">
        <button onClick={handleRedirect}>Users</button>
        <button onClick={() => navigate("/shop", {state: {productTitle: "Iphone", price: 50000}})}>Shop</button>
        <button onClick={() => navigate("/users#main-users")}>Main Users Section</button>
        <div className="" id="main-section"></div>
      </div>
    </div>
  );
};

export default Header;
