import { useState } from "react";

const Results = ({ results }) => {
  const [visible, setvisible] = useState(4);
  const handleShowMore = () => {
    setvisible((prevValue) => prevValue + 4);
  };
  return (
    <div className={`mt-52 px-10 ${visible === 4 ? "h-screen" : "h-full"}`}>
      <div className="result-cards">
        {results.slice(0, visible).map((result, index) => (
          <div className="news-card" key={index}>
            <h1 className="font-bold text-xl ">{result.title}</h1>
            <div>
              <p className="text-sm text-slate-500">{result.content}</p>
            </div>
            <div className="p-2 truncate text-gray-600 hover:font-bold">
              <h1>Author: {result.author ? result.author : "Anonymous"}</h1>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-3 pb-4">
        {visible < results.length ? (
          <button
            onClick={handleShowMore}
            className=" w-36 px-4 py-3 h-12  text-white bg-red-500 mx-auto text-center rounded-md hover:bg-red-600"
          >
            Load More
          </button>
        ) : (
          <button
            onClick={() => setvisible(4)}
            className=" text-white w-36 px-4 py-3 h-12 bg-blue-500 mx-auto text-center rounded-md hover:bg-blue-700"
          >
            Show less
          </button>
        )}
      </div>
    </div>
  );
};

export default Results;
