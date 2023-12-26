import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { MdLogout } from "react-icons/md";

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
          <div className=" flex items-center">
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
            <div className=" dropdown dropdown-bottom dropdown-end">
              <div tabIndex={0} role="button" className="avatar m-1">
                <div className="w-11 rounded-full  ring-2 ring-warning ring-offset-base-100 ring-offset-2">
                  <img src={user.photoURL} />
                </div>
              </div>
              <div
                tabIndex={0}
                className="dropdown-content z-30 card card-compact w-64 p-2 shadow bg-base-200 "
              >
                <div className="card-body items-center text-center">
                  <img className="w-11 rounded-full " src={user.photoURL} />
                  <h3 className="card-title">{user?.displayName}</h3>
                  <p className="badge badge-neutral">{user?.email}</p>
                  <button
                    onClick={handleSignOut}
                    className="btn btn-sm btn-outline"
                  >
                    <MdLogout />
                    Logout
                  </button>
                </div>
              </div>
            </div>
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
