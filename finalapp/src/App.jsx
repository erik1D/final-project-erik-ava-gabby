import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import { useState } from "react"
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Profile from "./pages/Profile.jsx";
import Login from "./pages/Login.jsx";
import Search from "./pages/Search.jsx";
import Learn from "./pages/Learn.jsx";
import Account from "./pages/Account.jsx";
import Contact from "./pages/Contact.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
import Motivation from "./pages/Motivation.jsx";
import Inquiry from "./pages/Inquiry.jsx";

function App() {
  return (
    <BrowserRouter basename="/final-project-erik-ava-gabby/">
      <AppContent />
    </BrowserRouter>
  )
}

function AppContent() {
  const location = useLocation()
  const hideNav = location.pathname === "/" || location.pathname === "/login"
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {!hideNav && (
        <>
          <button onClick={() => setIsOpen(!isOpen)} className="text-3xl mx-auto block">
            {isOpen ? "⤒" : "☰"}
          </button>

          {isOpen && (
            <nav className="text-center text-2xl m-3">
              <Link to="/home" className="rounded-xl p-1 font-google-sans mx-1 cursor-pointer transition duration-150 ease-in-out hover:opacity-50">Home</Link>
              <Link to="/about" className="rounded-xl p-1 font-google-sans mx-1 cursor-pointer transition duration-150 ease-in-out hover:opacity-50">About</Link> 
              <Link to="/learn" className="rounded-xl p-1 font-google-sans mx-1 cursor-pointer transition duration-150 ease-in-out hover:opacity-50">Learn</Link>         
              <Link to="/profile" className="rounded-xl p-1 font-google-sans mx-1 cursor-pointer transition duration-150 ease-in-out hover:opacity-50">Profile</Link>
              <Link to="/motivation" className="rounded-xl p-1 font-google-sans mx-1 cursor-pointer transition duration-150 ease-in-out hover:opacity-50">Motivation</Link>
              <Link to="/inquiry" className="rounded-xl p-1 font-google-sans mx-1 cursor-pointer transition duration-150 ease-in-out hover:opacity-50">Inquiry</Link>
              <Link to="/search" className="mx-1">🔍</Link>   
            </nav>
          )}
        </>
      )}

      <Routes>
        <Route path="/" element={<Account />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />
        <Route path="/about" element={<PrivateRoute><About /></PrivateRoute>} />
        <Route path="/motivation" element={<PrivateRoute><Motivation /></PrivateRoute>} />
        <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
        <Route path="/learn" element={<PrivateRoute><Learn /></PrivateRoute>} />
        <Route path="/inquiry" element={<PrivateRoute><Inquiry /></PrivateRoute>} />
        <Route path="/search" element={<PrivateRoute><Search /></PrivateRoute>} />     
     </Routes>
    </>
  )
}

export default App;