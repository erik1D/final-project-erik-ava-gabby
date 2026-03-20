import Heading from "../components/Heading";
import ViewPost from "../components/ViewPost";
import WomanPost from "../assets/WomanWorkingPost.png"

function Home() {
  return (
    <div>
    <Heading myTitle="WELCOME TO THE HOME PAGE"/>
    <ViewPost imagePost={WomanPost}/>
    </div>
  );
}

export default Home;
