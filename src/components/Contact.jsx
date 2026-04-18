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

// const Contact = () => {
//   return (
//     <div className="relative min-h-screen bg-[#f2f2f2] pt-28 overflow-hidden">

//       {/* Soft Glow Background */}
//       <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[700px] 
//       bg-gradient-to-r from-emerald-400/20 via-teal-400/20 to-sky-400/20 
//       rounded-full blur-3xl"></div>

//       <div className="relative z-10 px-6 pb-28">
//         <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

//           {/* ===== LEFT SIDE ===== */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//             className="space-y-8"
//           >
//             <h1 className="text-5xl font-semibold tracking-tight text-slate-900 leading-tight">
//               Let’s build something{" "}
//               <span className="bg-white">
//                Awsome
//               </span>
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

//           {/* ===== RIGHT SIDE (FORM) ===== */}
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
//                 className="w-full py-3 rounded-xl font-semibold text-white
//                bg-black
//                 hover:opacity-90 transition duration-300"
//               >
//                 Send Message
//               </button>

//             </form>
//           </motion.div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;

// import React from "react";
// import { motion } from "framer-motion";

// const Contact = () => {
//   return (
//     <div id="contact" className="relative min-h-screen bg-[#f2f2f2] pt-28 overflow-hidden">

//       {/* Soft Glow Background (reduced height) */}
//       {/* <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[450px] 
//       bg-gradient-to-r from-emerald-400/20 via-teal-400/20 to-sky-400/20 
//       rounded-full blur-3xl"></div> */}

//       <div className="relative z-10 px-6 pb-28">
//         <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

//           {/* ===== LEFT SIDE ===== */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//             className="space-y-8"
//           >
//             <h1 className="text-5xl font-semibold tracking-tight text-slate-900 leading-tight">
//               Let’s build something{" "}
//               <span className="bg-white">
//                Awsome
//               </span>
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

//           {/* ===== RIGHT SIDE (FORM) ===== */}
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
//                 className="w-full py-3 rounded-xl font-semibold text-white
//                bg-black
//                 hover:opacity-90 transition duration-300"
//               >
//                 Send Message
//               </button>

//             </form>
//           </motion.div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;


// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const services = [
//   "Website Development",
//   "E-commerce Website",
//   "Frontend Development",
//   "Backend Development",
//   "Full-Stack Development",
//   "UI/UX Design",
// ];

// const Contact = () => {
//   const [open, setOpen] = useState(false);
//   const [selected, setSelected] = useState("Choose Service");

//   return (
//     <div
//       id="contact"
//       className="relative min-h-screen bg-[#f2f2f2] pt-28 overflow-hidden"
//     >
//       <div className="relative z-10 px-6 pb-28">
//         <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

//           {/* ===== LEFT SIDE ===== */}
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
//               Have an idea, project or collaboration in mind? We’re ready to
//               turn your vision into a modern digital experience.
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
//                 <p className="text-slate-600 text-sm">+880 1234-567890</p>
//               </div>

//               <div>
//                 <p className="font-semibold text-slate-900">Location</p>
//                 <p className="text-slate-600 text-sm">Dhaka, Bangladesh</p>
//               </div>
//             </div>
//           </motion.div>

//           {/* ===== RIGHT SIDE ===== */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//             className="bg-white/90 backdrop-blur-xl border border-white/40 
//             rounded-3xl p-12 shadow-2xl shadow-slate-300/50"
//           >
//             <form className="space-y-6">

//               {/* Full Name */}
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

//               {/* Email */}
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

//               {/* ===== SERVICE DROPDOWN ===== */}
//               <div className="relative">
//                 <label className="block text-sm font-medium mb-2 text-slate-700">
//                   Choose Service
//                 </label>

//                 <div
//                   onClick={() => setOpen(!open)}
//                   className="w-full px-4 py-3 rounded-xl border border-slate-300 
//                   flex justify-between items-center cursor-pointer bg-white"
//                 >
//                   <span className="text-slate-700">{selected}</span>

//                   {/* arrow */}
//                   <motion.span
//                     animate={{ rotate: open ? 180 : 0 }}
//                     transition={{ duration: 0.3 }}
//                     className="text-slate-500"
//                   >
//                     ▼
//                   </motion.span>
//                 </div>

