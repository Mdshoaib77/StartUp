import React, { useEffect, useState } from "react";
import scrollbar from "../assets/Scroll.png";

const ScrollButton = () => {
  const [isBottom, setIsBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;

      // If user is near bottom
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
      // Scroll to top
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      // Scroll to bottom
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="fixed bottom-24 right-48 z-50">
      <button
        onClick={handleClick}
        className="group transition-all duration-300 hover:scale-110"
      >
        <img
          src={scrollbar}
          alt="Scroll"
          className={`h-14 w-14 transition-transform duration-500 ${
            isBottom ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>
    </div>
  );
};

export default ScrollButton;


// import React, { useEffect, useState } from "react";
// import scrollbar from "../assets/Scroll.png";

// const ScrollButton = () => {
//   const [visible, setVisible] = useState(false);
//   const [isFooter, setIsFooter] = useState(false);

//   useEffect(() => {
//     const hero = document.getElementById("hero");
//     const footer = document.getElementById("footer");

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.target.id === "hero") {
//             if (entry.isIntersecting) {
//               setVisible(true);
//               setIsFooter(false);
//             }
//           }

//           if (entry.target.id === "footer") {
//             if (entry.isIntersecting) {
//               setVisible(true);
//               setIsFooter(true);
//             }
//           }

//           if (!entry.isIntersecting && entry.target.id === "hero") {
//             setVisible(false);
//           }

//           if (!entry.isIntersecting && entry.target.id === "footer") {
//             setVisible(false);
//           }
//         });
//       },
//       { threshold: 0.3 }
//     );

//     if (hero) observer.observe(hero);
//     if (footer) observer.observe(footer);

//     return () => observer.disconnect();
//   }, []);

//   const handleClick = () => {
//     if (isFooter) {
//       window.scrollTo({
//         top: 0,
//         behavior: "smooth",
//       });
//     } else {
//       const footer = document.getElementById("footer");
//       footer?.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   if (!visible) return null;

//   return (
//     <div className="fixed bottom-24 right-48 z-50">
//       <button
//         onClick={handleClick}
//         className="transition-all duration-300 hover:scale-110"
//       >
//         <img
//           src={scrollbar}
//           alt="Scroll"
//           className={`h-14 w-14 transition-transform duration-500 ${
//             isFooter ? "rotate-180" : "rotate-0"
//           }`}
//         />
//       </button>
//     </div>
//   );
// };

// export default ScrollButton;

// Hide Scrolll 

// import React, { useEffect, useState } from "react";
// import scrollbar from "../assets/Scroll.png";

// const ScrollButton = () => {
//   const [visible, setVisible] = useState(true);
//   const [isFooter, setIsFooter] = useState(false);

//   useEffect(() => {
//     const hero = document.getElementById("hero");
//     const footer = document.getElementById("footer");

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.target.id === "hero") {
//             if (entry.isIntersecting) {
//               setVisible(true);
//               setIsFooter(false);
//             } else {
//               setVisible(false); // scroll শুরু হলেই hide
//             }
//           }

//           if (entry.target.id === "footer") {
//             if (entry.isIntersecting) {
//               setVisible(true);
//               setIsFooter(true);
//             }
//           }
//         });
//       },
//       { threshold: 0.4 }
//     );

//     if (hero) observer.observe(hero);
//     if (footer) observer.observe(footer);

//     return () => observer.disconnect();
//   }, []);

//   const handleClick = () => {
//     if (isFooter) {
//       window.scrollTo({
//         top: 0,
//         behavior: "smooth",
//       });
//     } else {
//       const footer = document.getElementById("footer");
//       footer?.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <div
//       className={`
//         fixed bottom-24 right-48 z-50
//         transition-all duration-500 ease-in-out
//         ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}
//       `}
//     >
//       <button
//         onClick={handleClick}
//         className="transition-all duration-300 hover:scale-110"
//       >
//         <img
//           src={scrollbar}
//           alt="Scroll"
//           className={`h-14 w-14 transition-transform duration-500 ${
//             isFooter ? "rotate-180" : "rotate-0"
//           }`}
//         />
//       </button>
//     </div>
//   );
// };

// export default ScrollButton;



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
//     <div className="fixed bottom-24 right-8 z-50">
//       <button
//         onClick={handleClick}
//         className="group transition-all duration-300 hover:scale-110"
//       >
//         <img
//           src={scrollbar}
//           alt="Scroll"
//           className={`h-16 w-16 transition-transform duration-500 ${
//             isBottom ? "rotate-180" : "rotate-0"
//           }`}
//         />
//       </button>
//     </div>
//   );
// };

// export default ScrollButton;