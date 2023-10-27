import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './styles/fonts.css'
import './styles/index.css'
import { BrowserRouter } from 'react-router-dom'
import Lenis from '@studio-freight/lenis'
import scrollConfig from './config/scroll.ts'

const lenis = new Lenis({
  lerp:scrollConfig.lerp,
  smoothTouch:scrollConfig.smoothTouch,
  smoothWheel:scrollConfig.smoothWheel
})

// lenis.on('scroll', (e:any) => {
//   console.log(e)
// })

function raf(time:any) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
)
