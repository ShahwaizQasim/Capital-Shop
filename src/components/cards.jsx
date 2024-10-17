import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Cards({ data }) {
  const {
    Product_Description,
    Product_Name,
    Product_Picture,
    Product_Prize,
    Product_Categories,
    id,
  } = data;
  // console.log(Product_Categories);

  return (
    <>
      <div className="col-lg-4 col-md-6 col-sm-12">
        <div className="pro_dis">
          <div className="pro-img">
            {/* <img src={Product_Picture} alt="" /> */}
          </div>
          <div className="pro_desc">
            {/* <h6>{Product_Categories}</h6>
            <h3>{Product_Name}</h3>
            <p>{Product_Description?.slice(0, 140)}</p>
            <Link to={`/ProductDetail/${id}`} className="productDetail_Link">
              Read More <FontAwesomeIcon icon={faArrowRight} />
            </Link> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
