// import React, { useEffect, useState } from "react";
// import scrollbar from "../assets/Scroll.png";

// const ScrollButton = () => {
//   const [isBottom, setIsBottom] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = window.scrollY;
//       const windowHeight = window.innerHeight;
//       const fullHeight = document.documentElement.scrollHeight;

//       // If user is near bottom
//       if (scrollTop + windowHeight >= fullHeight - 100) {
//         setIsBottom(true);
//       } else {
//         setIsBottom(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const handleClick = () => {
//     if (isBottom) {
//       // Scroll to top
//       window.scrollTo({
//         top: 0,
//         behavior: "smooth",
//       });
//     } else {
//       // Scroll to bottom
//       window.scrollTo({
//         top: document.documentElement.scrollHeight,
//         behavior: "smooth",
//       });
//     }
//   };

//   return (
//     <div className="fixed bottom-24 right-48 z-50">
//       <button
//         onClick={handleClick}
//         className="group transition-all duration-300 hover:scale-110"
//       >
//         <img
//           src={scrollbar}
//           alt="Scroll"
//           className={`h-14 w-14 transition-transform duration-500 ${
//             isBottom ? "rotate-180" : "rotate-0"
//           }`}
//         />
//       </button>
//     </div>
//   );
// };

// export default ScrollButton;

import React, { useEffect, useState } from "react";
import scrollbar from "../assets/Scroll.png";

const ScrollButton = ({ isMenuOpen }) => { // Prop হিসেবে এটি গ্রহণ করুন
  const [isBottom, setIsBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;
      if (scrollTop + windowHeight >= fullHeight - 100) {
        setIsBottom(true);
      } else {
        setIsBottom(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    if (isBottom) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "smooth" });
    }
  };

  /* ✅ যদি মেনু খোলা থাকে, তবে বাটনটি রেন্ডার হবে না */
  if (isMenuOpen) return null; 

  return (
    <div className="fixed bottom-24 right-10 md:right-48 z-40">
      <button onClick={handleClick} className="group transition-all duration-300 hover:scale-110">
        <img
          src={scrollbar}
          alt="Scroll"
          className={`h-14 w-14 transition-transform duration-500 ${isBottom ? "rotate-180" : "rotate-0"}`}
        />
      </button>
    </div>
  );
};

export default ScrollButton;
