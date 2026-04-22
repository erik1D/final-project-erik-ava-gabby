import dog from '../../assets/Dog.png'

function ProfilePics(){
    return(
        <div> 
        <div className=" bg-[#FFE499] w-60 rounded-2xl m-4">
            <img src={dog} alt="" draggable="false" className="rounded-2xl"/>
            
        </div>
            <input type="submit" value="Upload Image" className="bg-[#FFE499] rounded-2xl w-[150px] mt-4 mx-auto cursor-pointer transition duration-150 ease-in-out hover:scale-110 hover:bg-[#FFC933] block"/>   
        </div>
    );
}

export default ProfilePics