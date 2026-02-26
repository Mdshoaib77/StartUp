// // // import React from 'react'
// // // import { motion } from "framer-motion";
// // // import { fadeIn, textVariant } from "../utils/motion";

// // // const FeaturesSection = () => {
// // //   const features = [
// // //     {
// // //       icon: "🔍", 
// // //       title: "Find out what you need",
// // //       description: "We present you a proposal and discuss nitty-gritty like"
// // //     },
// // //     {
// // //       icon: "⚙️",
// // //       title: "Work out the details", 
// // //       description: "Communication protocols apart from engagement models"
// // //     },
// // //     {
// // //       icon: "🚀",
// // //       title: "We get to work fast",
// // //       description: "Protocols apart from engage models, pricing billing"
// // //     }
// // //   ]

// // //   return (
// // //     <motion.section 
// // //       variants={fadeIn('up', 0.2)}
// // //       initial="hidden"
// // //       whileInView="show"
// // //       className="max-w-7xl mx-auto px-4 py-16"
// // //     >
// // //       <motion.div 
// // //         variants={fadeIn('up', 0.3)}
// // //         className="text-center mb-12"
// // //       >
// // //         <motion.h2 
// // //           variants={textVariant(0.2)}
// // //           className="text-3xl font-bold mb-4"
// // //         >
// // //           How can we help your business?
// // //         </motion.h2>
// // //         <motion.p 
// // //           variants={fadeIn('up', 0.4)}
// // //           className="text-gray-600"
// // //         >
// // //           When you resell besnik, you build trust and increase
// // //         </motion.p>
// // //       </motion.div>
      
// // //       <motion.div 
// // //         variants={fadeIn('up', 0.5)}
// // //         className="grid grid-cols-1 md:grid-cols-3 gap-8"
// // //       >
// // //         {features.map((feature, index) => (
// // //           <motion.div 
// // //             key={index}
// // //             variants={fadeIn('up', 0.3 * (index + 1))}
// // //             className="flex flex-col items-center p-6"
// // //           >
// // //             <motion.div 
// // //               variants={fadeIn('down', 0.4 * (index + 1))}
// // //               className="w-24 h-24 rounded-full mb-6 flex items-center justify-center" 
// // //               style={{ 
// // //                 backgroundColor: index === 0 ? '#F1EFFD' : 
// // //                                index === 1 ? '#FFE7E7' : 
// // //                                '#FFF3E4'
// // //               }}
// // //             >
// // //               <motion.div 
// // //                 variants={fadeIn('up', 0.5 * (index + 1))}
// // //                 className="text-3xl"
// // //               >
// // //                 {feature.icon}
// // //               </motion.div>
// // //             </motion.div>
// // //             <motion.h3 
// // //               variants={textVariant(0.3)}
// // //               className="text-2xl font-medium mb-3"
// // //             >
// // //               {feature.title}
// // //             </motion.h3>
// // //             <motion.p 
// // //               variants={fadeIn('up', 0.6 * (index + 1))}
// // //               className="text-gray-500 text-center"
// // //             >
// // //               {feature.description}
// // //             </motion.p>
// // //           </motion.div>
// // //         ))}
// // //       </motion.div>

// // //       <motion.div 
// // //         variants={fadeIn('up', 0.7)}
// // //         className="text-center mt-12"
// // //       >
// // //         <motion.button 
// // //           variants={fadeIn('up', 0.8)}
// // //           whileHover={{ scale: 1.05 }}
// // //           whileTap={{ scale: 0.95 }}
// // //           className="bg-blue-600 text-white cursor-pointer px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors relative"
// // //         >
// // //           Become a Partner
// // //           <div className="absolute -z-10 w-full h-full rounded-full bg-blue-600/30 blur-xl top-0 left-0"></div>
// // //         </motion.button>
// // //       </motion.div>
// // //     </motion.section>
// // //   )
// // // }

// // // export default FeaturesSection

// // import React from "react";
// // import { motion } from "framer-motion";
// // import { fadeIn, textVariant } from "../utils/motion";

// // const FeaturesSection = () => {
// //   const features = [
// //     {
// //       icon: "🎯",
// //       title: "Strategic Brand Positioning",
// //       description:
// //         "We deeply research your market, audience, and competitors to craft a brand strategy that truly differentiates you."
// //     },
// //     {
// //       icon: "💻",
// //       title: "Modern Web Experiences",
// //       description:
// //         "Conversion-focused websites built with performance, scalability, and seamless user experience at the core."
// //     },
// //     {
// //       icon: "📈",
// //       title: "Growth-Driven Marketing",
// //       description:
// //         "Data-backed marketing systems designed to increase visibility, engagement, and measurable revenue growth."
// //     }
// //   ];

// //   return (
// //     <section className="bg-[#F1F2F4] py-24">
// //       <div className="container mx-auto px-4 sm:px-6 lg:px-8">

// //         {/* Section Header */}
// //         <motion.div
// //           variants={fadeIn("up", 0.2)}
// //           initial="hidden"
// //           whileInView="show"
// //           viewport={{ once: true }}
// //           className="text-center max-w-3xl mx-auto mb-20"
// //         >
// //           <motion.h2
// //             variants={textVariant(0.3)}
// //             className="text-3xl md:text-4xl font-bold text-black mb-6"
// //           >
// //             How We Help Startups Scale Smarter
// //           </motion.h2>

// //           <motion.p
// //             variants={fadeIn("up", 0.4)}
// //             className="text-black/60 text-lg leading-relaxed"
// //           >
// //             We combine strategy, design, technology, and marketing to build
// //             powerful digital foundations that accelerate startup growth.
// //           </motion.p>
// //         </motion.div>

