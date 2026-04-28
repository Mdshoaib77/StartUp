// // // import React from "react";
// // // import protfolio from "../assets/Web Portfolio-01.jpg.jpeg"
// // // import protfolio1 from "../assets/Web Portfolio-02.jpg.jpeg"
// // // import protfolio2 from "../assets/Web Portfolio-03.jpg.jpeg"

// // // const Works = () => {
// // //   return (
// // //     <section id="works" className="py-16 bg-black text-white">
// // //       <div className="max-w-6xl mx-auto px-4">
        
// // //         {/* 🔥 Title */}
// // //         <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
// // //           Our Works
// // //         </h2>

// // //         {/* 🔥 Work Cards */}
// // //         <div className="grid md:grid-cols-3 gap-6">
          
// // //           {/* Card 1 */}
// // //           <div className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:scale-105 transition">
// // //             <h3 className="text-xl font-semibold mb-2">E-commerce Website</h3>
// // //             <p className="text-gray-400">
// // //               Full-stack ecommerce solution using React, Node.js & MongoDB.
// // //             </p>
// // //           </div>

// // //           {/* Card 2 */}
// // //           <div className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:scale-105 transition">
// // //             <h3 className="text-xl font-semibold mb-2">Real Estate Platform</h3>
// // //             <p className="text-gray-400">
// // //               Property listing website with modern UI and fast performance.
// // //             </p>
// // //           </div>

// // //           {/* Card 3 */}
// // //           <div className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:scale-105 transition">
// // //             <h3 className="text-xl font-semibold mb-2">Restaurant Website</h3>
// // //             <p className="text-gray-400">
// // //               Beautiful and responsive restaurant website with booking system.
// // //             </p>
// // //           </div>

// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default Works;

// // // import React from 'react'
// // // import protfolio from "../assets/Web Portfolio-01.jpg.jpeg"
// // // import protfolio1 from "../assets/Web Portfolio-02.jpg.jpeg"
// // // import protfolio2 from "../assets/Web Portfolio-03.jpg.jpeg"

// // // const works = () => {
// // //   return (
// // //     <div>
      
// // //     </div>
// // //   )
// // // }

// // // export default works


// // import React from 'react';
// // // আপনার ইম্পোর্ট করা ইমেজগুলো
// // import protfolio from "../assets/Web Portfolio-01.jpg.jpeg";
// // import protfolio1 from "../assets/Web Portfolio-02.jpg.jpeg";
// // import protfolio2 from "../assets/Web Portfolio-03.jpg.jpeg";

// // const Works = () => {
// //   const projects = [
// //     {
// //       id: 1,
// //       title: "SOROS",
// //       description: "Designing trust for decentralized commerce.",
// //       tags: ["Brand Strategy", "Naming", "Brand Identity", "UI/UX"],
// //       image: protfolio,
// //     },
// //     {
// //       id: 2,
// //       title: "Robotic Implant Center",
// //       description: "Positioning robotic dentistry as a category leader.",
// //       tags: ["Web Design", "Engineering", "Motion"],
// //       image: protfolio1,
// //     },
// //     {
// //       id: 3,
// //       title: "Utica Public Library",
// //       description: "Rebranding clarity for a historic institution.",
// //       tags: ["Research", "Brand Identity", "Logo"],
// //       image: protfolio2,
// //     },
// //   ];

// //   return (
// //     <section className="py-16 px-6 md:px-12 bg-white">
// //       <div className="max-w-7xl mx-auto">
// //         {/* Section Header */}
// //         <div className="mb-12">
// //           <p className="text-sm uppercase tracking-widest text-gray-500 mb-2">Case Studies</p>
// //           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight max-w-2xl">
// //             Work created at moments where change becomes <span className="italic font-serif">inevitable by design.</span>
// //           </h2>
// //         </div>

// //         {/* Works Grid */}
// //         <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
// //           {projects.map((project) => (
// //             <div key={project.id} className="group cursor-pointer">
// //               {/* Image Container with Hover Effect */}
// //               <div className="relative overflow-hidden bg-gray-100 aspect-video mb-6">
// //                 <img
// //                   src={project.image}
// //                   alt={project.title}
// //                   className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
// //                 />
// //                 {/* View Case Study Button on Hover */}
// //                 <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
// //                   <span className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
// //                     View Case Study
// //                   </span>
// //                 </div>
// //               </div>

