import LikeButton from "./LikeButton";
import CommentButton from "./CommentButton";
import SaveButton from "./SaveButton";

function ViewPost({imagePost}){
    return(
        <div className=" m-7 pt-17 bg bg-[#FFE499] w-[500px] h-[600px] rounded-4xl">
            <div className="m-auto w-[500px] h-[400px]">
                <img src={imagePost} alt=""/>
            </div>
            <div className="h-[135px] w-auto flex justify-center ">
                <LikeButton/>
                <CommentButton/>
                <SaveButton/>
            </div>
        </div>
    );
}

export default ViewPost