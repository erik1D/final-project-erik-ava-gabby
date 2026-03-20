import Heading from "../components/Heading";
import ViewPost from "../components/ViewPost";
import WomanPost from "../assets/WomanWorkingPost.png"
import Quote from "../components/Quote";

function Home() {
  return (
    <div>
    <Heading myTitle="WELCOME TO THE HOME PAGE"/>
    <div className="quote flex justify-center mt-50">
        <Quote randomQuote="Be yourself; everyone else is already taken" author= "Oscar Wilde" />
    </div>

    <br></br>
    <ViewPost imagePost={WomanPost}/>
    </div>
  );
}

export default Home;
