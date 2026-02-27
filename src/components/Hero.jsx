// // // // // // // // // // // // import React from 'react'
// // // // // // // // // // // // import { motion } from "framer-motion";
// // // // // // // // // // // // import { fadeIn, textVariant } from "../utils/motion";
// // // // // // // // // // // // import heroImage from '../assets/hero-image.png'

// // // // // // // // // // // // const Hero = () => {
// // // // // // // // // // // //   return (
// // // // // // // // // // // //     <section id="home" className="flex flex-col md:flex-row justify-between items-center px-4 sm:px-6 lg:px-8 pt-44 pb-16 container mx-auto">
// // // // // // // // // // // //       {/* Left Column */}
// // // // // // // // // // // //       <div className="w-full md:w-1/2 space-y-8">
// // // // // // // // // // // //         <motion.div variants={fadeIn('right', 0.2)} initial="hidden" whileInView="show">
// // // // // // // // // // // //           {/* Star badge */}
// // // // // // // // // // // //           <div className="flex items-center gap-2 bg-gray-50 w-fit px-4 py-2 rounded-full hover:bg-gray-100 transition-colors cursor-pointer group">
// // // // // // // // // // // //             <span className="text-blue-600 group-hover:scale-110 transition-transform">★</span>
// // // // // // // // // // // //             <span className="text-sm font-medium">Jump start your growth</span>
// // // // // // // // // // // //           </div>
// // // // // // // // // // // //         </motion.div>

// // // // // // // // // // // //         <motion.h1 
// // // // // // // // // // // //           variants={textVariant(0.3)}
// // // // // // // // // // // //           initial="hidden"
// // // // // // // // // // // //           whileInView="show"
// // // // // // // // // // // //           className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
// // // // // // // // // // // //         >
// // // // // // // // // // // //           We boost the growth for{' '}
// // // // // // // // // // // //           <span className="text-blue-600 relative inline-block">
// // // // // // // // // // // //             Startup to Fortune 500
// // // // // // // // // // // //             <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-200/60"></span>
// // // // // // // // // // // //           </span>{' '}
// // // // // // // // // // // //           Companies
// // // // // // // // // // // //           <span className="inline-block ml-2 animate-pulse">⏰</span>
// // // // // // // // // // // //         </motion.h1>

// // // // // // // // // // // //         <motion.p 
// // // // // // // // // // // //           variants={fadeIn('up', 0.4)}
// // // // // // // // // // // //           initial="hidden"
// // // // // // // // // // // //           whileInView="show"
// // // // // // // // // // // //           className="text-gray-600 text-lg md:text-xl max-w-xl"
// // // // // // // // // // // //         >
// // // // // // // // // // // //           Get the most accurate leads, sales people training and conversions, tools and more — all within the same one billing.
// // // // // // // // // // // //         </motion.p>

// // // // // // // // // // // //         <motion.div 
// // // // // // // // // // // //           variants={fadeIn('up', 0.5)}
// // // // // // // // // // // //           initial="hidden"
// // // // // // // // // // // //           whileInView="show"
// // // // // // // // // // // //           className="flex gap-3 max-w-md"
// // // // // // // // // // // //         >
// // // // // // // // // // // //           {/* Email Form */}
// // // // // // // // // // // //           <input
// // // // // // // // // // // //             type="email"
// // // // // // // // // // // //             placeholder="Email address"
// // // // // // // // // // // //             className="flex-1 px-6 py-4 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all text-gray-600"
// // // // // // // // // // // //           />
// // // // // // // // // // // //           <button className="bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 cursor-pointer transition-all hover:shadow-lg hover:shadow-blue-100 active:scale-95">
// // // // // // // // // // // //             →
// // // // // // // // // // // //           </button>
// // // // // // // // // // // //         </motion.div>
// // // // // // // // // // // //       </div>

// // // // // // // // // // // //       {/* Right Column - Images */}
// // // // // // // // // // // //       <motion.div 
// // // // // // // // // // // //         variants={fadeIn('left', 0.5)}
// // // // // // // // // // // //         initial="hidden"
// // // // // // // // // // // //         whileInView="show"
// // // // // // // // // // // //         className="w-full md:w-1/2 mt-16 md:mt-0 pl-0 md:pl-12"
// // // // // // // // // // // //       >
// // // // // // // // // // // //         <div className="relative">
// // // // // // // // // // // //           <img
// // // // // // // // // // // //             src={heroImage}
// // // // // // // // // // // //             alt="Team meeting"
// // // // // // // // // // // //             className="rounded-lg relative z-10 hover:scale-[1.02] transition-transform duration-300"
// // // // // // // // // // // //           />
// // // // // // // // // // // //         </div>
// // // // // // // // // // // //       </motion.div>
// // // // // // // // // // // //     </section>
// // // // // // // // // // // //   )
// // // // // // // // // // // // }

// // // // // // // // // // // // export default Hero

// // // // // // // // // // // import React from "react";
// // // // // // // // // // // import { motion } from "framer-motion";
// // // // // // // // // // // import homeimg from "../assets/home.avif"

// // // // // // // // // // // const Hero = () => {
// // // // // // // // // // //   return (
// // // // // // // // // // //     <section
// // // // // // // // // // //       id="home"
// // // // // // // // // // //       className="bg-[#F2F2F2] pt-28 md:pt-36 pb-20"
// // // // // // // // // // //     >
// // // // // // // // // // //       <div className="container mx-auto px-4 sm:px-6 lg:px-8">

// // // // // // // // // // //         <div className="max-w-4xl">

// // // // // // // // // // //           {/* Tagline */}
// // // // // // // // // // //           <motion.div
// // // // // // // // // // //             initial={{ opacity: 0, y: 20 }}
// // // // // // // // // // //             animate={{ opacity: 1, y: 0 }}
// // // // // // // // // // //             transition={{ duration: 0.6 }}
// // // // // // // // // // //             className="inline-block bg-white px-4 py-2 rounded-full text-sm text-black/70 border border-black/5 shadow-sm mb-6"
// // // // // // // // // // //           >
// // // // // // // // // // //             🚀 Startup Branding & Digital Growth Agency
// // // // // // // // // // //           </motion.div>

// // // // // // // // // // //           {/* Main Heading */}
// // // // // // // // // // //           <motion.h1
// // // // // // // // // // //             initial={{ opacity: 0, y: 30 }}
// // // // // // // // // // //             animate={{ opacity: 1, y: 0 }}
// // // // // // // // // // //             transition={{ duration: 0.8 }}
// // // // // // // // // // //             className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-black"
// // // // // // // // // // //           >
// // // // // // // // // // //             We Build{" "}
// // // // // // // // // // //             <span className="relative inline-block">
// // // // // // // // // // //               <span className="relative z-10">Powerful Brands</span>
// // // // // // // // // // //               <span className="absolute bottom-2 left-0 w-full h-3 bg-black/10 -z-0 rounded"></span>
// // // // // // // // // // //             </span>{" "}
// // // // // // // // // // //             & High-Converting Digital Experiences
// // // // // // // // // // //           </motion.h1>

// // // // // // // // // // //           {/* Description */}
// // // // // // // // // // //           <motion.p
// // // // // // // // // // //             initial={{ opacity: 0, y: 30 }}
// // // // // // // // // // //             animate={{ opacity: 1, y: 0 }}
// // // // // // // // // // //             transition={{ delay: 0.2, duration: 0.8 }}
// // // // // // // // // // //             className="mt-6 text-lg text-black/60 max-w-2xl leading-relaxed"
// // // // // // // // // // //           >
// // // // // // // // // // //             Alhamdulillah, we help startups grow through strategic branding,
// // // // // // // // // // //             modern web development, UI/UX design, and performance marketing.
// // // // // // // // // // //             We turn ideas into premium digital products that convert.
// // // // // // // // // // //           </motion.p>

// // // // // // // // // // //           {/* Buttons */}
// // // // // // // // // // //           <motion.div
// // // // // // // // // // //             initial={{ opacity: 0, y: 30 }}
// // // // // // // // // // //             animate={{ opacity: 1, y: 0 }}
// // // // // // // // // // //             transition={{ delay: 0.4, duration: 0.8 }}
// // // // // // // // // // //             className="mt-10 flex flex-wrap items-center gap-5"
// // // // // // // // // // //           >
// // // // // // // // // // //             <a
// // // // // // // // // // //               href="#services"
// // // // // // // // // // //               className="bg-black text-white px-8 py-3 rounded-full font-medium shadow-md hover:shadow-xl transition"
// // // // // // // // // // //             >
// // // // // // // // // // //               Explore Services
// // // // // // // // // // //             </a>

// // // // // // // // // // //             <a
// // // // // // // // // // //               href="#about"
// // // // // // // // // // //               className="px-8 py-3 rounded-full border border-black/10 bg-white text-black font-medium hover:shadow-md transition"
// // // // // // // // // // //             >
// // // // // // // // // // //               Learn More
// // // // // // // // // // //             </a>
// // // // // // // // // // //           </motion.div>

// // // // // // // // // // //         </div>
// // // // // // // // // // //       </div>
// // // // // // // // // // //     </section>
// // // // // // // // // // //   );
// // // // // // // // // // // };

// // // // // // // // // // // export default Hero;

// // // // // // // // // // // import React from "react";

// // // // // // // // // // // const Hero = () => {
// // // // // // // // // // //   return (
// // // // // // // // // // //     <section className="relative h-[90vh] min-h-[640px] w-full overflow-hidden bg-[#f4f4f4]">
// // // // // // // // // // //       {/* background glow */}
// // // // // // // // // // //       <div className="pointer-events-none absolute inset-0">
// // // // // // // // // // //         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.04),transparent_60%)]" />
// // // // // // // // // // //         {/* main pink blob (slightly right, like image) */}
// // // // // // // // // // //         <div className="absolute left-[60%] top-[52%] h-[720px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,110,140,0.55),rgba(255,110,140,0.0)_62%)] blur-[2px]" />
// // // // // // // // // // //         <div className="absolute left-[58%] top-[54%] h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,110,140,0.35),rgba(255,110,140,0.0)_60%)] blur-[1px]" />
// // // // // // // // // // //       </div>

