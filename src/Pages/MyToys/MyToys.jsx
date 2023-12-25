import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myJobs, setMyJobs] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/myToys/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMyJobs(data);
      });
  }, []);

  return (
    <div>
      <p className="text-center text-2xl"> My toys page {myJobs.length} </p>
    </div>
  );
};

export default MyToys;
