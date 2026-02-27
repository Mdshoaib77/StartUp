// import React, { useState } from 'react'
// import { HiMenu, HiX } from 'react-icons/hi'
// import { motion } from "framer-motion";
// import { fadeIn} from "../utils/motion";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false)
//   const [activeLink, setActiveLink] = useState('#home')

//   const navLinks = [
//     { href: "#home", label: "Home" },
//     { href: "#about", label: "About Us" },
//     { href: "#services", label: "Our Service" },
//     { href: "#testimonials", label: "Testimonials" },
//   ]

//   return (
//     <motion.nav 
//       variants={fadeIn('down', 0.2)}
//       initial="hidden"
//       whileInView="show"
//       viewport={{ once: true }}
//       className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100 shadow-sm"
//     >
//       <div className="w-full flex justify-between items-center container mx-auto px-4 sm:px-6 lg:px-8 md:h-20 h-16">
//         {/* Logo */}
//         <motion.div 
//           variants={fadeIn('right', 0.3)}
//           className="flex items-center gap-1 cursor-pointer"
//         >
//           <motion.div 
//             whileHover={{ scale: 1.1 }}
//             className="w-4 h-4 bg-blue-600 rounded-full opacity-75 hover:opacity-100 transition-opacity"
//           ></motion.div>
//           <motion.div 
//             whileHover={{ scale: 1.1 }}
//             className="w-4 h-4 bg-red-500 rounded-full -ml-2 hover:opacity-75 transition-opacity"
//           ></motion.div>
//         </motion.div>
//         {/* Mobile Menu Button */}
//         <motion.button 
//           variants={fadeIn('left', 0.3)}
//           className="md:hidden p-2"
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//         >
//           {isMenuOpen ? (
//             <HiX className="h-6 w-6" />
//           ) : (
//             <HiMenu className="h-6 w-6" />
//           )}
//         </motion.button>

//         {/* Navigation Links - Desktop */}
//         <motion.div 
//           variants={fadeIn('down', 0.3)}
//           className="hidden md:flex items-center gap-10"
//         >
//           {navLinks.map((link, index) => (
//             <motion.a 
//               key={index}
//               variants={fadeIn('down', 0.1 * (index + 1))}
//               href={link.href}
//               onClick={() => setActiveLink(link.href)}
//               className={`text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all
//                 ${activeLink === link.href ? 'text-blue-600 after:w-full  ' : 'text-gray-600 hover:text-gray-900'}`}
//             >
//               {link.label}
//             </motion.a>
//           ))}
//         </motion.div>

//         {/* CTA Button */}
//         <motion.button 
//           variants={fadeIn('left', 0.3)}
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           className="hidden md:block bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 text-sm font-medium transition-all hover:shadow-lg hover:shadow-blue-100"
//         >
//           <a href="#newsletter">Get in touch</a>
//         </motion.button>
//       </div>

//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <motion.div 
//           variants={fadeIn('down', 0.2)}
//           initial="hidden"
//           animate="show"
//           className="md:hidden bg-white border-t border-gray-100 py-4"
//         >
//           <motion.div 
//             variants={fadeIn('down', 0.3)}
//             className="container mx-auto px-4 space-y-4"
//           >
//             {navLinks.map((link, index) => (
//               <motion.a
//                 key={index}
//                 variants={fadeIn('right', 0.1 * (index + 1))}
//                 href={link.href}
//                 onClick={() => {
//                   setActiveLink(link.href);
//                   setIsMenuOpen(false);
//                 }}
//                 className={`block text-sm font-medium py-2
//                   ${activeLink === link.href ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'}`}
//               >
//                 {link.label}
//               </motion.a>
//             ))}
//             <motion.button 
//               variants={fadeIn('up', 0.4)}
//               whileHover={{ scale: 1.02 }}
//               whileTap={{ scale: 0.98 }}
//               className="w-full bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 text-sm font-medium transition-all hover:shadow-lg hover:shadow-blue-100"
//             >
//               Get in touch
//             </motion.button>
//           </motion.div>
//         </motion.div>
//       )}
//     </motion.nav>
//   )
// }

// export default Navbar



// import React, { useState } from "react";
// import { HiMenu, HiX } from "react-icons/hi";
// import { motion, AnimatePresence } from "framer-motion";
// import { fadeIn } from "../utils/motion";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [activeLink, setActiveLink] = useState("#home");

//   const navLinks = [
//     { href: "#home", label: "Home" },
//     { href: "#about", label: "About" },
//     { href: "#services", label: "Services" },
//     // { href: "#testimonials", label: "Testimonials" },
//     { href: "#Contact", label: "Contact" },
//   ];

//   return (
//     <motion.nav
//       variants={fadeIn("down", 0.2)}
//       initial="hidden"
//       animate="show"
//       className="fixed top-0 left-0 right-0 z-50 bg-[#F2F2F2] border-b border-black/5"
//     >
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 md:h-20 h-16 flex items-center justify-between">

//         {/* Logo */}
//         <div className="flex items-center gap-4 cursor-pointer">
//           <div className="h-11 w-11 flex items-center justify-center rounded-2xl border border-black/10 bg-white text-black font-semibold shadow-sm">
//             TS
//           </div>
//           <div>
//             <p className="font-semibold text-black leading-tight">
//               TawakkulStudio
//             </p>
//             <p className="text-sm text-black/50">
//               Branding • Web • Growth
//             </p>
//           </div>
//         </div>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex items-center gap-8">

