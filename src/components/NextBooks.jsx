import { useLoaderData } from "react-router-dom";
import Next from "./Next";

const NextBooks = () => {
    const nextBooks = useLoaderData();
    return (

        <div className="mx-20">
            <div className="grid grid-cols-1 gap-3">
                {
                    nextBooks.map(next => <Next key={next.id} next={next}></Next>)
                }
            </div>
        </div>

    );
};

export default NextBooks;