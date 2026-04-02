import Heading from "../components/Heading";
import ViewPost from "../components/ViewPost";
import WomanPost from "../assets/WomanWorkingPost.png"
import StudentPic from './../assets/StudentsPic.png';
import Quote from "../components/Quote";

function Home() {
  return (
    <div className="min-h-screen bg-[#FFF8E5] ">
    <Heading myTitle="HOME PAGE" subText="Welcome!"/>
    <div className="quote flex justify-center mt-10">
        <Quote randomQuote="Be yourself; everyone else is already taken" author= "Oscar Wilde" />
    </div>

    <br></br>
    <ViewPost imagePost={WomanPost}/>
    <ViewPost imagePost={StudentPic}/>
    </div>
  );
}

export default Home;
