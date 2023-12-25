import { useLoaderData } from "react-router-dom";
import Banner from "../../Shared/Banner";
import AllToysRow from "./AllToysRow";

const AllToys = () => {
  const allToysData = useLoaderData();

  return (
    <div>
      <Banner>All Toy Page</Banner>
      <p className="text-center text-2xl"> All toys page</p>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>SL</th>
              <th>Toy's Details</th>
              <th>Seller Name & Email</th>
              <th>Category</th>
              <th>Price</th>
            </tr>
          </thead>

          <tbody>
            {
              allToysData.map((toyData, index) =><AllToysRow key={toyData._id} toyData={toyData} index={index}></AllToysRow>)
            }
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
