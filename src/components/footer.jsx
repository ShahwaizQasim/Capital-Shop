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
          <div
            className="row pt-5"
            style={{
              borderBottom: "1px solid #666",
              paddingBottom: "25px",
            }}
          >
            <div className="col-lg-4 col-md-4 col-sm-12 pt-4 pb-4">
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
            <div className="col-lg-4 col-md-4 col-sm-12 pt-4">
              <div className="footer-input">
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
              className="col-lg-4 col-md-4 col-sm-12 pt-4 pb-5"
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
                    top: "45px",
                  }}
                />
                <FontAwesomeIcon
                  icon={faInstagram}
                  style={{
                    color: "#666",
                    height: "25px",
                    position: "absolute",
                    right: "90",
                    top: "45px",
                  }}
                />
                <FontAwesomeIcon
                  icon={faYoutube}
                  style={{
                    color: "#666",
                    height: "25px",
                    position: "absolute",
                    right: "40",
                    top: "45px",
                  }}
                />
              </div>
            </div>
          </div>
          <div className="row pt-3">
            <div className="col-lg-3 col-md-4 col-sm-12 mt-5">
              <img
                src="https://preview.colorlib.com/theme/capitalshop/assets/img/logo/logo2_footer.png.webp"
                alt="logo"
              />
            </div>
            <div className="col-lg-2 col-md-4 col-sm-12">
              <h5
                className="text-light mt-5"
                style={{
                  fontFamily: "Jost, sans-serif",
                  fontWeight: "normal",
                }}
              >
                Shop Men
              </h5>
              <p
                className="lh-base pt-3"
                style={{
                  color: "#918989",
                  fontFamily: "poppins",
                  cursor: "pointer",
                }}
              >
                Clothing Fashion
              </p>
              <p
                className="lh-base"
                style={{
                  color: "#918989",
                  fontFamily: "poppins",
                  cursor: "pointer",
                }}
              >
                Winter
              </p>
              <p
                className="lh-base"
                style={{
                  color: "#918989",
                  fontFamily: "poppins",
                  cursor: "pointer",
                }}
              >
                Summer
              </p>
              <p
                className="lh-base"
                style={{
                  color: "#918989",
                  fontFamily: "poppins",
                  cursor: "pointer",
                }}
              >
                Formal
              </p>
              <p
                className="lh-base"
                style={{
                  color: "#918989",
                  fontFamily: "poppins",
                  cursor: "pointer",
                }}
              >
                Casual
              </p>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-12">
              <h5
                className="text-light mt-5"
                style={{
                  fontFamily: "Jost, sans-serif",
                  fontWeight: "normal",
                }}
              >
                Shop Women
              </h5>
              <p
                className="lh-base pt-3"
                style={{
                  color: "#918989",
                  fontFamily: "poppins",
                  cursor: "pointer",
                }}
              >
                Clothing Fashion
              </p>
              <p
                className="lh-base"
                style={{
                  color: "#918989",
                  fontFamily: "poppins",
                  cursor: "pointer",
                }}
              >
                Winter
              </p>
              <p
                className="lh-base"
                style={{
                  color: "#918989",
                  fontFamily: "poppins",
                  cursor: "pointer",
                }}
              >
                Summer
              </p>
              <p
                className="lh-base"
                style={{
                  color: "#918989",
                  fontFamily: "poppins",
                  cursor: "pointer",
                }}
              >
                Formal
              </p>
              <p
                className="lh-base"
                style={{
                  color: "#918989",
                  fontFamily: "poppins",
                  cursor: "pointer",
                }}
              >
                Casual
              </p>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-12">
              <h5
                className="text-light mt-5"
                style={{
                  fontFamily: "Jost, sans-serif",
                  fontWeight: "normal",
                }}
              >
                Baby Collection
              </h5>
              <p
                className="lh-base pt-3"
                style={{
                  color: "#918989",
                  fontFamily: "poppins",
                  cursor: "pointer",
                }}
              >
                Clothing Fashion
              </p>
              <p
                className="lh-base"
                style={{
                  color: "#918989",
                  fontFamily: "poppins",
                  cursor: "pointer",
                }}
              >
                Winter
              </p>
              <p
                className="lh-base"
                style={{
                  color: "#918989",
                  fontFamily: "poppins",
                  cursor: "pointer",
                }}
              >
                Summer
              </p>
              <p
                className="lh-base"
                style={{
                  color: "#918989",
                  fontFamily: "poppins",
                  cursor: "pointer",
                }}
              >
                Formal
              </p>
              <p
                className="lh-base"
                style={{
                  color: "#918989",
                  fontFamily: "poppins",
                  cursor: "pointer",
                }}
              >
                Casual
              </p>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-12">
              <h5
                className="text-light mt-5"
                style={{
                  fontFamily: "Jost, sans-serif",
                  fontWeight: "normal",
                }}
              >
                Quick Links
              </h5>
              <p
                className="lh-base pt-3"
                style={{
                  color: "#918989",
                  fontFamily: "poppins",
                  cursor: "pointer",
                }}
              >
                Track Your Order
              </p>
              <p
                className="lh-base"
                style={{
                  color: "#918989",
                  fontFamily: "poppins",
                  cursor: "pointer",
                }}
              >
                Support
              </p>
              <p
                className="lh-base"
                style={{
                  color: "#918989",
                  fontFamily: "poppins",
                  cursor: "pointer",
                }}
              >
                FAQ
              </p>
              <p
                className="lh-base"
                style={{
                  color: "#918989",
                  fontFamily: "poppins",
                  cursor: "pointer",
                }}
              >
                Carrier
              </p>
              <p
                className="lh-base"
                style={{
                  color: "#918989",
                  fontFamily: "poppins",
                  cursor: "pointer",
                }}
              >
                About
              </p>
              <p
                className="lh-base"
                style={{
                  color: "#918989",
                  fontFamily: "poppins",
                  cursor: "pointer",
                }}
              >
                Contact Us
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Footer;
