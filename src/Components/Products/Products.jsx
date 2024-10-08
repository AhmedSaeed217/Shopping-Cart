import React, { useContext, useState } from "react";
import "./Products.css";
import { CartContext } from "../../Context/CartContext";
function Products() {
  const { products, addItemToCart, getCartItems } = useContext(CartContext);
  const [quantity, setQuanitity] = useState(0);
  const [activeBullet, setActiveBullet] = useState("1");
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(16);

  // const handleAddItem = (product) => {
  //   addItemToCart(product);
  // };
  return (
    <div className="products">
      <div className="container">
        <div className="products-head">
          <h4>Our Products</h4>
          <h2>Explore Our Products</h2>
        </div>

        <div className="products-container">
          {products
            .map((p) => (
              <div key={p.id} className="product">
                {p.isTrending ? (
                  <div className="product-trend">
                    <span>Trending</span>
                  </div>
                ) : (
                  ""
                )}
                <div className="product-img">
                  <img src={p.img} alt="" />
                </div>
                <div className="product-info">
                  <p className="model">{p.model}</p>
                  <p className="spec">{p.description.slice(0, 42)}...</p>
                  <span className="price">{p.price}$</span>
                </div>
                {quantity === 0 ? (
                  <div className="add-cart">
                    <button
                      onClick={() => {
                        addItemToCart(p.id);
                        console.log(getCartItems());
                      }}
                    >
                      Add To Cart
                    </button>
                  </div>
                ) : (
                  <div className="add-custom">
                    <i
                      onClick={() => setQuanitity(quantity + 1)}
                      className="fa-solid fa-plus"
                    ></i>
                    <span>{quantity}</span>
                    <i
                      onClick={() => setQuanitity(quantity - 1)}
                      className="fa-solid fa-minus"
                    ></i>
                  </div>
                )}
              </div>
            ))
            .slice(start, end)}
        </div>

        <div className="pagination">
          <span>
            <i class="fa-solid fa-caret-left"></i>
          </span>
          <span
            onClick={() => {
              setActiveBullet("1");
              setStart(0);
              setEnd(16);
            }}
            className={activeBullet === "1" ? "active" : ""}
          >
            1
          </span>
          <span
            onClick={() => {
              setActiveBullet("2");
              setStart(16);
              setEnd(32);
            }}
            className={activeBullet === "2" ? "active" : ""}
          >
            2
          </span>
          <span
            onClick={() => {
              setActiveBullet("3");
              setStart(32);
              setEnd(48);
            }}
            className={activeBullet === "3" ? "active" : ""}
          >
            3
          </span>
          <span
            onClick={() => {
              setActiveBullet("4");
              setStart(48);
              setEnd(64);
            }}
            className={activeBullet === "4" ? "active" : ""}
          >
            4
          </span>
          <span>
            <i class="fa-solid fa-caret-right"></i>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Products;
