import EventsBanner from "../components/EventsBanner"
import Footer from "../components/Footer"
import Header from "../components/Header"

const About = () => {
  return (
   <main id="">
          <Header />
      <div className="h-[60vh] flex justify-around mb-5 mx-auto items-center nooise-gradient">
        <div className="p-12">
          <h1 className="text-5xl font-bold font-2">About Us</h1>
          <p className="max-w-[400px] my-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            incidunt totam accusamus accusantium.
          </p>
         
        </div>

        <div className="">
          Lorem ipsum dolor sit.
        </div>
      </div>



      <div className="">
        
      </div>
      <EventsBanner />
      <Footer />
   </main>
  )
}

export default About