// // // // // // // // // // //       {/* CONTENT LAYER */}
// // // // // // // // // // //       <div className="relative mx-auto h-full w-full max-w-[1500px] px-6 md:px-10">
// // // // // // // // // // //         {/* Asterisk (top-left) */}
// // // // // // // // // // //         <div className="absolute left-6 top-12 md:left-10 md:top-14">
// // // // // // // // // // //           <span className="select-none text-[64px] font-medium leading-none tracking-tight md:text-[78px]">
// // // // // // // // // // //             ✳︎
// // // // // // // // // // //           </span>
// // // // // // // // // // //         </div>

// // // // // // // // // // //         {/* Small paragraph (under WHERE, left side) */}
// // // // // // // // // // //         <div className="absolute left-[200px] top-[210px] md:left-[260px] md:top-[235px]">
// // // // // // // // // // //           <p className="max-w-[320px] text-[12px] font-semibold uppercase leading-[1.35] tracking-[0.08em] text-black/90 md:text-[13px]">
// // // // // // // // // // //             WE ARE STRATEGIC BRANDING AGENCY <br />
// // // // // // // // // // //             HELPING THE PLANET MOST COMPANIES <br />
// // // // // // // // // // //             MOVE FORWARDS.
// // // // // // // // // // //           </p>
// // // // // // // // // // //         </div>

// // // // // // // // // // //         {/* BIG HEADLINE (absolute, to match exact alignment) */}
// // // // // // // // // // //         <div className="absolute left-[140px] top-[70px] md:left-[190px] md:top-[82px] lg:left-[220px]">
// // // // // // // // // // //           {/* Use clamp so it scales but keeps same proportions */}
// // // // // // // // // // //           <div className="select-none font-sans font-black uppercase leading-[0.9] tracking-[-0.03em] text-black">
// // // // // // // // // // //             <div className="text-[clamp(52px,6.2vw,128px)]">WHERE IDEAS</div>

// // // // // // // // // // //             {/* Push SHAPE THE to the right (like reference) */}
// // // // // // // // // // //             <div className="ml-[clamp(160px,18vw,380px)] mt-[clamp(18px,1.6vw,28px)] text-[clamp(52px,6.2vw,128px)]">
// // // // // // // // // // //               SHAPE THE
// // // // // // // // // // //             </div>

// // // // // // // // // // //             {/* FUTURES on left again */}
// // // // // // // // // // //             <div className="mt-[clamp(18px,1.6vw,28px)] flex items-end gap-2">
// // // // // // // // // // //               <span className="text-[clamp(52px,6.2vw,128px)]">FUTURES</span>
// // // // // // // // // // //               <span className="mb-[clamp(10px,1.1vw,22px)] text-[clamp(18px,1.7vw,34px)] font-black">
// // // // // // // // // // //                 ®
// // // // // // // // // // //               </span>
// // // // // // // // // // //             </div>
// // // // // // // // // // //           </div>
// // // // // // // // // // //         </div>

// // // // // // // // // // //         {/* Scroll down (bottom-right) */}
// // // // // // // // // // //         <div className="absolute bottom-8 right-6 md:right-10">
// // // // // // // // // // //           <span className="text-[12px] font-semibold uppercase tracking-[0.12em] text-black/90">
// // // // // // // // // // //             SCROLL DOWN
// // // // // // // // // // //           </span>
// // // // // // // // // // //         </div>
// // // // // // // // // // //       </div>
// // // // // // // // // // //     </section>
// // // // // // // // // // //   );
// // // // // // // // // // // };

// // // // // // // // // // // export default Hero;

// // // // // // // // // // // import React from 'react'
// // // // // // // // // // // import herobg from "../assets/herobg.jpg"
// // // // // // // // // // // const Hero = () => {
// // // // // // // // // // //   return (
// // // // // // // // // // //     <div>
      
// // // // // // // // // // //     </div>
// // // // // // // // // // //   )
// // // // // // // // // // // }

// // // // // // // // // // // export default Hero

// // // // // // // // // // import React from "react";
// // // // // // // // // // import herobg from "../assets/herobg.jpg";

// // // // // // // // // // const Hero = () => {
// // // // // // // // // //   return (
// // // // // // // // // //     <section
// // // // // // // // // //       className="max-w-[2900px]  h-screen mt-8 bg-center bg-cover bg-no-repeat"
// // // // // // // // // //       style={{ backgroundImage: `url(${herobg})` }}
// // // // // // // // // //     >
// // // // // // // // // //       {/* Content ekhane ashbe */}
// // // // // // // // // //     </section>
// // // // // // // // // //   );
// // // // // // // // // // };

// // // // // // // // // // export default Hero;


// // // // // // // // // import React from "react";
// // // // // // // // // import herobg from "../assets/herobg.jpg";

// // // // // // // // // const Hero = () => {
// // // // // // // // //   return (
// // // // // // // // //     <section
// // // // // // // // //       id="home"
// // // // // // // // //       className="w-full bg-[#f2f2f2] pt-16 md:pt-20"
// // // // // // // // //     >
// // // // // // // // //       {/* Same container width as Navbar */}
// // // // // // // // //       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
// // // // // // // // //         {/* Image Wrapper */}
// // // // // // // // //         <div className="w-full flex justify-center">
// // // // // // // // //           <img
// // // // // // // // //             src={herobg}
// // // // // // // // //             alt="Hero Background"
// // // // // // // // //             className="w-full h-auto object-contain"
// // // // // // // // //           />
// // // // // // // // //         </div>

// // // // // // // // //       </div>
// // // // // // // // //     </section>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // export default Hero;

// // // // // // // // import React from "react";
// // // // // // // // import herobg from "../assets/herobg.jpg";

// // // // // // // // const Hero = () => {
// // // // // // // //   return (
// // // // // // // //     <section className="w-full bg-[#f2f2f2] pt-16 md:pt-20">
      
// // // // // // // //       {/* SAME container as Navbar */}
// // // // // // // //       <div className="container mx-auto px-4 sm:px-6 lg:px-8">

// // // // // // // //         {/* Image Wrapper */}
// // // // // // // //         <div className="w-full flex justify-center">
// // // // // // // //           <img
// // // // // // // //             src={herobg}
// // // // // // // //             alt="Hero"
// // // // // // // //             className="w-full max-w-[1400px] h-auto object-contain"
// // // // // // // //           />
// // // // // // // //         </div>

// // // // // // // //       </div>
// // // // // // // //     </section>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default Hero;


// // // // // // // import React from "react";
// // // // // // // import herobg from "../assets/herobg.jpg";

// // // // // // // const Hero = () => {
// // // // // // //   return (
// // // // // // //     <section id="home" className="w-full bg-[#f2f2f2] pt-16 md:pt-20">
// // // // // // //       {/* SAME container as Navbar */}
// // // // // // //       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
// // // // // // //         {/* keep it centered and large, but never overflow */
// // // // // // //         }
// // // // // // //         <div className="w-full flex justify-center">
// // // // // // //           <img
// // // // // // //             src={herobg}
// // // // // // //             alt="Hero"
// // // // // // //             className="
// // // // // // //               w-full
// // // // // // //               h-auto
// // // // // // //               object-contain
// // // // // // //               max-w-[1100px]
// // // // // // //               sm:max-w-[1300px]
// // // // // // //               lg:max-w-[1600px]
// // // // // // //             "
// // // // // // //           />
// // // // // // //         </div>
// // // // // // //       </div>
// // // // // // //     </section>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default Hero;


// // // // // // import React from "react";
// // // // // // import { motion } from "framer-motion";

// // // // // // const container = {
// // // // // //   hidden: {},
// // // // // //   show: {
// // // // // //     transition: { staggerChildren: 0.18, delayChildren: 0.05 },
// // // // // //   },
// // // // // // };

// // // // // // const lineWrap = {
// // // // // //   hidden: {},
// // // // // //   show: {},
// // // // // // };

// // // // // // const line = {
// // // // // //   hidden: { y: "110%", opacity: 0, filter: "blur(10px)" },
// // // // // //   show: {
// // // // // //     y: "0%",
// // // // // //     opacity: 1,
// // // // // //     filter: "blur(0px)",
// // // // // //     transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
// // // // // //   },
// // // // // // };

// // // // // // const fadeUp = {
// // // // // //   hidden: { y: 18, opacity: 0, filter: "blur(6px)" },
// // // // // //   show: {
// // // // // //     y: 0,
// // // // // //     opacity: 1,
// // // // // //     filter: "blur(0px)",
// // // // // //     transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 },
// // // // // //   },
// // // // // // };

// // // // // // const Hero = () => {
// // // // // //   return (
// // // // // //     <section className="relative w-full min-h-[90vh] overflow-hidden bg-[#f2f2f2] pt-16 md:pt-20">
// // // // // //       {/* soft glow like reference */}
// // // // // //       <div className="pointer-events-none absolute inset-0">
// // // // // //         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.04),transparent_60%)]" />
// // // // // //         <div className="absolute left-[62%] top-[52%] h-[760px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,110,140,0.55),rgba(255,110,140,0.0)_62%)] blur-[2px]" />
// // // // // //         <div className="absolute left-[60%] top-[54%] h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,110,140,0.35),rgba(255,110,140,0.0)_60%)] blur-[1px]" />
// // // // // //       </div>

// // // // // //       {/* layout container */}
// // // // // //       <div className="relative mx-auto w-full max-w-[1500px] px-6 md:px-10">
// // // // // //         {/* Asterisk */}
// // // // // //         <motion.div
// // // // // //           initial={{ opacity: 0, y: 10 }}
// // // // // //           animate={{ opacity: 1, y: 0 }}
// // // // // //           transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
// // // // // //           className="absolute left-6 top-10 md:left-10 md:top-14"
// // // // // //         >
// // // // // //           <span className="select-none text-[60px] md:text-[78px] leading-none">
// // // // // //             ✳︎
// // // // // //           </span>
// // // // // //         </motion.div>

