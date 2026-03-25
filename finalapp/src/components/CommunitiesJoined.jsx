function CommunitiesJoined({com1, com2, com3}){
return(
    <div className="bg-[#FFE499] w-200 h-50 rounded-2xl p-3">
        <ul className="text-left font-google-sans text-2xl space-y-6">
            <li>* {com1}</li>
            <li>* {com2}</li>
            <li>* {com3}</li>
        </ul>
    </div>
);

}

export default CommunitiesJoined