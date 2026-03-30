function Heading({myTitle}){
    return(
        <div className="text-center bg-linear-to-r from-[#FFE499] to-[#FFD666] border-t-4 border-dashed text-4xl font-google-sans p-[30px] select-none transition duration-150 ease-in-out hover:shadow-xl">
            <h1>{myTitle}</h1>
        </div>
    );
}

export default Heading;