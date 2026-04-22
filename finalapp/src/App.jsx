import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState } from "react"
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Profile from "./pages/Profile.jsx";
import Login from "./pages/Login.jsx";
import Search from "./pages/Search.jsx";
import Learn from "./pages/Learn.jsx";
import Account from "./pages/Account.jsx";
import Contact from "./pages/Contact.jsx";

function App() {
  const [isOpen, setIsOpen] = useState(false)
 return (
  <>
  <button onClick={() => setIsOpen(!isOpen)} className="text-3xl mx-auto block">
    {isOpen ? "⤒" : "☰"}
  </button>

    
   <BrowserRouter basename="/final-project-erik-ava-gabby/">
      {isOpen && (
     <nav className="text-center text-2xl m-3">
        <Link to="/" className="rounded-xl p-1 font-google-sans mx-1 cursor-pointer transition duration-150 ease-in-out hover:opacity-50">Home</Link>
        <Link to="/about" className="rounded-xl p-1 font-google-sans mx-1 cursor-pointer transition duration-150 ease-in-out hover:opacity-50">About</Link>
        <Link to="/profile" className="rounded-xl p-1 font-google-sans mx-1 cursor-pointer transition duration-150 ease-in-out hover:opacity-50">Profile</Link> 
        <Link to="/login" className="rounded-xl p-1 font-google-sans mx-1 cursor-pointer transition duration-150 ease-in-out hover:opacity-50">Login</Link> 
        <Link to="/account" className="rounded-xl p-1 font-google-sans mx-1 cursor-pointer transition duration-150 ease-in-out hover:opacity-50">Account</Link>
        <Link to="/learn" className="rounded-xl p-1 font-google-sans mx-1 cursor-pointer transition duration-150 ease-in-out hover:opacity-50">Learn</Link>         
        <Link to="/contact" className="rounded-xl p-1 font-google-sans mx-1 cursor-pointer transition duration-150 ease-in-out hover:opacity-50">Contact</Link>
        <Link to="/search" className="mx-1">🔍</Link>   
     </nav>
      )}

      
     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/about" element={<About />} />
       <Route path="/profile" element={<Profile />} />
       <Route path="/login" element={<Login />} />
       <Route path="/account" element={<Account />} />
       <Route path="/learn" element={<Learn />} />      
       <Route path="/contact" element={<Contact />} />
       <Route path="/search" element={<Search />} />
     </Routes>
   </BrowserRouter>
   </>
 );
}

export default App;