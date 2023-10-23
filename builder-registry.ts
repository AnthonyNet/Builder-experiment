import { Builder, withChildren } from "@builder.io/react";
import dynamic from "next/dynamic";
import Tabs from "./components/Tabs/Tabs";
import "@builder.io/widgets";
import "@builder.io/widgets/dist/lib/builder-widgets-async";

const imageUrl = "https://cdn.builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d";

Builder.registerComponent(
	dynamic(() => import("./components/Hero/Carousel-item")),
	{
		name: "hero-carousel-item",
		inputs: [
			{
				name: "heading",
				type: "string",
				required: true,
				defaultValue: "Řízení rizik",
			},
			{
				name: "paragraph",
				type: "string",
				defaultValue:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, temporibus eaque? Laboriosam in rerum error nam quos nobis reprehenderit.",
			},
			{
				name: "button1",
				type: "string",
				defaultValue: "Předejít škodám",
			},
			{
				name: "button2",
				type: "string",
				defaultValue: "Více informací",
			},
			{
				name: "button1Link",
				type: "url",
				defaultValue: "Předejít škodám",
			},
			{
				name: "button2Link",
				type: "url",
				defaultValue: "Více informací",
			},
			{
				name: "image",
				type: "file",
				allowedFileTypes: ["jpeg", "jpg", "png", "svg"],
				defaultValue: imageUrl,
			},
		],
	}
);



// ------------------
// Buttons
// ------------------

Builder.registerComponent(
	dynamic(() => import("./components/Buttons/Button")),
	{
		name: "Button",
		inputs: [
			{
				// Option to select a value
				name: "backgroundColor",
				type: "string", // You can use a different type based on your needs
				defaultValue: "red",
				enum: ["red", "blue", "white"],
			},
			{
				name: "text",
				type: "string",
				defaultValue: "Button",
			},
			{
				name: "url",
				type: "url",
				defaultValue: "#",
			},
		],
	}
);

// ------------------
// Tabs
// ------------------


// pass your custom component to withChildren()
const TabsChildren = withChildren(Tabs);

Builder.registerComponent(TabsChildren, {
	name: "TabsCustom",
	inputs: [
		{
			name: "tabs",
			type: "list",
			required: true,
			subFields: [
				{
					name: "bottom",
					type: "file",
					allowedFileTypes: ["jpeg", "jpg", "png", "svg"],
					required: true,
				},
				{
					name: "heading",
					type: "string",
					required: true,
				},
				{
					name: "paragraph",
					type: "longText",
					required: true,
				},
			],
		},
		{
			name: "iconRight",
			type: "file",
			allowedFileTypes: ["jpeg", "jpg", "png", "svg"],
			defaultValue: imageUrl,
			required: true,
		},
	],
});
