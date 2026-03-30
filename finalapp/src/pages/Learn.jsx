import Heading from "../components/Heading";
import Articles from "../components/Articles";


function Learn() {
    return (
       <div>
    <Heading myTitle="LEARN PAGE"/>

    <div>
            {Articles()}


    </div>

    </div>
    );
}


export default Learn;
