import Heading from "../components/Heading";
import AbtUsPics from "../components/AboutUsPics";
import Bio from "../components/BioTextBox";

function Profile() {
  return(
    <div>
      <Heading myTitle="PROFILE PAGE"/>
      <div className="flex justify-center">
      <AbtUsPics/>
      <Bio/>
      </div>
    </div>
  );
}

export default Profile;
