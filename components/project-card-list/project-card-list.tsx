import { useEffect } from "react"
import { Project, projects } from "@/public/data/projects"
import classes from "./project-card-list.module.scss"
import ProjectCard from "../project-card/project-card"

export default function ProjectCardList() {
	useEffect(() => {
		window.addEventListener("scroll", () => {
			const windowYScroll = window.scrollY
			const allCards = document.querySelectorAll(".animated-card")
			allCards.forEach((card) => {
				const htmlCard = card as HTMLElement
				if (htmlCard.offsetTop <= windowYScroll + 600) {
					htmlCard.classList.add("slide-in-top")
				}
			})
		})
	}, [])

	return (
		<div
			className={`${classes.projects_list} flex flex-col items-center justify-center`}
		>
			<h2 className={`${classes.title}`}>Team / Solo projects</h2>
			{projects.map((project: Project) => {
				return (
					<ProjectCard
						key={project.id}
						title={project.title}
						type={project.type}
						desc={project.desc}
						img={project.image}
						gitlink={project.gitlink}
						link={project.link}
						context={project.context}
						stack={project.stack}
					/>
				)
			})}
		</div>
	)
}
