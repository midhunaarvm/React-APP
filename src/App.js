
import './App.css';
import './Shopdetail.css'
import Home from './components/Home';


import Shop from './components/Shop';
import { Routes, Route} from 'react-router-dom';
import Header from './Header';
import Shopdetail from './components/Shopdetail';
import Shopcart from './components/Shopcart';
import Checkout from './components/Checkout';
import Contact from './components/Contact';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
      
            <div>
                 <Header/>
                 <Routes>
                 
                  <Route path='/' element={<Home/>}/>
                  <Route path='shop' element={<Shop />}/>
                  <Route path='shopdetail' element={<Shopdetail/>}/>
                  <Route path='shopcart' element={<Shopcart/>}/>
                  <Route path='checkout' element={<Checkout/>}/>
                  <Route path='contact' element={<Contact/>}/>
                  <Route path='login' element={<Login/>}/>
                  <Route path='register' element={<Register/>}/>
                 </Routes>
            </div>
            
      
   

 
  

  );
}

export default App;
