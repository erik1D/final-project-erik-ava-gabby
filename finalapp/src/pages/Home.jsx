import Heading from "../components/Heading";
import ViewPost from "../components/ViewPost";
import WomanPost from "../assets/WomanWorkingPost.png"
import StudentPic from './../assets/StudentsPic.png';
import Quote from "../components/Quote";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { session, signOut } = UserAuth();
  const navigate = useNavigate();
  const firstName = session?.user?.user_metadata?.first_name
  const lastName = session?.user?.user_metadata?.last_name
  const userName = firstName && lastName ? `${firstName} ${lastName}` : session?.user?.email

  console.log(session);

  const handleSignOut = async (e) => {
    e.preventDefault()
    try {
      await signOut()
      navigate("/");
    } catch (err) {
      console.error(err)
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF8E5] ">
    <Heading myTitle="HOME PAGE" subText={`Welcome, ${userName}`} />
    <p 
    onClick={handleSignOut}
    className="border-2 inline-block px-4 py-3 mt-4 ml-3 cursor-pointer">Sign Out</p>
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