//           {/* Center Pill Navigation */}
//           <div className="flex items-center gap-8 bg-white px-8 py-3 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-black/5">

//             {navLinks.map((link, index) => (
//               <a
//                 key={index}
//                 href={link.href}
//                 onClick={() => setActiveLink(link.href)}
//                 className={`relative text-sm font-medium transition px-3 py-1 rounded-full
//                   ${
//                     activeLink === link.href
//                       ? "bg-gray-200 text-black"
//                       : "text-gray-600 hover:text-black"
//                   }`}
//               >
//                 {link.label}
//               </a>
//             ))}
//           </div>

//           {/* CTA Button */}
//           <motion.a
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             href="#newsletter"
//             className="bg-black text-white px-7 py-3 rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition"
//           >
//             Get a Quote
//           </motion.a>
//         </div>

//         {/* Mobile Toggle */}
//         <button
//           className="md:hidden p-2 text-black"
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//         >
//           {isMenuOpen ? (
//             <HiX className="h-6 w-6" />
//           ) : (
//             <HiMenu className="h-6 w-6" />
//           )}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {isMenuOpen && (
//           <>
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               className="fixed inset-0 bg-black/20 backdrop-blur-sm md:hidden"
//               onClick={() => setIsMenuOpen(false)}
//             />

//             <motion.div
//               initial={{ y: -40, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               exit={{ y: -40, opacity: 0 }}
//               transition={{ type: "spring", stiffness: 220 }}
//               className="absolute top-full left-0 right-0 bg-[#F1F2F4] md:hidden shadow-xl border-t border-black/5"
//             >
//               <div className="px-6 py-8 space-y-6">

//                 {navLinks.map((link, index) => (
//                   <motion.a
//                     key={index}
//                     href={link.href}
//                     initial={{ x: -40, opacity: 0 }}
//                     animate={{ x: 0, opacity: 1 }}
//                     transition={{ delay: index * 0.1 }}
//                     onClick={() => {
//                       setActiveLink(link.href);
//                       setIsMenuOpen(false);
//                     }}
//                     className="block text-lg font-medium text-gray-700 hover:text-black"
//                   >
//                     {link.label}
//                   </motion.a>
//                 ))}

//                 <motion.a
//                   initial={{ y: 20, opacity: 0 }}
//                   animate={{ y: 0, opacity: 1 }}
//                   transition={{ delay: 0.3 }}
//                   href="#newsletter"
//                   className="block w-full text-center bg-black text-white py-3 rounded-full font-medium"
//                 >
//                   Let's Talk
//                 </motion.a>

//               </div>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>
//     </motion.nav>
//   );
// };

// export default Navbar;

// import React, { useState } from "react";
// import { HiMenu, HiX } from "react-icons/hi";
// import { motion, AnimatePresence } from "framer-motion";
// import { fadeIn } from "../utils/motion";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [activeLink, setActiveLink] = useState("#home");

//   const navLinks = [
//     { href: "#home", label: "Home" },
//     { href: "#about", label: "About" },
//     { href: "#services", label: "Services" },
//     { href: "#Contact", label: "Contact" },
//   ];

//   return (
//     <motion.nav
//       variants={fadeIn("down", 0.2)}
//       initial="hidden"
//       animate="show"
//       className="fixed top-0 left-0 right-0 z-50 bg-[#F2F2F2]"
//     >
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 md:h-20 h-16 flex items-center justify-between">

//         {/* Logo */}
//         <div className="flex items-center gap-4 cursor-pointer">
//           <div className="h-11 w-11 flex items-center justify-center rounded-2xl border border-black/10 bg-white text-black font-semibold shadow-sm">
//             TS
//           </div>
//           <div>
//             <p className="font-semibold text-black leading-tight">
//               TawakkulStudio
//             </p>
//             <p className="text-sm text-black/50">
//               Branding • Web • Growth
//             </p>
//           </div>
//         </div>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex items-center gap-8">

//           {/* Center Pill Navigation */}
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

//           {/* CTA Button */}
//           <motion.a
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             href="#newsletter"
//             className="bg-black text-white px-7 py-3 rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition"
//           >
//             Let's Talk
//           </motion.a>
//         </div>

//         {/* Mobile Toggle */}
//         <button
//           className="md:hidden p-2 text-black"
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//         >
//           {isMenuOpen ? (
//             <HiX className="h-6 w-6" />
//           ) : (
//             <HiMenu className="h-6 w-6" />
//           )}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {isMenuOpen && (
//           <>
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               className="fixed inset-0 bg-black/20 backdrop-blur-sm md:hidden"
//               onClick={() => setIsMenuOpen(false)}
//             />

//             <motion.div
//               initial={{ y: -40, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               exit={{ y: -40, opacity: 0 }}
//               transition={{ type: "spring", stiffness: 220 }}
//               className="absolute top-full left-0 right-0 bg-[#F1F2F4] md:hidden shadow-xl"
//             >
//               <div className="px-6 py-8 space-y-6">

//                 {navLinks.map((link, index) => (
//                   <motion.a
//                     key={index}
//                     href={link.href}
//                     initial={{ x: -40, opacity: 0 }}
//                     animate={{ x: 0, opacity: 1 }}
//                     transition={{ delay: index * 0.1 }}
//                     onClick={() => {
//                       setActiveLink(link.href);
//                       setIsMenuOpen(false);
//                     }}
//                     className="block text-lg font-medium text-gray-700 hover:text-black"
//                   >
//                     {link.label}
//                   </motion.a>
//                 ))}

