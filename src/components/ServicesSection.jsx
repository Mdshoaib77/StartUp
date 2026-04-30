// // // import React from 'react'
// // // import { BsStack } from 'react-icons/bs'
// // // import { HiLightBulb } from 'react-icons/hi'
// // // import { FiSettings } from 'react-icons/fi'
// // // import { BiTime } from 'react-icons/bi'
// // // import { motion } from "framer-motion";
// // // import { fadeIn, textVariant } from "../utils/motion";

// // // const ServicesSection = () => {
// // //   const services = [
// // //     {
// // //       icon: <BsStack className="w-8 h-8 text-indigo-600" />,
// // //       title: "Web Design",
// // //       description: "One for all and all for one, Muskehounds are always ready.",
// // //       link: "#learn-more"
// // //     },
// // //     {
// // //       icon: <HiLightBulb className="w-8 h-8 text-amber-400" />,
// // //       title: "Ad-Creatives", 
// // //       description: "Alphabet Village and the subline of her own road.",
// // //       link: "#learn-more"
// // //     },
// // //     {
// // //       icon: <FiSettings className="w-8 h-8 text-red-400" />,
// // //       title: "Automation",
// // //       description: "Little Blind Text should turn around and return.",
// // //       link: "#learn-more"
// // //     },
// // //     {
// // //       icon: <BiTime className="w-8 h-8 text-cyan-400" />,
// // //       title: "Infographics",
// // //       description: "Nothing the copy said could convince her.",
// // //       link: "#learn-more"
// // //     }
// // //   ]

// // //   return (
// // //     <section id="services" className="py-20 container mx-auto px-4 sm:px-6 lg:px-8">
// // //      <motion.div 
// // //       variants={fadeIn('up', 0.3)}
// // //       className='flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-24'
// // //      >
// // //        {/* Header */}
// // //        <motion.div 
// // //         variants={fadeIn('right', 0.4)}
// // //         className="md:w-1/3"
// // //        >
// // //         <motion.h2 
// // //           variants={textVariant(0.2)}
// // //           className="text-3xl md:text-4xl font-bold mb-6 md:w-4/5"
// // //         >
// // //           Future of support with new shape
// // //         </motion.h2>
// // //         <motion.p 
// // //           variants={fadeIn('up', 0.5)}
// // //           className="text-gray-600 text-lg mb-4 md:w-4/5"
// // //         >
// // //           Discuss your goals, determine success metrics, identify problems
// // //         </motion.p>
// // //         <motion.div 
// // //           variants={fadeIn('up', 0.6)}
// // //           className="space-y-3"
// // //         >
// // //           <motion.div 
// // //             variants={fadeIn('right', 0.7)}
// // //             className="flex items-center gap-2"
// // //           >
// // //             <div className="w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center">
// // //               <div className="w-2.5 h-2.5 rounded-full bg-indigo-600"></div>
// // //             </div>
// // //             <span className="text-gray-600">UX design content strategy</span>
// // //           </motion.div>
// // //           <motion.div 
// // //             variants={fadeIn('right', 0.8)}
// // //             className="flex items-center gap-2"
// // //           >
// // //             <div className="w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center">
// // //               <div className="w-2.5 h-2.5 rounded-full bg-indigo-600"></div>
// // //             </div>
// // //             <span className="text-gray-600">Development bring</span>
// // //           </motion.div>
// // //         </motion.div>
// // //         <motion.button 
// // //           variants={fadeIn('up', 0.9)}
// // //           whileHover={{ scale: 1.05 }}
// // //           whileTap={{ scale: 0.95 }}
// // //           className="mt-8 bg-indigo-600 text-white px-8 py-3 cursor-pointer rounded-full hover:bg-indigo-700 transition-colors"
// // //         >
// // //           Get started
// // //         </motion.button>
// // //       </motion.div>

// // //       {/* Services Grid */}
// // //       <motion.div 
// // //         variants={fadeIn('left', 0.4)}
// // //         className="grid grid-cols-1 md:grid-cols-2 gap-8"
// // //       >
// // //         {services.map((service, index) => (
// // //           <motion.div 
// // //             key={index}
// // //             variants={fadeIn('up', 0.3 * (index + 1))}
// // //             whileHover={{ scale: 1.05 }}
// // //             className="bg-white max-w-72 cursor-pointer rounded-2xl p-6 hover:shadow-xl transition-shadow duration-300"
// // //           >
// // //             <motion.div 
// // //               variants={fadeIn('down', 0.4 * (index + 1))}
// // //               className="mb-4"
// // //             >
// // //               {service.icon}
// // //             </motion.div>
// // //             <motion.h3 
// // //               variants={textVariant(0.3)}
// // //               className="text-xl font-semibold mb-2"
// // //             >
// // //               {service.title}
// // //             </motion.h3>
// // //             <motion.p 
// // //               variants={fadeIn('up', 0.5 * (index + 1))}
// // //               className="text-gray-600 mb-4"
// // //             >
// // //               {service.description}
// // //             </motion.p>
// // //             <motion.a 
// // //               variants={fadeIn('up', 0.6 * (index + 1))}
// // //               href={service.link}
// // //               className="text-indigo-600 font-medium hover:text-indigo-700 transition-colors"
// // //             >
// // //               LEARN MORE
// // //             </motion.a>
// // //           </motion.div>
// // //         ))}
// // //       </motion.div>
// // //      </motion.div>
// // //     </section>
// // //   )
// // // }

// // // export default ServicesSection 

// // // import React from "react";
// // // import { BsStack } from "react-icons/bs";
// // // import { HiLightBulb } from "react-icons/hi";
// // // import { FiSettings } from "react-icons/fi";
// // // import { BiTime } from "react-icons/bi";
// // // import { motion } from "framer-motion";
// // // import { fadeIn, textVariant } from "../utils/motion";

// // // const ServicesSection = () => {
// // //   const services = [
// // //     {
// // //       icon: <BsStack className="w-7 h-7" />,
// // //       title: "Brand & Web Design",
// // //       description:
// // //         "Strategic brand identity and high-converting website experiences built to position you as premium.",
// // //     },
// // //     {
// // //       icon: <HiLightBulb className="w-7 h-7" />,
// // //       title: "Creative Campaigns",
// // //       description:
// // //         "Ad creatives and visual storytelling designed to attract attention and drive real engagement.",
// // //     },
// // //     {
// // //       icon: <FiSettings className="w-7 h-7" />,
// // //       title: "Growth Automation",
// // //       description:
// // //         "Smart funnels, CRM flows, and automation systems that scale your business efficiently.",
// // //     },
// // //     {
// // //       icon: <BiTime className="w-7 h-7" />,
// // //       title: "Analytics & Optimization",
// // //       description:
// // //         "Data-backed decisions through tracking, reporting, and continuous performance optimization.",
// // //     },
// // //   ];

// // //   return (
// // //     <section
// // //       id="services"
// // //       className="bg-[#F1F2F4] py-24 md:py-32"
// // //     >
// // //       <div className="container mx-auto px-4 sm:px-6 lg:px-8">

