import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Testimonies from "./components/Testimonies";
import CTA from "./components/CTA";

function App() {
  return (
    <div className="h-ful bg-slate-100 dark:bg-slate-800">
      <Hero />
      <About />
      <Services />
      <Testimonies />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
