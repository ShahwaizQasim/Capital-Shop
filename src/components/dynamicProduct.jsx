function DynamicProduct() {
  return (
    <>
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-4 mt-5">
            <h2 className="hdg mt-5 fw-bold">Product Upload</h2>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-8 mt-5">
            <a href="./product.html">
              <button
                className="btn btn-info text-light fw-bold mt-5"
                style={{ marginLeft: "70%" }}
              >
                Add Product
              </button>
            </a>
          </div>
        </div>
        <div className="row">
          <div className="mt-5 allProducts" />
        </div>
      </div>
    </>
  );
}

export default DynamicProduct;
