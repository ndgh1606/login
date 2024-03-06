import logo from './logo.svg';
import './App.css';
import Loginsignup from './Components/LoginSignup/Loginsignup';
import Admin from './Components/Admindashboard/Admindashboard';
import  {BrowserRouter,Routes,Route, Outlet} from 'react-router-dom';
function App()
 {
    return (
        <BrowserRouter>
        <Routes>
  <Route path="/" element={<Loginsignup/>}/>
  <Route path="/admin" element={<Admin/>}/>
</Routes> 
        <div>
            <Outlet></Outlet>
        </div>
        </BrowserRouter>
    );
}

export default App;