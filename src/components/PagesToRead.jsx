import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredReadBooks } from "../utility/localStorage";
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from "recharts";

const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

const TriangleBar = (props) => {
    const { x, y, width, height } = props;
    return (
        <path d={`M ${x},${y + height} L ${x + width / 2},${y} L ${x + width},${y + height} Z`} fill={getRandomColor()} />
    );
};

const PagesToRead = () => {
    const books = useLoaderData();
    const [readPages, setReadPages] = useState([]);

    useEffect(() => {
        const storedReadBooks = getStoredReadBooks();
        if (books.length > 0) {
            const readPages = books.filter(book => storedReadBooks.includes(book.Id));
            setReadPages(readPages);
        }
    }, [books])
    return (
        <div className="flex justify-center mt-10 mx-10 py-16 rounded-xl bg-orange-50">
            <BarChart
                width={1000}
                height={400}
                data={readPages}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="bookName" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} />
            </BarChart>
        </div>
    );
};

export default PagesToRead;