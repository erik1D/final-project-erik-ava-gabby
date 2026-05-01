import { useState } from "react";
import Heading from "../components/Heading";
import SearchGrid from "../components/SearchGrid";
import SearchBox from "../components/SearchBox";
import CollegeStudents from '../assets/CollegeStudents.png';
import OfficeLogo from '../assets/OfficeLogo.png';
import WomenHR from '../assets/WomenHR.jpg';


function Search(){

const [search,setSearch] = useState ('');


const communities = [
   {'id':1,'community':"Office Workers", "description":"A community for office workers to share tips and advice on how to survive the daily."},
   {'id':2,'community':"Women in STEM", "description":"A community for women in STEM fields to share their favorite stories and discuss the themes and motifs in their work."},
   {'id':3,'community':"College Students", "description":"A community for college students to share resources and support each other in their academic journey."},
   {'id':4,'community':"Food Insecurity", "description":"A community for people facing food insecurity to share resources and support each other."},
   {'id':5,'community':"Senior Citizens", "description":"A community for senior citizens to share experiences and support each other."},
   {'id':6,'community':"Minority Groups", "description":"A community for minority groups to share their experiences and support each other."},
   {'id':7,'community':"Explorers", "description":"A community for people who love to explore new places and share their adventures."},
   {'id':8,'community':"Mentors", "description":"A community for mentors to share their wisdom and guide others in their personal and professional development."}
   {'id':9,'community':"drink enthusiasts", "description":"A community for people who love drinking to share their favorite places and drinks."}
   {'id':10,'community':"Book Lovers", "description":"A community for people who love reading to share their favorite books and discuss literature."}
   {'id':11,'community':"Art Lovers", "description":"A community for people who love art to share their favorite pieces and discuss the creative process."}
   {'id':12,'community':"Music Lovers", "description":"A community for people who love music to share their favorite songs and ones they made themselves."}
   {'id':13,'community':"Gaming Enthusiasts", "description":"A community for people who love gaming to share their favorite games and discuss the latest updates."}


]




const filteredCommunities = communities.filter( (community) => {
   const lowerSearch = search.toLowerCase();




   return (
       community.community.toLowerCase().includes(lowerSearch) ||
       community.description.toLowerCase().includes(lowerSearch)
   );
});




    return(
       <div>


        <Heading myTitle="Search For a Community"/>
        <SearchGrid img1={CollegeStudents} img2={OfficeLogo} img3={WomenHR}/>
           <input
           className = "border-b-2 m-4 outline-none font-google-sans text 2xl flex justify-center mt-10 p-2 w-1/2 flex w-screen h-20"
           type="text"
           placeholder="Search Community Here..."
           value = {search}
           onChange = {(event) => setSearch(event.target.value)}
           />




           {search !== "" &&
         
           <table className="border mt-2 mx-auto">
               <thead>
                   <tr >
                       <th className="border p-2">Community</th>
                       <th className="border p-2">Description</th>
                   </tr>
               </thead>
               <tbody>




                   {filteredCommunities.map((community) => (




             
                   <tr key={community.id}>
                       <td className="border p-2">{community.community}</td>
                       <td className="border p-2">{community.description}</td>
                   </tr>
                   ))}
               </tbody>
           </table>
            }












       </div>
   )


};




export default Search;





