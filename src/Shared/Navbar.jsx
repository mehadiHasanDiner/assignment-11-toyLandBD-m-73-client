import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

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
        <h1 className="text-2xl font-bold ">Toy Land BD</h1>
      </div>
      <div>
        <Link className="mr-4" to="/">
          Home
        </Link>
        {user ? (
          <button onClick={handleSignOut} className="btn btn-sm">
            Sign Out
          </button>
        ) : (
          <Link to="/signIn">
            <button className="btn btn-sm">Sign In</button>
          </Link>
        )}
        <p>{user && user?.displayName}</p>
      </div>
    </div>
  );
};

export default Navbar;
