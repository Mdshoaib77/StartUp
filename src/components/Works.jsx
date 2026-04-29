// // // // // import React from "react";
// // // // // import protfolio from "../assets/Web Portfolio-01.jpg.jpeg"
// // // // // import protfolio1 from "../assets/Web Portfolio-02.jpg.jpeg"
// // // // // import protfolio2 from "../assets/Web Portfolio-03.jpg.jpeg"

// // // // // const Works = () => {
// // // // //   return (
// // // // //     <section id="works" className="py-16 bg-black text-white">
// // // // //       <div className="max-w-6xl mx-auto px-4">
        
// // // // //         {/* 🔥 Title */}
// // // // //         <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
// // // // //           Our Works
// // // // //         </h2>

// // // // //         {/* 🔥 Work Cards */}
// // // // //         <div className="grid md:grid-cols-3 gap-6">
          
// // // // //           {/* Card 1 */}
// // // // //           <div className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:scale-105 transition">
// // // // //             <h3 className="text-xl font-semibold mb-2">E-commerce Website</h3>
// // // // //             <p className="text-gray-400">
// // // // //               Full-stack ecommerce solution using React, Node.js & MongoDB.
// // // // //             </p>
// // // // //           </div>

// // // // //           {/* Card 2 */}
// // // // //           <div className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:scale-105 transition">
// // // // //             <h3 className="text-xl font-semibold mb-2">Real Estate Platform</h3>
// // // // //             <p className="text-gray-400">
// // // // //               Property listing website with modern UI and fast performance.
// // // // //             </p>
// // // // //           </div>

// // // // //           {/* Card 3 */}
// // // // //           <div className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:scale-105 transition">
// // // // //             <h3 className="text-xl font-semibold mb-2">Restaurant Website</h3>
// // // // //             <p className="text-gray-400">
// // // // //               Beautiful and responsive restaurant website with booking system.
// // // // //             </p>
// // // // //           </div>

// // // // //         </div>
// // // // //       </div>
// // // // //     </section>
// // // // //   );
// // // // // };

// // // // // export default Works;

// // // // // import React from 'react'
// // // // // import protfolio from "../assets/Web Portfolio-01.jpg.jpeg"
// // // // // import protfolio1 from "../assets/Web Portfolio-02.jpg.jpeg"
// // // // // import protfolio2 from "../assets/Web Portfolio-03.jpg.jpeg"

// // // // // const works = () => {
// // // // //   return (
// // // // //     <div>
      
// // // // //     </div>
// // // // //   )
// // // // // }

// // // // // export default works


// // // // import React from 'react';
// // // // // আপনার ইম্পোর্ট করা ইমেজগুলো
// // // // import protfolio from "../assets/Web Portfolio-01.jpg.jpeg";
// // // // import protfolio1 from "../assets/Web Portfolio-02.jpg.jpeg";
// // // // import protfolio2 from "../assets/Web Portfolio-03.jpg.jpeg";

// // // // const Works = () => {
// // // //   const projects = [
// // // //     {
// // // //       id: 1,
// // // //       title: "SOROS",
// // // //       description: "Designing trust for decentralized commerce.",
// // // //       tags: ["Brand Strategy", "Naming", "Brand Identity", "UI/UX"],
// // // //       image: protfolio,
// // // //     },
// // // //     {
// // // //       id: 2,
// // // //       title: "Robotic Implant Center",
// // // //       description: "Positioning robotic dentistry as a category leader.",
// // // //       tags: ["Web Design", "Engineering", "Motion"],
// // // //       image: protfolio1,
// // // //     },
// // // //     {
// // // //       id: 3,
// // // //       title: "Utica Public Library",
// // // //       description: "Rebranding clarity for a historic institution.",
// // // //       tags: ["Research", "Brand Identity", "Logo"],
// // // //       image: protfolio2,
// // // //     },
// // // //   ];

// // // //   return (
// // // //     <section className="py-16 px-6 md:px-12 bg-white">
// // // //       <div className="max-w-7xl mx-auto">
// // // //         {/* Section Header */}
// // // //         <div className="mb-12">
// // // //           <p className="text-sm uppercase tracking-widest text-gray-500 mb-2">Case Studies</p>
// // // //           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight max-w-2xl">
// // // //             Work created at moments where change becomes <span className="italic font-serif">inevitable by design.</span>
// // // //           </h2>
// // // //         </div>

// // // //         {/* Works Grid */}
// // // //         <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
// // // //           {projects.map((project) => (
// // // //             <div key={project.id} className="group cursor-pointer">
// // // //               {/* Image Container with Hover Effect */}
// // // //               <div className="relative overflow-hidden bg-gray-100 aspect-video mb-6">
// // // //                 <img
// // // //                   src={project.image}
// // // //                   alt={project.title}
// // // //                   className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
// // // //                 />
// // // //                 {/* View Case Study Button on Hover */}
// // // //                 <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
// // // //                   <span className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
// // // //                     View Case Study
// // // //                   </span>
// // // //                 </div>
// // // //               </div>

// // // //               {/* Project Info */}
// // // //               <div className="space-y-2">
// // // //                 <h3 className="text-2xl font-bold uppercase tracking-tight">{project.title}</h3>
// // // //                 <p className="text-gray-600 text-lg">{project.description}</p>
                
// // // //                 {/* Tags */}
// // // //                 <div className="flex flex-wrap gap-2 pt-2">
// // // //                   {project.tags.map((tag, index) => (
// // // //                     <span 
// // // //                       key={index} 
// // // //                       className="text-xs font-semibold border border-gray-300 px-3 py-1 rounded-full text-gray-500 uppercase"
// // // //                     >
// // // //                       {tag}
// // // //                     </span>
// // // //                   ))}
// // // //                 </div>
// // // //               </div>
// // // //             </div>
// // // //           ))}
// // // //         </div>
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // };

// // // // export default Works;


// // // // import React, { useState } from 'react';
// // // // import { motion, AnimatePresence } from 'framer-motion';
// // // // import protfolio from "../assets/Web Portfolio-01.jpg.jpeg";
// // // // import protfolio1 from "../assets/Web Portfolio-02.jpg.jpeg";
// // // // import protfolio2 from "../assets/Web Portfolio-03.jpg.jpeg";

// // // // const Works = () => {
// // // //   const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
// // // //   const [hoveringId, setHoveringId] = useState(null);

// // // //   const projects = [
// // // //     {
// // // //       id: 1,
// // // //       title: "SOROS",
// // // //       description: "Designing trust for decentralized commerce.",
// // // //       tags: ["Brand Strategy", "Naming", "Brand Identity", "UI/UX"],
// // // //       image: protfolio,
// // // //       gridSpan: "col-span-1"
// // // //     },
// // // //     {
// // // //       id: 2,
// // // //       title: "Robotic Implant Center",
// // // //       description: "Positioning robotic dentistry as a category leader.",
// // // //       tags: ["Web Design", "Engineering", "Motion"],
// // // //       image: protfolio1,
// // // //       gridSpan: "col-span-1"
// // // //     },
// // // //     {
// // // //       id: 3,
// // // //       title: "Utica Public Library",
// // // //       description: "Rebranding clarity for a historic institution.",
// // // //       tags: ["Research", "Brand Identity", "Logo", "Campaigns"],
// // // //       image: protfolio2,
// // // //       gridSpan: "md:col-span-2" // এটি ৩ নম্বর ইমেজকে ফুল উইডথ করবে
// // // //     },
// // // //   ];

// // // //   const handleMouseMove = (e) => {
// // // //     setMousePos({ x: e.clientX, y: e.clientY });
// // // //   };

// // // //   return (
// // // //     <section className="py-20 px-6 md:px-12 bg-white cursor-auto">
// // // //       <div className="max-w-7xl mx-auto">
        
// // // //         {/* Section Header */}
// // // //         <div className="mb-16">
// // // //           <motion.p 
// // // //             initial={{ opacity: 0, y: 20 }}
// // // //             whileInView={{ opacity: 1, y: 0 }}
// // // //             viewport={{ once: true }}
// // // //             className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-4"
// // // //           >
// // // //             Case Studies
// // // //           </motion.p>
// // // //           <motion.h2 
// // // //             initial={{ opacity: 0, y: 30 }}
// // // //             whileInView={{ opacity: 1, y: 0 }}
// // // //             viewport={{ once: true }}
// // // //             transition={{ delay: 0.2 }}
// // // //             className="text-4xl md:text-6xl font-medium text-gray-900 leading-tight max-w-4xl"
// // // //           >
// // // //             Work created at moments where change becomes <span className="italic font-serif text-gray-400">inevitable by design.</span>
// // // //           </motion.h2>
// // // //         </div>

// // // //         {/* Floating View Button (Video-এর মতো কার্সারের সাথে ঘুরবে) */}
// // // //         <AnimatePresence>
// // // //           {hoveringId && (
// // // //             <motion.div
// // // //               className="fixed top-0 left-0 w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold pointer-events-none z-50 shadow-xl"
// // // //               initial={{ scale: 0, opacity: 0 }}
// // // //               animate={{ 
// // // //                 scale: 1, 
// // // //                 opacity: 1,
// // // //                 x: mousePos.x - 48, 
// // // //                 y: mousePos.y - 48 
// // // //               }}
// // // //               exit={{ scale: 0, opacity: 0 }}
// // // //               transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.5 }}
// // // //             >
// // // //               VIEW CASE
// // // //             </motion.div>
// // // //           )}
// // // //         </AnimatePresence>

