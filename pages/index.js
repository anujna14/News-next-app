import { useState, useEffect } from "react";
import Link from "next/link";
import SearchNews from "../components/SearchNews";
import useSWR from "swr";
import { useRouter } from "next/router";
import Results from "../components/Results";

const NewsEverything = ({ results }) => {
  const [searchValue, setSearchValue] = useState("");
  const router = useRouter();
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    router.push(`/?value=${searchValue}`);
    setSearchValue("");
  };
  return (
    <div className="bg-gray-200">
      <SearchNews
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        handleSearchSubmit={handleSearchSubmit}
      />
      <Results results={results} />
    </div>
  );
};

export default NewsEverything;

export async function getServerSideProps(context) {
  const searchValue = context.query.value || "mumbai";
  const response = await fetch(
    `https://newsapi.org/v2/everything?q=${searchValue}&apiKey=${process.env.API_KEY}`
  );
  const data = await response.json();
  return {
    props: {
      results: data.articles,
    },
  };
}
