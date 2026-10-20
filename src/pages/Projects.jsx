import ProjectsCarousel from "../components/projects/ProjectsCarousel";
import { projects } from "../data/projects";

export default function Projects() {
    return (
        <section id="projects" className="relative min-h-screen snap-start bg-bg-black text-text-white px-8 md:px-16 pt-28 pb-16">
            <h2 className="text-4xl font-bold mb-10">Projetos</h2>
            <ProjectsCarousel projects={projects} />
        </section>
    );
}