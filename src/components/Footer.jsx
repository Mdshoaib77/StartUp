// // // // // // // // // // // // // // // // import React from 'react'
// // // // // // // // // // // // // // // // import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa'
// // // // // // // // // // // // // // // // import { motion } from "framer-motion";
// // // // // // // // // // // // // // // // import { fadeIn, textVariant } from "../utils/motion";

// // // // // // // // // // // // // // // // const Footer = () => {
// // // // // // // // // // // // // // // //   const footerLinks = {
// // // // // // // // // // // // // // // //     company: [
// // // // // // // // // // // // // // // //       { name: 'About', href: '#' },
// // // // // // // // // // // // // // // //       { name: 'Terms of Use', href: '#' },
// // // // // // // // // // // // // // // //       { name: 'Privacy Policy', href: '#' },
// // // // // // // // // // // // // // // //       { name: 'How it Works', href: '#' },
// // // // // // // // // // // // // // // //       { name: 'Contact Us', href: '#' },
// // // // // // // // // // // // // // // //     ],
// // // // // // // // // // // // // // // //     getHelp: [
// // // // // // // // // // // // // // // //       { name: 'Support Carrer', href: '#' },
// // // // // // // // // // // // // // // //       { name: '24h Service', href: '#' },
// // // // // // // // // // // // // // // //       { name: 'Quick Chat', href: '#' },
// // // // // // // // // // // // // // // //     ],
// // // // // // // // // // // // // // // //     support: [
// // // // // // // // // // // // // // // //       { name: 'FAQ', href: '#' },
// // // // // // // // // // // // // // // //       { name: 'Policy', href: '#' },
// // // // // // // // // // // // // // // //       { name: 'Business', href: '#' },
// // // // // // // // // // // // // // // //     ],
// // // // // // // // // // // // // // // //     contact: [
// // // // // // // // // // // // // // // //       { name: 'WhatsApp', href: '#' },
// // // // // // // // // // // // // // // //       { name: 'Support 24', href: '#' },
// // // // // // // // // // // // // // // //     ],
// // // // // // // // // // // // // // // //   }

// // // // // // // // // // // // // // // //   return (
// // // // // // // // // // // // // // // //     <motion.footer  id="footer"
// // // // // // // // // // // // // // // //       variants={fadeIn('up', 0.2)}
// // // // // // // // // // // // // // // //       initial="hidden"
// // // // // // // // // // // // // // // //       whileInView="show"
// // // // // // // // // // // // // // // //       className="bg-gray-50"
// // // // // // // // // // // // // // // //     >
// // // // // // // // // // // // // // // //       <div className="section-container">
// // // // // // // // // // // // // // // //         <motion.div 
// // // // // // // // // // // // // // // //           variants={fadeIn('up', 0.3)}
// // // // // // // // // // // // // // // //           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12"
// // // // // // // // // // // // // // // //         >
// // // // // // // // // // // // // // // //           {/* Brand Column */}
// // // // // // // // // // // // // // // //           <motion.div 
// // // // // // // // // // // // // // // //             variants={fadeIn('right', 0.4)}
// // // // // // // // // // // // // // // //             className="lg:col-span-4"
// // // // // // // // // // // // // // // //           >
// // // // // // // // // // // // // // // //             <motion.div 
// // // // // // // // // // // // // // // //               variants={fadeIn('down', 0.5)}
// // // // // // // // // // // // // // // //               className="flex items-center gap-1 mb-6"
// // // // // // // // // // // // // // // //             >
// // // // // // // // // // // // // // // //               <div className="w-4 h-4 bg-blue-600 rounded-full opacity-75"></div>
// // // // // // // // // // // // // // // //               <div className="w-4 h-4 bg-red-500 rounded-full -ml-2"></div>
// // // // // // // // // // // // // // // //               <span className="text-xl font-medium ml-1">The Next Design</span>
// // // // // // // // // // // // // // // //             </motion.div>
// // // // // // // // // // // // // // // //             <motion.p 
// // // // // // // // // // // // // // // //               variants={fadeIn('up', 0.6)}
// // // // // // // // // // // // // // // //               className="text-gray-600 mb-6"
// // // // // // // // // // // // // // // //             >
// // // // // // // // // // // // // // // //               The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times.
// // // // // // // // // // // // // // // //             </motion.p>
// // // // // // // // // // // // // // // //             <motion.div 
// // // // // // // // // // // // // // // //               variants={fadeIn('up', 0.7)}
// // // // // // // // // // // // // // // //               className="flex gap-4"
// // // // // // // // // // // // // // // //             >
// // // // // // // // // // // // // // // //               <motion.a 
// // // // // // // // // // // // // // // //                 whileHover={{ scale: 1.1 }}
// // // // // // // // // // // // // // // //                 href="#" 
// // // // // // // // // // // // // // // //                 className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-colors"
// // // // // // // // // // // // // // // //               >
// // // // // // // // // // // // // // // //                 <FaFacebookF className="w-5 h-5" />
// // // // // // // // // // // // // // // //               </motion.a>
// // // // // // // // // // // // // // // //               <motion.a 
// // // // // // // // // // // // // // // //                 whileHover={{ scale: 1.1 }}
// // // // // // // // // // // // // // // //                 href="#" 
// // // // // // // // // // // // // // // //                 className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-400 hover:text-white transition-colors"
// // // // // // // // // // // // // // // //               >
// // // // // // // // // // // // // // // //                 <FaTwitter className="w-5 h-5" />
// // // // // // // // // // // // // // // //               </motion.a>
// // // // // // // // // // // // // // // //               <motion.a 
// // // // // // // // // // // // // // // //                 whileHover={{ scale: 1.1 }}
// // // // // // // // // // // // // // // //                 href="#" 
// // // // // // // // // // // // // // // //                 className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-700 hover:text-white transition-colors"
// // // // // // // // // // // // // // // //               >
// // // // // // // // // // // // // // // //                 <FaLinkedinIn className="w-5 h-5" />
// // // // // // // // // // // // // // // //               </motion.a>
// // // // // // // // // // // // // // // //             </motion.div>
// // // // // // // // // // // // // // // //           </motion.div>

// // // // // // // // // // // // // // // //           {/* Links Columns */}
// // // // // // // // // // // // // // // //           <motion.div 
// // // // // // // // // // // // // // // //             variants={fadeIn('left', 0.4)}
// // // // // // // // // // // // // // // //             className="lg:col-span-8"
// // // // // // // // // // // // // // // //           >
// // // // // // // // // // // // // // // //             <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
// // // // // // // // // // // // // // // //               {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
// // // // // // // // // // // // // // // //                 <motion.div 
// // // // // // // // // // // // // // // //                   key={category}
// // // // // // // // // // // // // // // //                   variants={fadeIn('up', 0.3 * (categoryIndex + 1))}
// // // // // // // // // // // // // // // //                 >
// // // // // // // // // // // // // // // //                   <motion.h3 
// // // // // // // // // // // // // // // //                     variants={textVariant(0.2)}
// // // // // // // // // // // // // // // //                     className="text-lg font-medium mb-4"
// // // // // // // // // // // // // // // //                   >
// // // // // // // // // // // // // // // //                     {category.charAt(0).toUpperCase() + category.slice(1)}
// // // // // // // // // // // // // // // //                   </motion.h3>
// // // // // // // // // // // // // // // //                   <motion.ul 
// // // // // // // // // // // // // // // //                     variants={fadeIn('up', 0.4)}
// // // // // // // // // // // // // // // //                     className="space-y-3"
// // // // // // // // // // // // // // // //                   >
// // // // // // // // // // // // // // // //                     {links.map((link, index) => (
// // // // // // // // // // // // // // // //                       <motion.li 
// // // // // // // // // // // // // // // //                         key={index}
// // // // // // // // // // // // // // // //                         variants={fadeIn('up', 0.1 * (index + 1))}
// // // // // // // // // // // // // // // //                       >
// // // // // // // // // // // // // // // //                         <motion.a 
// // // // // // // // // // // // // // // //                           whileHover={{ x: 5 }}
// // // // // // // // // // // // // // // //                           href={link.href} 
// // // // // // // // // // // // // // // //                           className="text-gray-600 hover:text-gray-900"
// // // // // // // // // // // // // // // //                         >
// // // // // // // // // // // // // // // //                           {link.name}
// // // // // // // // // // // // // // // //                         </motion.a>
// // // // // // // // // // // // // // // //                       </motion.li>
// // // // // // // // // // // // // // // //                     ))}
// // // // // // // // // // // // // // // //                   </motion.ul>
// // // // // // // // // // // // // // // //                 </motion.div>
// // // // // // // // // // // // // // // //               ))}
// // // // // // // // // // // // // // // //             </div>
// // // // // // // // // // // // // // // //           </motion.div>
// // // // // // // // // // // // // // // //         </motion.div>

// // // // // // // // // // // // // // // //         {/* Copyright */}
// // // // // // // // // // // // // // // //         <motion.div 
// // // // // // // // // // // // // // // //           variants={fadeIn('up', 0.8)}
// // // // // // // // // // // // // // // //           className="border-t border-gray-200 mt-12 pt-8"
// // // // // // // // // // // // // // // //         >
// // // // // // // // // // // // // // // //           <motion.div 
// // // // // // // // // // // // // // // //             variants={fadeIn('up', 0.9)}
// // // // // // // // // // // // // // // //             className="flex flex-col md:flex-row justify-between items-center gap-4"
// // // // // // // // // // // // // // // //           >
// // // // // // // // // // // // // // // //             <motion.p 
// // // // // // // // // // // // // // // //               variants={fadeIn('right', 1.0)}
// // // // // // // // // // // // // // // //               className="text-gray-600 text-sm"
// // // // // // // // // // // // // // // //             >
// // // // // // // // // // // // // // // //               Copyright © {new Date().getFullYear()} Md Shoaib
// // // // // // // // // // // // // // // //             </motion.p>
// // // // // // // // // // // // // // // //             <motion.p 
// // // // // // // // // // // // // // // //               variants={fadeIn('left', 1.0)}
// // // // // // // // // // // // // // // //               className="text-gray-600 text-sm"
// // // // // // // // // // // // // // // //             >
// // // // // // // // // // // // // // // //               Created by Md Shoaib
// // // // // // // // // // // // // // // //             </motion.p>
// // // // // // // // // // // // // // // //           </motion.div>
// // // // // // // // // // // // // // // //         </motion.div>
// // // // // // // // // // // // // // // //       </div>
// // // // // // // // // // // // // // // //     </motion.footer>
// // // // // // // // // // // // // // // //   )
// // // // // // // // // // // // // // // // }

// // // // // // // // // // // // // // // // export default Footer


// // // // // // // // // // // // // // // import React from 'react';
// // // // // // // // // // // // // // // import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
// // // // // // // // // // // // // // // import { motion } from "framer-motion";
// // // // // // // // // // // // // // // import { fadeIn, textVariant } from "../utils/motion";

// // // // // // // // // // // // // // // const Footer = () => {
// // // // // // // // // // // // // // //   const footerLinks = {
// // // // // // // // // // // // // // //     company: [
// // // // // // // // // // // // // // //       { name: 'About', href: '#' },
// // // // // // // // // // // // // // //       { name: 'Terms of Use', href: '#' },
// // // // // // // // // // // // // // //       { name: 'Privacy Policy', href: '#' },
// // // // // // // // // // // // // // //       { name: 'How it Works', href: '#' },
// // // // // // // // // // // // // // //       { name: 'Contact Us', href: '#' },
// // // // // // // // // // // // // // //     ],
// // // // // // // // // // // // // // //     getHelp: [
// // // // // // // // // // // // // // //       { name: 'Support Career', href: '#' },
// // // // // // // // // // // // // // //       { name: '24h Service', href: '#' },
// // // // // // // // // // // // // // //       { name: 'Quick Chat', href: '#' },
// // // // // // // // // // // // // // //     ],
// // // // // // // // // // // // // // //     support: [
// // // // // // // // // // // // // // //       { name: 'FAQ', href: '#' },
// // // // // // // // // // // // // // //       { name: 'Policy', href: '#' },
// // // // // // // // // // // // // // //       { name: 'Business', href: '#' },
// // // // // // // // // // // // // // //     ],
// // // // // // // // // // // // // // //     contact: [
// // // // // // // // // // // // // // //       { name: 'WhatsApp', href: '#' },
// // // // // // // // // // // // // // //       { name: 'Support 24', href: '#' },
// // // // // // // // // // // // // // //     ],
// // // // // // // // // // // // // // //   };

// // // // // // // // // // // // // // //   return (
// // // // // // // // // // // // // // //     <motion.footer 
// // // // // // // // // // // // // // //       id="footer"
// // // // // // // // // // // // // // //       variants={fadeIn('up', 0.2)}
// // // // // // // // // // // // // // //       initial="hidden"
// // // // // // // // // // // // // // //       whileInView="show"
// // // // // // // // // // // // // // //       viewport={{ once: true }}
// // // // // // // // // // // // // // //       className="bg-[#e0dedf] w-full overflow-hidden border-t border-gray-200"
// // // // // // // // // // // // // // //     >
// // // // // // // // // // // // // // //       {/* Container - Width Problem solve করার জন্য max-w-7xl এবং mx-auto ব্যবহার করা হয়েছে */}
// // // // // // // // // // // // // // //       <div className="max-w-7xl mx-auto px-6 sm:px-12 py-12 md:py-20">
        
// // // // // // // // // // // // // // //         <motion.div 
// // // // // // // // // // // // // // //           variants={fadeIn('up', 0.3)}
// // // // // // // // // // // // // // //           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-16"
// // // // // // // // // // // // // // //         >
// // // // // // // // // // // // // // //           {/* Brand Column */}
// // // // // // // // // // // // // // //           <motion.div 
// // // // // // // // // // // // // // //             variants={fadeIn('right', 0.4)}
// // // // // // // // // // // // // // //             className="lg:col-span-4"
// // // // // // // // // // // // // // //           >
// // // // // // // // // // // // // // //             <motion.div 
// // // // // // // // // // // // // // //               variants={fadeIn('down', 0.5)}
// // // // // // // // // // // // // // //               className="flex items-center gap-1 mb-6"
// // // // // // // // // // // // // // //             >
// // // // // // // // // // // // // // //               <div className="w-4 h-4 bg-blue-600 rounded-full opacity-75"></div>
// // // // // // // // // // // // // // //               <div className="w-4 h-4 bg-red-500 rounded-full -ml-2"></div>
// // // // // // // // // // // // // // //               <span className="text-xl font-bold ml-1 text-gray-900">The Next Design</span>
// // // // // // // // // // // // // // //             </motion.div>
            
// // // // // // // // // // // // // // //             <motion.p 
// // // // // // // // // // // // // // //               variants={fadeIn('up', 0.6)}
// // // // // // // // // // // // // // //               className="text-gray-600 mb-8 leading-relaxed"
// // // // // // // // // // // // // // //             >
// // // // // // // // // // // // // // //               The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times.
// // // // // // // // // // // // // // //             </motion.p>
            
// // // // // // // // // // // // // // //             <motion.div 
// // // // // // // // // // // // // // //               variants={fadeIn('up', 0.7)}
// // // // // // // // // // // // // // //               className="flex gap-4"
// // // // // // // // // // // // // // //             >
// // // // // // // // // // // // // // //               <motion.a 
// // // // // // // // // // // // // // //                 whileHover={{ scale: 1.1, y: -2 }}
// // // // // // // // // // // // // // //                 href="#" 
// // // // // // // // // // // // // // //                 className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-all shadow-sm"
// // // // // // // // // // // // // // //               >
// // // // // // // // // // // // // // //                 <FaFacebookF className="w-5 h-5" />
// // // // // // // // // // // // // // //               </motion.a>
// // // // // // // // // // // // // // //               <motion.a 
// // // // // // // // // // // // // // //                 whileHover={{ scale: 1.1, y: -2 }}
// // // // // // // // // // // // // // //                 href="#" 
// // // // // // // // // // // // // // //                 className="w-10 h-10bg-[#f2f2f2] rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-400 hover:text-white transition-all shadow-sm"
// // // // // // // // // // // // // // //               >
// // // // // // // // // // // // // // //                 <FaTwitter className="w-5 h-5" />
// // // // // // // // // // // // // // //               </motion.a>
// // // // // // // // // // // // // // //               <motion.a 
// // // // // // // // // // // // // // //                 whileHover={{ scale: 1.1, y: -2 }}
// // // // // // // // // // // // // // //                 href="#" 
// // // // // // // // // // // // // // //                 className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-700 hover:text-white transition-all shadow-sm"
// // // // // // // // // // // // // // //               >
// // // // // // // // // // // // // // //                 <FaLinkedinIn className="w-5 h-5" />
// // // // // // // // // // // // // // //               </motion.a>
// // // // // // // // // // // // // // //             </motion.div>
// // // // // // // // // // // // // // //           </motion.div>

// // // // // // // // // // // // // // //           {/* Links Columns */}
// // // // // // // // // // // // // // //           <motion.div 
// // // // // // // // // // // // // // //             variants={fadeIn('left', 0.4)}
// // // // // // // // // // // // // // //             className="lg:col-span-8"
// // // // // // // // // // // // // // //           >
// // // // // // // // // // // // // // //             <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
// // // // // // // // // // // // // // //               {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
// // // // // // // // // // // // // // //                 <motion.div 
// // // // // // // // // // // // // // //                   key={category}
// // // // // // // // // // // // // // //                   variants={fadeIn('up', 0.3 * (categoryIndex + 1))}
// // // // // // // // // // // // // // //                 >
// // // // // // // // // // // // // // //                   <motion.h3 
// // // // // // // // // // // // // // //                     variants={textVariant(0.2)}
// // // // // // // // // // // // // // //                     className="text-sm font-bold uppercase tracking-wider text-gray-900 mb-6"
// // // // // // // // // // // // // // //                   >
// // // // // // // // // // // // // // //                     {category.replace(/([A-Z])/g, ' $1').trim()}
// // // // // // // // // // // // // // //                   </motion.h3>
// // // // // // // // // // // // // // //                   <motion.ul 
// // // // // // // // // // // // // // //                     className="space-y-4"
// // // // // // // // // // // // // // //                   >
// // // // // // // // // // // // // // //                     {links.map((link, index) => (
// // // // // // // // // // // // // // //                       <motion.li 
// // // // // // // // // // // // // // //                         key={index}
// // // // // // // // // // // // // // //                         variants={fadeIn('up', 0.1 * (index + 1))}
// // // // // // // // // // // // // // //                       >
// // // // // // // // // // // // // // //                         <motion.a 
// // // // // // // // // // // // // // //                           whileHover={{ x: 5 }}
// // // // // // // // // // // // // // //                           href={link.href} 
// // // // // // // // // // // // // // //                           className="text-gray-600 hover:text-blue-600 transition-colors inline-block"
// // // // // // // // // // // // // // //                         >
// // // // // // // // // // // // // // //                           {link.name}
// // // // // // // // // // // // // // //                         </motion.a>
// // // // // // // // // // // // // // //                       </motion.li>
// // // // // // // // // // // // // // //                     ))}
// // // // // // // // // // // // // // //                   </motion.ul>
// // // // // // // // // // // // // // //                 </motion.div>
// // // // // // // // // // // // // // //               ))}
// // // // // // // // // // // // // // //             </div>
// // // // // // // // // // // // // // //           </motion.div>
// // // // // // // // // // // // // // //         </motion.div>

