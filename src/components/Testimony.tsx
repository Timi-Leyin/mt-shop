import { Candle2, QuoteUp } from "iconsax-react";
import { useEffect, useRef } from "react";
import SplitType from "split-type";
import gsap from "gsap";
const Testimony = () => {
  const headingText = useRef(null!);
  const containerRef = useRef(null!);
  const infoText = useRef(null!);
  useEffect(()=>{
    if(headingText.current && containerRef.current && infoText.current){
      const text = new SplitType(headingText.current, {
        types: "words,chars,lines",
      })

      const text2 = new SplitType(infoText.current, {
        types: "words,chars,lines",
      })

      const tl = gsap.timeline({
        scrollTrigger:{
          trigger:headingText.current,
          scrub:true,
          end:"-10px"
        },
      })

      tl.from(text.chars, {
        duration:2,
        
        stagger:.8,
        rotate:"-45deg",
        x:-10,
        opacity:0,
        ease:"back.inOut",
        scale:.8
      })


      tl.from(text2.lines, {
        duration:3,
        
        stagger:1.8,
        
        y:10,
        opacity:0,
        ease:"bounce.inOut",
      })


    }
  },[])
  return (
    <div ref={containerRef} className="min-h-screen bg-black text-white px-3 py-12">
      <h3 ref={headingText} className="text-4xl md:text-9xl pt-12 font-bold py-3">Stay fresh all day  <Candle2 variant="Bulk" size={100} /></h3>

      <p ref={infoText} className="max-w-[300px] py-2 ml-auto">
      Stay fresh all day with our selection of effective and delightful deodorants. We prioritize products that not only combat odor but also complement your unique style.
      </p>

      <div className=" max-w-[900px] m-auto">
        <QuoteUp variant="Bulk" size={100} />

        <div className="max-w-[600px]">
          <h3 className="text-xl font-bold">@Original Timi</h3>  
          <p className="md:text-2xl">
          The fragrances from Mercy Touch are truly enchanting! Each scent is a journey, a moment encapsulated in a bottle. The quality is exceptional, and the lasting impression is unforgettable. Mercy Touch has transformed my daily routine into a sensory experience. Grateful for the magic they've brought into my life!</p>     
        </div>

      </div>
    </div>
  );
};

export default Testimony;
