import Heading from "../components/Heading";
import Articles from "../components/Articles";
import LearnIS from "../components/LearnIS";


function Learn() {
    return (
       <div>
    <Heading myTitle="LEARN PAGE"/>

    <div>
        <LearnIS />
            {Articles()}


    </div>

    </div>
    );
}


export default Learn;
