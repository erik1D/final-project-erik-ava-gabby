import Heading from '../components/Heading';
function Inquiry() {
 const faqData = [
   {
     question: "How long does it take back to get a response? ",
     answer: "About 24-48 hours.",
   },
   {
     question: "How do we request a specific developer?",
     answer: "Please write in your inquiry the specific developer you would like to talk to. ",
   },
   {
     question: "How do we know if our inquiry was received?",
     answer: "You will receive a confirmation email once your inquiry is received.",
   },
 ];


 return (
  <>
  <Heading myTitle="INQUIRY"></Heading>
   <div className="bg-[#FFF8E5] min-h-screen p-8 flex flex-col items-center">
    


     <div className="w-full max-w-4xl space-y-4 mb-10">
       {faqData.map((item) => (
         <div key={item.question} className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
           <h3 className="text-lg font-bold text-yellow-500 mb-2">{item.question}</h3>
           <p className="text-gray-600">{item.answer}</p>
         </div>
       ))}
     </div>


     <div className="bg-white p-8 rounded-2xl shadow-xl border-2 border-[#FFD666] w-full max-w-2xl">
       <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">Send us a Message</h3>
      
       <div className="flex flex-col gap-4">
         <input
           type="email"
           placeholder="Your Email"
           className="p-3 border border-[#FFE499] rounded-lg outline-none focus:ring-2 focus:ring-yellow-500"
         />


         <textarea
           placeholder="Type your message here..."
           rows="5"
           className="p-3 border border-[#FFE499] rounded-lg outline-none focus:ring-2 focus:ring-yellow-500"
         ></textarea>


         <button className="bg-yellow-500 text-white font-bold py-3 rounded-lg hover:bg-[#FFE499] transition">
           Submit Inquiry
         </button>
       </div>
     </div>
    
   </div>
   </>
 );
}


export default Inquiry;