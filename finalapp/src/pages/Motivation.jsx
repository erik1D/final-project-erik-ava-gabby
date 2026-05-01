import { useState } from 'react';
import Heading from '../components/Heading';

function Motivation() {

    const quotes = [
        "Youre doing amazing!",
        "Keep up the great work!",
        "Believe in yourself and all that you are.",
        "You are capable of amazing things.",
        "Dont stop until youre proud.",
        "The only way to do great work is to love what you do.",
        "The future belongs to those who believe in the beauty of their dreams.",
        "You have intrinsic value and worth, regardless of your circumstances.",
        "Your potential is limitless.",
        "You are stronger than you think.",
        "Every day is a new opportunity to grow and improve.",
        "You are not alone in your struggles, and there are people who care about you.",
    ];

    const [currentQuote, setCurrentQuote] = useState(quotes[0]);

    const getRandomQuote = () => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        setCurrentQuote(quotes[randomIndex]);
    };

    return (
    <div className="min-h-screen bg-[#FFF8E5]">
        <Heading myTitle="MOTIVATION" />

        <div className="flex flex-col items-center mt-16 px-4">
            {}
            <div className="text-center mb-8">
                <p className="text-xl font-light text-gray-700 ">
                    Sometimes all you need is a <span className="font-semibold text-yellow-500">little shift</span> in perspective
                </p>
                <p className="text-sm text-gray-500 uppercase tracking-widest mt-1">Grab your boost below</p>
            </div>
            
            <div className="bg-white p-10 rounded-xl shadow-md border border-gray-100 max-w-md w-full flex flex-col items-center text-center">
                <p className="text-2xl font-medium text-gray-800 mb-8 min-h-[80px] flex items-center">
                    {currentQuote}
                </p>

                <button 
                    className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 shadow-sm" 
                    onClick={getRandomQuote}
                >
                    Get Motivated!
                </button>
            </div>
            
            <div className="w-32 h-1 bg-gray-200 rounded-full mt-8 opacity-20 blur-sm"></div>
        </div> 
    </div>
);

}

export default Motivation;