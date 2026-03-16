function Bio(){
    return(
        <div>
            <form action="" className="m-4">
                <textarea name="Biography" id="" placeholder="Bio Here..." className="bg-gray-300 resize-none outline-none h-[150px] w-[400px] rounded-r-lg roudned-bl-lg border-r-4 border-b-4 border-dotted p-3"></textarea>
                <br />
                <input type="submit" value="Save" className="bg-gray-300 rounded-xl w-[70px] mt-4"/>
            </form>
        </div>
    );
}

export default Bio