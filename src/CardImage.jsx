import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

const CardImage = ({ imageUrl, altText }) => {
  return (
    <div className="card-image">
      <div className="trending-label">Trending</div>
      <div className="heart-icon">
        <FontAwesomeIcon icon={faHeart} />
      </div>
      <img src={imageUrl} alt={altText} />
    </div>
  );
};

export default CardImage;
