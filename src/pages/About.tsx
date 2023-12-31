import Cta from "../components/Cta";
// import EventsBanner from "../components/EventsBanner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Typography from "../components/Typography";

const About = () => {
  return (
    <main id="">
      <Header />
      <div className="min-h-[60vh] py-12 md:flex justify-around mb-5 mx-auto items-center nooise-gradient">
        <div className="p-12 mt-10">
          <h1 className="text-5xl font-bold font-2">About Us</h1>
          <p className="max-w-[400px] my-2">
            Welcome to Mercy Touch, where every fragrance tells a story and
            every touch is filled with mercy. We are more than just an online
            shop; we are the embodiment of a passion for scents that leave a
            lasting impression. At Mercy Touch, we curate a collection of
            perfumes, sprays, perfume oils, deodorants, and more, all crafted to
            elevate your senses and reflect your unique personality.
          </p>
        </div>

        <div className="">
          <img src="/assets/contact.svg" width={500} alt="" />
        </div>
      </div>

      <div className="">
        <Typography title="Our Products" info="Perfumes | Sprays | Perfume Oils | Deodorants " />
      </div>

      <div className="p-10">
        <h2 className=" py-5 md:text-8xl text-4xl">Our Mission</h2>

        <div className="flex flex-col">
      <div className="max-w-[500px] p-8 bg-gray-300 ">
      <p className="md:text-5xl text-4xl font-bold">Empowering Personal Expression:</p>
          We believe that fragrance is a form of self-expression. Our mission is
          to empower individuals to express themselves authentically through a
          carefully curated selection of scents that cater to diverse tastes and
          preferences.
      </div>
      
       <div className="my-12 p-8  max-w-[500px] bg-zinc-400 self-end" >
       <p className="md:text-5xl text-4xl font-bold">Quality Assurance:</p>
          At Mercy Touch, quality is non-negotiable. Each product in our
          collection undergoes rigorous testing to ensure that it meets the
          highest standards of excellence. We source our fragrances from
          reputable suppliers and take pride in delivering a premium olfactory
          experience.
       </div>

          <div className="max-w-[500px] p-8 bg-zinc-600">
          <p className="md:text-5xl text-4xl font-bold">Customer Satisfaction:</p>
          Your satisfaction is our priority. We strive to provide an exceptional
          shopping experience from the moment you browse our website to the
          moment you receive your carefully packaged order. Our dedicated
          customer support team is always ready to assist you with any inquiries
          or concerns.
          </div>
        </div>
      </div>

     
      <Cta />
      {/* <EventsBanner /> */}
      <Footer />
    </main>
  );
};

export default About;
