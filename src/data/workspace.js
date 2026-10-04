import {
	Folder,
	User,
	Wrench,
	Sprout,
	NotebookPen,
	FlaskConical,
} from "lucide-react";

import { FaGithub } from "react-icons/fa";

export const workspaceTiles = [
	{
		id: "projects",
		name: "PROJECTS",
		icon: Folder,
		description:
			"Applications and ideas I've turned into working software.",
		className: "t-projects hero",
	},

	{
		id: "about",
		name: "ABOUT",
		icon: User,
		description: "How I approach building, learning, and improving.",
		className: "t-about",
	},

	{
		id: "tech",
		name: "TECH STACK",
		icon: Wrench,
		description: "Technologies and tools I've worked with.",
		className: "t-tech",
	},

	{
		id: "learning",
		name: "LEARNING",
		icon: Sprout,
		description: "What I'm currently exploring and improving.",
		className: "t-learning",
	},

	{
		id: "notes",
		name: "DEV NOTES",
		icon: NotebookPen,
		description: "Lessons, bugs, decisions, and things I've learned.",
		className: "t-notes",
	},

	{
		id: "lab",
		name: "PLAYGROUND / LAB",
		icon: FlaskConical,
		description: "Experiments, practice projects, and ideas.",
		className: "t-lab",
	},

	{
		id: "github",
		name: "GITHUB",
		icon: FaGithub,
		description: "Source code, repositories, and project history.",
		className: "t-github",
	},
];
