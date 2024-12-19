import { Link } from "react-router-dom";


const Book = ({ book }) => {
    const { Id, image, tags, bookName, author, category, rating } = book;
    return (
        <Link to={`/book/${Id}`}>
            <div className="border border-gray-300 p-4 rounded-xl">
                <div className=" bg-orange-50 p-6 flex justify-center rounded-xl">
                    <img className="max-w-36 max-h-36" src={image} alt="" />
                </div>
                <div className="flex gap-6">
                    <h1 className="text-green-500 p-1 mx-2 my-5 font-bold bg-orange-50">{tags[0]}</h1>
                    <h1 className="text-green-500 p-1 mx-2 my-5 font-bold bg-orange-50">{tags[1]}</h1>
                </div>
                <h1 className="text-xl font-semibold">{bookName}</h1>
                <h1>By : {author}</h1>
                <div className="my-4">
                    <hr />
                </div>
                <div className="flex justify-between">
                    <h1>{category}</h1>
                    <h1>{rating}</h1>
                </div>
            </div>
        </Link>
    );
};

export default Book;