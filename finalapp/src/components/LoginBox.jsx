function LoginBox(){
   return(
       <div className="bg-gray-300 border-2 w-xl h-150">
           <div className="text-center mt-4">
               <h1 className="text-5xl font-google-sans">Login</h1>
           </div>
           <div className="m-20 justify-center-safe">
               <form action="">
                   <label For="emailBox" className="font-google-sans">Email</label>
                   <input type="email" name="" id="emailBox" className="w-100 bg-gray-400 text-2xl outline-none"/>
                   <br />
                   <br />
                   <label For="pwBox" className="font-google-sans">Password</label>
                   <input type="password" name="" id="pwBox" className="w-100 bg-gray-400 text-2xl outline-none"/>
                   <br />
                   <br />
                   <input type="checkbox" name="" id="myCheckBox" value="Yes"/>
                   <label for="myCheckBox" className="ml-3 font-google-sans">Remember Me?</label>
                   <br />
                   <button type="submit" className="text-xl bg-white w-30 rounded-2xl ml-35 mt-5">Login</button>     
               </form>
           </div>
       </div>
   );
}


export default LoginBox