// // // // // // // // // // // // // // //         {/* Copyright Section */}
// // // // // // // // // // // // // // //         <motion.div 
// // // // // // // // // // // // // // //           variants={fadeIn('up', 0.8)}
// // // // // // // // // // // // // // //           className="border-t border-gray-200 mt-16 pt-8"
// // // // // // // // // // // // // // //         >
// // // // // // // // // // // // // // //           <div className="flex flex-col md:flex-row justify-between items-center gap-4">
// // // // // // // // // // // // // // //             <motion.p 
// // // // // // // // // // // // // // //               variants={fadeIn('right', 1.0)}
// // // // // // // // // // // // // // //               className="text-gray-500 text-sm"
// // // // // // // // // // // // // // //             >
// // // // // // // // // // // // // // //               Copyright © {new Date().getFullYear()} Md Shoaib. All rights reserved.
// // // // // // // // // // // // // // //             </motion.p>
// // // // // // // // // // // // // // //             <motion.p 
// // // // // // // // // // // // // // //               variants={fadeIn('left', 1.0)}
// // // // // // // // // // // // // // //               className="text-gray-500 text-sm font-medium"
// // // // // // // // // // // // // // //             >
// // // // // // // // // // // // // // //               Created by <span className="text-gray-900 font-bold">Md Shoaib</span>
// // // // // // // // // // // // // // //             </motion.p>
// // // // // // // // // // // // // // //           </div>
// // // // // // // // // // // // // // //         </motion.div>
// // // // // // // // // // // // // // //       </div>
// // // // // // // // // // // // // // //     </motion.footer>
// // // // // // // // // // // // // // //   );
// // // // // // // // // // // // // // // };

// // // // // // // // // // // // // // // export default Footer;

// // // // // // // // // // // // // // import React from "react";
// // // // // // // // // // // // // // import { Link } from "react-router-dom";
// // // // // // // // // // // // // // import { motion } from "framer-motion";

// // // // // // // // // // // // // // const quickLinks = [
// // // // // // // // // // // // // //   { label: "Home", to: "/" },
// // // // // // // // // // // // // //   { label: "About", to: "/about" },
// // // // // // // // // // // // // //   { label: "Services", to: "/services" },
// // // // // // // // // // // // // //   { label: "Contact", to: "/contact" },
// // // // // // // // // // // // // // ];

// // // // // // // // // // // // // // const socials = [
// // // // // // // // // // // // // //   { label: "LinkedIn", href: "#" },
// // // // // // // // // // // // // //   { label: "Instagram", href: "#" },
// // // // // // // // // // // // // //   { label: "Dribbble", href: "#" },
// // // // // // // // // // // // // //   { label: "Behance", href: "#" },
// // // // // // // // // // // // // // ];

// // // // // // // // // // // // // // export default function Footer() {
// // // // // // // // // // // // // //   const year = new Date().getFullYear();

// // // // // // // // // // // // // //   return (
// // // // // // // // // // // // // //     <footer className="relative bg-slate-950 text-white overflow-hidden">

// // // // // // // // // // // // // //       {/* Background Gradient Glow (Updated to Emerald Theme) */}
// // // // // // // // // // // // // //       <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-teal-500/5 to-transparent pointer-events-none" />

// // // // // // // // // // // // // //       <div className="relative z-10 mx-auto max-w-7xl px-6 py-20">

// // // // // // // // // // // // // //         {/* Main Grid */}
// // // // // // // // // // // // // //         <div className="grid gap-16 md:grid-cols-3">

// // // // // // // // // // // // // //           {/* Brand Section */}
// // // // // // // // // // // // // //           <div>
// // // // // // // // // // // // // //             <div className="flex items-center gap-3">
// // // // // // // // // // // // // //               <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-emerald-400 via-teal-400 to-sky-400 flex items-center justify-center text-sm font-bold text-slate-900">
// // // // // // // // // // // // // //                 RK
// // // // // // // // // // // // // //               </div>
// // // // // // // // // // // // // //               <h2 className="text-lg font-semibold tracking-tight 
// // // // // // // // // // // // // //                 bg-gradient-to-r from-emerald-400 via-teal-400 to-sky-400 
// // // // // // // // // // // // // //                 bg-clip-text text-transparent">
// // // // // // // // // // // // // //                 ReactKit
// // // // // // // // // // // // // //               </h2>
// // // // // // // // // // // // // //             </div>

// // // // // // // // // // // // // //             <p className="mt-5 text-sm text-white/60 leading-relaxed max-w-sm">
// // // // // // // // // // // // // //               We craft minimal, high-performance digital experiences for
// // // // // // // // // // // // // //               startups and modern businesses. Clean design, smooth interaction,
// // // // // // // // // // // // // //               measurable growth.
// // // // // // // // // // // // // //             </p>

// // // // // // // // // // // // // //             {/* Social Links */}
// // // // // // // // // // // // // //             <div className="mt-6 flex flex-wrap gap-3">
// // // // // // // // // // // // // //               {socials.map((s) => (
// // // // // // // // // // // // // //                 <motion.a
// // // // // // // // // // // // // //                   key={s.label}
// // // // // // // // // // // // // //                   href={s.href}
// // // // // // // // // // // // // //                   whileHover={{ y: -4 }}
// // // // // // // // // // // // // //                   whileTap={{ scale: 0.95 }}
// // // // // // // // // // // // // //                   className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs text-white/70 hover:text-white hover:border-white/20 transition"
// // // // // // // // // // // // // //                 >
// // // // // // // // // // // // // //                   {s.label}
// // // // // // // // // // // // // //                 </motion.a>
// // // // // // // // // // // // // //               ))}
// // // // // // // // // // // // // //             </div>
// // // // // // // // // // // // // //           </div>

// // // // // // // // // // // // // //           {/* Quick Links */}
// // // // // // // // // // // // // //           <div>
// // // // // // // // // // // // // //             <h3 className="text-sm font-semibold tracking-wide text-white/80 uppercase">
// // // // // // // // // // // // // //               Quick Links
// // // // // // // // // // // // // //             </h3>

// // // // // // // // // // // // // //             <ul className="mt-6 space-y-3">
// // // // // // // // // // // // // //               {quickLinks.map((link) => (
// // // // // // // // // // // // // //                 <li key={link.to}>
// // // // // // // // // // // // // //                   <motion.div whileHover={{ x: 5 }}>
// // // // // // // // // // // // // //                     <Link
// // // // // // // // // // // // // //                       to={link.to}
// // // // // // // // // // // // // //                       className="text-sm text-white/60 hover:text-white transition"
// // // // // // // // // // // // // //                     >
// // // // // // // // // // // // // //                       {link.label}
// // // // // // // // // // // // // //                     </Link>
// // // // // // // // // // // // // //                   </motion.div>
// // // // // // // // // // // // // //                 </li>
// // // // // // // // // // // // // //               ))}
// // // // // // // // // // // // // //             </ul>
// // // // // // // // // // // // // //           </div>

// // // // // // // // // // // // // //           {/* CTA Section */}
// // // // // // // // // // // // // //           <div>
// // // // // // // // // // // // // //             <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
// // // // // // // // // // // // // //               <h3 className="text-lg font-semibold">
// // // // // // // // // // // // // //                 Let’s build your next project.
// // // // // // // // // // // // // //               </h3>

// // // // // // // // // // // // // //               <p className="mt-3 text-sm text-white/60">
// // // // // // // // // // // // // //                 Ready to elevate your brand and website with modern design and
// // // // // // // // // // // // // //                 smooth motion?
// // // // // // // // // // // // // //               </p>

// // // // // // // // // // // // // //               <motion.div
// // // // // // // // // // // // // //                 whileHover={{ scale: 1.05 }}
// // // // // // // // // // // // // //                 whileTap={{ scale: 0.97 }}
// // // // // // // // // // // // // //                 className="mt-6"
// // // // // // // // // // // // // //               >
// // // // // // // // // // // // // //                 <Link
// // // // // // // // // // // // // //                   to="/contact"
// // // // // // // // // // // // // //                   className="inline-flex items-center justify-center 
// // // // // // // // // // // // // //                   rounded-xl 
// // // // // // // // // // // // // //                   bg-gradient-to-r from-emerald-400 via-teal-400 to-sky-400 
// // // // // // // // // // // // // //                   px-6 py-3 text-sm font-semibold text-slate-900 
// // // // // // // // // // // // // //                   shadow-lg shadow-emerald-500/20"
// // // // // // // // // // // // // //                 >
// // // // // // // // // // // // // //                   Get Started
// // // // // // // // // // // // // //                 </Link>
// // // // // // // // // // // // // //               </motion.div>
// // // // // // // // // // // // // //             </div>
// // // // // // // // // // // // // //           </div>
// // // // // // // // // // // // // //         </div>

// // // // // // // // // // // // // //         {/* Divider */}
// // // // // // // // // // // // // //         <div className="mt-16 border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">

// // // // // // // // // // // // // //           <p className="text-xs text-white/50">
// // // // // // // // // // // // // //             © {year} ReactKit. All rights reserved.
// // // // // // // // // // // // // //           </p>

// // // // // // // // // // // // // //           <p className="text-xs text-white/40">
// // // // // // // // // // // // // //             Built with React • Tailwind CSS • Framer Motion
// // // // // // // // // // // // // //           </p>
// // // // // // // // // // // // // //         </div>
// // // // // // // // // // // // // //       </div>
// // // // // // // // // // // // // //     </footer>
// // // // // // // // // // // // // //   );
// // // // // // // // // // // // // // }


// // // // // // // // // // // // // import React from "react";
// // // // // // // // // // // // // import {
// // // // // // // // // // // // //   FaFacebook,
// // // // // // // // // // // // //   FaMapMarkerAlt,
// // // // // // // // // // // // //   FaEnvelope,
// // // // // // // // // // // // //   FaPhone,
// // // // // // // // // // // // //   FaPhoneAlt,
// // // // // // // // // // // // // } from "react-icons/fa";
// // // // // // // // // // // // // import { BsInstagram, BsTwitterX, BsLinkedin, BsYoutube } from "react-icons/bs";
// // // // // // // // // // // // // import { Link } from "react-router";

// // // // // // // // // // // // // const Footer = () => {
// // // // // // // // // // // // //   const currentYear = new Date().getFullYear();

// // // // // // // // // // // // //   const quickLinks = [
// // // // // // // // // // // // //     { name: "Home", path: "/" },
// // // // // // // // // // // // //     { name: "Browse Papers", path: "/papers" },
// // // // // // // // // // // // //     { name: "Submit Paper", path: "/submit" },
// // // // // // // // // // // // //     { name: "About Us", path: "/about" },
// // // // // // // // // // // // //     { name: "Contact", path: "/contact" },
// // // // // // // // // // // // //   ];

// // // // // // // // // // // // //   const resourceLinks = [
// // // // // // // // // // // // //     { name: "Author Guidelines", path: "/guidelines" },
// // // // // // // // // // // // //     { name: "Review Process", path: "/review-process" },
// // // // // // // // // // // // //     { name: "Publication Ethics", path: "/ethics" },
// // // // // // // // // // // // //     { name: "FAQs", path: "/faq" },
// // // // // // // // // // // // //     { name: "Privacy Policy", path: "/privacy" },
// // // // // // // // // // // // //   ];

// // // // // // // // // // // // //   const socialLinks = [
// // // // // // // // // // // // //     {
// // // // // // // // // // // // //       icon: <FaFacebook />,
// // // // // // // // // // // // //       path: "https://facebook.com",
// // // // // // // // // // // // //       label: "Facebook",
// // // // // // // // // // // // //       color: "hover:text-blue-600",
// // // // // // // // // // // // //     },
// // // // // // // // // // // // //     {
// // // // // // // // // // // // //       icon: <BsInstagram />,
// // // // // // // // // // // // //       path: "https://instagram.com",
// // // // // // // // // // // // //       label: "Instagram",
// // // // // // // // // // // // //       color: "hover:text-pink-500",
// // // // // // // // // // // // //     },
// // // // // // // // // // // // //     {
// // // // // // // // // // // // //       icon: <BsTwitterX />,
// // // // // // // // // // // // //       path: "https://twitter.com",
// // // // // // // // // // // // //       label: "Twitter",
// // // // // // // // // // // // //       color: "hover:text-gray-800",
// // // // // // // // // // // // //     },
// // // // // // // // // // // // //     {
// // // // // // // // // // // // //       icon: <BsLinkedin />,
// // // // // // // // // // // // //       path: "https://linkedin.com",
// // // // // // // // // // // // //       label: "LinkedIn",
// // // // // // // // // // // // //       color: "hover:text-blue-700",
// // // // // // // // // // // // //     },
// // // // // // // // // // // // //     {
// // // // // // // // // // // // //       icon: <BsYoutube />,
// // // // // // // // // // // // //       path: "https://youtube.com",
// // // // // // // // // // // // //       label: "YouTube",
// // // // // // // // // // // // //       color: "hover:text-red-600",
// // // // // // // // // // // // //     },
// // // // // // // // // // // // //   ];

// // // // // // // // // // // // //   return (
// // // // // // // // // // // // //     <footer className="bg-gradient-to-b from-[#111827] to-[#1f2937] text-white">
// // // // // // // // // // // // //       {/* Main Footer Content */}
// // // // // // // // // // // // //       <div className="container mx-auto px-4 py-12 md:py-16">
// // // // // // // // // // // // //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
// // // // // // // // // // // // //           {/* Logo & About Section */}
// // // // // // // // // // // // //           <div className="space-y-6">
// // // // // // // // // // // // //             <Link to="/" className="inline-block">
// // // // // // // // // // // // //               <div className="-mt-3 text-2xl font-bold text-white tracking-wide">
// // // // // // // // // // // // //                 Marks
// // // // // // // // // // // // //               </div>
// // // // // // // // // // // // //             </Link>

// // // // // // // // // // // // //             <p className="text-gray-300 text-sm leading-relaxed -mt-5">
// // // // // // // // // // // // //               The official journal management system of Pundra University of
// // // // // // // // // // // // //               Science & Technology. Empowering researchers to publish quality
// // // // // // // // // // // // //               academic papers.
// // // // // // // // // // // // //             </p>

// // // // // // // // // // // // //             <div className="flex items-center gap-4">
// // // // // // // // // // // // //               {socialLinks.map((social, index) => (
// // // // // // // // // // // // //                 <a
// // // // // // // // // // // // //                   key={index}
// // // // // // // // // // // // //                   href={social.path}
// // // // // // // // // // // // //                   target="_blank"
// // // // // // // // // // // // //                   rel="noopener noreferrer"
// // // // // // // // // // // // //                   aria-label={social.label}
// // // // // // // // // // // // //                   className={`w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white text-lg transition-all duration-300 hover:bg-white ${social.color} hover:scale-110`}
// // // // // // // // // // // // //                 >
// // // // // // // // // // // // //                   {social.icon}
// // // // // // // // // // // // //                 </a>
// // // // // // // // // // // // //               ))}
// // // // // // // // // // // // //             </div>
// // // // // // // // // // // // //           </div>

// // // // // // // // // // // // //           {/* Quick Links */}
// // // // // // // // // // // // //           <div className="space-y-6">
// // // // // // // // // // // // //             <h3 className="text-lg font-bold text-white relative inline-block">
// // // // // // // // // // // // //               Quick Links
// // // // // // // // // // // // //               <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[#f59e0b] rounded-full"></span>
// // // // // // // // // // // // //             </h3>
// // // // // // // // // // // // //             <ul className="space-y-3 mt-4">
// // // // // // // // // // // // //               {quickLinks.map((link, index) => (
// // // // // // // // // // // // //                 <li key={index}>
// // // // // // // // // // // // //                   <Link
// // // // // // // // // // // // //                     to={link.path}
// // // // // // // // // // // // //                     className="text-gray-300 hover:text-[#f59e0b] transition-colors duration-200 flex items-center gap-2 group"
// // // // // // // // // // // // //                   >
// // // // // // // // // // // // //                     <span className="w-1.5 h-1.5 bg-[#f59e0b] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
// // // // // // // // // // // // //                     {link.name}
// // // // // // // // // // // // //                   </Link>
// // // // // // // // // // // // //                 </li>
// // // // // // // // // // // // //               ))}
// // // // // // // // // // // // //             </ul>
// // // // // // // // // // // // //           </div>

// // // // // // // // // // // // //           {/* Resources */}
// // // // // // // // // // // // //           <div className="space-y-6">
// // // // // // // // // // // // //             <h3 className="text-lg font-bold text-white relative inline-block">
// // // // // // // // // // // // //               Resources
// // // // // // // // // // // // //               <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[#f59e0b] rounded-full"></span>
// // // // // // // // // // // // //             </h3>
// // // // // // // // // // // // //             <ul className="space-y-3 mt-4">
// // // // // // // // // // // // //               {resourceLinks.map((link, index) => (
// // // // // // // // // // // // //                 <li key={index}>
// // // // // // // // // // // // //                   <Link
// // // // // // // // // // // // //                     to={link.path}
// // // // // // // // // // // // //                     className="text-gray-300 hover:text-[#f59e0b] transition-colors duration-200 flex items-center gap-2 group"
// // // // // // // // // // // // //                   >
// // // // // // // // // // // // //                     <span className="w-1.5 h-1.5 bg-[#f59e0b] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
// // // // // // // // // // // // //                     {link.name}
// // // // // // // // // // // // //                   </Link>
// // // // // // // // // // // // //                 </li>
// // // // // // // // // // // // //               ))}
// // // // // // // // // // // // //             </ul>
// // // // // // // // // // // // //           </div>

// // // // // // // // // // // // //           {/* Contact same as before */}
// // // // // // // // // // // // //           <div className="space-y-6">
// // // // // // // // // // // // //             <h3 className="text-lg font-bold text-white relative inline-block">
// // // // // // // // // // // // //               Contact Us
// // // // // // // // // // // // //               <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[#f59e0b] rounded-full"></span>
// // // // // // // // // // // // //             </h3>
// // // // // // // // // // // // //             {/* SAME */}
// // // // // // // // // // // // //           </div>
// // // // // // // // // // // // //         </div>
// // // // // // // // // // // // //       </div>

// // // // // // // // // // // // //       {/* Rest same */}
// // // // // // // // // // // // //     </footer>
// // // // // // // // // // // // //   );
// // // // // // // // // // // // // };

// // // // // // // // // // // // // export default Footer;


// // // // // // // // // // // // import React from "react";
// // // // // // // // // // // // import {
// // // // // // // // // // // //   FaFacebook,
// // // // // // // // // // // //   FaMapMarkerAlt,
// // // // // // // // // // // //   FaEnvelope,
// // // // // // // // // // // //   FaPhone,
// // // // // // // // // // // //   FaPhoneAlt,
// // // // // // // // // // // // } from "react-icons/fa";
// // // // // // // // // // // // import { BsInstagram, BsTwitterX, BsLinkedin, BsYoutube } from "react-icons/bs";
// // // // // // // // // // // // import { Link } from "react-router";

// // // // // // // // // // // // const Footer = () => {
// // // // // // // // // // // //   const currentYear = new Date().getFullYear();

// // // // // // // // // // // //   const quickLinks = [
// // // // // // // // // // // //     { name: "Home", path: "/" },
// // // // // // // // // // // //     { name: "Services", path: "/services" },
// // // // // // // // // // // //     { name: "Projects", path: "/projects" },
// // // // // // // // // // // //     { name: "About Us", path: "/about" },
// // // // // // // // // // // //     { name: "Contact", path: "/contact" },
// // // // // // // // // // // //   ];

// // // // // // // // // // // //   const resourceLinks = [
// // // // // // // // // // // //     { name: "Blog", path: "/blog" },
// // // // // // // // // // // //     { name: "Careers", path: "/careers" },
// // // // // // // // // // // //     { name: "FAQs", path: "/faq" },
// // // // // // // // // // // //     { name: "Privacy Policy", path: "/privacy" },
// // // // // // // // // // // //     { name: "Terms & Conditions", path: "/terms" },
// // // // // // // // // // // //   ];

