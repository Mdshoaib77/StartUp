// // import React, { useState } from 'react'
// // import { HiMenu, HiX } from 'react-icons/hi'
// // import { motion } from "framer-motion";
// // import { fadeIn} from "../utils/motion";

// // const Navbar = () => {
// //   const [isMenuOpen, setIsMenuOpen] = useState(false)
// //   const [activeLink, setActiveLink] = useState('#home')

// //   const navLinks = [
// //     { href: "#home", label: "Home" },
// //     { href: "#about", label: "About Us" },
// //     { href: "#services", label: "Our Service" },
// //     { href: "#testimonials", label: "Testimonials" },
// //   ]

// //   return (
// //     <motion.nav 
// //       variants={fadeIn('down', 0.2)}
// //       initial="hidden"
// //       whileInView="show"
// //       viewport={{ once: true }}
// //       className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100 shadow-sm"
// //     >
// //       <div className="w-full flex justify-between items-center container mx-auto px-4 sm:px-6 lg:px-8 md:h-20 h-16">
// //         {/* Logo */}
// //         <motion.div 
// //           variants={fadeIn('right', 0.3)}
// //           className="flex items-center gap-1 cursor-pointer"
// //         >
// //           <motion.div 
// //             whileHover={{ scale: 1.1 }}
// //             className="w-4 h-4 bg-blue-600 rounded-full opacity-75 hover:opacity-100 transition-opacity"
// //           ></motion.div>
// //           <motion.div 
// //             whileHover={{ scale: 1.1 }}
// //             className="w-4 h-4 bg-red-500 rounded-full -ml-2 hover:opacity-75 transition-opacity"
// //           ></motion.div>
// //         </motion.div>
// //         {/* Mobile Menu Button */}
// //         <motion.button 
// //           variants={fadeIn('left', 0.3)}
// //           className="md:hidden p-2"
// //           onClick={() => setIsMenuOpen(!isMenuOpen)}
// //         >
// //           {isMenuOpen ? (
// //             <HiX className="h-6 w-6" />
// //           ) : (
// //             <HiMenu className="h-6 w-6" />
// //           )}
// //         </motion.button>

// //         {/* Navigation Links - Desktop */}
// //         <motion.div 
// //           variants={fadeIn('down', 0.3)}
// //           className="hidden md:flex items-center gap-10"
// //         >
// //           {navLinks.map((link, index) => (
// //             <motion.a 
// //               key={index}
// //               variants={fadeIn('down', 0.1 * (index + 1))}
// //               href={link.href}
// //               onClick={() => setActiveLink(link.href)}
// //               className={`text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all
// //                 ${activeLink === link.href ? 'text-blue-600 after:w-full  ' : 'text-gray-600 hover:text-gray-900'}`}
// //             >
// //               {link.label}
// //             </motion.a>
// //           ))}
// //         </motion.div>

// //         {/* CTA Button */}
// //         <motion.button 
// //           variants={fadeIn('left', 0.3)}
// //           whileHover={{ scale: 1.05 }}
// //           whileTap={{ scale: 0.95 }}
// //           className="hidden md:block bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 text-sm font-medium transition-all hover:shadow-lg hover:shadow-blue-100"
// //         >
// //           <a href="#newsletter">Get in touch</a>
// //         </motion.button>
// //       </div>

// //       {/* Mobile Menu */}
// //       {isMenuOpen && (
// //         <motion.div 
// //           variants={fadeIn('down', 0.2)}
// //           initial="hidden"
// //           animate="show"
// //           className="md:hidden bg-white border-t border-gray-100 py-4"
// //         >
// //           <motion.div 
// //             variants={fadeIn('down', 0.3)}
// //             className="container mx-auto px-4 space-y-4"
// //           >
// //             {navLinks.map((link, index) => (
// //               <motion.a
// //                 key={index}
// //                 variants={fadeIn('right', 0.1 * (index + 1))}
// //                 href={link.href}
// //                 onClick={() => {
// //                   setActiveLink(link.href);
// //                   setIsMenuOpen(false);
// //                 }}
// //                 className={`block text-sm font-medium py-2
// //                   ${activeLink === link.href ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'}`}
// //               >
// //                 {link.label}
// //               </motion.a>
// //             ))}
// //             <motion.button 
// //               variants={fadeIn('up', 0.4)}
// //               whileHover={{ scale: 1.02 }}
// //               whileTap={{ scale: 0.98 }}
// //               className="w-full bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 text-sm font-medium transition-all hover:shadow-lg hover:shadow-blue-100"
// //             >
// //               Get in touch
// //             </motion.button>
// //           </motion.div>
// //         </motion.div>
// //       )}
// //     </motion.nav>
// //   )
// // }

// // export default Navbar



// // import React, { useState } from "react";
// // import { HiMenu, HiX } from "react-icons/hi";
// // import { motion, AnimatePresence } from "framer-motion";
// // import { fadeIn } from "../utils/motion";

// // const Navbar = () => {
// //   const [isMenuOpen, setIsMenuOpen] = useState(false);
// //   const [activeLink, setActiveLink] = useState("#home");

// //   const navLinks = [
// //     { href: "#home", label: "Home" },
// //     { href: "#about", label: "About" },
// //     { href: "#services", label: "Services" },
// //     // { href: "#testimonials", label: "Testimonials" },
// //     { href: "#Contact", label: "Contact" },
// //   ];

// //   return (
// //     <motion.nav
// //       variants={fadeIn("down", 0.2)}
// //       initial="hidden"
// //       animate="show"
// //       className="fixed top-0 left-0 right-0 z-50 bg-[#F2F2F2] border-b border-black/5"
// //     >
// //       <div className="container mx-auto px-4 sm:px-6 lg:px-8 md:h-20 h-16 flex items-center justify-between">

// //         {/* Logo */}
// //         <div className="flex items-center gap-4 cursor-pointer">
// //           <div className="h-11 w-11 flex items-center justify-center rounded-2xl border border-black/10 bg-white text-black font-semibold shadow-sm">
// //             TS
// //           </div>
// //           <div>
// //             <p className="font-semibold text-black leading-tight">
// //               TawakkulStudio
// //             </p>
// //             <p className="text-sm text-black/50">
// //               Branding • Web • Growth
// //             </p>
// //           </div>
// //         </div>

