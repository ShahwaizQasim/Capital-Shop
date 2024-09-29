import { Link } from "react-router-dom";

function DynamicProduct() {
  return (
    <>
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-4 mt-5">
            <h2 className="hdg mt-5 fw-bold">Product Upload</h2>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-8 mt-5">
            
              <button
                className="btn btn-info text-light fw-bold mt-5"
                style={{ marginLeft: "70%" }}
              >
                <Link to="/addProduct" className="text-decoration-none text-white">   Add Product</Link>
             
              </button>
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
