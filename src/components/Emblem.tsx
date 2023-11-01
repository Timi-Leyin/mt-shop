import { CSSProperties, ReactNode, StyleHTMLAttributes, useEffect, useRef } from "react";

function Emblem({ text, children, style }: { text: string; children?: ReactNode, style?:CSSProperties }) {
  useEffect(() => {
    initializeEmblem();
  }, [text]);

  const ref = useRef<any>(null!);
  function initializeEmblem() {
    if (ref.current) {
      // ref.current.innerHTML = '';

      for (let i = 0; i < text.length; i++) {
        const letter = text[i];
        const span = document.createElement("span");
        const node = document.createTextNode(letter);
        const r = (360 / text.length) * i;
        const x = Math.floor((Math.PI / text.length) * i);
        const y = Math.floor((Math.PI / text.length) * i);
        span.appendChild(node);
        span.style.webkitTransform = `rotateZ(${r}deg) translate3d(${x}px, ${y}px, 0)`;
        span.style.transform = `rotateZ(${r}deg) translate3d(${x}px, ${y}px, 0)`;
        ref.current.appendChild(span);
      }
    }
  }

  return (
    <div className="flex font-bold justify-center items-center relative">
      <div style={style}  className="emblem flex justify-center items-center" ref={ref}></div>
      <div className="absolute z-[9]">{children}</div>
    </div>
  );
}

export default Emblem;
