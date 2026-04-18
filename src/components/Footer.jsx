// // // // // import React from 'react'
// // // // // import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa'
// // // // // import { motion } from "framer-motion";
// // // // // import { fadeIn, textVariant } from "../utils/motion";

// // // // // const Footer = () => {
// // // // //   const footerLinks = {
// // // // //     company: [
// // // // //       { name: 'About', href: '#' },
// // // // //       { name: 'Terms of Use', href: '#' },
// // // // //       { name: 'Privacy Policy', href: '#' },
// // // // //       { name: 'How it Works', href: '#' },
// // // // //       { name: 'Contact Us', href: '#' },
// // // // //     ],
// // // // //     getHelp: [
// // // // //       { name: 'Support Carrer', href: '#' },
// // // // //       { name: '24h Service', href: '#' },
// // // // //       { name: 'Quick Chat', href: '#' },
// // // // //     ],
// // // // //     support: [
// // // // //       { name: 'FAQ', href: '#' },
// // // // //       { name: 'Policy', href: '#' },
// // // // //       { name: 'Business', href: '#' },
// // // // //     ],
// // // // //     contact: [
// // // // //       { name: 'WhatsApp', href: '#' },
// // // // //       { name: 'Support 24', href: '#' },
// // // // //     ],
// // // // //   }

// // // // //   return (
// // // // //     <motion.footer  id="footer"
// // // // //       variants={fadeIn('up', 0.2)}
// // // // //       initial="hidden"
// // // // //       whileInView="show"
// // // // //       className="bg-gray-50"
// // // // //     >
// // // // //       <div className="section-container">
// // // // //         <motion.div 
// // // // //           variants={fadeIn('up', 0.3)}
// // // // //           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12"
// // // // //         >
// // // // //           {/* Brand Column */}
// // // // //           <motion.div 
// // // // //             variants={fadeIn('right', 0.4)}
// // // // //             className="lg:col-span-4"
// // // // //           >
// // // // //             <motion.div 
// // // // //               variants={fadeIn('down', 0.5)}
// // // // //               className="flex items-center gap-1 mb-6"
// // // // //             >
// // // // //               <div className="w-4 h-4 bg-blue-600 rounded-full opacity-75"></div>
// // // // //               <div className="w-4 h-4 bg-red-500 rounded-full -ml-2"></div>
// // // // //               <span className="text-xl font-medium ml-1">The Next Design</span>
// // // // //             </motion.div>
// // // // //             <motion.p 
// // // // //               variants={fadeIn('up', 0.6)}
// // // // //               className="text-gray-600 mb-6"
// // // // //             >
// // // // //               The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times.
// // // // //             </motion.p>
// // // // //             <motion.div 
// // // // //               variants={fadeIn('up', 0.7)}
// // // // //               className="flex gap-4"
// // // // //             >
// // // // //               <motion.a 
// // // // //                 whileHover={{ scale: 1.1 }}
// // // // //                 href="#" 
// // // // //                 className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-colors"
// // // // //               >
// // // // //                 <FaFacebookF className="w-5 h-5" />
// // // // //               </motion.a>
// // // // //               <motion.a 
// // // // //                 whileHover={{ scale: 1.1 }}
// // // // //                 href="#" 
// // // // //                 className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-400 hover:text-white transition-colors"
// // // // //               >
// // // // //                 <FaTwitter className="w-5 h-5" />
// // // // //               </motion.a>
// // // // //               <motion.a 
// // // // //                 whileHover={{ scale: 1.1 }}
// // // // //                 href="#" 
// // // // //                 className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-700 hover:text-white transition-colors"
// // // // //               >
// // // // //                 <FaLinkedinIn className="w-5 h-5" />
// // // // //               </motion.a>
// // // // //             </motion.div>
// // // // //           </motion.div>

