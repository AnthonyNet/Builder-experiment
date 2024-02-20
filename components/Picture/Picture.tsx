"use client";
import React from "react";

interface Props {
	image: string;
	iconSmall: string;
}
export default function Picture({ image }: Props) {
	return (
		<picture>
			<img src={image} loading="lazy" decoding="async" alt="carouselImage" />
		</picture>
	);
}
