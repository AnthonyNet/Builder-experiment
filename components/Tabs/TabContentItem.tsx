"use client";
import React from "react";

interface Props {
	heading: string;
	paragraph: string;
	url: string;
}
export default function TabIContenttem({ heading, paragraph, url }: Props) {
	return (
		<div className="m-auto flex flex-col bg-gray-800 p-2 rounded-lg shadow-lg">
			<h3 className="text-white text-2xl font-bold">{heading}</h3>
			<p className="text-[#c7c7c7] py-4">{paragraph}</p>

		</div>
	);
}