// // // // // //         {/* Small paragraph (under WHERE like image) */}
// // // // // //         <motion.div
// // // // // //           variants={fadeUp}
// // // // // //           initial="hidden"
// // // // // //           animate="show"
// // // // // //           className="absolute left-[200px] top-[205px] md:left-[260px] md:top-[235px]"
// // // // // //         >
// // // // // //           <p className="max-w-[340px] text-[12px] md:text-[13px] font-semibold uppercase leading-[1.35] tracking-[0.08em] text-black/90">
// // // // // //             WE ARE STRATEGIC BRANDING AGENCY <br />
// // // // // //             HELPING THE PLANET MOST COMPANIES <br />
// // // // // //             MOVE FORWARDS.
// // // // // //           </p>
// // // // // //         </motion.div>

// // // // // //         {/* Big headline (pixel-like alignment) */}
// // // // // //         <motion.div
// // // // // //           variants={container}
// // // // // //           initial="hidden"
// // // // // //           animate="show"
// // // // // //           className="absolute left-[140px] top-[70px] md:left-[190px] md:top-[82px] lg:left-[220px]"
// // // // // //         >
// // // // // //           <div className="select-none font-black uppercase leading-[0.9] tracking-[-0.03em] text-black">
// // // // // //             {/* WHERE IDEAS */}
// // // // // //             <motion.div variants={lineWrap} className="overflow-hidden">
// // // // // //               <motion.div
// // // // // //                 variants={line}
// // // // // //                 className="text-[clamp(52px,6.2vw,128px)]"
// // // // // //               >
// // // // // //                 WHERE IDEAS
// // // // // //               </motion.div>
// // // // // //             </motion.div>

// // // // // //             {/* SHAPE THE (shift right like reference) */}
// // // // // //             <motion.div
// // // // // //               variants={lineWrap}
// // // // // //               className="overflow-hidden mt-[clamp(18px,1.6vw,28px)] ml-[clamp(160px,18vw,380px)]"
// // // // // //             >
// // // // // //               <motion.div
// // // // // //                 variants={line}
// // // // // //                 className="text-[clamp(52px,6.2vw,128px)]"
// // // // // //               >
// // // // // //                 SHAPE THE
// // // // // //               </motion.div>
// // // // // //             </motion.div>

// // // // // //             {/* FUTURES + ® */}
// // // // // //             <motion.div
// // // // // //               variants={lineWrap}
// // // // // //               className="overflow-hidden mt-[clamp(18px,1.6vw,28px)]"
// // // // // //             >
// // // // // //               <motion.div variants={line} className="flex items-end gap-2">
// // // // // //                 <span className="text-[clamp(52px,6.2vw,128px)]">
// // // // // //                   FUTURES
// // // // // //                 </span>
// // // // // //                 <span className="mb-[clamp(10px,1.1vw,22px)] text-[clamp(18px,1.7vw,34px)] font-black">
// // // // // //                   ®
// // // // // //                 </span>
// // // // // //               </motion.div>
// // // // // //             </motion.div>
// // // // // //           </div>
// // // // // //         </motion.div>

// // // // // //         {/* Scroll down */}
// // // // // //         <motion.div
// // // // // //           initial={{ opacity: 0, y: 10 }}
// // // // // //           animate={{ opacity: 1, y: 0 }}
// // // // // //           transition={{ duration: 0.7, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
// // // // // //           className="absolute bottom-8 right-6 md:right-10"
// // // // // //         >
// // // // // //           <span className="text-[12px] font-semibold uppercase tracking-[0.12em] text-black/90">
// // // // // //             SCROLL DOWN
// // // // // //           </span>
// // // // // //         </motion.div>

// // // // // //         {/* spacer to keep section height */}
// // // // // //         <div className="min-h-[90vh]" />
// // // // // //       </div>
// // // // // //     </section>
// // // // // //   );
// // // // // // };

// // // // // // export default Hero;


// // // // // import React from "react";
// // // // // import { motion } from "framer-motion";

// // // // // const container = {
// // // // //   hidden: {},
// // // // //   show: {
// // // // //     transition: { staggerChildren: 0.16, delayChildren: 0.05 },
// // // // //   },
// // // // // };

// // // // // const line = {
// // // // //   hidden: { y: "120%", opacity: 0, filter: "blur(10px)" },
// // // // //   show: {
// // // // //     y: "0%",
// // // // //     opacity: 1,
// // // // //     filter: "blur(0px)",
// // // // //     transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
// // // // //   },
// // // // // };

// // // // // const fadeUp = {
// // // // //   hidden: { y: 14, opacity: 0, filter: "blur(6px)" },
// // // // //   show: {
// // // // //     y: 0,
// // // // //     opacity: 1,
// // // // //     filter: "blur(0px)",
// // // // //     transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.15 },
// // // // //   },
// // // // // };

// // // // // const Hero = () => {
// // // // //   return (
// // // // //     <section
// // // // //       id="home"
// // // // //       className="relative w-full overflow-hidden bg-[#f2f2f2] pt-16 md:pt-20"
// // // // //     >
// // // // //       {/* glow background */}
// // // // //       <div className="pointer-events-none absolute inset-0">
// // // // //         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.04),transparent_60%)]" />
// // // // //         <div className="absolute left-[62%] top-[48%] h-[760px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,110,140,0.55),rgba(255,110,140,0.0)_62%)] blur-[2px]" />
// // // // //         <div className="absolute left-[60%] top-[52%] h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,110,140,0.35),rgba(255,110,140,0.0)_60%)] blur-[1px]" />
// // // // //       </div>

// // // // //       {/* same container as navbar */}
// // // // //       <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
// // // // //         {/* hero height */}
// // // // //         <div className="relative min-h-[calc(100vh-64px)] md:min-h-[calc(100vh-80px)] py-12 md:py-16">
// // // // //           {/* Asterisk */}
// // // // //           <motion.div
// // // // //             initial={{ opacity: 0, y: 8 }}
// // // // //             animate={{ opacity: 1, y: 0 }}
// // // // //             transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
// // // // //             className="absolute left-0 top-10 md:top-12"
// // // // //           >
// // // // //             <span className="select-none text-[54px] md:text-[78px] leading-none">
// // // // //               ✳︎
// // // // //             </span>
// // // // //           </motion.div>

// // // // //           {/* ✅ GRID so small text never overlaps */}
// // // // //           <div className="grid grid-cols-12 gap-y-10">
// // // // //             {/* Left column: paragraph (on desktop) */}
// // // // //             <motion.div
// // // // //               variants={fadeUp}
// // // // //               initial="hidden"
// // // // //               animate="show"
// // // // //               className="
// // // // //                 col-span-12
// // // // //                 md:col-span-4
// // // // //                 md:col-start-3
// // // // //                 mt-20 md:mt-28
// // // // //                 max-w-[360px]
// // // // //               "
// // // // //             >
// // // // //               <p className="text-[12px] md:text-[13px] font-semibold uppercase leading-[1.35] tracking-[0.08em] text-black/90">
// // // // //                 WE ARE STRATEGIC BRANDING AGENCY <br />
// // // // //                 HELPING THE PLANET MOST COMPANIES <br />
// // // // //                 MOVE FORWARDS.
// // // // //               </p>
// // // // //             </motion.div>

// // // // //             {/* Right column: big headline */}
// // // // //             <motion.div
// // // // //               variants={container}
// // // // //               initial="hidden"
// // // // //               animate="show"
// // // // //               className="
// // // // //                 col-span-12
// // // // //                 md:col-span-10
// // // // //                 md:col-start-2
// // // // //                 lg:col-span-11
// // // // //                 lg:col-start-2
// // // // //                 -mt-6 md:-mt-10
// // // // //               "
// // // // //             >
// // // // //               <div className="select-none font-black uppercase leading-[0.9] tracking-[-0.03em] text-black">
// // // // //                 {/* WHERE IDEAS */}
// // // // //                 <div className="overflow-hidden">
// // // // //                   <motion.div
// // // // //                     variants={line}
// // // // //                     className="text-[clamp(54px,7vw,150px)]"
// // // // //                   >
// // // // //                     WHERE IDEAS
// // // // //                   </motion.div>
// // // // //                 </div>

// // // // //                 {/* SHAPE THE (shift right like reference) */}
// // // // //                 <div className="overflow-hidden mt-[clamp(18px,1.6vw,30px)]">
// // // // //                   <motion.div
// // // // //                     variants={line}
// // // // //                     className="
// // // // //                       text-[clamp(54px,7vw,150px)]
// // // // //                       ml-[clamp(80px,14vw,360px)]
// // // // //                     "
// // // // //                   >
// // // // //                     SHAPE THE
// // // // //                   </motion.div>
// // // // //                 </div>

// // // // //                 {/* FUTURES + ® */}
// // // // //                 <div className="overflow-hidden mt-[clamp(18px,1.6vw,30px)]">
// // // // //                   <motion.div variants={line} className="flex items-end gap-2">
// // // // //                     <span className="text-[clamp(54px,7vw,150px)]">
// // // // //                       FUTURES
// // // // //                     </span>
// // // // //                     <span className="mb-[clamp(10px,1vw,22px)] text-[clamp(18px,1.7vw,34px)] font-black">
// // // // //                       ®
// // // // //                     </span>
// // // // //                   </motion.div>
// // // // //                 </div>
// // // // //               </div>
// // // // //             </motion.div>
// // // // //           </div>

// // // // //           {/* Scroll down */}
// // // // //           <motion.div
// // // // //             initial={{ opacity: 0, y: 10 }}
// // // // //             animate={{ opacity: 1, y: 0 }}
// // // // //             transition={{ duration: 0.7, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
// // // // //             className="absolute bottom-8 right-0"
// // // // //           >
// // // // //             <span className="text-[12px] font-semibold uppercase tracking-[0.12em] text-black/90">
// // // // //               SCROLL DOWN
// // // // //             </span>
// // // // //           </motion.div>
// // // // //         </div>
// // // // //       </div>
// // // // //     </section>
// // // // //   );
// // // // // };

