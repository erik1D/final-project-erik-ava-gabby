function LoginBox(){
   return(
       <div className="bg-[#FFD666] rounded-4xl outline-3 outline-offset-3 w-xl h-150">
           <div className="text-center mt-4">
               <h1 className="text-5xl font-google-sans">Welcome Back!</h1>
           </div>
           <div className="m-20 justify-center-safe">
               <form action="">
                   <label For="emailBox" className="font-google-sans">Email</label>
                   <input type="email" name="" id="emailBox" className="w-100 text-2xl border-b outline-none"/>
                   <br />
                   <br />
                   <label For="pwBox" className="font-google-sans">Password</label>
                   <input type="password" name="" id="pwBox" className="w-100 text-2xl border-b outline-none"/>
                   <br />
                   <br />
                   <input type="checkbox" className="accent-black" name="" id="myCheckBox" value="Yes"/>
                   <label for="myCheckBox" className="ml-3 font-google-sans">Remember Me?</label>
                   <br />
                   <button type="submit" className="text-xl bg-[#FFF8E5] w-30 rounded-xl ml-35 mt-5 transition duration-150 ease-in-out hover:scale-110">Login</button>     
               </form>
           </div>
       </div>
   );
}


export default LoginBox
