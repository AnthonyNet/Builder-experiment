"use client";
import React from "react";

interface Props {
	image: string;
	iconSmall: string;
}
export default function Picture({ image }: Props) {
	return (
		<picture>
			<img
				src={image}
				fetchPriority="low"
				alt="carouselImage"
			/>
		</picture>
	);
}