// //         {/* Desktop Menu */}
// //         <div className="hidden md:flex items-center gap-8">

// //           {/* Center Pill Navigation */}
// //           <div className="flex items-center gap-8 bg-white px-8 py-3 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-black/5">

// //             {navLinks.map((link, index) => (
// //               <a
// //                 key={index}
// //                 href={link.href}
// //                 onClick={() => setActiveLink(link.href)}
// //                 className={`relative text-sm font-medium transition px-3 py-1 rounded-full
// //                   ${
// //                     activeLink === link.href
// //                       ? "bg-gray-200 text-black"
// //                       : "text-gray-600 hover:text-black"
// //                   }`}
// //               >
// //                 {link.label}
// //               </a>
// //             ))}
// //           </div>

// //           {/* CTA Button */}
// //           <motion.a
// //             whileHover={{ scale: 1.05 }}
// //             whileTap={{ scale: 0.95 }}
// //             href="#newsletter"
// //             className="bg-black text-white px-7 py-3 rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition"
// //           >
// //             Get a Quote
// //           </motion.a>
// //         </div>

// //         {/* Mobile Toggle */}
// //         <button
// //           className="md:hidden p-2 text-black"
// //           onClick={() => setIsMenuOpen(!isMenuOpen)}
// //         >
// //           {isMenuOpen ? (
// //             <HiX className="h-6 w-6" />
// //           ) : (
// //             <HiMenu className="h-6 w-6" />
// //           )}
// //         </button>
// //       </div>

// //       {/* Mobile Menu */}
// //       <AnimatePresence>
// //         {isMenuOpen && (
// //           <>
// //             <motion.div
// //               initial={{ opacity: 0 }}
// //               animate={{ opacity: 1 }}
// //               exit={{ opacity: 0 }}
// //               className="fixed inset-0 bg-black/20 backdrop-blur-sm md:hidden"
// //               onClick={() => setIsMenuOpen(false)}
// //             />

// //             <motion.div
// //               initial={{ y: -40, opacity: 0 }}
// //               animate={{ y: 0, opacity: 1 }}
// //               exit={{ y: -40, opacity: 0 }}
// //               transition={{ type: "spring", stiffness: 220 }}
// //               className="absolute top-full left-0 right-0 bg-[#F1F2F4] md:hidden shadow-xl border-t border-black/5"
// //             >
// //               <div className="px-6 py-8 space-y-6">

// //                 {navLinks.map((link, index) => (
// //                   <motion.a
// //                     key={index}
// //                     href={link.href}
// //                     initial={{ x: -40, opacity: 0 }}
// //                     animate={{ x: 0, opacity: 1 }}
// //                     transition={{ delay: index * 0.1 }}
// //                     onClick={() => {
// //                       setActiveLink(link.href);
// //                       setIsMenuOpen(false);
// //                     }}
// //                     className="block text-lg font-medium text-gray-700 hover:text-black"
// //                   >
// //                     {link.label}
// //                   </motion.a>
// //                 ))}

// //                 <motion.a
// //                   initial={{ y: 20, opacity: 0 }}
// //                   animate={{ y: 0, opacity: 1 }}
// //                   transition={{ delay: 0.3 }}
// //                   href="#newsletter"
// //                   className="block w-full text-center bg-black text-white py-3 rounded-full font-medium"
// //                 >
// //                   Let's Talk
// //                 </motion.a>

// //               </div>
// //             </motion.div>
// //           </>
// //         )}
// //       </AnimatePresence>
// //     </motion.nav>
// //   );
// // };

// // export default Navbar;

// // import React, { useState } from "react";
// // import { HiMenu, HiX } from "react-icons/hi";
// // import { motion, AnimatePresence } from "framer-motion";
// // import { fadeIn } from "../utils/motion";

// // const Navbar = () => {
// //   const [isMenuOpen, setIsMenuOpen] = useState(false);
// //   const [activeLink, setActiveLink] = useState("#home");

// //   const navLinks = [
// //     { href: "#home", label: "Home" },
// //     { href: "#about", label: "About" },
// //     { href: "#services", label: "Services" },
// //     { href: "#Contact", label: "Contact" },
// //   ];

// //   return (
// //     <motion.nav
// //       variants={fadeIn("down", 0.2)}
// //       initial="hidden"
// //       animate="show"
// //       className="fixed top-0 left-0 right-0 z-50 bg-[#F2F2F2]"
// //     >
// //       <div className="container mx-auto px-4 sm:px-6 lg:px-8 md:h-20 h-16 flex items-center justify-between">

// //         {/* Logo */}
// //         <div className="flex items-center gap-4 cursor-pointer">
// //           <div className="h-11 w-11 flex items-center justify-center rounded-2xl border border-black/10 bg-white text-black font-semibold shadow-sm">
// //             TS
// //           </div>
// //           <div>
// //             <p className="font-semibold text-black leading-tight">
// //               TawakkulStudio
// //             </p>
// //             <p className="text-sm text-black/50">
// //               Branding • Web • Growth
// //             </p>
// //           </div>
// //         </div>

// //         {/* Desktop Menu */}
// //         <div className="hidden md:flex items-center gap-8">

// //           {/* Center Pill Navigation */}
// //           <div className="flex items-center gap-8 bg-white px-8 py-3 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-black/5">
// //             {navLinks.map((link, index) => (
// //               <a
// //                 key={index}
// //                 href={link.href}
// //                 onClick={() => setActiveLink(link.href)}
// //                 className={`relative text-sm font-medium transition px-3 py-1 rounded-full ${
// //                   activeLink === link.href
// //                     ? "bg-gray-200 text-black"
// //                     : "text-gray-600 hover:text-black"
// //                 }`}
// //               >
// //                 {link.label}
// //               </a>
// //             ))}
// //           </div>

