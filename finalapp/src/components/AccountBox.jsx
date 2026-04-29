import { useState } from "react";
import { UserAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

function AccountBox(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState("");

    const { session, signUpNewUser } = UserAuth();
    const navigate = useNavigate()
    console.log(session);

    const capitalizeName = (value) => {
        return value
            .split(" ")
            .map((part) => part.trim())
            .filter(Boolean)
            .map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
            .join(" ");
    }
    
    const handleSignUp = async (e) => {
        e.preventDefault()
        
        // Form validation
        if (!firstName.trim() || !lastName.trim() || !email.trim() || !password.trim()) {
            setError("Please fill in all required fields");
            return;
        }
        
        setLoading(true)
        setError("");
        
        const formattedFirstName = capitalizeName(firstName)
        const formattedLastName = capitalizeName(lastName)

        try {
            const result = await signUpNewUser(email, password, formattedFirstName, formattedLastName)

            if(result.success) {
                navigate("/home")
            } else {               
                if (result.error?.message?.includes('rate limit') || result.error?.message?.includes('rate exceeded')) {
                    setError("Too many signup attempts. Please wait a few minutes before trying again.");
                } else if (result.error?.message?.includes('already registered')) {
                    setError("An account with this email already exists. Try signing in instead.");
                } else {
                    setError(result.error?.message || "An error occurred during signup");
                }
            }
        } catch (err) {
            console.error("Signup error:", err);
            setError("An error occurred during signup");
        } finally {
            setLoading(false);
        }
    }
    return(
       <div className="bg-[#FFE499] rounded-4xl outline-3 outline-offset-3 w-full max-w-xl p-8 md:p-10 mx-4 md:mx-0">
           <div className="text-center">
               <h1 className="text-4xl md:text-5xl font-google-sans text-shadow-lg/10 mb-6">Create Account</h1>
           </div>
           <div className="space-y-4">
               <form onSubmit={handleSignUp} action="">
                   <label htmlFor="firstNameBox" className="font-google-sans">First Name *</label>
                   <input onChange={(e) => setFirstName(e.target.value)} onBlur={() => setFirstName(capitalizeName(firstName))} type="text" name="" id="firstNameBox" className="w-full border-b text-2xl outline-none" required/>
                   <br />
                   <br />
                   <label htmlFor="lastNameBox" className="font-google-sans">Last Name *</label>
                   <input onChange={(e) => setLastName(e.target.value)} onBlur={() => setLastName(capitalizeName(lastName))} type="text" name="" id="lastNameBox" className="w-full border-b text-2xl outline-none" required/>
                   <br />
                   <br />
                   <label htmlFor="emailBox" className="font-google-sans">Email *</label>
                   <input onChange={(e) => setEmail(e.target.value)} type="email" name="" id="emailBox" className="w-full border-b text-2xl outline-none" required/>
                   <br />
                   <br />
                   <label htmlFor="pwBox" className="font-google-sans">Password *</label>
                   <input onChange={(e) => setPassword(e.target.value)} type="password" name="" id="pwBox" className="w-full border-b text-2xl outline-none" required/>
                   <br />
                   <br />
                   <div className="text-center mt-6">
                        <p className="text-lg font-google-sans text-[#333]">
                            Already have an account? <Link to="/login" className="font-semibold text-[#1f2937] hover:text-[#111]">Login</Link>
                        </p>
                   </div>
                   <button type="submit" className="bg-white rounded-2xl w-[200px] h-[60px] text-2xl mt-6 cursor-pointer font-google-sans mx-auto block transition duration-150 ease-in-out hover:scale-110 ">Create Account</button>
                   {error && <p className="text-red-600 text-center pt-5">{error}</p>}  
               </form>
           </div>
       </div>
   );
}

export default AccountBox;
