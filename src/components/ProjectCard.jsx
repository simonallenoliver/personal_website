import styles from "../styles/ProjectCard.module.css";

function ProjectCard({title, description, image, demoURL, repoURL}){
    return (
        <article className={styles.card}>
            <div className={styles.thumbWrap}>
                <img className={styles.thumb} src={image} alt={`${title} preview`} />
            </div>
            <div className={styles.body}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>{description}</p>
                
                <div className={styles.actions}>
                    {demoURL ? (
                        <a className={styles.btn} href={demoURL} target="_blank" rel="noreferrer">
                            Live Demo
                        </a>
                    ) : (
                        <span className={styles.btnDisabled} title="Demo not available">
                            Live Demo
                        </span>
                    )}

                    {repoURL && (
                        <a className={styles.btnOutline} href={repoURL} target="_blank" rel="noreferrer">
                            Source Code
                        </a>
                    )}

                </div>
            </div>
        </article>
    )
}
export default ProjectCard;