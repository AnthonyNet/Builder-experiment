"use client";
import React from "react";

interface Props {
	image: string;
	headline: string;
	description: string;
	button: string;
}
export default function Item({image, headline, description}: Props) {
	return (
		<div className="flex flex-col items-center max-sm:items-around h-full sm:min-h-[300px] text-white">
			<img className="w-[100px] h-[100px]" src={image} alt="" />
			<h3 className="font-bold text-2xl md:text-3xl text-center">{headline}</h3>
			<p className="py-4 text-center text-[#939fb2]">{description}</p>
		</div>
	);
}