function ContactBox() {
    return (
        <div className="bg-white p-6 rounded-lg shadow-lg mt-10 mx-auto max-w-lg border border-gray-200">
            <h3 className="text-xl font-bold mb-4 text-yellow-500">Contact Us</h3>
            <p className="text-gray-700 mb-4">Have questions or feedback? Reach out to us!</p>
            <div className="space-y-2">
                <p className="text-gray-700">
                    <span className="font-medium">Email:</span> 
                    <a href="mailto:impasta@gmail.com" className="text-yellow-500 hover:underline ml-1">impasta@gmail.com</a>
                </p>
                <p className="text-gray-700">
                    <span className="font-medium">Phone:</span> 
                    <span className="ml-1">xxx-xxx-xxxx</span>
                </p>
                <p className="text-gray-700">
                    <span className="font-medium">Instagram:</span> 
                    <a href="" target="_blank" rel="noopener noreferrer" className="text-yellow-500 hover:underline ml-1">@impasta</a>
                </p>
                <p className="text-gray-700">
                    <span className="font-medium">Twitter:</span> 
                    <a href="" target="_blank" rel="noopener noreferrer" className="text-yellow-500 hover:underline ml-1">@impasta</a>
                </p>
            </div>
        </div>
    );
}

export default ContactBox
