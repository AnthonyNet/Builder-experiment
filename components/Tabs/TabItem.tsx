"use client";
import React from "react";

interface Props {
	iconRight: string;
	iconBottom: string;
	heading: string;
}
export default function TabItem({ iconRight, iconBottom, heading }: Props) {
	return (
		<div className="w-full h-full flex flex-col transition-all ease-in-out duration-1000 transform hover:scale-95 __tab-item">
			<img
				className="self-end w-6 3xl:w-8   transition-all ease-in-out duration-1000  __rotate"
				src={iconRight}
				alt="servicesIcon"
			/>
			<span className="w-10 self-start mt-auto">
				<img
					className="object-contain w-full h-full"
					src={iconBottom}
					alt="servicesIcon"
				/>
			</span>
			<h3 className="text-xl self-start text-white">{heading}</h3>
		</div>
	);
}