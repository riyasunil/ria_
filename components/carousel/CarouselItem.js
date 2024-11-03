// import React from "react";
// const CarouselItem = ({ children, width }) => {
//     return (
//       <div className={`inline-flex items-center justify-center h-[200px] bg-green-500 text-white`} style={{ width }}>
//         {children}
//       </div>
//     );
//   };
// export default CarouselItem
import React from "react";

const CarouselItem = ({ children, width }) => {
  return (
    <div
      className={`inline-flex items-center justify-center h-[200px] bg-green-500 text-white`}
      style={{ width }}
    >
      {children}
    </div>
  );
};

export default CarouselItem;