// //         {/* Cards */}
// //         <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

// //           {features.map((feature, index) => (
// //             <motion.div
// //               key={index}
// //               variants={fadeIn("up", 0.3 * (index + 1))}
// //               initial="hidden"
// //               whileInView="show"
// //               viewport={{ once: true }}
// //               whileHover={{ y: -8 }}
// //               className="bg-white rounded-3xl p-10 shadow-[0_10px_40px_rgba(0,0,0,0.05)] border border-black/5 transition-all"
// //             >
// //               {/* Icon Circle */}
// //               <div
// //                 className="w-16 h-16 flex items-center justify-center rounded-2xl text-2xl mb-6"
// //                 style={{
// //                   backgroundColor:
// //                     index === 0
// //                       ? "#E9E7FF"
// //                       : index === 1
// //                       ? "#FFEAEA"
// //                       : "#FFF4E6"
// //                 }}
// //               >
// //                 {feature.icon}
// //               </div>

// //               <h3 className="text-xl font-semibold text-black mb-4">
// //                 {feature.title}
// //               </h3>

// //               <p className="text-black/60 leading-relaxed">
// //                 {feature.description}
// //               </p>
// //             </motion.div>
// //           ))}

// //         </div>

// //         {/* CTA */}
// //         <motion.div
// //           variants={fadeIn("up", 0.8)}
// //           initial="hidden"
// //           whileInView="show"
// //           viewport={{ once: true }}
// //           className="text-center mt-20"
// //         >
// //           <motion.a
// //             whileHover={{ scale: 1.05 }}
// //             whileTap={{ scale: 0.95 }}
// //             href="#contact"
// //             className="inline-block bg-black text-white px-10 py-4 rounded-full font-medium shadow-lg hover:shadow-xl transition"
// //           >
// //             Start Your Growth Journey
// //           </motion.a>
// //         </motion.div>

// //       </div>
// //     </section>
// //   );
// // };

// // export default FeaturesSection;


// import React from "react";
// import { motion } from "framer-motion";

// const FeaturesSection = () => {
//   const features = [
//     {
//       title: "Brand Clarity",
//       desc: "We define positioning, messaging, and identity so your brand communicates with precision."
//     },
//     {
//       title: "Digital Excellence",
//       desc: "Web experiences built for performance, usability, and modern aesthetics."
//     },
//     {
//       title: "Growth Systems",
//       desc: "Structured marketing frameworks designed for sustainable, measurable scale."
//     }
//   ];

//   return (
//     <section className="bg-[#F1F2F4] py-32">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">

//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="max-w-3xl mb-24"
//         >
//           <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight mb-8">
//             Simple Systems.
//             <br />
//             Serious Impact.
//           </h2>

//           <p className="text-lg text-black/60 leading-relaxed">
//             We build focused digital foundations that help startups grow
//             with clarity, confidence, and long-term scalability.
//           </p>
//         </motion.div>

//         {/* Minimal Feature List */}
//         <div className="divide-y divide-black/10 border-y border-black/10">

//           {features.map((item, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.2 }}
//               viewport={{ once: true }}
//               className="py-12 grid md:grid-cols-3 gap-8 items-start"
//             >
//               {/* Number */}
//               <div className="text-black/20 text-6xl font-bold">
//                 0{index + 1}
//               </div>

//               {/* Title */}
//               <h3 className="text-xl font-semibold text-black">
//                 {item.title}
//               </h3>

//               {/* Description */}
//               <p className="text-black/60 leading-relaxed">
//                 {item.desc}
//               </p>
//             </motion.div>
//           ))}

//         </div>

//         {/* Subtle CTA */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ delay: 0.6 }}
//           viewport={{ once: true }}
//           className="mt-20"
//         >
//           <a
//             href="#contact"
//             className="inline-block text-black font-medium border-b border-black hover:opacity-70 transition"
//           >
//             Start a conversation →
//           </a>
//         </motion.div>

//       </div>
//     </section>
//   );
// };

// export default FeaturesSection;


import React from "react";
import { motion } from "framer-motion";

const FeaturesSection = () => {
  const features = [
    {
      title: "Clarity Before Creativity",
      desc: "We start with strategy. Research, positioning, and direction define everything we build."
    },
    {
      title: "Design That Converts",
      desc: "Beautiful interfaces engineered to guide users and increase measurable results."
    },
    {
      title: "Growth With Structure",
      desc: "Marketing systems built on data, testing, and long-term scalability."
    }
  ];

  return (
    <section className="bg-[#F1F2F4] py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid md:grid-cols-2 gap-20 items-start">

          {/* LEFT SIDE BIG STATEMENT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight mb-8">
              We Don’t Just Build
              <br />
              Websites.
            </h2>

            <p className="text-xl text-black/70 leading-relaxed mb-12">
              We build growth engines — combining branding, design,
              technology, and marketing into one focused ecosystem.
            </p>

            <a
              href="#contact"
              className="inline-block text-black font-semibold border-b border-black pb-1 hover:opacity-70 transition"
            >
              Let’s talk strategy →
            </a>
          </motion.div>

          {/* RIGHT SIDE STACKED FEATURES */}
          <div className="space-y-12">

            {features.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative pl-10"
              >
                {/* Vertical Line Indicator */}
                <div className="absolute left-0 top-2 w-1 h-12 bg-black rounded-full"></div>

                <h3 className="text-xl font-semibold text-black mb-3">
                  {item.title}
                </h3>

                <p className="text-black/60 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
};

export default FeaturesSection;