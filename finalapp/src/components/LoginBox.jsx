import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

function LoginBox(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState("");

    const { session, signInUser } = UserAuth();
    const navigate = useNavigate()
    console.log(session);
    
    const handleSignIn = async (e) => {
        e.preventDefault()
        setLoading(true);
        try {
            const result = await signInUser(email, password);
            if (result.success) {
                navigate("/home")
            }
        } catch (err) {
            setError("an error occurred");            
        } finally {
            setLoading(false);
        }
   };

   return(
       <div className="bg-[#FFE499] rounded-4xl outline-3 outline-offset-3 w-xl h-150">
           <div className="text-center mt-4">
               <h1 className="text-5xl font-google-sans text-shadow-lg/10">Welcome Back!</h1>
           </div>
           <div className="m-20 justify-center-safe">
               <form onSubmit={handleSignIn} action="">
                   <label htmlFor="emailBox" className="font-google-sans">Email</label>
                   <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" name="" id="emailBox" className="w-100 border-b text-2xl outline-none"/>
                   <br />
                   <br />
                   <label htmlFor="pwBox" className="font-google-sans">Password</label>
                   <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" name="" id="pwBox" className="w-100 border-b text-2xl outline-none"/>
                   <br />
                   <br />
                   <div className="flex items-center space-x-2">
                     <input type="checkbox" className="accent-black" name="" id="myCheckBox" value="Yes"/>
                     <label htmlFor="myCheckBox" className="font-google-sans">Remember Me?</label>
                   </div>
                   <div className="text-center mt-6">
                     <p className="text-lg font-google-sans text-[#333]">
                       Don't have an account? <Link to="/" className="font-semibold text-[#1f2937] hover:text-[#111]">Sign Up</Link>
                     </p>
                   </div>
                   <br />
                   <button type="submit" className="bg-white rounded-2xl w-[200px] h-[60px] text-2xl mt-6 cursor-pointer font-google-sans mx-auto block transition duration-150 ease-in-out hover:scale-110">Login</button> 
                   {error && <p className="text-red-600 text-center pt-5">{error}</p>}     
               </form>
           </div>
       </div>
   );
}


export default LoginBox
