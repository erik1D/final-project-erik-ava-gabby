import Heading from "../components/Heading";

function About() {
  const developers = [
    {
      name: "Erik Diaz", 
      role: "Lead Coder", 
      bio: "I scam kids.", 
      image: "" 
    },
    { 
      name: "Gabby Lu", 
      role: " Developer", 
      bio: "I like boba.", 
      image: "" 
    },
    { 
      name: "Avalynn Lau", 
      role: "Designer", 
      bio: "I like cats.", 
      image: "" 
    }
  ];

  return (
    <div className="bg-gray-500 min-h-screen p-8">
      <Heading myTitle="MEET THE DEVELOPERS" />

      <div className="bg-blue-100  border-blue-500 p-4 mt-10 mb-8 max-w-6xl mx-auto shadow-sm">
  <p className="text-black-800 font-medium">
    <strong>Our Mission:</strong> This is our mission blah blah blah...
  </p>
      </div>

      {}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 max-w-6xl mx-auto">
        {developers.map((dev) => (
          <div key={dev.name} className="bg-white p-6 rounded-xl shadow-md border border-gray-200 flex flex-col items-center text-center">
            <img 
              src={dev.image} 
              alt={dev.name} 
              className="w-24 h-24 bg-gray-300 rounded-full mb-4 object-cover"
            />
            <h3 className="text-xl font-bold text-gray-800">{dev.name}</h3>
            <p className="text-lg text-blue-500">{dev.role}</p>
            <p className="text-gray-600 mt-2">{dev.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;