// // // // // // // // // // // //   const socialLinks = [
// // // // // // // // // // // //     {
// // // // // // // // // // // //       icon: <FaFacebook />,
// // // // // // // // // // // //       path: "#",
// // // // // // // // // // // //       color: "hover:bg-blue-600",
// // // // // // // // // // // //     },
// // // // // // // // // // // //     {
// // // // // // // // // // // //       icon: <BsInstagram />,
// // // // // // // // // // // //       path: "#",
// // // // // // // // // // // //       color: "hover:bg-pink-500",
// // // // // // // // // // // //     },
// // // // // // // // // // // //     {
// // // // // // // // // // // //       icon: <BsTwitterX />,
// // // // // // // // // // // //       path: "#",
// // // // // // // // // // // //       color: "hover:bg-black",
// // // // // // // // // // // //     },
// // // // // // // // // // // //     {
// // // // // // // // // // // //       icon: <BsLinkedin />,
// // // // // // // // // // // //       path: "#",
// // // // // // // // // // // //       color: "hover:bg-blue-700",
// // // // // // // // // // // //     },
// // // // // // // // // // // //     {
// // // // // // // // // // // //       icon: <BsYoutube />,
// // // // // // // // // // // //       path: "#",
// // // // // // // // // // // //       color: "hover:bg-red-600",
// // // // // // // // // // // //     },
// // // // // // // // // // // //   ];

// // // // // // // // // // // //   return (
// // // // // // // // // // // //     <footer className="bg-[#f2f2f2] text-gray-800">
// // // // // // // // // // // //       {/* Main */}
// // // // // // // // // // // //       <div className="max-w-7xl mx-auto px-6 py-16">
// // // // // // // // // // // //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

// // // // // // // // // // // //           {/* BRAND */}
// // // // // // // // // // // //           <div className="space-y-6">
// // // // // // // // // // // //             <h2 className="text-2xl font-bold text-black">Marks</h2>

// // // // // // // // // // // //             <p className="text-gray-600 text-sm leading-relaxed">
// // // // // // // // // // // //               We build modern, scalable and high-performing digital products.
// // // // // // // // // // // //               Helping startups grow with clean design and powerful technology.
// // // // // // // // // // // //             </p>

// // // // // // // // // // // //             {/* Social */}
// // // // // // // // // // // //             <div className="flex gap-3">
// // // // // // // // // // // //               {socialLinks.map((social, i) => (
// // // // // // // // // // // //                 <a
// // // // // // // // // // // //                   key={i}
// // // // // // // // // // // //                   href={social.path}
// // // // // // // // // // // //                   className={`w-10 h-10 flex items-center justify-center rounded-full bg-black text-white transition-all duration-300 ${social.color}`}
// // // // // // // // // // // //                 >
// // // // // // // // // // // //                   {social.icon}
// // // // // // // // // // // //                 </a>
// // // // // // // // // // // //               ))}
// // // // // // // // // // // //             </div>
// // // // // // // // // // // //           </div>

// // // // // // // // // // // //           {/* QUICK LINKS */}
// // // // // // // // // // // //           <div>
// // // // // // // // // // // //             <h3 className="text-lg font-semibold mb-6 text-black">
// // // // // // // // // // // //               Quick Links
// // // // // // // // // // // //             </h3>
// // // // // // // // // // // //             <ul className="space-y-3">
// // // // // // // // // // // //               {quickLinks.map((link, i) => (
// // // // // // // // // // // //                 <li key={i}>
// // // // // // // // // // // //                   <Link
// // // // // // // // // // // //                     to={link.path}
// // // // // // // // // // // //                     className="text-gray-600 hover:text-black transition"
// // // // // // // // // // // //                   >
// // // // // // // // // // // //                     {link.name}
// // // // // // // // // // // //                   </Link>
// // // // // // // // // // // //                 </li>
// // // // // // // // // // // //               ))}
// // // // // // // // // // // //             </ul>
// // // // // // // // // // // //           </div>

// // // // // // // // // // // //           {/* RESOURCES */}
// // // // // // // // // // // //           <div>
// // // // // // // // // // // //             <h3 className="text-lg font-semibold mb-6 text-black">
// // // // // // // // // // // //               Resources
// // // // // // // // // // // //             </h3>
// // // // // // // // // // // //             <ul className="space-y-3">
// // // // // // // // // // // //               {resourceLinks.map((link, i) => (
// // // // // // // // // // // //                 <li key={i}>
// // // // // // // // // // // //                   <Link
// // // // // // // // // // // //                     to={link.path}
// // // // // // // // // // // //                     className="text-gray-600 hover:text-black transition"
// // // // // // // // // // // //                   >
// // // // // // // // // // // //                     {link.name}
// // // // // // // // // // // //                   </Link>
// // // // // // // // // // // //                 </li>
// // // // // // // // // // // //               ))}
// // // // // // // // // // // //             </ul>
// // // // // // // // // // // //           </div>

// // // // // // // // // // // //           {/* CONTACT */}
// // // // // // // // // // // //           <div>
// // // // // // // // // // // //             <h3 className="text-lg font-semibold mb-6 text-black">
// // // // // // // // // // // //               Contact Us
// // // // // // // // // // // //             </h3>

// // // // // // // // // // // //             <ul className="space-y-4">
// // // // // // // // // // // //               <li className="flex items-start gap-3">
// // // // // // // // // // // //                 <div className="w-10 h-10 flex items-center justify-center rounded-full bg-black text-white">
// // // // // // // // // // // //                   <FaMapMarkerAlt />
// // // // // // // // // // // //                 </div>
// // // // // // // // // // // //                 <p className="text-gray-600 text-sm">
// // // // // // // // // // // //                   Bogura, Bangladesh
// // // // // // // // // // // //                 </p>
// // // // // // // // // // // //               </li>

// // // // // // // // // // // //               <li className="flex items-center gap-3">
// // // // // // // // // // // //                 <div className="w-10 h-10 flex items-center justify-center rounded-full bg-black text-white">
// // // // // // // // // // // //                   <FaEnvelope />
// // // // // // // // // // // //                 </div>
// // // // // // // // // // // //                 <p className="text-gray-600 text-sm">
// // // // // // // // // // // //                   mdshoaibdev@gmail.com
// // // // // // // // // // // //                 </p>
// // // // // // // // // // // //               </li>

// // // // // // // // // // // //               <li className="flex items-center gap-3">
// // // // // // // // // // // //                 <div className="w-10 h-10 flex items-center justify-center rounded-full bg-black text-white">
// // // // // // // // // // // //                   <FaPhone />
// // // // // // // // // // // //                 </div>
// // // // // // // // // // // //                 <p className="text-gray-600 text-sm">
// // // // // // // // // // // //                   +880 1234-567890
// // // // // // // // // // // //                 </p>
// // // // // // // // // // // //               </li>

// // // // // // // // // // // //               <li className="flex items-center gap-3">
// // // // // // // // // // // //                 <div className="w-10 h-10 flex items-center justify-center rounded-full bg-black text-white">
// // // // // // // // // // // //                   <FaPhoneAlt />
// // // // // // // // // // // //                 </div>
// // // // // // // // // // // //                 <p className="text-gray-600 text-sm">
// // // // // // // // // // // //                   +880 9876-543210
// // // // // // // // // // // //                 </p>
// // // // // // // // // // // //               </li>
// // // // // // // // // // // //             </ul>
// // // // // // // // // // // //           </div>
// // // // // // // // // // // //         </div>
// // // // // // // // // // // //       </div>

// // // // // // // // // // // //       {/* BOTTOM */}
// // // // // // // // // // // //       <div className="border-t border-gray-300">
// // // // // // // // // // // //         <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">

// // // // // // // // // // // //           <p className="text-gray-500 text-sm">
// // // // // // // // // // // //             © {currentYear} <span className="font-semibold text-black">Marks</span>. All rights reserved.
// // // // // // // // // // // //           </p>

// // // // // // // // // // // //           <div className="flex gap-6">
// // // // // // // // // // // //             <Link to="/privacy" className="text-gray-500 hover:text-black text-sm">
// // // // // // // // // // // //               Privacy
// // // // // // // // // // // //             </Link>
// // // // // // // // // // // //             <Link to="/terms" className="text-gray-500 hover:text-black text-sm">
// // // // // // // // // // // //               Terms
// // // // // // // // // // // //             </Link>
// // // // // // // // // // // //           </div>
// // // // // // // // // // // //         </div>
// // // // // // // // // // // //       </div>
// // // // // // // // // // // //     </footer>
// // // // // // // // // // // //   );
// // // // // // // // // // // // };

// // // // // // // // // // // // export default Footer;

// // // // // // // // // // // // import React from "react";
// // // // // // // // // // // // import {
// // // // // // // // // // // //   FaFacebook,
// // // // // // // // // // // //   FaMapMarkerAlt,
// // // // // // // // // // // //   FaEnvelope,
// // // // // // // // // // // //   FaPhone,
// // // // // // // // // // // //   FaPhoneAlt,
// // // // // // // // // // // // } from "react-icons/fa";
// // // // // // // // // // // // import { BsInstagram, BsTwitterX, BsLinkedin, BsYoutube } from "react-icons/bs";
// // // // // // // // // // // // import { Link } from "react-router";

// // // // // // // // // // // // const Footer = () => {
// // // // // // // // // // // //   const currentYear = new Date().getFullYear();

// // // // // // // // // // // //   const quickLinks = [
// // // // // // // // // // // //     { name: "Home", path: "/" },
// // // // // // // // // // // //     { name: "Browse Papers", path: "/papers" },
// // // // // // // // // // // //     { name: "Submit Paper", path: "/submit" },
// // // // // // // // // // // //     { name: "About Us", path: "/about" },
// // // // // // // // // // // //     { name: "Contact", path: "/contact" },
// // // // // // // // // // // //   ];

// // // // // // // // // // // //   const resourceLinks = [
// // // // // // // // // // // //     { name: "Author Guidelines", path: "/guidelines" },
// // // // // // // // // // // //     { name: "Review Process", path: "/review-process" },
// // // // // // // // // // // //     { name: "Publication Ethics", path: "/ethics" },
// // // // // // // // // // // //     { name: "FAQs", path: "/faq" },
// // // // // // // // // // // //     { name: "Privacy Policy", path: "/privacy" },
// // // // // // // // // // // //   ];

// // // // // // // // // // // //   const socialLinks = [
// // // // // // // // // // // //     {
// // // // // // // // // // // //       icon: <FaFacebook />,
// // // // // // // // // // // //       path: "https://facebook.com",
// // // // // // // // // // // //       label: "Facebook",
// // // // // // // // // // // //       color: "hover:text-blue-600",
// // // // // // // // // // // //     },
// // // // // // // // // // // //     {
// // // // // // // // // // // //       icon: <BsInstagram />,
// // // // // // // // // // // //       path: "https://instagram.com",
// // // // // // // // // // // //       label: "Instagram",
// // // // // // // // // // // //       color: "hover:text-pink-500",
// // // // // // // // // // // //     },
// // // // // // // // // // // //     {
// // // // // // // // // // // //       icon: <BsTwitterX />,
// // // // // // // // // // // //       path: "https://twitter.com",
// // // // // // // // // // // //       label: "Twitter",
// // // // // // // // // // // //       color: "hover:text-gray-800",
// // // // // // // // // // // //     },
// // // // // // // // // // // //     {
// // // // // // // // // // // //       icon: <BsLinkedin />,
// // // // // // // // // // // //       path: "https://linkedin.com",
// // // // // // // // // // // //       label: "LinkedIn",
// // // // // // // // // // // //       color: "hover:text-blue-700",
// // // // // // // // // // // //     },
// // // // // // // // // // // //     {
// // // // // // // // // // // //       icon: <BsYoutube />,
// // // // // // // // // // // //       path: "https://youtube.com",
// // // // // // // // // // // //       label: "YouTube",
// // // // // // // // // // // //       color: "hover:text-red-600",
// // // // // // // // // // // //     },
// // // // // // // // // // // //   ];

// // // // // // // // // // // //   return (
// // // // // // // // // // // //     <footer className="bg-gradient-to-b from-[#1f1f1f] to-[#000000] text-white">
// // // // // // // // // // // //       {/* Main */}
// // // // // // // // // // // //       <div className="container mx-auto px-4 py-12 md:py-16">
// // // // // // // // // // // //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

// // // // // // // // // // // //           {/* Brand */}
// // // // // // // // // // // //           <div className="space-y-6">
// // // // // // // // // // // //             <Link to="/" className="inline-block">
// // // // // // // // // // // //               <div className="-mt-3 text-2xl font-bold text-white tracking-wide">
// // // // // // // // // // // //                 Marks
// // // // // // // // // // // //               </div>
// // // // // // // // // // // //             </Link>

// // // // // // // // // // // //             <p className="text-gray-300 text-sm leading-relaxed -mt-5">
// // // // // // // // // // // //               The official journal management system of Pundra University of
// // // // // // // // // // // //               Science & Technology. Empowering researchers to publish quality
// // // // // // // // // // // //               academic papers.
// // // // // // // // // // // //             </p>

// // // // // // // // // // // //             <div className="flex items-center gap-4">
// // // // // // // // // // // //               {socialLinks.map((social, index) => (
// // // // // // // // // // // //                 <a
// // // // // // // // // // // //                   key={index}
// // // // // // // // // // // //                   href={social.path}
// // // // // // // // // // // //                   target="_blank"
// // // // // // // // // // // //                   rel="noopener noreferrer"
// // // // // // // // // // // //                   aria-label={social.label}
// // // // // // // // // // // //                   className={`w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white text-lg transition-all duration-300 hover:bg-white ${social.color} hover:scale-110`}
// // // // // // // // // // // //                 >
// // // // // // // // // // // //                   {social.icon}
// // // // // // // // // // // //                 </a>
// // // // // // // // // // // //               ))}
// // // // // // // // // // // //             </div>
// // // // // // // // // // // //           </div>

// // // // // // // // // // // //           {/* Quick Links */}
// // // // // // // // // // // //           <div className="space-y-6">
// // // // // // // // // // // //             <h3 className="text-lg font-bold text-white relative inline-block">
// // // // // // // // // // // //               Quick Links
// // // // // // // // // // // //               <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[#f59e0b] rounded-full"></span>
// // // // // // // // // // // //             </h3>
// // // // // // // // // // // //             <ul className="space-y-3 mt-4">
// // // // // // // // // // // //               {quickLinks.map((link, index) => (
// // // // // // // // // // // //                 <li key={index}>
// // // // // // // // // // // //                   <Link
// // // // // // // // // // // //                     to={link.path}
// // // // // // // // // // // //                     className="text-gray-300 hover:text-[#f59e0b] transition flex items-center gap-2 group"
// // // // // // // // // // // //                   >
// // // // // // // // // // // //                     <span className="w-1.5 h-1.5 bg-[#f59e0b] rounded-full opacity-0 group-hover:opacity-100"></span>
// // // // // // // // // // // //                     {link.name}
// // // // // // // // // // // //                   </Link>
// // // // // // // // // // // //                 </li>
// // // // // // // // // // // //               ))}
// // // // // // // // // // // //             </ul>
// // // // // // // // // // // //           </div>

// // // // // // // // // // // //           {/* Resources */}
// // // // // // // // // // // //           <div className="space-y-6">
// // // // // // // // // // // //             <h3 className="text-lg font-bold text-white relative inline-block">
// // // // // // // // // // // //               Resources
// // // // // // // // // // // //               <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[#f59e0b] rounded-full"></span>
// // // // // // // // // // // //             </h3>
// // // // // // // // // // // //             <ul className="space-y-3 mt-4">
// // // // // // // // // // // //               {resourceLinks.map((link, index) => (
// // // // // // // // // // // //                 <li key={index}>
// // // // // // // // // // // //                   <Link
// // // // // // // // // // // //                     to={link.path}
// // // // // // // // // // // //                     className="text-gray-300 hover:text-[#f59e0b] transition flex items-center gap-2 group"
// // // // // // // // // // // //                   >
// // // // // // // // // // // //                     <span className="w-1.5 h-1.5 bg-[#f59e0b] rounded-full opacity-0 group-hover:opacity-100"></span>
// // // // // // // // // // // //                     {link.name}
// // // // // // // // // // // //                   </Link>
// // // // // // // // // // // //                 </li>
// // // // // // // // // // // //               ))}
// // // // // // // // // // // //             </ul>
// // // // // // // // // // // //           </div>

// // // // // // // // // // // //           {/* Contact */}
// // // // // // // // // // // //           <div className="space-y-6">
// // // // // // // // // // // //             <h3 className="text-lg font-bold text-white relative inline-block">
// // // // // // // // // // // //               Contact Us
// // // // // // // // // // // //               <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[#f59e0b] rounded-full"></span>
// // // // // // // // // // // //             </h3>

// // // // // // // // // // // //             <ul className="space-y-4 mt-4">
// // // // // // // // // // // //               <li className="flex items-start gap-3">
// // // // // // // // // // // //                 <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#f59e0b]/20 text-[#f59e0b]">
// // // // // // // // // // // //                   <FaMapMarkerAlt />
// // // // // // // // // // // //                 </div>
// // // // // // // // // // // //                 <p className="text-gray-300 text-sm">
// // // // // // // // // // // //                   Bogura, Bangladesh
// // // // // // // // // // // //                 </p>
// // // // // // // // // // // //               </li>

// // // // // // // // // // // //               <li className="flex items-center gap-3">
// // // // // // // // // // // //                 <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#f59e0b]/20 text-[#f59e0b]">
// // // // // // // // // // // //                   <FaEnvelope />
// // // // // // // // // // // //                 </div>
// // // // // // // // // // // //                 <p className="text-gray-300 text-sm">
// // // // // // // // // // // //                   mdshoaibdev@gmail.com
// // // // // // // // // // // //                 </p>
// // // // // // // // // // // //               </li>

// // // // // // // // // // // //               <li className="flex items-center gap-3">
// // // // // // // // // // // //                 <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#f59e0b]/20 text-[#f59e0b]">
// // // // // // // // // // // //                   <FaPhone />
// // // // // // // // // // // //                 </div>
// // // // // // // // // // // //                 <p className="text-gray-300 text-sm">
// // // // // // // // // // // //                   +880 1234-567890
// // // // // // // // // // // //                 </p>
// // // // // // // // // // // //               </li>

// // // // // // // // // // // //               <li className="flex items-center gap-3">
// // // // // // // // // // // //                 <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#f59e0b]/20 text-[#f59e0b]">
// // // // // // // // // // // //                   <FaPhoneAlt />
// // // // // // // // // // // //                 </div>
// // // // // // // // // // // //                 <p className="text-gray-300 text-sm">
// // // // // // // // // // // //                   +880 9876-543210
// // // // // // // // // // // //                 </p>
// // // // // // // // // // // //               </li>
// // // // // // // // // // // //             </ul>
// // // // // // // // // // // //           </div>
// // // // // // // // // // // //         </div>
// // // // // // // // // // // //       </div>

// // // // // // // // // // // //       {/* Bottom */}
// // // // // // // // // // // //       <div className="border-t border-white/10 bg-black">
// // // // // // // // // // // //         <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
// // // // // // // // // // // //           <p className="text-gray-400 text-sm">
// // // // // // // // // // // //             © {currentYear} <span className="text-[#f59e0b]">Marks</span>. All rights reserved.
// // // // // // // // // // // //           </p>

// // // // // // // // // // // //           <div className="flex gap-6">
// // // // // // // // // // // //             <Link to="/privacy" className="text-gray-400 hover:text-[#f59e0b] text-sm">
// // // // // // // // // // // //               Privacy Policy
// // // // // // // // // // // //             </Link>
// // // // // // // // // // // //             <Link to="/terms" className="text-gray-400 hover:text-[#f59e0b] text-sm">
// // // // // // // // // // // //               Terms
// // // // // // // // // // // //             </Link>
// // // // // // // // // // // //           </div>
// // // // // // // // // // // //         </div>
// // // // // // // // // // // //       </div>
// // // // // // // // // // // //     </footer>
// // // // // // // // // // // //   );
// // // // // // // // // // // // };