// // // // // export default Hero;


// // // // import React from "react";
// // // // import { motion } from "framer-motion";

// // // // const container = {
// // // //   hidden: {},
// // // //   show: {
// // // //     transition: { staggerChildren: 0.16, delayChildren: 0.08 },
// // // //   },
// // // // };

// // // // const reveal = {
// // // //   hidden: { y: "120%", opacity: 0, filter: "blur(10px)" },
// // // //   show: {
// // // //     y: "0%",
// // // //     opacity: 1,
// // // //     filter: "blur(0px)",
// // // //     transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
// // // //   },
// // // // };

// // // // const fadeUp = {
// // // //   hidden: { y: 14, opacity: 0, filter: "blur(6px)" },
// // // //   show: {
// // // //     y: 0,
// // // //     opacity: 1,
// // // //     filter: "blur(0px)",
// // // //     transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 },
// // // //   },
// // // // };

// // // // const Hero = () => {
// // // //   return (
// // // //     <section
// // // //       id="home"
// // // //       className="relative w-full overflow-hidden bg-[#f2f2f2] pt-16 md:pt-20"
// // // //     >
// // // //       {/* Background glow like reference */}
// // // //       <div className="pointer-events-none absolute inset-0">
// // // //         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.035),transparent_62%)]" />
// // // //         <div className="absolute left-[63%] top-[52%] h-[820px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,110,140,0.55),rgba(255,110,140,0.0)_62%)] blur-[2px]" />
// // // //         <div className="absolute left-[61%] top-[54%] h-[580px] w-[580px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,110,140,0.38),rgba(255,110,140,0.0)_60%)] blur-[1px]" />
// // // //       </div>

// // // //       {/* Layout */}
// // // //       <div className="relative mx-auto w-full max-w-[1500px] px-6 md:px-10">
// // // //         <div className="relative min-h-[calc(100vh-64px)] md:min-h-[calc(100vh-80px)]">
// // // //           {/* Asterisk */}
// // // //           <motion.div
// // // //             initial={{ opacity: 0, y: 8 }}
// // // //             animate={{ opacity: 1, y: 0 }}
// // // //             transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
// // // //             className="absolute left-0 top-10 md:top-12"
// // // //           >
// // // //             <span className="select-none text-[58px] md:text-[78px] leading-none">
// // // //               ✳︎
// // // //             </span>
// // // //           </motion.div>

// // // //           {/* Small paragraph (fixed position like ref, but responsive-safe) */}
// // // //           <motion.div
// // // //             variants={fadeUp}
// // // //             initial="hidden"
// // // //             animate="show"
// // // //             className="
// // // //               absolute
// // // //               left-[160px] top-[200px]
// // // //               md:left-[240px] md:top-[235px]
// // // //               lg:left-[280px] lg:top-[245px]
// // // //             "
// // // //           >
// // // //             <p className="max-w-[340px] text-[12px] md:text-[13px] font-semibold uppercase leading-[1.35] tracking-[0.08em] text-black/90">
// // // //               WE ARE STRATEGIC BRANDING AGENCY <br />
// // // //               HELPING THE PLANET MOST COMPANIES <br />
// // // //               MOVE FORWARDS.
// // // //             </p>
// // // //           </motion.div>

// // // //           {/* Big headline (pixel-ish alignment) */}
// // // //           <motion.div
// // // //             variants={container}
// // // //             initial="hidden"
// // // //             animate="show"
// // // //             className="
// // // //               absolute
// // // //               left-[90px] top-[85px]
// // // //               md:left-[150px] md:top-[95px]
// // // //               lg:left-[175px] lg:top-[100px]
// // // //             "
// // // //           >
// // // //             <div className="select-none font-black uppercase leading-[0.9] tracking-[-0.03em] text-black">
// // // //               {/* WHERE IDEAS */}
// // // //               <div className="overflow-hidden">
// // // //                 <motion.div
// // // //                   variants={reveal}
// // // //                   className="text-[clamp(56px,6.8vw,150px)]"
// // // //                 >
// // // //                   WHERE IDEAS
// // // //                 </motion.div>
// // // //               </div>

// // // //               {/* SHAPE THE (shift right like ref) */}
// // // //               <div className="overflow-hidden mt-[clamp(18px,1.6vw,30px)]">
// // // //                 <motion.div
// // // //                   variants={reveal}
// // // //                   className="text-[clamp(56px,6.8vw,150px)] ml-[clamp(140px,16vw,420px)]"
// // // //                 >
// // // //                   SHAPE THE
// // // //                 </motion.div>
// // // //               </div>

// // // //               {/* FUTURES + ® */}
// // // //               <div className="overflow-hidden mt-[clamp(18px,1.6vw,30px)]">
// // // //                 <motion.div variants={reveal} className="flex items-end gap-2">
// // // //                   <span className="text-[clamp(56px,6.8vw,150px)]">
// // // //                     FUTURES
// // // //                   </span>
// // // //                   <span className="mb-[clamp(10px,1vw,22px)] text-[clamp(18px,1.7vw,34px)] font-black">
// // // //                     ®
// // // //                   </span>
// // // //                 </motion.div>
// // // //               </div>
// // // //             </div>
// // // //           </motion.div>

// // // //           {/* Scroll Down */}
// // // //           <motion.div
// // // //             initial={{ opacity: 0, y: 10 }}
// // // //             animate={{ opacity: 1, y: 0 }}
// // // //             transition={{
// // // //               duration: 0.7,
// // // //               delay: 0.65,
// // // //               ease: [0.22, 1, 0.36, 1],
// // // //             }}
// // // //             className="absolute bottom-8 right-0"
// // // //           >
// // // //             <span className="text-[12px] font-semibold uppercase tracking-[0.12em] text-black/90">
// // // //               SCROLL DOWN
// // // //             </span>
// // // //           </motion.div>
// // // //         </div>
// // // //       </div>

// // // //       {/* Mobile fallback: prevent overlap on very small screens */}
// // // //       <style>{`
// // // //         @media (max-width: 420px){
// // // //           #home .hero-safe-paragraph { display:none; }
// // // //         }
// // // //       `}</style>
// // // //     </section>
// // // //   );
// // // // };

// // // // export default Hero;


// // // // import React from "react";
// // // // import { motion } from "framer-motion";

// // // // const container = {
// // // //   hidden: {},
// // // //   show: { transition: { staggerChildren: 0.16, delayChildren: 0.08 } },
// // // // };

// // // // const reveal = {
// // // //   hidden: { y: "120%", opacity: 0, filter: "blur(10px)" },
// // // //   show: {
// // // //     y: "0%",
// // // //     opacity: 1,
// // // //     filter: "blur(0px)",
// // // //     transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
// // // //   },
// // // // };

// // // // const fadeUp = {
// // // //   hidden: { y: 14, opacity: 0, filter: "blur(6px)" },
// // // //   show: {
// // // //     y: 0,
// // // //     opacity: 1,
// // // //     filter: "blur(0px)",
// // // //     transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 },
// // // //   },
// // // // };

// // // // const Hero = () => {
// // // //   return (
// // // //     <section
// // // //       id="home"
// // // //       className="relative w-full overflow-hidden bg-[#f2f2f2] pt-16 md:pt-20"
// // // //     >
// // // //       {/* glow */}
// // // //       <div className="pointer-events-none absolute inset-0">
// // // //         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.035),transparent_62%)]" />
// // // //         <div className="absolute left-[63%] top-[52%] h-[820px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,110,140,0.55),rgba(255,110,140,0.0)_62%)] blur-[2px]" />
// // // //         <div className="absolute left-[61%] top-[54%] h-[580px] w-[580px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,110,140,0.38),rgba(255,110,140,0.0)_60%)] blur-[1px]" />
// // // //       </div>

// // // //       {/* full canvas (not container) */}
// // // //       <div className="relative min-h-[calc(100vh-64px)] md:min-h-[calc(100vh-80px)]">
// // // //         {/* ✅ ASTERISK — exact-ish like image */}
// // // //         <motion.div
// // // //           initial={{ opacity: 0, y: 8 }}
// // // //           animate={{ opacity: 1, y: 0 }}
// // // //           transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
// // // //           className="
// // // //             absolute
// // // //             left-[clamp(18px,4vw,56px)]
// // // //             top-[clamp(58px,10vh,110px)]
// // // //           "
// // // //         >
// // // //           <span className="select-none text-[clamp(52px,5.5vw,90px)] leading-none">
// // // //             ✳︎
// // // //           </span>
// // // //         </motion.div>

// // // //         {/* ✅ SMALL PARAGRAPH — under WHERE like image */}
// // // //         <motion.div
// // // //           variants={fadeUp}
// // // //           initial="hidden"
// // // //           animate="show"
// // // //           className="
// // // //             absolute
// // // //             left-[clamp(210px,18vw,330px)]
// // // //             top-[clamp(220px,25vh,290px)]
// // // //             z-20
// // // //           "
// // // //         >
// // // //           <p className="max-w-[360px] text-[12px] md:text-[13px] font-semibold uppercase leading-[1.35] tracking-[0.08em] text-black/90">
// // // //             WE ARE STRATEGIC BRANDING AGENCY <br />
// // // //             HELPING THE PLANET MOST COMPANIES <br />
// // // //             MOVE FORWARDS.
// // // //           </p>
// // // //         </motion.div>

// // // //         {/* ✅ BIG HEADLINE — aligned like image */}
// // // //         <motion.div
// // // //           variants={container}
// // // //           initial="hidden"
// // // //           animate="show"
// // // //           className="
// // // //             absolute
// // // //             left-[clamp(120px,14vw,260px)]
// // // //             top-[clamp(80px,10vh,120px)]
// // // //           "
// // // //         >
// // // //           <div className="select-none font-black uppercase leading-[0.9] tracking-[-0.03em] text-black">
// // // //             {/* WHERE IDEAS */}
// // // //             <div className="overflow-hidden">
// // // //               <motion.div
// // // //                 variants={reveal}
// // // //                 className="text-[clamp(58px,7vw,165px)]"
// // // //               >
// // // //                 WHERE IDEAS
// // // //               </motion.div>
// // // //             </div>

