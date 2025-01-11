import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { db } from "../../utils/firebase";
import { addDoc, collection, doc, getDoc, serverTimestamp } from "firebase/firestore";
import { useEffect, useRef, useState } from "react";
import { message } from "antd";

function OrderNow() {
    const { id } = useParams();
    const navigate = useNavigate();
    const formRef = useRef(null);
    const [loading, setLoading] = useState(false);
    const [product, setProducts] = useState(null);
    console.log("formRef", formRef);

    useEffect(() => {
        getProducts();
    }, [])

    const getProducts = async () => {
        try {
            setLoading(true);
            const productRef = doc(db, "products", id);
            const productInfo = await getDoc(productRef);
            const productFetch = productInfo.data()
            setProducts({ productFetch });
            console.log("product", product.productFetch.Product_Name);

        } catch (error) {
            console.log("error", error);
        } finally {
            setLoading(false)
        }
    }

    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm();


    const onSubmit = async (data) => {
        try {
            setLoading(true)
            const orderCollection = collection(db, "orders");
            const UsersOrders = {
                FullName: data?.FullName,
                Email: data?.EmailAddress,
                PhoneNumber: data?.PhoneNumber,
                Address: data?.ShippingAddress,
                City: data?.city,
                ProductName: data?.ProductName,
                ProductImage: data?.ProductPicture,
                productId: id,
                createdAt: serverTimestamp(),
            }
            console.log("UsersOrders", UsersOrders);

            const docRef = await addDoc(orderCollection, UsersOrders);
            formRef.current.reset();
            message.success("Your Order Placed Successfully")
            navigate('/')
        } catch (err) {
            console.log("error", err)
        } finally {
            setLoading(false)
        }

    }

    return (
        <>
            <div className="container-fluid SignUp-Container">
                <div className="container">
                    <div className="row">
                        <h1
                            className="text-center text-light mt-4 fw-bold d-inline"
                            style={{ fontFamily: '"Courier New", Courier, monospace' }}
                        >
                            <img
                                src="https://preview.colorlib.com/theme/capitalshop/assets/img/logo/logo.png.webp"
                                alt="logo"
                                height={50}
                            />
                        </h1>
                        <div className="col-10 mt-4 m-auto pb-5 box">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <h1 className="text-dark text-center mt-5 fw-bold heading">
                                        Order Now
                                    </h1>
                                    <form onSubmit={handleSubmit(onSubmit)} ref={formRef}>
                                        <input
                                            type="text"
                                            placeholder="Full Name"
                                            {...register("FullName", {
                                                required: true,
                                                minLength: 2,
                                                maxLength: 25,
                                            })}
                                            className="form-control mt-4 mb-2"
                                            autoComplete="on"
                                        />
                                        {errors.FullName && (
                                            <span className="error_msg">Name is required</span>
                                        )}

                                        <input
                                            type="email"
                                            placeholder="Email Address"
                                            {...register("EmailAddress", {
                                                required: true,
                                                maxLength: 20,
                                            })}
                                            className="form-control mt-4 mb-2"
                                            autoComplete="on"
                                        />
                                        {errors.EmailAddress && (
                                            <span className="error_msg">Email is required</span>
                                        )}

                                        <input
                                            type="number"
                                            placeholder="Phone Number"
                                            {...register("PhoneNumber", {
                                                required: true,
                                                minLength: 10,
                                                maxLength: 20,
                                            })}
                                            className="form-control mt-4 mb-2"
                                            autoComplete="on"
                                        />
                                        {errors.PhoneNumber && (
                                            <span className="error_msg">
                                                Phone Number is required
                                            </span>
                                        )}

                                        <input
                                            type="text"
                                            placeholder="Shipping Address"
                                            {...register("ShippingAddress", {
                                                required: true,
                                                minLength: 10,
                                                maxLength: 100,
                                            })}
                                            className="form-control mt-4 mb-2"
                                            autoComplete="on"
                                        />
                                        {errors.ShippingAddress && (
                                            <span className="error_msg">
                                                Address is required
                                            </span>
                                        )}

                                        <input
                                            type="text"
                                            placeholder="City & Country"
                                            {...register("city", {
                                                required: true,
                                                maxLength: 25,
                                            })}
                                            className="form-control mt-4 mb-2"
                                            autoComplete="on"
                                        />
                                        {errors.city && (
                                            <span className="error_msg">
                                                city is required
                                            </span>
                                        )}

                                        <input
                                            type="text"
                                            placeholder="Product Name"
                                            value={product?.productFetch?.Product_Name}
                                            {...register("ProductName", {
                                                minLength: 2,
                                                maxLength: 25,
                                            })}
                                            className="form-control mt-4 mb-2"
                                            autoComplete="on"
                                        />
                                        {errors.ProductName && (
                                            <span className="error_msg">ProductName is required</span>
                                        )}

                                        <input
                                            type="url"
                                            placeholder="Product Picture"
                                            value={product?.productFetch?.Product_Picture}
                                            {...register("ProductPicture", {
                                            })}
                                            className="form-control mt-4 mb-2"
                                            autoComplete="on"
                                        />
                                        {errors.ProductPicture && (
                                            <span className="error_msg">ProductPicture is required</span>
                                        )}

                                        <center>
                                            <button
                                                className="btn btn-dark mt-4 mb-2 button2"
                                                type="submit"
                                            >
                                                {loading ? (
                                                    <h6 className="pt-1 pb-2 text-normal">loading...</h6>
                                                ) : (
                                                    "Order Now"
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

export default OrderNow;