// // // // // // // // // // // // export default Footer;


// // // // // // // // // // // import React from "react";
// // // // // // // // // // // import { Link } from "react-router-dom";
// // // // // // // // // // // import logo from "../assets/Devatorslogo.png";

// // // // // // // // // // // const Footer = () => {
// // // // // // // // // // //   const currentYear = new Date().getFullYear();

// // // // // // // // // // //   const links = [
// // // // // // // // // // //     { name: "Home", path: "#home" },
// // // // // // // // // // //     { name: "About", path: "#about" },
// // // // // // // // // // //     { name: "Works", path: "#works" },
// // // // // // // // // // //     { name: "Services", path: "#services" },
// // // // // // // // // // //     { name: "Contact", path: "#contact" },
// // // // // // // // // // //   ];

// // // // // // // // // // //   return (
// // // // // // // // // // //     <footer className="bg-[#f2f2f2] text-black border-t border-black/10">

// // // // // // // // // // //       {/* MAIN FOOTER */}
// // // // // // // // // // //       <div className="container mx-auto px-6 py-14">
// // // // // // // // // // //         <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

// // // // // // // // // // //           {/* BRAND */}
// // // // // // // // // // //           <div className="space-y-5">
// // // // // // // // // // //             <img
// // // // // // // // // // //               src={logo}
// // // // // // // // // // //               alt="Devators"
// // // // // // // // // // //               className="h-10 w-auto object-contain"
// // // // // // // // // // //             />

// // // // // // // // // // //             <p className="text-sm text-gray-600 leading-relaxed max-w-sm">
// // // // // // // // // // //               Devators is a modern startup agency building premium websites,
// // // // // // // // // // //               brands, and digital experiences that convert and inspire.
// // // // // // // // // // //             </p>
// // // // // // // // // // //           </div>

// // // // // // // // // // //           {/* LINKS */}
// // // // // // // // // // //           <div className="space-y-5">
// // // // // // // // // // //             <h3 className="text-lg font-semibold">Quick Links</h3>

// // // // // // // // // // //             <ul className="space-y-3">
// // // // // // // // // // //               {links.map((item, index) => (
// // // // // // // // // // //                 <li key={index}>
// // // // // // // // // // //                   <a
// // // // // // // // // // //                     href={item.path}
// // // // // // // // // // //                     className="text-gray-600 hover:text-black transition text-sm"
// // // // // // // // // // //                   >
// // // // // // // // // // //                     {item.name}
// // // // // // // // // // //                   </a>
// // // // // // // // // // //                 </li>
// // // // // // // // // // //               ))}
// // // // // // // // // // //             </ul>
// // // // // // // // // // //           </div>

// // // // // // // // // // //           {/* CONTACT */}
// // // // // // // // // // //           <div className="space-y-5">
// // // // // // // // // // //             <h3 className="text-lg font-semibold">Get in Touch</h3>

// // // // // // // // // // //             <div className="space-y-3 text-sm text-gray-600">
// // // // // // // // // // //               <p>📍 Bogura, Bangladesh</p>
// // // // // // // // // // //               <p>📧 contact@devators.com</p>
// // // // // // // // // // //               <p>📞 +880 1234 567 890</p>
// // // // // // // // // // //             </div>

// // // // // // // // // // //             {/* CTA */}
// // // // // // // // // // //             <a
// // // // // // // // // // //               href="#contact"
// // // // // // // // // // //               className="inline-block mt-4 bg-black text-white px-6 py-3 text-sm rounded-full hover:scale-105 transition"
// // // // // // // // // // //             >
// // // // // // // // // // //               Let's Talk
// // // // // // // // // // //             </a>
// // // // // // // // // // //           </div>
// // // // // // // // // // //         </div>
// // // // // // // // // // //       </div>

// // // // // // // // // // //       {/* BOTTOM BAR */}
// // // // // // // // // // //       <div className="border-t border-black/10">
// // // // // // // // // // //         <div className="container mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center gap-3">

// // // // // // // // // // //           <p className="text-sm text-gray-500">
// // // // // // // // // // //             © {currentYear} <span className="text-black font-medium">Devators</span>. All rights reserved.
// // // // // // // // // // //           </p>

// // // // // // // // // // //           <div className="flex gap-6 text-sm text-gray-500">
// // // // // // // // // // //             <a href="#privacy" className="hover:text-black transition">
// // // // // // // // // // //               Privacy
// // // // // // // // // // //             </a>
// // // // // // // // // // //             <a href="#terms" className="hover:text-black transition">
// // // // // // // // // // //               Terms
// // // // // // // // // // //             </a>
// // // // // // // // // // //           </div>

// // // // // // // // // // //         </div>
// // // // // // // // // // //       </div>
// // // // // // // // // // //     </footer>
// // // // // // // // // // //   );
// // // // // // // // // // // };

// // // // // // // // // // // export default Footer;


// // // // // // // // // // import React from "react";
// // // // // // // // // // import {
// // // // // // // // // //   FaFacebookF,
// // // // // // // // // //   FaMapMarkerAlt,
// // // // // // // // // //   FaEnvelope,
// // // // // // // // // //   FaPhoneAlt,
// // // // // // // // // // } from "react-icons/fa";
// // // // // // // // // // import { BsInstagram, BsTwitterX, BsLinkedin, BsYoutube } from "react-icons/bs";
// // // // // // // // // // import logo from "../assets/Devatorslogo.png"; // আপনার লোগো পাথ

// // // // // // // // // // const Footer = () => {
// // // // // // // // // //   const currentYear = new Date().getFullYear();

// // // // // // // // // //   const navLinks = [
// // // // // // // // // //     { name: "Home", href: "#home" },
// // // // // // // // // //     { name: "About", href: "#about" },
// // // // // // // // // //     { name: "Works", href: "#works" },
// // // // // // // // // //     { name: "Services", href: "#services" },
// // // // // // // // // //     { name: "Contact", href: "#contact" },
// // // // // // // // // //   ];

// // // // // // // // // //   const socialLinks = [
// // // // // // // // // //     { icon: <FaFacebookF />, path: "https://facebook.com", label: "Facebook" },
// // // // // // // // // //     { icon: <BsInstagram />, path: "https://instagram.com", label: "Instagram" },
// // // // // // // // // //     { icon: <BsTwitterX />, path: "https://twitter.com", label: "Twitter" },
// // // // // // // // // //     { icon: <BsLinkedin />, path: "https://linkedin.com", label: "LinkedIn" },
// // // // // // // // // //   ];

// // // // // // // // // //   return (
// // // // // // // // // //     <footer className="bg-black text-white pt-20">
// // // // // // // // // //       <div className="container mx-auto px-6 lg:px-12 pb-16">
// // // // // // // // // //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
// // // // // // // // // //           {/* --- Brand Section --- */}
// // // // // // // // // //           <div className="space-y-8 col-span-1 md:col-span-2 lg:col-span-1">
// // // // // // // // // //             <img 
// // // // // // // // // //               src={logo} 
// // // // // // // // // //               alt="Devators Logo" 
// // // // // // // // // //               className="h-12 w-auto object-contain brightness-0 invert" // লোগো হোয়াইট করার জন্য ফিল্টার
// // // // // // // // // //             />
// // // // // // // // // //             <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
// // // // // // // // // //               We design and build premium digital experiences. At Devators, change becomes inevitable through strategic design and high-end engineering.
// // // // // // // // // //             </p>
// // // // // // // // // //             <div className="flex items-center gap-4">
// // // // // // // // // //               {socialLinks.map((social, index) => (
// // // // // // // // // //                 <a
// // // // // // // // // //                   key={index}
// // // // // // // // // //                   href={social.path}
// // // // // // // // // //                   target="_blank"
// // // // // // // // // //                   rel="noopener noreferrer"
// // // // // // // // // //                   className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 text-white transition-all duration-300 hover:bg-white hover:text-black"
// // // // // // // // // //                 >
// // // // // // // // // //                   {social.icon}
// // // // // // // // // //                 </a>
// // // // // // // // // //               ))}
// // // // // // // // // //             </div>
// // // // // // // // // //           </div>

// // // // // // // // // //           {/* --- Quick Navigation --- */}
// // // // // // // // // //           <div className="flex flex-col space-y-6">
// // // // // // // // // //             <h3 className="text-white font-semibold text-lg uppercase tracking-widest">Navigation</h3>
// // // // // // // // // //             <ul className="space-y-4">
// // // // // // // // // //               {navLinks.map((link, index) => (
// // // // // // // // // //                 <li key={index}>
// // // // // // // // // //                   <a
// // // // // // // // // //                     href={link.href}
// // // // // // // // // //                     className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
// // // // // // // // // //                   >
// // // // // // // // // //                     {link.name}
// // // // // // // // // //                   </a>
// // // // // // // // // //                 </li>
// // // // // // // // // //               ))}
// // // // // // // // // //             </ul>
// // // // // // // // // //           </div>

// // // // // // // // // //           {/* --- Contact Info --- */}
// // // // // // // // // //           <div className="flex flex-col space-y-6">
// // // // // // // // // //             <h3 className="text-white font-semibold text-lg uppercase tracking-widest">Contact</h3>
// // // // // // // // // //             <ul className="space-y-5">
// // // // // // // // // //               <li className="flex items-start gap-4 text-gray-400 group">
// // // // // // // // // //                 <FaMapMarkerAlt className="mt-1 group-hover:text-white transition-colors" />
// // // // // // // // // //                 <span className="text-sm">Bogura, Rajshahi, Bangladesh</span>
// // // // // // // // // //               </li>
// // // // // // // // // //               <li className="flex items-center gap-4 text-gray-400 group">
// // // // // // // // // //                 <FaEnvelope className="group-hover:text-white transition-colors" />
// // // // // // // // // //                 <span className="text-sm">hello@devators.com</span>
// // // // // // // // // //               </li>
// // // // // // // // // //               <li className="flex items-center gap-4 text-gray-400 group">
// // // // // // // // // //                 <FaPhoneAlt className="group-hover:text-white transition-colors" />
// // // // // // // // // //                 <span className="text-sm">+880 1234 567890</span>
// // // // // // // // // //               </li>
// // // // // // // // // //             </ul>
// // // // // // // // // //           </div>

// // // // // // // // // //           {/* --- Newsletter / CTA --- */}
// // // // // // // // // //           <div className="flex flex-col space-y-6">
// // // // // // // // // //             <h3 className="text-white font-semibold text-lg uppercase tracking-widest">Newsletter</h3>
// // // // // // // // // //             <p className="text-gray-400 text-sm">Join our mailing list for latest updates.</p>
// // // // // // // // // //             <div className="flex">
// // // // // // // // // //               <input 
// // // // // // // // // //                 type="email" 
// // // // // // // // // //                 placeholder="Email address" 
// // // // // // // // // //                 className="bg-white/5 border border-white/10 px-4 py-3 text-sm w-full focus:outline-none focus:border-white transition-all"
// // // // // // // // // //               />
// // // // // // // // // //               <button className="bg-white text-black px-6 py-3 font-bold text-sm hover:bg-[#f2f2f2] transition-all">
// // // // // // // // // //                 GO
// // // // // // // // // //               </button>
// // // // // // // // // //             </div>
// // // // // // // // // //           </div>

// // // // // // // // // //         </div>
// // // // // // // // // //       </div>

// // // // // // // // // //       {/* --- Bottom Footer --- */}
// // // // // // // // // //       <div className="bg-[#0a0a0a] py-8 border-t border-white/5">
// // // // // // // // // //         <div className="container mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
// // // // // // // // // //           <p className="text-gray-500 text-xs tracking-widest uppercase">
// // // // // // // // // //             © {currentYear} <span className="text-white font-bold">Devators</span>. All rights reserved.
// // // // // // // // // //           </p>

// // // // // // // // // //           <div className="flex gap-8">
// // // // // // // // // //             <a href="#" className="text-gray-500 hover:text-white text-[10px] uppercase tracking-widest transition-colors">
// // // // // // // // // //               Privacy Policy
// // // // // // // // // //             </a>
// // // // // // // // // //             <a href="#" className="text-gray-500 hover:text-white text-[10px] uppercase tracking-widest transition-colors">
// // // // // // // // // //               Terms of Service
// // // // // // // // // //             </a>
// // // // // // // // // //           </div>
// // // // // // // // // //         </div>
// // // // // // // // // //       </div>
// // // // // // // // // //     </footer>
// // // // // // // // // //   );
// // // // // // // // // // };

// // // // // // // // // // export default Footer;

// // // // // // // // // import React from "react";
// // // // // // // // // import logo from "../assets/Devatorslogo.png";
// // // // // // // // // import {
// // // // // // // // //   FaFacebookF,
// // // // // // // // //   FaInstagram,
// // // // // // // // //   FaLinkedinIn,
// // // // // // // // //   FaGithub,
// // // // // // // // // } from "react-icons/fa";

// // // // // // // // // const Footer = () => {
// // // // // // // // //   const currentYear = new Date().getFullYear();

// // // // // // // // //   const links = [
// // // // // // // // //     { name: "Home", path: "#home" },
// // // // // // // // //     { name: "About", path: "#about" },
// // // // // // // // //     { name: "Works", path: "#works" },
// // // // // // // // //     { name: "Services", path: "#services" },
// // // // // // // // //     { name: "Contact", path: "#contact" },
// // // // // // // // //   ];

// // // // // // // // //   const social = [
// // // // // // // // //     { icon: <FaFacebookF />, link: "https://facebook.com" },
// // // // // // // // //     { icon: <FaInstagram />, link: "https://instagram.com" },
// // // // // // // // //     { icon: <FaLinkedinIn />, link: "https://linkedin.com" },
// // // // // // // // //     { icon: <FaGithub />, link: "https://github.com" },
// // // // // // // // //   ];

// // // // // // // // //   return (
// // // // // // // // //     <footer className="bg-black text-white">

// // // // // // // // //       {/* MAIN */}
// // // // // // // // //       <div className="container mx-auto px-6 py-16">
// // // // // // // // //         <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

// // // // // // // // //           {/* BRAND */}
// // // // // // // // //           <div className="space-y-6">
// // // // // // // // //             <img
// // // // // // // // //               src={logo}
// // // // // // // // //               alt="Devators"
// // // // // // // // //               className="h-10 w-auto object-contain"
// // // // // // // // //             />

// // // // // // // // //             <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
// // // // // // // // //               We are Devators — a modern startup agency crafting premium digital
// // // // // // // // //               products, brands, and experiences that stand out.
// // // // // // // // //             </p>

// // // // // // // // //             {/* SOCIAL ICONS */}
// // // // // // // // //             <div className="flex gap-4 pt-2">
// // // // // // // // //               {social.map((item, i) => (
// // // // // // // // //                 <a
// // // // // // // // //                   key={i}
// // // // // // // // //                   href={item.link}
// // // // // // // // //                   target="_blank"
// // // // // // // // //                   rel="noopener noreferrer"
// // // // // // // // //                   className="w-10 h-10 flex items-center justify-center border border-white/20 text-white rounded-full hover:bg-white hover:text-black transition"
// // // // // // // // //                 >
// // // // // // // // //                   {item.icon}
// // // // // // // // //                 </a>
// // // // // // // // //               ))}
// // // // // // // // //             </div>
// // // // // // // // //           </div>

// // // // // // // // //           {/* LINKS */}
// // // // // // // // //           <div>
// // // // // // // // //             <h3 className="text-white font-semibold text-lg mb-5">
// // // // // // // // //               Navigation
// // // // // // // // //             </h3>

// // // // // // // // //             <ul className="space-y-3">
// // // // // // // // //               {links.map((item, i) => (
// // // // // // // // //                 <li key={i}>
// // // // // // // // //                   <a
// // // // // // // // //                     href={item.path}
// // // // // // // // //                     className="text-gray-400 hover:text-white transition text-sm"
// // // // // // // // //                   >
// // // // // // // // //                     {item.name}
// // // // // // // // //                   </a>
// // // // // // // // //                 </li>
// // // // // // // // //               ))}
// // // // // // // // //             </ul>
// // // // // // // // //           </div>

// // // // // // // // //           {/* CONTACT */}
// // // // // // // // //           <div>
// // // // // // // // //             <h3 className="text-white font-semibold text-lg mb-5">
// // // // // // // // //               Get in Touch
// // // // // // // // //             </h3>

// // // // // // // // //             <div className="space-y-3 text-sm text-gray-400">
// // // // // // // // //               <p>📍 Bogura, Bangladesh</p>
// // // // // // // // //               <p>📧 contact@devators.com</p>
// // // // // // // // //               <p>📞 +880 1234 567 890</p>
// // // // // // // // //             </div>

// // // // // // // // //             <a
// // // // // // // // //               href="#contact"
// // // // // // // // //               className="inline-block mt-6 bg-white text-black px-6 py-3 text-sm font-medium rounded-full hover:scale-105 transition"
// // // // // // // // //             >
// // // // // // // // //               Let's Talk
// // // // // // // // //             </a>
// // // // // // // // //           </div>
// // // // // // // // //         </div>
// // // // // // // // //       </div>

// // // // // // // // //       {/* BOTTOM */}
// // // // // // // // //       <div className="border-t border-white/10">
// // // // // // // // //         <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">

// // // // // // // // //           <p className="text-gray-500 text-sm">
// // // // // // // // //             © {currentYear} <span className="text-white">Devators</span>. All rights reserved.
// // // // // // // // //           </p>

// // // // // // // // //           <div className="flex gap-6 text-sm text-gray-500">
// // // // // // // // //             <a href="#privacy" className="hover:text-white transition">
// // // // // // // // //               Privacy
// // // // // // // // //             </a>
// // // // // // // // //             <a href="#terms" className="hover:text-white transition">
// // // // // // // // //               Terms
// // // // // // // // //             </a>
// // // // // // // // //           </div>

// // // // // // // // //         </div>
// // // // // // // // //       </div>
// // // // // // // // //     </footer>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // export default Footer;


// // // // // // // // import React from "react";
// // // // // // // // import { motion } from "framer-motion";
// // // // // // // // import {
// // // // // // // //   FaFacebookF,
// // // // // // // //   FaInstagram,
// // // // // // // //   FaLinkedinIn,
// // // // // // // //   FaArrowUp,
// // // // // // // //   FaMapMarkerAlt,
// // // // // // // //   FaEnvelope,
// // // // // // // //   FaPhoneAlt
// // // // // // // // } from "react-icons/fa";
// // // // // // // // import { BsTwitterX } from "react-icons/bs";
// // // // // // // // import logo from "../assets/Devatorslogo.png"; // আপনার লোগো পাথ

// // // // // // // // const Footer = () => {
// // // // // // // //   const currentYear = new Date().getFullYear();

// // // // // // // //   const scrollToTop = () => {
// // // // // // // //     window.scrollTo({ top: 0, behavior: "smooth" });
// // // // // // // //   };

// // // // // // // //   return (
// // // // // // // //     <footer className="bg-black text-white pt-24 pb-12 overflow-hidden">
// // // // // // // //       <div className="container mx-auto px-6 lg:px-12">
        
// // // // // // // //         {/* 🔥 TOP SECTION: LOGO & BIG TEXT */}
// // // // // // // //         <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-20 gap-8">
// // // // // // // //           <motion.div 
// // // // // // // //             initial={{ opacity: 0, x: -20 }}
// // // // // // // //             whileInView={{ opacity: 1, x: 0 }}
// // // // // // // //             transition={{ duration: 0.6 }}
// // // // // // // //           >
// // // // // // // //             <img 
// // // // // // // //               src={logo} 
// // // // // // // //               alt="Devators" 
// // // // // // // //               className="h-14 w-auto object-contain brightness-0 invert" 
// // // // // // // //             />
// // // // // // // //           </motion.div>
          