// // // //         {/* Works Grid */}
// // // //         <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-20">
// // // //           {projects.map((project) => (
// // // //             <motion.div 
// // // //               key={project.id} 
// // // //               className={`${project.gridSpan} group relative`}
// // // //               initial={{ opacity: 0, y: 40 }}
// // // //               whileInView={{ opacity: 1, y: 0 }}
// // // //               viewport={{ once: true }}
// // // //               onMouseMove={handleMouseMove}
// // // //               onMouseEnter={() => setHoveringId(project.id)}
// // // //               onMouseLeave={() => setHoveringId(null)}
// // // //             >
// // // //               {/* Image Container */}
// // // //               <div className="relative overflow-hidden bg-gray-100 mb-8 aspect-[16/10]">
// // // //                 <motion.img
// // // //                   src={project.image}
// // // //                   alt={project.title}
// // // //                   whileHover={{ scale: 1.05 }}
// // // //                   transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
// // // //                   className="w-full h-full object-cover"
// // // //                 />
// // // //               </div>

// // // //               {/* Project Details */}
// // // //               <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
// // // //                 <div className="max-w-md">
// // // //                   <h3 className="text-2xl font-bold tracking-tighter mb-2">{project.title}</h3>
// // // //                   <p className="text-gray-600 text-lg leading-relaxed">{project.description}</p>
// // // //                 </div>
                
// // // //                 {/* Tags Grid */}
// // // //                 <div className="flex flex-wrap gap-2 md:max-w-[300px] md:justify-end">
// // // //                   {project.tags.map((tag, index) => (
// // // //                     <span 
// // // //                       key={index} 
// // // //                       className="text-[10px] font-bold border border-gray-200 px-3 py-1 rounded-full text-gray-400 uppercase tracking-widest hover:bg-black hover:text-white transition-colors duration-300"
// // // //                     >
// // // //                       {tag}
// // // //                     </span>
// // // //                   ))}
// // // //                 </div>
// // // //               </div>
// // // //             </motion.div>
// // // //           ))}
// // // //         </div>
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // };

// // // // export default Works;


// // // import React, { useState } from 'react';
// // // import { motion, AnimatePresence } from 'framer-motion';
// // // import protfolio from "../assets/Web Portfolio-01.jpg.jpeg";
// // // import protfolio1 from "../assets/Web Portfolio-02.jpg.jpeg";
// // // import protfolio2 from "../assets/Web Portfolio-03.jpg.jpeg";

// // // const Works = () => {
// // //   const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
// // //   const [hoveringId, setHoveringId] = useState(null);

// // //   const projects = [
// // //     {
// // //       id: 1,
// // //       title: "SOROS",
// // //       description: "Designing trust for decentralized commerce.",
// // //       tags: ["Brand Strategy", "Naming", "Brand Identity", "Logo", "Guidelines", "Product Design", "Digital Experience", "Design Systems", "Web", "Engineering"],
// // //       image: protfolio,
// // //       gridSpan: "col-span-1"
// // //     },
// // //     {
// // //       id: 2,
// // //       title: "Robotic Implant Center",
// // //       description: "Positioning robotic dentistry as a category leader.",
// // //       tags: ["Web Design", "Engineering", "Motion"],
// // //       image: protfolio1,
// // //       gridSpan: "col-span-1"
// // //     },
// // //     {
// // //       id: 3,
// // //       title: "Utica Public Library",
// // //       description: "Rebranding clarity for a historic institution.",
// // //       tags: ["Research", "Brand Identity", "Logo", "Campaigns"],
// // //       image: protfolio2,
// // //       gridSpan: "md:col-span-2"
// // //     },
// // //   ];

// // //   const handleMouseMove = (e) => {
// // //     setMousePos({ x: e.clientX, y: e.clientY });
// // //   };

// // //   return (
// // //     <section className="py-20 px-6 md:px-12 bg-white cursor-auto">
// // //       <div className="max-w-7xl mx-auto">

// // //         {/* Header */}
// // //         <div className="mb-16">
// // //           <motion.p 
// // //             initial={{ opacity: 0, y: 20 }}
// // //             whileInView={{ opacity: 1, y: 0 }}
// // //             className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-4"
// // //           >
// // //             Case Studies
// // //           </motion.p>

// // //           <motion.h2 
// // //             initial={{ opacity: 0, y: 30 }}
// // //             whileInView={{ opacity: 1, y: 0 }}
// // //             transition={{ delay: 0.2 }}
// // //             className="text-4xl md:text-6xl font-medium text-gray-900 leading-tight max-w-4xl"
// // //           >
// // //             Work created at moments where change becomes{" "}
// // //             <span className="italic text-gray-400">inevitable by design.</span>
// // //           </motion.h2>
// // //         </div>

// // //         {/* Cursor */}
// // //         <AnimatePresence>
// // //           {hoveringId && (
// // //             <motion.div
// // //               className="fixed top-0 left-0 w-24 h-24 bg-black rounded-full flex items-center justify-center text-white text-xs font-bold pointer-events-none z-50 shadow-xl"
// // //               initial={{ scale: 0, opacity: 0 }}
// // //               animate={{ 
// // //                 scale: 1, 
// // //                 opacity: 1,
// // //                 x: mousePos.x - 48, 
// // //                 y: mousePos.y - 48 
// // //               }}
// // //               exit={{ scale: 0, opacity: 0 }}
// // //               transition={{ type: "spring", stiffness: 180, damping: 18 }}
// // //             >
// // //               VIEW CASE
// // //             </motion.div>
// // //           )}
// // //         </AnimatePresence>

// // //         {/* Grid */}
// // //         <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-20">
// // //           {projects.map((project) => (
// // //             <motion.div 
// // //               key={project.id} 
// // //               className={`${project.gridSpan} group relative`}
// // //               initial={{ opacity: 0, y: 40 }}
// // //               whileInView={{ opacity: 1, y: 0 }}
// // //               onMouseMove={handleMouseMove}
// // //               onMouseEnter={() => setHoveringId(project.id)}
// // //               onMouseLeave={() => setHoveringId(null)}
// // //             >
// // //               {/* Image */}
// // //               <div className="relative overflow-hidden bg-gray-100 mb-6 aspect-[16/10]">
// // //                 <motion.img
// // //                   src={project.image}
// // //                   alt={project.title}
// // //                   whileHover={{ scale: 1.05 }}
// // //                   transition={{ duration: 0.6 }}
// // //                   className="w-full h-full object-cover"
// // //                 />
// // //               </div>

// // //               {/* 🔥 EXACT STYLE TEXT (your screenshot মতো) */}
// // //               <div>
// // //                 {/* Title */}
// // //                 <h3 className="text-2xl font-semibold text-gray-900 mb-2">
// // //                   {project.title}
// // //                 </h3>

// // //                 {/* One line description */}
// // //                 <p className="text-gray-500 text-base mb-4">
// // //                   {project.description}
// // //                 </p>

// // //                 {/* Tags (pill style like screenshot) */}
// // //                 <div className="flex flex-wrap gap-2">
// // //                   {project.tags.map((tag, index) => (
// // //                     <span
// // //                       key={index}
// // //                       className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-md"
// // //                     >
// // //                       {tag}
// // //                     </span>
// // //                   ))}
// // //                 </div>
// // //               </div>

// // //             </motion.div>
// // //           ))}
// // //         </div>

// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default Works;

// // // import React, { useState } from "react";
// // // import { motion, AnimatePresence } from "framer-motion";
// // // import protfolio from "../assets/Web Portfolio-01.jpg.jpeg";
// // // import protfolio1 from "../assets/Web Portfolio-02.jpg.jpeg";
// // // import protfolio2 from "../assets/Web Portfolio-03.jpg.jpeg";

// // // const Works = () => {
// // //   const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
// // //   const [hoveringId, setHoveringId] = useState(null);

// // //   const projects = [
// // //     {
// // //       id: 1,
// // //       title: "CLIKTRO",
// // //       description: "Designing trust for decentralized commerce.",
// // //       tags: ["Brand Strategy", "Naming", "Brand Identity", "UI/UX"],
// // //       image: protfolio,
// // //       gridSpan: "col-span-1",
// // //     },
// // //     {
// // //       id: 2,
// // //       title: "Robotic Implant Center",
// // //       description: "Positioning robotic dentistry as a category leader.",
// // //       tags: ["Web Design", "Engineering", "Motion"],
// // //       image: protfolio1,
// // //       gridSpan: "col-span-1",
// // //     },
// // //     {
// // //       id: 3,
// // //       title: "Utica Public Library",
// // //       description: "Rebranding clarity for a historic institution.",
// // //       tags: ["Research", "Brand Identity", "Logo", "Campaigns"],
// // //       image: protfolio2,
// // //       gridSpan: "md:col-span-2",
// // //     },
// // //   ];

// // //   const handleMouseMove = (e) => {
// // //     setMousePos({ x: e.clientX, y: e.clientY });
// // //   };

// // //   return (
// // //     <section className="py-24 px-6 md:px-12 bg-[#f2f2f2] relative">
// // //       <div className="max-w-7xl mx-auto">

// // //         {/* 🔥 HEADER */}
// // //         <div className="mb-20">
// // //           <motion.p
// // //             initial={{ opacity: 0, y: 20 }}
// // //             whileInView={{ opacity: 1, y: 0 }}
// // //             className="text-xs tracking-[0.3em] uppercase text-gray-500 mb-4"
// // //           >
// // //             Case Studies
// // //           </motion.p>

// // //           <motion.h2
// // //             initial={{ opacity: 0, y: 40 }}
// // //             whileInView={{ opacity: 1, y: 0 }}
// // //             transition={{ duration: 0.6 }}
// // //             className="text-4xl md:text-6xl font-medium text-gray-900 leading-tight max-w-4xl"
// // //           >
// // //             Work created at moments where change becomes{" "}
// // //             <span className="italic text-gray-400">
// // //               inevitable by design.
// // //             </span>
// // //           </motion.h2>
// // //         </div>

