
const Summary = ({summary}) => {
    return (
        <div className="p-3 border border-gray-300 rounded-2xl">
            <h1 className="text-3xl py-3">Book Name: <span className="text-blue-500">{summary.bookName}</span></h1>
            <h1>Review: {summary.review}</h1>
        </div>
    );
};

export default Summary;