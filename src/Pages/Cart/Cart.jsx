import React, { useContext } from "react";
import "./Cart.css";
import CartContext from "../../Context/CartContext";
import toast from "react-hot-toast";
function Cart() {
  const { cartItems, deleteCartItem } = useContext(CartContext);
  return (
    <div className="cart-page">
      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <div className="container">
            <h2>Your Cart Is Empty !</h2>
          </div>
        </div>
      ) : (
        <div className="container">
          <div className="cart-head">
            <h4>Shopping Cart</h4>
          </div>
          <table className="cart-content">
            <thead>
              <tr>
                <th className="product">Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr>
                  <td className="product-container">
                    <img src={item.img} alt="" />
                    <p>{item.model}</p>
                  </td>
                  <td>${item.price}</td>
                  <td>{item.quantity}</td>
                  <td>${item.price * item.quantity}</td>
                  <td>
                    <i
                      onClick={() => {
                        deleteCartItem(item.id);
                        toast.success("The Item Was Deleted Successfully")
                      }}
                      className="fa-regular fa-trash-can"
                    ></i>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="check-out-coupon">
            <div className="coupon">
              <input type="text" name="" id="" placeholder="Coupon Code" />
              <button>Apply Coupon</button>
            </div>
            <div className="check-out">
              <h5>Cart Total</h5>
              <div className="subtotal">
                <p>Subtotal</p>
                <p>
                  $
                  {cartItems.reduce(
                    (acu, curr) => acu + curr.price * (curr.quantity || 1),
                    0
                  )}
                </p>
              </div>
              <div className="shipping">
                <p>Shipping</p>
                <p>Free</p>
              </div>
              <div className="total">
                <p>Total</p>
                <p>
                  $
                  {cartItems.reduce(
                    (acu, curr) => acu + curr.price * (curr.quantity || 1),
                    0
                  )}
                </p>
              </div>
              <button>Procees to checkout</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
