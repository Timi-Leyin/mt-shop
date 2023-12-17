import { Facebook, Instagram, Whatsapp } from "iconsax-react";
import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import EventsBanner from "../components/EventsBanner";

const Contact = () => {
  const [variant, setVar] = useState<any>("Bulk")
  return (
    <main>
      <Header />
      <div className="h-[60vh] flex justify-around mb-5 mx-auto items-center nooise-gradient">
        <div className="p-12">
          <h1 className="text-5xl font-bold font-2">Contact Us</h1>
          <p className="max-w-[400px] my-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            incidunt totam accusamus accusantium.
          </p>
          <div className="flex gap-2">
            <a href="">
              <Facebook variant={variant} />
            </a>
            <a href="">
              <Whatsapp variant={variant}  />
            </a>
            <a href="">
              <Instagram variant={variant} />
            </a>
            
          </div>
        </div>

        <div className="">
          Lorem ipsum dolor sit.
        </div>
      </div>
      <div className="max-w-[600px] mb-10 m-auto">
        <form action="" className="">

        <div className="flex gap-5 relative w-full items-center">
        <div className="flex w-full flex-col">
            <label htmlFor="">Name</label>
            <input
              type="text"
              name="name"
              placeholder="John Doe"
              className="p-5 w-full border border-[#ddd] rounded-xl"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="p-5  border border-[#ddd] rounded-xl"
            />
          </div>
        </div>

          <div className="flex my-5 relative w-full flex-col">
            <label htmlFor="">Message</label>
            <textarea name="message" id="message" className="p-2  border border-[#ddd] rounded-xl" rows={6} placeholder="Message to be Delivered"></textarea>
          </div>


        <div className="">
            <label htmlFor="">Attachments</label>
            <div className="relative p-2 w-full rounded-md flex items-center bg-slate-100 border border-dotted border-[#ddd]">
                <span className="pt-2 inline-block">Click to Browse Files or Drop Files here</span>
                <input type="file" className="opacity-0 absolute w-full  h-full" name="attachment" id="" />
            </div>
        </div>

        <button className="px-4 bg-[#B16B6C] font-bold w-full py-5 m-4 h-[60px] text-white text-xl rounded-lg">submit</button>
        </form>
      </div>
      <EventsBanner />
      <Footer />
    </main>
  );
};

export default Contact;
