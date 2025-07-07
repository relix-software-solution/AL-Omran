import AppAppBar from "./pages/home/navBar";
import Landing from "./pages/home/Landing";
import AboutUs from "./pages/home/AboutUs";
import Destinations from "./pages/home/Destinations";
import Services from "./pages/home/Services";
import Contact from "./pages/home/Contact";
import Footer from "./pages/home/Footer";
import Preloader from "./components/Preloader";

function App() {
  return (
    <>
      {/* <Preloader /> */}
      <AppAppBar />
      <Landing />
      <AboutUs />
      <Destinations />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