// //               {/* Project Info */}
// //               <div className="space-y-2">
// //                 <h3 className="text-2xl font-bold uppercase tracking-tight">{project.title}</h3>
// //                 <p className="text-gray-600 text-lg">{project.description}</p>
                
// //                 {/* Tags */}
// //                 <div className="flex flex-wrap gap-2 pt-2">
// //                   {project.tags.map((tag, index) => (
// //                     <span 
// //                       key={index} 
// //                       className="text-xs font-semibold border border-gray-300 px-3 py-1 rounded-full text-gray-500 uppercase"
// //                     >
// //                       {tag}
// //                     </span>
// //                   ))}
// //                 </div>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Works;


// // import React, { useState } from 'react';
// // import { motion, AnimatePresence } from 'framer-motion';
// // import protfolio from "../assets/Web Portfolio-01.jpg.jpeg";
// // import protfolio1 from "../assets/Web Portfolio-02.jpg.jpeg";
// // import protfolio2 from "../assets/Web Portfolio-03.jpg.jpeg";

// // const Works = () => {
// //   const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
// //   const [hoveringId, setHoveringId] = useState(null);

// //   const projects = [
// //     {
// //       id: 1,
// //       title: "SOROS",
// //       description: "Designing trust for decentralized commerce.",
// //       tags: ["Brand Strategy", "Naming", "Brand Identity", "UI/UX"],
// //       image: protfolio,
// //       gridSpan: "col-span-1"
// //     },
// //     {
// //       id: 2,
// //       title: "Robotic Implant Center",
// //       description: "Positioning robotic dentistry as a category leader.",
// //       tags: ["Web Design", "Engineering", "Motion"],
// //       image: protfolio1,
// //       gridSpan: "col-span-1"
// //     },
// //     {
// //       id: 3,
// //       title: "Utica Public Library",
// //       description: "Rebranding clarity for a historic institution.",
// //       tags: ["Research", "Brand Identity", "Logo", "Campaigns"],
// //       image: protfolio2,
// //       gridSpan: "md:col-span-2" // এটি ৩ নম্বর ইমেজকে ফুল উইডথ করবে
// //     },
// //   ];

// //   const handleMouseMove = (e) => {
// //     setMousePos({ x: e.clientX, y: e.clientY });
// //   };

// //   return (
// //     <section className="py-20 px-6 md:px-12 bg-white cursor-auto">
// //       <div className="max-w-7xl mx-auto">
        
// //         {/* Section Header */}
// //         <div className="mb-16">
// //           <motion.p 
// //             initial={{ opacity: 0, y: 20 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             viewport={{ once: true }}
// //             className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-4"
// //           >
// //             Case Studies
// //           </motion.p>
// //           <motion.h2 
// //             initial={{ opacity: 0, y: 30 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             viewport={{ once: true }}
// //             transition={{ delay: 0.2 }}
// //             className="text-4xl md:text-6xl font-medium text-gray-900 leading-tight max-w-4xl"
// //           >
// //             Work created at moments where change becomes <span className="italic font-serif text-gray-400">inevitable by design.</span>
// //           </motion.h2>
// //         </div>

// //         {/* Floating View Button (Video-এর মতো কার্সারের সাথে ঘুরবে) */}
// //         <AnimatePresence>
// //           {hoveringId && (
// //             <motion.div
// //               className="fixed top-0 left-0 w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold pointer-events-none z-50 shadow-xl"
// //               initial={{ scale: 0, opacity: 0 }}
// //               animate={{ 
// //                 scale: 1, 
// //                 opacity: 1,
// //                 x: mousePos.x - 48, 
// //                 y: mousePos.y - 48 
// //               }}
// //               exit={{ scale: 0, opacity: 0 }}
// //               transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.5 }}
// //             >
// //               VIEW CASE
// //             </motion.div>
// //           )}
// //         </AnimatePresence>

// //         {/* Works Grid */}
// //         <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-20">
// //           {projects.map((project) => (
// //             <motion.div 
// //               key={project.id} 
// //               className={`${project.gridSpan} group relative`}
// //               initial={{ opacity: 0, y: 40 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               viewport={{ once: true }}
// //               onMouseMove={handleMouseMove}
// //               onMouseEnter={() => setHoveringId(project.id)}
// //               onMouseLeave={() => setHoveringId(null)}
// //             >
// //               {/* Image Container */}
// //               <div className="relative overflow-hidden bg-gray-100 mb-8 aspect-[16/10]">
// //                 <motion.img
// //                   src={project.image}
// //                   alt={project.title}
// //                   whileHover={{ scale: 1.05 }}
// //                   transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
// //                   className="w-full h-full object-cover"
// //                 />
// //               </div>

