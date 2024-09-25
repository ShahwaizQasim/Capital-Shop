function Navbar() {
  return (
    <>
      <div
        className="container-fluid pt-2 pb-2"
        style={{ position: "sticky", top: 0, zIndex: 12 }}
        id="nav2"
      >
        <div className="container">
          <nav className="nav navbar navbar-expand-md text-center pb-2 pt-1">
            <a
              href=""
              className="navbar-brand"
              style={{ fontFamily: "poppins" }}
            >
              Caza Store
            </a>
            <button
              className="navbar-toggler"
              data-bs-toggle="collapse"
              data-bs-target="#navi"
            >
              <i className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse justify-content-end pe-5"
              id="navi"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a
                    href="./dashboard.html"
                    className="nav-link pe-4"
                    style={{ fontFamily: "poppins !important" }}
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="./dashboard.html"
                    className="nav-link pe-4"
                    style={{ fontFamily: "poppins !important" }}
                  >
                    Shop
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#"
                    className="nav-link pe-4"
                    style={{ fontFamily: "poppins !important" }}
                  >
                    Blog
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="./dashboard.html"
                    className="nav-link pe-4"
                    style={{ fontFamily: "poppins !important" }}
                  >
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="./dashboard.html"
                    className="nav-link pe-4"
                    style={{ fontFamily: "poppins !important" }}
                  >
                    Contact
                  </a>
                </li>
                <li className="nav-item">
                  <button
                    className="btn btn-secondary"
                    style={{ fontFamily: "poppins" }}
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                  >
                    Logout <i className="fas fa-user" />
                  </button>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
      {/* Modal Box for Log Out */}
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            {/* <div class="modal-header">
    </div> */}
            <div className="modal-body">
              <h5
                className="text-center"
                style={{
                  fontFamily: "poppins",
                  fontSize: "1.4rem",
                  borderBottom: "1px solid #ccc",
                  paddingBottom: 15,
                }}
              >
                Log out of Caza Store
              </h5>
              <p style={{ fontFamily: "poppins", fontSize: "0.8rem" }}>
                Are you sure that you want to log out of Caza Store before
                confirming your email address? Confirming the email address on
                your account ensures that you will be able to log in again.
              </p>
            </div>
            <div className="modal-footer">
              <a href="../pages/dashboard.html">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                  style={{ fontFamily: "poppins" }}
                >
                  Confirm Account
                </button>
              </a>
              <button
                type="button"
                className="btn btn-success"
                style={{ fontFamily: "poppins" }}
                id="LogOut"
              >
                Log Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;