export const projects = [
	{
		id: "tugon",
		title: "Tugon",
		tagline: "Report. Respond. Resolve.",

		description:
			"An issue reporting and management system designed for schools and offices. Reporters can submit issues while coordinators and administrators manage, track, and resolve them.",

		preview: {
			type: "image",
			src: "/projects/tugon-banner.png",
			alt: "Tugon issue reporting and management system interface",
		},

		problem:
			"Issues can be difficult to track when reports are handled through scattered messages or manual records. Tugon provides a centralized place for submitting and managing reported issues.",

		contribution:
			"Full-stack development covering the React frontend, Express REST API, PostgreSQL database, and role-based application features.",

		features: [
			"Submit issue reports with category, priority, and description",
			"Track issues through different statuses",
			"Coordinator and administrator management views",
			"Reporter dashboard and My Reports section",
			"User and category management",
			"REST API backed by PostgreSQL",
		],

		architecture:
			"React + Vite + Tailwind CSS client\n        ↓\nExpress REST API\n        ↓\nPostgreSQL database",

		decisions: [
			"Separated the React client from the Express API.",
			"Used PostgreSQL for relational application data.",
			"Used role-based access to separate administrator, coordinator, and reporter functionality.",
			"Used reusable React components for dashboards, tables, modals, and issue views.",
		],

		technologies: [
			"React",
			"Vite",
			"Tailwind CSS",
			"JavaScript",
			"Node.js",
			"Express",
			"PostgreSQL",
			"Vercel",
			"Render",
		],

		github: "https://github.com/cj67pl/community-issue-tracker.git",
		demo: "https://tugon-issue-reporting-and-management-jfr9-dusky.vercel.app/",
	},
];