// //               {/* Project Details */}
// //               <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
// //                 <div className="max-w-md">
// //                   <h3 className="text-2xl font-bold tracking-tighter mb-2">{project.title}</h3>
// //                   <p className="text-gray-600 text-lg leading-relaxed">{project.description}</p>
// //                 </div>
                
// //                 {/* Tags Grid */}
// //                 <div className="flex flex-wrap gap-2 md:max-w-[300px] md:justify-end">
// //                   {project.tags.map((tag, index) => (
// //                     <span 
// //                       key={index} 
// //                       className="text-[10px] font-bold border border-gray-200 px-3 py-1 rounded-full text-gray-400 uppercase tracking-widest hover:bg-black hover:text-white transition-colors duration-300"
// //                     >
// //                       {tag}
// //                     </span>
// //                   ))}
// //                 </div>
// //               </div>
// //             </motion.div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Works;


// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import protfolio from "../assets/Web Portfolio-01.jpg.jpeg";
// import protfolio1 from "../assets/Web Portfolio-02.jpg.jpeg";
// import protfolio2 from "../assets/Web Portfolio-03.jpg.jpeg";

// const Works = () => {
//   const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
//   const [hoveringId, setHoveringId] = useState(null);

//   const projects = [
//     {
//       id: 1,
//       title: "SOROS",
//       description: "Designing trust for decentralized commerce.",
//       tags: ["Brand Strategy", "Naming", "Brand Identity", "Logo", "Guidelines", "Product Design", "Digital Experience", "Design Systems", "Web", "Engineering"],
//       image: protfolio,
//       gridSpan: "col-span-1"
//     },
//     {
//       id: 2,
//       title: "Robotic Implant Center",
//       description: "Positioning robotic dentistry as a category leader.",
//       tags: ["Web Design", "Engineering", "Motion"],
//       image: protfolio1,
//       gridSpan: "col-span-1"
//     },
//     {
//       id: 3,
//       title: "Utica Public Library",
//       description: "Rebranding clarity for a historic institution.",
//       tags: ["Research", "Brand Identity", "Logo", "Campaigns"],
//       image: protfolio2,
//       gridSpan: "md:col-span-2"
//     },
//   ];

//   const handleMouseMove = (e) => {
//     setMousePos({ x: e.clientX, y: e.clientY });
//   };

//   return (
//     <section className="py-20 px-6 md:px-12 bg-white cursor-auto">
//       <div className="max-w-7xl mx-auto">

//         {/* Header */}
//         <div className="mb-16">
//           <motion.p 
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-4"
//           >
//             Case Studies
//           </motion.p>

//           <motion.h2 
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 }}
//             className="text-4xl md:text-6xl font-medium text-gray-900 leading-tight max-w-4xl"
//           >
//             Work created at moments where change becomes{" "}
//             <span className="italic text-gray-400">inevitable by design.</span>
//           </motion.h2>
//         </div>

//         {/* Cursor */}
//         <AnimatePresence>
//           {hoveringId && (
//             <motion.div
//               className="fixed top-0 left-0 w-24 h-24 bg-black rounded-full flex items-center justify-center text-white text-xs font-bold pointer-events-none z-50 shadow-xl"
//               initial={{ scale: 0, opacity: 0 }}
//               animate={{ 
//                 scale: 1, 
//                 opacity: 1,
//                 x: mousePos.x - 48, 
//                 y: mousePos.y - 48 
//               }}
//               exit={{ scale: 0, opacity: 0 }}
//               transition={{ type: "spring", stiffness: 180, damping: 18 }}
//             >
//               VIEW CASE
//             </motion.div>
//           )}
//         </AnimatePresence>

//         {/* Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-20">
//           {projects.map((project) => (
//             <motion.div 
//               key={project.id} 
//               className={`${project.gridSpan} group relative`}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               onMouseMove={handleMouseMove}
//               onMouseEnter={() => setHoveringId(project.id)}
//               onMouseLeave={() => setHoveringId(null)}
//             >
//               {/* Image */}
//               <div className="relative overflow-hidden bg-gray-100 mb-6 aspect-[16/10]">
//                 <motion.img
//                   src={project.image}
//                   alt={project.title}
//                   whileHover={{ scale: 1.05 }}
//                   transition={{ duration: 0.6 }}
//                   className="w-full h-full object-cover"
//                 />
//               </div>

