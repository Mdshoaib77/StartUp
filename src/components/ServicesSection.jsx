// import React from 'react'
// import { BsStack } from 'react-icons/bs'
// import { HiLightBulb } from 'react-icons/hi'
// import { FiSettings } from 'react-icons/fi'
// import { BiTime } from 'react-icons/bi'
// import { motion } from "framer-motion";
// import { fadeIn, textVariant } from "../utils/motion";

// const ServicesSection = () => {
//   const services = [
//     {
//       icon: <BsStack className="w-8 h-8 text-indigo-600" />,
//       title: "Web Design",
//       description: "One for all and all for one, Muskehounds are always ready.",
//       link: "#learn-more"
//     },
//     {
//       icon: <HiLightBulb className="w-8 h-8 text-amber-400" />,
//       title: "Ad-Creatives", 
//       description: "Alphabet Village and the subline of her own road.",
//       link: "#learn-more"
//     },
//     {
//       icon: <FiSettings className="w-8 h-8 text-red-400" />,
//       title: "Automation",
//       description: "Little Blind Text should turn around and return.",
//       link: "#learn-more"
//     },
//     {
//       icon: <BiTime className="w-8 h-8 text-cyan-400" />,
//       title: "Infographics",
//       description: "Nothing the copy said could convince her.",
//       link: "#learn-more"
//     }
//   ]

//   return (
//     <section id="services" className="py-20 container mx-auto px-4 sm:px-6 lg:px-8">
//      <motion.div 
//       variants={fadeIn('up', 0.3)}
//       className='flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-24'
//      >
//        {/* Header */}
//        <motion.div 
//         variants={fadeIn('right', 0.4)}
//         className="md:w-1/3"
//        >
//         <motion.h2 
//           variants={textVariant(0.2)}
//           className="text-3xl md:text-4xl font-bold mb-6 md:w-4/5"
//         >
//           Future of support with new shape
//         </motion.h2>
//         <motion.p 
//           variants={fadeIn('up', 0.5)}
//           className="text-gray-600 text-lg mb-4 md:w-4/5"
//         >
//           Discuss your goals, determine success metrics, identify problems
//         </motion.p>
//         <motion.div 
//           variants={fadeIn('up', 0.6)}
//           className="space-y-3"
//         >
//           <motion.div 
//             variants={fadeIn('right', 0.7)}
//             className="flex items-center gap-2"
//           >
//             <div className="w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center">
//               <div className="w-2.5 h-2.5 rounded-full bg-indigo-600"></div>
//             </div>
//             <span className="text-gray-600">UX design content strategy</span>
//           </motion.div>
//           <motion.div 
//             variants={fadeIn('right', 0.8)}
//             className="flex items-center gap-2"
//           >
//             <div className="w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center">
//               <div className="w-2.5 h-2.5 rounded-full bg-indigo-600"></div>
//             </div>
//             <span className="text-gray-600">Development bring</span>
//           </motion.div>
//         </motion.div>
//         <motion.button 
//           variants={fadeIn('up', 0.9)}
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           className="mt-8 bg-indigo-600 text-white px-8 py-3 cursor-pointer rounded-full hover:bg-indigo-700 transition-colors"
//         >
//           Get started
//         </motion.button>
//       </motion.div>

//       {/* Services Grid */}
//       <motion.div 
//         variants={fadeIn('left', 0.4)}
//         className="grid grid-cols-1 md:grid-cols-2 gap-8"
//       >
//         {services.map((service, index) => (
//           <motion.div 
//             key={index}
//             variants={fadeIn('up', 0.3 * (index + 1))}
//             whileHover={{ scale: 1.05 }}
//             className="bg-white max-w-72 cursor-pointer rounded-2xl p-6 hover:shadow-xl transition-shadow duration-300"
//           >
//             <motion.div 
//               variants={fadeIn('down', 0.4 * (index + 1))}
//               className="mb-4"
//             >
//               {service.icon}
//             </motion.div>
//             <motion.h3 
//               variants={textVariant(0.3)}
//               className="text-xl font-semibold mb-2"
//             >
//               {service.title}
//             </motion.h3>
//             <motion.p 
//               variants={fadeIn('up', 0.5 * (index + 1))}
//               className="text-gray-600 mb-4"
//             >
//               {service.description}
//             </motion.p>
//             <motion.a 
//               variants={fadeIn('up', 0.6 * (index + 1))}
//               href={service.link}
//               className="text-indigo-600 font-medium hover:text-indigo-700 transition-colors"
//             >
//               LEARN MORE
//             </motion.a>
//           </motion.div>
//         ))}
//       </motion.div>
//      </motion.div>
//     </section>
//   )
// }

// export default ServicesSection 

// import React from "react";
// import { BsStack } from "react-icons/bs";
// import { HiLightBulb } from "react-icons/hi";
// import { FiSettings } from "react-icons/fi";
// import { BiTime } from "react-icons/bi";
// import { motion } from "framer-motion";
// import { fadeIn, textVariant } from "../utils/motion";

