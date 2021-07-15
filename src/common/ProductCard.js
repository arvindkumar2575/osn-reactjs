import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.scss";

function ProductCard({title}) {
	return (
		<>
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
                        <div className="p_title">{title}</div>
                    </Link>
                    <div>
                        <div className="p_desc">
                            <div className="p_quantity_detail">
                                <div className="p_quantity">3Kg</div>
                            </div>
                            <div className="p_price_detail">
                                <div className="p_price">Rs.120</div>
                                <div className="p_previous">Rs.130</div>
                            </div>
                        </div>

                        <Link to="">
                            <div className="p_addtocart">Add to Cart</div>
                        </Link>
                    </div>
                </div>
            </div>
		</>
	);
}

export default ProductCard;