//               {/* 🔥 EXACT STYLE TEXT (your screenshot মতো) */}
//               <div>
//                 {/* Title */}
//                 <h3 className="text-2xl font-semibold text-gray-900 mb-2">
//                   {project.title}
//                 </h3>

//                 {/* One line description */}
//                 <p className="text-gray-500 text-base mb-4">
//                   {project.description}
//                 </p>

//                 {/* Tags (pill style like screenshot) */}
//                 <div className="flex flex-wrap gap-2">
//                   {project.tags.map((tag, index) => (
//                     <span
//                       key={index}
//                       className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-md"
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
//     </section>
//   );
// };

// export default Works;

// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import protfolio from "../assets/Web Portfolio-01.jpg.jpeg";
// import protfolio1 from "../assets/Web Portfolio-02.jpg.jpeg";
// import protfolio2 from "../assets/Web Portfolio-03.jpg.jpeg";

// const Works = () => {
//   const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
//   const [hoveringId, setHoveringId] = useState(null);

//   const projects = [
//     {
//       id: 1,
//       title: "CLIKTRO",
//       description: "Designing trust for decentralized commerce.",
//       tags: ["Brand Strategy", "Naming", "Brand Identity", "UI/UX"],
//       image: protfolio,
//       gridSpan: "col-span-1",
//     },
//     {
//       id: 2,
//       title: "Robotic Implant Center",
//       description: "Positioning robotic dentistry as a category leader.",
//       tags: ["Web Design", "Engineering", "Motion"],
//       image: protfolio1,
//       gridSpan: "col-span-1",
//     },
//     {
//       id: 3,
//       title: "Utica Public Library",
//       description: "Rebranding clarity for a historic institution.",
//       tags: ["Research", "Brand Identity", "Logo", "Campaigns"],
//       image: protfolio2,
//       gridSpan: "md:col-span-2",
//     },
//   ];

//   const handleMouseMove = (e) => {
//     setMousePos({ x: e.clientX, y: e.clientY });
//   };

//   return (
//     <section className="py-24 px-6 md:px-12 bg-[#f2f2f2] relative">
//       <div className="max-w-7xl mx-auto">

//         {/* 🔥 HEADER */}
//         <div className="mb-20">
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             className="text-xs tracking-[0.3em] uppercase text-gray-500 mb-4"
//           >
//             Case Studies
//           </motion.p>

//           <motion.h2
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="text-4xl md:text-6xl font-medium text-gray-900 leading-tight max-w-4xl"
//           >
//             Work created at moments where change becomes{" "}
//             <span className="italic text-gray-400">
//               inevitable by design.
//             </span>
//           </motion.h2>
//         </div>

//         {/* 🔥 PREMIUM CURSOR */}
//         <AnimatePresence>
//           {hoveringId && (
//             <motion.div
//               className="fixed top-0 left-0 pointer-events-none z-50"
//               initial={{ scale: 0, opacity: 0 }}
//               animate={{
//                 scale: 1,
//                 opacity: 1,
//                 x: mousePos.x - 50,
//                 y: mousePos.y - 50,
//               }}
//               exit={{ scale: 0, opacity: 0 }}
//               transition={{
//                 type: "spring",
//                 stiffness: 220,
//                 damping: 18,
//               }}
//             >
//               <div className="w-24 h-24 bg-black text-white rounded-full flex items-center justify-center text-[11px] tracking-widest font-medium shadow-xl">
//                 VIEW
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>

//         {/* 🔥 GRID */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
//           {projects.map((project) => (
//             <motion.div
//               key={project.id}
//               className={`${project.gridSpan} group`}
//               initial={{ opacity: 0, y: 60 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.7 }}
//               onMouseMove={handleMouseMove}
//               onMouseEnter={() => setHoveringId(project.id)}
//               onMouseLeave={() => setHoveringId(null)}
//             >
//               {/* IMAGE */}
//               <div className="overflow-hidden rounded-xl mb-6">
//                 <motion.img
//                   src={project.image}
//                   alt={project.title}
//                   className="w-full h-full object-cover aspect-[16/10]"
//                   whileHover={{ scale: 1.08 }}
//                   transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
//                 />
//               </div>

//               {/* 🔥 TEXT (premium spacing) */}
//               <div className="space-y-3">
//                 <h3 className="text-xl font-semibold text-gray-900 tracking-tight">
//                   {project.title}
//                 </h3>

//                 <p className="text-gray-500 text-sm leading-relaxed max-w-md">
//                   {project.description}
//                 </p>

