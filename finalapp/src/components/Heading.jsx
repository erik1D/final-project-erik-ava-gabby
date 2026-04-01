function Heading({myTitle, subText}){
    return(
        <div className="text-center bg-linear-to-r from-[#FFE499] to-[#FFD666] border-t-4 border-dashed font-google-sans p-7.5 select-none transition duration-150 ease-in-out hover:shadow-xl">
            <h1 className="text-4xl">{myTitle}</h1>
            <h3 className="text-3xl">{subText}</h3>
        </div>
    );
}

export default Heading;