//                 <motion.a
//                   initial={{ y: 20, opacity: 0 }}
//                   animate={{ y: 0, opacity: 1 }}
//                   transition={{ delay: 0.3 }}
//                   href="#newsletter"
//                   className="block w-full text-center bg-black text-white py-3 rounded-full font-medium"
//                 >
//                   Let's Talk
//                 </motion.a>

//               </div>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>
//     </motion.nav>
//   );
// };

// export default Navbar;


// import React, { useState } from "react";
// import { HiMenu, HiX } from "react-icons/hi";
// import { motion, AnimatePresence } from "framer-motion";
// import { fadeIn } from "../utils/motion";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [activeLink, setActiveLink] = useState("#home");

//   const navLinks = [
//     { href: "#home", label: "Home" },
//     { href: "#about", label: "About" },
//     { href: "#services", label: "Services" },
//     { href: "#Contact", label: "Contact" },
//   ];

//   return (
//     <motion.nav
//       variants={fadeIn("down", 0.2)}
//       initial="hidden"
//       animate="show"
//       /* ✅ 'fixed' পরিবর্তন করে 'absolute' করা হয়েছে যাতে স্ক্রল করলে এটি উপরে চলে যায় */
//       className="absolute top-0 left-0 right-0 z-50 bg-[#F2F2F2]"
//     >
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 md:h-20 h-16 flex items-center justify-between">

//         {/* Logo */}
//         <div className="flex items-center gap-4 cursor-pointer">
//           <div className="h-11 w-11 flex items-center justify-center rounded-2xl border border-black/10 bg-white text-black font-semibold shadow-sm">
//             TS
//           </div>
//           <div>
//             <p className="font-semibold text-black leading-tight">
//               TawakkulStudio
//             </p>
//             <p className="text-sm text-black/50">
//               Branding • Web • Growth
//             </p>
//           </div>
//         </div>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex items-center gap-8">

//           {/* Center Pill Navigation */}
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

//           {/* CTA Button */}
//           <motion.a
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             href="#newsletter"
//             className="bg-black text-white px-7 py-3 rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition"
//           >
//             Let's Talk
//           </motion.a>
//         </div>

//         {/* Mobile Toggle */}
//         <button
//           className="md:hidden p-2 text-black"
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//         >
//           {isMenuOpen ? (
//             <HiX className="h-6 w-6" />
//           ) : (
//             <HiMenu className="h-6 w-6" />
//           )}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {isMenuOpen && (
//           <>
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               /* ✅ Mobile Overlay ও 'absolute' করা হয়েছে */
//               className="absolute inset-0 h-[100vh] bg-black/20 backdrop-blur-sm md:hidden"
//               onClick={() => setIsMenuOpen(false)}
//             />

//             <motion.div
//               initial={{ y: -40, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               exit={{ y: -40, opacity: 0 }}
//               transition={{ type: "spring", stiffness: 220 }}
//               className="absolute top-full left-0 right-0 bg-[#F1F2F4] md:hidden shadow-xl"
//             >
//               <div className="px-6 py-8 space-y-6">

//                 {navLinks.map((link, index) => (
//                   <motion.a
//                     key={index}
//                     href={link.href}
//                     initial={{ x: -40, opacity: 0 }}
//                     animate={{ x: 0, opacity: 1 }}
//                     transition={{ delay: index * 0.1 }}
//                     onClick={() => {
//                       setActiveLink(link.href);
//                       setIsMenuOpen(false);
//                     }}
//                     className="block text-lg font-medium text-gray-700 hover:text-black"
//                   >
//                     {link.label}
//                   </motion.a>
//                 ))}

//                 <motion.a
//                   initial={{ y: 20, opacity: 0 }}
//                   animate={{ y: 0, opacity: 1 }}
//                   transition={{ delay: 0.3 }}
//                   href="#newsletter"
//                   className="block w-full text-center bg-black text-white py-3 rounded-full font-medium"
//                 >
//                   Let's Talk
//                 </motion.a>

//               </div>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>
//     </motion.nav>
//   );
// };

// export default Navbar;


// import React, { useState } from "react";
// import { HiMenu, HiX } from "react-icons/hi";
// import { motion, AnimatePresence } from "framer-motion";
// import { fadeIn } from "../utils/motion";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [activeLink, setActiveLink] = useState("#home");

//   const navLinks = [
//     { href: "#home", label: "Home" },
//     { href: "#about", label: "About" },
//     { href: "#works", label: "works" },
//     { href: "#services", label: "Services" },
//     { href: "#Contact", label: "Contact" },
//   ];

//   return (
//     <motion.nav
//       variants={fadeIn("down", 0.2)}
//       initial="hidden"
//       animate="show"
//       /* ✅ 'fixed' পরিবর্তন করে 'absolute' করা হয়েছে যাতে স্ক্রল করলে এটি উপরে চলে যায় */
//       className="absolute top-0 left-0 right-0 z-50 bg-[#F2F2F2]"
//     >
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 md:h-20 h-16 flex items-center justify-between">

