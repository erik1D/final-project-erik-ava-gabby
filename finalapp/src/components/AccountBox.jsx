function LoginBox(){
   return(
       <div className="bg-[#FFE499] rounded-4xl outline-3 outline-offset-3 w-full max-w-xl p-8 md:p-10 mx-4 md:mx-0">
           <div className="text-center">
               <h1 className="text-4xl md:text-5xl font-google-sans text-shadow-lg/10 mb-6">Create Account</h1>
           </div>
           <div className="space-y-4">
               <form action="">
                   <label htmlFor="firstNameBox" className="font-google-sans">First Name</label>
                   <input type="text" name="" id="firstNameBox" className="w-full border-b text-2xl outline-none"/>
                   <br />
                   <br />
                   <label htmlFor="lastNameBox" className="font-google-sans">Last Name</label>
                   <input type="text" name="" id="lastNameBox" className="w-full border-b text-2xl outline-none"/>
                   <br />
                   <br />
                   <label htmlFor="emailBox" className="font-google-sans">Email</label>
                   <input type="email" name="" id="emailBox" className="w-full border-b text-2xl outline-none"/>
                   <br />
                   <br />
                   <label htmlFor="pwBox" className="font-google-sans">Password</label>
                   <input type="password" name="" id="pwBox" className="w-full border-b text-2xl outline-none"/>
                   <br />
                   <br />
                   <label htmlFor="confirmPwBox" className="font-google-sans">Confirm Password</label>
                   <input type="password" name="" id="confirmPwBox" className="w-full border-b text-2xl outline-none"/>
                   <br />
                   <br />
                   <div className="flex items-center space-x-2">
                       <input type="checkbox" className="accent-black" name="" id="termsCheckBox" value="Yes" />
                       <label htmlFor="termsCheckBox" className="font-google-sans">I agree to the Terms & Conditions</label>
                   </div>
                   <button type="submit" className="bg-white rounded-2xl w-[200px] h-[60px] text-2xl mt-6 cursor-pointer font-google-sans mx-auto block transition duration-150 ease-in-out hover:scale-110">Create Account</button>     
               </form>
           </div>
       </div>
   );
}


export default LoginBox
