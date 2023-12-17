import { useEffect, useState } from "react";
import LoadModel from "./LoadModel";
import { animate, camera, scene } from "../config/global";
import gsap from "gsap";
import * as THREE from "three"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { globalTl } from "../config/timeline";

const MainCanvas = () => {
  const [loaded, setLoaded] = useState("")
  console.log(camera.position)
  console.log(camera.rotation)
  useEffect(() => {
    animate();
    const group = new THREE.Group();
    LoadModel("models/model-4.glb", (_, data, loader) => {
      setLoaded(loader);
      console.log(loader);
      if (typeof data != "undefined") {
       data.rotation.y =Math.PI / 2
       data.position.y=-20;
       data.rotation.x=0.5;
        group.add(data);
        // const tl = gsap.timeline();
        // tl.to(group.rotation, {
        //   repeat:-1,
        //   duration:100,
        //   y:Math.sin(Math.PI/4),
        
        // })
        scene.add(group);

        globalTl.to(group.rotation, {
          duration:100,
          ease:"back.in",
          scrollTrigger: {
            trigger: ".hero",
            start: "top center",
            // markers:true,
            end: "bottom center",
            scrub: true, // Smooth animation with scroll
          },
          x:Math.PI / 5, // Move the object 200px to the right
          y:Math.PI * 0.5, // Move the object 200px to the right
          z:Math.PI  /4, // Move the object 200px to the right
      });
      }
    });

    return()=>{
      group.clear()
    }

  }, []);
  return (
    <div className="qw">
      {loaded}
    </div>
  );
};

export default MainCanvas;
