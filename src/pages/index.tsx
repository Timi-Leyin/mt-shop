// import Cart from "../components/Cart"
// import CookieBanner from "../components/CookieBanner"
import Cta from "../components/Cta"
// import Emblem from "../components/Emblem"
import EventsBanner from "../components/EventsBanner"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Hero from "../components/Hero"
import MainCanvas from "../components/MainCanvas"
// import MainCanvas from "../components/MainCanvas"
// import Shop from "../components/Shop"
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
      {/* <Cart /> */}
      {/* <Shop /> */}
      <EventsBanner />
   
      <Showcase />
       
       <Cta />
      <EventsBanner />
      <Footer />
      {/* <CookieBanner /> */}
      {/* <div className="h-screen"></div> */}

    <MainCanvas />
    </div>
  )
}

export default Home