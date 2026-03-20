import { useState } from "react";

export function SaveButton (){
    const [likes, setLikes] = useState(false);
    return(
        <button onClick={() => setLikes(!likes)} className=" rounded-4xl w-20 h-10 mr-7 ml-7 mt-2">
            <div className="text-7xl">
            {likes ? "★" : "☆"}                
            </div>
        </button>
    );
}

export default SaveButton