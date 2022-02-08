import { SearchIcon } from "@heroicons/react/solid";

const SearchNews = ({ searchValue, setSearchValue, handleSearchSubmit }) => {
  return (
    <div className="fixed z-10 inset-x-0 top-24 bg-gray-200 pb-8">
      <form
        onSubmit={handleSearchSubmit}
        className="container flex justify-center mx-auto"
      >
        <div className="relative mt-6 ">
          <div className="absolute top-4 left-3">
            <SearchIcon className="h-6 w-6 text-gray-400 z-20 hover:text-gray-500" />
          </div>
          <input
            type="text"
            className="h-14 w-96 pl-10 pr-20 rounded-lg z-0 focus:shadow focus:outline-none"
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
            placeholder="Search anything..."
          />
          <div className="absolute top-2 right-2">
            <button
              onSubmit={handleSearchSubmit}
              className="h-10 w-20 text-white rounded-lg bg-red-500 hover:bg-red-600"
            >
              Search
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchNews;
