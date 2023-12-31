import { useEffect, useRef, useState } from "react";
import SplitType from "split-type";
import Emblem from "./Emblem";
import { Message } from "iconsax-react";
import gsap from "gsap";
import { Link } from "react-router-dom";
// import MainCanvas from "./MainCanvas";

// <Spline scene="https://prod.spline.design/PVH8bu1tPAFf2a21/scene.splinecode" />

const Hero = () => {
  const headingText = useRef(null!);
  const [, setLoading] = useState(true);
  useEffect(() => {
    const text = new SplitType(headingText.current, {
      types: "words,chars,lines",
    });

    if (text.lines) {
      // text.lines[2].style.position = "relative";
      // text.lines[2].style.zIndex = "10";
    }

    if (text.chars) {
      gsap.from(text.chars, {
        y: -40,
        duration: 0.6,
        opacity: 0,
        delay: 0.4,
        stagger: 0.01,
        onComplete() {
          console.log("Completed");
          setLoading(false);
        },
      });
    }

    return () => {
      text.revert();
    };
  }, []);
  return (
    <div className="w-full hero flex-col flex py-6 justify-center items-center md:min-h-screen text-white nooise">
      <div className="text-center mt-12 ">
        <h1
          ref={headingText}
          className="text-4xl md:text-7xl pt-10 mt-12 font-2 mx-auto max-w-[600px]"
        >
          Unleash Your Scent-ual Journey with Mercy Touch
        </h1>

        <p className="my-7 relative z-10 font-3 text-2xl  md:text-4xl">
          Where Fragrance Meets Passion!
        </p>
      </div>

      {/* <div className="flex justify-center items-center bg-orange-400 p-6 rounded-full shadow-md">
        <Convert3DCube />
      </div> */}

      <div className="relative justify-self-start wq  w-[100px]">
        <div className="w-full flex justify-between">
          <Link to="/contact">
            {" "}
            <Emblem text="°CONTACT°ME">
              <Message variant="Bulk" />
            </Emblem>
          </Link>

          <div className="">
            <h4 className="text-sm ms:text-2xl">
              FOR AS LOW AS:{" "}
              <del className="bg-red-500 font-bold text-3xl font-3">
                ₦10,000
              </del>
            </h4>
            <h2 className="text-6xl font-3 my-2 font-bold">₦5,000</h2>
            <Link to="/shop">
              {" "}
              <h4 className="">START SHOPPING</h4>
            </Link>
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
