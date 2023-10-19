"use client";
import React from "react";

const colours = {
	red: "bg-f13Red text-white",
	blue: "bg-f13Blue text-white",
	white: "bg-white text-black",
};
interface Props {
	text: string;
	url: string;
	backgroundColor: keyof typeof colours;
}
export default function Button({url, text, backgroundColor}: Props) {


	return (
		<a
			href={url}
			className={`btn-primary shrink-0 box-border font-semibold appearance-none  text-center cursor-pointer w-auto self-center  px-[35px] py-[15px] rounded-[15px] border-solid border-white border-0 max-sm:px-[15px] max-sm:py-[10px] ${colours[backgroundColor]}`}>
			{text}
		</a>
	);
}