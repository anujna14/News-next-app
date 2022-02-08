import NavBar from "./NavBar";

const Header = () => {
  return (
    <header className="w-full fixed z-10 h-24 top-0 inset-x-0 m-auto bg-black text-white">
      <NavBar />
    </header>
  );
};

export default Header;