// // // // //           {/* Links Columns */}
// // // // //           <motion.div 
// // // // //             variants={fadeIn('left', 0.4)}
// // // // //             className="lg:col-span-8"
// // // // //           >
// // // // //             <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
// // // // //               {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
// // // // //                 <motion.div 
// // // // //                   key={category}
// // // // //                   variants={fadeIn('up', 0.3 * (categoryIndex + 1))}
// // // // //                 >
// // // // //                   <motion.h3 
// // // // //                     variants={textVariant(0.2)}
// // // // //                     className="text-lg font-medium mb-4"
// // // // //                   >
// // // // //                     {category.charAt(0).toUpperCase() + category.slice(1)}
// // // // //                   </motion.h3>
// // // // //                   <motion.ul 
// // // // //                     variants={fadeIn('up', 0.4)}
// // // // //                     className="space-y-3"
// // // // //                   >
// // // // //                     {links.map((link, index) => (
// // // // //                       <motion.li 
// // // // //                         key={index}
// // // // //                         variants={fadeIn('up', 0.1 * (index + 1))}
// // // // //                       >
// // // // //                         <motion.a 
// // // // //                           whileHover={{ x: 5 }}
// // // // //                           href={link.href} 
// // // // //                           className="text-gray-600 hover:text-gray-900"
// // // // //                         >
// // // // //                           {link.name}
// // // // //                         </motion.a>
// // // // //                       </motion.li>
// // // // //                     ))}
// // // // //                   </motion.ul>
// // // // //                 </motion.div>
// // // // //               ))}
// // // // //             </div>
// // // // //           </motion.div>
// // // // //         </motion.div>

// // // // //         {/* Copyright */}
// // // // //         <motion.div 
// // // // //           variants={fadeIn('up', 0.8)}
// // // // //           className="border-t border-gray-200 mt-12 pt-8"
// // // // //         >
// // // // //           <motion.div 
// // // // //             variants={fadeIn('up', 0.9)}
// // // // //             className="flex flex-col md:flex-row justify-between items-center gap-4"
// // // // //           >
// // // // //             <motion.p 
// // // // //               variants={fadeIn('right', 1.0)}
// // // // //               className="text-gray-600 text-sm"
// // // // //             >
// // // // //               Copyright © {new Date().getFullYear()} Md Shoaib
// // // // //             </motion.p>
// // // // //             <motion.p 
// // // // //               variants={fadeIn('left', 1.0)}
// // // // //               className="text-gray-600 text-sm"
// // // // //             >
// // // // //               Created by Md Shoaib
// // // // //             </motion.p>
// // // // //           </motion.div>
// // // // //         </motion.div>
// // // // //       </div>
// // // // //     </motion.footer>
// // // // //   )
// // // // // }

// // // // // export default Footer


// // // // import React from 'react';
// // // // import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
// // // // import { motion } from "framer-motion";
// // // // import { fadeIn, textVariant } from "../utils/motion";

// // // // const Footer = () => {
// // // //   const footerLinks = {
// // // //     company: [
// // // //       { name: 'About', href: '#' },
// // // //       { name: 'Terms of Use', href: '#' },
// // // //       { name: 'Privacy Policy', href: '#' },
// // // //       { name: 'How it Works', href: '#' },
// // // //       { name: 'Contact Us', href: '#' },
// // // //     ],
// // // //     getHelp: [
// // // //       { name: 'Support Career', href: '#' },
// // // //       { name: '24h Service', href: '#' },
// // // //       { name: 'Quick Chat', href: '#' },
// // // //     ],
// // // //     support: [
// // // //       { name: 'FAQ', href: '#' },
// // // //       { name: 'Policy', href: '#' },
// // // //       { name: 'Business', href: '#' },
// // // //     ],
// // // //     contact: [
// // // //       { name: 'WhatsApp', href: '#' },
// // // //       { name: 'Support 24', href: '#' },
// // // //     ],
// // // //   };

