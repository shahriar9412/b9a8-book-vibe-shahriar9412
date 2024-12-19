import { useEffect, useState } from "react";
import Book from "./Book";

const FeaturedBooks = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch('Books.json')
            .then(res => res.json())
            .then(data => setBooks(data));
    }, [])

    return (
        <div>
            <h1 className="text-4xl font-semibold text-center mt-20 mb-10">Books</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                {
                    books.map(book => <Book key={book.Id} book={book}></Book>)
                }
            </div>

        </div>
    );
};

export default FeaturedBooks;