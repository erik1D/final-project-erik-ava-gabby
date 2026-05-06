import Heading from "../components/Heading";
import AvaBabyPic from '../assets/AvaBabyPic.jpeg';
import ErikBabyPic from '../assets/ErikBabyPic.jpeg';
import GabbyBabyPic from '../assets/GabbyBabyPic.jpeg';

function About() {
  const developers = [
    {
      name: "Erik Diaz", 
      role: "Lead Coder", 
      bio: "Hello, I'm Erik and I was born and raised in the Bay Area. I enjoy playing video games. My favorite color is blue!", 
      image: ErikBabyPic
    },
    { 
      name: "Gabby Lu", 
      role: " Developer", 
      bio: "Hello! I'm Gabby, I was born in Berkeley, but raised in Oakland. I enjoy getting boba and matcha. A fun fact about me is that I have a german shepherd named Odin!", 
      image: GabbyBabyPic
    },
    { 
      name: "Avalynn Lau", 
      role: "Designer", 
      bio: "Whats up you tube tube tube tube, I'm Ava and I was raised in the Bay Area. I like playing violin and getting boba with my friends. ", 
      image: AvaBabyPic
    }
  ];

  return (
    <div className="bg-[#FFF8E5] min-h-screen">
      <Heading myTitle="MEET THE DEVELOPERS" />

      <div className="bg-[#FFE499]  border-blue-500 p-4 mt-10 mb-8 max-w-6xl mx-auto shadow-md">
  <p className="text-black-800 font-medium">
    <strong>Our Mission:</strong> Our mission is to empower students who struggle with imposter syndrome by providing a platform that connects them with mentors and communities to help guide them through their educational and career journeys. Through our platform, we aim to create a supportive community where students can access valuable resources, spread awareness, and build lasting relationships that will help them achieve their goals.
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