import { useState } from "react";

export function CommentButton (){
    const [likes, setLikes] = useState(false);
    return(
        <button onClick={() => setLikes(likes + 1)} className=" rounded-4xl w-20 h-10 ml-7 mr-7 mt-2">
            <div>
                <span className="text-7xl">💭</span>     
                <span className="text-xl font-google-sans">{likes}</span>      
            </div>
        </button>
    );
}

export default CommentButton