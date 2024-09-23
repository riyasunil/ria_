import Dash from "../../components/dash/Dash";
import Sidebar2 from "../../components/sidebar-scroll/Sidebar2";
import Sidebar from "../../components/sidebar/Sidebar";
import Skills from "../skills/Skills";


function Home() {
  return (
    <div className="mainpage h-screen flex flex-row">
      <Sidebar />
      <Dash className='flex-grow' />
      
    </div>
  );
}

export default Home;