//                 {/* 🔥 TAGS (soft pill style) */}
//                 <div className="flex flex-wrap gap-2 pt-2">
//                   {project.tags.map((tag, index) => (
//                     <span
//                       key={index}
//                       className="text-[10px] text-gray-500 bg-white px-3 py-1 rounded-full border border-gray-200 hover:bg-black hover:text-white transition duration-300"
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
//     </section>
//   );
// };

// export default Works;


// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import protfolio from "../assets/Web Portfolio-01.jpg.jpeg";
// import protfolio1 from "../assets/Web Portfolio-02.jpg.jpeg";
// import protfolio2 from "../assets/Web Portfolio-03.jpg.jpeg";

// const Works = () => {
//   const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
//   const [hoveringId, setHoveringId] = useState(null);

//   const projects = [
//     {
//       id: 1,
//       title: "CLIKTRO",
//       description: "Designing trust for decentralized commerce.",
//       tags: ["Brand Strategy", "Naming", "Brand Identity", "UI/UX"],
//       image: protfolio,
//       gridSpan: "col-span-1",
//     },
//     {
//       id: 2,
//       title: "Robotic Implant Center",
//       description: "Positioning robotic dentistry as a category leader.",
//       tags: ["Web Design", "Engineering", "Motion"],
//       image: protfolio1,
//       gridSpan: "col-span-1",
//     },
//     {
//       id: 3,
//       title: "Utica Public Library",
//       description: "Rebranding clarity for a historic institution.",
//       tags: ["Research", "Brand Identity", "Logo", "Campaigns"],
//       image: protfolio2,
//       gridSpan: "md:col-span-2",
//     },
//   ];

//   const handleMouseMove = (e) => {
//     setMousePos({ x: e.clientX, y: e.clientY });
//   };

//   return (
//     <section className="py-24 px-6 md:px-12 bg-[#f2f2f2] relative">
//       <div className="max-w-7xl mx-auto">

//         {/* 🔥 HEADER */}
//         <div className="mb-20">
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             className="text-xs tracking-[0.3em] uppercase text-gray-500 mb-4"
//           >
//             Case Studies
//           </motion.p>

//           <motion.h2
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="text-4xl md:text-6xl font-medium text-gray-900 leading-tight max-w-4xl"
//           >
//             Work created at moments where change becomes{" "}
//             <span className="italic text-gray-400">
//               inevitable by design.
//             </span>
//           </motion.h2>
//         </div>

//         {/* 🔥 UPDATED BUTTON CURSOR (as per button.png) */}
//         <AnimatePresence>
//           {hoveringId && (
//             <motion.div
//               className="fixed top-0 left-0 pointer-events-none z-50"
//               initial={{ scale: 0.8, opacity: 0 }}
//               animate={{
//                 scale: 1,
//                 opacity: 1,
//                 x: mousePos.x - 70, // মাউসের পজিশন অনুযায়ী সেন্টার করা
//                 y: mousePos.y - 25,
//               }}
//               exit={{ scale: 0.8, opacity: 0 }}
//               transition={{
//                 type: "spring",
//                 stiffness: 250,
//                 damping: 20,
//                 mass: 0.5
//               }}
//             >
//               {/* Button styling based on button.png */}
//               <div className="bg-[#0000FF] text-white px-6 py-3 font-medium text-sm shadow-2xl flex items-center justify-center whitespace-nowrap border border-blue-400/20">
//                 View Case Study
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>

//         {/* 🔥 GRID */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
//           {projects.map((project) => (
//             <motion.div
//               key={project.id}
//               className={`${project.gridSpan} group`}
//               initial={{ opacity: 0, y: 60 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.7 }}
//               onMouseMove={handleMouseMove}
//               onMouseEnter={() => setHoveringId(project.id)}
//               onMouseLeave={() => setHoveringId(null)}
//             >
//               {/* IMAGE */}
//               <div className="overflow-hidden rounded-xl mb-6">
//                 <motion.img
//                   src={project.image}
//                   alt={project.title}
//                   className="w-full h-full object-cover aspect-[16/10]"
//                   whileHover={{ scale: 1.08 }}
//                   transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
//                 />
//               </div>

//               {/* 🔥 TEXT (premium spacing) */}
//               <div className="space-y-3">
//                 <h3 className="text-xl font-semibold text-gray-900 tracking-tight">
//                   {project.title}
//                 </h3>

//                 <p className="text-gray-500 text-sm leading-relaxed max-w-md">
//                   {project.description}
//                 </p>