// // // // // // // //           <motion.h2 
// // // // // // // //             initial={{ opacity: 0, y: 20 }}
// // // // // // // //             whileInView={{ opacity: 1, y: 0 }}
// // // // // // // //             className="text-3xl md:text-5xl font-light tracking-tighter leading-tight max-w-xl"
// // // // // // // //           >
// // // // // // // //             Let's build the <span className="italic text-gray-500">extraordinary</span> together.
// // // // // // // //           </motion.h2>
// // // // // // // //         </div>

// // // // // // // //         <hr className="border-white/10 mb-20" />

// // // // // // // //         {/* 🔥 MAIN GRID */}
// // // // // // // //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          
// // // // // // // //           {/* ABOUT */}
// // // // // // // //           <div className="space-y-6">
// // // // // // // //             <h4 className="text-xs uppercase tracking-[0.3em] text-gray-500 font-semibold">The Studio</h4>
// // // // // // // //             <p className="text-gray-400 text-sm leading-relaxed">
// // // // // // // //               Devators is a digital innovation studio specializing in high-end design and full-stack development. We transform ideas into iconic brands.
// // // // // // // //             </p>
// // // // // // // //             <div className="flex gap-5 pt-2">
// // // // // // // //               {[<FaFacebookF />, <BsTwitterX />, <FaInstagram />, <FaLinkedinIn />].map((icon, index) => (
// // // // // // // //                 <a 
// // // // // // // //                   key={index} 
// // // // // // // //                   href="#" 
// // // // // // // //                   className="text-gray-500 hover:text-white transition-all duration-300 transform hover:-translate-y-1"
// // // // // // // //                 >
// // // // // // // //                   {icon}
// // // // // // // //                 </a>
// // // // // // // //               ))}
// // // // // // // //             </div>
// // // // // // // //           </div>

// // // // // // // //           {/* QUICK LINKS */}
// // // // // // // //           <div className="space-y-6">
// // // // // // // //             <h4 className="text-xs uppercase tracking-[0.3em] text-gray-500 font-semibold">Explore</h4>
// // // // // // // //             <ul className="space-y-4">
// // // // // // // //               {["Home", "Works", "About", "Services", "Contact"].map((item) => (
// // // // // // // //                 <li key={item}>
// // // // // // // //                   <a href={`#${item.toLowerCase()}`} className="text-sm text-gray-400 hover:text-white transition-colors">
// // // // // // // //                     {item}
// // // // // // // //                   </a>
// // // // // // // //                 </li>
// // // // // // // //               ))}
// // // // // // // //             </ul>
// // // // // // // //           </div>

// // // // // // // //           {/* CONTACT */}
// // // // // // // //           <div className="space-y-6">
// // // // // // // //             <h4 className="text-xs uppercase tracking-[0.3em] text-gray-500 font-semibold">Get in touch</h4>
// // // // // // // //             <ul className="space-y-4">
// // // // // // // //               <li className="flex items-center gap-3 text-sm text-gray-400">
// // // // // // // //                 <FaEnvelope className="text-xs" /> hello@devators.com
// // // // // // // //               </li>
// // // // // // // //               <li className="flex items-center gap-3 text-sm text-gray-400">
// // // // // // // //                 <FaPhoneAlt className="text-xs" /> +880 1234 567890
// // // // // // // //               </li>
// // // // // // // //               <li className="flex items-start gap-3 text-sm text-gray-400">
// // // // // // // //                 <FaMapMarkerAlt className="text-xs mt-1" /> Bogura, Bangladesh
// // // // // // // //               </li>
// // // // // // // //             </ul>
// // // // // // // //           </div>

// // // // // // // //           {/* NEWSLETTER */}
// // // // // // // //           <div className="space-y-6">
// // // // // // // //             <h4 className="text-xs uppercase tracking-[0.3em] text-gray-500 font-semibold">Stay Connected</h4>
// // // // // // // //             <div className="relative group">
// // // // // // // //               <input 
// // // // // // // //                 type="email" 
// // // // // // // //                 placeholder="Your email" 
// // // // // // // //                 className="w-full bg-transparent border-b border-white/20 py-3 text-sm focus:outline-none focus:border-white transition-colors pr-10"
// // // // // // // //               />
// // // // // // // //               <button className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white">
// // // // // // // //                 <FaArrowUp className="rotate-45" />
// // // // // // // //               </button>
// // // // // // // //             </div>
// // // // // // // //             <p className="text-[10px] text-gray-600 uppercase tracking-widest leading-loose">
// // // // // // // //               By subscribing you agree to our <br /> privacy policy.
// // // // // // // //             </p>
// // // // // // // //           </div>

// // // // // // // //         </div>

// // // // // // // //         {/* 🔥 BOTTOM SECTION */}
// // // // // // // //         <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
// // // // // // // //           <p className="text-[10px] uppercase tracking-[0.2em] text-gray-600">
// // // // // // // //             © {currentYear} Devators Studio. Crafted with <span className="text-white">Precision.</span>
// // // // // // // //           </p>
          
// // // // // // // //           {/* Scroll to Top Circle */}
// // // // // // // //           <button 
// // // // // // // //             onClick={scrollToTop}
// // // // // // // //             className="group flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-gray-500 hover:text-white transition-all"
// // // // // // // //           >
// // // // // // // //             Back to top 
// // // // // // // //             <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
// // // // // // // //               <FaArrowUp />
// // // // // // // //             </div>
// // // // // // // //           </button>

// // // // // // // //           <div className="flex gap-8 text-[10px] uppercase tracking-[0.2em] text-gray-600">
// // // // // // // //             <a href="#" className="hover:text-white transition-colors">Privacy</a>
// // // // // // // //             <a href="#" className="hover:text-white transition-colors">Terms</a>
// // // // // // // //           </div>
// // // // // // // //         </div>
// // // // // // // //       </div>
// // // // // // // //     </footer>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default Footer;


// // // // // // // import React from "react";
// // // // // // // import { motion } from "framer-motion";
// // // // // // // import {
// // // // // // //   FaFacebookF,
// // // // // // //   FaInstagram,
// // // // // // //   FaLinkedinIn,
// // // // // // //   FaArrowRight,
// // // // // // //   FaGlobeAmericas,
// // // // // // // } from "react-icons/fa";
// // // // // // // import { BsTwitterX, BsArrowUpRight } from "react-icons/bs";
// // // // // // // import logo from "../assets/Devatorslogo.png";

// // // // // // // const Footer = () => {
// // // // // // //   const currentYear = new Date().getFullYear();

// // // // // // //   // Infinite Scroll Text
// // // // // // //   const scrollingText = "• DESIGN • DEVELOPMENT • BRANDING • STRATEGY • INNOVATION ";

// // // // // // //   return (
// // // // // // //     <footer className="bg-[#080808] text-white pt-20 overflow-hidden relative">
      
// // // // // // //       {/* 🌪️ Background Decorative Element */}
// // // // // // //       <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
// // // // // // //       <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

// // // // // // //       {/* 🏃 Infinite Scrolling Text Section */}
// // // // // // //       <div className="border-y border-white/5 py-6 mb-20 overflow-hidden flex whitespace-nowrap">
// // // // // // //         {[1, 2, 3, 4].map((_, i) => (
// // // // // // //           <motion.div
// // // // // // //             key={i}
// // // // // // //             initial={{ x: 0 }}
// // // // // // //             animate={{ x: "-100%" }}
// // // // // // //             transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
// // // // // // //             className="text-[10px] font-bold tracking-[0.5em] uppercase text-white/30 flex items-center"
// // // // // // //           >
// // // // // // //             {scrollingText}
// // // // // // //           </motion.div>
// // // // // // //         ))}
// // // // // // //       </div>

// // // // // // //       <div className="container mx-auto px-6 lg:px-12 relative z-10">
// // // // // // //         <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
          
// // // // // // //           {/* 💎 Left: Big Branding */}
// // // // // // //           <div className="lg:col-span-5 space-y-12">
// // // // // // //             <motion.div
// // // // // // //               initial={{ opacity: 0 }}
// // // // // // //               whileInView={{ opacity: 1 }}
// // // // // // //               transition={{ duration: 1 }}
// // // // // // //             >
// // // // // // //               <img src={logo} alt="Devators" className="h-16 w-auto brightness-0 invert mb-8" />
// // // // // // //               <h2 className="text-4xl md:text-6xl font-light tracking-tight leading-[1.1]">
// // // // // // //                 We turn <span className="text-indigo-500 italic">vision</span> into <br /> 
// // // // // // //                 digital <span className="font-bold">dominance.</span>
// // // // // // //               </h2>
// // // // // // //             </motion.div>

// // // // // // //             <div className="flex flex-col space-y-4">
// // // // // // //               <p className="text-gray-500 text-sm uppercase tracking-widest">Connect with us</p>
// // // // // // //               <div className="flex gap-4">
// // // // // // //                 {[
// // // // // // //                   { icon: <FaFacebookF />, link: "#" },
// // // // // // //                   { icon: <BsTwitterX />, link: "#" },
// // // // // // //                   { icon: <FaInstagram />, link: "#" },
// // // // // // //                   { icon: <FaLinkedinIn />, link: "#" },
// // // // // // //                 ].map((social, idx) => (
// // // // // // //                   <motion.a
// // // // // // //                     key={idx}
// // // // // // //                     href={social.link}
// // // // // // //                     whileHover={{ y: -5, scale: 1.1 }}
// // // // // // //                     className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:border-indigo-500 hover:text-white transition-all duration-300 bg-white/5"
// // // // // // //                   >
// // // // // // //                     {social.icon}
// // // // // // //                   </motion.a>
// // // // // // //                 ))}
// // // // // // //               </div>
// // // // // // //             </div>
// // // // // // //           </div>

// // // // // // //           {/* 🔗 Center: Links */}
// // // // // // //           <div className="lg:col-span-3 lg:col-start-7 space-y-8">
// // // // // // //             <h3 className="text-indigo-500 text-xs font-bold uppercase tracking-[0.3em]">Directory</h3>
// // // // // // //             <ul className="space-y-4">
// // // // // // //               {["Studio", "Services", "Selected Works", "Journal", "Careers"].map((link) => (
// // // // // // //                 <li key={link}>
// // // // // // //                   <a href="#" className="group flex items-center text-xl font-light text-gray-400 hover:text-white transition-all">
// // // // // // //                     <span className="w-0 group-hover:w-6 h-[1px] bg-indigo-500 mr-0 group-hover:mr-3 transition-all duration-300"></span>
// // // // // // //                     {link}
// // // // // // //                   </a>
// // // // // // //                 </li>
// // // // // // //               ))}
// // // // // // //             </ul>
// // // // // // //           </div>

// // // // // // //           {/* 📍 Right: Contact & Location */}
// // // // // // //           <div className="lg:col-span-3 space-y-8">
// // // // // // //             <h3 className="text-indigo-500 text-xs font-bold uppercase tracking-[0.3em]">Drop a line</h3>
// // // // // // //             <div className="space-y-6">
// // // // // // //               <a href="mailto:hello@devators.com" className="block text-2xl md:text-3xl font-light hover:text-indigo-400 transition-colors underline underline-offset-8 decoration-white/10 hover:decoration-indigo-400">
// // // // // // //                 hello@devators.com
// // // // // // //               </a>
// // // // // // //               <div className="pt-4 space-y-2">
// // // // // // //                 <div className="flex items-center gap-2 text-gray-500 text-sm">
// // // // // // //                   <FaGlobeAmericas className="text-indigo-500" />
// // // // // // //                   <span>Based in Bogura, BD. Available Worldwide.</span>
// // // // // // //                 </div>
// // // // // // //                 <p className="text-gray-500 text-sm font-mono tracking-tighter uppercase">
// // // // // // //                   Timezone: (GMT+6) 
// // // // // // //                 </p>
// // // // // // //               </div>
// // // // // // //             </div>
// // // // // // //           </div>
// // // // // // //         </div>

// // // // // // //         {/* 🚀 Footer Bottom */}
// // // // // // //         <div className="mt-28 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 pb-10">
// // // // // // //           <div className="flex items-center gap-6 text-[10px] uppercase tracking-[0.3em] text-gray-600">
// // // // // // //             <span>© {currentYear} Devators</span>
// // // // // // //             <span className="hidden md:block">|</span>
// // // // // // //             <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
// // // // // // //             <a href="#" className="hover:text-white transition-colors">Terms</a>
// // // // // // //           </div>

// // // // // // //           {/* Magnetic-like Button */}
// // // // // // //           <motion.button
// // // // // // //             whileHover={{ scale: 1.05 }}
// // // // // // //             whileTap={{ scale: 0.95 }}
// // // // // // //             className="bg-indigo-600 hover:bg-white hover:text-black text-white px-8 py-4 rounded-full flex items-center gap-3 transition-all duration-500 shadow-[0_0_20px_rgba(79,70,229,0.3)]"
// // // // // // //           >
// // // // // // //             <span className="text-xs font-bold uppercase tracking-widest">Get Started</span>
// // // // // // //             <BsArrowUpRight className="text-lg" />
// // // // // // //           </motion.button>
// // // // // // //         </div>
// // // // // // //       </div>

// // // // // // //       {/* Extreme Bottom Bar */}
// // // // // // //       <div className="h-1.5 w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600" />
// // // // // // //     </footer>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default Footer;


// // // // // // import React from "react";
// // // // // // import { motion } from "framer-motion";
// // // // // // import {
// // // // // //   FaFacebookF,
// // // // // //   FaInstagram,
// // // // // //   FaLinkedinIn,
// // // // // //   FaWhatsapp,
// // // // // //   FaArrowRight,
// // // // // // } from "react-icons/fa";
// // // // // // import { BsTwitterX, BsArrowUpRight, BsStars } from "react-icons/bs";
// // // // // // import logo from "../assets/Devatorslogo.png";

// // // // // // const Footer = () => {
// // // // // //   const currentYear = new Date().getFullYear();

// // // // // //   return (
// // // // // //     <footer className="relative bg-[#050505] text-white pt-32 pb-10 overflow-hidden">
// // // // // //       {/* 🌌 Animated Background Aura */}
// // // // // //       <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-indigo-900/20 rounded-full blur-[140px] animate-pulse" />
// // // // // //       <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px]" />

// // // // // //       <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
// // // // // //         {/* ⭐ TOP SECTION: CLIENT SATISFACTION HEADER */}
// // // // // //         <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-12">
// // // // // //           <div className="max-w-3xl space-y-6">
// // // // // //             <motion.div 
// // // // // //               initial={{ opacity: 0, y: 20 }}
// // // // // //               whileInView={{ opacity: 1, y: 0 }}
// // // // // //               className="flex items-center gap-2 text-indigo-400 font-medium tracking-[0.3em] text-xs uppercase"
// // // // // //             >
// // // // // //               <BsStars className="animate-spin-slow" /> Trust by Industry Leaders
// // // // // //             </motion.div>
// // // // // //             <h2 className="text-5xl md:text-7xl font-semibold tracking-tighter leading-none">
// // // // // //               Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-300 to-gray-500">elevate</span> your <br /> digital presence?
// // // // // //             </h2>
// // // // // //           </div>
          
// // // // // //           <motion.div 
// // // // // //              whileHover={{ scale: 1.05 }}
// // // // // //              className="relative group p-[1px] rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"
// // // // // //           >
// // // // // //             <a href="#contact" className="flex items-center gap-4 bg-black px-10 py-5 rounded-full transition-all group-hover:bg-transparent">
// // // // // //               <span className="font-bold uppercase tracking-widest text-sm">Let's Talk Business</span>
// // // // // //               <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center group-hover:rotate-45 transition-transform duration-500">
// // // // // //                 <BsArrowUpRight />
// // // // // //               </div>
// // // // // //             </a>
// // // // // //           </motion.div>
// // // // // //         </div>

// // // // // //         {/* 📊 MAIN CONTENT GRID */}
// // // // // //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 border-t border-white/10 pt-20">
          
// // // // // //           {/* Brand Identity */}
// // // // // //           <div className="lg:col-span-4 space-y-8">
// // // // // //             <img src={logo} alt="Devators" className="h-14 w-auto brightness-0 invert" />
// // // // // //             <p className="text-gray-400 text-lg font-light leading-relaxed">
// // // // // //               We specialize in high-performance digital solutions that drive growth and set new standards in the tech industry.
// // // // // //             </p>
// // // // // //             <div className="flex gap-3">
// // // // // //               {[
// // // // // //                 { icon: <FaFacebookF />, link: "#" },
// // // // // //                 { icon: <BsTwitterX />, link: "#" },
// // // // // //                 { icon: <FaInstagram />, link: "#" },
// // // // // //                 { icon: <FaLinkedinIn />, link: "#" },
// // // // // //                 { icon: <FaWhatsapp />, link: "#" },
// // // // // //               ].map((social, i) => (
// // // // // //                 <a key={i} href={social.link} className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 hover:bg-white hover:text-black transition-all duration-500">
// // // // // //                   {social.icon}
// // // // // //                 </a>
// // // // // //               ))}
// // // // // //             </div>
// // // // // //           </div>

// // // // // //           {/* Expertises */}
// // // // // //           <div className="lg:col-span-2 lg:col-start-6">
// // // // // //             <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-8">Expertise</h4>
// // // // // //             <ul className="space-y-4 text-gray-500">
// // // // // //               {["Web Architecture", "UI/UX Strategy", "Brand Identity", "E-commerce", "AI Integration"].map(item => (
// // // // // //                 <li key={item} className="hover:text-white transition-colors cursor-pointer flex items-center gap-2 group">
// // // // // //                   <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
// // // // // //                   {item}
// // // // // //                 </li>
// // // // // //               ))}
// // // // // //             </ul>
// // // // // //           </div>

// // // // // //           {/* Quick Nav */}
// // // // // //           <div className="lg:col-span-2">
// // // // // //             <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-8">Agency</h4>
// // // // // //             <ul className="space-y-4 text-gray-500">
// // // // // //               {["Our Works", "About Studio", "Contact Us", "Careers", "Press Kit"].map(item => (
// // // // // //                 <li key={item} className="hover:text-white transition-colors cursor-pointer">
// // // // // //                   {item}
// // // // // //                 </li>
// // // // // //               ))}
// // // // // //             </ul>
// // // // // //           </div>

// // // // // //           {/* Contact Details */}
// // // // // //           <div className="lg:col-span-3">
// // // // // //             <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-8">Say Hello</h4>
// // // // // //             <div className="space-y-6">
// // // // // //               <div className="group cursor-pointer">
// // // // // //                 <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">New Projects</p>
// // // // // //                 <p className="text-xl font-medium group-hover:text-indigo-400 transition-colors">hello@devators.com</p>
// // // // // //               </div>
// // // // // //               <div className="group cursor-pointer">
// // // // // //                 <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Office Location</p>
// // // // // //                 <p className="text-lg font-light leading-snug text-gray-400 group-hover:text-white transition-colors">
// // // // // //                   Pundra University Area,<br /> Bogura, Bangladesh
// // // // // //                 </p>
// // // // // //               </div>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         </div>

// // // // // //         {/* 🔐 FOOTER BOTTOM: THE TRUST BAR */}
// // // // // //         <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
// // // // // //           <div className="flex items-center gap-8 text-[11px] font-medium uppercase tracking-[0.2em] text-gray-600">
// // // // // //             <p>© {currentYear} Devators Agency</p>
// // // // // //             <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
// // // // // //             <a href="#" className="hover:text-white transition-colors">Cookies</a>
// // // // // //           </div>

// // // // // //           <div className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-full border border-white/10">
// // // // // //             <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
// // // // // //             <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">
// // // // // //               Agency Status: <span className="text-white">Accepting New Projects</span>
// // // // // //             </p>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </div>

// // // // // //       {/* Decorative Corner Label */}
// // // // // //       <div className="absolute bottom-10 right-[-50px] rotate-90 hidden lg:block">
// // // // // //           <p className="text-[100px] font-bold text-white/[0.02] select-none tracking-tighter">DEVATORS</p>
// // // // // //       </div>
// // // // // //     </footer>
// // // // // //   );
// // // // // // };

