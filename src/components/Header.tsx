import {
  Facebook,
  HambergerMenu,
  IconProps,
  Instagram,
  // ShoppingBag,
  Whatsapp,
  Youtube,
} from "iconsax-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Cart from "./Cart";

const Header = () => {
  const [variant] = useState<IconProps["variant"]>("Bold");
  const SIZE = 18;
  const [openCart, setOpenCart] = useState(false)

  return (
    <><header className="flex absolute z-[9] w-full py-2 text-white top-0 left-0 px-10 justify-between items-center">
      <ul className="hidden gap-4 w-3/4 md:flex mt-2  border-b-[1px] border-gray-200 items-center">
        <li className="">
          <Link to="/">Home</Link>
        </li>

        <li className="">
          <Link to="/about">About Us</Link>
        </li>

        <li className="">
          <Link to="/shop">Shop</Link>
        </li>

        <li className="">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      <div className="w-3/4  border-b-[1px] mt-2 border-gray-200 md:hidden hamburger">
     <div className="py-2">
     <HambergerMenu />
     </div>
      </div>

      <div className="logo m-3 my-5 mx-10">
        <img src="/assets/logo-circle.png" className="" width={60} alt="" />
      </div>

      <ul className="flex w-3/4 justify-end gap-4 items-center border-b-[1px]  border-gray-200">
        <li className="py-3">
          <Link to="/">
            <Instagram size={SIZE} variant={variant} />
          </Link>
        </li>

        <li className="">
          <Link to="/">
            <Facebook size={SIZE} variant={variant} />
          </Link>
        </li>

        <li className="">
          <Link to="/">
            <Youtube size={SIZE} variant={variant} />
          </Link>
        </li>

        <li className="">
          <Link to="/">
            <Whatsapp size={SIZE} variant={variant} />
          </Link>
        </li>

        {/* <li className="relative my-2">
          <span className="absolute z-10 text-sm font-bold bg-white text-black rounded-full w-6 flex justify-center font-3 -top-2 -right-2 items-center h-6 shadow">0</span>
          <button onClick={()=> setOpenCart(true)} className="p-3 rounded-full  bg-orange-400 font-bold"><ShoppingBag /></button>
        </li> */}
      </ul>
    </header>
    <Cart isOpen={openCart} onClose ={()=> setOpenCart(false)} />
    </>
  );
};

export default Header;
