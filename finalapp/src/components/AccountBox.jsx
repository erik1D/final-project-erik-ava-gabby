function LoginBox(){
   return(
       <div className="bg-[#FFE499] rounded-4xl outline-3 outline-offset-3 w-xl h-150">
           <div className="text-center mt-4">
               <h1 className="text-5xl font-google-sans text-shadow-lg/10 mt-8">Create Account</h1>
           </div>
           <div className="m-20 justify-center-safe">
               <form action="">
                   <label For="firstNameBox" className="font-google-sans">First Name</label>
                   <input type="text" name="" id="firstNameBox" className="w-100 border-b text-2xl outline-none"/>
                   <br />
                   <br />
                   <label For="lastNameBox" className="font-google-sans">Last Name</label>
                   <input type="text" name="" id="lastNameBox" className="w-100 border-b text-2xl outline-none"/>
                   <br />
                   <br />
                   <label For="emailBox" className="font-google-sans">Email</label>
                   <input type="email" name="" id="emailBox" className="w-100 border-b text-2xl outline-none"/>
                   <br />
                   <br />
                   <label For="pwBox" className="font-google-sans">Password</label>
                   <input type="password" name="" id="pwBox" className="w-100 border-b text-2xl outline-none"/>
                   <br />
                   <br />
                   <label For="confirmPwBox" className="font-google-sans">Confirm Password</label>
                   <input type="password" name="" id="confirmPwBox" className="w-100 border-b text-2xl outline-none"/>
                   <br />
                   <br />
                   <input type="checkbox" className="accent-black" name="" id="termsCheckBox" value="Yes"/>
                   <label for="termsCheckBox" className="ml-3 font-google-sans">I agree to the Terms & Conditions</label>
                   <br />
                   <button type="submit" className="bg-white rounded-2xl w-[200px] h-[60px] text-2xl mt-5 cursor-pointer font-google-sans mx-auto block transition duration-150 ease-in-out hover:scale-110">Create Account</button>     
               </form>
           </div>
       </div>
   );
}


export default LoginBox
