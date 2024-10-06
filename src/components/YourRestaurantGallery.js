import './css/YourRestaurantGallery.css';
import './css/FontAwesomeAll.css';
import Gallery from './js/Gallery.js';
import ShowMenu from './js/menu.js';

function YourRestaurantGallery() {

  return (
    <>
      <header className="py-main-header">
        <div className="py-container py-container-flex">
          <div className="py-logo-container py-column py-column-50">
            <h1 className="py-logo">Your Restaurant</h1>
          </div>
          <div className="py-main-header-contactInfo py-column py-column-50">
            <p className="py-main-header-contactInfo-phone">
             <i className="fas fa-phone py-main-header-phone icon-phone"></i> 999-999-999
            </p>
            <p className="py-main-header-contactInfo-address">
              <i className="fas fa-map-marker-alt icon-location"></i> Caracas - Venezuela
            </p>
          </div>
        </div>
      </header>

      <nav className="py-main-nav">
        <div className="py-container py-container-flex">
          <button className="py-icon-menu" id="pybtn-menu" onClick={ShowMenu}>
            <span><i className="fa fa-bars"></i></span>
            <span className="py-none">X</span>
          </button>
          <ul className="py-menu" id="pymenu">
            <li className="py-menu-item">
              <a href="https://pedrotuarez.github.io/portfolio"
                className="py-menu-link">
                  Portfolio
              </a>
            </li>
            <li className="py-menu-item">
              <a href="https://pedrotuarez.github.io/yourrestaurant"
               className="py-menu-link" 
               onClick={activeLink}>
                 Home
              </a>
            </li>
            <li className="py-menu-item">
              <a href="https://pedrotuarez.github.io/yourrestaurant-about" 
               className="py-menu-link" 
               onClick={activeLink}>
                 About
              </a>
            </li>
            <li className="py-menu-item">
              <a href="https://pedrotuarez.github.io/yourrestaurant-gallery" 
               className="py-menu-link" 
               onClick={activeLink}>
                 Gallery
              </a>
            </li>
            <li className="py-menu-item">
              <a href="https://pedrotuarez.github.io/yourrestaurant-contact" 
               className="py-menu-link" 
               onClick={activeLink}>
                 Contact
              </a>
            </li>
          </ul>
          <div className="py-social-icon">
            <a href="https://facebook.com/" className="py-social-icon-link">
              <i className="fab fa-facebook-f .py-icon-facebook"></i>
            </a>
            <a href="https://x.com/" className="py-social-icon-link py-twitter">
              <svg xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 512 512"
                style={{
                  width: "23px", 
                  marginLeft: "2px",
                  marginRight: "6px",
                  paddingTop: "5px",
                  paddingLeft: "4px"
                }}
              >
                <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 
                  106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 
                  48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/>
              </svg>
            </a>
            <a href="https://gmail.com/" className="py-social-icon-link">
              <i className="far fa-envelope .py-icon-mail" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </nav>

      <Gallery/> 
       
      <footer className="py-main-footer">
        <div className="py-footer-container">
          <div className="py-footer-grid">
            <div className="py-column-grid">
              <h2 className="py-column-title">¿Why visit us?</h2>
              <p className="py-column-txt">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Alias blanditiis quo, temporibus inventore quas deserunt 
                neque. Numquam cum, molestias laboriosam Minim Quis.
              </p>
            </div>
            <div className="py-column-grid">
              <h2 className="py-column-title">Contact us</h2>
              <p className="py-column-txt">Caracas - Venezuela</p>
              <p className="py-column-txt">Phone: 999-999-999</p>
              <p className="py-column-txt">your@restaurant.com</p>
            </div>
            <div className="py-column-grid">
              <h2 className="py-column-title">Follow us on our social networks</h2>
              <p className="py-column-txt-f">
                <a href="https://www.facebook.com/">
                  <i class="fab fa-facebook-f py-icon-facebook"></i>
                  &nbsp;Facebook
                </a>
              </p>
              <p className="py-column-txt-x">
                <a href="https://x.com/">
                  <svg xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 512 512"
                    style={{
                      width: "15px", 
                      fill: "white", 
                      marginLeft: "-16px",
                      marginRight: "4px"
                    }}
                  >
                    <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 
                      106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 
                      48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/>
                  </svg>
                  &nbsp;Follow us on X
                </a>
              </p>
              <p className="py-column-txt-y">
                <a href="https://youtube.com/">
                  <i class="fab fa-youtube py-icon-youtube"></i> 
                  &nbsp;&nbsp;Visit our channel
                </a>
              </p>
            </div>
            
          </div>
        </div>
        <p className="py-copy">
          &copy; 2024 Your Restaurant 
          &nbsp;&nbsp;|&nbsp;&nbsp;
          All rights reserved&nbsp;&nbsp;|&nbsp;&nbsp;Design by 
          <span className="py-color-span"> &nbsp;@pedrotuarez</span>
        </p>
      </footer>
    </>
  )
}

export const activeLink = (e) => {
  if(e === "btnContact"){
    let link = document.querySelectorAll('.py-menu-link');

    for(let i = 0; i <= link.length - 1; i++){
      link[i].classList.remove('py-menu-link-select');
    }
    link[4].classList.add('py-menu-link-select');

  }else{
    let link = document.querySelectorAll('.py-menu-link');

    for(let i = 0; i <= link.length - 1; i++){
      if(link[i] !== e.target) {
        link[i].classList.remove('py-menu-link-select');
      }
    }
    e.target.classList.add('py-menu-link-select');
  }
}

export default YourRestaurantGallery;