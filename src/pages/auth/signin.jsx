import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../utils/firebase";

function SignUp() {

  createUserWithEmailAndPassword();
  auth
  return (
    <>
   <div className="container mt-5">
  <div className="row">
    <h1
      className="text-center text-light mt-5 fw-bold d-inline"
      style={{ fontFamily: '"Courier New", Courier, monospace' }}
    >
      Caza Store
    </h1>
    <div
      className="col-lg-5 col-md-8 col-sm-7 m-auto mt-4 pb-4"
      style={{
        height: "auto",
        backgroundColor: "#d9dde2",
        borderRadius: 20,
        marginTop: 50
      }}
    >
      <form id="Login-Form">
        <h1
          className="text-dark fw-bold text-center mt-3"
          style={{ fontFamily: '"Courier New", Courier, monospace' }}
        >
          Log in
        </h1>
        <input
          type="email"
          placeholder="Email"
          className="form-control mt-4"
          id="email2"
          required=""
        />
        <input
          type="password"
          placeholder="Password"
          className="form-control mt-3 mb-4"
          id="password2"
          required=""
        />
        <div className="message" />
        <span className="ps-2 para">Don't have an Account ?</span>
        <a href="./signup.html" className="ps-1 para">
          Sign up
        </a>
        <center>
          <button className="btn btn-dark w-25 mt-3 mb-2 button">Log in</button>
        </center>
      </form>
    </div>
  </div>
</div>

    </>
  );
}

export default SignUp;