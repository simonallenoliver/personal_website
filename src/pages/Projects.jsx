import { useEffect, useState } from "react";
import ProjectList from "../components/ProjectList.jsx";

function Projects() {
  const [projects, setProjects] = useState(null);
  const [status, setStatus] = useState("idle"); // idle | loading | error

  useEffect(() => {
    let isMounted = true;
    setStatus("loading");

    // Simulate fetch + latency
    const timer = setTimeout(() => {
      fetch("/projects.json")
        .then((res) => {
          if (!res.ok) throw new Error("Failed to load projects");
          return res.json();
        })
        .then((data) => {
          if (isMounted) {
            setProjects(data);
            setStatus("idle");
          }
        })
        .catch(() => {
          if (isMounted) setStatus("error");
        });
    }, 500);

    return () => {
      isMounted = false;
      clearTimeout(timer);
    };
  }, []);

  if (status === "loading") return <p>Loading projects…</p>;
  if (status === "error") return <p>Couldn’t load projects right now.</p>;
  if (!projects || projects.length === 0) return <p>No projects yet.</p>;

  return (
    <section>
      <h1>Projects</h1>
      <ProjectList projects={projects} />
    </section>
  );
}

export default Projects;
