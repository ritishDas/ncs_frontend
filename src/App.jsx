import {Routes,Route} from "react-router-dom";
import Home from "./pages/home.jsx";
import Addc from "./pages/addcollege.jsx";
import Adds from "./pages/addservice.jsx";
import College from "./pages/college.jsx";
import Login from "./pages/login.jsx";
import Register from "./pages/register.jsx";
import Profile from "./pages/profile.jsx";
import Showpage from "./pages/showpage.jsx";
import Footer from "./components/footer.jsx";
import './App.css'

function App() {

    return(
<>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/college/:id" element={<College type="college"/>}/>
        <Route path="/service/:id" element={<College type="service"/>}/>
        <Route path="/addcollege" element={<Addc/>}/>
        <Route path="/addservice" element={<Adds/>}/>

        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/profile" element={<Profile/>}/>

        <Route path="/college" element={<Showpage type="college"/>}/>
        <Route path="/tiffin" element={<Showpage type="tiffin"/>}/>
        <Route path="/room" element={<Showpage type="room"/>}/>

        </Routes>
<Footer/>
</>
    );
}

export default App;
