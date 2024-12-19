import { NavLink } from "react-router-dom";


const Header = () => {

    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/listed">Listed Books</NavLink></li>
        <li><NavLink to="/pages">Pages to Read</NavLink></li>
        <li><NavLink to="/reviews">All Reviews</NavLink></li>
        <li><NavLink to="/coming">Coming Next</NavLink></li>
    </>

    return (
        <div className="navbar bg-base-100 px-16 my-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-green-500 font-extrabold text-3xl">Book Vibe</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn mr-3 bg-green-500 text-white">Sign In</a>
                <a className="btn bg-green-500 text-white">Sign Up</a>
            </div>
        </div>
    );
};

export default Header;