// // //         {/* 🔥 PREMIUM CURSOR */}
// // //         <AnimatePresence>
// // //           {hoveringId && (
// // //             <motion.div
// // //               className="fixed top-0 left-0 pointer-events-none z-50"
// // //               initial={{ scale: 0, opacity: 0 }}
// // //               animate={{
// // //                 scale: 1,
// // //                 opacity: 1,
// // //                 x: mousePos.x - 50,
// // //                 y: mousePos.y - 50,
// // //               }}
// // //               exit={{ scale: 0, opacity: 0 }}
// // //               transition={{
// // //                 type: "spring",
// // //                 stiffness: 220,
// // //                 damping: 18,
// // //               }}
// // //             >
// // //               <div className="w-24 h-24 bg-black text-white rounded-full flex items-center justify-center text-[11px] tracking-widest font-medium shadow-xl">
// // //                 VIEW
// // //               </div>
// // //             </motion.div>
// // //           )}
// // //         </AnimatePresence>

// // //         {/* 🔥 GRID */}
// // //         <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
// // //           {projects.map((project) => (
// // //             <motion.div
// // //               key={project.id}
// // //               className={`${project.gridSpan} group`}
// // //               initial={{ opacity: 0, y: 60 }}
// // //               whileInView={{ opacity: 1, y: 0 }}
// // //               transition={{ duration: 0.7 }}
// // //               onMouseMove={handleMouseMove}
// // //               onMouseEnter={() => setHoveringId(project.id)}
// // //               onMouseLeave={() => setHoveringId(null)}
// // //             >
// // //               {/* IMAGE */}
// // //               <div className="overflow-hidden rounded-xl mb-6">
// // //                 <motion.img
// // //                   src={project.image}
// // //                   alt={project.title}
// // //                   className="w-full h-full object-cover aspect-[16/10]"
// // //                   whileHover={{ scale: 1.08 }}
// // //                   transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
// // //                 />
// // //               </div>

// // //               {/* 🔥 TEXT (premium spacing) */}
// // //               <div className="space-y-3">
// // //                 <h3 className="text-xl font-semibold text-gray-900 tracking-tight">
// // //                   {project.title}
// // //                 </h3>

// // //                 <p className="text-gray-500 text-sm leading-relaxed max-w-md">
// // //                   {project.description}
// // //                 </p>

// // //                 {/* 🔥 TAGS (soft pill style) */}
// // //                 <div className="flex flex-wrap gap-2 pt-2">
// // //                   {project.tags.map((tag, index) => (
// // //                     <span
// // //                       key={index}
// // //                       className="text-[10px] text-gray-500 bg-white px-3 py-1 rounded-full border border-gray-200 hover:bg-black hover:text-white transition duration-300"
// // //                     >
// // //                       {tag}
// // //                     </span>
// // //                   ))}
// // //                 </div>
// // //               </div>
// // //             </motion.div>
// // //           ))}
// // //         </div>

// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default Works;


// // // import React, { useState } from "react";
// // // import { motion, AnimatePresence } from "framer-motion";
// // // import protfolio from "../assets/Web Portfolio-01.jpg.jpeg";
// // // import protfolio1 from "../assets/Web Portfolio-02.jpg.jpeg";
// // // import protfolio2 from "../assets/Web Portfolio-03.jpg.jpeg";

// // // const Works = () => {
// // //   const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
// // //   const [hoveringId, setHoveringId] = useState(null);

// // //   const projects = [
// // //     {
// // //       id: 1,
// // //       title: "CLIKTRO",
// // //       description: "Designing trust for decentralized commerce.",
// // //       tags: ["Brand Strategy", "Naming", "Brand Identity", "UI/UX"],
// // //       image: protfolio,
// // //       gridSpan: "col-span-1",
// // //     },
// // //     {
// // //       id: 2,
// // //       title: "Robotic Implant Center",
// // //       description: "Positioning robotic dentistry as a category leader.",
// // //       tags: ["Web Design", "Engineering", "Motion"],
// // //       image: protfolio1,
// // //       gridSpan: "col-span-1",
// // //     },
// // //     {
// // //       id: 3,
// // //       title: "Utica Public Library",
// // //       description: "Rebranding clarity for a historic institution.",
// // //       tags: ["Research", "Brand Identity", "Logo", "Campaigns"],
// // //       image: protfolio2,
// // //       gridSpan: "md:col-span-2",
// // //     },
// // //   ];

// // //   const handleMouseMove = (e) => {
// // //     setMousePos({ x: e.clientX, y: e.clientY });
// // //   };

// // //   return (
// // //     <section className="py-24 px-6 md:px-12 bg-[#f2f2f2] relative">
// // //       <div className="max-w-7xl mx-auto">

// // //         {/* 🔥 HEADER */}
// // //         <div className="mb-20">
// // //           <motion.p
// // //             initial={{ opacity: 0, y: 20 }}
// // //             whileInView={{ opacity: 1, y: 0 }}
// // //             className="text-xs tracking-[0.3em] uppercase text-gray-500 mb-4"
// // //           >
// // //             Case Studies
// // //           </motion.p>

// // //           <motion.h2
// // //             initial={{ opacity: 0, y: 40 }}
// // //             whileInView={{ opacity: 1, y: 0 }}
// // //             transition={{ duration: 0.6 }}
// // //             className="text-4xl md:text-6xl font-medium text-gray-900 leading-tight max-w-4xl"
// // //           >
// // //             Work created at moments where change becomes{" "}
// // //             <span className="italic text-gray-400">
// // //               inevitable by design.
// // //             </span>
// // //           </motion.h2>
// // //         </div>

// // //         {/* 🔥 UPDATED BUTTON CURSOR (as per button.png) */}
// // //         <AnimatePresence>
// // //           {hoveringId && (
// // //             <motion.div
// // //               className="fixed top-0 left-0 pointer-events-none z-50"
// // //               initial={{ scale: 0.8, opacity: 0 }}
// // //               animate={{
// // //                 scale: 1,
// // //                 opacity: 1,
// // //                 x: mousePos.x - 70, // মাউসের পজিশন অনুযায়ী সেন্টার করা
// // //                 y: mousePos.y - 25,
// // //               }}
// // //               exit={{ scale: 0.8, opacity: 0 }}
// // //               transition={{
// // //                 type: "spring",
// // //                 stiffness: 250,
// // //                 damping: 20,
// // //                 mass: 0.5
// // //               }}
// // //             >
// // //               {/* Button styling based on button.png */}
// // //               <div className="bg-[#0000FF] text-white px-6 py-3 font-medium text-sm shadow-2xl flex items-center justify-center whitespace-nowrap border border-blue-400/20">
// // //                 View Case Study
// // //               </div>
// // //             </motion.div>
// // //           )}
// // //         </AnimatePresence>

// // //         {/* 🔥 GRID */}
// // //         <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
// // //           {projects.map((project) => (
// // //             <motion.div
// // //               key={project.id}
// // //               className={`${project.gridSpan} group`}
// // //               initial={{ opacity: 0, y: 60 }}
// // //               whileInView={{ opacity: 1, y: 0 }}
// // //               transition={{ duration: 0.7 }}
// // //               onMouseMove={handleMouseMove}
// // //               onMouseEnter={() => setHoveringId(project.id)}
// // //               onMouseLeave={() => setHoveringId(null)}
// // //             >
// // //               {/* IMAGE */}
// // //               <div className="overflow-hidden rounded-xl mb-6">
// // //                 <motion.img
// // //                   src={project.image}
// // //                   alt={project.title}
// // //                   className="w-full h-full object-cover aspect-[16/10]"
// // //                   whileHover={{ scale: 1.08 }}
// // //                   transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
// // //                 />
// // //               </div>

// // //               {/* 🔥 TEXT (premium spacing) */}
// // //               <div className="space-y-3">
// // //                 <h3 className="text-xl font-semibold text-gray-900 tracking-tight">
// // //                   {project.title}
// // //                 </h3>

// // //                 <p className="text-gray-500 text-sm leading-relaxed max-w-md">
// // //                   {project.description}
// // //                 </p>

// // //                 {/* 🔥 TAGS (soft pill style) */}
// // //                 <div className="flex flex-wrap gap-2 pt-2">
// // //                   {project.tags.map((tag, index) => (
// // //                     <span
// // //                       key={index}
// // //                       className="text-[10px] text-gray-500 bg-white px-3 py-1 rounded-full border border-gray-200 hover:bg-black hover:text-white transition duration-300"
// // //                     >
// // //                       {tag}
// // //                     </span>
// // //                   ))}
// // //                 </div>
// // //               </div>
// // //             </motion.div>
// // //           ))}
// // //         </div>

// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default Works;


// // // import React, { useState } from "react";
// // // import { motion, AnimatePresence } from "framer-motion";

// // // // Assets - আপনার পাথ অনুযায়ী ঠিক আছে
// // // import protfolio from "../assets/Web Portfolio-01.jpg.jpeg";
// // // import protfolio1 from "../assets/Web Portfolio-02.jpg.jpeg";
// // // import protfolio2 from "../assets/Web Portfolio-03.jpg.jpeg";

// // // const Works = () => {
// // //   const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
// // //   const [hoveringId, setHoveringId] = useState(null);

// // //   const projects = [
// // //     {
// // //       id: 1,
// // //       title: "CLIKTRO",
// // //       description: "Designing trust for decentralized commerce.",
// // //       tags: ["Brand Strategy", "Naming", "Brand Identity", "UI/UX"],
// // //       image: protfolio,
// // //       gridSpan: "col-span-1",
// // //       link: "https://your-demo-link-1.com", // এখানে আপনার ১ম লিংক দিন
// // //     },
// // //     {
// // //       id: 2,
// // //       title: "Robotic Implant Center",
// // //       description: "Positioning robotic dentistry as a category leader.",
// // //       tags: ["Web Design", "Engineering", "Motion"],
// // //       image: protfolio1,
// // //       gridSpan: "col-span-1",
// // //       link: "https://your-demo-link-2.com", // এখানে আপনার ২য় লিংক দিন
// // //     },
// // //     {
// // //       id: 3,
// // //       title: "Utica Public Library",
// // //       description: "Rebranding clarity for a historic institution.",
// // //       tags: ["Research", "Brand Identity", "Logo", "Campaigns"],
// // //       image: protfolio2,
// // //       gridSpan: "md:col-span-2",
// // //       link: "https://your-demo-link-3.com", // এখানে আপনার ৩য় লিংক দিন
// // //     },
// // //   ];

