import { Link } from "react-router";

const Header = () => {
  return (
    <div className="fixed z-10 flex w-full justify-between bg-black pb-2 pl-5 pr-5 pt-10">
      <Link to="/about" className="">
        <img
          src={""}
          className="h-[20px] w-[20px] object-contain"
          alt="About"
        />
      </Link>
      <Link to="/new" className="-translate-y-2 translate-x-2">
        <img src={""} className="h-[35px] w-[35px] object-contain" alt="Add" />
      </Link>
    </div>
  );
};

export default Header;
