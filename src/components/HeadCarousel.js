import React from "react";
import "./HeadCarousel.scss";
import { Link } from "react-router-dom";

function HeadCarousel() {
	return (
		<>
			<div
				id="carouselExampleIndicators"
				className="carousel slide carousel-fade"
				data-bs-ride="carousel"
			>
				<div className="carousel-indicators">
					<button
						type="button"
						data-bs-target="#carouselExampleIndicators"
						data-bs-slide-to="0"
						className="active"
						aria-current="true"
						aria-label="Slide 1"
					></button>
					<button
						type="button"
						data-bs-target="#carouselExampleIndicators"
						data-bs-slide-to="1"
						aria-label="Slide 2"
					></button>
					<button
						type="button"
						data-bs-target="#carouselExampleIndicators"
						data-bs-slide-to="2"
						aria-label="Slide 3"
					></button>
				</div>
				<div className="carousel-inner">
					<div className="carousel-item active" data-bs-interval="4000">
						<img
							src="https://image3.mouthshut.com/images/imagesp/925814651s.jpg"
							className="d-block w-100"
							alt="..."
						/>
					</div>
					<div className="carousel-item" data-bs-interval="4000">
						<img
							src="https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg"
							className="d-block w-100"
							alt="..."
						/>
					</div>
					<div className="carousel-item" data-bs-interval="4000">
						<img
							src="https://newsface.co/wp-content/uploads/2018/09/collection.jpg"
							className="d-block w-100"
							alt="..."
						/>
					</div>
				</div>
				<button
					className="carousel-control-prev"
					type="button"
					data-bs-target="#carouselExampleIndicators"
					data-bs-slide="prev"
				>
					<span
						className="carousel-control-prev-icon"
						aria-hidden="true"
					></span>
					<span className="visually-hidden">Previous</span>
				</button>
				<button
					className="carousel-control-next"
					type="button"
					data-bs-target="#carouselExampleIndicators"
					data-bs-slide="next"
				>
					<span
						className="carousel-control-next-icon"
						aria-hidden="true"
					></span>
					<span className="visually-hidden">Next</span>
				</button>
			</div>
		</>
	);
}

export default HeadCarousel;
