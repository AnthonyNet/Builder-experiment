"use client";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TabItem from "./TabItem";
import TabContentItem from "./TabContentItem";
import {useState} from "react";

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

interface Props {
	tabs: {
		bottom: string
		heading: string
		tabHeading: string
		paragraph: string
	}[];
	iconRight: string;
	iconBottom1: string;
	iconBottom2: string;
	iconBottom3: string;
	iconBottom4: string;
	iconBottom5: string;
}
export default function TabsCustom({tabs = [], ...props}: Props) {

	return (
		<>
			<Accordion type="single" collapsible className="w-full">
				{tabs.map((tab, index) => (
					<AccordionItem
						value={tab.tabHeading.toLowerCase()}
						key={tab.tabHeading.toLowerCase()}
						className="sm:hidden w-[99%] sm:w-[49.5%] md:w-[32.5%] h-auto cursor-pointer transition-time ease-in-out duration-1000 __accordion border-none my-1">
						<AccordionTrigger className="bg-[#F25944]  rounded-xl pl-2">
							<TabItem
								index={index + 1}
								iconRight={props.iconRight}
								iconBottom={tab.bottom}
								heading={tab.heading}
							/>
						</AccordionTrigger>

						<AccordionContent
							key={tab.heading.toLowerCase()}>
							<div className="m-auto flex flex-col bg-gray-800  px-2  shadow-lg __tabContent rounded-b-lg">
								<p className="text-[#c7c7c7] py-4">{tab.paragraph}</p>
							</div>
						</AccordionContent>
					</AccordionItem>
				))}
			</Accordion>

			<Tabs className="max-sm:hidden w-full min-h-[55dvh] md:min-h-[40dvh]  bg-[#243752] mr-auto __tabs">
				<TabsList className="flex flex-col bg-[#243752] w-full h-auto">
					<div className="w-full flex flex-row flex-wrap gap-1 justify-center pt-2 m-auto">
						{tabs.map((tab, index) => (
							<TabsTrigger
								value={tab.tabHeading.toLowerCase()}
								key={tab.tabHeading.toLowerCase()}
								className="w-[99%] sm:w-[49.5%] md:w-[32.5%] h-auto rounded-xl cursor-pointer transition-time ease-in-out duration-1000 bg-[#F25944] hover:bg-red-800" >
								<TabItem
									index={index + 1}
									iconRight={props.iconRight}
									iconBottom={tab.bottom}
									heading={tab.heading}
								/>
							</TabsTrigger>
						))}
					</div>
				</TabsList>
				{tabs.map((tab, index) => (
					<TabsContent
						className="text-center"
						value={tab.tabHeading.toLowerCase()}
						key={tab.tabHeading.toLowerCase()}>
						<TabContentItem
							heading={tab.heading}
							paragraph={tab.paragraph}
							url=""
						/>
					</TabsContent>
				))}
			</Tabs>
		</>
	);
}
