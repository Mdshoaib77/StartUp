// // import React from "react";
// // import { motion } from "framer-motion";

// // const Contact = () => {
// //   return (
// //     <div className="relative min-h-screen bg-white pt-28 overflow-hidden">

// //       {/* Soft Glow Background */}
// //       <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[700px] 
// //       bg-gradient-to-r from-emerald-400/20 via-teal-400/20 to-sky-400/20 
// //       rounded-full blur-3xl"></div>

// //       <div className="relative z-10 px-6 pb-28">
// //         <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

// //           {/* ===== LEFT SIDE ===== */}
// //           <motion.div
// //             initial={{ opacity: 0, x: -50 }}
// //             animate={{ opacity: 1, x: 0 }}
// //             transition={{ duration: 0.6 }}
// //             className="space-y-8"
// //           >
// //             <h1 className="text-5xl font-semibold tracking-tight text-slate-900 leading-tight">
// //               Let’s build something{" "}
// //               <span className="bg-white">
// //                Awsome
// //               </span>
// //             </h1>

// //             <p className="text-slate-500 text-lg leading-relaxed max-w-md">
// //               Have an idea, project or collaboration in mind?
// //               We’re ready to turn your vision into a modern digital experience.
// //             </p>

// //             <div className="space-y-6 pt-6">

// //               <div>
// //                 <p className="font-semibold text-slate-900">Email</p>
// //                 <p className="text-slate-600 text-sm">
// //                   hello@tawakkulstudio.com
// //                 </p>
// //               </div>

// //               <div>
// //                 <p className="font-semibold text-slate-900">Phone</p>
// //                 <p className="text-slate-600 text-sm">
// //                   +880 1234-567890
// //                 </p>
// //               </div>

// //               <div>
// //                 <p className="font-semibold text-slate-900">Location</p>
// //                 <p className="text-slate-600 text-sm">
// //                   Dhaka, Bangladesh
// //                 </p>
// //               </div>

// //             </div>
// //           </motion.div>

// //           {/* ===== RIGHT SIDE (FORM) ===== */}
// //           <motion.div
// //             initial={{ opacity: 0, x: 50 }}
// //             animate={{ opacity: 1, x: 0 }}
// //             transition={{ duration: 0.6 }}
// //             className="bg-white/90 backdrop-blur-xl border border-white/40 
// //             rounded-3xl p-12 shadow-2xl shadow-slate-300/50"
// //           >
// //             <form className="space-y-6">

// //               <div>
// //                 <label className="block text-sm font-medium mb-2 text-slate-700">
// //                   Full Name
// //                 </label>
// //                 <input
// //                   type="text"
// //                   placeholder="John Doe"
// //                   className="w-full px-4 py-3 rounded-xl border border-slate-300 
// //                   focus:outline-none focus:ring-2 focus:ring-emerald-400 
// //                   focus:border-emerald-400 transition"
// //                 />
// //               </div>

// //               <div>
// //                 <label className="block text-sm font-medium mb-2 text-slate-700">
// //                   Email Address
// //                 </label>
// //                 <input
// //                   type="email"
// //                   placeholder="you@example.com"
// //                   className="w-full px-4 py-3 rounded-xl border border-slate-300 
// //                   focus:outline-none focus:ring-2 focus:ring-emerald-400 
// //                   focus:border-emerald-400 transition"
// //                 />
// //               </div>

// //               <div>
// //                 <label className="block text-sm font-medium mb-2 text-slate-700">
// //                   Message
// //                 </label>
// //                 <textarea
// //                   rows="4"
// //                   placeholder="Tell us about your project..."
// //                   className="w-full px-4 py-3 rounded-xl border border-slate-300 
// //                   focus:outline-none focus:ring-2 focus:ring-emerald-400 
// //                   focus:border-emerald-400 transition"
// //                 ></textarea>
// //               </div>

// //               <button
// //                 type="submit"
// //                 className="w-full py-3 rounded-xl font-semibold text-white
// //                bg-black
// //                 hover:opacity-90 transition duration-300"
// //               >
// //                 Send Message
// //               </button>

// //             </form>
// //           </motion.div>

// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Contact;


// import React from "react";
// import { motion } from "framer-motion";
// import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

// const Contact = () => {
//   return (
//     <div className="relative min-h-screenbg-[#f2f2f2] pt-28 overflow-hidden">

//       {/* 🔥 SAME GRADIENT (extended for footer also) */}
//       <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[900px] h-[900px] 
//       bg-gradient-to-r from-emerald-400/20 via-teal-400/20 to-sky-400/20 
//       rounded-full blur-3xl"></div>

//       <div className="relative z-10 px-6 pb-20">
//         <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

