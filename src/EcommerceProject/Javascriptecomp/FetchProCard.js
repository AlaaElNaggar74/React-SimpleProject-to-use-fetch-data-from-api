import { Link } from "react-router-dom";

const FetchProCard = (props) => {
  return (
    <div className="ProductCardd">
      <div className="card">
        <img src={props.productfe.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.productfe.title}</h5>
          <h6>{props.productfe.category}</h6>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <h6 className="pb-2">Price:{props.productfe.price} </h6>
          <Link to={`/param/${props.productfe.id}`} className="btn btn-danger">
            Buy
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FetchProCard;