// //           {/* CTA Button */}
// //           <motion.a
// //             whileHover={{ scale: 1.05 }}
// //             whileTap={{ scale: 0.95 }}
// //             href="#newsletter"
// //             className="bg-black text-white px-7 py-3 rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition"
// //           >
// //             Let's Talk
// //           </motion.a>
// //         </div>

// //         {/* Mobile Toggle */}
// //         <button
// //           className="md:hidden p-2 text-black"
// //           onClick={() => setIsMenuOpen(!isMenuOpen)}
// //         >
// //           {isMenuOpen ? (
// //             <HiX className="h-6 w-6" />
// //           ) : (
// //             <HiMenu className="h-6 w-6" />
// //           )}
// //         </button>
// //       </div>

// //       {/* Mobile Menu */}
// //       <AnimatePresence>
// //         {isMenuOpen && (
// //           <>
// //             <motion.div
// //               initial={{ opacity: 0 }}
// //               animate={{ opacity: 1 }}
// //               exit={{ opacity: 0 }}
// //               className="fixed inset-0 bg-black/20 backdrop-blur-sm md:hidden"
// //               onClick={() => setIsMenuOpen(false)}
// //             />

// //             <motion.div
// //               initial={{ y: -40, opacity: 0 }}
// //               animate={{ y: 0, opacity: 1 }}
// //               exit={{ y: -40, opacity: 0 }}
// //               transition={{ type: "spring", stiffness: 220 }}
// //               className="absolute top-full left-0 right-0 bg-[#F1F2F4] md:hidden shadow-xl"
// //             >
// //               <div className="px-6 py-8 space-y-6">

// //                 {navLinks.map((link, index) => (
// //                   <motion.a
// //                     key={index}
// //                     href={link.href}
// //                     initial={{ x: -40, opacity: 0 }}
// //                     animate={{ x: 0, opacity: 1 }}
// //                     transition={{ delay: index * 0.1 }}
// //                     onClick={() => {
// //                       setActiveLink(link.href);
// //                       setIsMenuOpen(false);
// //                     }}
// //                     className="block text-lg font-medium text-gray-700 hover:text-black"
// //                   >
// //                     {link.label}
// //                   </motion.a>
// //                 ))}

// //                 <motion.a
// //                   initial={{ y: 20, opacity: 0 }}
// //                   animate={{ y: 0, opacity: 1 }}
// //                   transition={{ delay: 0.3 }}
// //                   href="#newsletter"
// //                   className="block w-full text-center bg-black text-white py-3 rounded-full font-medium"
// //                 >
// //                   Let's Talk
// //                 </motion.a>

// //               </div>
// //             </motion.div>
// //           </>
// //         )}
// //       </AnimatePresence>
// //     </motion.nav>
// //   );
// // };

// // export default Navbar;


// // import React, { useState } from "react";
// // import { HiMenu, HiX } from "react-icons/hi";
// // import { motion, AnimatePresence } from "framer-motion";
// // import { fadeIn } from "../utils/motion";

// // const Navbar = () => {
// //   const [isMenuOpen, setIsMenuOpen] = useState(false);
// //   const [activeLink, setActiveLink] = useState("#home");

// //   const navLinks = [
// //     { href: "#home", label: "Home" },
// //     { href: "#about", label: "About" },
// //     { href: "#services", label: "Services" },
// //     { href: "#Contact", label: "Contact" },
// //   ];

// //   return (
// //     <motion.nav
// //       variants={fadeIn("down", 0.2)}
// //       initial="hidden"
// //       animate="show"
// //       /* ✅ 'fixed' পরিবর্তন করে 'absolute' করা হয়েছে যাতে স্ক্রল করলে এটি উপরে চলে যায় */
// //       className="absolute top-0 left-0 right-0 z-50 bg-[#F2F2F2]"
// //     >
// //       <div className="container mx-auto px-4 sm:px-6 lg:px-8 md:h-20 h-16 flex items-center justify-between">

// //         {/* Logo */}
// //         <div className="flex items-center gap-4 cursor-pointer">
// //           <div className="h-11 w-11 flex items-center justify-center rounded-2xl border border-black/10 bg-white text-black font-semibold shadow-sm">
// //             TS
// //           </div>
// //           <div>
// //             <p className="font-semibold text-black leading-tight">
// //               TawakkulStudio
// //             </p>
// //             <p className="text-sm text-black/50">
// //               Branding • Web • Growth
// //             </p>
// //           </div>
// //         </div>

// //         {/* Desktop Menu */}
// //         <div className="hidden md:flex items-center gap-8">

// //           {/* Center Pill Navigation */}
// //           <div className="flex items-center gap-8 bg-white px-8 py-3 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-black/5">
// //             {navLinks.map((link, index) => (
// //               <a
// //                 key={index}
// //                 href={link.href}
// //                 onClick={() => setActiveLink(link.href)}
// //                 className={`relative text-sm font-medium transition px-3 py-1 rounded-full ${
// //                   activeLink === link.href
// //                     ? "bg-gray-200 text-black"
// //                     : "text-gray-600 hover:text-black"
// //                 }`}
// //               >
// //                 {link.label}
// //               </a>
// //             ))}
// //           </div>

// //           {/* CTA Button */}
// //           <motion.a
// //             whileHover={{ scale: 1.05 }}
// //             whileTap={{ scale: 0.95 }}
// //             href="#newsletter"
// //             className="bg-black text-white px-7 py-3 rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition"
// //           >
// //             Let's Talk
// //           </motion.a>
// //         </div>

// //         {/* Mobile Toggle */}
// //         <button
// //           className="md:hidden p-2 text-black"
// //           onClick={() => setIsMenuOpen(!isMenuOpen)}
// //         >
// //           {isMenuOpen ? (
// //             <HiX className="h-6 w-6" />
// //           ) : (
// //             <HiMenu className="h-6 w-6" />
// //           )}
// //         </button>
// //       </div>

