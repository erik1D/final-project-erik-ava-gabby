function CommunitiesJoined({com1, com2, com3}){
return(
    <div className="bg-gray-300 w-200 h-50 rounded-r-lg roudned-bl-lg border-r-4 border-b-4 border-dotted p-3">
        <ul className="text-left font-google-sans text-2xl space-y-6">
            <li>* {com1}</li>
            <li>* {com2}</li>
            <li>* {com3}</li>
        </ul>
    </div>
);

}

export default CommunitiesJoined