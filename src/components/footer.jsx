function Footer() {
  return (
    <>
      <div className="container-fluid bg-dark pb-5" style={{ height: "auto" }}>
        <div className="container mt-5">
          <div className="row mt-5">
            <div className="col-lg-3 col-md-3 col-sm-12 mt-5">
              <h5
                className="fw-bold text-light mt-5"
                style={{ fontFamily: '"Times New Roman", Times, serif' }}
              >
                CATEGORIES
              </h5>
              <p className="lh-base pt-4" style={{ color: "#918989" }}>
                Men
              </p>
              <p className="lh-base" style={{ color: "#918989" }}>
                Women
              </p>
              <p className="lh-base" style={{ color: "#918989" }}>
                Shoes
              </p>
              <p className="lh-base" style={{ color: "#918989" }}>
                Watches
              </p>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 mt-5">
              <h5
                className="fw-bold text-light mt-5"
                style={{ fontFamily: '"Times New Roman", Times, serif' }}
              >
                HELP
              </h5>
              <p className="lh-base pt-4" style={{ color: "#918989" }}>
                Track Order
              </p>
              <p className="lh-base" style={{ color: "#918989" }}>
                Returns
              </p>
              <p className="lh-base" style={{ color: "#918989" }}>
                Shipping
              </p>
              <p className="lh-base" style={{ color: "#918989" }}>
                FAQ's
              </p>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 mt-5">
              <h5
                className="fw-bold text-light mt-5"
                style={{ fontFamily: '"Times New Roman", Times, serif' }}
              >
                GET IN TOUCH
              </h5>
              <p className="lh-base pt-4" style={{ color: "#918989" }}>
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
            <div className="col-lg-3 col-md-3 col-sm-12 mt-5">
              <h5
                className="fw-bold text-light mt-5"
                style={{ fontFamily: '"Times New Roman", Times, serif' }}
              >
                NEWSLETTER
              </h5>
              <input
                type="text"
                className="form-control mt-4"
                placeholder="email@example.com"
              />
              <button className="btn btn-info mt-4 text-light fw-bold">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Footer;