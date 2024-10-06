import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { db, storage } from "../../utils/firebase";
import { message } from "antd";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { Link, useNavigate } from "react-router-dom";


function AddProduct() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  // const [ProductName, setProductName] = useState("");
  // const [ProductPrice, setProductPrice] = useState("");
  // const [ProductDescription, setProductDescription] = useState("");
  // const [ProductPicture, setProductPicture] = useState("");
  // console.log(ProductPicture);

  const onSubmit = async (data) => {
    try {
      console.log(data);
      const Product_Picture = data?.ProductPicture[0];

      setLoading(true);
      const product_picture_ref = ref(
        storage,
        `Products Picture/${Product_Picture.name}`
      );

      const uploadPicture = await uploadBytes(
        product_picture_ref,
        Product_Picture
      );

      const image_Url = await getDownloadURL(product_picture_ref);

      const myCollectionRef = collection(db, "products");

      const myProduct = {
        Product_Name: data?.ProductName,
        Product_Prize: data?.ProductPrize,
        Product_Description: data?.ProductDescription,
        Product_Picture: data?.ProductPicture[0].name,
      };
      const docRef = await addDoc(myCollectionRef, myProduct);
      message.success("Product Added Successfully");
      navigate('/')
    } catch (error) {
      console.log("Error", error);
      message.error(error.message);
    } finally {
      setLoading(false);
    }
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
                alt="logo"
                height={50}
              />
            </h1>
            <div className="col-10 mt-4 m-auto pb-5 box">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <h1 className="text-dark text-center mt-5 fw-bold heading">
                    Add Product
                  </h1>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                      type="text"
                      placeholder="Product Name"
                      {...register("ProductName", {
                        required: true,
                        maxLength: 25,
                      })}
                      className="form-control mt-4 mb-2"
                      autoComplete="on"
                    />
                    {errors.ProductName && (
                      <span className="error_msg">ProductName is required</span>
                    )}

                    <input
                      type="number"
                      placeholder="Product Price"
                      {...register("ProductPrize", {
                        required: true,
                        maxLength: 50,
                      })}
                      className="form-control mt-4 mb-2"
                    />
                    {errors.ProductPrize && (
                      <span className="error_msg">Price is required</span>
                    )}

                    <input
                      type="text"
                      placeholder="Product Description"
                      {...register("ProductDescription", {
                        required: true,
                        minLength: 15,
                      })}
                      className="form-control mt-4 mb-2"
                    />
                    {errors.ProductDescription && (
                      <span className="error_msg">
                        ProductDescription is required
                      </span>
                    )}

                    <input
                      type="file"
                      placeholder="Product Picture"
                      {...register("ProductPicture", {
                        required: true,
                      })}
                      className="form-control mt-4 mb-2"
                    />
                    {errors.ProductPicture && (
                      <span className="error_msg">
                        Product Picture is required
                      </span>
                    )}

                    <center>
                      <button
                        className="btn btn-dark mt-4 mb-2 button2"
                        type="submit"
                      >
                       {loading ? (
                          <h5 className="pt-1 text-normal">loading...</h5>
                        ) : (
                          "Upload Product "
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

export default AddProduct;
