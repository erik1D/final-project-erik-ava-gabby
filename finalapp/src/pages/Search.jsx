import Heading from "../components/Heading";
import SearchGrid from "../components/SearchGrid";
import SearchBox from "../components/SearchBox";
import CollegeStudents from '../assets/CollegeStudents.png';
import OfficeLogo from '../assets/OfficeLogo.png';
import WomenHR from '../assets/WomenHR.jpg';


function Search(){
    return(
        <div className="bg-[#FFF8E5] min-h-screen">
            <Heading myTitle="Search For a Community"/>
            <SearchBox/>
            <SearchGrid img1={CollegeStudents} img2={OfficeLogo} img3={WomenHR}/>
        </div>
    );
}

export default Search