// // //         <motion.div
// // //           variants={fadeIn("up", 0.3)}
// // //           initial="hidden"
// // //           whileInView="show"
// // //           viewport={{ once: true }}
// // //           className="flex flex-col md:flex-row items-start justify-between gap-16"
// // //         >

// // //           {/* LEFT CONTENT */}
// // //           <motion.div
// // //             variants={fadeIn("right", 0.4)}
// // //             className="md:w-1/3"
// // //           >
// // //             <motion.h2
// // //               variants={textVariant(0.2)}
// // //               className="text-4xl md:text-5xl font-bold leading-tight text-black mb-6"
// // //             >
// // //               We don’t just build.
// // //               <br />
// // //               <span className="text-black/60">We scale brands.</span>
// // //             </motion.h2>

// // //             <motion.p
// // //               variants={fadeIn("up", 0.5)}
// // //               className="text-black/60 text-lg mb-8 leading-relaxed"
// // //             >
// // //               From strategy to execution — we craft digital systems
// // //               that position your startup for authority, visibility,
// // //               and measurable growth.
// // //             </motion.p>

// // //             <motion.div
// // //               variants={fadeIn("up", 0.6)}
// // //               className="space-y-4 text-black/70"
// // //             >
// // //               <div className="flex items-center gap-3">
// // //                 <div className="w-3 h-3 bg-black rounded-full"></div>
// // //                 <span>Strategic Brand Positioning</span>
// // //               </div>
// // //               <div className="flex items-center gap-3">
// // //                 <div className="w-3 h-3 bg-black rounded-full"></div>
// // //                 <span>Conversion-Focused UX</span>
// // //               </div>
// // //               <div className="flex items-center gap-3">
// // //                 <div className="w-3 h-3 bg-black rounded-full"></div>
// // //                 <span>Performance-Driven Growth</span>
// // //               </div>
// // //             </motion.div>

// // //             <motion.button
// // //               variants={fadeIn("up", 0.7)}
// // //               whileHover={{ scale: 1.05 }}
// // //               whileTap={{ scale: 0.95 }}
// // //               className="mt-10 bg-black text-white px-8 py-3 rounded-full font-medium shadow-md hover:shadow-xl transition"
// // //             >
// // //               Start Your Project
// // //             </motion.button>
// // //           </motion.div>

// // //           {/* RIGHT GRID */}
// // //           <motion.div
// // //             variants={fadeIn("left", 0.4)}
// // //             className="grid grid-cols-1 md:grid-cols-2 gap-8 md:w-2/3"
// // //           >
// // //             {services.map((service, index) => (
// // //               <motion.div
// // //                 key={index}
// // //                 variants={fadeIn("up", 0.2 * (index + 1))}
// // //                 whileHover={{ y: -6 }}
// // //                 className="bg-white rounded-3xl p-8 border border-black/5 shadow-sm hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-300"
// // //               >
// // //                 <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-black/5 text-black mb-6">
// // //                   {service.icon}
// // //                 </div>

// // //                 <h3 className="text-xl font-semibold text-black mb-3">
// // //                   {service.title}
// // //                 </h3>

// // //                 <p className="text-black/60 mb-6 leading-relaxed">
// // //                   {service.description}
// // //                 </p>

// // //                 <a
// // //                   href="#"
// // //                   className="text-sm font-semibold text-black flex items-center gap-2 group"
// // //                 >
// // //                   Learn More
// // //                   <span className="transition-transform group-hover:translate-x-1">
// // //                     →
// // //                   </span>
// // //                 </a>
// // //               </motion.div>
// // //             ))}
// // //           </motion.div>

// // //         </motion.div>

// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default ServicesSection;



// // // import React from "react";
// // // import { BsPalette } from "react-icons/bs";
// // // import { HiOutlineCode } from "react-icons/hi";
// // // import { FiTrendingUp } from "react-icons/fi";
// // // import { BiLayer } from "react-icons/bi";
// // // import { motion } from "framer-motion";
// // // import { fadeIn, textVariant } from "../utils/motion";

// // // const ServicesSection = () => {
// // //   const services = [
// // //     {
// // //       icon: <BsPalette className="w-7 h-7" />,
// // //       title: "Branding & Logo Design",
// // //       description:
// // //         "Strategic brand identity, logo systems, and visual guidelines that position your startup with authority and clarity.",
// // //     },
// // //     {
// // //       icon: <BiLayer className="w-7 h-7" />,
// // //       title: "Graphic & Creative Design",
// // //       description:
// // //         "High-impact social creatives, ad designs, pitch decks, and marketing visuals that elevate your brand presence.",
// // //     },
// // //     {
// // //       icon: <HiOutlineCode className="w-7 h-7" />,
// // //       title: "Web Development & UI/UX",
// // //       description:
// // //         "Modern, responsive websites and digital platforms built for performance, usability, and conversion.",
// // //     },
// // //     {
// // //       icon: <FiTrendingUp className="w-7 h-7" />,
// // //       title: "Digital Marketing & Growth",
// // //       description:
// // //         "Performance marketing, funnels, and growth strategies designed to scale traffic, leads, and revenue.",
// // //     },
// // //   ];

// // //   return (
// // //     <section
// // //       id="services"
// // //       className="bg-[#F1F2F4] py-28 md:py-36"
// // //     >
// // //       <div className="container mx-auto px-4 sm:px-6 lg:px-8">

// // //         <motion.div
// // //           variants={fadeIn("up", 0.3)}
// // //           initial="hidden"
// // //           whileInView="show"
// // //           viewport={{ once: true }}
// // //           className="flex flex-col md:flex-row items-start justify-between gap-20"
// // //         >

// // //           {/* LEFT CONTENT */}
// // //           <motion.div
// // //             variants={fadeIn("right", 0.4)}
// // //             className="md:w-1/3"
// // //           >
// // //             <motion.h2
// // //               variants={textVariant(0.2)}
// // //               className="text-4xl md:text-5xl font-bold leading-tight text-black mb-6"
// // //             >
// // //               Everything Your
// // //               <br />
// // //               <span className="text-black/60">Startup Needs.</span>
// // //             </motion.h2>

// // //             <motion.p
// // //               variants={fadeIn("up", 0.5)}
// // //               className="text-black/60 text-lg mb-10 leading-relaxed"
// // //             >
// // //               From brand foundation to scalable marketing systems —
// // //               we provide complete creative and technical solutions
// // //               to help your business grow with confidence.
// // //             </motion.p>

// // //             <motion.div
// // //               variants={fadeIn("up", 0.6)}
// // //               className="space-y-4 text-black/70"
// // //             >
// // //               <div className="flex items-center gap-3">
// // //                 <div className="w-2.5 h-2.5 bg-black rounded-full"></div>
// // //                 <span>Strong Brand Identity</span>
// // //               </div>
// // //               <div className="flex items-center gap-3">
// // //                 <div className="w-2.5 h-2.5 bg-black rounded-full"></div>
// // //                 <span>High-Converting Website</span>
// // //               </div>
// // //               <div className="flex items-center gap-3">
// // //                 <div className="w-2.5 h-2.5 bg-black rounded-full"></div>
// // //                 <span>Measurable Marketing Growth</span>
// // //               </div>
// // //             </motion.div>

