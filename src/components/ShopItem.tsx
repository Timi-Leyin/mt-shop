import { ShoppingBag } from 'iconsax-react'
import React from 'react'

const ShopItem = () => {
  return (
    <div className="relative p-2 w-[350px]">
    <img
      src="assets/bg-cover.jpg"
      className="w-[350px] object-cover h-[200px]"
      alt="thumbnail"
    />
    <h3 className="text-3xl pt-4">
      Nivea 48hrs Protection Men's Perfume
    </h3>

    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
      explicabo quod ...
    </p>
    <div className="flex items-center justify-between gap-5">
    <div className="pt-4">
  <h4 className="text-5xl">$1500</h4>
  </div>

    <button className="flex  my-4 rounded-md h-max bg-[darkorange] p-3 px-4 gap-2 text-white border-none font-semibold justify-between items-center">
      <span className="pt-3">Add to Cart</span>
       <ShoppingBag />
    </button>
    </div>
  </div>
  )
}

export default ShopItem