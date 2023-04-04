import CardImage from "./CardImage";
import CardDetails from "./CardDetails";
import Button from "./Button";

export default function Card({ imageDetails }) {
  return (
    <div className="card">
      <CardImage
        imageUrl={imageDetails.imageUrl}
        altText={imageDetails.altText}
      />
      <CardDetails
        heading={imageDetails.heading}
        rating={imageDetails.rating}
        subHeading={imageDetails.subHeading}
        price={imageDetails.price}
        strikeThroughPrice={imageDetails.strikeThroughPrice}
      />
      <Button label="Add to Cart" />
    </div>
  );
}
