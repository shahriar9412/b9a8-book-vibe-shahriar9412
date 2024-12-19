
const Next = ({next}) => {
    
    return (
        <div className="p-3 border border-gray-300 rounded-2xl">
            <h1 className="text-3xl py-3">Book name: <span className="text-orange-500">{next.book_name}</span></h1>
            <h1>Summary: {next.summary}</h1>
        </div>
    );
};

export default Next;