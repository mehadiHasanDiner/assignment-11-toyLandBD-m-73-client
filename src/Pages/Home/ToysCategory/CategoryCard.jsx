import { Link } from "react-router-dom";

const CategoryCard = ({ categories }) => {
  const { _id, name, price, image, rating, category, description } = categories;
  return (
    <div>
      <div className="card w-full bg-base-100 shadow-xl">
        <figure className="px-5 pt-8">
          <img src={image} alt={category} className="rounded-xl h-64" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name.slice(0, 23)}</h2>
          <p>Price: ${price}</p>
          <p>Rating: {rating}</p>
          <div className="card-actions">
            <Link to={`categories/${_id}`}>
              <button className="btn btn-warning">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
