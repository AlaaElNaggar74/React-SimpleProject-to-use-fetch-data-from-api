import "../CssCompo/ProductCard.css"
const ProductCard = (props) => {
  return (
    <div className="ProductCardd">
      <div className="card">
        <img src={props.picturee} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <h6 className="pb-2">Price: {props.price}</h6>
          <a href="/#" className="btn btn-primary">Check</a>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