//           {/* LEFT */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//             className="space-y-8"
//           >
//             <h1 className="text-5xl font-semibold tracking-tight text-slate-900 leading-tight">
//               Let’s build something{" "}
//               <span className="bg-white">Awsome</span>
//             </h1>

//             <p className="text-slate-500 text-lg leading-relaxed max-w-md">
//               Have an idea, project or collaboration in mind?
//               We’re ready to turn your vision into a modern digital experience.
//             </p>

//             <div className="space-y-6 pt-6">
//               <div>
//                 <p className="font-semibold text-slate-900">Email</p>
//                 <p className="text-slate-600 text-sm">
//                   hello@tawakkulstudio.com
//                 </p>
//               </div>

//               <div>
//                 <p className="font-semibold text-slate-900">Phone</p>
//                 <p className="text-slate-600 text-sm">
//                   +880 1234-567890
//                 </p>
//               </div>

//               <div>
//                 <p className="font-semibold text-slate-900">Location</p>
//                 <p className="text-slate-600 text-sm">
//                   Dhaka, Bangladesh
//                 </p>
//               </div>
//             </div>
//           </motion.div>

//           {/* RIGHT */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//             className="bg-white/90 backdrop-blur-xl border border-white/40 
//             rounded-3xl p-12 shadow-2xl shadow-slate-300/50"
//           >
//             <form className="space-y-6">

//               <div>
//                 <label className="block text-sm font-medium mb-2 text-slate-700">
//                   Full Name
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="John Doe"
//                   className="w-full px-4 py-3 rounded-xl border border-slate-300 
//                   focus:outline-none focus:ring-2 focus:ring-emerald-400 
//                   focus:border-emerald-400 transition"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium mb-2 text-slate-700">
//                   Email Address
//                 </label>
//                 <input
//                   type="email"
//                   placeholder="you@example.com"
//                   className="w-full px-4 py-3 rounded-xl border border-slate-300 
//                   focus:outline-none focus:ring-2 focus:ring-emerald-400 
//                   focus:border-emerald-400 transition"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium mb-2 text-slate-700">
//                   Message
//                 </label>
//                 <textarea
//                   rows="4"
//                   placeholder="Tell us about your project..."
//                   className="w-full px-4 py-3 rounded-xl border border-slate-300 
//                   focus:outline-none focus:ring-2 focus:ring-emerald-400 
//                   focus:border-emerald-400 transition"
//                 ></textarea>
//               </div>

//               <button
//                 type="submit"
//                 className="w-full py-3 rounded-xl font-semibold text-white bg-black"
//               >
//                 Send Message
//               </button>

//             </form>
//           </motion.div>

//         </div>
//       </div>

//       {/* ================= FOOTER (Integrated) ================= */}
//       <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 pb-16">

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-16">

//           {/* Brand */}
//           <div className="lg:col-span-4">
//             <div className="flex items-center gap-1 mb-6">
//               <div className="w-4 h-4 bg-blue-600 rounded-full opacity-75"></div>
//               <div className="w-4 h-4 bg-red-500 rounded-full -ml-2"></div>
//               <span className="text-xl font-bold ml-1 text-gray-900">The Next Design</span>
//             </div>

//             <p className="text-gray-600 mb-8 leading-relaxed">
//               The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times.
//             </p>

//             <div className="flex gap-4">
//               <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
//                 <FaFacebookF />
//               </div>
//               <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
//                 <FaTwitter />
//               </div>
//               <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
//                 <FaLinkedinIn />
//               </div>
//             </div>
//           </div>

//           {/* Links */}
//           <div className="lg:col-span-8">
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

//               <div>
//                 <h3 className="text-sm font-bold uppercase text-gray-900 mb-6">Company</h3>
//                 <ul className="space-y-4 text-gray-600">
//                   <li>About</li>
//                   <li>Terms of Use</li>
//                   <li>Privacy Policy</li>
//                   <li>How it Works</li>
//                   <li>Contact Us</li>
//                 </ul>
//               </div>

//               <div>
//                 <h3 className="text-sm font-bold uppercase text-gray-900 mb-6">Get Help</h3>
//                 <ul className="space-y-4 text-gray-600">
//                   <li>Support Career</li>
//                   <li>24h Service</li>
//                   <li>Quick Chat</li>
//                 </ul>
//               </div>

//               <div>
//                 <h3 className="text-sm font-bold uppercase text-gray-900 mb-6">Support</h3>
//                 <ul className="space-y-4 text-gray-600">
//                   <li>FAQ</li>
//                   <li>Policy</li>
//                   <li>Business</li>
//                 </ul>
//               </div>

//               <div>
//                 <h3 className="text-sm font-bold uppercase text-gray-900 mb-6">Contact</h3>
//                 <ul className="space-y-4 text-gray-600">
//                   <li>WhatsApp</li>
//                   <li>Support 24</li>
//                 </ul>
//               </div>