// // // //             {/* SHAPE THE (shift right) */}
// // // //             <div className="overflow-hidden mt-[clamp(18px,1.6vw,30px)]">
// // // //               <motion.div
// // // //                 variants={reveal}
// // // //                 className="
// // // //                   text-[clamp(58px,7vw,165px)]
// // // //                   ml-[clamp(170px,18vw,470px)]
// // // //                 "
// // // //               >
// // // //                 SHAPE THE
// // // //               </motion.div>
// // // //             </div>

// // // //             {/* FUTURES + ® */}
// // // //             <div className="overflow-hidden mt-[clamp(18px,1.6vw,30px)]">
// // // //               <motion.div variants={reveal} className="flex items-end gap-2">
// // // //                 <span className="text-[clamp(58px,7vw,165px)]">FUTURES</span>
// // // //                 <span className="mb-[clamp(10px,1vw,22px)] text-[clamp(18px,1.7vw,34px)] font-black">
// // // //                   ®
// // // //                 </span>
// // // //               </motion.div>
// // // //             </div>
// // // //           </div>
// // // //         </motion.div>

// // // //         {/* SCROLL DOWN */}
// // // //         <div className="absolute bottom-8 right-8">
// // // //           <span className="text-[12px] font-semibold uppercase tracking-[0.12em] text-black/90">
// // // //             SCROLL DOWN
// // // //           </span>
// // // //         </div>
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // };

// // // // export default Hero;

// // // import React from "react";

// // // const Hero = () => {
// // //   return (
// // //     <section className="relative w-full min-h-screen bg-[#f2f2f2] overflow-hidden pt-16 md:pt-20">
      
// // //       {/* Pink glow */}
// // //       <div className="pointer-events-none absolute inset-0">
// // //         <div className="absolute left-[65%] top-[55%] h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,120,140,0.55),rgba(255,120,140,0)_65%)] blur-[2px]" />
// // //       </div>

// // //       {/* ✳︎ ASTERISK (exact left margin like image) */}
// // //       <div className="absolute left-[70px] top-[130px]">
// // //         <span className="text-[85px] leading-none select-none">
// // //           ✳︎
// // //         </span>
// // //       </div>

// // //       {/* BIG HEADLINE BLOCK */}
// // //       <div className="absolute left-[180px] top-[120px]">
// // //         <h1 className="font-black uppercase leading-[0.88] tracking-[-0.03em] text-black">
          
// // //           {/* WHERE IDEAS */}
// // //           <div className="text-[150px]">
// // //             WHERE IDEAS
// // //           </div>

// // //           {/* SHAPE THE (shift right) */}
// // //           <div className="text-[150px] ml-[420px] mt-[25px]">
// // //             SHAPE THE
// // //           </div>

// // //           {/* FUTURES */}
// // //           <div className="text-[150px] mt-[25px]">
// // //             FUTURES<span className="text-[40px] align-top ml-2">®</span>
// // //           </div>

// // //         </h1>
// // //       </div>

// // //       {/* PARAGRAPH (exact under WHERE, not overlapping) */}
// // //       <div className="absolute left-[260px] top-[310px]">
// // //         <p className="max-w-[360px] text-[13px] font-semibold uppercase leading-[1.4] tracking-[0.08em] text-black">
// // //           WE ARE STRATEGIC BRANDING AGENCY <br />
// // //           HELPING THE PLANET MOST COMPANIES <br />
// // //           MOVE FORWARDS.
// // //         </p>
// // //       </div>

// // //       {/* SCROLL DOWN */}
// // //       <div className="absolute bottom-10 right-12">
// // //         <span className="text-[12px] font-semibold uppercase tracking-[0.12em] text-black">
// // //           SCROLL DOWN
// // //         </span>
// // //       </div>

// // //     </section>
// // //   );
// // // };

// // // export default Hero;


// // // import React from "react";

// // // const Hero = () => {
// // //   return (
// // //     <section className="relative w-full min-h-screen bg-[#f2f2f2] overflow-hidden pt-16 md:pt-20">
// // //       {/* Pink glow */}
// // //       <div className="pointer-events-none absolute inset-0">
// // //         <div className="absolute left-[65%] top-[55%] h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,120,140,0.55),rgba(255,120,140,0)_65%)] blur-[2px]" />
// // //       </div>

// // //       {/* ✅ Same container as Navbar (this is the alignment anchor) */}
// // //       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
// // //         {/* This wrapper gives us a relative positioning context */}
// // //         <div className="relative min-h-[calc(100vh-64px)] md:min-h-[calc(100vh-80px)]">
          
// // //           {/* ✳︎ ASTERISK — aligned with navbar left start */}
// // //           <div className="absolute left-0 top-[110px]">
// // //             <span className="text-[85px] leading-none select-none">✳︎</span>
// // //           </div>

// // //           {/* BIG HEADLINE BLOCK — starts from same left line as navbar logo */}
// // //           <div className="absolute left-[110px] top-[100px]">
// // //             <h1 className="font-black uppercase leading-[0.88] tracking-[-0.03em] text-black">
// // //               <div className="text-[110px]">WHERE IDEAS</div>

// // //               <div className="text-[110px] ml-[420px] mt-[25px]">
// // //                 SHAPE THE
// // //               </div>

// // //               <div className="text-[110px] mt-[25px]">
// // //                 FUTURES
// // //                 <span className="text-[40px] align-top ml-2">®</span>
// // //               </div>
// // //             </h1>
// // //           </div>

// // //           {/* PARAGRAPH — under WHERE, aligned nicely */}
// // //           <div className="absolute left-[190px] top-[290px]">
// // //             <p className="max-w-[360px] text-[13px] font-semibold uppercase leading-[1.4] tracking-[0.08em] text-black">
// // //               WE ARE STRATEGIC BRANDING AGENCY <br />
// // //               HELPING THE PLANET MOST COMPANIES <br />
// // //               MOVE FORWARDS.
// // //             </p>
// // //           </div>

// // //           {/* SCROLL DOWN */}
// // //           <div className="absolute bottom-10 right-0">
// // //             <span className="text-[12px] font-semibold uppercase tracking-[0.12em] text-black">
// // //               SCROLL DOWN
// // //             </span>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default Hero;


// // // import React from "react";

// // // const Hero = () => {
// // //   return (
// // //     <section className="relative w-full min-h-screen bg-[#f2f2f2] overflow-hidden pt-16 md:pt-20 font-space">
// // //       {/* Pink glow */}
// // //       <div className="pointer-events-none absolute inset-0">
// // //         <div className="absolute left-[65%] top-[55%] h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,120,140,0.55),rgba(255,120,140,0)_65%)] blur-[2px]" />
// // //       </div>

// // //       {/* ✅ Same container as Navbar */}
// // //       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
// // //         <div className="relative min-h-[calc(100vh-64px)] md:min-h-[calc(100vh-80px)]">
          
// // //           {/* ✳︎ ASTERISK — exact alignment */}
// // //           <div className="absolute left-0 top-[110px]">
// // //             <span className="text-[85px] leading-none select-none font-semibold">✳︎</span>
// // //           </div>

// // //           {/* BIG HEADLINE BLOCK — Space Grotesk Semibold 600 */}
// // //           <div className="absolute left-[110px] top-[100px]">
// // //             <h1 className="font-semibold uppercase leading-[0.88] tracking-[-0.03em] text-black">
// // //               <div className="text-[120px]">WHERE IDEAS</div>

// // //               <div className="text-[120px] ml-[420px] mt-[25px]">
// // //                 SHAPE THE
// // //               </div>

// // //               <div className="text-[120px] mt-[25px] flex items-start">
// // //                 FUTURES
// // //                 <span className="text-[40px] leading-none ml-2">®</span>
// // //               </div>
// // //             </h1>
// // //           </div>

// // //           {/* PARAGRAPH — exact alignment */}
// // //           <div className="absolute  left-[220px] top-[260px]">
// // //             <p className="max-w-[360px] text-[13px] font-semibold uppercase leading-[1.4] tracking-[0.08em] text-black">
// // //               WE ARE STRATEGIC BRANDING AGENCY <br />
// // //               HELPING THE PLANET MOST COMPANIES <br />
// // //               MOVE FORWARDS.
// // //             </p>
// // //           </div>

// // //           {/* SCROLL DOWN */}
// // //           <div className="absolute bottom-10 right-2">
// // //             <span className="text-[12px] font-semibold uppercase tracking-[0.12em] text-black">
// // //               SCROLL DOWN
// // //             </span>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default Hero;


// // import React from "react";
// // import { motion } from "framer-motion";

// // const container = {
// //   hidden: {},
// //   show: {
// //     transition: {
// //       staggerChildren: 0.18,
// //       delayChildren: 0.1,
// //     },
// //   },
// // };

// // const reveal = {
// //   hidden: {
// //     y: "120%",
// //     opacity: 0,
// //     filter: "blur(10px)",
// //   },
// //   show: {
// //     y: "0%",
// //     opacity: 1,
// //     filter: "blur(0px)",
// //     transition: {
// //       duration: 0.9,
// //       ease: [0.22, 1, 0.36, 1],
// //     },
// //   },
// // };

// // const fadeUp = {
// //   hidden: { opacity: 0, y: 20 },
// //   show: {
// //     opacity: 1,
// //     y: 0,
// //     transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
// //   },
// // };

// // const Hero = () => {
// //   return (
// //     <section className="relative w-full min-h-screen bg-[#f2f2f2] overflow-hidden pt-16 md:pt-20 font-space">
      
// //       {/* Pink glow */}
// //       <div className="pointer-events-none absolute inset-0">
// //         <motion.div
// //           initial={{ scale: 0.8, opacity: 0 }}
// //           animate={{ scale: 1, opacity: 1 }}
// //           transition={{ duration: 1.5, ease: "easeOut" }}
// //           className="absolute left-[65%] top-[55%] h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,120,140,0.55),rgba(255,120,140,0)_65%)] blur-[2px]"
// //         />
// //       </div>

