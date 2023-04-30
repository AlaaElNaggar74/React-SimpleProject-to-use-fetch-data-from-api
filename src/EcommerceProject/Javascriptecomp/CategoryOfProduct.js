import CategoryofproCard from "./CategoryofproCard";
import { useState, useEffect } from "react";
import { Button } from "bootstrap";

const CategoryOfProduct = () => {
  let [productdata, setproductdata] = useState([]);
  let [categodata, setcategodata] = useState([]);

  let FetchProduct = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setproductdata(data));
  };
  let FetchProductcat = () => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => setcategodata(data));
  };
  let specificcategory = (category) => {
    fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then((res) => res.json())
      .then((data) => setproductdata(data));
  };

  useEffect(() => {
    FetchProduct();
    FetchProductcat();
  }, []);

  let AllProductCat = productdata.map((element) => (
    <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12" key={element.id}>
      <CategoryofproCard productfecat={element} />{" "}
    </div>
  ));
  let categ = categodata.map((ele) => (
    <button
      key={ele}
      className="btn btn-warning me-3"
      onClick={() => {
        specificcategory(ele);
      }}
    >
      {ele}
    </button>
  ));
  return (
    <div className="CategoryOfProduct pb-5 ">
      <h1 className="customsize">Our Category With Fetch</h1>
      <div className="mt-5 text-center">
        <button
          className="btn btn-primary me-3 px-4 "
          onClick={() => {
            FetchProduct();
          }}
        >
          All
        </button>
        {categ}
      </div>
      <div className="container mt-5">
        <div className="row">{AllProductCat}</div>
      </div>
    </div>
  );
};

export default CategoryOfProduct;
