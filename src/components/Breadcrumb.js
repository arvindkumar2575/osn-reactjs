import React from "react";
import "./Breadcrumb.scss";
import { Link } from "react-router-dom";

function Breadcrumb() {
	return (
		<>
			<nav className="breadcrumbs" aria-label="breadcrumb">
				<ol class="breadcrumb">
					<li class="breadcrumb-item">
						<Link to="#">Home</Link>
					</li>
					<li class="breadcrumb-item">
						<Link to="#">Library</Link>
					</li>
					<li class="breadcrumb-item active" aria-current="page">
						Data
					</li>
				</ol>
			</nav>
		</>
	);
}

export default Breadcrumb;
