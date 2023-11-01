import { useEffect, useRef, useState } from "react";
import SplitType from "split-type";
import Emblem from "./Emblem";
import { Message } from "iconsax-react";
import gsap from "gsap";
import MainCanvas from "./MainCanvas";

// <Spline scene="https://prod.spline.design/PVH8bu1tPAFf2a21/scene.splinecode" />

const Hero = () => {
  const headingText = useRef(null!);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const text = new SplitType(headingText.current, {
      types: "words,chars,lines",
    });

    if (text.lines) {
      text.lines[2].style.position = "relative";
      text.lines[2].style.zIndex = "10";
    }

    if(text.chars){
      gsap.from(text.chars,{
        y:-40,
        duration:.6,
        opacity:0,
        delay:.4,
        stagger:0.01,
        onComplete(){
          console.log("Completed");
          setLoading(false)
        }
      })
    }

    return () => {
      text.revert();
    };
  }, []);
  return (
    <div className="w-full hero flex-col flex py-6 justify-center items-center min-h-screen text-white nooise">
      <div className="text-center mt-12 ">
        <h1
          ref={headingText}
          className="text-8xl pt-10 mt-12 font-2 mx-auto max-w-[950px]"
        >
          Indulge in Luxurious Aromas: Your Perfume Paradise Awaits!
        </h1>

        <p className="my-7 relative z-10 font-3 text-4xl">Scented Sensations Await</p>
      </div>
      
      {/* <div className="flex justify-center items-center bg-orange-400 p-6 rounded-full shadow-md">
        <Convert3DCube />
      </div> */}

      <div className="relative justify-self-start wq  w-[100px]">
      <div className="w-full flex justify-between">
      <Emblem text="°CONTACT°ME">
          <Message variant="Bulk" />
        </Emblem>

        <div className="">
          <h4 className="">FOR AS LOW AS: <del className="bg-red-500 font-bold">$100.12</del></h4>
        <h2 className="text-6xl my-2 font-bold">$30.10</h2>
          <h4 className="">START SHOPPING</h4>
        </div>
      </div>
      </div>
      {/* {!loading && (
        <MainCanvas />
      )} */}
    </div>
  );
};

export default Hero;
