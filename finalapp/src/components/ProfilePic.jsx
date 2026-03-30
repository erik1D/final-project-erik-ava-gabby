import dog from '../assets/Dog.png'

function ProfilePics(){
    return(
        <> 
        <div className=" bg-gray-300 w-60 rounded-r-lg roudned-bl-lg border-r-4 border-b-4 border-dotted m-4 hover:shadow-2xl">
            <img src={dog} alt="" draggable="false"/>
            
        </div>
        </>
    );
}

export default ProfilePics