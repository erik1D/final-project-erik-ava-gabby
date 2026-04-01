import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState } from "react"
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Profile from "./pages/Profile.jsx";
import Login from "./pages/Login.jsx";
import Search from "./pages/Search.jsx";
import Learn from "./pages/Learn.jsx";
import Account from "./pages/Account.jsx";

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
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/profile">Profile</Link> |{" "}
        <Link to="/login">Login</Link> |{" "}
        <Link to="/account">Account</Link> |{" "}
        <Link to="/learn">Learn</Link> |{" "}    
         <Link to="/search">🔍</Link>     
     </nav>
      )}
     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/about" element={<About />} />
       <Route path="/profile" element={<Profile />} />
       <Route path="/login" element={<Login />} />
       <Route path="/account" element={<Account />} />
       <Route path="/learn" element={<Learn />} />
        <Route path="/search" element={<Search />} />
     </Routes>
   </BrowserRouter>
   </>
 );
}

export default App;