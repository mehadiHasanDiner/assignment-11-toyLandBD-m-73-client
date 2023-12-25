import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { FaEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import UpdateMyToy from "./UpdateMyToy";
import { Link } from "react-router-dom";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/myToys/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setMyToys(data);
      });
  }, []);

  return (
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

        <tbody className="bg-orange-100">
          {myToys?.map((toy, index) => (
            <tr key={toy._id}>
              <th>{index + 1}</th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-16 h-28">
                      <img src={toy.url} alt={toy.toyName} />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{toy.toyName}</div>
                    <div className="text-sm opacity-50">
                      Quantity: {toy.quantity}
                    </div>
                    <div className="flex">
                      <Rating
                        style={{ maxWidth: 80 }}
                        value={toy.rating}
                        readOnly
                      />
                      <span className="ml-2">{toy.rating}</span>
                    </div>
                  </div>
                </div>
              </td>
              <td>
                {toy.sellerName}
                <br />
                <span className="badge badge-ghost badge-sm">
                  {toy.postedBy}
                </span>
              </td>
              <td>{toy.category}</td>
              <td>${toy.price}</td>
              <th>
                <Link
                  to={`/updateToy/${toy?._id}`}
                  htmlFor="my_modal_6"
                  className="btn btn-sm bg-green-400"
                >
                  <FaEdit />
                </Link>

                <button className="btn btn-sm bg-orange-500">
                  <MdDeleteOutline />
                </button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyToys;
