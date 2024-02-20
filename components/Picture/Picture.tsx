"use client";
import React from "react";

interface Props {
	iconBig: string;
	iconSmall: string;
}
export default function Picture({ iconBig, iconSmall }: Props) {
	return (
		<picture>
			<img
				src={iconBig}
				/*srcset="/image.png?width=100 100w, /image.png?width=200 200w, /image.png?width=400 400w, /image.png?width=800 800w"*/
				sizes="(max-width: 638px) 41vw, (max-width: 998px) 31vw, 22vw"
				decoding="async"
				alt="carouselImage"
			/>
		</picture>
	);
}
