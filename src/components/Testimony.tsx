import { Candle2, QuoteUp, ShoppingBag } from "iconsax-react";
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
      <h3 ref={headingText} className="text-9xl pt-12 font-bold py-3">Never Spray anyhow Can(s) <Candle2 variant="Bulk" size={100} /></h3>

      <p ref={infoText} className="max-w-[300px] py-2 ml-auto">
        join our online community - the sofi ‘treehouse’- where you'll find
        insights, answers, and experiences from thousands of members and
        pioneers
      </p>

      <div className=" max-w-[900px] m-auto">
        <QuoteUp variant="Bulk" size={100} />

        <div className="max-w-[600px]">
          <h3 className="text-xl font-bold">@Original Timi</h3>  
          <p className="text-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic modi deserunt, ad provident itaque voluptatem dignissimos enim tempore illo aliquid eaque sint suscipit vero cumque doloribus pariatur aperiam accusantium ratione.</p>     
        </div>

      </div>
    </div>
  );
};

export default Testimony;
