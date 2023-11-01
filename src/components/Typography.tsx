import gsap from "gsap";
import { useEffect, useRef } from "react";
import SplitType from "split-type";

const Typography = () => {
    const headingText = useRef(null!);
    const bgHero = useRef(null!);
    useEffect(()=>{
       if(bgHero.current && headingText.current){
        const text = new SplitType(headingText.current, {
            types: "words,chars,lines",
          });
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: bgHero.current,
              // start: "top center",
              // markers:true,
              pin:true,
              // end: "bottom center",
              scrub: true, // Smooth animation with scroll
            },
          })

          tl.from(bgHero.current,{
            duration:3,
            scale:".95",
          })

          tl.to(headingText.current, {
            duration:900,
          ease:"back.inOut",
            x:-1500
        }, "-=2");

       }
    },[])
  return (
    <div ref={bgHero} className="h-screen bg-hero">
        <div className="flex text-9xl py-4 text-white font-bold  h-[inherit] items-end overflow-hidden">
            <h2 ref={headingText} className="mb-5 whitespace-nowrap hero-hero-text">
                Fashion Beauty Fragrance Deodourant
                Fashion Beauty Fragrance Deodourant
            </h2>
        </div>
    </div>
  )
}

export default Typography