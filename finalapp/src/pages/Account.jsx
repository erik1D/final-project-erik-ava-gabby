import Heading from '../components/Heading';
import LoginBox from '../components/AccountBox';


function Account(){
   return(
    <div className="min-h-screen bg-[#FFF8E5] shadow-2xl">
        <Heading myTitle="ACCOUNT PAGE"/>
       <div className="flex justify-center mt-10">
           <LoginBox/>
       </div>
    </div>
   );
}


export default Account