// // // // // // export default Footer;


// // // // // // import React from "react";
// // // // // // import { motion } from "framer-motion";
// // // // // // import {
// // // // // //   FaFacebookF,
// // // // // //   FaInstagram,
// // // // // //   FaLinkedinIn,
// // // // // //   FaWhatsapp,
// // // // // // } from "react-icons/fa";
// // // // // // import { BsTwitterX, BsArrowUpRight, BsStars } from "react-icons/bs";
// // // // // // import logo from "../assets/Devatorslogo.png"

// // // // // // const Footer = () => {
// // // // // //   const currentYear = new Date().getFullYear();

// // // // // //   // আপনার নেভবার লিঙ্কগুলো এখানে ইন্টিগ্রেট করা হয়েছে
// // // // // //   const navLinks = [
// // // // // //     { href: "#home", label: "Home" },
// // // // // //     { href: "#about", label: "About" },
// // // // // //     { href: "#works", label: "Works" },
// // // // // //     { href: "#services", label: "Services" },
// // // // // //     { href: "#contact", label: "Contact" },
// // // // // //   ];

// // // // // //   const expertises = [
// // // // // //     "Web Architecture",
// // // // // //     "UI/UX Strategy",
// // // // // //     "Brand Identity",
// // // // // //     "E-commerce",
// // // // // //     "AI Integration",
// // // // // //   ];

// // // // // //   return (
// // // // // //     <footer className="relative bg-black text-white pt-32 pb-10 overflow-hidden">
// // // // // //       {/* 🌌 Minimalist Background Aura (Gray/White theme) */}
// // // // // //       <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-white/5 rounded-full blur-[140px] animate-pulse" />

// // // // // //       <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
// // // // // //         {/* ⭐ TOP SECTION */}
// // // // // //         <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-12">
// // // // // //           <div className="max-w-3xl space-y-6">
// // // // // //             <motion.div 
// // // // // //               initial={{ opacity: 0, y: 20 }}
// // // // // //               whileInView={{ opacity: 1, y: 0 }}
// // // // // //               className="flex items-center gap-2 text-[#f2f2f2] font-medium tracking-[0.3em] text-xs uppercase"
// // // // // //             >
// // // // // //               <BsStars className="animate-spin-slow" /> Trusted By Industry Leaders
// // // // // //             </motion.div>
// // // // // //             <h2 className="text-5xl md:text-7xl font-semibold tracking-tighter leading-none">
// // // // // //               Ready to <span className="text-gray-500 italic">elevate</span> your <br /> digital presence?
// // // // // //             </h2>
// // // // // //           </div>
          
// // // // // //           <motion.div 
// // // // // //              whileHover={{ scale: 1.05 }}
// // // // // //              className="relative group p-[1px] rounded-full bg-white/20 hover:bg-white transition-all duration-500"
// // // // // //           >
// // // // // //             <a href="#contact" className="flex items-center gap-4 bg-black px-10 py-5 rounded-full transition-all">
// // // // // //               <span className="font-bold uppercase tracking-widest text-sm text-[#f2f2f2]">Let's Talk Business</span>
// // // // // //               <div className="w-8 h-8 rounded-full bg-[#f2f2f2] text-black flex items-center justify-center group-hover:rotate-45 transition-transform duration-500">
// // // // // //                 <BsArrowUpRight />
// // // // // //               </div>
// // // // // //             </a>
// // // // // //           </motion.div>
// // // // // //         </div>

// // // // // //         {/* 📊 MAIN CONTENT GRID */}
// // // // // //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 border-t border-white/10 pt-20">
          
// // // // // //           {/* Brand Identity */}
// // // // // //           <div className="lg:col-span-4 space-y-8">
// // // // // //             <img src={logo} alt="Devators" className="h-14 w-auto brightness-0 invert" />
// // // // // //             <p className="text-gray-400 text-lg font-light leading-relaxed">
// // // // // //               We specialize in high-performance digital solutions that drive growth and set new standards in the tech industry.
// // // // // //             </p>
// // // // // //             <div className="flex gap-3">
// // // // // //               {[
// // // // // //                 { icon: <FaFacebookF />, link: "#" },
// // // // // //                 { icon: <BsTwitterX />, link: "#" },
// // // // // //                 { icon: <FaInstagram />, link: "#" },
// // // // // //                 { icon: <FaLinkedinIn />, link: "#" },
// // // // // //                 { icon: <FaWhatsapp />, link: "#" },
// // // // // //               ].map((social, i) => (
// // // // // //                 <a key={i} href={social.link} className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 hover:bg-[#f2f2f2] hover:text-black transition-all duration-500">
// // // // // //                   {social.icon}
// // // // // //                 </a>
// // // // // //               ))}
// // // // // //             </div>
// // // // // //           </div>

// // // // // //           {/* Expertises */}
// // // // // //           <div className="lg:col-span-2 lg:col-start-6">
// // // // // //             <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-8">Expertise</h4>
// // // // // //             <ul className="space-y-4 text-gray-500">
// // // // // //               {expertises.map(item => (
// // // // // //                 <li key={item} className="hover:text-white transition-colors cursor-pointer flex items-center gap-2 group text-sm">
// // // // // //                   <span className="w-1.5 h-1.5 rounded-full bg-[#f2f2f2] opacity-0 group-hover:opacity-100 transition-opacity"></span>
// // // // // //                   {item}
// // // // // //                 </li>
// // // // // //               ))}
// // // // // //             </ul>
// // // // // //           </div>

// // // // // //           {/* Quick Nav (Links from Navbar) */}
// // // // // //           <div className="lg:col-span-2">
// // // // // //             <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-8">Agency</h4>
// // // // // //             <ul className="space-y-4 text-gray-500">
// // // // // //               {navLinks.map(link => (
// // // // // //                 <li key={link.label}>
// // // // // //                   <a href={link.href} className="hover:text-white transition-colors text-sm">
// // // // // //                     {link.label}
// // // // // //                   </a>
// // // // // //                 </li>
// // // // // //               ))}
// // // // // //             </ul>
// // // // // //           </div>

// // // // // //           {/* Contact Details */}
// // // // // //           <div className="lg:col-span-3">
// // // // // //             <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-8">Say Hello</h4>
// // // // // //             <div className="space-y-6">
// // // // // //               <div className="group cursor-pointer">
// // // // // //                 <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">New Projects</p>
// // // // // //                 <p className="text-xl font-medium group-hover:text-[#f2f2f2] transition-colors">hello@devators.com</p>
// // // // // //               </div>
// // // // // //               <div className="group cursor-pointer">
// // // // // //                 <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Office Location</p>
// // // // // //                 <p className="text-base font-light leading-snug text-gray-400 group-hover:text-white transition-colors">
// // // // // //                   Bogura,<br />Bangladesh
// // // // // //                 </p>
// // // // // //               </div>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         </div>

// // // // // //         {/* 🔐 FOOTER BOTTOM */}
// // // // // //         <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
// // // // // //           <div className="flex items-center gap-8 text-[11px] font-medium uppercase tracking-[0.2em] text-gray-600">
// // // // // //             <p>© {currentYear} Devators Agency</p>
// // // // // //             <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
// // // // // //             <a href="#" className="hover:text-white transition-colors">Cookies</a>
// // // // // //           </div>

// // // // // //           <div className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-full border border-white/10">
// // // // // //             <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
// // // // // //             <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">
// // // // // //               Agency Status: <span className="text-white uppercase">Open for Projects</span>
// // // // // //             </p>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </div>

// // // // // //       {/* Background Watermark (Minimalist) */}
// // // // // //       <div className="absolute bottom-10 right-[-50px] rotate-90 hidden lg:block select-none pointer-events-none">
// // // // // //           <p className="text-[100px] font-bold text-white/[0.02] tracking-tighter uppercase">DEVATORS</p>
// // // // // //       </div>
// // // // // //     </footer>
// // // // // //   );
// // // // // // };

// // // // // // export default Footer;



// // // // // // ALhamdulliah good version




// // // // // // import React from "react";
// // // // // // import { motion } from "framer-motion";
// // // // // // import {
// // // // // //   FaFacebookF,
// // // // // //   FaInstagram,
// // // // // //   FaLinkedinIn,
// // // // // //   FaArrowUp,
// // // // // //   FaMapMarkerAlt,
// // // // // //   FaEnvelope,
// // // // // //   FaPhoneAlt
// // // // // // } from "react-icons/fa";
// // // // // // import { BsTwitterX } from "react-icons/bs";
// // // // // // import logo from "../assets/Devatorslogo.png"; // আপনার লোগো পাথ

// // // // // // const Footer = () => {
// // // // // //   const currentYear = new Date().getFullYear();

// // // // // //   const scrollToTop = () => {
// // // // // //     window.scrollTo({ top: 0, behavior: "smooth" });
// // // // // //   };

// // // // // //   return (
// // // // // //     <footer className="bg-black text-white pt-24 pb-12 overflow-hidden">
// // // // // //       <div className="container mx-auto px-6 lg:px-12">
        
// // // // // //         {/* 🔥 TOP SECTION: LOGO & BIG TEXT */}
// // // // // //         <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-20 gap-8">
// // // // // //           <motion.div 
// // // // // //             initial={{ opacity: 0, x: -20 }}
// // // // // //             whileInView={{ opacity: 1, x: 0 }}
// // // // // //             transition={{ duration: 0.6 }}
// // // // // //           >
// // // // // //             <img 
// // // // // //               src={logo} 
// // // // // //               alt="Devators" 
// // // // // //               className="h-14 w-auto object-contain brightness-0 invert" 
// // // // // //             />
// // // // // //           </motion.div>
          
// // // // // //           <motion.h2 
// // // // // //             initial={{ opacity: 0, y: 20 }}
// // // // // //             whileInView={{ opacity: 1, y: 0 }}
// // // // // //             className="text-3xl md:text-5xl font-light tracking-tighter leading-tight max-w-xl"
// // // // // //           >
// // // // // //             Let's build the <span className="italic text-gray-500">extraordinary</span> together.
// // // // // //           </motion.h2>
// // // // // //         </div>

// // // // // //         <hr className="border-white/10 mb-20" />

// // // // // //         {/* 🔥 MAIN GRID */}
// // // // // //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          
// // // // // //           {/* ABOUT */}
// // // // // //           <div className="space-y-6">
// // // // // //             <h4 className="text-xs uppercase tracking-[0.3em] text-gray-500 font-semibold">The Studio</h4>
// // // // // //             <p className="text-gray-400 text-sm leading-relaxed">
// // // // // //               Devators is a digital innovation studio specializing in high-end design and full-stack development. We transform ideas into iconic brands.
// // // // // //             </p>
// // // // // //             <div className="flex gap-5 pt-2">
// // // // // //               {[<FaFacebookF />, <BsTwitterX />, <FaInstagram />, <FaLinkedinIn />].map((icon, index) => (
// // // // // //                 <a 
// // // // // //                   key={index} 
// // // // // //                   href="#" 
// // // // // //                   className="text-gray-500 hover:text-white transition-all duration-300 transform hover:-translate-y-1"
// // // // // //                 >
// // // // // //                   {icon}
// // // // // //                 </a>
// // // // // //               ))}
// // // // // //             </div>
// // // // // //           </div>

// // // // // //           {/* QUICK LINKS */}
// // // // // //           <div className="space-y-6">
// // // // // //             <h4 className="text-xs uppercase tracking-[0.3em] text-gray-500 font-semibold">Explore</h4>
// // // // // //             <ul className="space-y-4">
// // // // // //               {["Home", "Works", "About", "Services", "Contact"].map((item) => (
// // // // // //                 <li key={item}>
// // // // // //                   <a href={`#${item.toLowerCase()}`} className="text-sm text-gray-400 hover:text-white transition-colors">
// // // // // //                     {item}
// // // // // //                   </a>
// // // // // //                 </li>
// // // // // //               ))}
// // // // // //             </ul>
// // // // // //           </div>

// // // // // //           {/* CONTACT */}
// // // // // //           <div className="space-y-6">
// // // // // //             <h4 className="text-xs uppercase tracking-[0.3em] text-gray-500 font-semibold">Get in touch</h4>
// // // // // //             <ul className="space-y-4">
// // // // // //               <li className="flex items-center gap-3 text-sm text-gray-400">
// // // // // //                 <FaEnvelope className="text-xs" /> hello@devators.com
// // // // // //               </li>
// // // // // //               <li className="flex items-center gap-3 text-sm text-gray-400">
// // // // // //                 <FaPhoneAlt className="text-xs" /> +880 1234 567890
// // // // // //               </li>
// // // // // //               <li className="flex items-start gap-3 text-sm text-gray-400">
// // // // // //                 <FaMapMarkerAlt className="text-xs mt-1" /> Bogura, Bangladesh
// // // // // //               </li>
// // // // // //             </ul>
// // // // // //           </div>

// // // // // //           {/* NEWSLETTER */}
// // // // // //           <div className="space-y-6">
// // // // // //             <h4 className="text-xs uppercase tracking-[0.3em] text-gray-500 font-semibold">Stay Connected</h4>
// // // // // //             <div className="relative group">
// // // // // //               <input 
// // // // // //                 type="email" 
// // // // // //                 placeholder="Your email" 
// // // // // //                 className="w-full bg-transparent border-b border-white/20 py-3 text-sm focus:outline-none focus:border-white transition-colors pr-10"
// // // // // //               />
// // // // // //               <button className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white">
// // // // // //                 <FaArrowUp className="rotate-45" />
// // // // // //               </button>
// // // // // //             </div>
// // // // // //             <p className="text-[10px] text-gray-600 uppercase tracking-widest leading-loose">
// // // // // //               By subscribing you agree to our <br /> privacy policy.
// // // // // //             </p>
// // // // // //           </div>

// // // // // //         </div>

// // // // // //         {/* 🔥 BOTTOM SECTION */}
// // // // // //         <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
// // // // // //           <p className="text-[10px] uppercase tracking-[0.2em] text-gray-600">
// // // // // //             © {currentYear} Devators Studio. Crafted with <span className="text-white">Precision.</span>
// // // // // //           </p>
          
// // // // // //           {/* Scroll to Top Circle */}
// // // // // //           <button 
// // // // // //             onClick={scrollToTop}
// // // // // //             className="group flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-gray-500 hover:text-white transition-all"
// // // // // //           >
// // // // // //             Back to top 
// // // // // //             <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
// // // // // //               <FaArrowUp />
// // // // // //             </div>
// // // // // //           </button>

// // // // // //           <div className="flex gap-8 text-[10px] uppercase tracking-[0.2em] text-gray-600">
// // // // // //             <a href="#" className="hover:text-white transition-colors">Privacy</a>
// // // // // //             <a href="#" className="hover:text-white transition-colors">Terms</a>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     </footer>
// // // // // //   );
// // // // // // };

// // // // // // export default Footer;


// // // // // // Black  Bg

// // // // // // import React from "react";
// // // // // // import { motion } from "framer-motion";
// // // // // // import {
// // // // // //   FaFacebookF,
// // // // // //   FaInstagram,
// // // // // //   FaLinkedinIn,
// // // // // //   FaWhatsapp,
// // // // // // } from "react-icons/fa";
// // // // // // import { BsTwitterX, BsArrowUpRight, BsStars } from "react-icons/bs";
// // // // // // import logo from "../assets/Devatorslogo.png"

// // // // // // const Footer = () => {
// // // // // //   const currentYear = new Date().getFullYear();

// // // // // //   // আপনার নেভবার লিঙ্কগুলো এখানে ইন্টিগ্রেট করা হয়েছে
// // // // // //   const navLinks = [
// // // // // //     { href: "#", label: "Home" },
// // // // // //     { href: "#about", label: "About" },
// // // // // //     { href: "#works", label: "Works" },
// // // // // //     { href: "#services", label: "Services" },
// // // // // //     { href: "#contact", label: "Contact" },
// // // // // //   ];

// // // // // //   const expertises = [
// // // // // //     "Web Architecture",
// // // // // //     "UI/UX Strategy",
// // // // // //     "Brand Identity",
// // // // // //     "E-commerce",
// // // // // //     "AI Integration",
// // // // // //   ];

// // // // // //   return (
// // // // // //     <footer className="relative bg-black text-white pt-32 pb-10 overflow-hidden">
// // // // // //       {/* 🌌 Minimalist Background Aura (Gray/White theme) */}
// // // // // //       <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-white/5 rounded-full blur-[140px] animate-pulse" />

// // // // // //       <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
// // // // // //         {/* ⭐ TOP SECTION */}
// // // // // //         <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-12">
// // // // // //           <div className="max-w-3xl space-y-6">
// // // // // //             <motion.div 
// // // // // //               initial={{ opacity: 0, y: 20 }}
// // // // // //               whileInView={{ opacity: 1, y: 0 }}
// // // // // //               className="flex items-center gap-2 text-[#f2f2f2] font-medium tracking-[0.3em] text-xs uppercase"
// // // // // //             >
// // // // // //               <BsStars className="animate-spin-slow" /> Trusted By Industry Leaders
// // // // // //             </motion.div>
// // // // // //             <h2 className="text-5xl md:text-7xl font-semibold tracking-tighter leading-none">
// // // // // //               Ready to <span className="text-gray-500 italic">elevate</span> your <br /> digital presence?
// // // // // //             </h2>
// // // // // //           </div>
          
// // // // // //           <motion.div 
// // // // // //              whileHover={{ scale: 1.05 }}
// // // // // //              className="relative group p-[1px] rounded-full bg-white/20 hover:bg-white transition-all duration-500"
// // // // // //           >
// // // // // //             <a href="#contact" className="flex items-center gap-4 bg-black px-10 py-5 rounded-full transition-all">
// // // // // //               <span className="font-bold uppercase tracking-widest text-sm text-[#f2f2f2]">Let's Talk Business</span>
// // // // // //               <div className="w-8 h-8 rounded-full bg-[#f2f2f2] text-black flex items-center justify-center group-hover:rotate-45 transition-transform duration-500">
// // // // // //                 <BsArrowUpRight />
// // // // // //               </div>
// // // // // //             </a>
// // // // // //           </motion.div>
// // // // // //         </div>

// // // // // //         {/* 📊 MAIN CONTENT GRID */}
// // // // // //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 border-t border-white/10 pt-20">
          
// // // // // //           {/* Brand Identity */}
// // // // // //           <div className="lg:col-span-4 space-y-8">
// // // // // //             <img src={logo} alt="Devators" className="h-14 w-auto brightness-0 invert" />
// // // // // //             <p className="text-gray-400 text-lg font-light leading-relaxed">
// // // // // //               We specialize in high-performance digital solutions that drive growth and set new standards in the tech industry.
// // // // // //             </p>
// // // // // //             <div className="flex gap-3">
// // // // // //               {[
// // // // // //                 { icon: <FaFacebookF />, link: "#" },
// // // // // //                 { icon: <BsTwitterX />, link: "#" },
// // // // // //                 { icon: <FaInstagram />, link: "#" },
// // // // // //                 { icon: <FaLinkedinIn />, link: "#" },
// // // // // //                 { icon: <FaWhatsapp />, link: "#" },
// // // // // //               ].map((social, i) => (
// // // // // //                 <a key={i} href={social.link} className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 hover:bg-[#f2f2f2] hover:text-black transition-all duration-500">
// // // // // //                   {social.icon}
// // // // // //                 </a>
// // // // // //               ))}
// // // // // //             </div>
// // // // // //           </div>

