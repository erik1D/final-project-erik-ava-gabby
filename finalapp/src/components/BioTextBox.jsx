function Bio(){
    return(
        <div>
            <form action="" className="m-4">
                <textarea name="Biography" id="" placeholder="Edit Bio Here..." className="bg-[#FFF8E5] caret-[#997000] resize-none h-[150px] w-[400px] rounded-2xl p-3 focus:outline-3 outline-[#FFC933]"></textarea>
                <br />
                <input type="submit" value="Save" className="bg-[#FFE499] rounded-2xl w-[70px] mt-4 cursor-pointer transition duration-150 ease-in-out hover:scale-110 hover:bg-[#FFC933]"/>
            </form>
        </div>
    );
}

export default Bio
