import React from "react";

const FilterBtn = ({ img, priceTag, icon, productTitle }) => {
  return (
    <div className="w-[400px] h-[400px] border border-footer_bg my-14 mx-14">
      <img src={img} alt="Product Name" className="w-full h-auto" />
      <div className="p-10">
        <div className="flex items-center justify-between">
          <div className="text-3xl">{priceTag}</div>
          <div className="bg-alert_clr text-white text-[40px]">{icon}</div>
        </div>
        <h2 className="font-bold capitalize text-start text-4xl">
          {productTitle}
        </h2>
      </div>
    </div>
  );
};

export default FilterBtn;
