import { Link } from "react-router-dom";

const Read = ({ read }) => {
    const { Id, image, bookName, author, category, tags, totalPages, publisher, yearOfPublishing, rating } = read;
    return (
        <div className="flex flex-col lg:flex-row my-5 p-4 border border-gray-300 rounded-xl">
            <div className="lg:w-[20%] max-w-44 bg-orange-50 p-3 rounded-xl mr-5">
                <img src={image} alt="" />
            </div>
            <div className="w-[80%]">
                <h1 className="text-2xl font-semibold">{bookName}</h1>
                <h1 className="font-medium">By : {author}</h1>
                <div className="flex flex-col lg:flex-row gap-5 my-3">
                    <h1 className="font-bold">Tag</h1>
                    <h1 className="text-green-500 font-semibold">#{tags[0]}</h1>
                    <h1 className="text-green-500 font-semibold">#{tags[1]}</h1>
                    <h1>Year of Publishing: {yearOfPublishing}</h1>
                </div>
                <div className="flex flex-col lg:flex-row gap-8">
                    <h1>Publisher: {publisher}</h1>
                    <h1>Page {totalPages}</h1>
                </div>
                <div className="flex flex-col lg:flex-row gap-5 my-5">
                    <h1 className="text-blue-500 py-1 px-2 rounded-2xl bg-blue-100">Category: {category}</h1>
                    <h1 className="text-orange-500 py-1 px-2 rounded-2xl bg-orange-100">Rating: {rating}</h1>
                <Link className="text-white bg-green-500 py-1 rounded-2xl px-2" to={`/book/${Id}`}>View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default Read;