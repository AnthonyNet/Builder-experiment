"use client";
import React from "react";

interface Props {
	text: string;
	url: string;
}
export default function ButtonBlue({ url, text }: Props) {
	return (
		<a
			href={url}
			className="btn-primary shrink-0 box-border  text-white text-center cursor-pointer  self-center bg-[#5c779c] px-[35px] py-[15px] rounded-[15px] max-sm:px-[15px] max-sm:py-[10px]">
			{text}
		</a>
	);
}
