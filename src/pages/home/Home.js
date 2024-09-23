import Dash from "../../components/dash/Dash";
import Sidebar from "../../components/sidebar/Sidebar";


function Home() {
  return (
    <div className="mainpage h-screen flex flex-row">
      <Sidebar />
      <Dash className='flex-grow' />
    </div>
  );
}

export default Home;
