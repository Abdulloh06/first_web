import logo from '../../assets/images/logo.png';
import google from '../../assets/images/google_play.png';
import appStore from '../../assets/images/app_store.png';

import "./NavbarStyles.scss";

function CustomNavbar() {
  return (
    <div className="navbar">
      <div style={{ display: "flex" }}>
        <img src={logo} alt="Landify Logo" className="logo" />
        <ul>
          <li><a href="#">Features</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Help</a></li>
        </ul>
      </div>
      <div>
        <img height="40px" width='135px' onClick="" src={require('../../assets/images/google_play.png')} />
        <img style={{ marginLeft: "12px" }} height="40px" width='135px' onClick="" src={require('../../assets/images/app_store.png')} />

      </div>
    </div>

  );
}

export default CustomNavbar;