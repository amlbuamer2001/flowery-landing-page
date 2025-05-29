import { Contact } from "./Components/Contact/Contact";
import { Features } from "./Components/Features/Features";
import { Header } from "./Components/Header/Header";
import { Hero } from "./Components/Hero/Hero";
import { Footer } from "./Footer/Footer";
import { Pricing } from "./Pricing/Pricing";

export function App() {
  return (
    <main>
      <div className="container">
        <Header />
        <Hero />
        <Features/>
      </div>
        <Pricing/>
        <Contact/>
        <Footer/>
    </main>
  );
}
