import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Shared/Navbar/Navbar';
import Footer from './Shared/Footer/Footer';
import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import Login from './Pages/Login/Login';
import Blogs from './Pages/Blogs/Blogs';
import Plan from './Pages/Plan/Plan';
import Service from './Pages/Service/Service';

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
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;