// // // //   return (
// // // //     <motion.footer 
// // // //       id="footer"
// // // //       variants={fadeIn('up', 0.2)}
// // // //       initial="hidden"
// // // //       whileInView="show"
// // // //       viewport={{ once: true }}
// // // //       className="bg-[#e0dedf] w-full overflow-hidden border-t border-gray-200"
// // // //     >
// // // //       {/* Container - Width Problem solve করার জন্য max-w-7xl এবং mx-auto ব্যবহার করা হয়েছে */}
// // // //       <div className="max-w-7xl mx-auto px-6 sm:px-12 py-12 md:py-20">
        
// // // //         <motion.div 
// // // //           variants={fadeIn('up', 0.3)}
// // // //           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-16"
// // // //         >
// // // //           {/* Brand Column */}
// // // //           <motion.div 
// // // //             variants={fadeIn('right', 0.4)}
// // // //             className="lg:col-span-4"
// // // //           >
// // // //             <motion.div 
// // // //               variants={fadeIn('down', 0.5)}
// // // //               className="flex items-center gap-1 mb-6"
// // // //             >
// // // //               <div className="w-4 h-4 bg-blue-600 rounded-full opacity-75"></div>
// // // //               <div className="w-4 h-4 bg-red-500 rounded-full -ml-2"></div>
// // // //               <span className="text-xl font-bold ml-1 text-gray-900">The Next Design</span>
// // // //             </motion.div>
            
// // // //             <motion.p 
// // // //               variants={fadeIn('up', 0.6)}
// // // //               className="text-gray-600 mb-8 leading-relaxed"
// // // //             >
// // // //               The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times.
// // // //             </motion.p>
            
// // // //             <motion.div 
// // // //               variants={fadeIn('up', 0.7)}
// // // //               className="flex gap-4"
// // // //             >
// // // //               <motion.a 
// // // //                 whileHover={{ scale: 1.1, y: -2 }}
// // // //                 href="#" 
// // // //                 className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-all shadow-sm"
// // // //               >
// // // //                 <FaFacebookF className="w-5 h-5" />
// // // //               </motion.a>
// // // //               <motion.a 
// // // //                 whileHover={{ scale: 1.1, y: -2 }}
// // // //                 href="#" 
// // // //                 className="w-10 h-10bg-[#f2f2f2] rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-400 hover:text-white transition-all shadow-sm"
// // // //               >
// // // //                 <FaTwitter className="w-5 h-5" />
// // // //               </motion.a>
// // // //               <motion.a 
// // // //                 whileHover={{ scale: 1.1, y: -2 }}
// // // //                 href="#" 
// // // //                 className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-700 hover:text-white transition-all shadow-sm"
// // // //               >
// // // //                 <FaLinkedinIn className="w-5 h-5" />
// // // //               </motion.a>
// // // //             </motion.div>
// // // //           </motion.div>

// // // //           {/* Links Columns */}
// // // //           <motion.div 
// // // //             variants={fadeIn('left', 0.4)}
// // // //             className="lg:col-span-8"
// // // //           >
// // // //             <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
// // // //               {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
// // // //                 <motion.div 
// // // //                   key={category}
// // // //                   variants={fadeIn('up', 0.3 * (categoryIndex + 1))}
// // // //                 >
// // // //                   <motion.h3 
// // // //                     variants={textVariant(0.2)}
// // // //                     className="text-sm font-bold uppercase tracking-wider text-gray-900 mb-6"
// // // //                   >
// // // //                     {category.replace(/([A-Z])/g, ' $1').trim()}
// // // //                   </motion.h3>
// // // //                   <motion.ul 
// // // //                     className="space-y-4"
// // // //                   >
// // // //                     {links.map((link, index) => (
// // // //                       <motion.li 
// // // //                         key={index}
// // // //                         variants={fadeIn('up', 0.1 * (index + 1))}
// // // //                       >
// // // //                         <motion.a 
// // // //                           whileHover={{ x: 5 }}
// // // //                           href={link.href} 
// // // //                           className="text-gray-600 hover:text-blue-600 transition-colors inline-block"
// // // //                         >
// // // //                           {link.name}
// // // //                         </motion.a>
// // // //                       </motion.li>
// // // //                     ))}
// // // //                   </motion.ul>
// // // //                 </motion.div>
// // // //               ))}
// // // //             </div>
// // // //           </motion.div>
// // // //         </motion.div>

