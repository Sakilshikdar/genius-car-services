import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import ServiceDetails from './Pages/ServiceDetails/ServiceDetails';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import NotFound from './Pages/Shared/NotFound/NotFound';

function App() {
  return (
    <div>
    <Header></Header>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/home" element={<Home></Home>}></Route>
      <Route path="/service/:serviceId" element={<ServiceDetails />}></Route>
      <Route path="/about" element={<About></About>}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register></Register>}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
    <Footer></Footer>
  </div>
);
}

export default App;
