import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
	const [isActive, setActive] = useState("active");

	const addRemoveClass = () => {
		setActive(!isActive);
	};
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
							{/* <li className="nav-item">
								<Link
									className={`nav-link ${isActive ? "active" : ""}`}
									onClick={addRemoveClass}
									aria-current="page"
									to="/"
								>
									Home
								</Link>
							</li>
							<li className="nav-item">
								<Link
									className={`nav-link ${isActive ? "active" : ""}`}
									onClick={addRemoveClass}
									to="/about-us"
								>
									About Us
								</Link>
							</li> */}
							{/* <li className="nav-item dropdown">
								<Link
									className="nav-link dropdown-toggle"
									href="#"
									id="navbarDropdown"
									role="button"
									data-bs-toggle="dropdown"
									aria-expanded="false"
								>
									Dropdown
								</Link>
								<ul className="dropdown-menu" aria-labelledby="navbarDropdown">
									<li>
										<Link className="dropdown-item" href="#">
											Action
										</Link>
									</li>
									<li>
										<Link className="dropdown-item" href="#">
											Another action
										</Link>
									</li>
									<li>
										<hr className="dropdown-divider" />
									</li>
									<li>
										<Link className="dropdown-item" href="#">
											Something else here
										</Link>
									</li>
								</ul>
							</li> */}
						</ul>
						{/* <form className="d-flex">
								<input
									className="form-control me-2"
									type="search"
									placeholder="Search"
									aria-label="Search"
								/>
								<button className="btn btn-outline-success" type="submit">
									Search
								</button>
							</form> */}
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
