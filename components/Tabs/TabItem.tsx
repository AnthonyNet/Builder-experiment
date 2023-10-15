"use client";
import React from "react";

interface Props {
	iconRight: string;
	iconBottom: string;
	heading: string;
	index: number;
}
export default function TabItem({ iconRight, iconBottom, heading, index }: Props) {
	return (
		<div className="w-full h-full flex flex-col flex-wrap transition-all ease-in-out duration-1000 transform sm:hover:scale-95 __tab-item">
			<img
				className="self-end w-6 3xl:w-8   transition-all ease-in-out duration-1000  __rotate"
				src={iconRight}
				alt="servicesIcon"
			/>
			<span className="self-start mt-auto pl-2">
				<h2 className="text-2xl md:text-3xl self-start text-white">{index}.</h2>
			</span>
			<h3 className="flex  flex-wrap justify-start text-2xl text-white pl-2">{heading}</h3>
		</div>
	);
}