//                 {/* dropdown */}
//                 <AnimatePresence>
//                   {open && (
//                     <motion.div
//                       initial={{ opacity: 0, y: -10, scale: 0.95 }}
//                       animate={{ opacity: 1, y: 0, scale: 1 }}
//                       exit={{ opacity: 0, y: -10, scale: 0.95 }}
//                       transition={{ duration: 0.25 }}
//                       className="absolute z-20 w-full mt-2 bg-white border border-slate-200 
//                       rounded-xl shadow-lg overflow-hidden"
//                     >
//                       {services.map((item, index) => (
//                         <div
//                           key={index}
//                           onClick={() => {
//                             setSelected(item);
//                             setOpen(false);
//                           }}
//                           className="px-4 py-3 hover:bg-slate-100 cursor-pointer text-slate-700 transition"
//                         >
//                           {item}
//                         </div>
//                       ))}
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>

//               {/* Message */}
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

//               {/* Submit */}
//               <button
//                 type="submit"
//                 className="w-full py-3 rounded-xl font-semibold text-white
//                 bg-black hover:opacity-90 transition duration-300"
//               >
//                 Send Message
//               </button>
//             </form>
//           </motion.div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  "Website Development",
  "E-commerce Website",
  "Frontend Development",
  "Backend Development",
  "Full-Stack Development",
  "UI/UX Design",
];

const Contact = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("Choose Service");

  return (
    <div
      id="contact"
      className="relative min-h-screen bg-[#f2f2f2] pt-28 overflow-hidden"
    >
      <div className="relative z-10 px-6 pb-28">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

          {/* ===== LEFT SIDE ===== */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h1 className="text-5xl font-semibold tracking-tight text-slate-900 leading-tight">
              Let’s build something{" "}
              <span className="bg-white px-2">Awesome</span>
            </h1>

            <p className="text-slate-500 text-lg leading-relaxed max-w-md">
              Have an idea, project or collaboration in mind? We’re ready to
              turn your vision into a modern digital experience.
            </p>

            <div className="space-y-6 pt-6">
              <div>
                <p className="font-semibold text-slate-900">Email</p>
                <p className="text-slate-600 text-sm">
                  hello@tawakkulstudio.com
                </p>
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

          {/* ===== RIGHT SIDE ===== */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/90 backdrop-blur-xl border border-white/40 
            rounded-3xl p-12 shadow-2xl shadow-slate-300/50"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>

              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium mb-2 text-slate-700">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 
                  focus:outline-none focus:ring-2 focus:ring-emerald-400 
                  focus:border-emerald-400 transition"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium mb-2 text-slate-700">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 
                  focus:outline-none focus:ring-2 focus:ring-emerald-400 
                  focus:border-emerald-400 transition"
                />
              </div>

              {/* ===== SERVICE DROPDOWN ===== */}
              <div className="relative">
                <label className="block text-sm font-medium mb-2 text-slate-700">
                  Choose Service
                </label>

                <div
                  onClick={() => setOpen(!open)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 
                  flex justify-between items-center cursor-pointer bg-white transition-all
                  hover:border-slate-400"
                >
                  <span className={`${selected === "Choose Service" ? "text-slate-400" : "text-slate-700"}`}>
                    {selected}
                  </span>

                  {/* Updated Minimal Arrow */}
                  <motion.div
                    animate={{ rotate: open ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center justify-center"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-slate-500"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </motion.div>
                </div>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {open && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.98 }}
                      transition={{ duration: 0.2 }}
                      className="absolute z-20 w-full mt-2 bg-white border border-slate-200 
                      rounded-xl shadow-xl overflow-hidden"
                    >
                      {services.map((item, index) => (
                        <div
                          key={index}
                          onClick={() => {
                            setSelected(item);
                            setOpen(false);
                          }}
                          className="px-4 py-3 hover:bg-slate-50 cursor-pointer text-slate-700 transition-colors"
                        >
                          {item}
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium mb-2 text-slate-700">
                  Message
                </label>
                <textarea
                  rows="4"
                  placeholder="Tell us about your project..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 
                  focus:outline-none focus:ring-2 focus:ring-emerald-400 
                  focus:border-emerald-400 transition resize-none"
                ></textarea>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full py-3 rounded-xl font-semibold text-white
                bg-black hover:bg-slate-800 transition duration-300 shadow-lg"
              >
                Send Message
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Contact;