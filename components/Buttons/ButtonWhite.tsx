"use client";
import React from "react";

interface Props {
	text: string;
	url: string;
}
export default function ButtonWhite({url, text}: Props) {
	return (
		<a
			href={url}
			className="btn-primary shrink-0 box-border appearance-none text-black text-center cursor-pointer w-auto self-center bg-white ml-[10px] px-[35px] py-[15px] rounded-[15px] border-solid border-white border-0 max-sm:px-[15px] max-sm:py-[10px]">
			{text}
		</a>
	);
}