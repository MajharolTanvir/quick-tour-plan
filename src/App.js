import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Shared/Navbar/Navbar";
import Footer from "./Shared/Footer/Footer";
import Home from "./Pages/Home/Home";
import NotFound from "./Pages/NotFound/NotFound";
import Blogs from "./Pages/Blogs/Blogs";
import Plan from "./Pages/Plan/Plan";
import Service from "./Pages/Service/Service";
import Login from "./Pages/LoginPart/Login/Login";
import Registration from "./Pages/LoginPart/Registration/Registration ";
import ForgetPass from "./Pages/LoginPart/ForgetPass/ForgetPass";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Places from "./Pages/Places/Places";
import Dashboard from "./Pages/Dashboard/Dashboard";

function App() {
  return (
    <div className="App bg-gray-100">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/plan" element={<Plan />}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="/service" element={<Service />}></Route>
        <Route path="/places" element={<Places />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route
          path="/Registration"
          element={<Registration></Registration>}
        ></Route>
        <Route path="/ForgetPass" element={<ForgetPass />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
