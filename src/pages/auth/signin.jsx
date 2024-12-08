import { useForm } from "react-hook-form";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { auth, db } from "../../utils/firebase";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { message } from "antd";
import { doc, setDoc } from "firebase/firestore";

function SignIn() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleOnShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const firebaseErrorShow = document.getElementById("error_show");

  const onSubmit = async (data) => {
    try {
      const userLogin = await signInWithEmailAndPassword(
        auth,
        data?.email,
        data?.Password
      );
      message.success("Login Successfully");
      navigate("/");
    } catch (error) {
      message.error(error.message);
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
        console.log('user', user);

        const myCollectionRef = doc(db, "Users", user.uid);
        const AllUserData = {
          User_Name: user?.displayName,
          User_Email: user?.email,
          User_Id: user?.uid,
          Photo_Url: user?.photoURL
        };

        setDoc(myCollectionRef, AllUserData).then(() => {
          message.success("Login Successfully");
          navigate("/");
        });
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
        message.success(errorMessage);
        // ...
      });
  };

  return (
    <>
      <div
        className="container-fluid"
        style={{
          height: "100vh",
        }}
      >
        <div className="container pt-5">
          <div className="row">
            <h1
              className="text-center text-light mt-3 fw-bold d-inline"
              style={{ fontFamily: '"Courier New", Courier, monospace' }}
            >
              <img
                src="https://preview.colorlib.com/theme/capitalshop/assets/img/logo/logo.png.webp"
                alt="logo"
              />
            </h1>

            <div className="col-lg-9 col-md-12 box2 mt-4 m-auto">
              <div className="row">
                <div
                  className="col-lg-5 col-md-8 col-sm-7 m-auto mt-4 pb-4"
                  style={{
                    height: "auto",
                    borderRadius: 20,
                    marginTop: 50,
                  }}
                >
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <h1
                      className="text-dark fw-bold text-center mt-3"
                      style={{
                        fontFamily: '"Courier New", Courier, monospace',
                      }}
                    >
                      Log in
                    </h1>

                    <div class="group2">
                      <svg
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        class="search-icon"
                      >
                        <FontAwesomeIcon
                          icon={faEnvelope}
                          className="search-icon"
                        ></FontAwesomeIcon>
                      </svg>

                      <input
                        className="input"
                        type="email"
                        placeholder="Email..."
                        {...register("email", {
                          required: true,
                          maxLength: 25,
                        })}
                      />
                    </div>
                    {errors.email && (
                      <span className="error_msg ps-4">Email is required</span>
                    )}
                    <div class="group2">
                      <svg
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        class="search-icon"
                      >
                        <FontAwesomeIcon
                          icon={faLock}
                          className="search-icon"
                        ></FontAwesomeIcon>
                      </svg>

                      <input
                        className="input"
                        type={showPassword ? "text" : "password"}
                        placeholder="Password..."
                        {...register("Password", {
                          required: true,
                          minLength: 8,
                        })}
                      />
                      <FontAwesomeIcon
                        icon={showPassword ? faEyeSlash : faEye}
                        onClick={handleOnShowPassword}
                        className="eyeIcon"
                        style={{
                          width: "15%",
                          marginTop: "2px",
                          fontSize: "1.3rem",
                          cursor: 'pointer'
                        }}
                      />
                    </div>
                    {errors.Password && (
                      <span className="error_msg ps-4">
                        Must at least 8 characters
                      </span>
                    )}

                    <div className="message" />
                    <p
                      id="error_show"
                      className="error_msg text-center fs-5"
                    ></p>
                    <span className="para">Don't have an Account ?</span>
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
                          width: "50%",
                          fontFamily: "poppins",
                        }}
                      >
                        Or
                      </h4>
                    </center>
                  </form>
                  <center>
                    <button
                      className="btn btn-dark mt-1 mb-2 LoginButton"
                      type="submit"
                      style={{
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
                <div className="col-lg-6 col-md-4 col-sm-5"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignIn;
