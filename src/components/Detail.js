// Filename - components/Detail.js

import React from "react";

function Detail({ selected, closeDetail }) {
	return (
		<section className="detail">
			<i class="fa-sharp fa-thin fa-camera-movie"></i>
			<div className="content">
				<h2>{selected.Title}</h2>
				<span>{selected.Year}</span>
				<p className="rating">
					Rating: {selected.imdbRating}
				</p>

				<div className="about">
					<img src={selected.Poster} alt="" />

					<p>{selected.Plot}</p>
				</div>
				<button
					className="close"
					onClick={closeDetail}
				>
					Close
				</button>
			</div>
		</section>
	);
}

export default Detail;
