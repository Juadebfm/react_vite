import React from "react";
import FilterBtn from "../MicroComponents/FilterBtn";
import WebDesign from "../../assets/webdesign.png";
import { CiShoppingCart } from "react-icons/ci";

const Filter = () => {
  return (
    <div className="h-max grid grid-cols-3 place-items-center">
      <FilterBtn
        img={WebDesign}
        priceTag="102$"
        icon={<CiShoppingCart />}
        productTitle="My Office Setup"
      />
      <FilterBtn
        img={WebDesign}
        priceTag="10,002$"
        icon={<CiShoppingCart />}
        productTitle="My Gaming Setup"
      />
    </div>
  );
};

export default Filter;
