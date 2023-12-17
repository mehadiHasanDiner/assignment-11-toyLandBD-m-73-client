import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user, logOut, loading } = useContext(AuthContext);

  const active = {
    color: "orange",
    fontWeight: "bold",
  };

  const inactive = {
    color: "black",
  };

  const handleSignOut = () => {
    logOut()
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className=" shadow-xl py-2 flex justify-between items-center md:px-24 lg:px-8 ">
      <div>
        <h1 className="text-2xl font-bold ">
          <Link to="/">Toy Land BD</Link>
        </h1>
      </div>
      <div className="flex items-center">
        <NavLink
          className="mr-4"
          style={({ isActive }) => (isActive ? active : inactive)}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className="mr-4"
          style={({ isActive }) => (isActive ? active : inactive)}
          to="/allToys"
        >
          All Toys
        </NavLink>
        
        <NavLink
          className="mr-4"
          style={({ isActive }) => (isActive ? active : inactive)}
          to="/blogs"
        >
          Blogs
        </NavLink>

        {user ? (
          <div>
            <NavLink
              className="mr-4"
              style={({ isActive }) => (isActive ? active : inactive)}
              to="/myToys"
            >
              My Toys
            </NavLink>
            <NavLink
              className="mr-4"
              style={({ isActive }) => (isActive ? active : inactive)}
              to="/addAToy"
            >
              Add a Toy
            </NavLink>
            <button onClick={handleSignOut} className="btn btn-sm">
              Sign Out
            </button>
          </div>
        ) : (
          <NavLink
            to="/signIn"
            style={({ isActive }) => (isActive ? active : inactive)}
          >
            <button className="btn btn-sm">Sign In</button>
          </NavLink>
        )}
        {/* {loading ? (
          <span className="loading loading-bars loading-lg"></span>
        ) : (
          <div>{user && user?.displayName}</div>
        )} */}
      </div>
    </div>
  );
};

export default Navbar;
