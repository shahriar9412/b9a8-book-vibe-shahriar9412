import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredReadBooks } from "../utility/localStorage";
import Read from "./Read";


const ReadBooks = () => {
    const books = useLoaderData();
    const [readBooks, setReadBooks] = useState([]);

    useEffect(() => {
        const storedReadBooks = getStoredReadBooks();
        if (books.length > 0) {
            const booksRead = books.filter(book => storedReadBooks.includes(book.Id));
            setReadBooks(booksRead);
        }
    }, [books])

    return (
        <div className="grid grid-cols-1 gap-3">
            {
                readBooks.map(read => <Read key={read.Id} read={read}></Read>)
            }
        </div>
    );
};

export default ReadBooks;