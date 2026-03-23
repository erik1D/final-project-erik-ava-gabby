import LoginBox from "../components/LoginBox";
import Heading from '../components/Heading';

function Login(){
   return(
    <>
        <Heading myTitle="Login Page"/>
       <div className="flex items-center justify-center mt-10">
           <LoginBox/>
       </div>
      </> 
   );
}


export default Login
