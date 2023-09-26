import { Builder } from "@builder.io/react";
import dynamic from "next/dynamic";

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
				defaultValue:
					"https://cdn.builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d",
			},
		],
	}
);

Builder.registerComponent(
	dynamic(() => import("./components/ServicesSection/Item")),
	{
		name: "ServicesItem",
		inputs: [
			{
				name: "image",
				type: "file",
				allowedFileTypes: ["jpeg", "jpg", "png", "svg"],
				defaultValue:
					"https://cdn.builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d",
			},
			{
				name: "headline",
				type: "string",
				defaultValue:
					"Nadpis",
			},

			{
				name: "description",
				type: "string",
				defaultValue: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, temporibus eaque? Laboriosam in rerum error nam quos nobis reprehenderit.",
			},

		],
	}
);

// ------------------
// Buttons
// ------------------

Builder.registerComponent(
	dynamic(() => import("./components/Buttons/ButtonRed")),
	{
		name: "ButtonRed",
		inputs: [
			{
				name: "text",
				type: "string",
				defaultValue: "ButtonRed",
			},
			{
				name: "url",
				type: "url",
				defaultValue: "#",
			}
		],
	}
);

Builder.registerComponent(
	dynamic(() => import("./components/Buttons/ButtonWhite")),
	{
		name: "ButtonWhite",
		inputs: [
			{
				name: "text",
				type: "string",
				defaultValue: "ButtonWhite",
			},
			{
				name: "url",
				type: "url",
				defaultValue: "#",
			},
		],
	}
);

Builder.registerComponent(
	dynamic(() => import("./components/Buttons/ButtonBlue")),
	{
		name: "ButtonBlue",
		inputs: [
			{
				name: "text",
				type: "string",
				defaultValue: "ButtonBlue",
			},
			{
				name: "url",
				type: "url",
				defaultValue: "#",
			},
		],
	}
);