// //       {/* Mobile Menu */}
// //       <AnimatePresence>
// //         {isMenuOpen && (
// //           <>
// //             <motion.div
// //               initial={{ opacity: 0 }}
// //               animate={{ opacity: 1 }}
// //               exit={{ opacity: 0 }}
// //               /* ✅ Mobile Overlay ও 'absolute' করা হয়েছে */
// //               className="absolute inset-0 h-[100vh] bg-black/20 backdrop-blur-sm md:hidden"
// //               onClick={() => setIsMenuOpen(false)}
// //             />

// //             <motion.div
// //               initial={{ y: -40, opacity: 0 }}
// //               animate={{ y: 0, opacity: 1 }}
// //               exit={{ y: -40, opacity: 0 }}
// //               transition={{ type: "spring", stiffness: 220 }}
// //               className="absolute top-full left-0 right-0 bg-[#F1F2F4] md:hidden shadow-xl"
// //             >
// //               <div className="px-6 py-8 space-y-6">

// //                 {navLinks.map((link, index) => (
// //                   <motion.a
// //                     key={index}
// //                     href={link.href}
// //                     initial={{ x: -40, opacity: 0 }}
// //                     animate={{ x: 0, opacity: 1 }}
// //                     transition={{ delay: index * 0.1 }}
// //                     onClick={() => {
// //                       setActiveLink(link.href);
// //                       setIsMenuOpen(false);
// //                     }}
// //                     className="block text-lg font-medium text-gray-700 hover:text-black"
// //                   >
// //                     {link.label}
// //                   </motion.a>
// //                 ))}

// //                 <motion.a
// //                   initial={{ y: 20, opacity: 0 }}
// //                   animate={{ y: 0, opacity: 1 }}
// //                   transition={{ delay: 0.3 }}
// //                   href="#newsletter"
// //                   className="block w-full text-center bg-black text-white py-3 rounded-full font-medium"
// //                 >
// //                   Let's Talk
// //                 </motion.a>

// //               </div>
// //             </motion.div>
// //           </>
// //         )}
// //       </AnimatePresence>
// //     </motion.nav>
// //   );
// // };

// // export default Navbar;


// // import React, { useState } from "react";
// // import { HiMenu, HiX } from "react-icons/hi";
// // import { motion, AnimatePresence } from "framer-motion";
// // import { fadeIn } from "../utils/motion";

// // const Navbar = () => {
// //   const [isMenuOpen, setIsMenuOpen] = useState(false);
// //   const [activeLink, setActiveLink] = useState("#home");

// //   const navLinks = [
// //     { href: "#home", label: "Home" },
// //     { href: "#about", label: "About" },
// //     { href: "#works", label: "works" },
// //     { href: "#services", label: "Services" },
// //     { href: "#Contact", label: "Contact" },
// //   ];

// //   return (
// //     <motion.nav
// //       variants={fadeIn("down", 0.2)}
// //       initial="hidden"
// //       animate="show"
// //       /* ✅ 'fixed' পরিবর্তন করে 'absolute' করা হয়েছে যাতে স্ক্রল করলে এটি উপরে চলে যায় */
// //       className="absolute top-0 left-0 right-0 z-50 bg-[#F2F2F2]"
// //     >
// //       <div className="container mx-auto px-4 sm:px-6 lg:px-8 md:h-20 h-16 flex items-center justify-between">

// //         {/* Logo */}
// //         <div className="flex items-center gap-4 cursor-pointer">
// //           {/* <div className="h-11 w-11 flex items-center justify-center rounded-2xl border border-black/10 bg-white text-black font-semibold shadow-sm">
// //             TS
// //           </div> */}
// //           <div>
// //             <p className="font-semibold text-3xl text-black leading-tight">
// //               Marks
// //             </p>
// //             {/* <p className="text-sm text-black/50">
// //               Branding • Web • Growth
// //             </p> */}
// //           </div>
// //         </div>

// //         {/* Desktop Menu */}
// //         <div className="hidden md:flex items-center gap-8">

// //           {/* Center Pill Navigation */}
// //           <div className="flex items-center gap-8 bg-white px-8 py-3 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-black/5">
// //             {navLinks.map((link, index) => (
// //               <a
// //                 key={index}
// //                 href={link.href}
// //                 onClick={() => setActiveLink(link.href)}
// //                 className={`relative text-sm font-medium transition px-3 py-1 rounded-full ${
// //                   activeLink === link.href
// //                     ? "bg-gray-200 text-black"
// //                     : "text-gray-600 hover:text-black"
// //                 }`}
// //               >
// //                 {link.label}
// //               </a>
// //             ))}
// //           </div>

// //           {/* CTA Button */}
// //           <motion.a
// //             whileHover={{ scale: 1.05 }}
// //             whileTap={{ scale: 0.95 }}
// //             href="#newsletter"
// //             className="bg-black text-white px-7 py-3 rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition"
// //           >
// //             Let's Talk
// //           </motion.a>
// //         </div>

// //         {/* Mobile Toggle */}
// //         <button
// //           className="md:hidden p-2 text-black"
// //           onClick={() => setIsMenuOpen(!isMenuOpen)}
// //         >
// //           {isMenuOpen ? (
// //             <HiX className="h-6 w-6" />
// //           ) : (
// //             <HiMenu className="h-6 w-6" />
// //           )}
// //         </button>
// //       </div>

// //       {/* Mobile Menu */}
// //       <AnimatePresence>
// //         {isMenuOpen && (
// //           <>
// //             <motion.div
// //               initial={{ opacity: 0 }}
// //               animate={{ opacity: 1 }}
// //               exit={{ opacity: 0 }}
// //               /* ✅ Mobile Overlay ও 'absolute' করা হয়েছে */
// //               className="absolute inset-0 h-[100vh] bg-black/20 backdrop-blur-sm md:hidden"
// //               onClick={() => setIsMenuOpen(false)}
// //             />

// //             <motion.div
// //               initial={{ y: -40, opacity: 0 }}
// //               animate={{ y: 0, opacity: 1 }}
// //               exit={{ y: -40, opacity: 0 }}
// //               transition={{ type: "spring", stiffness: 220 }}
// //               className="absolute top-full left-0 right-0 bg-[#F1F2F4] md:hidden shadow-xl"
// //             >
// //               <div className="px-6 py-8 space-y-6">

