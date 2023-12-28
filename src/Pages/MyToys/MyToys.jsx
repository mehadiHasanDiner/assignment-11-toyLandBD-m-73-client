import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import MyToyRow from "./MyToyRow";
import BannerSingleToy from "../../Shared/BannerSingleToy";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5000/myToys/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setMyToys(data);
      });
  }, [user, load]);

  return (
    <>
      <BannerSingleToy>My Toys All Data</BannerSingleToy>
      <div className="overflow-x-auto mt-6 border-2 rounded-lg">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="bg-orange-200">
              <th>SL</th>
              <th>Toy's Details</th>
              <th>Seller Name & Email</th>
              <th>Category</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody className="bg-base-100">
            {myToys?.map((toy, index) => (
              <MyToyRow
                toy={toy}
                index={index}
                key={toy._id}
                load={load}
                setLoad={setLoad}
              ></MyToyRow>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MyToys;
