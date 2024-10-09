import { Link } from "react-router-dom";

function MiniHeader() {
  return (
    <div className="container-fluid MiniHeader">
      <div className="container text-center">
        <h5>
          Sale Up To 50% Biggest Discounts. Hurry! Limited Period Offer{" "}
          <Link
            to={"/"}
            style={{
              textDecoration: "none",
              color: "#BC883E",
              borderBottom: "2px solid #BC883E",
            }}
          >
            Shop Now
          </Link>{" "}
        </h5>
      </div>
    </div>
  );
}

export default MiniHeader;