//         {/* Logo */}
//         <div className="flex items-center gap-4 cursor-pointer">
//           {/* <div className="h-11 w-11 flex items-center justify-center rounded-2xl border border-black/10 bg-white text-black font-semibold shadow-sm">
//             TS
//           </div> */}
//           <div>
//             <p className="font-semibold text-3xl text-black leading-tight">
//               Marks
//             </p>
//             {/* <p className="text-sm text-black/50">
//               Branding • Web • Growth
//             </p> */}
//           </div>
//         </div>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex items-center gap-8">

//           {/* Center Pill Navigation */}
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

//           {/* CTA Button */}
//           <motion.a
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             href="#newsletter"
//             className="bg-black text-white px-7 py-3 rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition"
//           >
//             Let's Talk
//           </motion.a>
//         </div>

//         {/* Mobile Toggle */}
//         <button
//           className="md:hidden p-2 text-black"
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//         >
//           {isMenuOpen ? (
//             <HiX className="h-6 w-6" />
//           ) : (
//             <HiMenu className="h-6 w-6" />
//           )}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {isMenuOpen && (
//           <>
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               /* ✅ Mobile Overlay ও 'absolute' করা হয়েছে */
//               className="absolute inset-0 h-[100vh] bg-black/20 backdrop-blur-sm md:hidden"
//               onClick={() => setIsMenuOpen(false)}
//             />

//             <motion.div
//               initial={{ y: -40, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               exit={{ y: -40, opacity: 0 }}
//               transition={{ type: "spring", stiffness: 220 }}
//               className="absolute top-full left-0 right-0 bg-[#F1F2F4] md:hidden shadow-xl"
//             >
//               <div className="px-6 py-8 space-y-6">

//                 {navLinks.map((link, index) => (
//                   <motion.a
//                     key={index}
//                     href={link.href}
//                     initial={{ x: -40, opacity: 0 }}
//                     animate={{ x: 0, opacity: 1 }}
//                     transition={{ delay: index * 0.1 }}
//                     onClick={() => {
//                       setActiveLink(link.href);
//                       setIsMenuOpen(false);
//                     }}
//                     className="block text-lg font-medium text-gray-700 hover:text-black"
//                   >
//                     {link.label}
//                   </motion.a>
//                 ))}

//                 <motion.a
//                   initial={{ y: 20, opacity: 0 }}
//                   animate={{ y: 0, opacity: 1 }}
//                   transition={{ delay: 0.3 }}
//                   href="#newsletter"
//                   className="block w-full text-center bg-black text-white py-3 rounded-full font-medium"
//                 >
//                   Let's Talk
//                 </motion.a>

//               </div>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>
//     </motion.nav>
//   );
// };

// export default Navbar;

// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { fadeIn } from "../utils/motion";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [activeLink, setActiveLink] = useState("#home");

//   const navLinks = [
//     { href: "#home", label: "Home" },
//     { href: "#about", label: "About" },
//     { href: "#works", label: "Works" },
//     { href: "#services", label: "Services" },
//     { href: "#Contact", label: "Contact" },
//   ];

//   // মোবাইল মেনু অ্যানিমেশন ভেরিয়েন্ট (ভিডিওর মতো স্লাইড)
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
//         staggerChildren: 0.1,
//         delayChildren: 0.2,
//       },
//     },
//   };

//   const linkVariants = {
//     closed: { opacity: 0, y: 30 },
//     opened: { opacity: 1, y: 0 },
//   };

//   return (
//     <motion.nav
//       variants={fadeIn("down", 0.2)}
//       initial="hidden"
//       animate="show"
//       className="absolute top-0 left-0 right-0 z-50 bg-[#F2F2F2]"
//     >
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 md:h-20 h-16 flex items-center justify-between">
        
//         {/* Logo (আপনার দেওয়া ডিটেইলস অনুযায়ী) */}
//         <div className="flex items-center gap-4 cursor-pointer">
//           <p className="font-semibold text-3xl text-black leading-tight">
//             Marks
//           </p>
//         </div>

//         {/* Desktop Menu (Exact same as your provided code) */}
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
//             className="bg-black text-white px-7 py-3 rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition"
//           >
//             Let's Talk
//           </motion.a>
//         </div>

//         {/* Mobile Toggle Button (ভিডিওর মতো "Menu" টেক্সট) */}
//         <button
//           className="md:hidden text-lg font-medium text-black px-2"
//           onClick={() => setIsMenuOpen(true)}
//         >
//           Menu
//         </button>
//       </div>

//       {/* Fullscreen Mobile Menu Overlay (ভিডিওর মতো এনিমেশন) */}
//       <AnimatePresence>
//         {isMenuOpen && (
//           <motion.div
//             initial="closed"
//             animate="opened"
//             exit="closed"
//             variants={menuVariants}
//             className="fixed inset-0 z-[100] bg-[#111111] text-white flex flex-col md:hidden"
//           >
//             {/* Mobile Menu Header */}
//             <div className="container mx-auto px-4 h-16 flex justify-between items-center border-b border-white/10">
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
//                   className="border-b border-white/5"
//                 >
//                   <a
//                     href={link.href}
//                     onClick={() => {
//                       setActiveLink(link.href);
//                       setIsMenuOpen(false);
//                     }}
//                     className="block py-6 text-4xl font-medium tracking-tight active:text-gray-400"
//                   >
//                     {link.label}
//                   </a>
//                 </motion.div>
//               ))}

