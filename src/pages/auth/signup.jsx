import { useForm } from "react-hook-form";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../utils/firebase";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faEyeSlash,
  faUser,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { message } from "antd";
import * as React from "react";
import { doc, setDoc } from "firebase/firestore";

function SignUp() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleOnShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = async (data) => {
    try {
      console.log("data", data);

      setLoading(true);
      const user = await createUserWithEmailAndPassword(
        auth,
        data?.email,
        data?.Password
      );

      const myCollectionRef = doc(db, "Users", user.user.uid);
      const AllUserData = {
        User_Name: data?.name,
        User_Email: data?.email,
        User_Id: user.user.uid,
      };
      const UserDataAdd = await setDoc(myCollectionRef, AllUserData);
      message.success("Sign Up Successfully");

      navigate("/SignIn");
      setLoading(false);
    } catch (error) {
      message.error(error.message);
      console.log("Error", error.message);
      setLoading(false);
    }
    console.log("Data");
  };

  return (
    <>
      <div className="container-fluid SignUp-Container">
        <div className="container">
          <div className="row">
            <h1
              className="text-center text-light mt-5 fw-bold d-inline"
              style={{ fontFamily: '"Courier New", Courier, monospace' }}
            >
              <img
                src="https://preview.colorlib.com/theme/capitalshop/assets/img/logo/logo.png.webp"
                alt=""
              />
            </h1>
            <div className="col-lg-9 mt-4 m-auto pb-5 box">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <h1 className="text-dark text-center fw-bold heading pt-5">
                    Sign Up
                  </h1>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div class="group">
                      <svg
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        class="search-icon"
                      >
                        <FontAwesomeIcon
                          icon={faUser}
                          className="search-icon"
                        ></FontAwesomeIcon>
                      </svg>

                      <input
                        className="input"
                        type="text"
                        placeholder="Enter Your Name..."
                        {...register("name", { required: true, maxLength: 20 })}
                      />
                    </div>
                    {errors.name && (
                      <span className="error_msg">User Name is required</span>
                    )}

                    <div class="group">
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
                      <span className="error_msg">Email is required</span>
                    )}

                    <div class="group">
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
                      <span className="error_msg">
                        Must at least 8 characters
                      </span>
                    )}

                    <div className="message error_message" />
                    <span className="ps-3 para">Already have an Account ?</span>
                    <Link to="/SignIn" className="ps-1 para">
                      Log in
                    </Link>

                    <center>
                      <button
                        className="btn btn-dark w-50 mt-3 mb-3 button"
                        type="submit"
                      >
                        {loading ? (
                          <h5 className="pt-1 text-normal">loading...</h5>
                        ) : (
                          "SignUp"
                        )}
                      </button>
                    </center>
                  </form>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
