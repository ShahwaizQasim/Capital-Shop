import { useForm } from "react-hook-form";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { auth } from "../../utils/firebase";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function SignIp() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleOnShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const firebaseErrorShow = document.getElementById("error_show");

  const onSubmit = async () => {
    try {
      console.log("data");
      const userLogin = await signInWithEmailAndPassword(auth, email, Password);
      console.log("userLogin", userLogin);
      navigate("/");
    } catch (error) {
      console.log("Error", error.message);
      firebaseErrorShow.innerText = error.message.slice(10);
    }
  };

  const LoginWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log("user", user);
        navigate("/");

        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("Error", errorMessage);
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  return (
    <>
      <div
        className="container-fluid bg-success"
        style={{
          height: "100vh",
        }}
      >
        <div className="container pt-5">
          <div className="row">
            <h1
              className="text-center text-light mt-5 fw-bold d-inline"
              style={{ fontFamily: '"Courier New", Courier, monospace' }}
            >
              Shah Store
            </h1>
            <div
              className="col-lg-5 col-md-8 col-sm-7 m-auto mt-4 pb-4"
              style={{
                height: "auto",
                backgroundColor: "#d9dde2",
                borderRadius: 20,
                marginTop: 50,
              }}
            >
              <form onSubmit={handleSubmit(onSubmit)}>
                <h1
                  className="text-dark fw-bold text-center mt-3"
                  style={{ fontFamily: '"Courier New", Courier, monospace' }}
                >
                  Log in
                </h1>
                <input
                  type="email"
                  placeholder="Email"
                  {...register("email", { required: true, maxLength: 25 })}
                  className="form-control mt-4 mb-2"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && (
                  <span className="error_msg">Email is required</span>
                )}
                <div
                  style={{
                    display: "flex",
                  }}
                >
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    {...register("Password", { required: true, minLength: 8 })}
                    className="form-control mt-4 mb-2"
                    value={Password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <FontAwesomeIcon
                    icon={showPassword ? faEyeSlash : faEye}
                    onClick={handleOnShowPassword}
                    style={{
                      marginTop: "35px",
                      fontSize: "1.4rem",
                      cursor: "pointer",
                      width: "10%",
                    }}
                  />
                </div>
                {errors.Password && (
                  <span className="error_msg">Must at least 8 characters</span>
                )}
                <div className="message" />
                <p id="error_show" className="error_msg text-center fs-5"></p>
                <span className="ps-2 para">Don't have an Account ?</span>
                <Link to="/SignUp" className="ps-1 para">
                  Sign up
                </Link>
                <center>
                  <button
                    className="btn btn-dark mt-3 mb-2 button"
                    type="submit"
                    style={{
                      width: "50%",
                    }}
                  >
                    Log in
                  </button>

                  <h4
                    style={{
                      fontFamily: "poppins",
                    }}
                  >
                    Or
                  </h4>
                </center>
              </form>
              <center>
                <button
                  className="btn btn-dark mt-1 mb-2 button"
                  type="submit"
                  style={{
                    width: "50%",
                    fontSize: "0.9rem",
                  }}
                  onClick={LoginWithGoogle}
                >
                  Login With Google{" "}
                  <img
                    src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
                    height={25}
                    width={25}
                    alt="google"
                  />
                </button>
              </center>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignIp;
