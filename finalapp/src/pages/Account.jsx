import Heading from '../components/Heading';
import LoginBox from '../components/AccountBox';


function Account(){
   return(
    <div className="bg-[#FFF8E5] min-h-screen">
        <Heading myTitle="ACCOUNT PAGE"/>
       <div className="flex justify-center mt-10">
           <LoginBox/>
       </div>
    </div>
   );
}


export default Account