// // //             <motion.button
// // //               variants={fadeIn("up", 0.7)}
// // //               whileHover={{ scale: 1.05 }}
// // //               whileTap={{ scale: 0.95 }}
// // //               className="mt-12 bg-black text-white px-9 py-3 rounded-full font-medium shadow-md hover:shadow-xl transition"
// // //             >
// // //               Let’s Build Your Brand
// // //             </motion.button>
// // //           </motion.div>

// // //           {/* RIGHT GRID */}
// // //           <motion.div
// // //             variants={fadeIn("left", 0.4)}
// // //             className="grid grid-cols-1 md:grid-cols-2 gap-10 md:w-2/3"
// // //           >
// // //             {services.map((service, index) => (
// // //               <motion.div
// // //                 key={index}
// // //                 variants={fadeIn("up", 0.2 * (index + 1))}
// // //                 whileHover={{ y: -8 }}
// // //                 className="bg-white rounded-3xl p-10 border border-black/5 shadow-sm hover:shadow-[0_25px_60px_rgba(0,0,0,0.07)] transition-all duration-300"
// // //               >
// // //                 <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-black/5 text-black mb-7">
// // //                   {service.icon}
// // //                 </div>

// // //                 <h3 className="text-xl font-semibold text-black mb-4">
// // //                   {service.title}
// // //                 </h3>

// // //                 <p className="text-black/60 leading-relaxed">
// // //                   {service.description}
// // //                 </p>
// // //               </motion.div>
// // //             ))}
// // //           </motion.div>

// // //         </motion.div>

// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default ServicesSection;


// // import React, { useState } from "react";
// // import { BsPalette } from "react-icons/bs";
// // import { HiOutlineCode } from "react-icons/hi";
// // import { FiTrendingUp } from "react-icons/fi";
// // import { BiLayer } from "react-icons/bi";
// // import { motion } from "framer-motion";
// // import { fadeIn, textVariant } from "../utils/motion";

// // const ServicesSection = () => {
// //   const [open, setOpen] = useState(false);

// //   const services = [
// //     {
// //       icon: <BsPalette className="w-7 h-7" />,
// //       title: "Branding & Logo Design",
// //       description:
// //         "Strategic brand identity, logo systems, and visual guidelines that position your startup with authority and clarity.",
// //     },
// //     {
// //       icon: <BiLayer className="w-7 h-7" />,
// //       title: "Graphic & Creative Design",
// //       description:
// //         "High-impact social creatives, ad designs, pitch decks, and marketing visuals that elevate your brand presence.",
// //     },
// //     {
// //       icon: <HiOutlineCode className="w-7 h-7" />,
// //       title: "Web Development & UI/UX",
// //       description:
// //         "Modern, responsive websites and digital platforms built for performance, usability, and conversion.",
// //     },
// //     {
// //       icon: <FiTrendingUp className="w-7 h-7" />,
// //       title: "Digital Marketing & Growth",
// //       description:
// //         "Performance marketing, funnels, and growth strategies designed to scale traffic, leads, and revenue.",
// //     },
// //   ];

// //   return (
// //     <section id="services" className="bg-[#F1F2F4] py-28 md:py-36">
// //       <div className="container mx-auto px-4 sm:px-6 lg:px-8">

// //         <motion.div
// //           variants={fadeIn("up", 0.3)}
// //           initial="hidden"
// //           whileInView="show"
// //           viewport={{ once: true }}
// //           className="flex flex-col md:flex-row items-start justify-between gap-20"
// //         >

// //           {/* LEFT */}
// //           <motion.div variants={fadeIn("right", 0.4)} className="md:w-1/3">

// //             <motion.h2
// //               variants={textVariant(0.2)}
// //               className="text-4xl md:text-5xl font-bold leading-tight text-black mb-6"
// //             >
// //               Everything Your
// //               <br />
// //               <span className="text-black/60">Startup Needs.</span>
// //             </motion.h2>

// //             <motion.p
// //               variants={fadeIn("up", 0.5)}
// //               className="text-black/60 text-lg mb-10 leading-relaxed"
// //             >
// //               From brand foundation to scalable marketing systems —
// //               we provide complete creative and technical solutions
// //               to help your business grow with confidence.
// //             </motion.p>

// //             <motion.button
// //               onClick={() => setOpen(true)}
// //               variants={fadeIn("up", 0.7)}
// //               whileHover={{ scale: 1.05 }}
// //               whileTap={{ scale: 0.95 }}
// //               className="mt-12 bg-black text-white px-9 py-3 rounded-full font-medium shadow-md hover:shadow-xl transition"
// //             >
// //               Let’s Build Your Brand
// //             </motion.button>
// //           </motion.div>

// //           {/* RIGHT */}
// //           <motion.div
// //             variants={fadeIn("left", 0.4)}
// //             className="grid grid-cols-1 md:grid-cols-2 gap-10 md:w-2/3"
// //           >
// //             {services.map((service, index) => (
// //               <motion.div
// //                 key={index}
// //                 variants={fadeIn("up", 0.2 * (index + 1))}
// //                 whileHover={{ y: -8 }}
// //                 className="bg-white rounded-3xl p-10 border border-black/5 shadow-sm hover:shadow-[0_25px_60px_rgba(0,0,0,0.07)] transition-all duration-300"
// //               >
// //                 <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-black/5 text-black mb-7">
// //                   {service.icon}
// //                 </div>

// //                 <h3 className="text-xl font-semibold text-black mb-4">
// //                   {service.title}
// //                 </h3>

// //                 <p className="text-black/60 leading-relaxed">
// //                   {service.description}
// //                 </p>
// //               </motion.div>
// //             ))}
// //           </motion.div>

// //         </motion.div>
// //       </div>

// //       {/* MODAL */}
// //       {open && (
// //         <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
// //           <div className="bg-white rounded-3xl p-8 w-full max-w-lg relative">

// //             <button
// //               onClick={() => setOpen(false)}
// //               className="absolute top-4 right-5 text-black/50 text-xl"
// //             >
// //               ✕
// //             </button>

// //             <h3 className="text-2xl font-bold mb-6">Start Your Project</h3>

// //             <form className="space-y-4">
// //               <input type="text" placeholder="Your Name" className="w-full border p-3 rounded-lg" />
// //               <input type="email" placeholder="Your Email" className="w-full border p-3 rounded-lg" />

// //               <select className="w-full border p-3 rounded-lg">
// //                 <option>Project Type</option>
// //                 <option>Branding</option>
// //                 <option>Website</option>
// //                 <option>Marketing</option>
// //               </select>

// //               <textarea placeholder="Project Details" className="w-full border p-3 rounded-lg h-28"></textarea>

// //               <button className="w-full bg-black text-white py-3 rounded-lg">
// //                 Send Inquiry
// //               </button>
// //             </form>

