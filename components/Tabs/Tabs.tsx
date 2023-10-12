"use client";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TabItem from "./TabItem";
import TabContentItem from "./TabContentItem";

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
		<Tabs defaultValue={tabs[0]?.tabHeading.toLowerCase()} className="w-full  bg-[#243752] mr-auto">
			<TabsList className="flex flex-col bg-[#243752]">
				<div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 lg:gap-4 pt-2 m-auto">
					{tabs.map((tab, index) => (
						<TabsTrigger
							value={tab.tabHeading.toLowerCase()}
							key={tab.tabHeading.toLowerCase()}
							className=" h-30 bg-[#F25944] rounded-xl cursor-pointer transition-time ease-in-out duration-1000 hover:bg-red-800">
							<TabItem
								index={index+1}
								iconRight={props.iconRight}
								iconBottom={tab.bottom}
								heading={tab.tabHeading}
							/>
						</TabsTrigger>
					))}
				</div>
			</TabsList>
			{tabs.map((tab) => (
				<TabsContent className="text-center" value={tab.tabHeading.toLowerCase()} key={tab.tabHeading.toLowerCase()}>
					<TabContentItem
						heading={tab.heading}
						paragraph={tab.paragraph}
						url=""
					/>
				</TabsContent>
			))}
		</Tabs>
	);
}
