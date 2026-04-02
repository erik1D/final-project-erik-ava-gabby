import Heading from "../components/Heading";
import ProfilePics from "../components/ProfileComp/ProfilePic";
import Bio from "../components/ProfileComp/BioTextBox";
import CommunitiesJoined from "../components/ProfileComp/CommunitiesJoined";

function Profile() {
  return(
    <div className="bg-[#FFF8E5]">
      <Heading myTitle="PROFILE PAGE"/>
      <div className="flex justify-center">
        <ProfilePics/>
        <Bio/>
      </div>
      <div className="flex flex-col justify-center items-center mt-50">
        <h1 className="inline-block text-5xl font-google-sans">Communities Joined</h1>
        <br />
        <CommunitiesJoined com1="Office workers" com2="Women's Group" com3="College Students"/>
      </div>

      <div className="flex flex-col justify-center items-center mt-50">
        <h1 className="inline-block text-5xl font-google-sans">Activity</h1>
        <br />
        <CommunitiesJoined com1="Liked a post about welcome circle" com2="Joined Women's Group" com3="Liked a post about student get together"/>
        <br />
        <br />
      </div>
    </div>
  );
}

export default Profile;
