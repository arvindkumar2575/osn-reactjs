import React from "react";
import "./ServicesCard.scss";
import { Link } from "react-router-dom";

function ServicesCard() {
	return (
		<>
			<Link to="">
				<div className="thumbnail">
					<div>
						<img
							src="https://www.blexar.com/avatar.png"
							alt="thumbnail"
							title="1"
						/>
					</div>
					<p>GST Registration</p>
				</div>
			</Link>
		</>
	);
}

export default ServicesCard;
