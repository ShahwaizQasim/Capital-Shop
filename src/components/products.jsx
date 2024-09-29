function StaticProduct() {
  return (
    <>
      <div className="container mt-5 mb-5">
        <div className="row">
          <div
            className="col-lg-4 col-md-6 col-sm-12 mt-5"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <a className="text-decoration-none text-dark" href="">
              <div className="dis">
                <h3
                  className="pt-4 ps-4 fw-bold"
                  style={{
                    fontFamily:
                      "'Trebuchet MS', 'Lucida Sans Unicode','Lucida Grande', 'Lucida Sans', Arial, sans-serif",
                  }}
                >
                  Women
                </h3>
                <h6
                  className="ps-4 fw-bold"
                  style={{
                    color: "#918989",
                    fontFamily:
                      "Cambria, Cochin, Georgia, Times,'Times New Roman', serif",
                  }}
                >
                  Spring 2018
                </h6>
                <button className="btn btn-info text-light fw-bold mt-5 ms-4">
                  Shop Now
                </button>
              </div>
            </a>
          </div>
          <div
            className="col-lg-4 col-md-6 col-sm-12 mt-5"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <a className="text-decoration-none text-dark" href="">
              <div className="dis1">
                <h3
                  className="pt-4 ps-4 fw-bold"
                  style={{
                    fontFamily:
                      "'Trebuchet MS', 'Lucida Sans Unicode','Lucida Grande', 'Lucida Sans', Arial, sans-serif",
                  }}
                >
                  Men
                </h3>
                <h6
                  className="ps-4 fw-bold"
                  style={{
                    color: "#918989",
                    fontFamily:
                      "Cambria, Cochin, Georgia, Times,'Times New Roman', serif",
                  }}
                >
                  Spring 2018
                </h6>
                <button className="btn btn-info text-light fw-bold mt-4 ms-3">
                  Shop Now
                </button>
              </div>
            </a>
          </div>
          <div
            className="col-lg-4 col-md-6 col-sm-12 mt-5"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <a className="text-decoration-none text-dark" href="">
              <div className="dis2">
                <h3
                  className="pt-4 ps-4 fw-bold"
                  style={{
                    fontFamily:
                      "'Trebuchet MS', 'Lucida Sans Unicode','Lucida Grande', 'Lucida Sans', Arial, sans-serif",
                  }}
                >
                  Accesories
                </h3>
                <h6
                  className="ps-4 fw-bold"
                  style={{
                    color: "#918989",
                    fontFamily:
                      "Cambria, Cochin, Georgia, Times,'Times New Roman', serif",
                  }}
                >
                  Spring 2018
                </h6>
                <button className="btn btn-info text-light fw-bold mt-5 ms-4">
                  Shop Now
                </button>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default StaticProduct;