// // // // // //           {/* Expertises */}
// // // // // //           <div className="lg:col-span-2 lg:col-start-6">
// // // // // //             <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-8">Expertise</h4>
// // // // // //             <ul className="space-y-4 text-gray-500">
// // // // // //               {expertises.map(item => (
// // // // // //                 <li key={item} className="hover:text-white transition-colors cursor-pointer flex items-center gap-2 group text-sm">
// // // // // //                   <span className="w-1.5 h-1.5 rounded-full bg-[#f2f2f2] opacity-0 group-hover:opacity-100 transition-opacity"></span>
// // // // // //                   {item}
// // // // // //                 </li>
// // // // // //               ))}
// // // // // //             </ul>
// // // // // //           </div>

// // // // // //           {/* Quick Nav (Links from Navbar) */}
// // // // // //           <div className="lg:col-span-2">
// // // // // //             <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-8">Agency</h4>
// // // // // //             <ul className="space-y-4 text-gray-500">
// // // // // //               {navLinks.map(link => (
// // // // // //                 <li key={link.label}>
// // // // // //                   <a href={link.href} className="hover:text-white transition-colors text-sm">
// // // // // //                     {link.label}
// // // // // //                   </a>
// // // // // //                 </li>
// // // // // //               ))}
// // // // // //             </ul>
// // // // // //           </div>

// // // // // //           {/* Contact Details */}
// // // // // //           <div className="lg:col-span-3">
// // // // // //             <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-8">Say Hello</h4>
// // // // // //             <div className="space-y-6">
// // // // // //               <div className="group cursor-pointer">
// // // // // //                 <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">New Projects</p>
// // // // // //                 <p className="text-xl font-medium group-hover:text-[#f2f2f2] transition-colors">hellodevators@gmail.com</p>
// // // // // //               </div>
// // // // // //               <div className="group cursor-pointer">
// // // // // //                 <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Office Location</p>
// // // // // //                 <p className="text-base font-light leading-snug text-gray-400 group-hover:text-white transition-colors">
// // // // // //                   Bogura,Bangladesh
// // // // // //                 </p>
// // // // // //               </div>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         </div>

// // // // // //         {/* 🔐 FOOTER BOTTOM */}
// // // // // //         <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
// // // // // //           <div className="flex items-center gap-8 text-[11px] font-medium uppercase tracking-[0.2em] text-gray-600">
// // // // // //             <p>© {currentYear} Devators Agency</p>
// // // // // //             <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
// // // // // //             <a href="#" className="hover:text-white transition-colors">Cookies</a>
// // // // // //           </div>

// // // // // //           <div className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-full border border-white/10">
// // // // // //             <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
// // // // // //             <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">
// // // // // //               Agency Status: <span className="text-white uppercase">Open for Projects</span>
// // // // // //             </p>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </div>

// // // // // //       {/* Background Watermark (Minimalist) */}
// // // // // //       <div className="absolute bottom-10 right-[-50px] rotate-90 hidden lg:block select-none pointer-events-none">
// // // // // //           <p className="text-[100px] font-bold text-white/[0.02] tracking-tighter uppercase">DEVATORS</p>
// // // // // //       </div>
// // // // // //     </footer>
// // // // // //   );
// // // // // // };

// // // // // // export default Footer;



// // // // // import React from "react";

// // // // // import { Link } from "react-router-dom";

// // // // // import logo from "../assets/Devatorslogo.png";



// // // // // const Footer = () => {

// // // // //   const currentYear = new Date().getFullYear();



// // // // //   const links = [

// // // // //     { name: "Home", path: "#" },

// // // // //     { name: "About", path: "#about" },

// // // // //     { name: "Works", path: "#works" },

// // // // //     { name: "Services", path: "#services" },

// // // // //     { name: "Contact", path: "#contact" },

// // // // //   ];



// // // // //   return (

// // // // //     <footer className="bg-[#f2f2f2] text-black border-t border-black/10">



// // // // //       {/* MAIN FOOTER */}

// // // // //       <div className="container mx-auto px-6 py-14">

// // // // //         <div className="grid grid-cols-1 md:grid-cols-3 gap-12">



// // // // //           {/* BRAND */}

// // // // //           <div className="space-y-5">

// // // // //             <img

// // // // //               src={logo}

// // // // //               alt="Devators"

// // // // //               className="h-10 w-auto object-contain"

// // // // //             />



// // // // //             <p className="text-sm text-gray-600 leading-relaxed max-w-sm">

// // // // //               Devators is a modern startup agency building premium websites,

// // // // //               brands, and digital experiences that convert and inspire.

// // // // //             </p>

// // // // //           </div>



// // // // //           {/* LINKS */}

// // // // //           <div className="space-y-5">

// // // // //             <h3 className="text-lg font-semibold">Quick Links</h3>



// // // // //             <ul className="space-y-3">

// // // // //               {links.map((item, index) => (

// // // // //                 <li key={index}>

// // // // //                   <a

// // // // //                     href={item.path}

// // // // //                     className="text-gray-600 hover:text-black transition text-sm"

// // // // //                   >

// // // // //                     {item.name}

// // // // //                   </a>

// // // // //                 </li>

// // // // //               ))}

// // // // //             </ul>

// // // // //           </div>



// // // // //           {/* CONTACT */}

// // // // //           <div className="space-y-5">

// // // // //             <h3 className="text-lg font-semibold">Get in Touch</h3>



// // // // //             <div className="space-y-3 text-sm text-gray-600">

// // // // //               <p>📍 Bogura, Bangladesh</p>

// // // // //               <p>📧 contact@devators.com</p>

// // // // //               <p>📞 +880 1234 567 890</p>

// // // // //             </div>



// // // // //             {/* CTA */}

// // // // //             <a

// // // // //               href="#contact"

// // // // //               className="inline-block mt-4 bg-black text-white px-6 py-3 text-sm rounded-full hover:scale-105 transition"

// // // // //             >

// // // // //               Let's Talk

// // // // //             </a>

// // // // //           </div>

// // // // //         </div>

// // // // //       </div>



// // // // //       {/* BOTTOM BAR */}

// // // // //       <div className="border-t border-black/10">

// // // // //         <div className="container mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center gap-3">



// // // // //           <p className="text-sm text-gray-500">

// // // // //             © {currentYear} <span className="text-black font-medium">Devators</span>. All rights reserved.

// // // // //           </p>



// // // // //           <div className="flex gap-6 text-sm text-gray-500">

// // // // //             <a href="#privacy" className="hover:text-black transition">

// // // // //               Privacy

// // // // //             </a>

// // // // //             <a href="#terms" className="hover:text-black transition">

// // // // //               Terms

// // // // //             </a>

// // // // //           </div>



// // // // //         </div>

// // // // //       </div>

// // // // //     </footer>

// // // // //   );

// // // // // };



// // // // // export default Footer;

// // // // import React from "react";
// // // // import { motion } from "framer-motion";
// // // // import { 
// // // //   FaFacebookF, 
// // // //   FaInstagram, 
// // // //   FaLinkedinIn, 
// // // //   FaWhatsapp 
// // // // } from "react-icons/fa";
// // // // import { BsTwitterX, BsArrowUpRight, BsStars } from "react-icons/bs";
// // // // import { HiOutlineMail, HiOutlineLocationMarker, HiOutlinePhone } from "react-icons/hi";

// // // // // লোগো ইমপোর্ট
// // // // import logo from "../assets/Devatorslogo.png";

// // // // const Footer = () => {
// // // //   const currentYear = new Date().getFullYear();

// // // //   const links = [
// // // //     { name: "Home", path: "#" },
// // // //     { name: "About", path: "#about" },
// // // //     { name: "Works", path: "#works" },
// // // //     { name: "Services", path: "#services" },
// // // //     { name: "Contact", path: "#contact" },
// // // //   ];

// // // //   const socialLinks = [
// // // //     { icon: <FaFacebookF />, link: "#" },
// // // //     { icon: <BsTwitterX />, link: "#" },
// // // //     { icon: <FaInstagram />, link: "#" },
// // // //     { icon: <FaLinkedinIn />, link: "#" },
// // // //     { icon: <FaWhatsapp />, link: "#" },
// // // //   ];

// // // //   return (
// // // //     <footer className="relative bg-[#f2f2f2] text-black pt-24 pb-10 overflow-hidden font-sans border-t border-black/5">
      
// // // //       {/* 🧊 Subtle Geometric Decor (Premium Touch) */}
// // // //       <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-black/[0.02] rounded-full blur-[100px] -mr-32 -mt-32" />
// // // //       <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-black/[0.02] rounded-full blur-[80px] -ml-20 -mb-20" />

// // // //       <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
// // // //         {/* ⭐ TOP SECTION: Catchy Agency Slogan */}
// // // //         <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-20 gap-10">
// // // //           <div className="max-w-2xl space-y-6">
// // // //             <motion.div 
// // // //               initial={{ opacity: 0, y: 10 }}
// // // //               whileInView={{ opacity: 1, y: 0 }}
// // // //               className="flex items-center gap-2 text-black/40 font-bold tracking-[0.3em] text-[10px] uppercase"
// // // //             >
// // // //               <BsStars className="text-black" /> Innovation Meets Aesthetics
// // // //             </motion.div>
// // // //             <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9] text-black">
// // // //               Let's create the <br /> 
// // // //               <span className="text-gray-400 italic font-light">future</span> together.
// // // //             </h2>
// // // //           </div>
          
// // // //           <motion.div whileHover={{ scale: 1.05 }} className="group">
// // // //             <a href="#contact" className="flex items-center gap-6 bg-black text-white px-10 py-6 rounded-full shadow-xl transition-all duration-500">
// // // //               <span className="text-sm font-bold uppercase tracking-widest">Work with us</span>
// // // //               <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center group-hover:rotate-45 transition-transform duration-500 shadow-lg">
// // // //                 <BsArrowUpRight size={18} />
// // // //               </div>
// // // //             </a>
// // // //           </motion.div>
// // // //         </div>

// // // //         {/* 📊 MAIN GRID */}
// // // //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 border-t border-black/10 pt-16">
          
// // // //           {/* Brand & Identity */}
// // // //           <div className="lg:col-span-5 space-y-8">
// // // //             <img
// // // //               src={logo}
// // // //               alt="Devators"
// // // //               className="h-10 md:h-12 w-auto object-contain cursor-pointer transition-opacity hover:opacity-80"
// // // //             />
// // // //             <p className="text-gray-500 text-lg font-light leading-relaxed max-w-sm">
// // // //               We are a creative collective of designers and developers building premium digital experiences that define the next generation of the web.
// // // //             </p>
            
// // // //             {/* Social Icons - Clean Minimalist Style */}
// // // //             <div className="flex gap-3">
// // // //               {socialLinks.map((social, i) => (
// // // //                 <motion.a 
// // // //                   key={i} 
// // // //                   href={social.link} 
// // // //                   whileHover={{ y: -4, backgroundColor: "#000", color: "#fff" }}
// // // //                   className="w-11 h-11 flex items-center justify-center rounded-full border border-black/10 text-black/60 transition-all duration-300 bg-transparent"
// // // //                 >
// // // //                   {social.icon}
// // // //                 </motion.a>
// // // //               ))}
// // // //             </div>
// // // //           </div>

// // // //           {/* Quick Links */}
// // // //           <div className="lg:col-span-3 lg:col-start-7">
// // // //             <h4 className="text-black font-black text-xs uppercase tracking-[0.4em] mb-10">Navigation</h4>
// // // //             <ul className="space-y-4">
// // // //               {links.map((link, index) => (
// // // //                 <li key={index}>
// // // //                   <a 
// // // //                     href={link.path} 
// // // //                     className="text-gray-400 hover:text-black transition-all duration-300 text-base font-semibold flex items-center gap-0 hover:gap-3 group"
// // // //                   >
// // // //                     <span className="w-0 h-[1.5px] bg-black group-hover:w-5 transition-all duration-300"></span>
// // // //                     {link.name}
// // // //                   </a>
// // // //                 </li>
// // // //               ))}
// // // //             </ul>
// // // //           </div>

// // // //           {/* Contact Information */}
// // // //           <div className="lg:col-span-3">
// // // //             <h4 className="text-black font-black text-xs uppercase tracking-[0.4em] mb-10">Contact</h4>
// // // //             <div className="space-y-6">
// // // //               <div className="group cursor-pointer">
// // // //                 <div className="flex items-center gap-3 text-gray-400 group-hover:text-black transition-colors mb-2">
// // // //                   <HiOutlineMail size={20} />
// // // //                   <span className="text-[10px] font-bold uppercase tracking-widest">Email</span>
// // // //                 </div>
// // // //                 <p className="text-xl font-medium tracking-tight">hello@devators.com</p>
// // // //               </div>
              
// // // //               <div className="group cursor-pointer">
// // // //                 <div className="flex items-center gap-3 text-gray-400 group-hover:text-black transition-colors mb-2">
// // // //                   <HiOutlineLocationMarker size={20} />
// // // //                   <span className="text-[10px] font-bold uppercase tracking-widest">Studio</span>
// // // //                 </div>
// // // //                 <p className="text-lg font-light text-gray-500 group-hover:text-black transition-colors">
// // // //                   Bogura, Bangladesh
// // // //                 </p>
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         </div>

// // // //         {/* 🔐 BOTTOM BAR */}
// // // //         <div className="mt-24 pt-8 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-6">
// // // //           <div className="flex items-center gap-8 text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400">
// // // //             <p>© {currentYear} Devators Agency</p>
// // // //             <a href="#privacy" className="hover:text-black transition-colors">Privacy</a>
// // // //             <a href="#terms" className="hover:text-black transition-colors">Terms</a>
// // // //           </div>

// // // //           {/* Agency Availability Indicator */}
// // // //           <div className="flex items-center gap-3 bg-white px-5 py-2 rounded-full shadow-sm border border-black/5">
// // // //             <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
// // // //             <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">
// // // //               Status: <span className="text-black">Open for collaborations</span>
// // // //             </p>
// // // //           </div>
// // // //         </div>
// // // //       </div>

// // // //       {/* Decorative Large Text (The 'Unique' Factor) */}
// // // //       <div className="absolute bottom-[-20px] left-[-30px] hidden lg:block select-none pointer-events-none opacity-[0.03]">
// // // //           <p className="text-[180px] font-black tracking-tighter uppercase leading-none">Creative</p>
// // // //       </div>
// // // //     </footer>
// // // //   );
// // // // };

// // // // export default Footer;


// // // import React from "react";
// // // import { motion } from "framer-motion";
// // // import { 
// // //   FaFacebookF, 
// // //   FaInstagram, 
// // //   FaLinkedinIn, 
// // //   FaWhatsapp 
// // // } from "react-icons/fa";
// // // import { BsTwitterX, BsArrowRight } from "react-icons/bs";
// // // import { RiMailSendLine, RiMapPinLine, RiTerminalBoxLine } from "react-icons/ri";

// // // // লোগো ইমপোর্ট
// // // import logo from "../assets/Devatorslogo.png";

// // // const Footer = () => {
// // //   const currentYear = new Date().getFullYear();

// // //   const menuLinks = [
// // //     { name: "Home", path: "#" },
// // //     { name: "Our Vision", path: "#about" },
// // //     { name: "Case Studies", path: "#works" },
// // //     { name: "Core Services", path: "#services" },
// // //     { name: "Start a Chat", path: "#contact" },
// // //   ];

// // //   return (
// // //     <footer className="relative bg-[#f2f2f2] text-black pt-28 pb-12 overflow-hidden border-t border-black/5">
      
// // //       {/* 🔮 Aesthetic Gradient Blob */}
// // //       <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-black/[0.03] rounded-full blur-[120px] pointer-events-none" />

// // //       <div className="container mx-auto px-6 lg:px-16 relative z-10">
        
// // //         {/* 🚀 TOP: BIG BOLD STATEMENT */}
// // //         <div className="grid lg:grid-cols-2 gap-12 items-end mb-32">
// // //           <motion.div 
// // //             initial={{ opacity: 0, y: 30 }}
// // //             whileInView={{ opacity: 1, y: 0 }}
// // //             transition={{ duration: 0.8 }}
// // //           >
// // //             <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.85] uppercase">
// // //               Beyond <br />
// // //               <span className="text-gray-400/60 italic font-medium lowercase">Digital</span>
// // //             </h2>
// // //           </motion.div>
          
// // //           <div className="flex flex-col items-start lg:items-end space-y-6">
// // //             <p className="text-xl text-gray-500 font-light max-w-sm lg:text-right">
// // //               We don't just build websites; we craft digital legacies for brands that dare to lead.
// // //             </p>
// // //             <motion.a 
// // //               href="#contact"
// // //               whileHover={{ x: 10 }}
// // //               className="flex items-center gap-4 text-sm font-bold uppercase tracking-[0.2em] border-b-2 border-black pb-2 group"
// // //             >
// // //               Request an Invite <BsArrowRight className="group-hover:translate-x-2 transition-transform" />
// // //             </motion.a>
// // //           </div>
// // //         </div>

// // //         {/* 📊 MAIN GRID */}
// // //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 border-t border-black/10 pt-20">
          
// // //           {/* Brand & Socials */}
// // //           <div className="lg:col-span-5 flex flex-col justify-between">
// // //             <div className="space-y-8">
// // //               <motion.img
// // //                 src={logo}
// // //                 alt="Devators"
// // //                 whileHover={{ scale: 1.02 }}
// // //                 className="h-10 md:h-12 w-auto object-contain"
// // //               />
// // //               <div className="flex gap-4">
// // //                 {[
// // //                   { icon: <FaFacebookF />, link: "#" },
// // //                   { icon: <BsTwitterX />, link: "#" },
// // //                   { icon: <FaInstagram />, link: "#" },
// // //                   { icon: <FaLinkedinIn />, link: "#" },
// // //                   { icon: <FaWhatsapp />, link: "#" },
// // //                 ].map((social, i) => (
// // //                   <motion.a 
// // //                     key={i} 
// // //                     href={social.link} 
// // //                     whileHover={{ scale: 1.1, backgroundColor: "#000", color: "#fff" }}
// // //                     className="w-12 h-12 flex items-center justify-center rounded-xl bg-black/[0.03] border border-black/5 text-black transition-all duration-500 shadow-sm"
// // //                   >
// // //                     {social.icon}
// // //                   </motion.a>
// // //                 ))}
// // //               </div>
// // //             </div>
// // //           </div>

// // //           {/* Minimalist Navigation */}
// // //           <div className="lg:col-span-3 lg:col-start-7">
// // //             <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-400 mb-10 italic">Archive</h4>
// // //             <ul className="space-y-5">
// // //               {menuLinks.map((link, index) => (
// // //                 <li key={index} className="overflow-hidden">
// // //                   <motion.a 
// // //                     href={link.path} 
// // //                     whileHover={{ x: 10 }}
// // //                     className="text-2xl font-bold tracking-tight hover:text-gray-400 transition-colors inline-block"
// // //                   >
// // //                     {link.name}
// // //                   </motion.a>
// // //                 </li>
// // //               ))}
// // //             </ul>
// // //           </div>

// // //           {/* Location & Contact */}
// // //           <div className="lg:col-span-3">
// // //             <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-400 mb-10 italic">Inquiries</h4>
// // //             <div className="space-y-10">
// // //               <div className="group cursor-pointer">
// // //                 <p className="flex items-center gap-2 text-[10px] font-bold uppercase text-gray-400 mb-2">
// // //                   <RiMailSendLine /> Write to us
// // //                 </p>
// // //                 <p className="text-xl font-medium border-b border-transparent group-hover:border-black inline-block transition-all">
// // //                   hellodevators@gmail.com
// // //                 </p>
// // //               </div>
              
// // //               <div className="group cursor-pointer">
// // //                 <p className="flex items-center gap-2 text-[10px] font-bold uppercase text-gray-400 mb-2">
// // //                   <RiMapPinLine /> Based in
// // //                 </p>
// // //                 <p className="text-xl font-medium">Bogura, Bangladesh</p>
// // //                 <p className="text-sm text-gray-400 font-light mt-1 uppercase tracking-widest italic">Available Worldwide</p>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>

