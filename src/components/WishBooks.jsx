import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredWishlist } from "../utility/localStorage";
import Wish from "./Wish";


const WishBooks = () => {
    const books = useLoaderData();
    const [wishList, setWishList] = useState([]);
    useEffect(() => {
        const storedWishlist = getStoredWishlist();
        if (books.length > 0) {
            const wishlist = books.filter(book => storedWishlist.includes(book.Id));
            setWishList(wishlist);
        }
    }, [books])

    return (
        <div className="grid grid-cols-1 gap-3">
            {
                wishList.map(wish => <Wish key={wish.Id} wish={wish}></Wish>)
            }
        </div>
    );
};

export default WishBooks;