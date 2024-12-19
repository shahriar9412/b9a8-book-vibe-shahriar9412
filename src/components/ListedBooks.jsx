import { createContext, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

export const FilterContext = createContext(null);

const ListedBooks = () => {

    const [filter, setFilter] = useState();
    const handleBooksFilter = e => setFilter(e);

    return (
        <div className="mx-20">
            <h1 className="text-4xl font-semibold text-center">Books</h1>
            <FilterContext.Provider value={filter}>
                <div className="flex justify-center my-10">
                    <select className="bg-green-500 py-2 rounded-lg px-2 text-white focus:outline-none">
                        <option onClick={() => handleBooksFilter('Sort by')}>Sort by</option>
                        <option onClick={() => handleBooksFilter('Rating')}>Rating</option>
                        <option onClick={() => handleBooksFilter('Number of pages')}>Number of pages</option>
                        <option onClick={() => handleBooksFilter('Publisher year')}>Publisher year</option>
                    </select>
                </div>
            </FilterContext.Provider>

            <div className="navbar-start mx-20">
                <ul className="menu menu-horizontal px-1">
                    <li><NavLink to="/listed/read">Read Books</NavLink></li>
                    <li><NavLink to="/listed/wish">Wishlist Books</NavLink></li>
                </ul>
            </div>

            <Outlet></Outlet>
        </div >
    );
};

export default ListedBooks;