//               {/* Mobile CTA */}
//               <motion.a
//                 variants={linkVariants}
//                 href="#newsletter"
//                 className="mt-12 block w-full text-center bg-white text-black py-4 rounded-full font-bold text-lg"
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

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [activeLink, setActiveLink] = useState("#home");

//   const navLinks = [
//     { href: "#home", label: "Home" },
//     { href: "#about", label: "About" },
//     { href: "#works", label: "Works" },
//     { href: "#services", label: "Services" },
//     { href: "#Contact", label: "Contact" },
//   ];

//   // মোবাইল মেনু স্লাইড অ্যানিমেশন
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
//         staggerChildren: 0.1,
//         delayChildren: 0.2,
//       },
//     },
//   };

//   const linkVariants = {
//     closed: { opacity: 0, y: 30 },
//     opened: { opacity: 1, y: 0 },
//   };

//   return (
//     <motion.nav
//       variants={fadeIn("down", 0.2)}
//       initial="hidden"
//       animate="show"
//       className="absolute top-0 left-0 right-0 z-50 bg-[#f2f2f2]"
//     >
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 md:h-20 h-16 flex items-center justify-between">
        
//         {/* Logo Section */}
//         <div className="flex items-center gap-4 cursor-pointer">
//           <p className="font-semibold text-3xl text-black leading-tight">
//             Marks
//           </p>
//         </div>

//         {/* Desktop Menu - Exact same to same */}
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
//             className="bg-black text-white px-7 py-3 rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition"
//           >
//             Let's Talk
//           </motion.a>
//         </div>

//         {/* Mobile Toggle Button */}
//         <button
//           className="md:hidden text-lg font-medium text-black px-2"
//           onClick={() => setIsMenuOpen(true)}
//         >
//           Menu
//         </button>
//       </div>

