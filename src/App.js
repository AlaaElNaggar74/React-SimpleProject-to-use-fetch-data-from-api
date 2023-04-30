// import logo from './logo.svg';
// import './App.css';
import NavBarCompo from "./EcommerceProject/Javascriptecomp/NavBarCompo";
import LandinPageOne from "./EcommerceProject/Javascriptecomp/LandinPageOne";
import ProductList from "./EcommerceProject/Javascriptecomp/ProductList";
import FetchProlist from "./EcommerceProject/Javascriptecomp/FetchProlist";
import CategoryOfProduct from "./EcommerceProject/Javascriptecomp/CategoryOfProduct";

import { Routes, Route } from "react-router-dom";
import TabAbout from "./EcommerceProject/Javascriptecomp/TabAbout";
import TapContact from "./EcommerceProject/Javascriptecomp/TapContact";
import TapDetails from "./EcommerceProject/Javascriptecomp/TapDetails";
import TapFeature from "./EcommerceProject/Javascriptecomp/TapFeature";
import TapProduct from "./EcommerceProject/Javascriptecomp/TapProduct";
import DisplayDetails from "./EcommerceProject/Javascriptecomp/DisplayDetails";

function App() {
  return (
    <div className="App">
      <NavBarCompo />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <LandinPageOne />
              <ProductList />
              <FetchProlist />
              <CategoryOfProduct />
            </>
          }
        />
        <Route path="/about" element={<TabAbout />} />
        <Route path="/contact" element={<TapContact />} />
        <Route path="/details" element={<TapDetails />} />
        <Route path="/feature" element={<TapFeature />} />
        <Route path="/product" element={<TapProduct />} />
        <Route path="/param/:pid" element={<DisplayDetails />} />
      </Routes>
    </div>
  );
}

export default App;
