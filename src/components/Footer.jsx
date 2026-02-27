import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa'
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const Footer = () => {
  const footerLinks = {
    company: [
      { name: 'About', href: '#' },
      { name: 'Terms of Use', href: '#' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'How it Works', href: '#' },
      { name: 'Contact Us', href: '#' },
    ],
    getHelp: [
      { name: 'Support Carrer', href: '#' },
      { name: '24h Service', href: '#' },
      { name: 'Quick Chat', href: '#' },
    ],
    support: [
      { name: 'FAQ', href: '#' },
      { name: 'Policy', href: '#' },
      { name: 'Business', href: '#' },
    ],
    contact: [
      { name: 'WhatsApp', href: '#' },
      { name: 'Support 24', href: '#' },
    ],
  }

  return (
    <motion.footer  id="footer"
      variants={fadeIn('up', 0.2)}
      initial="hidden"
      whileInView="show"
      className="bg-gray-50"
    >
      <div className="section-container">
        <motion.div 
          variants={fadeIn('up', 0.3)}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12"
        >
          {/* Brand Column */}
          <motion.div 
            variants={fadeIn('right', 0.4)}
            className="lg:col-span-4"
          >
            <motion.div 
              variants={fadeIn('down', 0.5)}
              className="flex items-center gap-1 mb-6"
            >
              <div className="w-4 h-4 bg-blue-600 rounded-full opacity-75"></div>
              <div className="w-4 h-4 bg-red-500 rounded-full -ml-2"></div>
              <span className="text-xl font-medium ml-1">The Next Design</span>
            </motion.div>
            <motion.p 
              variants={fadeIn('up', 0.6)}
              className="text-gray-600 mb-6"
            >
              The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times.
            </motion.p>
            <motion.div 
              variants={fadeIn('up', 0.7)}
              className="flex gap-4"
            >
              <motion.a 
                whileHover={{ scale: 1.1 }}
                href="#" 
                className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-colors"
              >
                <FaFacebookF className="w-5 h-5" />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.1 }}
                href="#" 
                className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-400 hover:text-white transition-colors"
              >
                <FaTwitter className="w-5 h-5" />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.1 }}
                href="#" 
                className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-700 hover:text-white transition-colors"
              >
                <FaLinkedinIn className="w-5 h-5" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Links Columns */}
          <motion.div 
            variants={fadeIn('left', 0.4)}
            className="lg:col-span-8"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
                <motion.div 
                  key={category}
                  variants={fadeIn('up', 0.3 * (categoryIndex + 1))}
                >
                  <motion.h3 
                    variants={textVariant(0.2)}
                    className="text-lg font-medium mb-4"
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </motion.h3>
                  <motion.ul 
                    variants={fadeIn('up', 0.4)}
                    className="space-y-3"
                  >
                    {links.map((link, index) => (
                      <motion.li 
                        key={index}
                        variants={fadeIn('up', 0.1 * (index + 1))}
                      >
                        <motion.a 
                          whileHover={{ x: 5 }}
                          href={link.href} 
                          className="text-gray-600 hover:text-gray-900"
                        >
                          {link.name}
                        </motion.a>
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <motion.div 
          variants={fadeIn('up', 0.8)}
          className="border-t border-gray-200 mt-12 pt-8"
        >
          <motion.div 
            variants={fadeIn('up', 0.9)}
            className="flex flex-col md:flex-row justify-between items-center gap-4"
          >
            <motion.p 
              variants={fadeIn('right', 1.0)}
              className="text-gray-600 text-sm"
            >
              Copyright © {new Date().getFullYear()} Md Shoaib
            </motion.p>
            <motion.p 
              variants={fadeIn('left', 1.0)}
              className="text-gray-600 text-sm"
            >
              Created by Md Shoaib
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  )
}

export default Footer




// import React from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";

// const quickLinks = [
//   { label: "Home", to: "/" },
//   { label: "About", to: "/about" },
//   { label: "Services", to: "/services" },
//   { label: "Contact", to: "/contact" },
// ];

// const socials = [
//   { label: "LinkedIn", href: "#" },
//   { label: "Instagram", href: "#" },
//   { label: "Dribbble", href: "#" },
//   { label: "Behance", href: "#" },
// ];

// export default function Footer() {
//   const year = new Date().getFullYear();

//   return (
//     <footer className="relative bg-black text-white overflow-hidden">

//       {/* Background Gradient Glow (Updated to Emerald Theme) */}
//       <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-teal-500/5 to-transparent pointer-events-none" />

//       <div className="relative z-10 mx-auto max-w-7xl px-6 py-20">

//         {/* Main Grid */}
//         <div className="grid gap-16 md:grid-cols-3">

//           {/* Brand Section */}
//           <div>
//             <div className="flex items-center gap-3">
//               <div className="h-11 w-11 flex items-center justify-center rounded-2xl border border-black/10 bg-white text-black font-semibold shadow-sm">
//                 TS
//               </div>
//               <h2 className="font-semibold text-white leading-tight">
//                 TawakkulStudio
//               </h2>
//             </div>

//             <p className="mt-5 text-sm text-white/60 leading-relaxed max-w-sm">
//               We craft minimal, high-performance digital experiences for
//               startups and modern businesses. Clean design, smooth interaction,
//               measurable growth.
//             </p>

//             {/* Social Links */}
//             <div className="mt-6 flex flex-wrap gap-3">
//               {socials.map((s) => (
//                 <motion.a
//                   key={s.label}
//                   href={s.href}
//                   whileHover={{ y: -4 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs text-white/70 hover:text-white hover:border-white/20 transition"
//                 >
//                   {s.label}
//                 </motion.a>
//               ))}
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className="text-sm font-semibold tracking-wide text-white/80 uppercase">
//               Quick Links
//             </h3>

//             <ul className="mt-6 space-y-3">
//               {quickLinks.map((link) => (
//                 <li key={link.to}>
//                   <motion.div whileHover={{ x: 5 }}>
//                     <Link
//                       to={link.to}
//                       className="text-sm text-white/60 hover:text-white transition"
//                     >
//                       {link.label}
//                     </Link>
//                   </motion.div>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* CTA Section */}
//           <div>
//             <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
//               <h3 className="text-lg font-semibold">
//                 Let’s build your next project.
//               </h3>

//               <p className="mt-3 text-sm text-white/60">
//                 Ready to elevate your brand and website with modern design and
//                 smooth motion?
//               </p>

//               <motion.div
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.97 }}
//                 className="mt-6"
//               >
//                 {/* <Link
//                   to="/contact"
//                   className="inline-flex items-center justify-center 
//                   rounded-xl 
//                   bg-gradient-to-r from-emerald-400 via-teal-400 to-sky-400 
//                   px-6 py-3 text-sm font-semibold text-slate-900 
//                   shadow-lg shadow-emerald-500/20"
//                 > */}
//                 <Link
//                   to="/contact"
//                   className="inline-flex items-center justify-center 
//                   rounded-xl 
//                   bg-white
//                   px-6 py-3 text-sm font-semibold text-slate-900 
//                   shadow-lg shadow-emerald-500/20"
//                 >
//                   Get Started
//                 </Link>
//               </motion.div>
//             </div>
//           </div>
//         </div>

//         {/* Divider */}
//         <div className="mt-16 border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">

//           <p className="text-xs text-white/50">
//             © {year} Ts. All rights reserved.
//           </p>

//           <p className="text-xs text-white/40">
//             Built with React • Tailwind CSS • Framer Motion
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// }
