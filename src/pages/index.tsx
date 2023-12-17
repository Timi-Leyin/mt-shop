import Cart from "../components/Cart"
import CookieBanner from "../components/CookieBanner"
import Cta from "../components/Cta"
import Emblem from "../components/Emblem"
import EventsBanner from "../components/EventsBanner"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Hero from "../components/Hero"
import MainCanvas from "../components/MainCanvas"
import Shop from "../components/Shop"
import Showcase from "../components/Showcase"
import Testimony from "../components/Testimony"
import Typography from "../components/Typography"

const Home = () => {
  return (
    <div className="">
      <Header />
      <Hero />
      <EventsBanner />
      <Typography />
      <Testimony />
      <Showcase />
      {/* <Cart /> */}
      {/* <Shop /> */}
      <EventsBanner />
   
        <div className="relative">
          <h2 className="font-2 py-10 text-8xl text-center">Variety of Perfumes</h2>
            <div className="relative flex w-full overflow-hidden justify-center py-10">
              <img src="/assets/perf.png" className="w-[300px] translate-x-[70%] object-contain" alt="" />
              <img src="/assets/perf.png" className="w-[300px] object-contain z-10 scale-110 translate-y-10"  alt="" />
              <img src="/assets/perf.png" className="w-[300px] translate-x-[-70%] object-contain" alt="" />
            </div>
        </div>
       <Cta />
      <EventsBanner />
      <Footer />
      {/* <CookieBanner /> */}
      {/* <div className="h-screen"></div> */}

    {/* <MainCanvas /> */}
    </div>
  )
}

export default Home