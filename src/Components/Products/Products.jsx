import React from "react";
import "./Products.css";

function Products() {
  /**
     * id:1,
        img:'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/u/n/p/-original-imagugptgsfbxauz.jpeg?q=70',
        imgCousins:[
            'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/p/u/8/-original-imagugptptuacajg.jpeg?q=70',
            'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/t/c/p/-original-imagugptdmkvpwpm.jpeg?q=70',
            'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/f/r/2/-original-imagugptvr3dbzpb.jpeg?q=70'
        ],
        model:'vivo Y200 ',
        brand:'Vivo',
        price:21999,
        color:'',
        space:'8 GB RAM | 128 GB ROM',
        camera:'64MP + 2MP | 16MP Front Camera',
        battery:'4800 mAh Battery',
        count:1,
        isAdded:false,
        type:'Mobile',   
        isTrending:true,
        description:"1 Year Manufacturer Warranty for Phone and 6 Months Warranty for in the Box"
     */
  return (
    <div className="products">
      <div className="container">
        <div className="products-head">
          <h4>Our Products</h4>
          <h2>Explore Our Products</h2>
        </div>

        <div className="products-container">
          <div className="product">
            <div className="product-img">
              <img
                src="https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/u/n/p/-original-imagugptgsfbxauz.jpeg?q=70"
                alt=""
              />
            </div>
            <div className="product-info">
              <p className="model">VIVO Y200</p>
              <p className="spec">8 GB RAM | 128 GB ROM</p>
              <span className="price">21999$</span>
            </div>
            <div className="add-cart">
              <button>Add To Cart</button>
            </div>
          </div>

          <div className="product">
            <div className="product-img">
              <img
                src="https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/u/n/p/-original-imagugptgsfbxauz.jpeg?q=70"
                alt=""
              />
            </div>
            <div className="product-info">
              <p className="model">VIVO Y200</p>
              <p className="spec">8 GB RAM | 128 GB ROM</p>
              <span className="price">21999$</span>
            </div>
            <div className="add-cart">
              <button>Add To Cart</button>
            </div>
          </div>

          <div className="product">
            <div className="product-img">
              <img
                src="https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/u/n/p/-original-imagugptgsfbxauz.jpeg?q=70"
                alt=""
              />
            </div>
            <div className="product-info">
              <p className="model">VIVO Y200</p>
              <p className="spec">8 GB RAM | 128 GB ROM</p>
              <span className="price">21999$</span>
            </div>
            <div className="add-cart">
              <button>Add To Cart</button>
            </div>
          </div>

          <div className="product">
            <div className="product-img">
              <img
                src="https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/u/n/p/-original-imagugptgsfbxauz.jpeg?q=70"
                alt=""
              />
            </div>
            <div className="product-info">
              <p className="model">VIVO Y200</p>
              <p className="spec">8 GB RAM | 128 GB ROM</p>
              <span className="price">21999$</span>
            </div>
            <div className="add-cart">
              <button>Add To Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
