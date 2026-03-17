import Heading from "../components/Heading";
import AbtUsPics from "../components/AboutUsPics";
import Bio from "../components/BioTextBox";
import CommunitiesJoined from "../components/CommunitiesJoined";

function Profile() {
  return(
    <div>
      <Heading myTitle="PROFILE PAGE"/>
      <div className="flex justify-center">
        <AbtUsPics/>
        <Bio/>
      </div>
      <div className="flex justify-center mt-50">
        <CommunitiesJoined com1="Office workers" com2="Women's Group" com3="College Students"/>
      </div>

      <div className="flex justify-center mt-50">
        <CommunitiesJoined com1="Liked a post about welcome circle" com2="Joined Women's Group" com3="Liked a post about student get together"/>
      </div>
    </div>
  );
}

export default Profile;
