import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Sidebar from "./component/sidebar/Sidebar";
import User from "./component/users/User";
import TopNavbar from "./component/top-navbar/TopNavbar";
import Dashboard from "./component/dashboard/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <TopNavbar />
      <div className="flex m-auto">
        <div className="hidden sm:block pt-14">
          <Sidebar />
        </div>

        <div className="w-full mx-6 h-[60vh] pt-20">
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/users" element={<User />} />
            <Route path="/reports" element={<User />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
