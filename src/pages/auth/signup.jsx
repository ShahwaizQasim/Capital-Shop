import { useForm } from "react-hook-form"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useState } from "react";



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

  const onSubmit = () => {console.log('data')};

  return (
    <>
    <div className="container-fluid bg-success">
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
                    {...register("UserName", { required: true, maxLength: 15 })}
                    className="form-control mt-4 mb-2"
                    autoComplete="on"
                  />
                  {errors.UserName && (<span className="error_msg">This field is required</span>)}

                  <input
                    type="email"
                    placeholder="Email"
                    {...register("email", { required: true, maxLength: 15 })}
                    className="form-control mt-4"
                  />
                  {errors.email && (<span className="error_msg">This field is required</span>)}

                  <input
                    type="password"
                    placeholder="Password"
                    {...register("Password", { required: true, maxLength: 15 })}
                    className="form-control mt-4 mb-2"
                    maxLength={15}
                  />
                  {errors.Password && (<span className="error_msg">This field is required</span>)}

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
                      <button className="btn btn-dark w-50 mt-3 mb-3 button" type="submit">
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
      </div>
    </>
  );
}

export default SignUp;