//             </div>
//           </div>

//         </div>

//         {/* Copyright */}
//         <div className="mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
//           <p className="text-gray-500 text-sm">
//             Copyright © {new Date().getFullYear()} Md Shoaib. All rights reserved.
//           </p>
//           <p className="text-gray-500 text-sm font-medium">
//             Created by <span className="text-gray-900 font-bold">Md Shoaib</span>
//           </p>
//         </div>

//       </div>

//     </div>
//   );
// };

// export default Contact;

import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

// motion utility path টি আপনার প্রজেক্ট অনুযায়ী ঠিক আছে কিনা দেখে নিন
// import { fadeIn, textVariant } from "../utils/motion"; 

const Contact = () => {
  const footerLinks = {
    company: [
      { name: 'About', href: '#' },
      { name: 'Terms of Use', href: '#' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'How it Works', href: '#' },
      { name: 'Contact Us', href: '#' },
    ],
    getHelp: [
      { name: 'Support Career', href: '#' },
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
  };

  return (
    <div className="relative min-h-screen bg-[#f2f2f2] pt-28 overflow-hidden">
      
      {/* ===== Shared Soft Glow Background ===== */}
      {/* এই গ্লোটি কন্টাক্ট এবং ফুটারের সংযোগস্থলে রাখা হয়েছে যেন কন্টিনিউটি থাকে */}
      <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] 
      bg-gradient-to-r from-emerald-400/20 via-teal-400/20 to-sky-400/20 
      rounded-full blur-[120px] pointer-events-none z-0"></div>

      {/* ===== CONTACT SECTION ===== */}
      <div className="relative z-10 px-6 pb-32">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h1 className="text-5xl font-semibold tracking-tight text-slate-900 leading-tight">
              Let’s build something{" "}
              <span className="bg-white px-2 rounded-lg shadow-sm">
                Awesome
              </span>
            </h1>

            <p className="text-slate-500 text-lg leading-relaxed max-w-md">
              Have an idea, project or collaboration in mind?
              We’re ready to turn your vision into a modern digital experience.
            </p>

            <div className="space-y-6 pt-6">
              <div>
                <p className="font-semibold text-slate-900">Email</p>
                <p className="text-slate-600 text-sm">hello@tawakkulstudio.com</p>
              </div>
              <div>
                <p className="font-semibold text-slate-900">Phone</p>
                <p className="text-slate-600 text-sm">+880 1234-567890</p>
              </div>
              <div>
                <p className="font-semibold text-slate-900">Location</p>
                <p className="text-slate-600 text-sm">Dhaka, Bangladesh</p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE (FORM) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/90 backdrop-blur-xl border border-white/40 
            rounded-3xl p-12 shadow-2xl shadow-slate-300/50"
          >
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-slate-700">Full Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-400 outline-none transition"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-slate-700">Email Address</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-400 outline-none transition"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-slate-700">Message</label>
                <textarea
                  rows="4"
                  placeholder="Tell us about your project..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-400 outline-none transition"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 rounded-xl font-semibold text-white bg-black hover:opacity-90 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* ===== INTEGRATED FOOTER SECTION ===== */}
      <footer className="relative z-10 border-t border-gray-200 mt-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-16">
            
            {/* Brand Column */}
            <div className="lg:col-span-4">
              <div className="flex items-center gap-1 mb-6">
                <div className="w-4 h-4 bg-blue-600 rounded-full opacity-75"></div>
                <div className="w-4 h-4 bg-red-500 rounded-full -ml-2"></div>
                <span className="text-xl font-bold ml-1 text-gray-900">The Next Design</span>
              </div>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Transforming ideas into digital reality with modern design and full-stack expertise.
              </p>
              <div className="flex gap-4">
                {[FaFacebookF, FaTwitter, FaLinkedinIn].map((Icon, i) => (
                  <motion.a
                    key={i}
                    whileHover={{ y: -3 }}
                    href="#"
                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-600 shadow-sm border border-gray-100 hover:bg-emerald-500 hover:text-white transition-all"
                  >
                    <Icon />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Links Columns */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {Object.entries(footerLinks).map(([category, links]) => (
                  <div key={category}>
                    <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900 mb-6">
                      {category.replace(/([A-Z])/g, ' $1').trim()}
                    </h3>
                    <ul className="space-y-4">
                      {links.map((link, index) => (
                        <li key={index}>
                          <a href={link.href} className="text-gray-600 hover:text-emerald-500 transition-colors text-sm">
                            {link.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="border-t border-gray-200 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
            <p>Copyright © {new Date().getFullYear()} Md Shoaib. All rights reserved.</p>
            <p className="font-medium">Created by <span className="text-gray-900 font-bold">Md Shoaib</span></p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;