// // //   const handleMouseMove = (e) => {
// // //     setMousePos({ x: e.clientX, y: e.clientY });
// // //   };

// // //   return (
// // //     <section id="works" className="py-24 px-6 md:px-12 bg-[#f2f2f2] relative">
// // //       <div className="max-w-7xl mx-auto">

// // //         {/* 🔥 HEADER */}
// // //         <div className="mb-20">
// // //           <motion.p
// // //             initial={{ opacity: 0, y: 20 }}
// // //             whileInView={{ opacity: 1, y: 0 }}
// // //             viewport={{ once: true }}
// // //             className="text-xs tracking-[0.3em] uppercase text-gray-500 mb-4"
// // //           >
// // //             Case Studies
// // //           </motion.p>

// // //           <motion.h2
// // //             initial={{ opacity: 0, y: 40 }}
// // //             whileInView={{ opacity: 1, y: 0 }}
// // //             viewport={{ once: true }}
// // //             transition={{ duration: 0.6 }}
// // //             className="text-4xl md:text-6xl font-medium text-gray-900 leading-tight max-w-4xl"
// // //           >
// // //             Work created at moments where change becomes{" "}
// // //             <span className="italic text-gray-400">
// // //               inevitable by design.
// // //             </span>
// // //           </motion.h2>
// // //         </div>

// // //         {/* 🔥 UPDATED CURSOR (Smaller & Rounded) */}
// // //         <AnimatePresence>
// // //           {hoveringId && (
// // //             <motion.div
// // //               className="fixed top-0 left-0 pointer-events-none z-50 hidden md:block" // মোবাইলে কার্সার হাইড থাকবে
// // //               initial={{ scale: 0.8, opacity: 0 }}
// // //               animate={{
// // //                 scale: 1,
// // //                 opacity: 1,
// // //                 x: mousePos.x - 60, 
// // //                 y: mousePos.y - 20,
// // //               }}
// // //               exit={{ scale: 0.8, opacity: 0 }}
// // //               transition={{
// // //                 type: "spring",
// // //                 stiffness: 250,
// // //                 damping: 20,
// // //                 mass: 0.5
// // //               }}
// // //             >
// // //               <div className="bg-[#000000] text-white px-4 py-2 rounded-xl font-medium text-[11px] shadow-2xl flex items-center justify-center whitespace-nowrap border border-blue-400/20 tracking-wider">
// // //                 View Case Study
// // //               </div>
// // //             </motion.div>
// // //           )}
// // //         </AnimatePresence>

// // //         {/* 🔥 GRID */}
// // //         <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
// // //           {projects.map((project) => (
// // //             <motion.a
// // //               key={project.id}
// // //               href={project.link}
// // //               target="_blank"
// // //               rel="noopener noreferrer"
// // //               className={`${project.gridSpan} group block no-underline`}
// // //               initial={{ opacity: 0, y: 60 }}
// // //               whileInView={{ opacity: 1, y: 0 }}
// // //               viewport={{ once: true }}
// // //               transition={{ duration: 0.7 }}
// // //               onMouseMove={handleMouseMove}
// // //               onMouseEnter={() => setHoveringId(project.id)}
// // //               onMouseLeave={() => setHoveringId(null)}
// // //             >
// // //               {/* IMAGE (Rounded-xl) */}
// // //               <div className="overflow-hidden rounded-xl mb-6">
// // //                 <motion.img
// // //                   src={project.image}
// // //                   alt={project.title}
// // //                   className="w-full h-full object-cover aspect-[16/10]"
// // //                   whileHover={{ scale: 1.08 }}
// // //                   transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
// // //                 />
// // //               </div>

// // //               {/* 🔥 TEXT SECTION */}
// // //               <div className="space-y-3">
// // //                 <h3 className="text-xl font-semibold text-gray-900 tracking-tight">
// // //                   {project.title}
// // //                 </h3>

// // //                 <p className="text-gray-500 text-sm leading-relaxed max-w-md">
// // //                   {project.description}
// // //                 </p>

// // //                 {/* 🔥 TAGS */}
// // //                 <div className="flex flex-wrap gap-2 pt-2">
// // //                   {project.tags.map((tag, index) => (
// // //                     <span
// // //                       key={index}
// // //                       className="text-[10px] text-gray-500 bg-white px-3 py-1 rounded-full border border-gray-200 group-hover:bg-black group-hover:text-white transition duration-300"
// // //                     >
// // //                       {tag}
// // //                     </span>
// // //                   ))}
// // //                 </div>
// // //               </div>
// // //             </motion.a>
// // //           ))}
// // //         </div>

// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default Works;



// // // Square 


// // // import React, { useState } from "react";
// // // import { motion, AnimatePresence } from "framer-motion";

// // // // Assets
// // // import protfolio from "../assets/Web Portfolio-01.jpg.jpeg";
// // // import protfolio1 from "../assets/Web Portfolio-02.jpg.jpeg";
// // // import protfolio2 from "../assets/Web Portfolio-03.jpg.jpeg";

// // // const Works = () => {
// // //   const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
// // //   const [hoveringId, setHoveringId] = useState(null);

// // //   const projects = [
// // //     {
// // //       id: 1,
// // //       title: "CLIKTRO",
// // //       description: "Designing trust for decentralized commerce.",
// // //       tags: ["Brand Strategy", "Naming", "Brand Identity", "UI/UX"],
// // //       image: protfolio,
// // //       gridSpan: "col-span-1",
// // //       link: "https://your-demo-link-1.com", 
// // //     },
// // //     {
// // //       id: 2,
// // //       title: "Robotic Implant Center",
// // //       description: "Positioning robotic dentistry as a category leader.",
// // //       tags: ["Web Design", "Engineering", "Motion"],
// // //       image: protfolio1,
// // //       gridSpan: "col-span-1",
// // //       link: "https://your-demo-link-2.com",
// // //     },
// // //     {
// // //       id: 3,
// // //       title: "Utica Public Library",
// // //       description: "Rebranding clarity for a historic institution.",
// // //       tags: ["Research", "Brand Identity", "Logo", "Campaigns"],
// // //       image: protfolio2,
// // //       gridSpan: "md:col-span-2",
// // //       link: "https://your-demo-link-3.com",
// // //     },
// // //   ];

// // //   const handleMouseMove = (e) => {
// // //     setMousePos({ x: e.clientX, y: e.clientY });
// // //   };

// // //   return (
// // //     <section id="works" className="py-24 px-6 md:px-12 bg-[#f2f2f2] relative">
// // //       <div className="max-w-7xl mx-auto">

// // //         {/* 🔥 HEADER */}
// // //         <div className="mb-20">
// // //           <motion.p
// // //             initial={{ opacity: 0, y: 20 }}
// // //             whileInView={{ opacity: 1, y: 0 }}
// // //             viewport={{ once: true }}
// // //             className="text-xs tracking-[0.3em] uppercase text-gray-500 mb-4"
// // //           >
// // //             Case Studies
// // //           </motion.p>

// // //           <motion.h2
// // //             initial={{ opacity: 0, y: 40 }}
// // //             whileInView={{ opacity: 1, y: 0 }}
// // //             viewport={{ once: true }}
// // //             transition={{ duration: 0.6 }}
// // //             className="text-4xl md:text-6xl font-medium text-gray-900 leading-tight max-w-4xl"
// // //           >
// // //             Work created at moments where change becomes{" "}
// // //             <span className="italic text-gray-400">
// // //               inevitable by design.
// // //             </span>
// // //           </motion.h2>
// // //         </div>

// // //         {/* 🔥 CURSOR BUTTON (Rounded Removed) */}
// // //         <AnimatePresence>
// // //           {hoveringId && (
// // //             <motion.div
// // //               className="fixed top-0 left-0 pointer-events-none z-50 hidden md:block"
// // //               initial={{ scale: 0.8, opacity: 0 }}
// // //               animate={{
// // //                 scale: 1,
// // //                 opacity: 1,
// // //                 x: mousePos.x - 60, 
// // //                 y: mousePos.y - 20,
// // //               }}
// // //               exit={{ scale: 0.8, opacity: 0 }}
// // //               transition={{
// // //                 type: "spring",
// // //                 stiffness: 250,
// // //                 damping: 20,
// // //                 mass: 0.5
// // //               }}
// // //             >
// // //               {/* rounded-none used for sharp corners */}
// // //               <div className="bg-[#000000] text-white px-4 py-2 rounded-none font-medium text-[11px] shadow-2xl flex items-center justify-center whitespace-nowrap border border-blue-400/20 tracking-wider">
// // //                 View Case Study
// // //               </div>
// // //             </motion.div>
// // //           )}
// // //         </AnimatePresence>

