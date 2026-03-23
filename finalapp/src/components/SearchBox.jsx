function SearchBox(){
    return(
        <div className="flex mt-20 w-screen h-20 justify-center">
            <form action="">
                <input type="search" name="search" id="" placeholder="Community Name Here..." className="m-4 w-100 outline-none font-google-sans text-2xl border-b-2"/>
                <button className="inline text-3xl">🔍</button>
            </form>
        </div>
    );
}

export default SearchBox