// // // //         {/* Copyright Section */}
// // // //         <motion.div 
// // // //           variants={fadeIn('up', 0.8)}
// // // //           className="border-t border-gray-200 mt-16 pt-8"
// // // //         >
// // // //           <div className="flex flex-col md:flex-row justify-between items-center gap-4">
// // // //             <motion.p 
// // // //               variants={fadeIn('right', 1.0)}
// // // //               className="text-gray-500 text-sm"
// // // //             >
// // // //               Copyright © {new Date().getFullYear()} Md Shoaib. All rights reserved.
// // // //             </motion.p>
// // // //             <motion.p 
// // // //               variants={fadeIn('left', 1.0)}
// // // //               className="text-gray-500 text-sm font-medium"
// // // //             >
// // // //               Created by <span className="text-gray-900 font-bold">Md Shoaib</span>
// // // //             </motion.p>
// // // //           </div>
// // // //         </motion.div>
// // // //       </div>
// // // //     </motion.footer>
// // // //   );
// // // // };

// // // // export default Footer;

// // // import React from "react";
// // // import { Link } from "react-router-dom";
// // // import { motion } from "framer-motion";

// // // const quickLinks = [
// // //   { label: "Home", to: "/" },
// // //   { label: "About", to: "/about" },
// // //   { label: "Services", to: "/services" },
// // //   { label: "Contact", to: "/contact" },
// // // ];

// // // const socials = [
// // //   { label: "LinkedIn", href: "#" },
// // //   { label: "Instagram", href: "#" },
// // //   { label: "Dribbble", href: "#" },
// // //   { label: "Behance", href: "#" },
// // // ];

// // // export default function Footer() {
// // //   const year = new Date().getFullYear();

// // //   return (
// // //     <footer className="relative bg-slate-950 text-white overflow-hidden">

// // //       {/* Background Gradient Glow (Updated to Emerald Theme) */}
// // //       <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-teal-500/5 to-transparent pointer-events-none" />

// // //       <div className="relative z-10 mx-auto max-w-7xl px-6 py-20">

// // //         {/* Main Grid */}
// // //         <div className="grid gap-16 md:grid-cols-3">

// // //           {/* Brand Section */}
// // //           <div>
// // //             <div className="flex items-center gap-3">
// // //               <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-emerald-400 via-teal-400 to-sky-400 flex items-center justify-center text-sm font-bold text-slate-900">
// // //                 RK
// // //               </div>
// // //               <h2 className="text-lg font-semibold tracking-tight 
// // //                 bg-gradient-to-r from-emerald-400 via-teal-400 to-sky-400 
// // //                 bg-clip-text text-transparent">
// // //                 ReactKit
// // //               </h2>
// // //             </div>

// // //             <p className="mt-5 text-sm text-white/60 leading-relaxed max-w-sm">
// // //               We craft minimal, high-performance digital experiences for
// // //               startups and modern businesses. Clean design, smooth interaction,
// // //               measurable growth.
// // //             </p>

// // //             {/* Social Links */}
// // //             <div className="mt-6 flex flex-wrap gap-3">
// // //               {socials.map((s) => (
// // //                 <motion.a
// // //                   key={s.label}
// // //                   href={s.href}
// // //                   whileHover={{ y: -4 }}
// // //                   whileTap={{ scale: 0.95 }}
// // //                   className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs text-white/70 hover:text-white hover:border-white/20 transition"
// // //                 >
// // //                   {s.label}
// // //                 </motion.a>
// // //               ))}
// // //             </div>
// // //           </div>

// // //           {/* Quick Links */}
// // //           <div>
// // //             <h3 className="text-sm font-semibold tracking-wide text-white/80 uppercase">
// // //               Quick Links
// // //             </h3>

