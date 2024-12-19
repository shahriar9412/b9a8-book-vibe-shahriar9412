import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="flex flex-col lg:flex-row my-10 bg-orange-50 py-16 rounded-xl">
            <div className="px-3 lg:px-24">
                <h1 className="text-3xl lg:text-6xl my-10">Books to freshen up
                    your bookshelf</h1>
                <Link className="bg-green-500 text-white px-2 lg:px-5 py-3 my-10 rounded-lg font-bold" to="/listed">View The List</Link>
            </div>
            <div className="px-5 py-5">
                <img src="/imagee.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;