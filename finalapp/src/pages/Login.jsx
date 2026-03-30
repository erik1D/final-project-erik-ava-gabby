import LoginBox from "../components/LoginBox";
import Heading from '../components/Heading';


function Login(){
   return(
    <div className="min-h-screen bg-[#FFF8E5] shadow-2xl">
        <Heading myTitle="LOGIN PAGE"/>
       <div className="flex justify-center mt-10">
           <LoginBox/>
       </div>
    </div>
   );
}


export default Login