// // //             <ul className="mt-6 space-y-3">
// // //               {quickLinks.map((link) => (
// // //                 <li key={link.to}>
// // //                   <motion.div whileHover={{ x: 5 }}>
// // //                     <Link
// // //                       to={link.to}
// // //                       className="text-sm text-white/60 hover:text-white transition"
// // //                     >
// // //                       {link.label}
// // //                     </Link>
// // //                   </motion.div>
// // //                 </li>
// // //               ))}
// // //             </ul>
// // //           </div>

// // //           {/* CTA Section */}
// // //           <div>
// // //             <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
// // //               <h3 className="text-lg font-semibold">
// // //                 Let’s build your next project.
// // //               </h3>

// // //               <p className="mt-3 text-sm text-white/60">
// // //                 Ready to elevate your brand and website with modern design and
// // //                 smooth motion?
// // //               </p>

// // //               <motion.div
// // //                 whileHover={{ scale: 1.05 }}
// // //                 whileTap={{ scale: 0.97 }}
// // //                 className="mt-6"
// // //               >
// // //                 <Link
// // //                   to="/contact"
// // //                   className="inline-flex items-center justify-center 
// // //                   rounded-xl 
// // //                   bg-gradient-to-r from-emerald-400 via-teal-400 to-sky-400 
// // //                   px-6 py-3 text-sm font-semibold text-slate-900 
// // //                   shadow-lg shadow-emerald-500/20"
// // //                 >
// // //                   Get Started
// // //                 </Link>
// // //               </motion.div>
// // //             </div>
// // //           </div>
// // //         </div>

// // //         {/* Divider */}
// // //         <div className="mt-16 border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">

// // //           <p className="text-xs text-white/50">
// // //             © {year} ReactKit. All rights reserved.
// // //           </p>

// // //           <p className="text-xs text-white/40">
// // //             Built with React • Tailwind CSS • Framer Motion
// // //           </p>
// // //         </div>
// // //       </div>
// // //     </footer>
// // //   );
// // // }


// // import React from "react";
// // import {
// //   FaFacebook,
// //   FaMapMarkerAlt,
// //   FaEnvelope,
// //   FaPhone,
// //   FaPhoneAlt,
// // } from "react-icons/fa";
// // import { BsInstagram, BsTwitterX, BsLinkedin, BsYoutube } from "react-icons/bs";
// // import { Link } from "react-router";

// // const Footer = () => {
// //   const currentYear = new Date().getFullYear();

// //   const quickLinks = [
// //     { name: "Home", path: "/" },
// //     { name: "Browse Papers", path: "/papers" },
// //     { name: "Submit Paper", path: "/submit" },
// //     { name: "About Us", path: "/about" },
// //     { name: "Contact", path: "/contact" },
// //   ];

// //   const resourceLinks = [
// //     { name: "Author Guidelines", path: "/guidelines" },
// //     { name: "Review Process", path: "/review-process" },
// //     { name: "Publication Ethics", path: "/ethics" },
// //     { name: "FAQs", path: "/faq" },
// //     { name: "Privacy Policy", path: "/privacy" },
// //   ];

// //   const socialLinks = [
// //     {
// //       icon: <FaFacebook />,
// //       path: "https://facebook.com",
// //       label: "Facebook",
// //       color: "hover:text-blue-600",
// //     },
// //     {
// //       icon: <BsInstagram />,
// //       path: "https://instagram.com",
// //       label: "Instagram",
// //       color: "hover:text-pink-500",
// //     },
// //     {
// //       icon: <BsTwitterX />,
// //       path: "https://twitter.com",
// //       label: "Twitter",
// //       color: "hover:text-gray-800",
// //     },
// //     {
// //       icon: <BsLinkedin />,
// //       path: "https://linkedin.com",
// //       label: "LinkedIn",
// //       color: "hover:text-blue-700",
// //     },
// //     {
// //       icon: <BsYoutube />,
// //       path: "https://youtube.com",
// //       label: "YouTube",
// //       color: "hover:text-red-600",
// //     },
// //   ];

