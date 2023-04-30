import FetchProCard from "./FetchProCard";
import { useState, useEffect } from "react";

const FetchProlist = () => {
  let [productdata, setproductdata] = useState([]);

  let FetchProduct = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setproductdata(data));
  };

  useEffect(() => {
    FetchProduct();
  }, []);

  let AllProduct = productdata.map((element) =>
    element.id <= 8 ? (
      <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12" key={element.id}>
        <FetchProCard productfe={element} />
      </div>
    ) : (
      ""
    )
  );
  console.log(productdata);
  return (
    <div className="FetchProlist pb-5 ">
      <h1 className="customsize">Our Products With Fetch</h1>
      <div className="container mt-5">
        <div className="row">{AllProduct}</div>
      </div>
    </div>
  );
};

export default FetchProlist;
