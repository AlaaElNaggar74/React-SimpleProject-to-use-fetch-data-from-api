
 import Pic1 from '../../Media/Slider-1.jpg';
 import Pic2 from '../../Media/Slider-2.jpg';
 import Pic3 from '../../Media/Slider-3.jpg';
 import Pic4 from '../../Media/Slider-4.jpg';
import "../CssCompo/LandinPageOne.css"
const LandinPageOne = () => {
  return (
    <div className="Landingpage">
       <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={3} aria-label="Slide 4" />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={Pic1} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={Pic2} className="d-block w-100"  alt="..." />
          </div>
          <div className="carousel-item">
            <img src={Pic3} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={Pic4} className="d-block w-100 h500" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default LandinPageOne;