// //   return (
// //     <footer className="bg-gradient-to-b from-[#111827] to-[#1f2937] text-white">
// //       {/* Main Footer Content */}
// //       <div className="container mx-auto px-4 py-12 md:py-16">
// //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
// //           {/* Logo & About Section */}
// //           <div className="space-y-6">
// //             <Link to="/" className="inline-block">
// //               <div className="-mt-3 text-2xl font-bold text-white tracking-wide">
// //                 Marks
// //               </div>
// //             </Link>

// //             <p className="text-gray-300 text-sm leading-relaxed -mt-5">
// //               The official journal management system of Pundra University of
// //               Science & Technology. Empowering researchers to publish quality
// //               academic papers.
// //             </p>

// //             <div className="flex items-center gap-4">
// //               {socialLinks.map((social, index) => (
// //                 <a
// //                   key={index}
// //                   href={social.path}
// //                   target="_blank"
// //                   rel="noopener noreferrer"
// //                   aria-label={social.label}
// //                   className={`w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white text-lg transition-all duration-300 hover:bg-white ${social.color} hover:scale-110`}
// //                 >
// //                   {social.icon}
// //                 </a>
// //               ))}
// //             </div>
// //           </div>

// //           {/* Quick Links */}
// //           <div className="space-y-6">
// //             <h3 className="text-lg font-bold text-white relative inline-block">
// //               Quick Links
// //               <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[#f59e0b] rounded-full"></span>
// //             </h3>
// //             <ul className="space-y-3 mt-4">
// //               {quickLinks.map((link, index) => (
// //                 <li key={index}>
// //                   <Link
// //                     to={link.path}
// //                     className="text-gray-300 hover:text-[#f59e0b] transition-colors duration-200 flex items-center gap-2 group"
// //                   >
// //                     <span className="w-1.5 h-1.5 bg-[#f59e0b] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
// //                     {link.name}
// //                   </Link>
// //                 </li>
// //               ))}
// //             </ul>
// //           </div>

// //           {/* Resources */}
// //           <div className="space-y-6">
// //             <h3 className="text-lg font-bold text-white relative inline-block">
// //               Resources
// //               <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[#f59e0b] rounded-full"></span>
// //             </h3>
// //             <ul className="space-y-3 mt-4">
// //               {resourceLinks.map((link, index) => (
// //                 <li key={index}>
// //                   <Link
// //                     to={link.path}
// //                     className="text-gray-300 hover:text-[#f59e0b] transition-colors duration-200 flex items-center gap-2 group"
// //                   >
// //                     <span className="w-1.5 h-1.5 bg-[#f59e0b] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
// //                     {link.name}
// //                   </Link>
// //                 </li>
// //               ))}
// //             </ul>
// //           </div>

// //           {/* Contact same as before */}
// //           <div className="space-y-6">
// //             <h3 className="text-lg font-bold text-white relative inline-block">
// //               Contact Us
// //               <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[#f59e0b] rounded-full"></span>
// //             </h3>
// //             {/* SAME */}
// //           </div>
// //         </div>
// //       </div>

// //       {/* Rest same */}
// //     </footer>
// //   );
// // };

// // export default Footer;


// import React from "react";
// import {
//   FaFacebook,
//   FaMapMarkerAlt,
//   FaEnvelope,
//   FaPhone,
//   FaPhoneAlt,
// } from "react-icons/fa";
// import { BsInstagram, BsTwitterX, BsLinkedin, BsYoutube } from "react-icons/bs";
// import { Link } from "react-router";

// const Footer = () => {
//   const currentYear = new Date().getFullYear();

//   const quickLinks = [
//     { name: "Home", path: "/" },
//     { name: "Services", path: "/services" },
//     { name: "Projects", path: "/projects" },
//     { name: "About Us", path: "/about" },
//     { name: "Contact", path: "/contact" },
//   ];

//   const resourceLinks = [
//     { name: "Blog", path: "/blog" },
//     { name: "Careers", path: "/careers" },
//     { name: "FAQs", path: "/faq" },
//     { name: "Privacy Policy", path: "/privacy" },
//     { name: "Terms & Conditions", path: "/terms" },
//   ];

