import { useForm } from "react-hook-form";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { Button } from "antd";

function SignUp() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const [UserName, setUserName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const handleOnShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = async (data) => {
    try {
      console.log('Data', data?.email);
      const user = await createUserWithEmailAndPassword(auth, data?.email, data?.Password);
      console.log("user", user);
      navigate("/SignIn");
    } catch (error) {
      console.log("Error", error.message);
    }
    console.log("Data");
  };

  return (
    <>
      <div className="container-fluid bg-success SignUp-Container">
        <div className="container">
          <div className="row">
            <h1
              className="text-center text-light mt-5 fw-bold d-inline"
              style={{ fontFamily: '"Courier New", Courier, monospace' }}
            >
              Shah Store
            </h1>
            <div className="col-10 mt-4 m-auto pb-5 box">
              <h1 className="text-dark fw-bold heading">Sign Up</h1>
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                      type="text"
                      placeholder="Full Name"
                      {...register("UserName", {
                        required: true,
                        maxLength: 25,
                      })}
                      className="form-control mt-4 mb-2"
                      autoComplete="on"
                    />
                    {errors.UserName && (
                      <span className="error_msg">This field is required</span>
                    )}

                    <input
                      type="email"
                      placeholder="Email"
                      {...register("email", { required: true, maxLength: 25 })}
                      className="form-control mt-4 mb-2"
                    />
                    {errors.email && (
                      <span className="error_msg">Email is required</span>
                    )}

                    <div
                      style={{
                        display: "flex",
                      }}
                    >
                      {" "}
                      <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        {...register("Password", {
                          required: true,
                          minLength: 8,
                        })}
                        className="form-control mt-4 mb-2"
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
                      <span className="error_msg">
                        Must at least 8 characters
                      </span>
                    )}

                    <div className="message error_message" />
                    <span className="ps-2 para">Already have an Account ?</span>
                    <Link to="/SignIn" className="ps-1 para">
                      Log in
                    </Link>
                    <center>
                      {/* <Link
                        to={"#"}
                        style={{
                          textDecoration: "none",
                          color: "aliceblue",
                          fontWeight: 600,
                        }}
                      > */}
                      <button
                        className="btn btn-dark w-50 mt-3 mb-3 button"
                        type="submit"
                      >
                        SignUp
                      </button>

                      {/* </Link> */}
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