// //             <p className="text-sm text-black/50 mt-4 text-center">
// //               Response within 24 hours
// //             </p>

// //           </div>
// //         </div>
// //       )}
// //     </section>
// //   );
// // };

// // export default ServicesSection;


// // import React, { useState } from "react";
// // import { BsPalette, BsArrowRight } from "react-icons/bs";
// // import { HiOutlineCode } from "react-icons/hi";
// // import { FiTrendingUp, FiX } from "react-icons/fi";
// // import { BiLayer } from "react-icons/bi";
// // import { motion, AnimatePresence } from "framer-motion";
// // import { fadeIn, textVariant } from "../utils/motion";

// // const ServicesSection = () => {
// //   const [isModalOpen, setIsModalOpen] = useState(false);

// //   const services = [
// //     {
// //       icon: <BsPalette className="w-7 h-7" />,
// //       title: "Branding & Logo Design",
// //       description:
// //         "Strategic brand identity, logo systems, and visual guidelines that position your startup with authority and clarity.",
// //     },
// //     {
// //       icon: <BiLayer className="w-7 h-7" />,
// //       title: "Graphic & Creative Design",
// //       description:
// //         "High-impact social creatives, ad designs, pitch decks, and marketing visuals that elevate your brand presence.",
// //     },
// //     {
// //       icon: <HiOutlineCode className="w-7 h-7" />,
// //       title: "Web Development & UI/UX",
// //       description:
// //         "Modern, responsive websites and digital platforms built for performance, usability, and conversion.",
// //     },
// //     {
// //       icon: <FiTrendingUp className="w-7 h-7" />,
// //       title: "Digital Marketing & Growth",
// //       description:
// //         "Performance marketing, funnels, and growth strategies designed to scale traffic, leads, and revenue.",
// //     },
// //   ];

// //   return (
// //     <section id="services" className="bg-[#F1F2F4] py-28 md:py-36 relative overflow-hidden">
// //       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
// //         <motion.div
// //           variants={fadeIn("up", 0.3)}
// //           initial="hidden"
// //           whileInView="show"
// //           viewport={{ once: true }}
// //           className="flex flex-col md:flex-row items-start justify-between gap-20"
// //         >
// //           {/* LEFT CONTENT */}
// //           <motion.div variants={fadeIn("right", 0.4)} className="md:w-1/3">
// //             <motion.h2
// //               variants={textVariant(0.2)}
// //               className="text-4xl md:text-5xl font-bold leading-tight text-black mb-6"
// //             >
// //               Everything Your
// //               <br />
// //               <span className="text-black/60">Startup Needs.</span>
// //             </motion.h2>

// //             <motion.p
// //               variants={fadeIn("up", 0.5)}
// //               className="text-black/60 text-lg mb-10 leading-relaxed"
// //             >
// //               From brand foundation to scalable marketing systems — we at{" "}
// //               <span className="text-black font-semibold">Devators</span> provide complete creative
// //               and technical solutions to help your business grow.
// //             </motion.p>

// //             <motion.div variants={fadeIn("up", 0.6)} className="space-y-4 text-black/70">
// //               {["Strong Brand Identity", "High-Converting Website", "Measurable Marketing Growth"].map(
// //                 (item, i) => (
// //                   <div key={i} className="flex items-center gap-3">
// //                     <div className="w-2.5 h-2.5 bg-black rounded-full"></div>
// //                     <span>{item}</span>
// //                   </div>
// //                 )
// //               )}
// //             </motion.div>

// //             <motion.button
// //               variants={fadeIn("up", 0.7)}
// //               whileHover={{ scale: 1.05 }}
// //               whileTap={{ scale: 0.95 }}
// //               onClick={() => setIsModalOpen(true)}
// //               className="mt-12 bg-black text-white px-9 py-4 rounded-full font-medium shadow-md hover:shadow-2xl transition-all flex items-center gap-3 group"
// //             >
// //               Let’s Build Your Brand
// //               <BsArrowRight className="group-hover:translate-x-1 transition-transform" />
// //             </motion.button>
// //           </motion.div>

// //           {/* RIGHT GRID */}
// //           <motion.div
// //             variants={fadeIn("left", 0.4)}
// //             className="grid grid-cols-1 md:grid-cols-2 gap-10 md:w-2/3"
// //           >
// //             {services.map((service, index) => (
// //               <motion.div
// //                 key={index}
// //                 variants={fadeIn("up", 0.2 * (index + 1))}
// //                 whileHover={{ y: -8 }}
// //                 className="bg-white rounded-3xl p-10 border border-black/5 shadow-sm hover:shadow-[0_25px_60px_rgba(0,0,0,0.07)] transition-all duration-300 group"
// //               >
// //                 <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-black/5 text-black mb-7 group-hover:bg-black group-hover:text-white transition-colors duration-500">
// //                   {service.icon}
// //                 </div>
// //                 <h3 className="text-xl font-semibold text-black mb-4">{service.title}</h3>
// //                 <p className="text-black/60 leading-relaxed">{service.description}</p>
// //               </motion.div>
// //             ))}
// //           </motion.div>
// //         </motion.div>
// //       </div>

// //       {/* POPUP MODAL - Best Option for "Let's Build Your Brand" */}
// //       <AnimatePresence>
// //         {isModalOpen && (
// //           <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
// //             <motion.div
// //               initial={{ opacity: 0 }}
// //               animate={{ opacity: 1 }}
// //               exit={{ opacity: 0 }}
// //               onClick={() => setIsModalOpen(false)}
// //               className="absolute inset-0 bg-black/60 backdrop-blur-sm"
// //             />
// //             <motion.div
// //               initial={{ scale: 0.9, opacity: 0, y: 20 }}
// //               animate={{ scale: 1, opacity: 1, y: 0 }}
// //               exit={{ scale: 0.9, opacity: 0, y: 20 }}
// //               className="bg-white w-full max-w-lg rounded-[2rem] p-8 md:p-12 relative z-10 shadow-2xl"
// //             >
// //               <button 
// //                 onClick={() => setIsModalOpen(false)}
// //                 className="absolute top-6 right-6 p-2 hover:bg-black/5 rounded-full transition-colors"
// //               >
// //                 <FiX size={24} />
// //               </button>
              
// //               <h3 className="text-3xl font-bold mb-2">Ready to Scale?</h3>
// //               <p className="text-black/60 mb-8">Tell us about your project and Devators will handle the rest.</p>
              
// //               <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
// //                 <input type="text" placeholder="Your Name" className="w-full px-6 py-4 bg-[#F1F2F4] rounded-xl outline-none focus:ring-2 ring-black/5 transition" />
// //                 <input type="email" placeholder="Email Address" className="w-full px-6 py-4 bg-[#F1F2F4] rounded-xl outline-none focus:ring-2 ring-black/5 transition" />
// //                 <textarea placeholder="Tell us a bit about your brand..." rows="4" className="w-full px-6 py-4 bg-[#F1F2F4] rounded-xl outline-none focus:ring-2 ring-black/5 transition"></textarea>
// //                 <button className="w-full bg-black text-white py-4 rounded-xl font-bold hover:bg-black/90 transition-all">
// //                   Send Proposal Request
// //                 </button>
// //               </form>
// //             </motion.div>
// //           </div>
// //         )}
// //       </AnimatePresence>
// //     </section>
// //   );
// // };

