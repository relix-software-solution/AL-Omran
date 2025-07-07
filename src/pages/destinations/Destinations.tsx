import Preloader from "../../components/Preloader";
import Footer from "../home/Footer";
import Commercial from "./Commercial";
import Landing from "./Landing";
import Residential from "./Residential";

const Destinations = () => {
  return (
    <>
      <Preloader />
      <Landing />
      <Residential />
      <Commercial />
      <Footer />
    </>
  );
};

export default Destinations;
