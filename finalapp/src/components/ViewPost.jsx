import LikeButton from "./LikeButton";
import CommentButton from "./CommentButton";
import SaveButton from "./SaveButton";

function ViewPost({imagePost}){
    return(
        <div className="bg-[#FFE499] w-full max-w-[500px] min-h-[600px] rounded-4xl shadow-xl overflow-hidden mx-auto">
            <div className="w-full h-[400px] overflow-hidden">
                <img src={imagePost} alt="" className="w-full h-full object-cover"/>
            </div>
            <div className="h-[135px] w-full flex items-center justify-center gap-4 p-4 bg-[#FFE499]">
                <LikeButton/>
                <CommentButton/>
                <SaveButton/>
            </div>
        </div>
    );
}

export default ViewPost