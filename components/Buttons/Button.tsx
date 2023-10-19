"use client";
import React from "react";

interface Props {
	text: string;
	url: string;
	backgroundColor: string;
}
export default function Button({url, text, backgroundColor}: Props) {
	return (
		<a
			href={url}
			className={
				"btn-primary shrink-0 box-border font-semibold appearance-none  text-center cursor-pointer w-auto self-center  px-[35px] py-[15px] rounded-[15px] border-solid border-white border-0 max-sm:px-[15px] max-sm:py-[10px] " + backgroundColor
			}>
			{text}
		</a>
	);
}