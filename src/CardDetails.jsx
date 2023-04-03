import React from "react";

function CardDetails({
  heading,
  rating,
  subHeading,
  price,
  strikeThroughPrice,
}) {
  function calculateDiscount(costPrice, sellingPrice) {
    const discountPercentage = Math.round(
      ((costPrice - sellingPrice) / costPrice) * 100
    );
    return discountPercentage;
  }

  return (
    <div className="card-details">
      <div className="details-top">
        <div className="heading">{heading}</div>
        <div className="rating">
          {rating}
          <span className="star-icon">&#9733;</span>
        </div>
      </div>
      <div className="sub-heading">{subHeading}</div>
      <div className="price">
        ₹{price} <span className="strike-through">₹{strikeThroughPrice}</span>{" "}
        <span className="discount">
          {calculateDiscount(strikeThroughPrice, price)}% OFF
        </span>
      </div>
    </div>
  );
}

export default CardDetails;
