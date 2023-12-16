import React, { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Home = () => {
  const { createUser } = useContext(AuthContext);
  console.log(createUser);

  return (
    <div>
      <h1 className="text-5xl">This is my home  </h1>
    </div>
  );
};

export default Home;
