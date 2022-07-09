import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Shared/Navbar/Navbar';
import Footer from './Shared/Footer/Footer';
import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import Blogs from './Pages/Blogs/Blogs';
import Plan from './Pages/Plan/Plan';
import Service from './Pages/Service/Service';
import Login from './Pages/LoginPart/Login/Login';
import Registration from './Pages/LoginPart/Registration/Registration ';
import ForgetPass from './Pages/LoginPart/ForgetPass/ForgetPass';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/plan' element={<Plan></Plan>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/service' element={<Service></Service>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/Registration' element={<Registration></Registration>}></Route>
        <Route path='/ForgetPass' element={<ForgetPass></ForgetPass>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
