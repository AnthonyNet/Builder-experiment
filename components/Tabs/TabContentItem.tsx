"use client";
import React from "react";

interface Props {
	heading: string;
	paragraph: string;
	url: string;
}
export default function TabIContenttem({ heading, paragraph, url }: Props) {
	return (
		<div className="max-w-2xl m-auto h-full flex flex-col bg-gray-800 p-4 rounded-lg shadow-lg">
			<h3 className="text-white text-2xl font-bold">{heading}</h3>
			<p className="text-[#c7c7c7] py-4">{paragraph}</p>
			<a
				href={url}
				className="py-4 px-6 bg-[#F25944] hover:bg-red-700 transition-time ease-in-out  duration-700 text-white rounded-xl self-center max-w-md font-bold">
				Ukázat více...
			</a>
		</div>
	);
}