// //       {/* Same container as Navbar */}
// //       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
// //         <div className="relative min-h-[calc(100vh-64px)] md:min-h-[calc(100vh-80px)]">
          
// //           {/* ✳︎ ASTERISK */}
// //           <motion.div
// //             variants={fadeUp}
// //             initial="hidden"
// //             animate="show"
// //             className="absolute left-0 top-[110px]"
// //           >
// //             <span className="text-[85px] leading-none select-none font-semibold">
// //               ✳︎
// //             </span>
// //           </motion.div>

// //           {/* BIG HEADLINE */}
// //           <motion.div
// //             variants={container}
// //             initial="hidden"
// //             animate="show"
// //             className="absolute left-[110px] top-[100px]"
// //           >
// //             <h1 className="font-semibold uppercase leading-[0.88] tracking-[-0.03em] text-black">
              
// //               <div className="overflow-hidden">
// //                 <motion.div variants={reveal} className="text-[120px]">
// //                   WHERE IDEAS
// //                 </motion.div>
// //               </div>

// //               <div className="overflow-hidden mt-[25px] ml-[420px]">
// //                 <motion.div variants={reveal} className="text-[120px]">
// //                   SHAPE THE
// //                 </motion.div>
// //               </div>

// //               <div className="overflow-hidden mt-[25px] flex items-start">
// //                 <motion.div variants={reveal} className="text-[120px]">
// //                   FUTURES
// //                 </motion.div>
// //                 <motion.span
// //                   variants={reveal}
// //                   className="text-[40px] leading-none ml-2"
// //                 >
// //                   ®
// //                 </motion.span>
// //               </div>

// //             </h1>
// //           </motion.div>

// //           {/* PARAGRAPH */}
// //           <motion.div
// //             variants={fadeUp}
// //             initial="hidden"
// //             animate="show"
// //             transition={{ delay: 0.5 }}
// //             className="absolute left-[220px] top-[260px]"
// //           >
// //             <p className="max-w-[360px] text-[13px] font-semibold uppercase leading-[1.4] tracking-[0.08em] text-black">
// //               WE ARE STRATEGIC BRANDING AGENCY <br />
// //               HELPING THE PLANET MOST COMPANIES <br />
// //               MOVE FORWARDS.
// //             </p>
// //           </motion.div>

// //           {/* SCROLL DOWN */}
// //           <motion.div
// //             initial={{ opacity: 0 }}
// //             animate={{ opacity: 1 }}
// //             transition={{ delay: 1.2, duration: 1 }}
// //             className="absolute bottom-10 right-2"
// //           >
// //             <span className="text-[12px] font-semibold uppercase tracking-[0.12em] text-black">
// //               SCROLL DOWN
// //             </span>
// //           </motion.div>

// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Hero;

// // import React from "react";
// // import { motion } from "framer-motion";
// // import redbd from "../assets/redbg.png"

// // const Hero = () => {
// //   // অ্যানিমেশন সেটিংস
// //   const fadeInUp = {
// //     hidden: { y: 60, opacity: 0 },
// //     visible: { 
// //       y: 0, 
// //       opacity: 1, 
// //       transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
// //     }
// //   };

// //   const staggerContainer = {
// //     hidden: { opacity: 0 },
// //     visible: {
// //       opacity: 1,
// //       transition: { staggerChildren: 0.2, delayChildren: 0.1 }
// //     }
// //   };

// //   return (
// //     <section className="relative w-full min-h-screen bg-[#f2f2f2] overflow-hidden pt-16 md:pt-20 font-space">
// //       {/* Pink glow - Animated slightly for life */}
// //       <motion.div 
// //         animate={{ 
// //           scale: [1, 1.1, 1],
// //           opacity: [0.5, 0.6, 0.5] 
// //         }}
// //         transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
// //         className="pointer-events-none absolute inset-0"
// //       >
// //         <div className="absolute left-[65%] top-[55%] h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,120,140,0.55),rgba(255,120,140,0)_65%)] blur-[2px]" />
// //       </motion.div>

// //       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
// //         <div className="relative min-h-[calc(100vh-64px)] md:min-h-[calc(100vh-80px)]">
          
// //           {/* ✳︎ ASTERISK — Animated Rotation */}
// //           <motion.div 
// //             initial={{ opacity: 0, rotate: -180 }}
// //             animate={{ opacity: 1, rotate: 0 }}
// //             transition={{ duration: 1, ease: "easeOut" }}
// //             className="absolute left-0 top-[110px]"
// //           >
// //             <span className="text-[85px] leading-none select-none font-semibold block">✳︎</span>
// //           </motion.div>

// //           {/* BIG HEADLINE BLOCK */}
// //           <motion.div 
// //             variants={staggerContainer}
// //             initial="hidden"
// //             animate="visible"
// //             className="absolute left-[110px] top-[100px]"
// //           >
// //             <h1 className="font-semibold uppercase leading-[0.88] tracking-[-0.03em] text-black">
// //               {/* WHERE IDEAS */}
// //               <div className="overflow-hidden">
// //                 <motion.div variants={fadeInUp} className="text-[120px]">
// //                   WHERE IDEAS
// //                 </motion.div>
// //               </div>

// //               {/* SHAPE THE */}
// //               <div className="overflow-hidden">
// //                 <motion.div 
// //                   variants={fadeInUp} 
// //                   className="text-[120px] ml-[420px] mt-[25px]"
// //                 >
// //                   SHAPE THE
// //                 </motion.div>
// //               </div>

// //               {/* FUTURES + ® */}
// //               <div className="overflow-hidden">
// //                 <motion.div variants={fadeInUp} className="text-[120px] mt-[25px] flex items-start">
// //                   FUTURES
// //                   <motion.span 
// //                     initial={{ opacity: 0 }}
// //                     animate={{ opacity: 1 }}
// //                     transition={{ delay: 1 }}
// //                     className="text-[40px] leading-none ml-2"
// //                   >
// //                     ®
// //                   </motion.span>
// //                 </motion.div>
// //               </div>
// //             </h1>
// //           </motion.div>

// //           {/* PARAGRAPH — Fade in from left */}
// //           <motion.div 
// //             initial={{ opacity: 0, x: -20 }}
// //             animate={{ opacity: 1, x: 0 }}
// //             transition={{ delay: 0.8, duration: 0.8 }}
// //             className="absolute left-[220px] top-[260px]"
// //           >
// //             <p className="max-w-[360px] text-[13px] font-semibold uppercase leading-[1.4] tracking-[0.08em] text-black">
// //               WE ARE STRATEGIC BRANDING AGENCY <br />
// //               HELPING THE PLANET MOST COMPANIES <br />
// //               MOVE FORWARDS.
// //             </p>
// //           </motion.div>

// //           {/* SCROLL DOWN — Simple floating animation */}
// //           <motion.div 
// //             animate={{ y: [0, 10, 0] }}
// //             transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
// //             className="absolute bottom-10 right-2"
// //           >
// //             <span className="text-[12px] font-semibold uppercase tracking-[0.12em] text-black">
// //               SCROLL DOWN
// //             </span>
// //           </motion.div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Hero;


// // import React from "react";
// // import { motion } from "framer-motion";
// // import redbd from "../assets/redbg.png";

// // const Hero = () => {

// //   const fadeInUp = {
// //     hidden: { y: 60, opacity: 0 },
// //     visible: { 
// //       y: 0, 
// //       opacity: 1, 
// //       transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
// //     }
// //   };

// //   const staggerContainer = {
// //     hidden: { opacity: 0 },
// //     visible: {
// //       opacity: 1,
// //       transition: { staggerChildren: 0.2, delayChildren: 0.1 }
// //     }
// //   };

// //   return (
// //     <section className="relative w-full min-h-screen bg-[#f2f2f2] overflow-hidden pt-16 md:pt-20 font-space">

// //       {/* 🔴 RED IMAGE GLOW (Replaced Gradient Only) */}
// //       <motion.div 
// //         animate={{ 
// //           scale: [1, 1.08, 1],
// //           opacity: [0.55, 0.65, 0.55] 
// //         }}
// //         transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
// //         className="pointer-events-none absolute inset-0"
// //       >
// //         <img
// //           src={redbd}
// //           alt="Red Glow"
// //           className="absolute left-[65%] top-[55%] h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 object-contain opacity-80"
// //         />
// //       </motion.div>

// //       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
// //         <div className="relative min-h-[calc(100vh-64px)] md:min-h-[calc(100vh-80px)]">
          
// //           {/* ✳︎ ASTERISK */}
// //           <motion.div 
// //             initial={{ opacity: 0, rotate: -180 }}
// //             animate={{ opacity: 1, rotate: 0 }}
// //             transition={{ duration: 1, ease: "easeOut" }}
// //             className="absolute left-0 top-[110px]"
// //           >
// //             <span className="text-[85px] leading-none select-none font-semibold block">
// //               ✳︎
// //             </span>
// //           </motion.div>

// //           {/* HEADLINE */}
// //           <motion.div 
// //             variants={staggerContainer}
// //             initial="hidden"
// //             animate="visible"
// //             className="absolute left-[110px] top-[100px]"
// //           >
// //             <h1 className="font-semibold uppercase leading-[0.88] tracking-[-0.03em] text-black">
              
// //               <div className="overflow-hidden">
// //                 <motion.div variants={fadeInUp} className="text-[120px]">
// //                   WHERE IDEAS
// //                 </motion.div>
// //               </div>

// //               <div className="overflow-hidden">
// //                 <motion.div 
// //                   variants={fadeInUp} 
// //                   className="text-[120px] ml-[420px] mt-[25px]"
// //                 >
// //                   SHAPE THE
// //                 </motion.div>
// //               </div>