//       {/* Fullscreen Mobile Menu Overlay */}
//       <AnimatePresence>
//         {isMenuOpen && (
//           <motion.div
//             initial="closed"
//             animate="opened"
//             exit="closed"
//             variants={menuVariants}
//             /* ✅ রেসপন্সিভ ডিভাইসে ব্যাকগ্রাউন্ড কালার #f2f2f2 করা হয়েছে */
//             className="fixed inset-0 z-[100] bg-[#f2f2f2] text-black flex flex-col md:hidden"
//           >
//             {/* Mobile Menu Header */}
//             <div className="container mx-auto px-4 h-16 flex justify-between items-center border-b border-black/10">
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
//                 variants={linkVariants}
//                 href="#newsletter"
//                 className="mt-12 block w-full text-center bg-black text-white py-4 rounded-full font-bold text-lg shadow-lg"
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

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#works", label: "Works" },
    { href: "#services", label: "Services" },
    { href: "#Contact", label: "Contact" },
  ];

  // ✅ Fullscreen mobile menu slide animation (exact same vibe)
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

  // ✅ Link reveal (smooth)
  const linkVariants = {
    closed: { opacity: 0, y: 24, transition: { duration: 0.2 } },
    opened: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
    },
  };

  // ✅ CTA reveal (slightly later)
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
        {/* Logo Section (✅ exact same) */}
        <div className="flex items-center gap-4 cursor-pointer">
          <p className="font-semibold text-3xl text-black leading-tight">
            Marks
          </p>
        </div>

        {/* Desktop Menu (✅ exact same to same) */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-8 bg-white px-8 py-3 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-black/5">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onClick={() => setActiveLink(link.href)}
                className={`relative text-sm font-medium transition px-3 py-1 rounded-full ${
                  activeLink === link.href
                    ? "bg-gray-200 text-black"
                    : "text-gray-600 hover:text-black"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#newsletter"
            className="bg-black text-white px-7 py-3 rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition"
          >
            Let's Talk
          </motion.a>
        </div>

        {/* Mobile Toggle Button (✅ Menu text) */}
        <button
          className="md:hidden text-lg font-medium text-black px-2"
          onClick={() => setIsMenuOpen(true)}
        >
          Menu
        </button>
      </div>

      {/* ✅ Fullscreen Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="closed"
            animate="opened"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 z-[100] bg-[#f2f2f2] text-black flex flex-col md:hidden"
          >
            {/* Mobile Menu Header (✅ exact same) */}
            {/* <div className="container mx-auto px-4 h-16 flex justify-between items-center border-b border-black/10"> */}
            <div className="container mx-auto px-4 h-20 pt-2 flex justify-between items-center border-b border-black/10">
              <span className="font-semibold text-2xl">Marks</span>

              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-lg font-medium tracking-wide"
              >
                Close
              </button>
            </div>

            {/* Mobile Links Container */}
            <div className="flex-1 flex flex-col justify-start pt-12 px-6">
              {navLinks.map((link, index) => (
                <motion.div
                  key={index}
                  variants={linkVariants}
                  className="border-b border-black/5"
                >
                  <a
                    href={link.href}
                    onClick={() => {
                      setActiveLink(link.href);
                      setIsMenuOpen(false);
                    }}
                    className="block py-6 text-4xl font-medium tracking-tight active:text-gray-500"
                  >
                    {link.label}
                  </a>
                </motion.div>
              ))}

              {/* Mobile CTA */}
              <motion.a
                variants={ctaVariants}
                href="#newsletter"
                onClick={() => setIsMenuOpen(false)}
                className="mt-6 block w-full text-center bg-black text-white py-4 rounded-full font-bold text-lg shadow-lg"
              >
                Let's Talk
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;


// import React, { useState } from "react";
// import { HiMenu, HiX } from "react-icons/hi";
// import { motion, AnimatePresence } from "framer-motion";
// import { fadeIn } from "../utils/motion";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [activeLink, setActiveLink] = useState("#home");

//   const navLinks = [
//     { href: "#home", label: "Work" },
//     { href: "#about", label: "Services" },
//     { href: "#services", label: "About" },
//     { href: "#testimonials", label: "Blog" },
//     { href: "#contact", label: "Contact" },
//   ];

//   return (
//     <motion.nav
//       variants={fadeIn("down", 0.2)}
//       initial="hidden"
//       animate="show"
//       className="fixed top-0 left-0 right-0 z-50 bg-[#F1F2F4] border-b border-black/5"
//     >
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">

//         {/* Logo */}
//         <div className="flex items-center gap-4 cursor-pointer">
//           <div className="h-11 w-11 flex items-center justify-center rounded-2xl border border-black/10 bg-white text-black font-semibold shadow-sm">
//             TS
//           </div>
//           <div>
//             <p className="font-semibold text-black leading-tight">
//               TawakkulStudio
//             </p>
//             <p className="text-sm text-black/50">
//               Branding • Web • Growth
//             </p>
//           </div>
//         </div>

//         {/* Desktop */}
//         <div className="hidden md:flex items-center gap-8">
//           <div className="flex items-center gap-8 bg-white px-8 py-3 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-black/5">
//             {navLinks.map((link, index) => (
//               <a
//                 key={index}
//                 href={link.href}
//                 onClick={() => setActiveLink(link.href)}
//                 className={`text-sm font-medium px-3 py-1 rounded-full transition
//                   ${
//                     activeLink === link.href
//                       ? "bg-gray-200 text-black"
//                       : "text-gray-600 hover:text-black"
//                   }`}
//               >
//                 {link.label}
//               </a>
//             ))}
//           </div>

//           <motion.a
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             href="#newsletter"
//             className="bg-black text-white px-7 py-3 rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition"
//           >
//             Get a Quote
//           </motion.a>
//         </div>

//         {/* Mobile */}
//         <button
//           className="md:hidden p-2 text-black"
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//         >
//           {isMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
//         </button>
//       </div>

//       <AnimatePresence>
//         {isMenuOpen && (
//           <>
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               className="fixed inset-0 bg-black/20 backdrop-blur-sm md:hidden"
//               onClick={() => setIsMenuOpen(false)}
//             />

//             <motion.div
//               initial={{ y: -40, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               exit={{ y: -40, opacity: 0 }}
//               className="absolute top-full left-0 right-0 bg-[#F1F2F4] md:hidden shadow-xl border-t border-black/5"
//             >
//               <div className="px-6 py-8 space-y-6">
//                 {navLinks.map((link, index) => (
//                   <a
//                     key={index}
//                     href={link.href}
//                     onClick={() => {
//                       setActiveLink(link.href);
//                       setIsMenuOpen(false);
//                     }}
//                     className="block text-lg font-medium text-gray-700 hover:text-black"
//                   >
//                     {link.label}
//                   </a>
//                 ))}

//                 <a
//                   href="#newsletter"
//                   className="block w-full text-center bg-black text-white py-3 rounded-full font-medium"
//                 >
//                   Get a Quote
//                 </a>
//               </div>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>
//     </motion.nav>
//   );
// };

// export default Navbar;


// import React, { useState } from "react";
// import { HiMenu, HiX } from "react-icons/hi";
// import { motion, AnimatePresence } from "framer-motion";
// import { fadeIn } from "../utils/motion";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [activeLink, setActiveLink] = useState("#home");

//   const navLinks = [
//     { href: "#home", label: "Home" },
//     { href: "#about", label: "About Us" },
//     { href: "#services", label: "Our Service" },
//     { href: "#testimonials", label: "Testimonials" },
//   ];

//   return (
//     <motion.nav
//       variants={fadeIn("down", 0.2)}
//       initial="hidden"
//       animate="show"
//       className="fixed top-0 left-0 right-0 z-50 bg-[#F1F2F4] border-b border-black/5"
//     >
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between md:h-20 h-16">

//         {/* Logo */}
//         <div className="flex items-center gap-3 cursor-pointer">
//           <div className="h-10 w-10 flex items-center justify-center rounded-xl border border-black/10 bg-white font-semibold text-black">
//             TS
//           </div>
//           <div>
//             <p className="font-semibold text-black leading-none">
//               TawakkulStudio
//             </p>
//             <p className="text-xs text-black/50">
//               Branding • Web • Growth
//             </p>
//           </div>
//         </div>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex items-center gap-6">

//           {/* Pill Menu */}
//           <div className="flex items-center gap-6 bg-white px-6 py-2 rounded-full shadow-sm border border-black/5">
//             {navLinks.map((link, index) => (
//               <a
//                 key={index}
//                 href={link.href}
//                 onClick={() => setActiveLink(link.href)}
//                 className={`relative text-sm font-medium transition-all px-3 py-1 rounded-full
//                   ${
//                     activeLink === link.href
//                       ? "bg-gray-200 text-black"
//                       : "text-gray-600 hover:text-black"
//                   }`}
//               >
//                 {link.label}
//               </a>
//             ))}
//           </div>

//           {/* CTA */}
//           <motion.a
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             href="#newsletter"
//             className="bg-black text-white px-6 py-2.5 rounded-full text-sm font-medium shadow-md hover:shadow-lg transition"
//           >
//             Get a Quote
//           </motion.a>
//         </div>

//         {/* Mobile Button */}
//         <button
//           className="md:hidden p-2 text-black"
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//         >
//           {isMenuOpen ? (
//             <HiX className="h-6 w-6" />
//           ) : (
//             <HiMenu className="h-6 w-6" />
//           )}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {isMenuOpen && (
//           <>
//             {/* Overlay */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               className="fixed inset-0 bg-black/30 backdrop-blur-sm md:hidden"
//               onClick={() => setIsMenuOpen(false)}
//             />

//             {/* Slide Down Panel */}
//             <motion.div
//               initial={{ y: -50, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               exit={{ y: -50, opacity: 0 }}
//               transition={{ type: "spring", stiffness: 200 }}
//               className="absolute top-full left-0 right-0 bg-[#F1F2F4] shadow-xl md:hidden border-t border-black/5"
//             >
//               <div className="px-6 py-6 space-y-6">

//                 {navLinks.map((link, index) => (
//                   <motion.a
//                     key={index}
//                     href={link.href}
//                     initial={{ x: -40, opacity: 0 }}
//                     animate={{ x: 0, opacity: 1 }}
//                     transition={{ delay: index * 0.1 }}
//                     onClick={() => {
//                       setActiveLink(link.href);
//                       setIsMenuOpen(false);
//                     }}
//                     className={`block text-lg font-medium transition
//                       ${
//                         activeLink === link.href
//                           ? "text-black"
//                           : "text-gray-600"
//                       }`}
//                   >
//                     {link.label}
//                   </motion.a>
//                 ))}

//                 <motion.a
//                   initial={{ y: 20, opacity: 0 }}
//                   animate={{ y: 0, opacity: 1 }}
//                   transition={{ delay: 0.3 }}
//                   href="#newsletter"
//                   className="block w-full text-center bg-black text-white py-3 rounded-full font-medium"
//                 >
//                   Get a Quote
//                 </motion.a>

//               </div>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>
//     </motion.nav>
//   );
// };

// export default Navbar;






// // import { useState } from "react";
// // import { HiMenuAlt3, HiX } from "react-icons/hi";

// // const Navbar = () => {
// //   const [open, setOpen] = useState(false);

// //   const navLinks = [
// //     { name: "Home", link: "/" },
// //     { name: "Services", link: "/services" },
// //     { name: "Portfolio", link: "/portfolio" },
// //     { name: "About", link: "/about" },
// //     { name: "Contact", link: "/contact" },
// //   ];

// //   return (
// //     <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/40 border-b border-white/10">
// //       <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">

// //         {/* Logo */}
// //         <div className="text-2xl font-extrabold tracking-wide text-white">
// //           <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
// //             Nova
// //           </span>
// //           <span className="text-white">Studio</span>
// //         </div>

// //         {/* Desktop Menu */}
// //         <nav className="hidden md:flex items-center gap-10">
// //           {navLinks.map((item, index) => (
// //             <a
// //               key={index}
// //               href={item.link}
// //               className="text-white/80 hover:text-white transition duration-300 relative group"
// //             >
// //               {item.name}
// //               <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
// //             </a>
// //           ))}
// //         </nav>

// //         {/* CTA Button */}
// //         <div className="hidden md:block">
// //           <a
// //             href="/contact"
// //             className="px-6 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold shadow-lg hover:scale-105 transition duration-300"
// //           >
// //             Let’s Talk
// //           </a>
// //         </div>

// //         {/* Mobile Menu Button */}
// //         <div className="md:hidden text-white text-3xl cursor-pointer">
// //           {open ? (
// //             <HiX onClick={() => setOpen(false)} />
// //           ) : (
// //             <HiMenuAlt3 onClick={() => setOpen(true)} />
// //           )}
// //         </div>
// //       </div>

// //       {/* Mobile Menu */}
// //       <div
// //         className={`md:hidden absolute top-20 left-0 w-full bg-black/90 backdrop-blur-xl border-t border-white/10 transition-all duration-500 ${
// //           open ? "opacity-100 visible" : "opacity-0 invisible"
// //         }`}
// //       >
// //         <div className="flex flex-col items-center gap-8 py-10">
// //           {navLinks.map((item, index) => (
// //             <a
// //               key={index}
// //               href={item.link}
// //               onClick={() => setOpen(false)}
// //               className="text-white text-lg hover:text-purple-400 transition"
// //             >
// //               {item.name}
// //             </a>
// //           ))}

// //           <a
// //             href="/contact"
// //             className="mt-4 px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold shadow-lg"
// //           >
// //             Let’s Talk
// //           </a>
// //         </div>
// //       </div>
// //     </header>
// //   );
// // };

// // export default Navbar;


// import React, { useEffect, useState } from "react";
// import { Link, NavLink } from "react-router-dom";
// import { AnimatePresence, motion } from "framer-motion";

// const navItems = [
//   { label: "Work", to: "/work" },
//   { label: "Services", to: "/services" },
//   { label: "About", to: "/about" },
//   { label: "Blog", to: "/blog" },
//   { label: "Contact", to: "/contact" },
// ];

// const Path = (props) => (
//   <motion.path
//     fill="transparent"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     {...props}
//   />
// );

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 8);
//     onScroll();
//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   useEffect(() => {
//     if (open) document.body.style.overflow = "hidden";
//     else document.body.style.overflow = "";
//     return () => (document.body.style.overflow = "");
//   }, [open]);

//   const closeMenu = () => setOpen(false);

//   return (
//     <motion.header
//       initial={{ y: -10, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ type: "spring", stiffness: 260, damping: 24 }}
//       className={[
//         "sticky top-0 z-50 w-full transition-all duration-300",
//         scrolled
//           ? "bg-[#F1F2F4]/80 backdrop-blur-xl border-b border-black/5 shadow-sm"
//           : "bg-[#F1F2F4]/60 backdrop-blur-md",
//       ].join(" ")}
//     >
//       <div className="mx-auto max-w-6xl px-4">
//         <div className="flex h-16 items-center justify-between">

//           {/* Logo */}
//           <Link
//             to="/"
//             className="group inline-flex items-center gap-2 text-black"
//             onClick={closeMenu}
//           >
//             <span className="relative grid h-9 w-9 place-items-center rounded-xl border border-black/10 bg-white">
//               <span className="text-sm font-bold tracking-wide">TS</span>
//             </span>
//             <span className="leading-none">
//               <span className="block text-sm font-bold tracking-tight">
//                 TawakkulStudio
//               </span>
//               <span className="block text-xs text-black/50">
//                 Branding • Web • Growth
//               </span>
//             </span>
//           </Link>

//           {/* Desktop Nav */}
//           <nav className="hidden items-center gap-2 md:flex">
//             <div className="relative flex items-center rounded-full border border-black/10 bg-white p-1 shadow-sm">
//               {navItems.map((item) => (
//                 <NavLink key={item.to} to={item.to} className="relative">
//                   {({ isActive }) => (
//                     <motion.span
//                       whileHover={{ y: -1 }}
//                       transition={{ type: "spring", stiffness: 400, damping: 30 }}
//                       className={[
//                         "relative z-10 inline-flex items-center rounded-full px-4 py-2 text-sm font-medium transition",
//                         isActive
//                           ? "text-black"
//                           : "text-black/60 hover:text-black",
//                       ].join(" ")}
//                     >
//                       {isActive && (
//                         <motion.span
//                           layoutId="navPill"
//                           className="absolute inset-0 -z-10 rounded-full bg-[#E5E7EB]"
//                           transition={{ type: "spring", stiffness: 380, damping: 30 }}
//                         />
//                       )}
//                       {item.label}
//                     </motion.span>
//                   )}
//                 </NavLink>
//               ))}
//             </div>

//             {/* CTA Button */}
//             <motion.div whileHover={{ y: -1 }} whileTap={{ scale: 0.98 }}>
//               <Link
//                 to="/contact"
//                 className="ml-3 inline-flex items-center justify-center rounded-full bg-black px-5 py-2 text-sm font-semibold text-white shadow-md transition hover:bg-black/90"
//               >
//                 Get a Quote
//               </Link>
//             </motion.div>
//           </nav>

//           {/* Mobile Button */}
//           <button
//             className="md:hidden inline-flex items-center justify-center rounded-xl border border-black/10 bg-white p-2 text-black"
//             onClick={() => setOpen((v) => !v)}
//           >
//             <motion.svg
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               initial={false}
//               animate={open ? "open" : "closed"}
//             >
//               <Path
//                 variants={{
//                   closed: { d: "M 4 7 L 20 7" },
//                   open: { d: "M 5 19 L 19 5" },
//                 }}
//               />
//               <Path
//                 variants={{
//                   closed: { d: "M 4 12 L 20 12", opacity: 1 },
//                   open: { d: "M 4 12 L 20 12", opacity: 0 },
//                 }}
//               />
//               <Path
//                 variants={{
//                   closed: { d: "M 4 17 L 20 17" },
//                   open: { d: "M 5 5 L 19 19" },
//                 }}
//               />
//             </motion.svg>
//           </button>
//         </div>
//       </div>

//       {/* Mobile Panel */}
//       <AnimatePresence>
//         {open && (
//           <>
//             <motion.div
//               className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm md:hidden"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               onClick={closeMenu}
//             />

//             <motion.aside
//               className="fixed left-0 right-0 top-16 z-50 mx-3 rounded-2xl border border-black/10 bg-white p-4 shadow-xl md:hidden"
//               initial={{ y: -10, opacity: 0, scale: 0.98 }}
//               animate={{ y: 0, opacity: 1, scale: 1 }}
//               exit={{ y: -10, opacity: 0, scale: 0.98 }}
//             >
//               <div className="grid gap-2">
//                 {navItems.map((item) => (
//                   <NavLink
//                     key={item.to}
//                     to={item.to}
//                     onClick={closeMenu}
//                     className="rounded-xl px-4 py-3 text-sm text-black/70 hover:bg-gray-100 hover:text-black"
//                   >
//                     {item.label}
//                   </NavLink>
//                 ))}
//               </div>

//               <Link
//                 to="/contact"
//                 onClick={closeMenu}
//                 className="mt-4 block rounded-full bg-black px-4 py-3 text-center text-sm font-semibold text-white"
//               >
//                 Get a Quote
//               </Link>
//             </motion.aside>
//           </>
//         )}
//       </AnimatePresence>
//     </motion.header>
//   );
// }