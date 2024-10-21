import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function StaticProduct() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <div className="container mt-5 mb-5">
        <div className="row">
          <div
            className="col-lg-4 col-md-4 col-sm-12 mt-5 m-auto"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <Link className="text-decoration-none text-dark" to="/">
              <div className="dis">
                <div className="img-Dark">
                  <h3 className="pt-4 ps-4 fw-bold">Men's Fashion</h3>
                  <Link
                    className="static"
                    to={"/"}
                    style={{
                      textDecoration: "none",
                      position: "absolute",
                      bottom: "20px",
                      left: "145px",
                      fontFamily: "poppins",
                      borderBottom: "2px solid #ccc",
                      color: "#ccc",
                      letterSpacing: "4px",
                    }}
                  >
                    Shop Now
                  </Link>
                </div>
              </div>
            </Link>
          </div>
          <div
            className="col-lg-4 col-md-4 col-sm-12 mt-5"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <Link className="text-decoration-none text-dark" to="/">
              <div className="dis1">
                <div className="img-Dark">
                  <h3 className="pt-4 ps-4 fw-bold">Men's Fashion</h3>
                  <Link
                    className="static"
                    to={"/"}
                    style={{
                      textDecoration: "none",
                      position: "absolute",
                      bottom: "20px",
                      left: "145px",
                      fontFamily: "poppins",
                      borderBottom: "2px solid #ccc",
                      color: "#ccc",
                      letterSpacing: "4px",
                    }}
                  >
                    Shop Now
                  </Link>
                </div>
              </div>
            </Link>
          </div>
          <div
            className="col-lg-4 col-md-4 col-sm-12 mt-5"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <Link className="text-decoration-none text-dark" to="/">
              <div className="dis2">
                <div className="img-Dark">
                  <h3 className="pt-4 ps-4 fw-bold">Women's Fashion</h3>
                  <Link
                    className="static"
                    to={"/"}
                    style={{
                      textDecoration: "none",
                      position: "absolute",
                      bottom: "20px",
                      left: "145px",
                      fontFamily: "poppins",
                      borderBottom: "2px solid #ccc",
                      color: "#ccc",
                      letterSpacing: "4px",
                    }}
                  >
                    Shop Now
                  </Link>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default StaticProduct;
