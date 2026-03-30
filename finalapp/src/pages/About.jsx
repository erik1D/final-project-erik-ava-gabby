import Heading from "../components/Heading";
import AvaBabyPic from '../assets/AvaBabyPic.jpeg';
import ErikBabyPic from '../assets/ErikBabyPic.jpeg';
import GabbyBabyPic from '../assets/GabbyBabyPic.jpeg';

function About() {
  const developers = [
    {
      name: "Erik Diaz", 
      role: "Lead Coder", 
      bio: "I like games.", 
      image: ErikBabyPic
    },
    { 
      name: "Gabby Lu", 
      role: " Developer", 
      bio: "I like boba.", 
      image: AvaBabyPic
    },
    { 
      name: "Avalynn Lau", 
      role: "Designer", 
      bio: "I like cats.", 
      image: GabbyBabyPic
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      <Heading myTitle="MEET THE DEVELOPERS" />

      <div className="bg-[#FFE499]  border-blue-500 p-4 mt-10 mb-8 max-w-6xl mx-auto shadow-sm">
  <p className="text-black-800 font-medium">
    <strong>Our Mission:</strong> Our mission is to blah blah blah...
  </p>
      </div>

      {}

<div className="flex flex-wrap justify-center gap-6">
  {developers.map((dev) => (
    <div
      key={dev.name}
      className="bg-white w-100 p-6 rounded-xl shadow-md border border-gray-200 flex flex-col items-center text-center transition duration-150 ease-in-out hover:scale-110"
    >
      <img 
        src={dev.image} 
        alt={dev.name} 
        className="w-24 h-24 bg-gray-300 rounded-full mb-4 object-cover"
      />
      <h3 className="text-xl font-bold text-gray-800">{dev.name}</h3>
      <p className="text-lg text-[#FFC933]">{dev.role}</p>
      <p className="text-gray-600 mt-2">{dev.bio}</p>
    </div>
  ))}
</div>
    </div>
  );
}

export default About;