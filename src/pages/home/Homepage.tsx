import Preloader from "../../components/Preloader";
import AboutUs from "./AboutUs";
import Contact from "./Contact";
import Destinations from "./Destinations";
import Footer from "./Footer";
import Landing from "./Landing";
import Services from "./Services";

const Homepage = () => {
  return (
    <>
      <Preloader />
      <Landing />
      <AboutUs />
      <Destinations />
      <Services />
      <Contact />
      <Footer />
    </>
  );
};

export default Homepage;