// //               <div className="overflow-hidden">
// //                 <motion.div variants={fadeInUp} className="text-[120px] mt-[25px] flex items-start">
// //                   FUTURES
// //                   <motion.span 
// //                     initial={{ opacity: 0 }}
// //                     animate={{ opacity: 1 }}
// //                     transition={{ delay: 1 }}
// //                     className="text-[40px] leading-none ml-2"
// //                   >
// //                     ®
// //                   </motion.span>
// //                 </motion.div>
// //               </div>
// //             </h1>
// //           </motion.div>

// //           {/* PARAGRAPH */}
// //           <motion.div 
// //             initial={{ opacity: 0, x: -20 }}
// //             animate={{ opacity: 1, x: 0 }}
// //             transition={{ delay: 0.8, duration: 0.8 }}
// //             className="absolute left-[220px] top-[260px]"
// //           >
// //             <p className="max-w-[360px] text-[13px] font-semibold uppercase leading-[1.4] tracking-[0.08em] text-black">
// //               WE ARE STRATEGIC BRANDING AGENCY <br />
// //               HELPING THE PLANET MOST COMPANIES <br />
// //               MOVE FORWARDS.
// //             </p>
// //           </motion.div>

// //           {/* SCROLL DOWN */}
// //           <motion.div 
// //             animate={{ y: [0, 10, 0] }}
// //             transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
// //             className="absolute bottom-10 right-2"
// //           >
// //             <span className="text-[12px] font-semibold uppercase tracking-[0.12em] text-black">
// //               SCROLL DOWN
// //             </span>
// //           </motion.div>

// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Hero;


// // import React from "react";
// // import { motion } from "framer-motion";
// // import redbd from "../assets/redbg.png";

// // const Hero = () => {

// //   const fadeInUp = {
// //     hidden: { y: 60, opacity: 0 },
// //     visible: { 
// //       y: 0, 
// //       opacity: 1, 
// //       transition: { duration: 1.4, ease: [0.22, 1, 0.36, 1] } 
// //     }
// //   };

// //   const staggerContainer = {
// //     hidden: { opacity: 0 },
// //     visible: {
// //       opacity: 1,
// //       transition: { staggerChildren: 0.35, delayChildren: 0.3 }
// //     }
// //   };

// //   return (
// //     <section className="relative w-full min-h-screen bg-[#f2f2f2] overflow-hidden pt-16 md:pt-20 font-space">

// //       {/* 🔴 RED IMAGE GLOW */}
// //       <motion.div 
// //         animate={{ 
// //           scale: [1, 1.08, 1],
// //           opacity: [0.55, 0.65, 0.55] 
// //         }}
// //         transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
// //         className="pointer-events-none absolute inset-0"
// //       >
// //         <img
// //           src={redbd}
// //           alt="Red Glow"
// //           className="absolute left-[65%] top-[55%] h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 object-contain opacity-80"
// //         />
// //       </motion.div>

// //       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
// //         <div className="relative min-h-[calc(100vh-64px)] md:min-h-[calc(100vh-80px)]">
          
// //           {/* ✳︎ ASTERISK */}
// //           <motion.div 
// //             initial={{ opacity: 0, rotate: -180 }}
// //             animate={{ opacity: 1, rotate: 0 }}
// //             transition={{ duration: 1.6, ease: "easeOut" }}
// //             className="absolute left-0 top-[110px]"
// //           >
// //             <span className="text-[85px] leading-none select-none font-semibold block">
// //               ✳︎
// //             </span>
// //           </motion.div>

// //           {/* HEADLINE */}
// //           <motion.div 
// //             variants={staggerContainer}
// //             initial="hidden"
// //             animate="visible"
// //             className="absolute left-[110px] top-[100px]"
// //           >
// //             <h1 className="font-semibold uppercase leading-[0.88] tracking-[-0.03em] text-black">
              
// //               <div className="overflow-hidden">
// //                 <motion.div variants={fadeInUp} className="text-[120px]">
// //                   WHERE IDEAS
// //                 </motion.div>
// //               </div>

// //               <div className="overflow-hidden">
// //                 <motion.div 
// //                   variants={fadeInUp} 
// //                   className="text-[120px] ml-[420px] mt-[25px]"
// //                 >
// //                   SHAPE THE
// //                 </motion.div>
// //               </div>

// //               <div className="overflow-hidden">
// //                 <motion.div variants={fadeInUp} className="text-[120px] mt-[25px] flex items-start">
// //                   FUTURES
// //                   <motion.span 
// //                     initial={{ opacity: 0 }}
// //                     animate={{ opacity: 1 }}
// //                     transition={{ delay: 2.2, duration: 1 }}
// //                     className="text-[40px] leading-none ml-2"
// //                   >
// //                     ®
// //                   </motion.span>
// //                 </motion.div>
// //               </div>
// //             </h1>
// //           </motion.div>

// //           {/* PARAGRAPH */}
// //           <motion.div 
// //             initial={{ opacity: 0, x: -20 }}
// //             animate={{ opacity: 1, x: 0 }}
// //             transition={{ delay: 1.2, duration: 0.8 }}
// //             className="absolute left-[220px] top-[260px]"
// //           >
// //             <p className="max-w-[360px] text-[13px] font-semibold uppercase leading-[1.4] tracking-[0.08em] text-black">
// //               WE ARE STRATEGIC BRANDING AGENCY <br />
// //               HELPING THE PLANET MOST COMPANIES <br />
// //               MOVE FORWARDS.
// //             </p>
// //           </motion.div>

// //           {/* SCROLL DOWN */}
// //           <motion.div 
// //             animate={{ y: [0, 10, 0] }}
// //             transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
// //             className="absolute bottom-10 right-2"
// //           >
// //             <span className="text-[12px] font-semibold uppercase tracking-[0.12em] text-black">
// //               SCROLL DOWN
// //             </span>
// //           </motion.div>

// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Hero;


// import React from "react";
// import { motion } from "framer-motion";
// import redbd from "../assets/redbg.png";

// const Hero = () => {
//   const fadeInUp = {
//     hidden: { y: 60, opacity: 0 },
//     visible: { 
//       y: 0, 
//       opacity: 1, 
//       transition: { duration: 1.4, ease: [0.22, 1, 0.36, 1] } 
//     }
//   };

//   const staggerContainer = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.35, delayChildren: 0.3 }
//     }
//   };

//   return (
//     <section className="relative w-full min-h-screen bg-[#f2f2f2] overflow-hidden pt-16 md:pt-20 font-space">

//       {/* 🔴 RED IMAGE GLOW - Desktop এ আপনার ভ্যালু, মোবাইলে অ্যাডজাস্টেড */}
//       <motion.div 
//         animate={{ scale: [1, 1.08, 1], opacity: [0.55, 0.65, 0.55] }}
//         transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
//         className="pointer-events-none absolute inset-0 z-0"
//       >
//         <img
//           src={redbd}
//           alt="Red Glow"
//           className="absolute left-[70%] md:left-[65%] top-[50%] md:top-[55%] h-[400px] w-[400px] md:h-[800px] md:w-[800px] -translate-x-1/2 -translate-y-1/2 object-contain opacity-80"
//         />
//       </motion.div>

//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         <div className="relative min-h-[calc(100vh-64px)] md:min-h-[calc(100vh-80px)] flex flex-col md:block">
          
//           {/* ✳︎ ASTERISK - Desktop এ absolute, Mobile এ স্বাভাবিক */}
//           <motion.div 
//             initial={{ opacity: 0, rotate: -180 }}
//             animate={{ opacity: 1, rotate: 0 }}
//             transition={{ duration: 1.6, ease: "easeOut" }}
//             className="relative md:absolute left-0 top-0 md:top-[110px] mt-10 md:mt-0"
//           >
//             <span className="text-[50px] md:text-[85px] leading-none select-none font-semibold block">
//               ✳︎
//             </span>
//           </motion.div>

//           {/* HEADLINE - Desktop এ আপনার exact values, Mobile এ VW ফন্ট */}
//           <motion.div 
//             variants={staggerContainer}
//             initial="hidden"
//             animate="visible"
//             className="md:absolute left-0 md:left-[110px] top-0 md:top-[100px]"
//           >
//             <h1 className="font-semibold uppercase leading-[0.9] md:leading-[0.88] tracking-[-0.03em] text-black">
              
//               <div className="overflow-hidden">
//                 <motion.div variants={fadeInUp} className="text-[14vw] md:text-[120px]">
//                   WHERE IDEAS
//                 </motion.div>
//               </div>

//               <div className="overflow-hidden">
//                 <motion.div 
//                   variants={fadeInUp} 
//                   className="text-[14vw] md:text-[120px] md:ml-[420px] mt-[10px] md:mt-[25px]"
//                 >
//                   SHAPE THE
//                 </motion.div>
//               </div>

//               <div className="overflow-hidden">
//                 <motion.div variants={fadeInUp} className="text-[14vw] md:text-[120px] mt-[10px] md:mt-[25px] flex items-start">
//                   FUTURES
//                   <motion.span 
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ delay: 2.2, duration: 1 }}
//                     className="text-[6vw] md:text-[40px] leading-none ml-2"
//                   >
//                     ®
//                   </motion.span>
//                 </motion.div>
//               </div>
//             </h1>
//           </motion.div>

//           {/* PARAGRAPH - Desktop এ exact left-[220px], Mobile এ নিচে */}
//           <motion.div 
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ delay: 1.2, duration: 0.8 }}
//             className="relative md:absolute md:left-[220px] md:top-[260px] mt-8 md:mt-0"
//           >
//             <p className="max-w-[300px] md:max-w-[360px] text-[11px] md:text-[13px] font-semibold uppercase leading-[1.5] md:leading-[1.4] tracking-[0.08em] text-black">
//               WE ARE STRATEGIC BRANDING AGENCY <br className="hidden md:block" />
//               HELPING THE PLANET MOST COMPANIES <br className="hidden md:block" />
//               MOVE FORWARDS.
//             </p>
//           </motion.div>

//           {/* SCROLL DOWN */}
//           <motion.div 
//             animate={{ y: [0, 10, 0] }}
//             transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
//             className="absolute bottom-10 right-0 md:right-2"
//           >
//             <span className="text-[10px] md:text-[12px] font-semibold uppercase tracking-[0.12em] text-black">
//               SCROLL DOWN
//             </span>
//           </motion.div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;


