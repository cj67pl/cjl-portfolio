import {
	SiHtml5,
	SiJavascript,
	SiReact,
	SiTailwindcss,
	SiVite,
	SiNodedotjs,
	SiExpress,
	SiPostgresql,
	SiMariadb,
	SiMysql,
	SiGit,
	SiGithub,
	SiPostman,
	SiFigma,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";
import { FaCss3Alt, FaBootstrap } from "react-icons/fa";

export const techStack = [
	{
		category: "Frontend",
		technologies: [
			{ name: "HTML", icon: SiHtml5 },
			{ name: "CSS", icon: FaCss3Alt },
			{ name: "JavaScript", icon: SiJavascript },
			{ name: "React", icon: SiReact },
			{ name: "Tailwind CSS", icon: SiTailwindcss },
			{ name: "Bootstrap", icon: FaBootstrap },
			{ name: "Vite", icon: SiVite },
		],
	},
	{
		category: "Backend",
		technologies: [
			{ name: "Node.js", icon: SiNodedotjs },
			{ name: "Express", icon: SiExpress },
		],
	},
	{
		category: "Database",
		technologies: [
			{ name: "PostgreSQL", icon: SiPostgresql },
			{ name: "MariaDB", icon: SiMariadb },
			{ name: "MySQL", icon: SiMysql },
		],
	},
	{
		category: "Tools",
		technologies: [
			{ name: "Git", icon: SiGit },
			{ name: "GitHub", icon: SiGithub },
			{ name: "VS Code", icon: VscVscode },
			{ name: "Postman", icon: SiPostman },
			{ name: "Figma", icon: SiFigma },
		],
	},
];
