import { Builder, withChildren } from "@builder.io/react";
import dynamic from "next/dynamic";
import Tabs from "./components/Tabs/Tabs";

const imageUrl = "https://cdn.builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d";
const lorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, temporibus eaque? Laboriosam in rerum error nam quos nobis reprehenderit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, temporibus eaque? Laboriosam in rerum error nam quos nobis reprehenderit.";

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

Builder.registerComponent(
	dynamic(() => import("./components/ServicesSection/Item")),
	{
		name: "ServicesItem",
		inputs: [
			{
				name: "image",
				type: "file",
				allowedFileTypes: ["jpeg", "jpg", "png", "svg"],
				defaultValue: imageUrl,
			},
			{
				name: "headline",
				type: "string",
				defaultValue: "Nadpis",
			},

			{
				name: "description",
				type: "string",
				defaultValue:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, temporibus eaque? Laboriosam in rerum error nam quos nobis reprehenderit.",
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
			},
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

// ------------------
// Tabs
// ------------------

Builder.registerComponent(
	dynamic(() => import("./components/Tabs/TabItem")),
	{
		name: "TabItem",
		inputs: [
			{
				name: "value",
				type: "text",
				allowedFileTypes: ["jpeg", "jpg", "png", "svg"],
				defaultValue: "",
			},
			{
				name: "iconRight",
				type: "file",
				allowedFileTypes: ["jpeg", "jpg", "png", "svg"],
				defaultValue: imageUrl,
			},
			{
				name: "iconBottom",
				type: "file",
				allowedFileTypes: ["jpeg", "jpg", "png", "svg"],
				defaultValue: imageUrl,
			},
			{
				name: "heading",
				type: "string",
				defaultValue: "Nadpis",
			},
		],
	}
);

// pass your custom component to withChildren()
const TabsChildren = withChildren(Tabs);

Builder.registerComponent(TabsChildren, {
	name: "TabsCustom",
	inputs: [
		{
			name: "iconRight",
			type: "file",
			allowedFileTypes: ["jpeg", "jpg", "png", "svg"],
			defaultValue: imageUrl,
		},
		{
			name: "iconBottom1",
			type: "file",
			allowedFileTypes: ["jpeg", "jpg", "png", "svg"],
			defaultValue: imageUrl,
		},
		{
			name: "heading1",
			type: "string",
			defaultValue: "Nadpis",
		},

		{
			name: "iconBottom2",
			type: "file",
			allowedFileTypes: ["jpeg", "jpg", "png", "svg"],
			defaultValue: imageUrl,
		},
		{
			name: "heading2",
			type: "string",
			defaultValue: "Nadpis",
		},

		{
			name: "iconBottom3",
			type: "file",
			allowedFileTypes: ["jpeg", "jpg", "png", "svg"],
			defaultValue: imageUrl,
		},
		{
			name: "heading3",
			type: "string",
			defaultValue: "Nadpis",
		},

		{
			name: "iconBottom4",
			type: "file",
			allowedFileTypes: ["jpeg", "jpg", "png", "svg"],
			defaultValue: imageUrl,
		},
		{
			name: "heading4",
			type: "string",
			defaultValue: "Nadpis",
		},

		{
			name: "iconBottom5",
			type: "file",
			allowedFileTypes: ["jpeg", "jpg", "png", "svg"],
			defaultValue: imageUrl,
		},
		{
			name: "heading5",
			type: "string",
			defaultValue: "Nadpis",
		},

		{
			name: "iconBottom6",
			type: "file",
			allowedFileTypes: ["jpeg", "jpg", "png", "svg"],
			defaultValue: imageUrl,
		},
		{
			name: "heading6",
			type: "string",
			defaultValue: "Nadpis",
		},

		{
			name: "tabHeading1",
			type: "string",
			defaultValue: "Nadpis",
		},
		{
			name: "tabParagraph1",
			type: "longText",
			defaultValue: lorem,
		},
		{
			name: "tabHeading2",
			type: "string",
			defaultValue: "Nadpis",
		},
		{
			name: "tabParagraph2",
			type: "longText",
			defaultValue: lorem,
		},
		{
			name: "tabHeading3",
			type: "string",
			defaultValue: "Nadpis",
		},
		{
			name: "tabParagraph3",
			type: "longText",
			defaultValue: lorem,
		},
		{
			name: "tabHeading4",
			type: "string",
			defaultValue: "Nadpis",
		},
		{
			name: "tabParagraph4",
			type: "longText",
			defaultValue: lorem,
		},
		{
			name: "tabHeading5",
			type: "string",
			defaultValue: "Nadpis",
		},
		{
			name: "tabParagraph5",
			type: "longText",
			defaultValue: lorem,
		},
		{
			name: "tabHeading6",
			type: "string",
			defaultValue: "Nadpis",
		},
		{
			name: "tabParagraph6",
			type: "longText",
			defaultValue: lorem,
		},
		{
			name: "tabURL1",
			type: "url",
		},
		{
			name: "tabURL2",
			type: "url",
		},
		{
			name: "tabURL3",
			type: "url",
		},
		{
			name: "tabURL4",
			type: "url",
		},
		{
			name: "tabURL5",
			type: "url",
		},
		{
			name: "tabURL6",
			type: "url",
		}
	],
});