// Good Layout



// import React from "react";
// import { motion } from "framer-motion";
// import redbd from "../assets/redbg.png";

// const Hero = () => {

//   const fadeInUp = {
//     hidden: { y: 60, opacity: 0 },
//     visible: { 
//       y: 0, 
//       opacity: 1, 
//       transition: { duration: 1.4, ease: [0.22, 1, 0.36, 1] } 
//     }
//   };

//   const staggerContainer = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.35, delayChildren: 0.3 }
//     }
//   };

//   return (
//     <section id="hero" className="relative w-full min-h-screen bg-[#f2f2f2] overflow-hidden pt-16 md:pt-20 font-space">

//       {/* 🔴 RED IMAGE GLOW */}
//       <motion.div 
//         animate={{ 
//           scale: [1, 1.08, 1],
//           opacity: [0.55, 0.65, 0.55] 
//         }}
//         transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
//         className="pointer-events-none absolute inset-0"
//       >
//         <img
//           src={redbd}
//           alt="Red Glow"
//           className="
//             absolute
//             left-[65%] top-[55%]
//             h-[500px] w-[500px]
//             md:h-[650px] md:w-[650px]
//             lg:h-[800px] lg:w-[800px]
//             -translate-x-1/2 -translate-y-1/2
//             object-contain opacity-80
//           "
//         />
//       </motion.div>

//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="relative min-h-[calc(100vh-64px)] md:min-h-[calc(100vh-80px)]">

//           {/* ✳︎ ASTERISK */}
//           <motion.div 
//             initial={{ opacity: 0, rotate: -180 }}
//             animate={{ opacity: 1, rotate: 0 }}
//             transition={{ duration: 1.6 }}
//             className="
//               absolute
//               left-0
//               top-[80px]
//               md:top-[110px]
//             "
//           >
//             <span className="
//               text-[60px]
//               md:text-[85px]
//               leading-none select-none font-semibold block
//             ">
//               ✳︎
//             </span>
//           </motion.div>

//           {/* HEADLINE */}
//           <motion.div 
//             variants={staggerContainer}
//             initial="hidden"
//             animate="visible"
//             className="
//               absolute
//               left-0
//               top-[160px]

//               md:left-[110px]
//               md:top-[100px]
//             "
//           >
//             <h1 className="font-semibold uppercase leading-[0.9] tracking-[-0.03em] text-black">

//               {/* WHERE IDEAS */}
//               <div className="overflow-hidden">
//                 <motion.div 
//                   variants={fadeInUp}
//                   className="
//                     text-[52px]
//                     sm:text-[70px]
//                     md:text-[120px]
//                   "
//                 >
//                   WHERE IDEAS
//                 </motion.div>
//               </div>

//               {/* SHAPE THE */}
//               <div className="overflow-hidden">
//                 <motion.div 
//                   variants={fadeInUp}
//                   className="
//                     text-[52px]
//                     sm:text-[70px]
//                     md:text-[120px]

//                     mt-[15px]
//                     md:mt-[25px]

//                     ml-0
//                     md:ml-[420px]
//                   "
//                 >
//                   SHAPE THE
//                 </motion.div>
//               </div>

//               {/* FUTURES */}
//               <div className="overflow-hidden">
//                 <motion.div 
//                   variants={fadeInUp}
//                   className="
//                     text-[52px]
//                     sm:text-[70px]
//                     md:text-[120px]

//                     mt-[15px]
//                     md:mt-[25px]

//                     flex items-start
//                   "
//                 >
//                   FUTURES
//                   <motion.span 
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ delay: 2.2, duration: 1 }}
//                     className="
//                       text-[20px]
//                       sm:text-[26px]
//                       md:text-[40px]
//                       leading-none ml-2
//                     "
//                   >
//                     ®
//                   </motion.span>
//                 </motion.div>
//               </div>

//             </h1>
//           </motion.div>

//           {/* PARAGRAPH */}
//           <motion.div 
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ delay: 1.2, duration: 0.8 }}
//             className="
//               absolute
//               left-0
//               top-[340px]

//               md:left-[220px]
//               md:top-[260px]
//             "
//           >
//             <p className="
//               max-w-[730px]
//               md:max-w-[660px]

//               text-[12px]
//               md:text-[13px]

//               font-semibold uppercase leading-[1.4] tracking-[0.08em] text-black
//             ">
//               WE ARE STRATEGIC BRANDING AGENCY <br />
//               HELPING THE PLANET MOST COMPANIES <br />
//               MOVE FORWARDS.
//             </p>
//           </motion.div>

//           {/* SCROLL DOWN */}
//           <motion.div 
//             animate={{ y: [0, 10, 0] }}
//             transition={{ duration: 3, repeat: Infinity }}
//             className="
//               absolute
//               bottom-6 right-4
//               md:bottom-10 md:right-2
//             "
//           >
//             <span className="text-[11px] md:text-[12px] font-semibold uppercase tracking-[0.12em] text-black">
//               SCROLL DOWN
//             </span>
//           </motion.div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;


import React from "react";
import { motion } from "framer-motion";
import redbd from "../assets/redbg.png";

const Hero = () => {

  const fadeInUp = {
    hidden: { y: 60, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { duration: 1.4, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.35, delayChildren: 0.3 }
    }
  };

  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section id="hero" className="relative w-full min-h-screen bg-[#f2f2f2] overflow-hidden pt-16 md:pt-20 font-space">

      {/* 🔴 RED IMAGE GLOW */}
      <motion.div 
        animate={{ 
          scale: [1, 1.08, 1],
          opacity: [0.55, 0.65, 0.55] 
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute inset-0"
      >
        <img
          src={redbd}
          alt="Red Glow"
          className="
            absolute
            left-[65%] top-[55%]
            h-[500px] w-[500px]
            md:h-[650px] md:w-[650px]
            lg:h-[800px] lg:w-[800px]
            -translate-x-1/2 -translate-y-1/2
            object-contain opacity-80
          "
        />
      </motion.div>

      <div className="container mx-auto px-6 md:px-4 sm:px-6 lg:px-8">
        <div className="relative min-h-[calc(100vh-64px)] md:min-h-[calc(100vh-80px)]">

          {/* ✳︎ ASTERISK */}
          <motion.div 
            initial={{ opacity: 0, rotate: -180 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ duration: 1.6 }}
            className="
              absolute
              left-0
              top-[80px]
              md:top-[110px]
            "
          >
            <span className="
              text-[60px]
              md:text-[85px]
              leading-none select-none font-semibold block
            ">
              ✳︎
            </span>
          </motion.div>

          {/* HEADLINE */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="
              absolute
              left-0
              top-[150px]
              md:left-[110px]
              md:top-[100px]
            "
          >
            <h1 className="font-semibold uppercase leading-[1] md:leading-[0.9] tracking-[-0.03em] text-black">

              {/* Mobile 4-line layout */}
              <div className="md:hidden space-y-3">
                <div className="overflow-hidden">
                  <motion.div variants={fadeInUp} className="text-[48px]">
                    WHERE 
                  </motion.div>
                </div>
                <div className="overflow-hidden">
                  <motion.div variants={fadeInUp} className="text-[48px]">
                   IDEAS 
                  </motion.div>
                </div>
                <div className="overflow-hidden">
                  <motion.div variants={fadeInUp} className="text-[48px]">
                  SHAPE  THE
                  </motion.div>
                </div>
                <div className="overflow-hidden flex items-start">
                  <motion.div variants={fadeInUp} className="text-[48px]">
                    FUTURES
                  </motion.div>
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.2, duration: 1 }}
                    className="text-[18px] ml-2"
                  >
                    ®
                  </motion.span>
                </div>
              </div>

              {/* Desktop layout (UNCHANGED) */}
              <div className="hidden md:block">

                <div className="overflow-hidden">
                  <motion.div 
                    variants={fadeInUp}
                    className="
                      text-[52px]
                      sm:text-[70px]
                      md:text-[120px]
                    "
                  >
                    WHERE IDEAS
                  </motion.div>
                </div>

                <div className="overflow-hidden">
                  <motion.div 
                    variants={fadeInUp}
                    className="
                      text-[52px]
                      sm:text-[70px]
                      md:text-[120px]
                      mt-[15px]
                      md:mt-[25px]
                      ml-0
                      md:ml-[420px]
                    "
                  >
                    SHAPE THE
                  </motion.div>
                </div>

                <div className="overflow-hidden">
                  <motion.div 
                    variants={fadeInUp}
                    className="
                      text-[52px]
                      sm:text-[70px]
                      md:text-[120px]
                      mt-[15px]
                      md:mt-[25px]
                      flex items-start
                    "
                  >
                    FUTURES
                    <motion.span 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 2.2, duration: 1 }}
                      className="
                        text-[20px]
                        sm:text-[26px]
                        md:text-[40px]
                        leading-none ml-2
                      "
                    >
                      ®
                    </motion.span>
                  </motion.div>
                </div>

              </div>
            </h1>
          </motion.div>

          {/* PARAGRAPH */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="
              absolute
              left-0
              top-[420px]
              md:left-[220px]
              md:top-[260px]
            "
          >
            <p className="
              max-w-[320px]
              md:max-w-[660px]
              text-[13px]
              md:text-[13px]
              font-semibold uppercase leading-[1.5] tracking-[0.08em] text-black
            ">
              WE ARE STRATEGIC BRANDING AGENCY <br />
              HELPING THE PLANET MOST COMPANIES <br />
              MOVE FORWARDS.
            </p>
          </motion.div>

          {/* SCROLL DOWN */}
          <motion.div 
            onClick={scrollToNext}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="
              absolute
              bottom-8 right-6
              md:bottom-10 md:right-2
              cursor-pointer
            "
          >
            <span className="text-[12px] md:text-[12px] font-semibold uppercase tracking-[0.12em] text-black">
              SCROLL DOWN
            </span>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;