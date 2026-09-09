import { useState } from "react";

import Navbar from "./components/common/Navbar";
import Header from "./components/common/Header";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Brands from "./components/sections/Brands";
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
import Admin from "./pages/Admin";

function App() {
  const [showDocuments, setShowDocuments] = useState(false);
  const [showAdmin, setShowAdmin] = useState(false);

  // Helper to clear hash (#projects, #testimonials) from browser URL
  const clearUrlHash = () => {
    window.history.pushState(
      "",
      document.title,
      window.location.pathname + window.location.search,
    );
  };

  const handleOpenAdmin = () => {
    clearUrlHash();
    setShowAdmin(true);
    setShowDocuments(false);
  };

  const handleBackToMain = () => {
    clearUrlHash();
    setShowAdmin(false);
    setShowDocuments(false);
  };

  // Render Admin View
  if (showAdmin) {
    return (
      <div className="bg-background min-h-screen">
        <Navbar />
        <Header />
        <Admin onBack={handleBackToMain} />
        <Footer onOpenAdmin={handleOpenAdmin} />
        <BackToTopButton />
        <WhatsAppFloatingButton />
      </div>
    );
  }

  // Render Documents Tree View
  if (showDocuments) {
    return (
      <div className="bg-background min-h-screen">
        <Navbar />
        <Header />
        <Documents onBack={handleBackToMain} />
        <Footer onOpenAdmin={handleOpenAdmin} />
        <BackToTopButton />
        <WhatsAppFloatingButton />
      </div>
    );
  }

  //ToDo: Set Password

  // Render Main Landing Page View
  return (
    <>
      <Navbar />
      <Header />
      <Hero />
      <About />
      <Brands />
      <WhyUs />
      <Services />
      <Products />
      <Projects />
      <Testimonials />
      <Documents />
      <Contact />
      <Footer onOpenAdmin={handleOpenAdmin} />
      <BackToTopButton />
      <WhatsAppFloatingButton />
    </>
  );
}

export default App;