// // export default ServicesSection;


// import React, { useState } from "react";
// import { BsPalette, BsArrowRight } from "react-icons/bs";
// import { HiOutlineCode } from "react-icons/hi";
// import { FiTrendingUp, FiX } from "react-icons/fi";
// import { BiLayer } from "react-icons/bi";
// import { motion, AnimatePresence } from "framer-motion";
// import { fadeIn, textVariant } from "../utils/motion";

// const ServicesSection = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const services = [
//     {
//       icon: <BsPalette className="w-7 h-7" />,
//       title: "Branding & Logo Design",
//       description:
//         "Strategic brand identity, logo systems, and visual guidelines that position your startup with authority and clarity.",
//     },
//     {
//       icon: <BiLayer className="w-7 h-7" />,
//       title: "Graphic & Creative Design",
//       description:
//         "High-impact social creatives, ad designs, pitch decks, and marketing visuals that elevate your brand presence.",
//     },
//     {
//       icon: <HiOutlineCode className="w-7 h-7" />,
//       title: "Web Development & UI/UX",
//       description:
//         "Modern, responsive websites and digital platforms built for performance, usability, and conversion.",
//     },
//     {
//       icon: <FiTrendingUp className="w-7 h-7" />,
//       title: "Digital Marketing & Growth",
//       description:
//         "Performance marketing, funnels, and growth strategies designed to scale traffic, leads, and revenue.",
//     },
//   ];

//   return (
//     <section id="services" className="bg-[#F1F2F4] py-28 md:py-36 relative overflow-hidden">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           variants={fadeIn("up", 0.3)}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true }}
//           className="flex flex-col md:flex-row items-start justify-between gap-20"
//         >
//           {/* LEFT CONTENT */}
//           <motion.div variants={fadeIn("right", 0.4)} className="md:w-1/3">
//             <motion.h2
//               variants={textVariant(0.2)}
//               className="text-4xl md:text-5xl font-bold leading-tight text-black mb-6"
//             >
//               Everything Your
//               <br />
//               <span className="text-black/60">Startup Needs.</span>
//             </motion.h2>

//             <motion.p
//               variants={fadeIn("up", 0.5)}
//               className="text-black/60 text-lg mb-10 leading-relaxed"
//             >
//               From brand foundation to scalable marketing systems — we at{" "}
//               <span className="text-black font-semibold">Devators</span> provide complete creative
//               and technical solutions to help your business grow.
//             </motion.p>

//             <motion.div variants={fadeIn("up", 0.6)} className="space-y-4 text-black/70">
//               {["Strong Brand Identity", "High-Converting Website", "Measurable Marketing Growth"].map(
//                 (item, i) => (
//                   <div key={i} className="flex items-center gap-3">
//                     <div className="w-2.5 h-2.5 bg-black rounded-full"></div>
//                     <span>{item}</span>
//                   </div>
//                 )
//               )}
//             </motion.div>

//             <motion.button
//               variants={fadeIn("up", 0.7)}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={() => setIsModalOpen(true)}
//               className="mt-12 bg-black text-white px-9 py-4 rounded-full font-medium shadow-md hover:shadow-2xl transition-all flex items-center gap-3 group"
//             >
//               Let’s Build Your Brand
//               <BsArrowRight className="group-hover:translate-x-1 transition-transform" />
//             </motion.button>
//           </motion.div>

//           {/* RIGHT GRID */}
//           <motion.div
//             variants={fadeIn("left", 0.4)}
//             className="grid grid-cols-1 md:grid-cols-2 gap-10 md:w-2/3"
//           >
//             {services.map((service, index) => (
//               <motion.div
//                 key={index}
//                 variants={fadeIn("up", 0.2 * (index + 1))}
//                 whileHover={{ y: -8 }}
//                 className="bg-white rounded-3xl p-10 border border-black/5 shadow-sm hover:shadow-[0_25px_60px_rgba(0,0,0,0.07)] transition-all duration-300 group"
//               >
//                 <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-black/5 text-black mb-7 group-hover:bg-black group-hover:text-white transition-colors duration-500">
//                   {service.icon}
//                 </div>
//                 <h3 className="text-xl font-semibold text-black mb-4">{service.title}</h3>
//                 <p className="text-black/60 leading-relaxed">{service.description}</p>
//               </motion.div>
//             ))}
//           </motion.div>
//         </motion.div>
//       </div>

//       {/* MODAL */}
//       <AnimatePresence>
//         {isModalOpen && (
//           <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               onClick={() => setIsModalOpen(false)}
//               className="absolute inset-0 bg-black/60 backdrop-blur-sm"
//             />

//             <motion.div
//               initial={{ scale: 0.9, opacity: 0, y: 20 }}
//               animate={{ scale: 1, opacity: 1, y: 0 }}
//               exit={{ scale: 0.9, opacity: 0, y: 20 }}
//               className="bg-white w-full max-w-lg rounded-[2rem] p-8 md:p-12 relative z-10 shadow-2xl"
//             >
//               <button 
//                 onClick={() => setIsModalOpen(false)}
//                 className="absolute top-6 right-6 p-2 hover:bg-black/5 rounded-full transition-colors"
//               >
//                 <FiX size={24} />
//               </button>
              
//               <h3 className="text-3xl font-bold mb-2">Ready to Scale?</h3>
//               <p className="text-black/60 mb-8">
//                 Tell us about your project and Devators will handle the rest.
//               </p>
              
//               <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>

//                 {/* NEW FIELD (PROJECT TYPE) */}
//                 <select className="w-full px-6 py-4 bg-[#F1F2F4] rounded-xl outline-none focus:ring-2 ring-black/5 transition">
//                   <option value="">Select Project Type</option>
//                   <option>Branding</option>
//                   <option>Website Development</option>
//                   <option>UI/UX Design</option>
//                   <option>Digital Marketing</option>
//                 </select>

//                 <input type="text" placeholder="Your Name" className="w-full px-6 py-4 bg-[#F1F2F4] rounded-xl outline-none focus:ring-2 ring-black/5 transition" />
                
//                 <input type="email" placeholder="Email Address" className="w-full px-6 py-4 bg-[#F1F2F4] rounded-xl outline-none focus:ring-2 ring-black/5 transition" />
                
//                 <textarea placeholder="Tell us a bit about your brand..." rows="4" className="w-full px-6 py-4 bg-[#F1F2F4] rounded-xl outline-none focus:ring-2 ring-black/5 transition"></textarea>
                
//                 <button className="w-full bg-black text-white py-4 rounded-xl font-bold hover:bg-black/90 transition-all">
//                   Send Proposal Request
//                 </button>
//               </form>
//             </motion.div>
//           </div>
//         )}
//       </AnimatePresence>
//     </section>
//   );
// };

// export default ServicesSection;

