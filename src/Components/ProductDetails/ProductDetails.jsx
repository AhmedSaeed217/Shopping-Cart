import React, { useContext, useEffect, useState } from "react";
import "./ProductDetails.css";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import CartContext from "../../Context/CartContext";
import axios from "axios";
import Spinner from "../Spinner/Spinner";
function ProductDetails() {
  const { addItemToCart } = useContext(CartContext);
  const { productId } = useParams();
  const [productDetails, setProductDetails] = useState({});

  const getProductDetails = () => {
    axios
      .get(`http://localhost:9000/products/${productId}`)
      .then((res) => setProductDetails(res.data));
  };

  useEffect(() => {
    getProductDetails();
  }, []);

  return (
    <>
      {Object.keys(productDetails).length === 0 ? (
       <div className="custom-spinner">
         <Spinner />
       </div>
      ) : (
        <div className="product-details">
          <div className="container">
            <div className="details-content">
              <div className="details-img">
                <div className="main-img">
                  <img src={productDetails?.img} alt="" />
                </div>
                {/* <div className="cousin-imgs">
              <img
                src="https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/p/u/8/-original-imagugptptuacajg.jpeg?q=70"
                alt=""
              />
              <img
                src="https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/t/c/p/-original-imagugptdmkvpwpm.jpeg?q=70"
                alt=""
              />
            </div> */}
              </div>
              <div className="details-text">
                <div className="product-info">
                  <h3>{productDetails?.model}</h3>
                  <p>
                    Brand: <span>{productDetails?.brand}</span>
                  </p>

                  <p>
                    Price: <span>{productDetails?.price} $</span>
                  </p>

                  <p>
                    Space: <span>{productDetails?.space}</span>
                  </p>

                  <p>
                    Camera: <span>{productDetails?.camera}</span>
                  </p>

                  <p>
                    Battery: <span>{productDetails?.battery}</span>
                  </p>
                  <p className="description">{productDetails?.description}</p>
                </div>
                <div className="delivery-terms">
                  <div className="delivery">
                    <i className="fa-solid fa-motorcycle"></i>
                    <span>Delivery</span>
                    <span className="days">5 Working Days</span>
                  </div>
                  <div className="terms">
                    <i className="fa-solid fa-rotate-left"></i>
                    <span>Product returns and exchanges Terms 15 days</span>
                    <span className="conditions">Conditions</span>
                  </div>
                </div>
                <div className="add-cart">
                  <button
                    onClick={() => {
                      addItemToCart(productDetails.id);
                      toast.success("The Product is added Successfully", {
                        position: "top-center",
                      });
                    }}
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductDetails;