//                 {/* 🔥 TAGS (soft pill style) */}
//                 <div className="flex flex-wrap gap-2 pt-2">
//                   {project.tags.map((tag, index) => (
//                     <span
//                       key={index}
//                       className="text-[10px] text-gray-500 bg-white px-3 py-1 rounded-full border border-gray-200 hover:bg-black hover:text-white transition duration-300"
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
//     </section>
//   );
// };

// export default Works;


// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// // Assets - আপনার পাথ অনুযায়ী ঠিক আছে
// import protfolio from "../assets/Web Portfolio-01.jpg.jpeg";
// import protfolio1 from "../assets/Web Portfolio-02.jpg.jpeg";
// import protfolio2 from "../assets/Web Portfolio-03.jpg.jpeg";

// const Works = () => {
//   const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
//   const [hoveringId, setHoveringId] = useState(null);

//   const projects = [
//     {
//       id: 1,
//       title: "CLIKTRO",
//       description: "Designing trust for decentralized commerce.",
//       tags: ["Brand Strategy", "Naming", "Brand Identity", "UI/UX"],
//       image: protfolio,
//       gridSpan: "col-span-1",
//       link: "https://your-demo-link-1.com", // এখানে আপনার ১ম লিংক দিন
//     },
//     {
//       id: 2,
//       title: "Robotic Implant Center",
//       description: "Positioning robotic dentistry as a category leader.",
//       tags: ["Web Design", "Engineering", "Motion"],
//       image: protfolio1,
//       gridSpan: "col-span-1",
//       link: "https://your-demo-link-2.com", // এখানে আপনার ২য় লিংক দিন
//     },
//     {
//       id: 3,
//       title: "Utica Public Library",
//       description: "Rebranding clarity for a historic institution.",
//       tags: ["Research", "Brand Identity", "Logo", "Campaigns"],
//       image: protfolio2,
//       gridSpan: "md:col-span-2",
//       link: "https://your-demo-link-3.com", // এখানে আপনার ৩য় লিংক দিন
//     },
//   ];

//   const handleMouseMove = (e) => {
//     setMousePos({ x: e.clientX, y: e.clientY });
//   };

//   return (
//     <section id="works" className="py-24 px-6 md:px-12 bg-[#f2f2f2] relative">
//       <div className="max-w-7xl mx-auto">

//         {/* 🔥 HEADER */}
//         <div className="mb-20">
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-xs tracking-[0.3em] uppercase text-gray-500 mb-4"
//           >
//             Case Studies
//           </motion.p>

//           <motion.h2
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="text-4xl md:text-6xl font-medium text-gray-900 leading-tight max-w-4xl"
//           >
//             Work created at moments where change becomes{" "}
//             <span className="italic text-gray-400">
//               inevitable by design.
//             </span>
//           </motion.h2>
//         </div>

//         {/* 🔥 UPDATED CURSOR (Smaller & Rounded) */}
//         <AnimatePresence>
//           {hoveringId && (
//             <motion.div
//               className="fixed top-0 left-0 pointer-events-none z-50 hidden md:block" // মোবাইলে কার্সার হাইড থাকবে
//               initial={{ scale: 0.8, opacity: 0 }}
//               animate={{
//                 scale: 1,
//                 opacity: 1,
//                 x: mousePos.x - 60, 
//                 y: mousePos.y - 20,
//               }}
//               exit={{ scale: 0.8, opacity: 0 }}
//               transition={{
//                 type: "spring",
//                 stiffness: 250,
//                 damping: 20,
//                 mass: 0.5
//               }}
//             >
//               <div className="bg-[#000000] text-white px-4 py-2 rounded-xl font-medium text-[11px] shadow-2xl flex items-center justify-center whitespace-nowrap border border-blue-400/20 tracking-wider">
//                 View Case Study
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>

//         {/* 🔥 GRID */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
//           {projects.map((project) => (
//             <motion.a
//               key={project.id}
//               href={project.link}
//               target="_blank"
//               rel="noopener noreferrer"
//               className={`${project.gridSpan} group block no-underline`}
//               initial={{ opacity: 0, y: 60 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.7 }}
//               onMouseMove={handleMouseMove}
//               onMouseEnter={() => setHoveringId(project.id)}
//               onMouseLeave={() => setHoveringId(null)}
//             >
//               {/* IMAGE (Rounded-xl) */}
//               <div className="overflow-hidden rounded-xl mb-6">
//                 <motion.img
//                   src={project.image}
//                   alt={project.title}
//                   className="w-full h-full object-cover aspect-[16/10]"
//                   whileHover={{ scale: 1.08 }}
//                   transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
//                 />
//               </div>

