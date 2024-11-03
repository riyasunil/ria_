// import React, { useEffect, useState } from "react";
// import { useSwipeable } from "react-swipeable";
// import CarouselItem from "./CarouselItem";


// const Carousel = ({ children }) => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [paused, setPaused] = useState(false);

//   const updateIndex = (newIndex) => {
//     if (newIndex < 0) {
//       newIndex = React.Children.count(children) - 1;
//     } else if (newIndex >= React.Children.count(children)) {
//       newIndex = 0;
//     }

//     setActiveIndex(newIndex);
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (!paused) {
//         updateIndex(activeIndex + 1);
//       }
//     }, 3000);

//     return () => {
//       if (interval) {
//         clearInterval(interval);
//       }
//     };
//   });

//   const handlers = useSwipeable({
//     onSwipedLeft: () => updateIndex(activeIndex + 1),
//     onSwipedRight: () => updateIndex(activeIndex - 1)
//   });

//   return (
//     <div
//       {...handlers}
//       className="overflow-hidden"
//       onMouseEnter={() => setPaused(true)}
//       onMouseLeave={() => setPaused(false)}
//     >
//       <div
//         className="whitespace-nowrap transition-transform duration-300"
//         style={{ transform: `translateX(-${activeIndex * 100}%)` }}
//       >
//         {React.Children.map(children, (child, index) => {
//           return React.cloneElement(child, { width: "100%" });
//         })}
//       </div>
//       <div className="flex justify-center">
//         <button
//           onClick={() => {
//             updateIndex(activeIndex - 1);
//           }}
//           className="mx-1"
//         >
//           Prev
//         </button>
//         {React.Children.map(children, (child, index) => {
//           return (
//             <button
//               className={`mx-1 ${index === activeIndex ? "bg-green-500 text-white" : ""}`}
//               onClick={() => {
//                 updateIndex(index);
//               }}
//             >
//               {index + 1}
//             </button>
//           );
//         })}
//         <button
//           onClick={() => {
//             updateIndex(activeIndex + 1);
//           }}
//           className="mx-1"
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Carousel;


import React, { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
import CarouselItem from "./CarouselItem";

const Carousel = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const itemsToShow = 3; // Number of items to show at once
  const totalItems = React.Children.count(children);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0; // Prevent moving to negative indices
    } else if (newIndex >= totalItems - itemsToShow + 1) {
      newIndex = totalItems - itemsToShow; // Prevent overshooting the last item
    }
    setActiveIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        updateIndex(activeIndex + 1);
      }
    }, 3000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [activeIndex, paused]);

  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1)
  });

  return (
    <div
      {...handlers}
      className="overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="flex transition-transform duration-300"
        style={{ transform: `translateX(-${(activeIndex * 100) / itemsToShow}%)` }}
      >
        {React.Children.map(children, (child) => {
          return React.cloneElement(child, { width: `${100 / itemsToShow}%` });
        })}
      </div>
      <div className="flex justify-center mt-2">
        <button
          onClick={() => updateIndex(activeIndex - 1)}
          className="mx-1"
        >
          Prev
        </button>
        {Array(Math.ceil(totalItems / itemsToShow)).fill(null).map((_, index) => {
          return (
            <button
              className={`mx-1 ${index === Math.floor(activeIndex / itemsToShow) ? "bg-green-500 text-white" : ""}`}
              onClick={() => updateIndex(index * itemsToShow)}
              key={index}
            >
              {index + 1}
            </button>
          );
        })}
        <button
          onClick={() => updateIndex(activeIndex + 1)}
          className="mx-1"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Carousel;
