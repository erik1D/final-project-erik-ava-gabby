import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Profile from "./pages/Profile.jsx";
import Login from "./pages/Login.jsx";
import Inquiry from "./pages/inquiry.jsx";


function App() {
 return (
   <BrowserRouter>
     <nav className="text-center text-2xl m-3">
       <Link to="/">Home</Link> |{" "}
       <Link to="/about">About</Link> |{" "}
       <Link to="/profile">Profile</Link> |{" "}
       <Link to="/login">Login</Link> |{" "}
       <Link to="/Inquiry">Inquiry</Link> |{" "}
     </nav>

     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/about" element={<About />} />
       <Route path="/profile" element={<Profile />} />
       <Route path="/login" element={<Login />} />
       <Route path="/Inquiry" element={<Inquiry />} />
     </Routes>
   </BrowserRouter>
 );
}

export default App;