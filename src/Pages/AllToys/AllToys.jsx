import { useLoaderData } from "react-router-dom";
import Banner from "../../Shared/Banner";
import AllToysRow from "./AllToysRow";

const AllToys = () => {
  const allToysData = useLoaderData();
  // console.log(allToysData);

  return (
    <div>
      <Banner>All Toy Page</Banner>

      <div className="overflow-x-auto mt-6 border-2 rounded-lg">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="bg-base-200">
              <th>SL</th>
              <th>Toy's Details</th>
              <th>Seller Name & Email</th>
              <th>Category</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {allToysData.map((toyData, index) => (
              <AllToysRow
                key={toyData._id}
                toyData={toyData}
                index={index}
              ></AllToysRow>
            ))}
            {/* row 1 */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;

// o	View Details button// o	Seller: (if available) show the name of the person who posted the toy
// o	Toy Name
// o	Sub-category
// o	Price
// o	Available Quantity
