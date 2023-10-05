"use client";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TabItem from "./TabItem";
import TabContentItem from "./TabContentItem";

interface Props {
	iconRight1: string;
	iconBottom1: string;
	heading1: string;

	iconRight2: string;
	iconBottom2: string;
	heading2: string;

	iconRight3: string;
	iconBottom3: string;
	heading3: string;

	iconRight4: string;
	iconBottom4: string;
	heading4: string;

	iconRight5: string;
	iconBottom5: string;
	heading5: string;

	iconRight6: string;
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
export default function TabsCustom(props: Props) {
	return (
		<Tabs defaultValue="tab1" className="w-full h-auto bg-[#243752]">
			<TabsList className="flex flex-col bg-[#243752]">
				<div className="grid grid-cols-2 grid-rows-3 xl:grid-cols-3 xl:grid-rows-2  gap-2 md:gap-4 mb-4 mt-2 w-full p-2 sm:p-4">
					<TabsTrigger
						value="tab1"
						className=" h-[120px] bg-[#F25944] rounded-xl cursor-pointer transition-time ease-in-out duration-1000 hover:bg-red-800">
						<TabItem
							iconRight={props.iconRight1}
							iconBottom={props.iconBottom1}
							heading={props.heading1}
						/>
					</TabsTrigger>
					<TabsTrigger
						value="tab2"
						className=" h-[120px] bg-[#F25944] rounded-xl flex flex-col">
						<TabItem
							iconRight={props.iconRight2}
							iconBottom={props.iconBottom2}
							heading={props.heading2}
						/>
					</TabsTrigger>
					<TabsTrigger
						value="tab3"
						className=" h-[120px] bg-[#F25944] rounded-xl flex flex-col ">
						<TabItem
							iconRight={props.iconRight3}
							iconBottom={props.iconBottom3}
							heading={props.heading3}
						/>
					</TabsTrigger>

					<TabsTrigger
						value="tab4"
						className=" h-[120px] bg-[#F25944] rounded-xl flex flex-col ">
						<TabItem
							iconRight={props.iconRight4}
							iconBottom={props.iconBottom4}
							heading={props.heading4}
						/>
					</TabsTrigger>
					<TabsTrigger
						value="tab5"
						className=" h-[120px] bg-[#F25944] rounded-xl flex flex-col ">
						<TabItem
							iconRight={props.iconRight5}
							iconBottom={props.iconBottom5}
							heading={props.heading5}
						/>
					</TabsTrigger>
					<TabsTrigger
						value="tab6"
						className=" h-[120px] bg-[#F25944] rounded-xl flex flex-col ">
						<TabItem
							iconRight={props.iconRight6}
							iconBottom={props.iconBottom6}
							heading={props.heading6}
						/>
					</TabsTrigger>
				</div>
			</TabsList>
			<TabsContent value="tab1" className="text-center h-full">
				<TabContentItem
					heading={props.tabHeading1}
					paragraph={props.tabParagraph1}
					url={props.tabURL1}
				/>
			</TabsContent>
			<TabsContent value="tab2" className="text-center h-full ">
				<TabContentItem
					heading={props.tabHeading2}
					paragraph={props.tabParagraph2}
					url={props.tabURL2}
				/>
			</TabsContent>
			<TabsContent value="tab3" className="text-center h-full">
				<TabContentItem
					heading={props.tabHeading3}
					paragraph={props.tabParagraph3}
					url={props.tabURL3}
				/>
			</TabsContent>
			<TabsContent value="tab4" className="text-center h-full ">
				<TabContentItem
					heading={props.tabHeading4}
					paragraph={props.tabParagraph4}
					url={props.tabURL4}
				/>
			</TabsContent>
			<TabsContent value="tab5" className="text-center h-full">
				<TabContentItem
					heading={props.tabHeading5}
					paragraph={props.tabParagraph5}
					url={props.tabURL5}
				/>
			</TabsContent>
			<TabsContent value="tab6" className="text-center h-full ">
				<TabContentItem
					heading={props.tabHeading6}
					paragraph={props.tabParagraph6}
					url={props.tabURL6}
				/>
			</TabsContent>
		</Tabs>
	);
}
