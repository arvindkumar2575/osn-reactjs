import React from "react";
import { Link } from "react-router-dom";
import "./Product.scss";

function Product() {
	return (
		<>
			<div id="product-catelog" className="product-catelog">
				<h3 className="section-head">Products</h3>
				{/* <p className="section-head-desc">Here's our services list</p> */}
				<div className="product-cards">
					<div className="product-card">
						<div className="offer-ribbon">Off 80%</div>
						<div className="product-image">
							<img
								src="https://www.blexar.com/avatar.png"
								alt="product-image"
								title="P1"
							/>
						</div>
						<div className="price-section">
							<Link to="">
								<div className="p_title">Product Title Here</div>
							</Link>
							<div className="p_desc">
								<div className="p_quantity">3Kg</div>
								<div className="p_price_detail">
									<div className="p_price">Rs. 120</div>
									<div className="p_previous">Rs. 112</div>
								</div>
							</div>

							<Link to="">
								<div className="p_addtocart">Add to Cart</div>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Product;