// import React, { useState } from "react";
// import { BsPalette, BsArrowRight, BsChevronDown } from "react-icons/bs";
// import { HiOutlineCode } from "react-icons/hi";
// import { FiTrendingUp, FiX } from "react-icons/fi";
// import { BiLayer } from "react-icons/bi";
// import { motion, AnimatePresence } from "framer-motion";
// import { fadeIn, textVariant } from "../utils/motion";

// const ServicesSection = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedType, setSelectedType] = useState("");

//   const services = [
//     {
//       icon: <BsPalette className="w-7 h-7" />,
//       title: "Branding & Logo Design",
//       description:
//         "Strategic brand identity, logo systems, and visual guidelines that position your startup with authority and clarity.",
//     },
//     {
//       icon: <BiLayer className="w-7 h-7" />,
//       title: "Graphic & Creative Design",
//       description:
//         "High-impact social creatives, ad designs, pitch decks, and marketing visuals that elevate your brand presence.",
//     },
//     {
//       icon: <HiOutlineCode className="w-7 h-7" />,
//       title: "Web Development & UI/UX",
//       description:
//         "Modern, responsive websites and digital platforms built for performance, usability, and conversion.",
//     },
//     {
//       icon: <FiTrendingUp className="w-7 h-7" />,
//       title: "Digital Marketing & Growth",
//       description:
//         "Performance marketing, funnels, and growth strategies designed to scale traffic, leads, and revenue.",
//     },
//   ];

//   return (
//     <section id="services" className="bg-[#F1F2F4] py-28 md:py-36 relative overflow-hidden">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           variants={fadeIn("up", 0.3)}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true }}
//           className="flex flex-col md:flex-row items-start justify-between gap-20"
//         >
//           {/* LEFT CONTENT */}
//           <motion.div variants={fadeIn("right", 0.4)} className="md:w-1/3">
//             <motion.h2
//               variants={textVariant(0.2)}
//               className="text-4xl md:text-5xl font-bold leading-tight text-black mb-6"
//             >
//               Everything Your
//               <br />
//               <span className="text-black/60">Startup Needs.</span>
//             </motion.h2>

//             <motion.p
//               variants={fadeIn("up", 0.5)}
//               className="text-black/60 text-lg mb-10 leading-relaxed"
//             >
//               From brand foundation to scalable marketing systems — we at{" "}
//               <span className="text-black font-semibold">Devators</span> provide complete creative
//               and technical solutions to help your business grow.
//             </motion.p>

//             <motion.div variants={fadeIn("up", 0.6)} className="space-y-4 text-black/70">
//               {["Strong Brand Identity", "High-Converting Website", "Measurable Marketing Growth"].map(
//                 (item, i) => (
//                   <div key={i} className="flex items-center gap-3">
//                     <div className="w-2.5 h-2.5 bg-black rounded-full"></div>
//                     <span>{item}</span>
//                   </div>
//                 )
//               )}
//             </motion.div>

//             <motion.button
//               variants={fadeIn("up", 0.7)}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={() => setIsModalOpen(true)}
//               className="mt-12 bg-black text-white px-9 py-4 rounded-full font-medium shadow-md hover:shadow-2xl transition-all flex items-center gap-3 group"
//             >
//               Let’s Build Your Brand
//               <BsArrowRight className="group-hover:translate-x-1 transition-transform" />
//             </motion.button>
//           </motion.div>

//           {/* RIGHT GRID */}
//           <motion.div
//             variants={fadeIn("left", 0.4)}
//             className="grid grid-cols-1 md:grid-cols-2 gap-10 md:w-2/3"
//           >
//             {services.map((service, index) => (
//               <motion.div
//                 key={index}
//                 variants={fadeIn("up", 0.2 * (index + 1))}
//                 whileHover={{ y: -8 }}
//                 className="bg-white rounded-3xl p-10 border border-black/5 shadow-sm hover:shadow-[0_25px_60px_rgba(0,0,0,0.07)] transition-all duration-300 group"
//               >
//                 <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-black/5 text-black mb-7 group-hover:bg-black group-hover:text-white transition-colors duration-500">
//                   {service.icon}
//                 </div>
//                 <h3 className="text-xl font-semibold text-black mb-4">{service.title}</h3>
//                 <p className="text-black/60 leading-relaxed">{service.description}</p>
//               </motion.div>
//             ))}
//           </motion.div>
//         </motion.div>
//       </div>

//       {/* POPUP MODAL */}
//       <AnimatePresence>
//         {isModalOpen && (
//           <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               onClick={() => setIsModalOpen(false)}
//               className="absolute inset-0 bg-black/60 backdrop-blur-sm"
//             />
//             <motion.div
//               initial={{ scale: 0.9, opacity: 0, y: 20 }}
//               animate={{ scale: 1, opacity: 1, y: 0 }}
//               exit={{ scale: 0.9, opacity: 0, y: 20 }}
//               className="bg-white w-full max-w-xl rounded-[2.5rem] p-8 md:p-12 relative z-10 shadow-2xl overflow-hidden"
//             >
//               <button 
//                 onClick={() => setIsModalOpen(false)}
//                 className="absolute top-6 right-6 p-2 hover:bg-black/5 rounded-full transition-colors"
//               >
//                 <FiX size={24} />
//               </button>
              
//               <h3 className="text-3xl font-bold mb-2">Ready to Scale?</h3>
//               <p className="text-black/60 mb-8">Tell us about your project and Devators will handle the rest.</p>
              
//               <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     <input type="text" placeholder="Your Name" className="w-full px-6 py-4 bg-[#F1F2F4] rounded-2xl outline-none focus:ring-2 ring-black/5 transition" />
//                     <input type="email" placeholder="Email Address" className="w-full px-6 py-4 bg-[#F1F2F4] rounded-2xl outline-none focus:ring-2 ring-black/5 transition" />
//                 </div>

//                 {/* PROJECT TYPE DROPDOWN */}
//                 <div className="relative group">
//                   <select 
//                     value={selectedType}
//                     onChange={(e) => setSelectedType(e.target.value)}
//                     className="w-full px-6 py-4 bg-[#F1F2F4] rounded-2xl outline-none appearance-none focus:ring-2 ring-black/5 transition text-black/70 font-medium cursor-pointer"
//                   >
//                     <option value="" disabled>Select Project Type</option>
//                     <option value="web">Web Development</option>
//                     <option value="branding">Branding & Logo</option>
//                     <option value="design">UI/UX Design</option>
//                     <option value="marketing">Digital Marketing</option>
//                   </select>
//                   <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-black/40">
//                     <BsChevronDown />
//                   </div>
//                 </div>
                
//                 <textarea placeholder="Tell us a bit about your brand goals..." rows="4" className="w-full px-6 py-4 bg-[#F1F2F4] rounded-2xl outline-none focus:ring-2 ring-black/5 transition"></textarea>
                
//                 <button className="w-full bg-black text-white py-5 rounded-2xl font-bold hover:bg-black/90 transition-all shadow-lg hover:shadow-black/20 flex items-center justify-center gap-2 mt-4">
//                   Send Proposal Request <BsArrowRight />
//                 </button>
//               </form>
//             </motion.div>
//           </div>
//         )}
//       </AnimatePresence>
//     </section>
//   );
// };