// const ServicesSection = () => {
//   const services = [
//     {
//       icon: <BsStack className="w-7 h-7" />,
//       title: "Brand & Web Design",
//       description:
//         "Strategic brand identity and high-converting website experiences built to position you as premium.",
//     },
//     {
//       icon: <HiLightBulb className="w-7 h-7" />,
//       title: "Creative Campaigns",
//       description:
//         "Ad creatives and visual storytelling designed to attract attention and drive real engagement.",
//     },
//     {
//       icon: <FiSettings className="w-7 h-7" />,
//       title: "Growth Automation",
//       description:
//         "Smart funnels, CRM flows, and automation systems that scale your business efficiently.",
//     },
//     {
//       icon: <BiTime className="w-7 h-7" />,
//       title: "Analytics & Optimization",
//       description:
//         "Data-backed decisions through tracking, reporting, and continuous performance optimization.",
//     },
//   ];

//   return (
//     <section
//       id="services"
//       className="bg-[#F1F2F4] py-24 md:py-32"
//     >
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">

//         <motion.div
//           variants={fadeIn("up", 0.3)}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true }}
//           className="flex flex-col md:flex-row items-start justify-between gap-16"
//         >

//           {/* LEFT CONTENT */}
//           <motion.div
//             variants={fadeIn("right", 0.4)}
//             className="md:w-1/3"
//           >
//             <motion.h2
//               variants={textVariant(0.2)}
//               className="text-4xl md:text-5xl font-bold leading-tight text-black mb-6"
//             >
//               We don’t just build.
//               <br />
//               <span className="text-black/60">We scale brands.</span>
//             </motion.h2>

//             <motion.p
//               variants={fadeIn("up", 0.5)}
//               className="text-black/60 text-lg mb-8 leading-relaxed"
//             >
//               From strategy to execution — we craft digital systems
//               that position your startup for authority, visibility,
//               and measurable growth.
//             </motion.p>

//             <motion.div
//               variants={fadeIn("up", 0.6)}
//               className="space-y-4 text-black/70"
//             >
//               <div className="flex items-center gap-3">
//                 <div className="w-3 h-3 bg-black rounded-full"></div>
//                 <span>Strategic Brand Positioning</span>
//               </div>
//               <div className="flex items-center gap-3">
//                 <div className="w-3 h-3 bg-black rounded-full"></div>
//                 <span>Conversion-Focused UX</span>
//               </div>
//               <div className="flex items-center gap-3">
//                 <div className="w-3 h-3 bg-black rounded-full"></div>
//                 <span>Performance-Driven Growth</span>
//               </div>
//             </motion.div>

//             <motion.button
//               variants={fadeIn("up", 0.7)}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="mt-10 bg-black text-white px-8 py-3 rounded-full font-medium shadow-md hover:shadow-xl transition"
//             >
//               Start Your Project
//             </motion.button>
//           </motion.div>

//           {/* RIGHT GRID */}
//           <motion.div
//             variants={fadeIn("left", 0.4)}
//             className="grid grid-cols-1 md:grid-cols-2 gap-8 md:w-2/3"
//           >
//             {services.map((service, index) => (
//               <motion.div
//                 key={index}
//                 variants={fadeIn("up", 0.2 * (index + 1))}
//                 whileHover={{ y: -6 }}
//                 className="bg-white rounded-3xl p-8 border border-black/5 shadow-sm hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-300"
//               >
//                 <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-black/5 text-black mb-6">
//                   {service.icon}
//                 </div>

//                 <h3 className="text-xl font-semibold text-black mb-3">
//                   {service.title}
//                 </h3>

//                 <p className="text-black/60 mb-6 leading-relaxed">
//                   {service.description}
//                 </p>

//                 <a
//                   href="#"
//                   className="text-sm font-semibold text-black flex items-center gap-2 group"
//                 >
//                   Learn More
//                   <span className="transition-transform group-hover:translate-x-1">
//                     →
//                   </span>
//                 </a>
//               </motion.div>
//             ))}
//           </motion.div>

//         </motion.div>

//       </div>
//     </section>
//   );
// };

// export default ServicesSection;



import React from "react";
import { BsPalette } from "react-icons/bs";
import { HiOutlineCode } from "react-icons/hi";
import { FiTrendingUp } from "react-icons/fi";
import { BiLayer } from "react-icons/bi";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const ServicesSection = () => {
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

  return (
    <section
      id="services"
      className="bg-[#F1F2F4] py-28 md:py-36"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-start justify-between gap-20"
        >

          {/* LEFT CONTENT */}
          <motion.div
            variants={fadeIn("right", 0.4)}
            className="md:w-1/3"
          >
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
              From brand foundation to scalable marketing systems —
              we provide complete creative and technical solutions
              to help your business grow with confidence.
            </motion.p>

            <motion.div
              variants={fadeIn("up", 0.6)}
              className="space-y-4 text-black/70"
            >
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 bg-black rounded-full"></div>
                <span>Strong Brand Identity</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 bg-black rounded-full"></div>
                <span>High-Converting Website</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 bg-black rounded-full"></div>
                <span>Measurable Marketing Growth</span>
              </div>
            </motion.div>

            <motion.button
              variants={fadeIn("up", 0.7)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-12 bg-black text-white px-9 py-3 rounded-full font-medium shadow-md hover:shadow-xl transition"
            >
              Let’s Build Your Brand
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
                className="bg-white rounded-3xl p-10 border border-black/5 shadow-sm hover:shadow-[0_25px_60px_rgba(0,0,0,0.07)] transition-all duration-300"
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-black/5 text-black mb-7">
                  {service.icon}
                </div>

                <h3 className="text-xl font-semibold text-black mb-4">
                  {service.title}
                </h3>

                <p className="text-black/60 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
};

export default ServicesSection;