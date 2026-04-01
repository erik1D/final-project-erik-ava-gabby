import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState } from "react"
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Profile from "./pages/Profile.jsx";
import Login from "./pages/Login.jsx";
import Search from "./pages/Search.jsx";
import Learn from "./pages/Learn.jsx";

function App() {
  const [isOpen, setIsOpen] = useState(false)
 return (
  <>
  <button onClick={() => setIsOpen(!isOpen)} className="text-3xl mx-auto block">
    {isOpen ? "⤒" : "☰"}
  </button>

    
   <BrowserRouter>
      {isOpen && (
     <nav className="text-center text-2xl m-3">
        <Link to="/" className="rounded-xl bg-black text-white p-1 font-google-sans mx-1">Home</Link>
        <Link to="/about" className="rounded-xl bg-black text-white p-1 font-google-sans mx-1">About</Link>
        <Link to="/profile" className="rounded-xl bg-black text-white p-1 font-google-sans mx-1">Profile</Link> 
        <Link to="/login" className="rounded-xl bg-black text-white p-1 font-google-sans mx-1">Login</Link> 
        <Link to="/learn" className="rounded-xl bg-black text-white p-1 font-google-sans mx-1">Learn</Link>  
         <Link to="/search" className="mx-1">🔍</Link>     
     </nav>
      )}
     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/about" element={<About />} />
       <Route path="/profile" element={<Profile />} />
       <Route path="/login" element={<Login />} />
       <Route path="/learn" element={<Learn />} />
        <Route path="/search" element={<Search />} />
     </Routes>
   </BrowserRouter>
   </>
 );
}

export default App;