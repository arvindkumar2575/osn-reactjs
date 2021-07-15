import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
	return (
		<>
			<nav className="navbar navbar-expand-lg navbar-light bg-light navbar-fixed-top">
				<div className="container-fluid">
					<Link className="navbar-brand" to="/">
						<img
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/OSN_News_logo_%282020%29.svg/1280px-OSN_News_logo_%282020%29.svg.png"
							alt="logo"
							height="24"
							className="d-inline-block align-text-top"
						/>
						{/* OSN Services */}
					</Link>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<Link
									aria-current="page"
									to="/"
								>
									Home
								</Link>
							</li>
							<li className="nav-item">
								<Link
									to="/about-us"
								>
									About Us
								</Link>
							</li>
						</ul>
						{/* <button type="button" className="btn btn-primary btn-sm">
							Small button
						</button> */}
					</div>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