//               {/* 🔥 TEXT SECTION */}
//               <div className="space-y-3">
//                 <h3 className="text-xl font-semibold text-gray-900 tracking-tight">
//                   {project.title}
//                 </h3>

//                 <p className="text-gray-500 text-sm leading-relaxed max-w-md">
//                   {project.description}
//                 </p>

//                 {/* 🔥 TAGS */}
//                 <div className="flex flex-wrap gap-2 pt-2">
//                   {project.tags.map((tag, index) => (
//                     <span
//                       key={index}
//                       className="text-[10px] text-gray-500 bg-white px-3 py-1 rounded-full border border-gray-200 group-hover:bg-black group-hover:text-white transition duration-300"
//                     >
//                       {tag}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </motion.a>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// };

// export default Works;



// Square 


// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// // Assets
// import protfolio from "../assets/Web Portfolio-01.jpg.jpeg";
// import protfolio1 from "../assets/Web Portfolio-02.jpg.jpeg";
// import protfolio2 from "../assets/Web Portfolio-03.jpg.jpeg";

// const Works = () => {
//   const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
//   const [hoveringId, setHoveringId] = useState(null);

//   const projects = [
//     {
//       id: 1,
//       title: "CLIKTRO",
//       description: "Designing trust for decentralized commerce.",
//       tags: ["Brand Strategy", "Naming", "Brand Identity", "UI/UX"],
//       image: protfolio,
//       gridSpan: "col-span-1",
//       link: "https://your-demo-link-1.com", 
//     },
//     {
//       id: 2,
//       title: "Robotic Implant Center",
//       description: "Positioning robotic dentistry as a category leader.",
//       tags: ["Web Design", "Engineering", "Motion"],
//       image: protfolio1,
//       gridSpan: "col-span-1",
//       link: "https://your-demo-link-2.com",
//     },
//     {
//       id: 3,
//       title: "Utica Public Library",
//       description: "Rebranding clarity for a historic institution.",
//       tags: ["Research", "Brand Identity", "Logo", "Campaigns"],
//       image: protfolio2,
//       gridSpan: "md:col-span-2",
//       link: "https://your-demo-link-3.com",
//     },
//   ];

//   const handleMouseMove = (e) => {
//     setMousePos({ x: e.clientX, y: e.clientY });
//   };

//   return (
//     <section id="works" className="py-24 px-6 md:px-12 bg-[#f2f2f2] relative">
//       <div className="max-w-7xl mx-auto">

//         {/* 🔥 HEADER */}
//         <div className="mb-20">
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-xs tracking-[0.3em] uppercase text-gray-500 mb-4"
//           >
//             Case Studies
//           </motion.p>

//           <motion.h2
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="text-4xl md:text-6xl font-medium text-gray-900 leading-tight max-w-4xl"
//           >
//             Work created at moments where change becomes{" "}
//             <span className="italic text-gray-400">
//               inevitable by design.
//             </span>
//           </motion.h2>
//         </div>

//         {/* 🔥 CURSOR BUTTON (Rounded Removed) */}
//         <AnimatePresence>
//           {hoveringId && (
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
//               transition={{
//                 type: "spring",
//                 stiffness: 250,
//                 damping: 20,
//                 mass: 0.5
//               }}
//             >
//               {/* rounded-none used for sharp corners */}
//               <div className="bg-[#000000] text-white px-4 py-2 rounded-none font-medium text-[11px] shadow-2xl flex items-center justify-center whitespace-nowrap border border-blue-400/20 tracking-wider">
//                 View Case Study
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>

//         {/* 🔥 GRID */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
//           {projects.map((project) => (
//             <motion.a
//               key={project.id}
//               href={project.link}
//               target="_blank"
//               rel="noopener noreferrer"
//               className={`${project.gridSpan} group block no-underline`}
//               initial={{ opacity: 0, y: 60 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.7 }}
//               onMouseMove={handleMouseMove}
//               onMouseEnter={() => setHoveringId(project.id)}
//               onMouseLeave={() => setHoveringId(null)}
//             >
//               {/* IMAGE (rounded-none used) */}
//               <div className="overflow-hidden rounded-none mb-6">
//                 <motion.img
//                   src={project.image}
//                   alt={project.title}
//                   className="w-full h-full object-cover aspect-[16/10]"
//                   whileHover={{ scale: 1.08 }}
//                   transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
//                 />
//               </div>