//   const socialLinks = [
//     {
//       icon: <FaFacebook />,
//       path: "#",
//       color: "hover:bg-blue-600",
//     },
//     {
//       icon: <BsInstagram />,
//       path: "#",
//       color: "hover:bg-pink-500",
//     },
//     {
//       icon: <BsTwitterX />,
//       path: "#",
//       color: "hover:bg-black",
//     },
//     {
//       icon: <BsLinkedin />,
//       path: "#",
//       color: "hover:bg-blue-700",
//     },
//     {
//       icon: <BsYoutube />,
//       path: "#",
//       color: "hover:bg-red-600",
//     },
//   ];

//   return (
//     <footer className="bg-[#f2f2f2] text-gray-800">
//       {/* Main */}
//       <div className="max-w-7xl mx-auto px-6 py-16">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

//           {/* BRAND */}
//           <div className="space-y-6">
//             <h2 className="text-2xl font-bold text-black">Marks</h2>

//             <p className="text-gray-600 text-sm leading-relaxed">
//               We build modern, scalable and high-performing digital products.
//               Helping startups grow with clean design and powerful technology.
//             </p>

//             {/* Social */}
//             <div className="flex gap-3">
//               {socialLinks.map((social, i) => (
//                 <a
//                   key={i}
//                   href={social.path}
//                   className={`w-10 h-10 flex items-center justify-center rounded-full bg-black text-white transition-all duration-300 ${social.color}`}
//                 >
//                   {social.icon}
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* QUICK LINKS */}
//           <div>
//             <h3 className="text-lg font-semibold mb-6 text-black">
//               Quick Links
//             </h3>
//             <ul className="space-y-3">
//               {quickLinks.map((link, i) => (
//                 <li key={i}>
//                   <Link
//                     to={link.path}
//                     className="text-gray-600 hover:text-black transition"
//                   >
//                     {link.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* RESOURCES */}
//           <div>
//             <h3 className="text-lg font-semibold mb-6 text-black">
//               Resources
//             </h3>
//             <ul className="space-y-3">
//               {resourceLinks.map((link, i) => (
//                 <li key={i}>
//                   <Link
//                     to={link.path}
//                     className="text-gray-600 hover:text-black transition"
//                   >
//                     {link.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* CONTACT */}
//           <div>
//             <h3 className="text-lg font-semibold mb-6 text-black">
//               Contact Us
//             </h3>

//             <ul className="space-y-4">
//               <li className="flex items-start gap-3">
//                 <div className="w-10 h-10 flex items-center justify-center rounded-full bg-black text-white">
//                   <FaMapMarkerAlt />
//                 </div>
//                 <p className="text-gray-600 text-sm">
//                   Bogura, Bangladesh
//                 </p>
//               </li>

//               <li className="flex items-center gap-3">
//                 <div className="w-10 h-10 flex items-center justify-center rounded-full bg-black text-white">
//                   <FaEnvelope />
//                 </div>
//                 <p className="text-gray-600 text-sm">
//                   mdshoaibdev@gmail.com
//                 </p>
//               </li>

//               <li className="flex items-center gap-3">
//                 <div className="w-10 h-10 flex items-center justify-center rounded-full bg-black text-white">
//                   <FaPhone />
//                 </div>
//                 <p className="text-gray-600 text-sm">
//                   +880 1234-567890
//                 </p>
//               </li>

//               <li className="flex items-center gap-3">
//                 <div className="w-10 h-10 flex items-center justify-center rounded-full bg-black text-white">
//                   <FaPhoneAlt />
//                 </div>
//                 <p className="text-gray-600 text-sm">
//                   +880 9876-543210
//                 </p>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>

//       {/* BOTTOM */}
//       <div className="border-t border-gray-300">
//         <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">

//           <p className="text-gray-500 text-sm">
//             © {currentYear} <span className="font-semibold text-black">Marks</span>. All rights reserved.
//           </p>

