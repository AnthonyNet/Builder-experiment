"use client";
import React from "react";

interface Props {
	image: string;
}
export default function HeroImage({ image }: Props) {
	return (
		<picture>
			<img
				src={image}
				fetchPriority="high"
				alt="carouselImage"
			/>
		</picture>
	);
}
