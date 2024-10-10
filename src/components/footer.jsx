import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <>
      <div
        className="container-fluid pb-5"
        style={{ height: "auto", backgroundColor: "#000" }}
      >
        <div className="container mt-5">
          <div className="row pt-5" style={{
            borderBottom:'1px solid #666',
            paddingBottom:'25px'
          }}>
            <div className="col-lg-4 pt-4 pb-4">
              <h2
                style={{
                  color: "#fff",
                  fontSize: "1.7rem",
                  fontFamily: "Jost, sans-serif",
                }}
              >
                Subscribe Newsletter
              </h2>
              <p
                style={{
                  color: "#fff",
                  fontFamily: "poppins",
                  fontSize: "0.9rem",
                }}
              >
                Subscribe newsletter to get 5% on all products.
              </p>
            </div>
            <div className="col-lg-4 pt-4">
              <div>
                <input
                  type="text"
                  placeholder="Enter your email"
                  style={{
                    height: "50px",
                    width: "70%",
                    marginTop: "8px",
                    fontFamily: "poppins",
                    padding: "10px",
                    outline: "none",
                  }}
                />
                <button
                  style={{
                    height: "50px",
                    width: "30%",
                    backgroundColor: "#ff201e",
                    color: "#fff",
                    fontFamily: "poppins",  
                  }}
                >
                  Subscribe
                </button>
              </div>
            </div>
            <div
              className="col-lg-4 pt-4"
              style={{
                position: "relative",
              }}
            >
              <div>
                <FontAwesomeIcon
                  icon={faFacebook}
                  style={{
                    color: "#666",
                    height: "25px",
                    position: "absolute",
                    right: "135",
                    top: "55px",
                  }}
                />
                <FontAwesomeIcon
                  icon={faInstagram}
                  style={{
                    color: "#666",
                    height: "25px",
                    position: "absolute",
                    right: "90",
                    top: "55px",
                  }}
                />
                <FontAwesomeIcon
                  icon={faYoutube}
                  style={{
                    color: "#666",
                    height: "25px",
                    position: "absolute",
                    right: "40",
                    top: "55px",
                  }}
                />
              </div>
            </div>
          </div>
          <div className="row pt-3">
            <div className="col-lg-3 col-md-3 col-sm-12 mt-5">
             <img src="https://preview.colorlib.com/theme/capitalshop/assets/img/logo/logo2_footer.png.webp" alt="logo" />
            </div>
            <div className="col-lg-2 col-md-3 col-sm-12">
              <h5
                className="text-light mt-5"
                style={{
                  fontFamily: "Jost, sans-serif",
                  fontWeight:'normal',
                }}
              >
                Shop Men
              </h5>
              <p
                className="lh-base pt-4"
                style={{ color: "#918989", fontFamily: "poppins" }}
              >
                Track Order
              </p>
              <p
                className="lh-base"
                style={{ color: "#918989", fontFamily: "poppins" }}
              >
                Returns
              </p>
              <p
                className="lh-base"
                style={{ color: "#918989", fontFamily: "poppins" }}
              >
                Shipping
              </p>
              <p
                className="lh-base"
                style={{ color: "#918989", fontFamily: "poppins" }}
              >
                FAQ's
              </p>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-12">
              <h5
                className="fw-bold text-light mt-5"
                style={{ fontFamily: '"Times New Roman", Times, serif' }}
              >
                GET IN TOUCH
              </h5>
              <p
                className="lh-base pt-4"
                style={{ color: "#918989", fontFamily: "poppins" }}
              >
                Any questions? Let us know in store at 8th floor, 379 Hudson St,
                New York, NY 10018 or call us on (+1) 96 716
              </p>
              <a href="" className="ic">
                <i
                  className="fa-brands fa-facebook fs-5 mt-2 me-2"
                  style={{ color: "#918989" }}
                />
              </a>
              <a href="" className="ic">
                <i
                  className="fa-brands fa-instagram fs-5 mt-2 me-2"
                  style={{ color: "#918989" }}
                />
              </a>
              <a href="" className="ic">
                <i
                  className="fa-brands fa-pinterest fs-5 mt-2 me-2"
                  style={{ color: "#918989" }}
                />
              </a>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-12">
              <h5
                className="fw-bold text-light mt-5 ms-4"
                style={{ fontFamily: '"Times New Roman", Times, serif' }}
              >
                NEWSLETTER
              </h5>
              <div class="group2">
                <svg viewBox="0 0 24 24" aria-hidden="true" class="search-icon">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="search-icon"
                  ></FontAwesomeIcon>
                </svg>

                <input className="input" type="email" placeholder="Email..." />
              </div>

              <button className="button mt-4 ms-4">Subscribe</button>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-12">
              <h5
                className="fw-bold text-light mt-5 ms-4"
                style={{ fontFamily: '"Times New Roman", Times, serif' }}
              >
                NEWSLETTER
              </h5>
              <div class="group2">
                <svg viewBox="0 0 24 24" aria-hidden="true" class="search-icon">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="search-icon"
                  ></FontAwesomeIcon>
                </svg>

                <input className="input" type="email" placeholder="Email..." />
              </div>

              <button className="button mt-4 ms-4">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Footer;
