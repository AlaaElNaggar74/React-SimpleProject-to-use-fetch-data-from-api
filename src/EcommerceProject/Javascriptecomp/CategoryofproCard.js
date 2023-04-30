import { Link } from "react-router-dom";
const CategoryofproCard = (props) => {
  return (
    <div className="CategoryofproCard">
      <div className="card">
        <img src={props.productfecat.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.productfecat.title}</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <h6 className="pb-2">Price: {props.productfecat.price}</h6>
          <Link to={`/param/${props.productfecat.id}`}  className="btn btn-primary">Check</Link>
        </div>
      </div>
    </div>
  );
}

export default CategoryofproCard;
