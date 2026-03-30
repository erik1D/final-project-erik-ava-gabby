import dog from '../assets/Dog.png'

function ProfilePics(){
    return(
        <> 
        <div className=" bg-[#FFF8E5] w-60 m-4 rounded-2xl">
            <img src={dog} alt="" draggable="false"/>
            
        </div>
        </>
    );
}

export default ProfilePics