// export default ServicesSection;


// import React, { useState } from "react";
// import { BsPalette, BsArrowRight, BsChevronDown } from "react-icons/bs";
// import { HiOutlineCode } from "react-icons/hi";
// import { FiTrendingUp, FiX } from "react-icons/fi";
// import { BiLayer } from "react-icons/bi";
// import { motion, AnimatePresence } from "framer-motion";
// import { fadeIn, textVariant } from "../utils/motion";

// const ServicesSection = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedType, setSelectedType] = useState("");

//   const services = [
//     {
//       icon: <BsPalette className="w-7 h-7" />,
//       title: "Branding & Logo Design",
//       description:
//         "Strategic brand identity, logo systems, and visual guidelines that position your startup with authority and clarity.",
//     },
//     {
//       icon: <BiLayer className="w-7 h-7" />,
//       title: "Graphic & Creative Design",
//       description:
//         "High-impact social creatives, ad designs, pitch decks, and marketing visuals that elevate your brand presence.",
//     },
//     {
//       icon: <HiOutlineCode className="w-7 h-7" />,
//       title: "Web Development & UI/UX",
//       description:
//         "Modern, responsive websites and digital platforms built for performance, usability, and conversion.",
//     },
//     {
//       icon: <FiTrendingUp className="w-7 h-7" />,
//       title: "Digital Marketing & Growth",
//       description:
//         "Performance marketing, funnels, and growth strategies designed to scale traffic, leads, and revenue.",
//     },
//   ];

//   return (
//     <section id="services" className="bg-[#F1F2F4] py-28 md:py-36 relative overflow-hidden">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           variants={fadeIn("up", 0.3)}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true }}
//           className="flex flex-col md:flex-row items-start justify-between gap-20"
//         >
//           {/* LEFT CONTENT */}
//           <motion.div variants={fadeIn("right", 0.4)} className="md:w-1/3">
//             <motion.h2
//               variants={textVariant(0.2)}
//               className="text-4xl md:text-5xl font-bold leading-tight text-black mb-6"
//             >
//               Everything Your
//               <br />
//               <span className="text-black/60">Startup Needs.</span>
//             </motion.h2>

//             <motion.p
//               variants={fadeIn("up", 0.5)}
//               className="text-black/60 text-lg mb-10 leading-relaxed"
//             >
//               From brand foundation to scalable marketing systems — we at{" "}
//               <span className="text-black font-semibold">Devators</span> provide complete creative
//               and technical solutions to help your business grow.
//             </motion.p>

//             <motion.div variants={fadeIn("up", 0.6)} className="space-y-4 text-black/70">
//               {["Strong Brand Identity", "High-Converting Website", "Measurable Marketing Growth"].map(
//                 (item, i) => (
//                   <div key={i} className="flex items-center gap-3">
//                     <div className="w-2.5 h-2.5 bg-black rounded-full"></div>
//                     <span>{item}</span>
//                   </div>
//                 )
//               )}
//             </motion.div>

//             <motion.button
//               variants={fadeIn("up", 0.7)}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={() => setIsModalOpen(true)}
//               className="mt-12 bg-black text-white px-9 py-4 rounded-full font-medium shadow-md hover:shadow-2xl transition-all flex items-center gap-3 group"
//             >
//               Let’s Build Your Brand
//               <BsArrowRight className="group-hover:translate-x-1 transition-transform" />
//             </motion.button>
//           </motion.div>

//           {/* RIGHT GRID */}
//           <motion.div
//             variants={fadeIn("left", 0.4)}
//             className="grid grid-cols-1 md:grid-cols-2 gap-10 md:w-2/3"
//           >
//             {services.map((service, index) => (
//               <motion.div
//                 key={index}
//                 variants={fadeIn("up", 0.2 * (index + 1))}
//                 whileHover={{ y: -8 }}
//                 className="bg-white rounded-3xl p-10 border border-black/5 shadow-sm hover:shadow-[0_25px_60px_rgba(0,0,0,0.07)] transition-all duration-300 group"
//               >
//                 <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-black/5 text-black mb-7 group-hover:bg-black group-hover:text-white transition-colors duration-500">
//                   {service.icon}
//                 </div>
//                 <h3 className="text-xl font-semibold text-black mb-4">{service.title}</h3>
//                 <p className="text-black/60 leading-relaxed">{service.description}</p>
//               </motion.div>
//             ))}
//           </motion.div>
//         </motion.div>
//       </div>

//       {/* MODAL */}
//       <AnimatePresence>
//         {isModalOpen && (
//           <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               onClick={() => setIsModalOpen(false)}
//               className="absolute inset-0 bg-black/60 backdrop-blur-sm"
//             />

//             <motion.div
//               initial={{ scale: 0.9, opacity: 0, y: 20 }}
//               animate={{ scale: 1, opacity: 1, y: 0 }}
//               exit={{ scale: 0.9, opacity: 0, y: 20 }}
//               className="bg-white w-full max-w-xl rounded-[2.5rem] p-8 md:p-12 relative z-10 shadow-2xl overflow-hidden"
//             >
//               <button 
//                 onClick={() => setIsModalOpen(false)}
//                 className="absolute top-6 right-6 p-2 hover:bg-black/5 rounded-full transition-colors"
//               >
//                 <FiX size={24} />
//               </button>
              
//               <h3 className="text-3xl font-bold mb-2">Ready to Scale?</h3>
//               <p className="text-black/60 mb-8">Tell us about your project and Devators will handle the rest.</p>
              
//               <form
//                 action="https://api.web3forms.com/submit"
//                 method="POST"
//                 className="space-y-4"
//               >
//                 {/* WEB3FORMS KEY */}
//                 <input type="hidden" name="access_key" value="4490b5fe-c001-4c8b-8744-227909e26928" />

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <input name="name" type="text" placeholder="Your Name" required className="w-full px-6 py-4 bg-[#F1F2F4] rounded-2xl outline-none" />
//                   <input name="email" type="email" placeholder="Email Address" required className="w-full px-6 py-4 bg-[#F1F2F4] rounded-2xl outline-none" />
//                 </div>

//                 {/* PROJECT TYPE */}
//                 <div className="relative">
//                   <select
//                     name="project_type"
//                     value={selectedType}
//                     onChange={(e) => setSelectedType(e.target.value)}
//                     required
//                     className="w-full px-6 py-4 bg-[#F1F2F4] rounded-2xl outline-none appearance-none"
//                   >
//                     <option value="">Select Project Type</option>
//                     <option>Web Development</option>
//                     <option>Branding & Logo</option>
//                     <option>UI/UX Design</option>
//                     <option>Digital Marketing</option>
//                   </select>
//                   <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none">
//                     <BsChevronDown />
//                   </div>
//                 </div>

//                 <textarea
//                   name="message"
//                   placeholder="Tell us a bit about your brand goals..."
//                   rows="4"
//                   className="w-full px-6 py-4 bg-[#F1F2F4] rounded-2xl outline-none"
//                 ></textarea>