// //                 {navLinks.map((link, index) => (
// //                   <motion.a
// //                     key={index}
// //                     href={link.href}
// //                     initial={{ x: -40, opacity: 0 }}
// //                     animate={{ x: 0, opacity: 1 }}
// //                     transition={{ delay: index * 0.1 }}
// //                     onClick={() => {
// //                       setActiveLink(link.href);
// //                       setIsMenuOpen(false);
// //                     }}
// //                     className="block text-lg font-medium text-gray-700 hover:text-black"
// //                   >
// //                     {link.label}
// //                   </motion.a>
// //                 ))}

// //                 <motion.a
// //                   initial={{ y: 20, opacity: 0 }}
// //                   animate={{ y: 0, opacity: 1 }}
// //                   transition={{ delay: 0.3 }}
// //                   href="#newsletter"
// //                   className="block w-full text-center bg-black text-white py-3 rounded-full font-medium"
// //                 >
// //                   Let's Talk
// //                 </motion.a>

// //               </div>
// //             </motion.div>
// //           </>
// //         )}
// //       </AnimatePresence>
// //     </motion.nav>
// //   );
// // };

// // export default Navbar;

// // import React, { useState } from "react";
// // import { motion, AnimatePresence } from "framer-motion";
// // import { fadeIn } from "../utils/motion";

// // const Navbar = () => {
// //   const [isMenuOpen, setIsMenuOpen] = useState(false);
// //   const [activeLink, setActiveLink] = useState("#home");

// //   const navLinks = [
// //     { href: "#home", label: "Home" },
// //     { href: "#about", label: "About" },
// //     { href: "#works", label: "Works" },
// //     { href: "#services", label: "Services" },
// //     { href: "#Contact", label: "Contact" },
// //   ];

// //   // মোবাইল মেনু অ্যানিমেশন ভেরিয়েন্ট (ভিডিওর মতো স্লাইড)
// //   const menuVariants = {
// //     closed: {
// //       y: "-100%",
// //       transition: { duration: 0.7, ease: [0.19, 1, 0.22, 1] },
// //     },
// //     opened: {
// //       y: 0,
// //       transition: {
// //         duration: 0.8,
// //         ease: [0.19, 1, 0.22, 1],
// //         staggerChildren: 0.1,
// //         delayChildren: 0.2,
// //       },
// //     },
// //   };

// //   const linkVariants = {
// //     closed: { opacity: 0, y: 30 },
// //     opened: { opacity: 1, y: 0 },
// //   };

// //   return (
// //     <motion.nav
// //       variants={fadeIn("down", 0.2)}
// //       initial="hidden"
// //       animate="show"
// //       className="absolute top-0 left-0 right-0 z-50 bg-[#F2F2F2]"
// //     >
// //       <div className="container mx-auto px-4 sm:px-6 lg:px-8 md:h-20 h-16 flex items-center justify-between">
        
// //         {/* Logo (আপনার দেওয়া ডিটেইলস অনুযায়ী) */}
// //         <div className="flex items-center gap-4 cursor-pointer">
// //           <p className="font-semibold text-3xl text-black leading-tight">
// //             Marks
// //           </p>
// //         </div>

// //         {/* Desktop Menu (Exact same as your provided code) */}
// //         <div className="hidden md:flex items-center gap-8">
// //           <div className="flex items-center gap-8 bg-white px-8 py-3 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-black/5">
// //             {navLinks.map((link, index) => (
// //               <a
// //                 key={index}
// //                 href={link.href}
// //                 onClick={() => setActiveLink(link.href)}
// //                 className={`relative text-sm font-medium transition px-3 py-1 rounded-full ${
// //                   activeLink === link.href
// //                     ? "bg-gray-200 text-black"
// //                     : "text-gray-600 hover:text-black"
// //                 }`}
// //               >
// //                 {link.label}
// //               </a>
// //             ))}
// //           </div>

// //           <motion.a
// //             whileHover={{ scale: 1.05 }}
// //             whileTap={{ scale: 0.95 }}
// //             href="#newsletter"
// //             className="bg-black text-white px-7 py-3 rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition"
// //           >
// //             Let's Talk
// //           </motion.a>
// //         </div>

// //         {/* Mobile Toggle Button (ভিডিওর মতো "Menu" টেক্সট) */}
// //         <button
// //           className="md:hidden text-lg font-medium text-black px-2"
// //           onClick={() => setIsMenuOpen(true)}
// //         >
// //           Menu
// //         </button>
// //       </div>

// //       {/* Fullscreen Mobile Menu Overlay (ভিডিওর মতো এনিমেশন) */}
// //       <AnimatePresence>
// //         {isMenuOpen && (
// //           <motion.div
// //             initial="closed"
// //             animate="opened"
// //             exit="closed"
// //             variants={menuVariants}
// //             className="fixed inset-0 z-[100] bg-[#111111] text-white flex flex-col md:hidden"
// //           >
// //             {/* Mobile Menu Header */}
// //             <div className="container mx-auto px-4 h-16 flex justify-between items-center border-b border-white/10">
// //               <span className="font-semibold text-2xl">Marks</span>
// //               <button
// //                 onClick={() => setIsMenuOpen(false)}
// //                 className="text-lg font-medium tracking-wide"
// //               >
// //                 Close
// //               </button>
// //             </div>

// //             {/* Mobile Links Container */}
// //             <div className="flex-1 flex flex-col justify-start pt-12 px-6">
// //               {navLinks.map((link, index) => (
// //                 <motion.div
// //                   key={index}
// //                   variants={linkVariants}
// //                   className="border-b border-white/5"
// //                 >
// //                   <a
// //                     href={link.href}
// //                     onClick={() => {
// //                       setActiveLink(link.href);
// //                       setIsMenuOpen(false);
// //                     }}
// //                     className="block py-6 text-4xl font-medium tracking-tight active:text-gray-400"
// //                   >
// //                     {link.label}
// //                   </a>
// //                 </motion.div>
// //               ))}

