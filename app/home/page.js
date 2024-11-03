import Dash from "@/components/dash/Dash";
import Sidebar from "@/components/sidebar/Sidebar";

import React from "react";

function HomePage() {
  return (
    <div className="mainpage h-screen flex flex-row bg-eggshell text-black">
      <Sidebar />
      <Dash className='flex-grow' />
      
    </div>
  );
}

export default HomePage;
