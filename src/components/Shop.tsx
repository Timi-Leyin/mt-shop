import { ShoppingBag } from "iconsax-react";
import React from "react";
import Swiper from "swiper";
import { SwiperSlide } from "swiper/react";
import Pagination from "./Pagination";
import ShopItem from "./ShopItem";

const Shop = () => {
  return (
    <div className="p-12">
        <div className="py-9">
        <h2 className="text-5xl">Shop</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos, laborum?</p>
        </div>
      <div className="flex gap-[5%] flex-wrap">

    <ShopItem />
    <ShopItem />
    <ShopItem />
    <ShopItem />
    <ShopItem />
       
      </div>

      <Pagination />
    </div>
  );
};

export default Shop;