// //               {/* Mobile CTA */}
// //               <motion.a
// //                 variants={linkVariants}
// //                 href="#newsletter"
// //                 className="mt-12 block w-full text-center bg-white text-black py-4 rounded-full font-bold text-lg"
// //               >
// //                 Let's Talk
// //               </motion.a>
// //             </div>
// //           </motion.div>
// //         )}
// //       </AnimatePresence>
// //     </motion.nav>
// //   );
// // };

// // export default Navbar;


// // import React, { useState } from "react";
// // import { motion, AnimatePresence } from "framer-motion";
// // import { fadeIn } from "../utils/motion";

// // const Navbar = () => {
// //   const [isMenuOpen, setIsMenuOpen] = useState(false);
// //   const [activeLink, setActiveLink] = useState("#home");

// //   const navLinks = [
// //     { href: "#home", label: "Home" },
// //     { href: "#about", label: "About" },
// //     { href: "#works", label: "Works" },
// //     { href: "#services", label: "Services" },
// //     { href: "#Contact", label: "Contact" },
// //   ];

// //   // মোবাইল মেনু স্লাইড অ্যানিমেশন
// //   const menuVariants = {
// //     closed: {
// //       y: "-100%",
// //       transition: { duration: 0.7, ease: [0.19, 1, 0.22, 1] },
// //     },
// //     opened: {
// //       y: 0,
// //       transition: {
// //         duration: 0.8,
// //         ease: [0.19, 1, 0.22, 1],
// //         staggerChildren: 0.1,
// //         delayChildren: 0.2,
// //       },
// //     },
// //   };

// //   const linkVariants = {
// //     closed: { opacity: 0, y: 30 },
// //     opened: { opacity: 1, y: 0 },
// //   };

// //   return (
// //     <motion.nav
// //       variants={fadeIn("down", 0.2)}
// //       initial="hidden"
// //       animate="show"
// //       className="absolute top-0 left-0 right-0 z-50 bg-[#f2f2f2]"
// //     >
// //       <div className="container mx-auto px-4 sm:px-6 lg:px-8 md:h-20 h-16 flex items-center justify-between">
        
// //         {/* Logo Section */}
// //         <div className="flex items-center gap-4 cursor-pointer">
// //           <p className="font-semibold text-3xl text-black leading-tight">
// //             Marks
// //           </p>
// //         </div>

// //         {/* Desktop Menu - Exact same to same */}
// //         <div className="hidden md:flex items-center gap-8">
// //           <div className="flex items-center gap-8 bg-white px-8 py-3 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-black/5">
// //             {navLinks.map((link, index) => (
// //               <a
// //                 key={index}
// //                 href={link.href}
// //                 onClick={() => setActiveLink(link.href)}
// //                 className={`relative text-sm font-medium transition px-3 py-1 rounded-full ${
// //                   activeLink === link.href
// //                     ? "bg-gray-200 text-black"
// //                     : "text-gray-600 hover:text-black"
// //                 }`}
// //               >
// //                 {link.label}
// //               </a>
// //             ))}
// //           </div>

// //           <motion.a
// //             whileHover={{ scale: 1.05 }}
// //             whileTap={{ scale: 0.95 }}
// //             href="#newsletter"
// //             className="bg-black text-white px-7 py-3 rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition"
// //           >
// //             Let's Talk
// //           </motion.a>
// //         </div>

// //         {/* Mobile Toggle Button */}
// //         <button
// //           className="md:hidden text-lg font-medium text-black px-2"
// //           onClick={() => setIsMenuOpen(true)}
// //         >
// //           Menu
// //         </button>
// //       </div>

// //       {/* Fullscreen Mobile Menu Overlay */}
// //       <AnimatePresence>
// //         {isMenuOpen && (
// //           <motion.div
// //             initial="closed"
// //             animate="opened"
// //             exit="closed"
// //             variants={menuVariants}
// //             /* ✅ রেসপন্সিভ ডিভাইসে ব্যাকগ্রাউন্ড কালার #f2f2f2 করা হয়েছে */
// //             className="fixed inset-0 z-[100] bg-[#f2f2f2] text-black flex flex-col md:hidden"
// //           >
// //             {/* Mobile Menu Header */}
// //             <div className="container mx-auto px-4 h-16 flex justify-between items-center border-b border-black/10">
// //               <span className="font-semibold text-2xl">Marks</span>
// //               <button
// //                 onClick={() => setIsMenuOpen(false)}
// //                 className="text-lg font-medium tracking-wide"
// //               >
// //                 Close
// //               </button>
// //             </div>

// //             {/* Mobile Links Container */}
// //             <div className="flex-1 flex flex-col justify-start pt-12 px-6">
// //               {navLinks.map((link, index) => (
// //                 <motion.div
// //                   key={index}
// //                   variants={linkVariants}
// //                   className="border-b border-black/5"
// //                 >
// //                   <a
// //                     href={link.href}
// //                     onClick={() => {
// //                       setActiveLink(link.href);
// //                       setIsMenuOpen(false);
// //                     }}
// //                     className="block py-6 text-4xl font-medium tracking-tight active:text-gray-500"
// //                   >
// //                     {link.label}
// //                   </a>
// //                 </motion.div>
// //               ))}

// //               {/* Mobile CTA */}
// //               <motion.a
// //                 variants={linkVariants}
// //                 href="#newsletter"
// //                 className="mt-12 block w-full text-center bg-black text-white py-4 rounded-full font-bold text-lg shadow-lg"
// //               >
// //                 Let's Talk
// //               </motion.a>
// //             </div>
// //           </motion.div>
// //         )}
// //       </AnimatePresence>
// //     </motion.nav>
// //   );
// // };

// // export default Navbar;


// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { fadeIn } from "../utils/motion";
// import logo from "../assets/Devatorslogo.png"

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [activeLink, setActiveLink] = useState("#home");

//   const navLinks = [
//     { href: "#home", label: "Home" },
//     { href: "#about", label: "About" },
//     { href: "#works", label: "Works" },
//     { href: "#services", label: "Services" },
//     // { href: "#Contact", label: "Contact" },
//     { href: "#contact", label: "Contact" }
//   ];

