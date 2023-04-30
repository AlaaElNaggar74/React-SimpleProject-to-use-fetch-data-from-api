import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const DisplayDetails = () => {
  let params = useParams();
  let [spicifyproduct, setspicifyproduct] = useState([]);
  let functionFetch = () => {
    fetch(`https://fakestoreapi.com/products/${params.pid}`)
      .then((res) => res.json())
      .then((data) => setspicifyproduct(data));
  };

  useEffect(() => {
    functionFetch();
  }, []);
  return (
    <div className="tabs">
      <div className="container">
        <div className="row">
          <div className="w-50">
            <img src={spicifyproduct.image} alt="" className="w-100 h-25" />
            <h1>
              <span className="text-danger">Title:</span> {spicifyproduct.title}
            </h1>
            <h3>
              <span className="text-danger">Category</span>:{" "}
              {spicifyproduct.category}
            </h3>
            <h3>
              <span className="text-danger">Price</span>: {spicifyproduct.price}
            </h3>
            <p>--------------------------------------------</p>
            <h3>
              <span className="text-danger">Description</span>:{" "}
              {spicifyproduct.description}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayDetails;
