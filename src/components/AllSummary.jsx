import { useLoaderData } from "react-router-dom";
import Summary from "./Summary";

const AllSummary = () => {
    const allSummary = useLoaderData();
    return (
        <div className="mx-20">
            <div className="grid grid-cols-1 gap-3">
                {
                    allSummary.map(summary => <Summary key={summary.Id} summary={summary}></Summary>)
                }
            </div>
        </div>
    );
};

export default AllSummary;