// // //         {/* 🔥 GRID */}
// // //         <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
// // //           {projects.map((project) => (
// // //             <motion.a
// // //               key={project.id}
// // //               href={project.link}
// // //               target="_blank"
// // //               rel="noopener noreferrer"
// // //               className={`${project.gridSpan} group block no-underline`}
// // //               initial={{ opacity: 0, y: 60 }}
// // //               whileInView={{ opacity: 1, y: 0 }}
// // //               viewport={{ once: true }}
// // //               transition={{ duration: 0.7 }}
// // //               onMouseMove={handleMouseMove}
// // //               onMouseEnter={() => setHoveringId(project.id)}
// // //               onMouseLeave={() => setHoveringId(null)}
// // //             >
// // //               {/* IMAGE (rounded-none used) */}
// // //               <div className="overflow-hidden rounded-none mb-6">
// // //                 <motion.img
// // //                   src={project.image}
// // //                   alt={project.title}
// // //                   className="w-full h-full object-cover aspect-[16/10]"
// // //                   whileHover={{ scale: 1.08 }}
// // //                   transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
// // //                 />
// // //               </div>

// // //               {/* 🔥 TEXT SECTION */}
// // //               <div className="space-y-3">
// // //                 <h3 className="text-xl font-semibold text-gray-900 tracking-tight">
// // //                   {project.title}
// // //                 </h3>

// // //                 <p className="text-gray-500 text-sm leading-relaxed max-w-md">
// // //                   {project.description}
// // //                 </p>

// // //                 {/* 🔥 TAGS (rounded-none used) */}
// // //                 <div className="flex flex-wrap gap-2 pt-2">
// // //                   {project.tags.map((tag, index) => (
// // //                     <span
// // //                       key={index}
// // //                       className="text-[10px] text-gray-500 bg-white px-3 py-1 rounded-none border border-gray-200 group-hover:bg-black group-hover:text-white transition duration-300"
// // //                     >
// // //                       {tag}
// // //                     </span>
// // //                   ))}
// // //                 </div>
// // //               </div>
// // //             </motion.a>
// // //           ))}
// // //         </div>

// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default Works;


// // // Alhamdulliah Final Rounded 




// // // import React, { useState } from "react";
// // // import { motion, AnimatePresence } from "framer-motion";

// // // // Assets - আপনার পাথ অনুযায়ী ঠিক আছে
// // // import protfolio from "../assets/Web Portfolio-01.jpg.jpeg";
// // // import protfolio1 from "../assets/Web Portfolio-02.jpg.jpeg";
// // // import protfolio2 from "../assets/Web Portfolio-03.jpg.jpeg";

// // // const Works = () => {
// // //   const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
// // //   const [hoveringId, setHoveringId] = useState(null);

// // //   const projects = [
// // //     {
// // //       id: 1,
// // //       title: "CLIKTRO",
// // //       description: "Designing trust for decentralized commerce.",
// // //       tags: ["Brand Strategy", "Naming", "Brand Identity", "UI/UX"],
// // //       image: protfolio,
// // //       gridSpan: "col-span-1",
// // //       link: "https://your-demo-link-1.com", // এখানে আপনার ১ম লিংক দিন
// // //     },
// // //     {
// // //       id: 2,
// // //       title: "Robotic Implant Center",
// // //       description: "Positioning robotic dentistry as a category leader.",
// // //       tags: ["Web Design", "Engineering", "Motion"],
// // //       image: protfolio1,
// // //       gridSpan: "col-span-1",
// // //       link: "https://your-demo-link-2.com", // এখানে আপনার ২য় লিংক দিন
// // //     },
// // //     {
// // //       id: 3,
// // //       title: "Utica Public Library",
// // //       description: "Rebranding clarity for a historic institution.",
// // //       tags: ["Research", "Brand Identity", "Logo", "Campaigns"],
// // //       image: protfolio2,
// // //       gridSpan: "md:col-span-2",
// // //       link: "https://outfiro.netlify.app/", // এখানে আপনার ৩য় লিংক দিন
// // //     },
// // //   ];

// // //   const handleMouseMove = (e) => {
// // //     setMousePos({ x: e.clientX, y: e.clientY });
// // //   };

// // //   return (
// // //     <section id="works" className="py-24 px-6 md:px-12 bg-[#f2f2f2] relative">
// // //       <div className="max-w-7xl mx-auto">

// // //         {/* 🔥 HEADER */}
// // //         <div className="mb-20">
// // //           <motion.p
// // //             initial={{ opacity: 0, y: 20 }}
// // //             whileInView={{ opacity: 1, y: 0 }}
// // //             viewport={{ once: true }}
// // //             className="text-xs tracking-[0.3em] uppercase text-gray-500 mb-4"
// // //           >
// // //             Case Studies
// // //           </motion.p>

// // //           <motion.h2
// // //             initial={{ opacity: 0, y: 40 }}
// // //             whileInView={{ opacity: 1, y: 0 }}
// // //             viewport={{ once: true }}
// // //             transition={{ duration: 0.6 }}
// // //             className="text-4xl md:text-6xl font-medium text-gray-900 leading-tight max-w-4xl"
// // //           >
// // //             Work created at moments where change becomes{" "}
// // //             <span className="italic text-gray-400">
// // //               inevitable by design.
// // //             </span>
// // //           </motion.h2>
// // //         </div>

// // //         {/* 🔥 UPDATED CURSOR (Smaller & Rounded) */}
// // //         <AnimatePresence>
// // //           {hoveringId && (
// // //             <motion.div
// // //               className="fixed top-0 left-0 pointer-events-none z-50 hidden md:block" // মোবাইলে কার্সার হাইড থাকবে
// // //               initial={{ scale: 0.8, opacity: 0 }}
// // //               animate={{
// // //                 scale: 1,
// // //                 opacity: 1,
// // //                 x: mousePos.x - 60, 
// // //                 y: mousePos.y - 20,
// // //               }}
// // //               exit={{ scale: 0.8, opacity: 0 }}
// // //               transition={{
// // //                 type: "spring",
// // //                 stiffness: 250,
// // //                 damping: 20,
// // //                 mass: 0.5
// // //               }}
// // //             >
// // //               <div className="bg-[#000000] text-white px-4 py-2 rounded-xl font-medium text-[11px] shadow-2xl flex items-center justify-center whitespace-nowrap border border-blue-400/20 tracking-wider">
// // //                 View Case Study
// // //               </div>
// // //             </motion.div>
// // //           )}
// // //         </AnimatePresence>

// // //         {/* 🔥 GRID */}
// // //         <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
// // //           {projects.map((project) => (
// // //             <motion.a
// // //               key={project.id}
// // //               href={project.link}
// // //               target="_blank"
// // //               rel="noopener noreferrer"
// // //               className={`${project.gridSpan} group block no-underline`}
// // //               initial={{ opacity: 0, y: 60 }}
// // //               whileInView={{ opacity: 1, y: 0 }}
// // //               viewport={{ once: true }}
// // //               transition={{ duration: 0.7 }}
// // //               onMouseMove={handleMouseMove}
// // //               onMouseEnter={() => setHoveringId(project.id)}
// // //               onMouseLeave={() => setHoveringId(null)}
// // //             >
// // //               {/* IMAGE (Rounded-xl) */}
// // //               <div className="overflow-hidden rounded-xl mb-6">
// // //                 <motion.img
// // //                   src={project.image}
// // //                   alt={project.title}
// // //                   className="w-full h-full object-cover aspect-[16/10]"
// // //                   whileHover={{ scale: 1.08 }}
// // //                   transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
// // //                 />
// // //               </div>

// // //               {/* 🔥 TEXT SECTION */}
// // //               <div className="space-y-3">
// // //                 <h3 className="text-xl font-semibold text-gray-900 tracking-tight">
// // //                   {project.title}
// // //                 </h3>

// // //                 <p className="text-gray-500 text-sm leading-relaxed max-w-md">
// // //                   {project.description}
// // //                 </p>

// // //                 {/* 🔥 TAGS */}
// // //                 <div className="flex flex-wrap gap-2 pt-2">
// // //                   {project.tags.map((tag, index) => (
// // //                     <span
// // //                       key={index}
// // //                       className="text-[10px] text-gray-500 bg-white px-3 py-1 rounded-full border border-gray-200 group-hover:bg-black group-hover:text-white transition duration-300"
// // //                     >
// // //                       {tag}
// // //                     </span>
// // //                   ))}
// // //                 </div>
// // //               </div>
// // //             </motion.a>
// // //           ))}
// // //         </div>

// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default Works;


// // // import React, { useState, useEffect } from "react";
// // // import { motion, AnimatePresence } from "framer-motion";

// // // // Assets
// // // import protfolio from "../assets/Web Portfolio-01.jpg.jpeg";
// // // import protfolio1 from "../assets/Web Portfolio-02.jpg.jpeg";
// // // import protfolio2 from "../assets/Web Portfolio-03.jpg.jpeg";

// // // const Works = () => {
// // //   const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
// // //   const [hoveringId, setHoveringId] = useState(null);
// // //   const [selectedProject, setSelectedProject] = useState(null);

// // //   // পপআপ ওপেন থাকলে স্ক্রল লক করা
// // //   useEffect(() => {
// // //     if (selectedProject) document.body.style.overflow = "hidden";
// // //     else document.body.style.overflow = "unset";
// // //   }, [selectedProject]);

// // //   const projects = [
// // //     {
// // //       id: 1,
// // //       title: "CLIKTRO",
// // //       description: "Designing trust for decentralized commerce.",
// // //       tags: ["Brand Strategy", "Naming", "UI/UX"],
// // //       image: protfolio,
// // //       gridSpan: "col-span-1",
// // //       previews: [protfolio, protfolio1, protfolio2, protfolio], // এখানে ৪টি আলাদা ইমেজ দিবেন
// // //     },
// // //     {
// // //       id: 2,
// // //       title: "Robotic Implant Center",
// // //       description: "Positioning robotic dentistry as a category leader.",
// // //       tags: ["Web Design", "Engineering", "Motion"],
// // //       image: protfolio1,
// // //       gridSpan: "col-span-1",
// // //       previews: [protfolio1, protfolio, protfolio2, protfolio1],
// // //     },
// // //     {
// // //       id: 3,
// // //       title: "Utica Public Library",
// // //       description: "Rebranding clarity for a historic institution.",
// // //       tags: ["Research", "Brand Identity", "Logo"],
// // //       image: protfolio2,
// // //       gridSpan: "md:col-span-2",
// // //       previews: [protfolio2, protfolio, protfolio1, protfolio2],
// // //     },
// // //   ];