// // //         {/* 🔐 THE BOTTOM LINE */}
// // //         <div className="mt-32 pt-10 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-8">
// // //           <div className="flex flex-wrap justify-center gap-10 text-[10px] font-black uppercase tracking-[0.3em] text-gray-300">
// // //             <p className="text-black/80">© {currentYear} Devators</p>
// // //             <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
// // //             <a href="#" className="hover:text-black transition-colors">Terms of Service</a>
// // //             <a href="#" className="hover:text-black transition-colors">Cookies</a>
// // //           </div>

// // //           {/* Satisfying Live Indicator */}
// // //           <div className="flex items-center gap-4 bg-black/[0.03] px-6 py-3 rounded-full border border-black/5 shadow-inner">
// // //             <div className="relative flex h-2 w-2">
// // //               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
// // //               <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
// // //             </div>
// // //             <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold">
// // //               Studio Status: <span className="text-black">Open for new work</span>
// // //             </p>
// // //           </div>
// // //         </div>
// // //       </div>

// // //       {/* Luxury Background Watermark (Massive scale) */}
// // //       <div className="absolute -bottom-10 right-[-20px] select-none pointer-events-none opacity-[0.04]">
// // //           <h1 className="text-[250px] font-black tracking-tighter uppercase leading-none">DEVATORS</h1>
// // //       </div>
// // //     </footer>
// // //   );
// // // };

// // // export default Footer;



// // import React from "react";
// // import { motion } from "framer-motion";
// // import { 
// //   FaFacebookF, 
// //   FaInstagram, 
// //   FaLinkedinIn, 
// //   FaWhatsapp 
// // } from "react-icons/fa";
// // import { BsTwitterX, BsArrowUpRight, BsStars } from "react-icons/bs";
// // import { HiOutlineMail, HiOutlineLocationMarker, HiOutlinePhone } from "react-icons/hi";

// // // লোগো ইমপোর্ট
// // import logo from "../assets/Devatorslogo.png";

// // const Footer = () => {
// //   const currentYear = new Date().getFullYear();

// //   const links = [
// //     { name: "Home", path: "#" },
// //     { name: "About", path: "#about" },
// //     { name: "Works", path: "#works" },
// //     { name: "Services", path: "#services" },
// //     { name: "Contact", path: "#contact" },
// //   ];

// //   const socialLinks = [
// //     { icon: <FaFacebookF />, link: "#" },
// //     { icon: <BsTwitterX />, link: "#" },
// //     { icon: <FaInstagram />, link: "#" },
// //     { icon: <FaLinkedinIn />, link: "#" },
// //     { icon: <FaWhatsapp />, link: "#" },
// //   ];

// //   return (
// //     <footer className="relative bg-[#f2f2f2] text-black pt-24 pb-10 overflow-hidden font-sans border-t border-black/5">
      
// //       {/* 🧊 Subtle Geometric Decor (Premium Touch) */}
// //       <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-black/[0.02] rounded-full blur-[100px] -mr-32 -mt-32" />
// //       <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-black/[0.02] rounded-full blur-[80px] -ml-20 -mb-20" />

// //       <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
// //         {/* ⭐ TOP SECTION: Catchy Agency Slogan */}
// //         <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-20 gap-10">
// //           <div className="max-w-2xl space-y-6">
// //             <motion.div 
// //               initial={{ opacity: 0, y: 10 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               className="flex items-center gap-2 text-black/40 font-bold tracking-[0.3em] text-[10px] uppercase"
// //             >
// //               <BsStars className="text-black" /> Innovation Meets Aesthetics
// //             </motion.div>
// //             <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9] text-black">
// //               Let's create the <br /> 
// //               <span className="text-gray-400 italic font-light">future</span> together.
// //             </h2>
// //           </div>
          
// //           <motion.div whileHover={{ scale: 1.05 }} className="group">
// //             <a href="#contact" className="flex items-center gap-6 bg-black text-white px-10 py-6 rounded-full shadow-xl transition-all duration-500">
// //               <span className="text-sm font-bold uppercase tracking-widest">Work with us</span>
// //               <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center group-hover:rotate-45 transition-transform duration-500 shadow-lg">
// //                 <BsArrowUpRight size={18} />
// //               </div>
// //             </a>
// //           </motion.div>
// //         </div>

// //         {/* 📊 MAIN GRID */}
// //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 border-t border-black/10 pt-16">
          
// //           {/* Brand & Identity */}
// //           <div className="lg:col-span-5 space-y-8">
// //             <img
// //               src={logo}
// //               alt="Devators"
// //               className="h-10 md:h-12 w-auto object-contain cursor-pointer transition-opacity hover:opacity-80"
// //             />
// //             <p className="text-gray-500 text-lg font-light leading-relaxed max-w-sm">
// //               We are a creative collective of designers and developers building premium digital experiences that define the next generation of the web.
// //             </p>
            
// //             {/* Social Icons - Clean Minimalist Style */}
// //             <div className="flex gap-3">
// //               {socialLinks.map((social, i) => (
// //                 <motion.a 
// //                   key={i} 
// //                   href={social.link} 
// //                   whileHover={{ y: -4, backgroundColor: "#000", color: "#fff" }}
// //                   className="w-11 h-11 flex items-center justify-center rounded-full border border-black/10 text-black/60 transition-all duration-300 bg-transparent"
// //                 >
// //                   {social.icon}
// //                 </motion.a>
// //               ))}
// //             </div>
// //           </div>

// //           {/* Quick Links */}
// //           <div className="lg:col-span-3 lg:col-start-7">
// //             <h4 className="text-black font-black text-xs uppercase tracking-[0.4em] mb-10">Navigation</h4>
// //             <ul className="space-y-4">
// //               {links.map((link, index) => (
// //                 <li key={index}>
// //                   <a 
// //                     href={link.path} 
// //                     className="text-gray-400 hover:text-black transition-all duration-300 text-base font-semibold flex items-center gap-0 hover:gap-3 group"
// //                   >
// //                     <span className="w-0 h-[1.5px] bg-black group-hover:w-5 transition-all duration-300"></span>
// //                     {link.name}
// //                   </a>
// //                 </li>
// //               ))}
// //             </ul>
// //           </div>

// //           {/* Contact Information */}
// //           <div className="lg:col-span-3">
// //             <h4 className="text-black font-black text-xs uppercase tracking-[0.4em] mb-10">Contact</h4>
// //             <div className="space-y-6">
// //               <div className="group cursor-pointer">
// //                 <div className="flex items-center gap-3 text-gray-400 group-hover:text-black transition-colors mb-2">
// //                   <HiOutlineMail size={20} />
// //                   <span className="text-[10px] font-bold uppercase tracking-widest">Email</span>
// //                 </div>
// //                 <p className="text-xl font-medium tracking-tight">hello@devators.com</p>
// //               </div>
              
// //               <div className="group cursor-pointer">
// //                 <div className="flex items-center gap-3 text-gray-400 group-hover:text-black transition-colors mb-2">
// //                   <HiOutlineLocationMarker size={20} />
// //                   <span className="text-[10px] font-bold uppercase tracking-widest">Studio</span>
// //                 </div>
// //                 <p className="text-lg font-light text-gray-500 group-hover:text-black transition-colors">
// //                   Bogura, Bangladesh
// //                 </p>
// //               </div>
// //             </div>
// //           </div>
// //         </div>

// //         {/* 🔐 BOTTOM BAR */}
// //         <div className="mt-24 pt-8 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-6">
// //           <div className="flex items-center gap-8 text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400">
// //             <p>© {currentYear} Devators Agency</p>
// //             <a href="#privacy" className="hover:text-black transition-colors">Privacy</a>
// //             <a href="#terms" className="hover:text-black transition-colors">Terms</a>
// //           </div>

// //           {/* Agency Availability Indicator */}
// //           <div className="flex items-center gap-3 bg-white px-5 py-2 rounded-full shadow-sm border border-black/5">
// //             <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
// //             <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">
// //               Status: <span className="text-black">Open for collaborations</span>
// //             </p>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Decorative Large Text (The 'Unique' Factor) */}
// //       <div className="absolute bottom-[-20px] left-[-30px] hidden lg:block select-none pointer-events-none opacity-[0.03]">
// //           <p className="text-[180px] font-black tracking-tighter uppercase leading-none">Creative</p>
// //       </div>
// //     </footer>
// //   );
// // };

// // export default Footer;


// import React from "react";
// import { motion } from "framer-motion";
// import { 
//   FaFacebookF, 
//   FaInstagram, 
//   FaLinkedinIn, 
//   FaWhatsapp,
//   FaArrowRight 
// } from "react-icons/fa";
// import { BsTwitterX } from "react-icons/bs";
// import { HiOutlineMail } from "react-icons/hi";
// import { FiArrowUpRight } from "react-icons/fi";

// // লোগো ইমপোর্ট
// import logo from "../assets/Devatorslogo.png";

// const Footer = () => {
//   const currentYear = new Date().getFullYear();

//   const footerLinks = [
//     { name: "Our Vision", path: "#" },
//     { name: "Selected Works", path: "#works" },
//     { name: "Agency Services", path: "#services" },
//     { name: "Contact Studio", path: "#contact" },
//   ];

//   return (
//     <footer className="relative bg-[#f2f2f2] text-black pt-32 pb-10 overflow-hidden font-sans border-t border-black/5">
      
//       {/* 🌪️ Interactive Animated Background Decor */}
//       <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-40">
//         <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-black/[0.03] rounded-full blur-[120px]" />
//         <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-black/[0.03] rounded-full blur-[100px]" />
//       </div>

//       <div className="container mx-auto px-6 lg:px-16 relative z-10">
        
//         {/* 🏆 HERO CTA SECTION */}
//         <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-32 gap-12">
//           <div className="max-w-4xl">
//             <motion.h2 
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, ease: "easeOut" }}
//               className="text-6xl md:text-9xl font-bold tracking-tighter leading-[0.8] uppercase"
//             >
//               Let’s Make <br />
//               <span className="text-gray-400 italic font-medium lowercase">Magic</span> Happen
//             </motion.h2>
//           </div>
          
//           <motion.div 
//             whileHover={{ scale: 1.05 }}
//             className="relative p-[2px] rounded-full bg-gradient-to-tr from-transparent via-black/10 to-transparent shadow-2xl"
//           >
//             <a href="#contact" className="flex flex-col items-center justify-center w-40 h-40 md:w-56 md:h-56 bg-black rounded-full text-white transition-transform duration-500 hover:rotate-12 group">
//               <FiArrowUpRight size={40} className="mb-2 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500" />
//               <span className="text-[10px] font-black uppercase tracking-[0.3em]">Work with us</span>
//             </a>
//           </motion.div>
//         </div>

//         {/* 📊 LUXURY CONTENT GRID */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-20 border-t border-black/10 pt-20">
          
//           {/* Column 1: Brand Identity */}
//           <div className="lg:col-span-5 space-y-12">
//             <div className="space-y-6">
//               <img src={logo} alt="Devators" className="h-10 md:h-12 w-auto object-contain" />
//               <p className="text-2xl font-light text-gray-500 leading-tight max-w-sm">
//                 A boutique agency focused on crafting <span className="text-black font-medium">high-end digital solutions</span> for visionary brands.
//               </p>
//             </div>
            
//             {/* Social Icons with Minimalist Border */}
//             <div className="flex gap-3">
//               {[
//                 { icon: <FaFacebookF />, link: "#" },
//                 { icon: <BsTwitterX />, link: "#" },
//                 { icon: <FaInstagram />, link: "#" },
//                 { icon: <FaLinkedinIn />, link: "#" },
//                 { icon: <FaWhatsapp />, link: "#" },
//               ].map((social, i) => (
//                 <motion.a 
//                   key={i} 
//                   href={social.link} 
//                   whileHover={{ y: -5, scale: 1.1 }}
//                   className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white border border-black/5 text-black shadow-sm transition-all duration-300 hover:shadow-xl"
//                 >
//                   {social.icon}
//                 </motion.a>
//               ))}
//             </div>
//           </div>

//           {/* Column 2: Navigation */}
//           <div className="lg:col-span-3 lg:col-start-7">
//             <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-400 mb-10">Studio Directory</h4>
//             <ul className="space-y-6">
//               {footerLinks.map((link, index) => (
//                 <li key={index}>
//                   <a href={link.path} className="group flex items-center justify-between border-b border-black/5 pb-2">
//                     <span className="text-xl font-medium tracking-tight group-hover:text-gray-400 transition-colors">{link.name}</span>
//                     <FaArrowRight size={12} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300" />
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Column 3: Contact & Status */}
//           <div className="lg:col-span-3">
//             <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-400 mb-10">Direct Lines</h4>
//             <div className="space-y-12">
//               <div className="group cursor-pointer">
//                 <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2 flex items-center gap-2">
//                   <HiOutlineMail /> General Inquiry
//                 </p>
//                 <p className="text-2xl font-semibold tracking-tighter group-hover:italic transition-all">hello@devators.com</p>
//               </div>
              
//               <div className="pt-6 border-t border-black/5">
//                 <div className="flex items-center gap-3">
//                   <div className="relative h-2 w-2">
//                     <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
//                     <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
//                   </div>
//                   <span className="text-[10px] font-black uppercase tracking-[0.2em]">Current Availability</span>
//                 </div>
//                 <p className="text-sm text-gray-400 mt-2 font-medium">Taking projects for Q3 & Q4 2026</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* 🔐 BOTTOM BAR */}
//         <div className="mt-32 pt-8 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-8">
//           <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400">
//             © {currentYear} Devators Studio — All Rights Reserved
//           </div>

//           <div className="flex gap-10 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
//             <a href="#" className="hover:text-black transition-colors">Legal</a>
//             <a href="#" className="hover:text-black transition-colors">Privacy</a>
//             <a href="#" className="hover:text-black transition-colors">Cookies</a>
//           </div>
//         </div>
//       </div>

//       {/* 💎 Large Scrolling Marquee Text (The Game Changer) */}
//       <div className="absolute bottom-10 left-0 w-full overflow-hidden pointer-events-none select-none">
//         <motion.div 
//           animate={{ x: [0, -1000] }}
//           transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
//           className="whitespace-nowrap flex"
//         >
//           <span className="text-[150px] font-black tracking-tighter uppercase text-black/[0.02] mr-20">DEVATORS • CREATIVE • STRATEGY •</span>
//           <span className="text-[150px] font-black tracking-tighter uppercase text-black/[0.02] mr-20">DEVATORS • CREATIVE • STRATEGY •</span>
//         </motion.div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;



import React from "react";
import { motion } from "framer-motion";
import { 
  FaFacebookF, 
  FaInstagram, 
  FaLinkedinIn, 
  FaWhatsapp 
} from "react-icons/fa";
import { BsTwitterX, BsArrowUpRight, BsStars } from "react-icons/bs";
import { HiOutlineMail, HiOutlineLocationMarker, HiOutlinePhone } from "react-icons/hi";

// লোগো ইমপোর্ট
import logo from "../assets/Devatorslogo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = [
    { name: "Home", path: "#" },
    { name: "About", path: "#about" },
    { name: "Works", path: "#works" },
    { name: "Services", path: "#services" },
    { name: "Contact", path: "#contact" },
  ];

  const socialLinks = [
    { icon: <FaFacebookF />, link: "#" },
    { icon: <BsTwitterX />, link: "#" },
    { icon: <FaInstagram />, link: "#" },
    { icon: <FaLinkedinIn />, link: "#" },
    { icon: <FaWhatsapp />, link: "#" },
  ];

  return (
    <footer className="relative bg-[#f2f2f2] text-black pt-24 pb-10 overflow-hidden font-sans border-t border-black/5">
      
      {/* 🧊 Subtle Geometric Decor (Premium Touch) */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-black/[0.02] rounded-full blur-[100px] -mr-32 -mt-32" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-black/[0.02] rounded-full blur-[80px] -ml-20 -mb-20" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* ⭐ TOP SECTION: Catchy Agency Slogan */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-20 gap-10">
          <div className="max-w-2xl space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 text-black/40 font-bold tracking-[0.3em] text-[10px] uppercase"
            >
              <BsStars className="text-black" /> Innovation Meets Aesthetics
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9] text-black">
              Let's create the <br /> 
              <span className="text-gray-400 italic font-light">future</span> together.
            </h2>
          </div>
          
          <motion.div whileHover={{ scale: 1.05 }} className="group">
            <a href="#contact" className="flex items-center gap-6 bg-black text-white px-10 py-6 rounded-full shadow-xl transition-all duration-500">
              <span className="text-sm font-bold uppercase tracking-widest">Work with us</span>
              <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center group-hover:rotate-45 transition-transform duration-500 shadow-lg">
                <BsArrowUpRight size={18} />
              </div>
            </a>
          </motion.div>
        </div>

        {/* 📊 MAIN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 border-t border-black/10 pt-16">
          
          {/* Brand & Identity */}
          <div className="lg:col-span-5 space-y-8">
            <img
              src={logo}
              alt="Devators"
              className="h-10 md:h-12 w-auto object-contain cursor-pointer transition-opacity hover:opacity-80"
            />
            <p className="text-gray-500 text-lg font-light leading-relaxed max-w-sm">
              We are a creative collective of designers and developers building premium digital experiences that define the next generation of the web.
            </p>
            
            {/* Social Icons - Clean Minimalist Style */}
            <div className="flex gap-3">
              {socialLinks.map((social, i) => (
                <motion.a 
                  key={i} 
                  href={social.link} 
                  whileHover={{ y: -4, backgroundColor: "#000", color: "#fff" }}
                  className="w-11 h-11 flex items-center justify-center rounded-full border border-black/10 text-black/60 transition-all duration-300 bg-transparent"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 lg:col-start-7">
            <h4 className="text-black font-black text-xs uppercase tracking-[0.4em] mb-10">Navigation</h4>
            <ul className="space-y-4">
              {links.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.path} 
                    className="text-gray-400 hover:text-black transition-all duration-300 text-base font-semibold flex items-center gap-0 hover:gap-3 group"
                  >
                    <span className="w-0 h-[1.5px] bg-black group-hover:w-5 transition-all duration-300"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-3">
            <h4 className="text-black font-black text-xs uppercase tracking-[0.4em] mb-10">Contact</h4>
            <div className="space-y-6">
              <div className="group cursor-pointer">
                <div className="flex items-center gap-3 text-gray-400 group-hover:text-black transition-colors mb-2">
                  <HiOutlineMail size={20} />
                  <span className="text-[10px] font-bold uppercase tracking-widest">Email</span>
                </div>
                <p className="text-xl font-medium tracking-tight">hellodevators@gmail.com</p>
              </div>
              
              <div className="group cursor-pointer">
                <div className="flex items-center gap-3 text-gray-400 group-hover:text-black transition-colors mb-2">
                  <HiOutlineLocationMarker size={20} />
                  <span className="text-[10px] font-bold uppercase tracking-widest">Studio</span>
                </div>
                <p className="text-lg font-light text-gray-500 group-hover:text-black transition-colors">
                  Bogura, Bangladesh
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 🔐 BOTTOM BAR */}
        <div className="mt-24 pt-8 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-8 text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400">
            <p>© {currentYear} Devators Agency</p>
            <a href="#privacy" className="hover:text-black transition-colors">Privacy</a>
            <a href="#terms" className="hover:text-black transition-colors">Terms</a>
          </div>

          {/* Agency Availability Indicator */}
          <div className="flex items-center gap-3 bg-white px-5 py-2 rounded-full shadow-sm border border-black/5">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">
              Status: <span className="text-black">Open for collaborations</span>
            </p>
          </div>
        </div>
      </div>

      {/* Decorative Large Text (The 'Unique' Factor) */}
      <div className="absolute bottom-[-20px] left-[-30px] hidden lg:block select-none pointer-events-none opacity-[0.03]">
          <p className=" text-[180px] font-black tracking-tighter uppercase leading-none">Creative</p>
      </div>
    </footer>
  );
};

export default Footer;