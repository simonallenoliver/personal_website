import ProjectCard from "./ProjectCard.jsx";
import styles from "../styles/ProjectList.module.css";

function ProjectList({ projects }) {
  return (
    <div className={styles.grid}>
      {projects.map((p) => (
        <ProjectCard
          key={p.slug}
          title={p.title}
          description={p.description}
          image={p.image}
          demoUrl={p.demoUrl}
          repoUrl={p.repoUrl}
        />
      ))}
    </div>
  );
}

export default ProjectList;
