
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { getStoredReadBooks, getStoredWishlist, saveReadBooks, saveWishlist } from "../utility/localStorage";

const BookDetails = () => {

    const books = useLoaderData();
    const { id } = useParams();
    const book = books.find(book => book.Id === parseInt(id));
    const { Id, image, bookName, author, category, review, tags, totalPages, publisher, yearOfPublishing, rating } = book;

    const handleAddRead = () => {
        const storedReadBooks = getStoredReadBooks();
        if (!storedReadBooks.includes(Id)) {
            saveReadBooks(Id);
            toast('Book added to read list successfully!');
        }
        else
            toast("You have already read this book!");
    }
    const handleAddWhishlist = () => {
        const storedReadBooks = getStoredReadBooks();
        const storedWishlist = getStoredWishlist();
        if (storedReadBooks.includes(Id))
            toast("You have already read this book!");
        else if (!storedWishlist.includes(Id)) {
            saveWishlist(Id);
            toast('Book added to wishlist successfully!');
        }
        else
            toast('Already added to wish list!');

    }
    return (
        <div className="flex flex-col lg:flex-row">
            <div className="w-[50%] p-6 bg-orange-50 rounded-xl m-8">
                <img src={image} alt="" />
            </div>
            <div className="w-[50%] mx-5">
                <div>
                    <h1 className="text-4xl font-semibold">{bookName}</h1>
                    <h1 className="text-2xl font-normal my-3">By : {author}</h1>
                    <hr />
                    <h1 className="text-2xl font-normal my-3">{category}</h1>
                    <hr />
                    <h1 className="my-3"><span className="font-bold">Review : </span>{review}</h1>
                    <div className="flex gap-5 my-3">
                        <h1 className="font-bold">Tag</h1>
                        <h1 className="text-green-500 font-semibold">#{tags[0]}</h1>
                        <h1 className="text-green-500 font-semibold">#{tags[1]}</h1>
                    </div>
                    <hr />
                    <h1 className="my-3">Number of pages: <span className="font-bold">{totalPages}</span></h1>
                    <h1>Publisher: <span className="font-bold">{publisher}</span></h1>
                    <h1 className="my-3">Year of Publishing: <span className="font-bold">{yearOfPublishing}</span></h1>
                    <h1 className="my-3">Rating: <span className="font-bold">{rating}</span></h1>
                </div>
                <div>
                    <button className="bg-white border font-bold border-gray-300 py-3 px-6 mx-3 rounded-xl my-2" onClick={handleAddRead}>Read</button>
                    <button className="bg-blue-500 text-white border border-gray-300 p-3 mx-3 my-2 rounded-xl" onClick={handleAddWhishlist}>Whishlist</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default BookDetails;