// // //   const handleMouseMove = (e) => {
// // //     setMousePos({ x: e.clientX, y: e.clientY });
// // //   };

// // //   return (
// // //     <section id="works" className="py-24 px-6 md:px-12 bg-[#f2f2f2] relative min-h-screen">
// // //       <div className="max-w-7xl mx-auto">
// // //         {/* HEADER SECTION */}
// // //         <div className="mb-20">
// // //           <motion.p className="text-xs tracking-[0.3em] uppercase text-gray-500 mb-4">Case Studies</motion.p>
// // //           <motion.h2 className="text-4xl md:text-6xl font-medium text-gray-900 leading-tight max-w-4xl">
// // //             Work created at moments where change becomes <span className="italic text-gray-400">inevitable by design.</span>
// // //           </motion.h2>
// // //         </div>

// // //         {/* CUSTOM CURSOR */}
// // //         <AnimatePresence>
// // //           {hoveringId && !selectedProject && (
// // //             <motion.div
// // //               className="fixed top-0 left-0 pointer-events-none z-50 hidden md:block"
// // //               initial={{ scale: 0.8, opacity: 0 }}
// // //               animate={{ scale: 1, opacity: 1, x: mousePos.x - 60, y: mousePos.y - 20 }}
// // //               exit={{ scale: 0.8, opacity: 0 }}
// // //             >
// // //               <div className="bg-black text-white px-5 py-2.5 rounded-full font-medium text-[11px] shadow-2xl border border-white/10 tracking-wider">
// // //                 View Case Study
// // //               </div>
// // //             </motion.div>
// // //           )}
// // //         </AnimatePresence>

// // //         {/* PROJECTS GRID */}
// // //         <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
// // //           {projects.map((project) => (
// // //             <motion.div
// // //               key={project.id}
// // //               layoutId={`container-${project.id}`}
// // //               onClick={() => setSelectedProject(project)}
// // //               className={`${project.gridSpan} group cursor-none`}
// // //               onMouseMove={handleMouseMove}
// // //               onMouseEnter={() => setHoveringId(project.id)}
// // //               onMouseLeave={() => setHoveringId(null)}
// // //             >
// // //               <div className="overflow-hidden rounded-2xl mb-6">
// // //                 <motion.img
// // //                   layoutId={`image-${project.id}`}
// // //                   src={project.image}
// // //                   alt={project.title}
// // //                   className="w-full h-full object-cover aspect-[16/10]"
// // //                 />
// // //               </div>
// // //               <div className="space-y-3 text-left">
// // //                 <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
// // //                 <p className="text-gray-500 text-sm max-w-md">{project.description}</p>
// // //                 <div className="flex flex-wrap gap-2">
// // //                   {project.tags.map((tag, i) => (
// // //                     <span key={i} className="text-[10px] text-gray-400 border border-gray-200 px-3 py-1 rounded-full group-hover:bg-black group-hover:text-white transition-colors">
// // //                       {tag}
// // //                     </span>
// // //                   ))}
// // //                 </div>
// // //               </div>
// // //             </motion.div>
// // //           ))}
// // //         </div>
// // //       </div>

// // //       {/* --- GORGEOUS MODAL --- */}
// // //       <AnimatePresence>
// // //         {selectedProject && (
// // //           <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
// // //             {/* Backdrop */}
// // //             <motion.div
// // //               initial={{ opacity: 0 }}
// // //               animate={{ opacity: 1 }}
// // //               exit={{ opacity: 0 }}
// // //               onClick={() => setSelectedProject(null)}
// // //               className="absolute inset-0 bg-white/90 backdrop-blur-xl"
// // //             />

// // //             {/* Modal Content */}
// // //             <motion.div
// // //               layoutId={`container-${selectedProject.id}`}
// // //               className="relative w-full max-w-6xl h-[90vh] bg-white rounded-3xl shadow-2xl overflow-y-auto no-scrollbar border border-gray-100"
// // //             >
// // //               {/* Close Button */}
// // //               <button
// // //                 onClick={() => setSelectedProject(null)}
// // //                 className="absolute top-6 right-6 z-10 bg-black text-white w-12 h-12 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
// // //               >
// // //                 ✕
// // //               </button>

// // //               <div className="p-8 md:p-16">
// // //                 <div className="max-w-3xl mb-12">
// // //                   <motion.h2 className="text-4xl md:text-6xl font-bold mb-4">{selectedProject.title}</motion.h2>
// // //                   <p className="text-xl text-gray-600">{selectedProject.description}</p>
// // //                 </div>

// // //                 {/* 4 PREVIEW GRID - THE PREMIUM PART */}
// // //                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
// // //                   {selectedProject.previews.map((img, idx) => (
// // //                     <motion.div
// // //                       initial={{ opacity: 0, y: 20 }}
// // //                       animate={{ opacity: 1, y: 0 }}
// // //                       transition={{ delay: idx * 0.1 + 0.2 }}
// // //                       key={idx}
// // //                       className="rounded-2xl overflow-hidden shadow-lg border border-gray-100"
// // //                     >
// // //                       <img src={img} alt="preview" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" />
// // //                     </motion.div>
// // //                   ))}
// // //                 </div>

// // //                 <div className="mt-20 text-center pb-10">
// // //                   <button className="bg-black text-white px-10 py-4 rounded-full font-medium hover:bg-gray-800 transition-colors">
// // //                     Visit Live Site
// // //                   </button>
// // //                 </div>
// // //               </div>
// // //             </motion.div>
// // //           </div>
// // //         )}
// // //       </AnimatePresence>
// // //     </section>
// // //   );
// // // };

// // // export default Works;

// // import React, { useState, useEffect } from "react";
// // import { motion, AnimatePresence } from "framer-motion";

// // // Assets (আপনার পাথ অনুযায়ী)
// // import protfolio from "../assets/Web Portfolio-01.jpg.jpeg";
// // import protfolio1 from "../assets/Web Portfolio-02.jpg.jpeg";
// // import protfolio2 from "../assets/Web Portfolio-03.jpg.jpeg";

// // const Works = () => {
// //   const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
// //   const [hoveringId, setHoveringId] = useState(null);
// //   const [selectedProject, setSelectedProject] = useState(null);

// //   useEffect(() => {
// //     if (selectedProject) document.body.style.overflow = "hidden";
// //     else document.body.style.overflow = "unset";
// //   }, [selectedProject]);

// //   const projects = [
// //     {
// //       id: 1,
// //       title: "CLIKTRO",
// //       description: "Designing trust for decentralized commerce through modern aesthetics.",
// //       tags: ["Brand Strategy", "Naming", "UI/UX"],
// //       image: protfolio,
// //       gridSpan: "col-span-1",
// //       previews: [protfolio, protfolio1, protfolio2, protfolio], 
// //     },
// //     {
// //       id: 2,
// //       title: "Robotic Implant Center",
// //       description: "Positioning robotic dentistry as a category leader in healthcare.",
// //       tags: ["Web Design", "Engineering", "Motion"],
// //       image: protfolio1,
// //       gridSpan: "col-span-1",
// //       previews: [protfolio1, protfolio, protfolio2, protfolio1],
// //     },
// //     {
// //       id: 3,
// //       title: "Utica Public Library",
// //       description: "Rebranding clarity for a historic institution with a digital-first approach.",
// //       tags: ["Research", "Brand Identity", "Logo"],
// //       image: protfolio2,
// //       gridSpan: "md:col-span-2",
// //       previews: [protfolio2, protfolio, protfolio1, protfolio2],
// //     },
// //   ];

// //   const handleMouseMove = (e) => {
// //     setMousePos({ x: e.clientX, y: e.clientY });
// //   };

// //   return (
// //     <section id="works" className="py-24 px-6 md:px-12 bg-[#f2f2f2] relative min-h-screen">
// //       <div className="max-w-7xl mx-auto">
// //         {/* HEADER SECTION */}
// //         <div className="mb-20">
// //           <motion.p className="text-xs tracking-[0.3em] uppercase text-gray-500 mb-4 font-semibold">Case Studies</motion.p>
// //           <motion.h2 className="text-4xl md:text-7xl font-medium text-gray-900 leading-[1.1] max-w-4xl tracking-tighter">
// //             Work created at moments where change becomes <span className="italic text-gray-400">inevitable by design.</span>
// //           </motion.h2>
// //         </div>

// //         {/* CUSTOM CURSOR */}
// //         <AnimatePresence>
// //           {hoveringId && !selectedProject && (
// //             <motion.div
// //               className="fixed top-0 left-0 pointer-events-none z-50 hidden md:block"
// //               initial={{ scale: 0.8, opacity: 0 }}
// //               animate={{ scale: 1, opacity: 1, x: mousePos.x - 60, y: mousePos.y - 20 }}
// //               exit={{ scale: 0.8, opacity: 0 }}
// //             >
// //               <div className="bg-black text-white px-6 py-3 rounded-full font-medium text-[11px] shadow-2xl border border-white/20 tracking-[0.1em] uppercase">
// //                 View Case Study
// //               </div>
// //             </motion.div>
// //           )}
// //         </AnimatePresence>

