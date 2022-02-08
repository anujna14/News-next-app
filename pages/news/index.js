import { useState } from "react";

const News = ({ news }) => {
  const [visible, setvisible] = useState(4);
  const { articles } = news;
  const handleShowMore = () => {
    setvisible((prevValue) => prevValue + 4);
  };
  return (
    <div
      className={`mt-24 bg-gray-200 ${visible === 4 ? "h-screen" : "h-full"}`}
    >
      <div className=" relative grid grid-cols-1 gap-2 lg:grid-cols-3 lg:gap-x-8 md:grid-cols-2 md:gap-x-8 mx-6">
        {articles.slice(0, visible).map((article, index) => (
          <div
            className="w-full sm:h-30 mx-auto bg-white shadow-md  rounded-lg mt-6 px-6 py-4 transition ease-in  duration-100 hover:-translate-y-1 hover:scale-110"
            key={index}
          >
            <h1 className="font-bold text-xl">{article.title}</h1>
            <div>
              <p className="text-sm text-slate-500">{article.content}</p>
            </div>
            <div className="p-2 truncate text-gray-600 hover:font-bold">
              <h1>Author: {article.author ? article.author : "Anonymous"}</h1>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-3 pb-4">
        {visible < articles.length ? (
          <button
            onClick={handleShowMore}
            className=" text-white w-36 px-4 py-3 h-12 bg-red-500 mx-auto text-center rounded-md hover:bg-red-600"
          >
            Load More
          </button>
        ) : (
          <button
            onClick={() => setvisible(4)}
            className=" text-white w-36 px-4 py-3 h-12 bg-blue-500-500 mx-auto text-center rounded-md hover:bg-blue-600"
          >
            Show less
          </button>
        )}
      </div>
    </div>
  );
};

export default News;

export async function getStaticProps() {
  const response = await fetch(
    ` https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.API_KEY}`
  );
  const data = await response.json();
  // console.log("DATA", data);

  return {
    props: {
      news: data,
    },
  };
}