//               {/* 🔥 TEXT SECTION */}
//               <div className="space-y-3">
//                 <h3 className="text-xl font-semibold text-gray-900 tracking-tight">
//                   {project.title}
//                 </h3>

//                 <p className="text-gray-500 text-sm leading-relaxed max-w-md">
//                   {project.description}
//                 </p>

//                 {/* 🔥 TAGS (rounded-none used) */}
//                 <div className="flex flex-wrap gap-2 pt-2">
//                   {project.tags.map((tag, index) => (
//                     <span
//                       key={index}
//                       className="text-[10px] text-gray-500 bg-white px-3 py-1 rounded-none border border-gray-200 group-hover:bg-black group-hover:text-white transition duration-300"
//                     >
//                       {tag}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </motion.a>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// };

// export default Works;


// Alhamdulliah Final Rounded 




import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Assets - আপনার পাথ অনুযায়ী ঠিক আছে
import protfolio from "../assets/Web Portfolio-01.jpg.jpeg";
import protfolio1 from "../assets/Web Portfolio-02.jpg.jpeg";
import protfolio2 from "../assets/Web Portfolio-03.jpg.jpeg";

const Works = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hoveringId, setHoveringId] = useState(null);

  const projects = [
    {
      id: 1,
      title: "CLIKTRO",
      description: "Designing trust for decentralized commerce.",
      tags: ["Brand Strategy", "Naming", "Brand Identity", "UI/UX"],
      image: protfolio,
      gridSpan: "col-span-1",
      link: "https://your-demo-link-1.com", // এখানে আপনার ১ম লিংক দিন
    },
    {
      id: 2,
      title: "Robotic Implant Center",
      description: "Positioning robotic dentistry as a category leader.",
      tags: ["Web Design", "Engineering", "Motion"],
      image: protfolio1,
      gridSpan: "col-span-1",
      link: "https://your-demo-link-2.com", // এখানে আপনার ২য় লিংক দিন
    },
    {
      id: 3,
      title: "Utica Public Library",
      description: "Rebranding clarity for a historic institution.",
      tags: ["Research", "Brand Identity", "Logo", "Campaigns"],
      image: protfolio2,
      gridSpan: "md:col-span-2",
      link: "https://outfiro.netlify.app/", // এখানে আপনার ৩য় লিংক দিন
    },
  ];

  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  return (
    <section id="works" className="py-24 px-6 md:px-12 bg-[#f2f2f2] relative">
      <div className="max-w-7xl mx-auto">

        {/* 🔥 HEADER */}
        <div className="mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs tracking-[0.3em] uppercase text-gray-500 mb-4"
          >
            Case Studies
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-medium text-gray-900 leading-tight max-w-4xl"
          >
            Work created at moments where change becomes{" "}
            <span className="italic text-gray-400">
              inevitable by design.
            </span>
          </motion.h2>
        </div>

        {/* 🔥 UPDATED CURSOR (Smaller & Rounded) */}
        <AnimatePresence>
          {hoveringId && (
            <motion.div
              className="fixed top-0 left-0 pointer-events-none z-50 hidden md:block" // মোবাইলে কার্সার হাইড থাকবে
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{
                scale: 1,
                opacity: 1,
                x: mousePos.x - 60, 
                y: mousePos.y - 20,
              }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{
                type: "spring",
                stiffness: 250,
                damping: 20,
                mass: 0.5
              }}
            >
              <div className="bg-[#000000] text-white px-4 py-2 rounded-xl font-medium text-[11px] shadow-2xl flex items-center justify-center whitespace-nowrap border border-blue-400/20 tracking-wider">
                View Case Study
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* 🔥 GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
          {projects.map((project) => (
            <motion.a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`${project.gridSpan} group block no-underline`}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setHoveringId(project.id)}
              onMouseLeave={() => setHoveringId(null)}
            >
              {/* IMAGE (Rounded-xl) */}
              <div className="overflow-hidden rounded-xl mb-6">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover aspect-[16/10]"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>

              {/* 🔥 TEXT SECTION */}
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-gray-900 tracking-tight">
                  {project.title}
                </h3>

                <p className="text-gray-500 text-sm leading-relaxed max-w-md">
                  {project.description}
                </p>

                {/* 🔥 TAGS */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-[10px] text-gray-500 bg-white px-3 py-1 rounded-full border border-gray-200 group-hover:bg-black group-hover:text-white transition duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Works;