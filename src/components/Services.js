import "./Services.scss";
import React from "react";
import { Link } from "react-router-dom";
import ServicesCard from "../common/ServicesCard";

function Services() {
	return (
		<>
			<div id="services" className="services">
				<h3 className="section-head">Our Services</h3>
				{/* <p className="section-head-desc">Here's our services list</p> */}
				<div className="thumbnails-cards">
					<ServicesCard />
					<ServicesCard />
					<ServicesCard />
					<ServicesCard />
					<ServicesCard />
				</div>
			</div>
		</>
	);
}

export default Services;
