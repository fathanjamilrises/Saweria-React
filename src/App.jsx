import Navbar from "./components/Navbar";
import SaweriaLogo from "./components/SaweriaLogo";
import Login from "./components/Login";
import Hero from "./components/Hero";
import HowStart from "./components/HowStart";
import Joinlogo from "./components/Joinlogo";
import Pricing from "./components/Pricing";
import Faq from "./components/Faq";
import Tutorial from "./components/Tutorial";
import Footer from "./components/Footer";

const Home = () => {
  return (
    <>
    <Navbar />
    <SaweriaLogo />
    <Login />
    <Hero />
    <HowStart />
    <Joinlogo />
    <Pricing />
    <Faq />
    <Tutorial />
    <Footer />
    </>
  )
}

export default Home;