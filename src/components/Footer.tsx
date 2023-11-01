import { Facebook, Instagram, Twitch, Youtube } from "iconsax-react";
import Newsletter from "./Newsletter";

const Footer = () => {
  return (
    <footer id="footer" className="bg-black text-white py-4 px-12">
      <div className="">
        <div className="socials my-4">
          <h3 className="my-3 text-4xl">Follow me on</h3>

          <div className="flex gap-4">
            <div className="h-[80px] w-[80px] hover:bg-white hover:text-black transition-colors cursor-pointer border rounded-full flex justify-center items-center">
              <Instagram variant="Broken" />
            </div>

            <div className="h-[80px] w-[80px] hover:bg-white hover:text-black transition-colors cursor-pointer border rounded-full flex justify-center items-center">
              <Facebook variant="Broken" />
            </div>

            <div className="h-[80px] w-[80px] hover:bg-white hover:text-black transition-colors cursor-pointer border rounded-full flex justify-center items-center">
              <Youtube variant="Broken" />
            </div>

            <div className="h-[80px] w-[80px] hover:bg-white hover:text-black transition-colors cursor-pointer border rounded-full flex justify-center items-center">
              <Twitch variant="Broken" />
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="my-5 text-4xl">Subscribe to my Newsletter</h3>
          <div className="">
            <Newsletter />
          </div>
          
        </div>
      </div>


      <p className="mt-7 text-sm ">
        2023 Copyright | All Right Reserved - <b>Designed by @OriginalTimi</b>
      </p>
    </footer>
  );
};

export default Footer;