//   // ✅ Fullscreen mobile menu slide animation (exact same vibe)
//   const menuVariants = {
//     closed: {
//       y: "-100%",
//       transition: { duration: 0.7, ease: [0.19, 1, 0.22, 1] },
//     },
//     opened: {
//       y: 0,
//       transition: {
//         duration: 0.8,
//         ease: [0.19, 1, 0.22, 1],
//         when: "beforeChildren",
//         staggerChildren: 0.08,
//         delayChildren: 0.15,
//       },
//     },
//   };

//   // ✅ Link reveal (smooth)
//   const linkVariants = {
//     closed: { opacity: 0, y: 24, transition: { duration: 0.2 } },
//     opened: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
//     },
//   };

//   // ✅ CTA reveal (slightly later)
//   const ctaVariants = {
//     closed: { opacity: 0, y: 18 },
//     opened: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.15 },
//     },
//   };

//   return (
//     <motion.nav
//       variants={fadeIn("down", 0.2)}
//       initial="hidden"
//       animate="show"
//       className="absolute top-0 left-0 right-0 z-50 bg-[#f2f2f2]"
//     >
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 md:h-20 h-16 flex items-center justify-between">
//         {/* Logo Section (✅ exact same) */}
//         <div className="flex items-center gap-4 cursor-pointer">
//           <p className="font-semibold text-3xl text-black leading-tight">
//             Devators
//           </p>
//         </div>

//         {/* Desktop Menu (✅ exact same to same) */}
//         <div className="hidden md:flex items-center gap-8">
//           <div className="flex items-center gap-8 bg-white px-8 py-3 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-black/5">
//             {navLinks.map((link, index) => (
//               <a
//                 key={index}
//                 href={link.href}
//                 onClick={() => setActiveLink(link.href)}
//                 className={`relative text-sm font-medium transition px-3 py-1 rounded-full ${
//                   activeLink === link.href
//                     ? "bg-gray-200 text-black"
//                     : "text-gray-600 hover:text-black"
//                 }`}
//               >
//                 {link.label}
//               </a>
//             ))}
//           </div>

//           <motion.a
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             href="#newsletter"
//             className="bg-[#ff5517]  text-black px-7 py-3 rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition"
//           >
//             Let's Talk
//           </motion.a>
//         </div>

//         {/* Mobile Toggle Button (✅ Menu text) */}
//         <button
//           className="md:hidden text-lg font-medium text-black px-2"
//           onClick={() => setIsMenuOpen(true)}
//         >
//           Menu
//         </button>
//       </div>

//       {/* ✅ Fullscreen Mobile Menu Overlay */}
//       <AnimatePresence>
//         {isMenuOpen && (
//           <motion.div
//             initial="closed"
//             animate="opened"
//             exit="closed"
//             variants={menuVariants}
//             className="fixed inset-0 z-[100] bg-[#f2f2f2] text-black flex flex-col md:hidden"
//           >
//             {/* Mobile Menu Header (✅ exact same) */}
//             {/* <div className="container mx-auto px-4 h-16 flex justify-between items-center border-b border-black/10"> */}
//             <div className="container mx-auto px-4 h-20 pt-2 flex justify-between items-center border-b border-black/10">
//               <span className="font-semibold text-2xl">Marks</span>

//               <button
//                 onClick={() => setIsMenuOpen(false)}
//                 className="text-lg font-medium tracking-wide"
//               >
//                 Close
//               </button>
//             </div>

//             {/* Mobile Links Container */}
//             <div className="flex-1 flex flex-col justify-start pt-12 px-6">
//               {navLinks.map((link, index) => (
//                 <motion.div
//                   key={index}
//                   variants={linkVariants}
//                   className="border-b border-black/5"
//                 >
//                   <a
//                     href={link.href}
//                     onClick={() => {
//                       setActiveLink(link.href);
//                       setIsMenuOpen(false);
//                     }}
//                     className="block py-6 text-4xl font-medium tracking-tight active:text-gray-500"
//                   >
//                     {link.label}
//                   </a>
//                 </motion.div>
//               ))}

//               {/* Mobile CTA */}
//               <motion.a
//                 variants={ctaVariants}
//                 href="#newsletter"
//                 onClick={() => setIsMenuOpen(false)}
//                 className="mt-4 block w-full text-center bg-black text-white py-4 rounded-full font-bold text-lg shadow-lg"
//               >
//                 Let's Talk
//               </motion.a>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.nav>
//   );
// };

// export default Navbar;


// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { fadeIn } from "../utils/motion";
// import logo from "../assets/Devatorslogo.png";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [activeLink, setActiveLink] = useState("#home");

//   const navLinks = [
//     { href: "#home", label: "Home" },
//     { href: "#about", label: "About" },
//     { href: "#works", label: "Works" },
//     { href: "#services", label: "Services" },
//     { href: "#contact", label: "Contact" },
//   ];

//   const menuVariants = {
//     closed: {
//       y: "-100%",
//       transition: { duration: 0.7, ease: [0.19, 1, 0.22, 1] },
//     },
//     opened: {
//       y: 0,
//       transition: {
//         duration: 0.8,
//         ease: [0.19, 1, 0.22, 1],
//         when: "beforeChildren",
//         staggerChildren: 0.08,
//         delayChildren: 0.15,
//       },
//     },
//   };

//   const linkVariants = {
//     closed: { opacity: 0, y: 24, transition: { duration: 0.2 } },
//     opened: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
//     },
//   };

//   const ctaVariants = {
//     closed: { opacity: 0, y: 18 },
//     opened: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.15 },
//     },
//   };

//   return (
//     <motion.nav
//       variants={fadeIn("down", 0.2)}
//       initial="hidden"
//       animate="show"
//       className="absolute top-0 left-0 right-0 z-50 bg-[#f2f2f2]"
//     >
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 md:h-20 h-16 flex items-center justify-between">

//         {/* LOGO SECTION (TEXT REPLACED WITH IMAGE) */}
//         <div className="flex items-center cursor-pointer">
//           <img
//             src={logo}
//             alt="Logo"
//             className="h-7 md:h-10 w-auto object-contain"
//           />
//         </div>