// //         {/* PROJECTS GRID */}
// //         <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
// //           {projects.map((project) => (
// //             <motion.div
// //               key={project.id}
// //               layoutId={`container-${project.id}`}
// //               onClick={() => setSelectedProject(project)}
// //               className={`${project.gridSpan} group cursor-none`}
// //               onMouseMove={handleMouseMove}
// //               onMouseEnter={() => setHoveringId(project.id)}
// //               onMouseLeave={() => setHoveringId(null)}
// //             >
// //               <div className="overflow-hidden rounded-3xl mb-6 bg-white shadow-sm">
// //                 <motion.img
// //                   layoutId={`image-${project.id}`}
// //                   src={project.image}
// //                   alt={project.title}
// //                   className="w-full h-full object-cover aspect-[16/10] group-hover:scale-105 transition-transform duration-1000"
// //                 />
// //               </div>
// //               <div className="space-y-4 px-2">
// //                 <h3 className="text-2xl font-semibold text-gray-900 tracking-tight">{project.title}</h3>
// //                 <p className="text-gray-500 text-sm max-w-md leading-relaxed">{project.description}</p>
// //                 <div className="flex flex-wrap gap-2">
// //                   {project.tags.map((tag, i) => (
// //                     <span key={i} className="text-[10px] text-gray-400 border border-gray-200 px-3 py-1 rounded-full group-hover:bg-black group-hover:text-white transition-all duration-300">
// //                       {tag}
// //                     </span>
// //                   ))}
// //                 </div>
// //               </div>
// //             </motion.div>
// //           ))}
// //         </div>
// //       </div>

// //       {/* --- PREMIUM CASE STUDY MODAL --- */}
// //       <AnimatePresence>
// //         {selectedProject && (
// //           <motion.div 
// //             className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto no-scrollbar bg-white"
// //             initial={{ opacity: 0 }}
// //             animate={{ opacity: 1 }}
// //             exit={{ opacity: 0 }}
// //           >
// //             {/* Close Button UI */}
// //             <motion.div 
// //                initial={{ opacity: 0, y: -20 }}
// //                animate={{ opacity: 1, y: 0 }}
// //                onClick={() => setSelectedProject(null)}
// //                className="fixed top-8 right-8 z-[110] flex items-center gap-4 cursor-pointer group"
// //             >
// //                 <span className="text-[10px] uppercase tracking-[0.3em] font-bold group-hover:mr-2 transition-all">Close</span>
// //                 <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
// //                     ✕
// //                 </div>
// //             </motion.div>

// //             <div className="w-full max-w-6xl mx-auto px-6 py-20">
// //               {/* Modal Intro */}
// //               <div className="mb-32 mt-10">
// //                 <motion.span 
// //                   initial={{ opacity: 0, x: -20 }}
// //                   animate={{ opacity: 1, x: 0 }}
// //                   className="text-blue-600 text-xs font-bold uppercase tracking-[0.2em] block mb-6"
// //                 >
// //                   Featured Case Study
// //                 </motion.span>
// //                 <motion.h2 
// //                   initial={{ opacity: 0, y: 30 }}
// //                   animate={{ opacity: 1, y: 0 }}
// //                   transition={{ delay: 0.1 }}
// //                   className="text-5xl md:text-8xl font-bold tracking-tighter text-gray-900 mb-8"
// //                 >
// //                   {selectedProject.title}
// //                 </motion.h2>
// //                 <motion.p 
// //                   initial={{ opacity: 0, y: 20 }}
// //                   animate={{ opacity: 1, y: 0 }}
// //                   transition={{ delay: 0.2 }}
// //                   className="text-xl md:text-2xl text-gray-500 max-w-2xl leading-relaxed font-light"
// //                 >
// //                   {selectedProject.description}
// //                 </motion.p>
// //               </div>

// //               {/* 4 PREVIEW SHOWCASE - STYLISH & GORGEOUS */}
// //               <div className="space-y-40">
// //                 {selectedProject.previews.map((img, idx) => (
// //                   <motion.div
// //                     key={idx}
// //                     initial={{ opacity: 0, y: 50 }}
// //                     whileInView={{ opacity: 1, y: 0 }}
// //                     viewport={{ once: true, margin: "-100px" }}
// //                     transition={{ duration: 0.8 }}
// //                     className={`flex flex-col ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-12 items-center`}
// //                   >
// //                     <div className="w-full md:w-3/4 overflow-hidden rounded-[2rem] shadow-2xl border border-gray-100">
// //                       <motion.img 
// //                         whileHover={{ scale: 1.03 }}
// //                         transition={{ duration: 0.6 }}
// //                         src={img} 
// //                         className="w-full h-auto object-cover" 
// //                         alt={`Preview ${idx + 1}`} 
// //                       />
// //                     </div>
// //                     <div className="w-full md:w-1/4 space-y-4">
// //                       <span className="text-7xl font-black text-gray-100 block tracking-tighter italic">0{idx + 1}</span>
// //                       <h4 className="text-xl font-bold text-gray-900">Visual Excellence</h4>
// //                       <div className="h-[2px] w-12 bg-blue-600"></div>
// //                       <p className="text-gray-400 text-sm leading-relaxed italic font-light">
// //                         "Precision in every pixel, ensuring a seamless user experience across all digital touchpoints."
// //                       </p>
// //                     </div>
// //                   </motion.div>
// //                 ))}
// //               </div>

// //               {/* Footer Mock */}
// //               <div className="mt-40 border-t border-gray-100 pt-20 text-center pb-20">
// //                 <p className="text-gray-400 text-xs uppercase tracking-[0.4em] mb-10">End of Case Study</p>
// //                 <h3 
// //                   onClick={() => setSelectedProject(null)}
// //                   className="text-4xl md:text-6xl font-light italic hover:text-blue-600 cursor-pointer transition-colors"
// //                 >
// //                   Back to Works →
// //                 </h3>
// //               </div>
// //             </div>
// //           </motion.div>
// //         )}
// //       </AnimatePresence>
// //     </section>
// //   );
// // };

// // export default Works;


// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// // Assets
// import protfolio from "../assets/Web Portfolio-01.jpg.jpeg";
// import protfolio1 from "../assets/Web Portfolio-02.jpg.jpeg";
// import protfolio2 from "../assets/Web Portfolio-03.jpg.jpeg";

// const Works = () => {
//   const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
//   const [hoveringId, setHoveringId] = useState(null);
//   const [selectedProject, setSelectedProject] = useState(null);

//   // 🔥 Lock scroll when modal open
//   useEffect(() => {
//     if (selectedProject) document.body.style.overflow = "hidden";
//     else document.body.style.overflow = "unset";
//   }, [selectedProject]);

//   const projects = [
//     {
//       id: 1,
//       title: "CLIKTRO",
//       description: "Designing trust for decentralized commerce.",
//       tags: ["Brand Strategy", "Naming", "UI/UX"],
//       image: protfolio,
//       gridSpan: "col-span-1",
//       previews: [protfolio, protfolio1, protfolio2, protfolio],
//     },
//     {
//       id: 2,
//       title: "Robotic Implant Center",
//       description: "Positioning robotic dentistry as a category leader.",
//       tags: ["Web Design", "Engineering", "Motion"],
//       image: protfolio1,
//       gridSpan: "col-span-1",
//       previews: [protfolio1, protfolio, protfolio2, protfolio1],
//     },
//     {
//       id: 3,
//       title: "Utica Public Library",
//       description: "Rebranding clarity for a historic institution.",
//       tags: ["Research", "Brand Identity", "Logo"],
//       image: protfolio2,
//       gridSpan: "md:col-span-2",
//       previews: [protfolio2, protfolio, protfolio1, protfolio2],
//     },
//   ];

//   const handleMouseMove = (e) => {
//     setMousePos({ x: e.clientX, y: e.clientY });
//   };

//   return (
//     <section id="works" className="py-24 px-6 md:px-12 bg-[#f2f2f2] relative min-h-screen">
//       <div className="max-w-7xl mx-auto">

//         {/* HEADER */}
//         <div className="mb-20">
//           <motion.p className="text-xs tracking-[0.3em] uppercase text-gray-500 mb-4">
//             Case Studies
//           </motion.p>

//           <motion.h2 className="text-4xl md:text-6xl font-medium text-gray-900 leading-tight max-w-4xl">
//             Work created at moments where change becomes{" "}
//             <span className="italic text-gray-400">
//               inevitable by design.
//             </span>
//           </motion.h2>
//         </div>

//         {/* CUSTOM CURSOR */}
//         <AnimatePresence>
//           {hoveringId && !selectedProject && (
//             <motion.div
//               className="fixed top-0 left-0 pointer-events-none z-50 hidden md:block"
//               initial={{ scale: 0.8, opacity: 0 }}
//               animate={{
//                 scale: 1,
//                 opacity: 1,
//                 x: mousePos.x - 60,
//                 y: mousePos.y - 20,
//               }}
//               exit={{ scale: 0.8, opacity: 0 }}
//             >
//               <div className="bg-black text-white px-5 py-2.5 rounded-full font-medium text-[11px] shadow-2xl border border-white/10 tracking-wider">
//                 View Case Study
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>

//         {/* GRID */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
//           {projects.map((project) => (
//             <motion.div
//               key={project.id}
//               layoutId={`container-${project.id}`}
//               onClick={() => setSelectedProject(project)}
//               className={`${project.gridSpan} group cursor-none`}
//               onMouseMove={handleMouseMove}
//               onMouseEnter={() => setHoveringId(project.id)}
//               onMouseLeave={() => setHoveringId(null)}
//             >
//               {/* IMAGE */}
//               <div className="overflow-hidden rounded-2xl mb-6">
//                 <motion.img
//                   layoutId={`image-${project.id}`}
//                   src={project.image}
//                   alt={project.title}
//                   className="w-full h-full object-cover aspect-[16/10]"
//                   whileHover={{ scale: 1.06 }}
//                   transition={{ duration: 0.6 }}
//                 />
//               </div>

//               {/* TEXT */}
//               <div className="space-y-3 text-left">
//                 <h3 className="text-xl font-semibold text-gray-900">
//                   {project.title}
//                 </h3>

