function Quote ({randomQuote, author}) {
    return (
        <div className="quote text-center bg-gray-300 border-t-4 text-2xl font-google-sans p-[30px] select-none hover:shadow-xl">
            <h2>"{randomQuote}"</h2>
            <br></br>
            <p>- {author}</p>
        </div>
    );
}


export default Quote
