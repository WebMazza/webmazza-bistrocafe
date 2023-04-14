import React from "react";
import { navData } from "../data";
import { Link } from "react-scroll";

const Nav = ({ closeNav }) => {
  return (
    <nav className="w-full h-full">
      <div className="h-full flex flex-col justify-center items-center gap-y-6 cursor-pointer pointer-events-auto">
        {navData.map((item) => {
          return (
            <Link
              to={item.id}
              className="hover:text-dark transition-all duration-300"
              onClick={closeNav}
            >
              {item.name}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;
