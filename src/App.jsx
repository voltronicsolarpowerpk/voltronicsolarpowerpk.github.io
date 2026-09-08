import { useState } from "react";

import Navbar from "./components/common/Navbar";
import Header from "./components/common/Header";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import AuthorizedBrands from "./components/sections/AuthorizedBrands";
import WhyUs from "./components/sections/WhyUs";
import Services from "./components/sections/Services";
import Products from "./components/sections/Products";
import Testimonials from "./components/sections/Testimonials";
import Projects from "./components/sections/Projects";
import Documents from "./components/sections/Documents";
import Contact from "./components/sections/Contact";
import Footer from "./components/common/Footer";
import BackToTopButton from "./components/common/BackToTopButton";
import WhatsAppFloatingButton from "./components/common/WhatsAppFloatingButton";

function App() {
  const [showDocuments, setShowDocuments] = useState(false);

  // If user clicked "Browse Documents", display the tree page instead
  if (showDocuments) {
    return (
      <div className="bg-background min-h-screen">
        <Navbar />
        <Header />
        <Documents onBack={() => setShowDocuments(false)} />
        <Footer />
        <BackToTopButton />
        <WhatsAppFloatingButton />
      </div>
    );
  }
  return (
    <>
      <Navbar />
      <Header />
      <Hero />
      <About />
      <AuthorizedBrands />
      <WhyUs />
      <Services />
      <Products />
      <Projects />
      <Testimonials />
      <Documents />
      <Contact />
      <Footer />
      <BackToTopButton />
      <WhatsAppFloatingButton />
    </>
  );
}

export default App;
