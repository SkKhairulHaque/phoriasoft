import LocomotiveScroll from "locomotive-scroll";
import {
  Blog,
  Consultation,
  Footer,
  Hero,
  NaveBar,
  OurPortfolio,
  OurProjects,
  UberUns,
  UxUiDesign,
  Workflow,
} from "./components";
import { useEffect } from "react";

const App = () => {
  const locomotive = new LocomotiveScroll();

  useEffect(() => {
    window.scrollTo(0, 0);
   
    const handleReload = () => {
      window.scrollTo(0, 0);
    };

    window.addEventListener("beforeunload", handleReload);

    return () => {
      window.removeEventListener("beforeunload", handleReload);
    };
  }, []);

  return (
    <div
      ref={locomotive}
      className="w-full min-h-screen bg-[#fff] relative font-poppins overflow-x-hidden"
    >
      <NaveBar />
      <Hero />
      <UberUns />
      <OurProjects />
      <UxUiDesign />
      <Workflow />
      <OurPortfolio />
      <Blog />
      <Consultation />
      <Footer />
    </div>
  );
};

export default App;