//                 <button className="w-full bg-black text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-2">
//                   Send Proposal Request <BsArrowRight />
//                 </button>
//               </form>
//             </motion.div>
//           </div>
//         )}
//       </AnimatePresence>
//     </section>
//   );
// };

// export default ServicesSection;


import React, { useState } from "react";
import { BsPalette, BsArrowRight, BsChevronDown, BsCheckCircle } from "react-icons/bs";
import { HiOutlineCode } from "react-icons/hi";
import { FiTrendingUp, FiX } from "react-icons/fi";
import { BiLayer } from "react-icons/bi";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const ServicesSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedType, setSelectedType] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    {
      icon: <BsPalette className="w-7 h-7" />,
      title: "Branding & Logo Design",
      description:
        "Strategic brand identity, logo systems, and visual guidelines that position your startup with authority and clarity.",
    },
    {
      icon: <BiLayer className="w-7 h-7" />,
      title: "Graphic & Creative Design",
      description:
        "High-impact social creatives, ad designs, pitch decks, and marketing visuals that elevate your brand presence.",
    },
    {
      icon: <HiOutlineCode className="w-7 h-7" />,
      title: "Web Development & UI/UX",
      description:
        "Modern, responsive websites and digital platforms built for performance, usability, and conversion.",
    },
    {
      icon: <FiTrendingUp className="w-7 h-7" />,
      title: "Digital Marketing & Growth",
      description:
        "Performance marketing, funnels, and growth strategies designed to scale traffic, leads, and revenue.",
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setIsSubmitted(true);
        // Reset form and close modal after 5 seconds if you want
        setTimeout(() => {
          setIsSubmitted(false);
          setIsModalOpen(false);
        }, 5000);
      }
    } catch (error) {
      console.error("Submission failed", error);
    }
  };

  return (
    <section id="services" className="bg-[#F1F2F4] py-28 md:py-36 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-start justify-between gap-20"
        >
          {/* LEFT CONTENT */}
          <motion.div variants={fadeIn("right", 0.4)} className="md:w-1/3">
            <motion.h2
              variants={textVariant(0.2)}
              className="text-4xl md:text-5xl font-bold leading-tight text-black mb-6"
            >
              Everything Your
              <br />
              <span className="text-black/60">Startup Needs.</span>
            </motion.h2>

            <motion.p
              variants={fadeIn("up", 0.5)}
              className="text-black/60 text-lg mb-10 leading-relaxed"
            >
              From brand foundation to scalable marketing systems — we at{" "}
              <span className="text-black font-semibold">Devators</span> provide complete creative
              and technical solutions to help your business grow.
            </motion.p>

            <motion.div variants={fadeIn("up", 0.6)} className="space-y-4 text-black/70">
              {["Strong Brand Identity", "High-Converting Website", "Measurable Marketing Growth"].map(
                (item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-2.5 h-2.5 bg-black rounded-full"></div>
                    <span>{item}</span>
                  </div>
                )
              )}
            </motion.div>

            <motion.button
              variants={fadeIn("up", 0.7)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setIsSubmitted(false);
                setIsModalOpen(true);
              }}
              className="mt-12 bg-black text-white px-9 py-4 rounded-full font-medium shadow-md hover:shadow-2xl transition-all flex items-center gap-3 group"
            >
              Let’s Build Your Brand
              <BsArrowRight className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>

          {/* RIGHT GRID */}
          <motion.div
            variants={fadeIn("left", 0.4)}
            className="grid grid-cols-1 md:grid-cols-2 gap-10 md:w-2/3"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeIn("up", 0.2 * (index + 1))}
                whileHover={{ y: -8 }}
                className="bg-white rounded-3xl p-10 border border-black/5 shadow-sm hover:shadow-[0_25px_60px_rgba(0,0,0,0.07)] transition-all duration-300 group"
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-black/5 text-black mb-7 group-hover:bg-black group-hover:text-white transition-colors duration-500">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-black mb-4">{service.title}</h3>
                <p className="text-black/60 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-white w-full max-w-xl rounded-[2.5rem] p-8 md:p-12 relative z-10 shadow-2xl overflow-hidden"
            >
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-6 p-2 hover:bg-black/5 rounded-full transition-colors"
              >
                <FiX size={24} />
              </button>
              
              {!isSubmitted ? (
                <>
                  <h3 className="text-3xl font-bold mb-2">Ready to Scale?</h3>
                  <p className="text-black/60 mb-8">Tell us about your project and Devators will handle the rest.</p>
                  
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input type="hidden" name="access_key" value="4490b5fe-c001-4c8b-8744-227909e26928" />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input name="name" type="text" placeholder="Your Name" required className="w-full px-6 py-4 bg-[#F1F2F4] rounded-2xl outline-none focus:ring-2 ring-black/10 transition" />
                      <input name="email" type="email" placeholder="Email Address" required className="w-full px-6 py-4 bg-[#F1F2F4] rounded-2xl outline-none focus:ring-2 ring-black/10 transition" />
                    </div>

                    <div className="relative">
                      <select
                        name="project_type"
                        value={selectedType}
                        onChange={(e) => setSelectedType(e.target.value)}
                        required
                        className="w-full px-6 py-4 bg-[#F1F2F4] rounded-2xl outline-none appearance-none cursor-pointer focus:ring-2 ring-black/10 transition"
                      >
                        <option value="">Select Project Type</option>
                        <option>Web Development</option>
                        <option>Branding & Logo</option>
                        <option>UI/UX Design</option>
                        <option>Digital Marketing</option>
                      </select>
                      <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-black/40">
                        <BsChevronDown />
                      </div>
                    </div>

                    <textarea
                      name="message"
                      placeholder="Tell us a bit about your brand goals..."
                      rows="4"
                      className="w-full px-6 py-4 bg-[#F1F2F4] rounded-2xl outline-none focus:ring-2 ring-black/10 transition"
                    ></textarea>

                    <button type="submit" className="w-full bg-black text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-black/90 transition-all shadow-xl shadow-black/10">
                      Send Proposal Request <BsArrowRight />
                    </button>
                  </form>
                </>
              ) : (
                /* GORGEOUS SUCCESS MESSAGE */
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-10"
                >
                  <div className="w-20 h-20 bg-black text-white rounded-full flex items-center justify-center mb-6 shadow-2xl">
                    <BsCheckCircle size={40} />
                  </div>
                  <h3 className="text-3xl font-bold mb-4">Request Sent!</h3>
                  <p className="text-black/60 text-lg leading-relaxed">
                    Alhamdulillah! Your message has been received. <br />
                    Our <span className="font-bold text-black">Devators</span> team will get back to you <br />
                    <span className="text-black font-semibold">within 24 hours.</span>
                  </p>
                  <button 
                    onClick={() => setIsModalOpen(false)}
                    className="mt-10 text-black/40 font-medium hover:text-black transition-colors"
                  >
                    Click to close
                  </button>
                </motion.div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ServicesSection;