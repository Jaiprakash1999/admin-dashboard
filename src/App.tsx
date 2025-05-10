import { BrowserRouter } from "react-router-dom";
import Sidebar from "./component/sidebar/Sidebar";
import User from "./component/users/User";
import TopNavbar from "./component/top-navbar/TopNavbar";

function App() {
  return (
    <BrowserRouter>
      <TopNavbar />
      <div className="flex m-auto">
        <div className="flex pt-14">
          <Sidebar />
        </div>
        <div className="w-full h-[60vh] pt-24">
          <User />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