//           <div className="flex gap-6">
//             <Link to="/privacy" className="text-gray-500 hover:text-black text-sm">
//               Privacy
//             </Link>
//             <Link to="/terms" className="text-gray-500 hover:text-black text-sm">
//               Terms
//             </Link>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import {
  FaFacebook,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaPhoneAlt,
} from "react-icons/fa";
import { BsInstagram, BsTwitterX, BsLinkedin, BsYoutube } from "react-icons/bs";
import { Link } from "react-router";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Browse Papers", path: "/papers" },
    { name: "Submit Paper", path: "/submit" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const resourceLinks = [
    { name: "Author Guidelines", path: "/guidelines" },
    { name: "Review Process", path: "/review-process" },
    { name: "Publication Ethics", path: "/ethics" },
    { name: "FAQs", path: "/faq" },
    { name: "Privacy Policy", path: "/privacy" },
  ];

  const socialLinks = [
    {
      icon: <FaFacebook />,
      path: "https://facebook.com",
      label: "Facebook",
      color: "hover:text-blue-600",
    },
    {
      icon: <BsInstagram />,
      path: "https://instagram.com",
      label: "Instagram",
      color: "hover:text-pink-500",
    },
    {
      icon: <BsTwitterX />,
      path: "https://twitter.com",
      label: "Twitter",
      color: "hover:text-gray-800",
    },
    {
      icon: <BsLinkedin />,
      path: "https://linkedin.com",
      label: "LinkedIn",
      color: "hover:text-blue-700",
    },
    {
      icon: <BsYoutube />,
      path: "https://youtube.com",
      label: "YouTube",
      color: "hover:text-red-600",
    },
  ];

  return (
    <footer className="bg-gradient-to-b from-[#1f1f1f] to-[#000000] text-white">
      {/* Main */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="inline-block">
              <div className="-mt-3 text-2xl font-bold text-white tracking-wide">
                Marks
              </div>
            </Link>

            <p className="text-gray-300 text-sm leading-relaxed -mt-5">
              The official journal management system of Pundra University of
              Science & Technology. Empowering researchers to publish quality
              academic papers.
            </p>

            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white text-lg transition-all duration-300 hover:bg-white ${social.color} hover:scale-110`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[#f59e0b] rounded-full"></span>
            </h3>
            <ul className="space-y-3 mt-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-[#f59e0b] transition flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-[#f59e0b] rounded-full opacity-0 group-hover:opacity-100"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white relative inline-block">
              Resources
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[#f59e0b] rounded-full"></span>
            </h3>
            <ul className="space-y-3 mt-4">
              {resourceLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-[#f59e0b] transition flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-[#f59e0b] rounded-full opacity-0 group-hover:opacity-100"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white relative inline-block">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[#f59e0b] rounded-full"></span>
            </h3>

            <ul className="space-y-4 mt-4">
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#f59e0b]/20 text-[#f59e0b]">
                  <FaMapMarkerAlt />
                </div>
                <p className="text-gray-300 text-sm">
                  Bogura, Bangladesh
                </p>
              </li>

              <li className="flex items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#f59e0b]/20 text-[#f59e0b]">
                  <FaEnvelope />
                </div>
                <p className="text-gray-300 text-sm">
                  mdshoaibdev@gmail.com
                </p>
              </li>

              <li className="flex items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#f59e0b]/20 text-[#f59e0b]">
                  <FaPhone />
                </div>
                <p className="text-gray-300 text-sm">
                  +880 1234-567890
                </p>
              </li>

              <li className="flex items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#f59e0b]/20 text-[#f59e0b]">
                  <FaPhoneAlt />
                </div>
                <p className="text-gray-300 text-sm">
                  +880 9876-543210
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10 bg-black">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {currentYear} <span className="text-[#f59e0b]">Marks</span>. All rights reserved.
          </p>

          <div className="flex gap-6">
            <Link to="/privacy" className="text-gray-400 hover:text-[#f59e0b] text-sm">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-[#f59e0b] text-sm">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;