//                 <p className="text-gray-500 text-sm max-w-md">
//                   {project.description}
//                 </p>

//                 <div className="flex flex-wrap gap-2">
//                   {project.tags.map((tag, i) => (
//                     <span
//                       key={i}
//                       className="text-[10px] text-gray-400 border border-gray-200 px-3 py-1 rounded-full group-hover:bg-black group-hover:text-white transition-colors"
//                     >
//                       {tag}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* 🔥 PREMIUM MODAL */}
//       <AnimatePresence>
//         {selectedProject && (
//           <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">

//             {/* BACKDROP */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               onClick={() => setSelectedProject(null)}
//               className="absolute inset-0 bg-white/80 backdrop-blur-2xl"
//             />

//             {/* MODAL */}
//             <motion.div
//               layoutId={`container-${selectedProject.id}`}
//               className="relative w-full max-w-6xl h-[90vh] bg-white rounded-3xl shadow-2xl overflow-y-auto no-scrollbar border border-gray-100"
//               initial={{ scale: 0.96, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.97, opacity: 0 }}
//               transition={{ type: "spring", stiffness: 120, damping: 20 }}
//             >
//               {/* CLOSE */}
//               <button
//                 onClick={() => setSelectedProject(null)}
//                 className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:scale-110 transition"
//               >
//                 ✕
//               </button>

//               <div className="p-6 md:p-16">

//                 {/* TITLE */}
//                 <div className="max-w-3xl mb-16">
//                   <motion.h2
//                     initial={{ opacity: 0, y: 40 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     className="text-3xl md:text-6xl font-semibold tracking-tight mb-4"
//                   >
//                     {selectedProject.title}
//                   </motion.h2>

//                   <motion.p
//                     initial={{ opacity: 0, y: 30 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 0.1 }}
//                     className="text-gray-500 text-base md:text-lg"
//                   >
//                     {selectedProject.description}
//                   </motion.p>
//                 </div>

//                 {/* 🔥 4 PREVIEW GRID */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
//                   {selectedProject.previews.map((img, idx) => (
//                     <motion.div
//                       key={idx}
//                       initial={{ opacity: 0, y: 60, scale: 0.95 }}
//                       animate={{ opacity: 1, y: 0, scale: 1 }}
//                       transition={{
//                         delay: idx * 0.12,
//                         duration: 0.6,
//                         ease: [0.22, 1, 0.36, 1],
//                       }}
//                       className="group relative rounded-2xl overflow-hidden shadow-xl border border-gray-100"
//                     >
//                       <img
//                         src={img}
//                         alt="preview"
//                         className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
//                       />

//                       <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
//                     </motion.div>
//                   ))}
//                 </div>

//                 {/* TAGS */}
//                 <div className="mt-16 flex flex-wrap gap-3">
//                   {selectedProject.tags.map((tag, i) => (
//                     <motion.span
//                       key={i}
//                       initial={{ opacity: 0, y: 20 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ delay: 0.2 + i * 0.05 }}
//                       className="text-xs md:text-sm px-4 py-2 rounded-full border border-gray-200 text-gray-600"
//                     >
//                       {tag}
//                     </motion.span>
//                   ))}
//                 </div>

//               </div>
//             </motion.div>
//           </div>
//         )}
//       </AnimatePresence>
//     </section>
//   );
// };

// export default Works;


import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Assets (আপনার পাথ অনুযায়ী ঠিক করে নিন)
import protfolio from "../assets/Web Portfolio-01.jpg.jpeg";
import protfolio1 from "../assets/Web Portfolio-02.jpg.jpeg";
import protfolio2 from "../assets/Web Portfolio-03.jpg.jpeg";

const Works = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hoveringId, setHoveringId] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  // স্ক্রল লক করার প্রফেশনাল উপায়
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [selectedProject]);

  const projects = [
    {
      id: 1,
      title: "CLIKTRO",
      description: "Designing trust for decentralized commerce through modern aesthetics.",
      tags: ["Brand Strategy", "Naming", "UI/UX"],
      image: protfolio,
      gridSpan: "col-span-1",
      previews: [protfolio, protfolio1, protfolio2, protfolio], 
    },
    {
      id: 2,
      title: "Robotic Implant Center",
      description: "Positioning robotic dentistry as a category leader in healthcare.",
      tags: ["Web Design", "Engineering", "Motion"],
      image: protfolio1,
      gridSpan: "col-span-1",
      previews: [protfolio1, protfolio, protfolio2, protfolio1],
    },
    {
      id: 3,
      title: "Utica Public Library",
      description: "Rebranding clarity for a historic institution with a digital-first approach.",
      tags: ["Research", "Brand Identity", "Logo"],
      image: protfolio2,
      gridSpan: "md:col-span-2",
      previews: [protfolio2, protfolio, protfolio1, protfolio2],
    },
  ];

  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  return (
    <section id="works" className="py-24 px-6 md:px-12 bg-[#f2f2f2] relative min-h-screen overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* HEADER SECTION */}
        {/* <div className="mb-20">
          <motion.p className="text-xs tracking-[0.3em] uppercase text-gray-500 mb-4 font-semibold">Case Studies</motion.p>
          <motion.h2 className="text-4xl md:text-7xl font-medium text-gray-900 leading-[1.1] max-w-4xl tracking-tighter">
            Work created at moments where change becomes <span className="italic text-gray-400">inevitable by design.</span>
          </motion.h2>
        </div> */}
             <div className="mb-20">
          <motion.p className="text-xs tracking-[0.3em] uppercase text-gray-500 mb-4">
            Case Studies
          </motion.p>

          <motion.h2 className="text-4xl md:text-6xl font-medium text-gray-900 leading-tight max-w-4xl">
            Work created at moments where change becomes{" "}
            <span className="italic text-gray-400">
              inevitable by design.
            </span>
          </motion.h2>
        </div>

        {/* CUSTOM CURSOR */}
        <AnimatePresence>
          {hoveringId && !selectedProject && (
            <motion.div
              className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1, x: mousePos.x - 60, y: mousePos.y - 20 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <div className="bg-black text-white px-6 py-3 rounded-full font-medium text-[11px] shadow-2xl border border-white/20 tracking-[0.1em] uppercase">
                View Case Study
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* PROJECTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className={`${project.gridSpan} group cursor-none`}
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setHoveringId(project.id)}
              onMouseLeave={() => setHoveringId(null)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="overflow-hidden rounded-3xl mb-6 bg-white shadow-sm border border-black/5">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover aspect-[16/10] group-hover:scale-105 transition-transform duration-1000"
                />
              </div>
              <div className="space-y-4 px-2">
                <h3 className="text-2xl font-semibold text-gray-900 tracking-tight">{project.title}</h3>
                <p className="text-gray-500 text-sm max-w-md leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-[10px] text-gray-400 border border-gray-200 px-3 py-1 rounded-full group-hover:bg-black group-hover:text-white transition-all duration-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* --- FIXED GORGEOUS MODAL --- */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            className="fixed inset-0 z-[9999] bg-white h-screen overflow-y-auto no-scrollbar scroll-smooth"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Navbar for Modal */}
            <div className="sticky top-0 z-[10000] w-full bg-white/80 backdrop-blur-md px-6 py-6 md:px-12 flex justify-between items-center border-b border-gray-100">
                <span className="text-xs font-bold uppercase tracking-widest text-black">Project View</span>
                <motion.div 
                    onClick={() => setSelectedProject(null)}
                    className="flex items-center gap-4 cursor-pointer group"
                    whileTap={{ scale: 0.9 }}
                >
                    <span className="hidden md:block text-[10px] uppercase tracking-[0.3em] font-bold group-hover:mr-2 transition-all">Close</span>
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
                        ✕
                    </div>
                </motion.div>
            </div>

            <div className="w-full max-w-6xl mx-auto px-6 pt-12 pb-32">
              {/* Intro Section */}
              <div className="mb-24 md:mb-40">
                <motion.h2 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-5xl md:text-8xl font-bold tracking-tighter text-gray-900 mb-8 leading-none"
                >
                  {selectedProject.title}
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-xl md:text-3xl text-gray-400 max-w-3xl leading-relaxed font-light italic"
                >
                  {selectedProject.description}
                </motion.p>
              </div>

              {/* STYLISH SHOWCASE GRID */}
              <div className="space-y-32 md:space-y-64">
                {selectedProject.previews.map((img, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className={`flex flex-col ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-12 md:gap-20 items-center`}
                  >
                    {/* Image Section */}
                    <div className="w-full md:w-3/4 rounded-2xl md:rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100">
                      <motion.img 
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.7 }}
                        src={img} 
                        className="w-full h-auto object-cover" 
                        alt={`Preview ${idx + 1}`} 
                      />
                    </div>

                    {/* Text Section */}
                    <div className="w-full md:w-1/4">
                      <span className="text-6xl md:text-8xl font-black text-gray-100 block tracking-tighter mb-4">0{idx + 1}</span>
                      <h4 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">Design Perspective</h4>
                      <div className="h-[2px] w-12 bg-blue-600 mb-6"></div>
                      <p className="text-gray-500 text-base leading-relaxed font-light">
                        Exploring unique visual systems and ensuring high-fidelity implementation for modern web standards.
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* End Section */}
              <div className="mt-40 md:mt-64 text-center">
                <motion.p 
                    whileInView={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    className="text-gray-400 text-xs uppercase tracking-[0.5em] mb-12"
                >
                    Project Overview Complete
                </motion.p>
                <h3 
                  onClick={() => setSelectedProject(null)}
                  className="text-4xl md:text-7xl font-medium tracking-tighter hover:italic hover:text-blue-600 cursor-pointer transition-all duration-500"
                >
                  Explore More Works →
                </h3>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Works;