import { useForm } from "react-hook-form";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { Link } from "react-router-dom";
import { useState } from "react";

function SignIp() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    console.log("data");
  };

  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  //   createUserWithEmailAndPassword();
  //   auth
  return (
    <>
      <div className="container-fluid bg-success">
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
                  {...register("email", { required: true, maxLength: 15 })}
                  className="form-control mt-4 mb-2"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && (
                  <span className="error_msg">This field is required</span>
                )}

                <input
                  type="password"
                  placeholder="Password"
                  {...register("Password", { required: true, maxLength: 15 })}
                  className="form-control mt-4 mb-2"
                  value={Password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {errors.Password && (
                  <span className="error_msg">This field is required</span>
                )}
                <div className="message" />
                <span className="ps-2 para">Don't have an Account ?</span>
                <Link to="/SignUp" className="ps-1 para">
                  Sign up
                </Link>
                <center>
                  <button className="btn btn-dark w-25 mt-3 mb-2 button">
                    Log in
                  </button>
                </center>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignIp;
