import { Link } from "react-router-dom";
const NavBarCompo = () => {
  return (
    <div className="navbardiv ">
      <nav className="navbar navbar-expand-lg bg-body-tertiary py-3">
        <div className="container">
          <Link to="/" className="navbar-brand" >ElNaggar</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page" >Home</Link>
              </li>
              <li className="nav-item">
                <Link to="product" className="nav-link" >Products</Link>
              </li>
              <li className="nav-item">
                <Link to="feature" className="nav-link" >Feature</Link>
              </li>
              <li className="nav-item">
                <Link to="contact" className="nav-link" >Contact</Link>
              </li>
              <li className="nav-item">
                <Link to="details" className="nav-link" >Deatils</Link>
              </li>
              
              <li className="nav-item">
                <Link to="about" className="nav-link" href="/#">About</Link>
              </li>
            </ul>
            
          </div>
        </div>
      </nav>
      
    </div>
  );
}

export default NavBarCompo;
