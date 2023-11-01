import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './styles/fonts.css'
import './styles/index.css'
import { BrowserRouter } from 'react-router-dom'
import Lenis from '@studio-freight/lenis'
import scrollConfig from './config/scroll.ts'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
// import MainCanvas from './components/MainCanvas.tsx'
gsap.registerPlugin(ScrollTrigger);
// const lenis = new Lenis({
//   lerp:scrollConfig.lerp,
//   smoothTouch:scrollConfig.smoothTouch,
//   smoothWheel:scrollConfig.smoothWheel
// })

// lenis.on('scroll', (e:any) => {
//   console.log(e)
// })
// lenis.on("scroll", ScrollTrigger.update);

// gsap.ticker.add((time) => {
//   lenis.raf(time * 1000);
// });

// gsap.ticker.lagSmoothing(0);

// function raf(time:any) {
//   lenis.raf(time)
//   requestAnimationFrame(raf)
// }

// requestAnimationFrame(raf)


ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  // </React.StrictMode>,
)
