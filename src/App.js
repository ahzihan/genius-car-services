
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import ExpertDetails from './Pages/Home/Details/ExpertDetails';
import ServiceDetails from './Pages/Home/Details/ServiceDetails';
import Experts from './Pages/Home/Experts/Experts';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/experts' element={<Experts></Experts>}></Route>
        <Route path='/expertdetails/:expertId' element={<ExpertDetails></ExpertDetails>}></Route>
        <Route path='/servicedetails/:serviceId' element={<ServiceDetails></ServiceDetails>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
