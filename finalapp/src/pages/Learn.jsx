import Heading from "../components/Heading";
import Articles from "../components/Articles";
import LearnIS from "../components/LearnIS";


function Learn() {
    return (
       <div className="bg-[#FFF8E5] min-h-screen">
    <Heading myTitle="LEARN PAGE"/>

    <div>
        <LearnIS />
            {Articles()}


    </div>

    </div>
    );
}


export default Learn;
