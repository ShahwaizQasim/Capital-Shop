
function Signup() {
  return (
    <>
      <div className="container">
        <div className="row">
          <h1
            className="text-center text-light mt-3 fw-bold d-inline"
            style={{ fontFamily: '"Courier New", Courier, monospace' }}
          >
            Caza Store
          </h1>
          <div className="col-10 mt-2 m-auto pb-5 box">
            <h1 className="text-dark fw-bold heading">Sign Up</h1>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <form id="SignUp-Form">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="form-control mt-4"
                    maxLength={15}
                    autoComplete="on"
                    required=""
                  />
                  <input
                    type="number"
                    placeholder="#Mobile"
                    className="form-control mt-4"
                    maxLength={15}
                    required=""
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="form-control mt-4"
                    maxLength={30}
                    required=""
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    className="form-control mt-4 mb-4"
                    maxLength={15}
                    required=""
                  />
                  <div className="message error_message" />
                  <span className="ps-2 para">Already have an Account ?</span>
                  <a href="../pages/login.html" className="ps-1 para">
                    Log in
                  </a>
                  <center>
                    <a
                      href="../pages/login.html"
                      style={{
                        textDecoration: "none",
                        color: "aliceblue",
                        fontWeight: 600,
                      }}
                    >
                      <button className="btn btn-dark w-50 mt-3 mb-3 button">
                        SignUp
                      </button>
                    </a>
                  </center>
                </form>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;