//         {/* DESKTOP MENU */}
//         <div className="hidden md:flex items-center gap-8">
//           <div className="flex items-center gap-8 bg-white px-8 py-3 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-black/5">
//             {navLinks.map((link, index) => (
//               <a
//                 key={index}
//                 href={link.href}
//                 onClick={() => setActiveLink(link.href)}
//                 className={`relative text-sm font-medium transition px-3 py-1 rounded-full ${
//                   activeLink === link.href
//                     ? "bg-gray-200 text-black"
//                     : "text-gray-600 hover:text-black"
//                 }`}
//               >
//                 {link.label}
//               </a>
//             ))}
//           </div>

//           <motion.a
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             href="#newsletter"
//             className="bg-[#ff5517] text-black px-7 py-3 rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition"
//           >
//             Let's Talk
//           </motion.a>
//         </div>

//         {/* MOBILE BUTTON */}
//         <button
//           className="md:hidden text-lg font-medium text-black px-2"
//           onClick={() => setIsMenuOpen(true)}
//         >
//           Menu
//         </button>
//       </div>

//       {/* MOBILE MENU */}
//       <AnimatePresence>
//         {isMenuOpen && (
//           <motion.div
//             initial="closed"
//             animate="opened"
//             exit="closed"
//             variants={menuVariants}
//             className="fixed inset-0 z-[100] bg-[#f2f2f2] text-black flex flex-col md:hidden"
//           >
//             {/* MOBILE HEADER (LOGO REPLACED HERE TOO) */}
//             <div className="container mx-auto px-4 h-20 pt-2 flex justify-between items-center border-b border-black/10">
//               <img src={logo} alt="Logo" className="h-8 w-auto" />

//               <button
//                 onClick={() => setIsMenuOpen(false)}
//                 className="text-lg font-medium tracking-wide"
//               >
//                 Close
//               </button>
//             </div>

//             {/* LINKS */}
//             <div className="flex-1 flex flex-col justify-start pt-12 px-6">
//               {navLinks.map((link, index) => (
//                 <motion.div
//                   key={index}
//                   variants={linkVariants}
//                   className="border-b border-black/5"
//                 >
//                   <a
//                     href={link.href}
//                     onClick={() => {
//                       setActiveLink(link.href);
//                       setIsMenuOpen(false);
//                     }}
//                     className="block py-6 text-4xl font-medium tracking-tight active:text-gray-500"
//                   >
//                     {link.label}
//                   </a>
//                 </motion.div>
//               ))}

//               {/* CTA */}
//               <motion.a
//                 variants={ctaVariants}
//                 href="#newsletter"
//                 onClick={() => setIsMenuOpen(false)}
//                 className="mt-4 block w-full text-center bg-[#ff5517] text-black py-4 rounded-full font-bold text-lg shadow-lg"
//               >
//                 Let's Talk
//               </motion.a>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.nav>
//   );
// };

// export default Navbar;


import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn } from "../utils/motion";
import logo from "../assets/Devatorslogo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#works", label: "Works" },
    { href: "#services", label: "Services" },
    { href: "#contact", label: "Contact" },
  ];

  // 🔥 SMOOTH SCROLL FUNCTION
  const handleScroll = (id) => {
    setActiveLink(id);
    setIsMenuOpen(false);

    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuVariants = {
    closed: {
      y: "-100%",
      transition: { duration: 0.7, ease: [0.19, 1, 0.22, 1] },
    },
    opened: {
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.19, 1, 0.22, 1],
        when: "beforeChildren",
        staggerChildren: 0.08,
        delayChildren: 0.15,
      },
    },
  };

  const linkVariants = {
    closed: { opacity: 0, y: 24, transition: { duration: 0.2 } },
    opened: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const ctaVariants = {
    closed: { opacity: 0, y: 18 },
    opened: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.15 },
    },
  };

  return (
    <motion.nav
      variants={fadeIn("down", 0.2)}
      initial="hidden"
      animate="show"
      className="absolute top-0 left-0 right-0 z-50 bg-[#f2f2f2]"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 md:h-20 h-16 flex items-center justify-between">

        {/* LOGO */}
        <div className="flex items-center cursor-pointer">
          <img
            src={logo}
            alt="Logo"
            className="h-7 md:h-10 w-auto object-contain"
          />
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-8 bg-white px-8 py-3 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-black/5">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onClick={() => handleScroll(link.href)}
                className={`text-sm font-medium px-3 py-1 rounded-full transition ${
                  activeLink === link.href
                    ? "bg-gray-200 text-black"
                    : "text-gray-600 hover:text-black"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* 🔥 LET'S TALK → SCROLL TO CONTACT */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleScroll("#contact")}
            className="bg-[#ff5517] text-black px-7 py-3 rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition"
          >
            Let's Talk
          </motion.button>
        </div>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden text-lg font-medium text-black px-2"
          onClick={() => setIsMenuOpen(true)}
        >
          Menu
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="closed"
            animate="opened"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 z-[100] bg-[#f2f2f2] text-black flex flex-col md:hidden"
          >
            {/* HEADER */}
            <div className="container mx-auto px-4 h-20 flex justify-between items-center border-b border-black/10">
              <img src={logo} alt="Logo" className="h-8 w-auto" />

              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-lg font-medium tracking-wide"
              >
                Close
              </button>
            </div>

            {/* LINKS */}
            <div className="flex-1 flex flex-col justify-start pt-12 px-6">
              {navLinks.map((link, index) => (
                <motion.div
                  key={index}
                  variants={linkVariants}
                  className="border-b border-black/5"
                >
                  <a
                    href={link.href}
                    onClick={() => handleScroll(link.href)}
                    className="block py-6 text-4xl font-medium tracking-tight"
                  >
                    {link.label}
                  </a>
                </motion.div>
              ))}

              {/* CTA */}
              <motion.button
                variants={ctaVariants}
                onClick={() => handleScroll("#contact")}
                className="mt-4 block w-full text-center bg-[#ff5517] text-black py-4 rounded-full font-bold text-lg shadow-lg"
              >
                Let's Talk
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;