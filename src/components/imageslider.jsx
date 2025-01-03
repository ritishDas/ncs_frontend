import React, { useState } from "react";

const ImageSlider = ({ images }) => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const handlePrev = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === 0 ? images.length - 1 : prevIndex - 1
		);
	};

	const handleNext = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === images.length - 1 ? 0 : prevIndex + 1
		);
	};

	return (
		<div style={styles.slider}>
		<button className="cfb" onClick={handlePrev} style={styles.button}>
		&#9664; {/* Left Arrow */}
		</button>
		<img
		src={images[currentIndex]}
		alt={`Slide ${currentIndex + 1}`}
		style={styles.image}
		/>
		<button className="cfb" onClick={handleNext} style={styles.button}>
		&#9654; {/* Right Arrow */}
		</button>
		</div>
	);
};

const styles = {
	slider: {
		display: "flex",
		alignItems: "center",
		justifyContent: "space-around",
		position: "relative",
		width: "100%",
		height:"600px",
		margin: "100px auto",
	},
	image: {
		height: "100%",
		maxWidth:"80%"
	},
	button: {
		background: "rgba(0, 0, 0, 0.5)",
		color: "white",
		cursor: "pointer",
		padding: "10px",
		fontSize: "18px",
	},
};

export default ImageSlider;
