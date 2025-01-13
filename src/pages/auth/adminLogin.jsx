import { faEnvelope, faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { collection, getDocs, query, where } from 'firebase/firestore';
import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { db } from '../../utils/firebase';
import { message } from 'antd';
import { AdminContext } from '../../context/AdminContext';

function AdminLogin() {
    const [AdminData, setAdminData] = useContext(AdminContext)
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm();

    const handleOnShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const OnSubmit = async (data) => {
        setLoading(true)
        try {
            console.log("data", data);
            const OrdersCollection = collection(db, "AdminUsers");
            const q = query(OrdersCollection, where("User_Email", "==", data?.Email), where("User_Password", "==", data?.Password));
            const AdminQuerySnap = await getDocs(q);
            console.log("AdminQuerySnap", AdminQuerySnap);
            if (!AdminQuerySnap.empty) {
                AdminQuerySnap.docs.map((data) => {
                    const dataAdmin = data.data();
                    setAdminData({
                        AdminLogin: true,
                        AdminInfo: {
                            USER_ID: dataAdmin.User_Id,
                            User_Name: dataAdmin.User_Name,
                            User_Image: dataAdmin.User_Image,
                            Email: dataAdmin?.User_Email,
                            Password: dataAdmin?.User_Password,
                        }
                    })
                })
                navigate('/adminPanel')
            } else {
                message.error("Invalid Email and Password!")
            }

        } catch (err) {
            message.error("Invalid Email and Password!")
            console.log(err);
        } finally {
            setLoading(false)
        }
    }
    console.log("AdminData", AdminData);


    return (
        <div
            className="container-fluid"
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
                        <img
                            src="https://preview.colorlib.com/theme/capitalshop/assets/img/logo/logo.png.webp"
                            alt="logo"
                        />
                    </h1>

                    <div className="col-lg-4 col-md-12 mt-4 box m-auto">

                        <form onSubmit={handleSubmit(OnSubmit)}>
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
                                    {...register("Email", {
                                        required: true,
                                        maxLength: 25,
                                    })}
                                />
                            </div>
                            {errors.Email && (
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
                                    className="btn btn-dark mt-3 button"
                                    type="submit"
                                    style={{
                                        width: "50%",
                                        marginBottom: "60px"
                                    }}
                                >
                                    {
                                        loading ? "loading..." : "Log in"
                                    }
                                </button>
                            </center>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminLogin