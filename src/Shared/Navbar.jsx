import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" shadow-xl py-2 flex justify-between items-center md:px-24 lg:px-8 ">
      <div>
        <h1 className="text-2xl font-bold ">Toy Land BD</h1>
      </div>
      <div>
        <Link className="mr-4" to="/">
          Home
        </Link>

        <Link to="/signIn">
          <button className="btn btn-sm">Sign In</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
