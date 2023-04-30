import "../CssCompo/ProductList.css";
import ProductCard from "./ProductCard";
import ProductPic1 from "../../Media/Product-1.jpg"
import ProductPic2 from "../../Media/Product-2.jpg"
import ProductPic3 from "../../Media/Product-3.jpg"
import ProductPic4 from "../../Media/Product-4.jpg"
import ProductPic5 from "../../Media/Product-5.jpg"
import ProductPic6 from "../../Media/Product-6.jpg"
import ProductPic7 from "../../Media/Product-7.jpg"
import ProductPic8 from "../../Media/Product-8.jpg"
const ProductList = () => {
  return (
    <div className="ProductlistSection py-5 ">
      <h1 className="customsize">Our Products</h1>
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
            <ProductCard picturee={ProductPic1} title="Get fit at home" price="250.2$"/>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
            <ProductCard  picturee={ProductPic2} title="Shop by Category" price="20.1$"/>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
            <ProductCard   picturee={ProductPic3} title="Gaming accessories" price="120.5$"/>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
            <ProductCard  picturee={ProductPic4} title="Electronics" price="2635.7$"/>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12" >
            <ProductCard  picturee={ProductPic5} title="Shop by Category" price="780.3$"/>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
            <ProductCard  picturee={ProductPic6} title="Shop activity trackers " price="312.5$"/>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
            <ProductCard  picturee={ProductPic7} title="New arrivals "price="225.2$"/>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
            <ProductCard  picturee={ProductPic8} title="Dresses" price="315.26$"/>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default ProductList;
