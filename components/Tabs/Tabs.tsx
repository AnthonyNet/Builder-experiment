"use client";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TabItem from "./TabItem";
import TabContentItem from "./TabContentItem";
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
	heading1: string;

	iconBottom2: string;
	heading2: string;

	iconBottom3: string;
	heading3: string;

	iconBottom4: string;
	heading4: string;

	iconBottom5: string;
	heading5: string;

	iconBottom6: string;
	heading6: string;

	tabHeading1: string;
	tabHeading2: string;
	tabHeading3: string;
	tabHeading4: string;
	tabHeading5: string;
	tabHeading6: string;

	tabParagraph1: string;
	tabParagraph2: string;
	tabParagraph3: string;
	tabParagraph4: string;
	tabParagraph5: string;
	tabParagraph6: string;

	tabURL1: string;
	tabURL2: string;
	tabURL3: string;
	tabURL4: string;
	tabURL5: string;
	tabURL6: string;
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
							className="text-center transition-all duration-1000 ease-in-out  rounded-xl"
							key={tab.heading.toLowerCase()}>
							<div className="m-auto flex flex-col bg-gray-800  px-2  shadow-lg __tabContent rounded-b-lg">
								<p className="text-[#c7c7c7] py-4">{tab.paragraph}</p>
							</div>
						</AccordionContent>
					</AccordionItem>
				))}
			</Accordion>

			<Tabs
				defaultValue={tabs[0]?.tabHeading.toLowerCase()}
				className="max-sm:hidden w-full  bg-[#243752] mr-auto __tabs">
				<TabsList className="flex flex-col bg-[#243752] w-full h-auto">
					<div className="w-full flex flex-row flex-wrap gap-1 justify-center pt-2 m-auto">
						{tabs.map((tab, index) => (
							<TabsTrigger
								value={tab.tabHeading.toLowerCase()}
								key={tab.tabHeading.toLowerCase()}
								className="w-[99%] sm:w-[49.5%] md:w-[32.5%] h-auto bg-[#F25944] rounded-xl cursor-pointer transition-time ease-in-out duration-1000 hover:bg-red-800">
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
				{tabs.map((tab) => (
					<TabsContent
						className="text-center transition-all duration-1000 ease-in-out"
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
