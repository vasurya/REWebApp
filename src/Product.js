import React, { useState } from "react";
import "./Product.css";
import Software from "./Software";
import Hardware from "./Hardware";
function Product() {
  const [soft, setSoft] = useState(true);
  function handleClickSoft() {
    if (!soft) setSoft(!soft);
  }
  function handleClickHard() {
    if (soft) setSoft(!soft);
  }
  return (
    <div className="products container">
    <h1>Products</h1>
    <br />
      <p>
        Retail Experts is a part of the Point of Sale solutions from Retail
        Experts ,offering comprehensive, flexible and resilient solutions to a
        variety of Retail service establishments and convenience stores. Retail
        Experts is a seamlessly integrated solution from POST TO HOST
        driven-thru support, front office system to control the store, back
        office systems to control inventor.<br/><br /> Retail Experts deploys state-of-the art open
        architecture running Windows vista, Windows 7, windows 10 based on
        client server models and object oriented technology (COM /ActiveX). The
        data is managed through MS Access and MS-SQL, providing integrity and
        flexibility. A wide range of standard peripheral and external interfaces
        are supported through Retail Experts interfaces. 
      </p>
      <br />
      <br />

      <button
        type="button"
        className={"btn btn-outline-primary btn-lg " + (soft ? "active" : "")}
        onClick={handleClickSoft}
      >
        Software
      </button>

      <button
        type="button"
        className={"btn btn-outline-success btn-lg " + (!soft ? "active" : "")}
        onClick={handleClickHard}
      >
        Hardware
      </button>

      {soft ? <Software /> : <Hardware />}
    </div>
  );
}

export default Product;
