function SearchGrid({img1,img2,img3}){
    return(
        <div className="grid grid-cols-3 auto-rows-fr gap-4 m-5 h-60">
            <div className="bg-gray-400 rounded-3xl row-span-1 overflow-hidden border-gray-400 border-2">
                <img src={img1} alt="" className="object-cover"/></div>
            <div className="bg-gray-400 rounded-3xl row-span-1 overflow-hidden border-gray-400 border-2">
                <img src={img2} alt="" className="object-cover"/></div>
            <div className="bg-gray-400 rounded-3xl row-span-1 overflow-hidden border-gray-400 border-2">
                <img src={img3} alt="" className="object-cover"/></div>
        </div>
    );
}

export default SearchGrid