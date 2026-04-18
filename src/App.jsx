// // import './App.css'
// // import Navbar from './components/Navbar'
// // import Hero from './components/Hero'
// // import CompanyLogo from './components/CompanyLogo'
// // import PurposeSection from './components/PurposeSection'
// // import FeaturesSection from './components/FeaturesSection'
// // import ScheduleSection from './components/ScheduleSection'
// // import MonitorSection from './components/MonitorSection'
// // import PricingSection from './components/PricingSection'
// // import ServicesSection from './components/ServicesSection'
// // import TestimonialsSection from './components/TestimonialsSection'
// // import NewsletterSection from './components/NewsletterSection'
// // import Footer from './components/Footer'

// // function App() {
// //   return (
// //     <main className="relative min-h-screen overflow-x-hidden">
// //       <div className="absolute -top-28 -left-28 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-500/20 to-pink-500/20 rounded-full blur-[80px] -z-10"></div>
// //       <div className="overflow-hidden">
// //         <Navbar />
// //         <Hero />
// //         <CompanyLogo />
// //         <PurposeSection />
// //         <FeaturesSection />
// //         <ScheduleSection />
// //         <MonitorSection />
// //         <PricingSection />
// //         <ServicesSection />
// //         <TestimonialsSection />
// //         <NewsletterSection />
// //         <Footer />
// //       </div>
// //     </main>
// //   )
// // }

// // export default App



// import { Routes, Route } from "react-router-dom";
// import './App.css'
// import Navbar from './components/Navbar'
// import Footer from './components/Footer'


// import Hero from './components/Hero'
// import CompanyLogo from './components/CompanyLogo'
// import PurposeSection from './components/PurposeSection'
// import FeaturesSection from './components/FeaturesSection'
// import ScheduleSection from './components/ScheduleSection'
// // import MonitorSection from './components/MonitorSection'
// // import PricingSection from './components/PricingSection'
// import ServicesSection from './components/ServicesSection'
// import TestimonialsSection from './components/TestimonialsSection'
// import Contact from "./components/Contact";
// // import NewsletterSection from './components/NewsletterSection'

// /* Example extra pages */
// // import ServicesPage from "./pages/ServicesPage";
// // import AboutPage from "./pages/AboutPage";
// // import WorkPage from "./pages/WorkPage";
// // import BlogPage from "./pages/BlogPage";
// // import ContactPage from "./pages/ContactPage";

// function Home() {
//   return (
//     <>
//       <Hero />
//       <CompanyLogo />
//       <PurposeSection />
//       <FeaturesSection />
//       <ScheduleSection />
//       {/* <MonitorSection />
//       <PricingSection /> */}
//       <ServicesSection />
//       <TestimonialsSection />
//       <Contact/>
//       {/* <NewsletterSection /> */}
//     </>
//   );
// }

// function App() {
//   return (
//     <main>
//      {/* <main className="relative min-h-screen overflow-x-hidden">
//     <div className="absolute -top-28 -left-28 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-500/20 to-pink-500/20 rounded-full blur-[80px] -z-10"></div> */}

//       <Navbar />

//       <Routes>
//         <Route path="/" element={<Home />} />
//         {/* <Route path="/services" element={<ServicesPage />} />
//         <Route path="/about" element={<AboutPage />} />
//         <Route path="/work" element={<WorkPage />} />
//         <Route path="/blog" element={<BlogPage />} />
//         <Route path="/contact" element={<ContactPage />} /> */}
//       </Routes>

//       <Footer />
//     </main>
//   )
// }

// export default App

// import { Routes, Route } from "react-router-dom";
// import "./App.css";

// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import ScrollButton from "./components/ScrollButton";

// import Hero from "./components/Hero";
// import CompanyLogo from "./components/CompanyLogo";
// import PurposeSection from "./components/PurposeSection";
// import FeaturesSection from "./components/FeaturesSection";
// import ScheduleSection from "./components/ScheduleSection";
// import ServicesSection from "./components/ServicesSection";
// import TestimonialsSection from "./components/TestimonialsSection";
// import Contact from "./components/Contact";

// function Home() {
//   return (
//     <>
//       <Hero />
//       <CompanyLogo />
//       <PurposeSection />
//       <FeaturesSection />
//       <ScheduleSection />
//       <ServicesSection />
//       <TestimonialsSection />
//       <Contact />
//     </>
//   );
// }

// function App() {
//   return (
//     <main className="relative min-h-screen overflow-x-hidden">
//       <Navbar />

//       <Routes>
//         <Route path="/" element={<Home />} />
//       </Routes>

//       {/* 🔥 Smart Scroll Button */}
//       <ScrollButton />

//       <Footer />
//     </main>
//   );
// }

// export default App;

import React, { useState } from "react"; // useState ইম্পোর্ট করা হয়েছে
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollButton from "./components/ScrollButton";

import Hero from "./components/Hero";
import CompanyLogo from "./components/CompanyLogo";
import PurposeSection from "./components/PurposeSection";
import FeaturesSection from "./components/FeaturesSection";
import ScheduleSection from "./components/ScheduleSection";
import ServicesSection from "./components/ServicesSection";
import TestimonialsSection from "./components/TestimonialsSection";
import Contact from "./components/Contact";

function Home() {
  return (
    <>
      <Hero />
      <CompanyLogo />
      <PurposeSection />
      <FeaturesSection />
      <ScheduleSection />
      <ServicesSection />
      <TestimonialsSection />
      <Contact />
    </>
  );
}

function App() {
  // ✅ এই স্টেটটি দিয়ে আমরা ট্র্যাক করবো মোবাইল মেনু ওপেন কি না
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      {/* ✅ Navbar কে স্টেট এবং ফাংশন পাঠানো হয়েছে */}
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      {/* ✅ ScrollButton কে স্টেট পাঠানো হয়েছে যাতে মেনু খুললে সে হাইড হয় */}
      {/* 🔥 Smart Scroll Button */}
      <ScrollButton isMenuOpen={isMenuOpen} />

      {/* <Footer /> */}
    </main>
  );
}

export default App;