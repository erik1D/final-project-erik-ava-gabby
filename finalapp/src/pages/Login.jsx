import LoginBox from "../components/LoginBox";
import Heading from '../components/Heading';

// bg-

function Login(){
   return(
    <div className="min-h-screen bg-linear-to-b from-gray-200 to-gray-400">
        <Heading myTitle="LOGIN PAGE"/>
       <div className="flex justify-center mt-10">
           <LoginBox/>
       </div>
    </div>
   );
}


export default Login


