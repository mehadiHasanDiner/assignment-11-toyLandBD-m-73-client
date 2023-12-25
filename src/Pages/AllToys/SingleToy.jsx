import React from "react";
import BannerSingleToy from "../../Shared/BannerSingleToy";
import { useLoaderData } from "react-router-dom";

const SingleToy = () => {
  const singleToyData = useLoaderData();
  const { sellerName, toyName, description, price, quantity, postedBy, url } =
    singleToyData || {};
  return (
    <div>
      <BannerSingleToy>{singleToyData.toyName.slice(0, 30)}</BannerSingleToy>

      <div className="card lg:card-side bg-base-200 shadow-xl mt-8">
        <figure>
          <img className="h-[100%]" src={url} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl">{toyName}</h2>
          <p>
            <strong>Seller Name:</strong> {sellerName}
          </p>
          <p>
            <strong>Seller Email:</strong> {postedBy}
          </p>
          <p>
            <strong>Price: </strong> ${price}
          </p>
          <p>
            <strong>Quantity: </strong> {quantity}
          </p>
          <p>
            <strong>Description: </strong> {description}
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleToy;

// ( picture, toy name, seller name, seller email, price, rating, available quantity, and detail description)
