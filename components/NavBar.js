import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="flex justify-between px-10 py-6">
      <Link href="/news">
        <h1 className="text-2xl animate-bounce">News App</h1>
      </Link>

      <ul className="flex space-x-3 items-center text-xl px-14">
        <Link href="/">
          <li className="px-12  py-2 hover:outline hover:rounded-md hover:bg-white hover:text-black ">
            Home
          </li>
        </Link>
        <Link href="/news">
          <li className="px-12 py-2 hover:outline hover:rounded-md hover:bg-white hover:text-black">
            Top Headings
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default NavBar;
