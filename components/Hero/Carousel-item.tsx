"use client";
import React, { useState } from "react";

interface Props {
	heading: string;
	paragraph: string;
	button1: string;
	button2: string;
	button1Link: string;
	button2Link: string;
	image: string;
}

export default function CarouselItem(props: Props) {
	const {
		heading,
		paragraph,
		button1,
		button2,
		button1Link,
		button2Link,
		image,
	} = props;

	return (
		<div className=" gap-[20px] flex  flex-col-reverse lg:flex-row lg:items-stretch max-md:gap-0  max-lg:justify-center items-center __custom-carousel-item">
			<div className="flex flex-col w-full h-full  lg:w-[67%]">
				<div className=" w-full min-h-[40vh] sm:min-h-[300px] box-border  flex flex-col items-center justify-around  m-auto md:items-start lg:pl-[60px]  max-sm:px-4">
					<h2 className=" font-bold text-white text-[70px] md:text-[85px] lg:text-[70px] max-lg:self-center  max-lg:text-center  max-sm:text-[32px]">
						{heading}
					</h2>

					<p className="box-border text-center lg:text-left text-[#9ea9bd] text-md md:text-2xl lg:text-xl ">
						<span>{paragraph}</span>
					</p>

					<div className="w-full flex flex-col justify-center max-sm:items-center  sm:flex-row lg:justify-start self-center lg:mr-auto text-md">
						<a
							href={button1Link}
							className=" btn-primary  text-white text-center cursor-pointer w-auto  bg-[rgba(239,64,65,1)] px-[35px] py-[15px] rounded-[15px] max-sm:px-[15px] max-sm:py-[10px] max-sm:mt-4">
							{button1}
						</a>
						<a
							href={button2Link}
							className="btn-primary text-black text-center cursor-pointer w-auto  bg-white sm:ml-[10px] px-[35px] py-[15px] rounded-[15px] max-sm:px-[15px] max-sm:py-[10px] max-sm:mt-4">
							{button2}
						</a>
					</div>
				</div>
			</div>
			<div className="lg:w-[33%] h-[100px] md:h-[150px]  lg:h-[300px] __item">
				<img className="w-full h-full" src={image} alt="Custom Image" />
			</div>
		</div>
	);
}
