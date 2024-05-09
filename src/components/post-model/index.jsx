import styles from './style.module.css'

export default function PostModel({ photoUrl, title, children}){
    return(
        <article className={styles.postModeloContainer}>
            <div className={styles.fotoCapa} style={{backgroundImage: `url(${photoUrl})`}}>
            </div>

            <h2 className={styles.titulo}>
                {title}
            </h2>

            <div className={styles.postConteudoContainer}>
                {children}
            </div>
        </article>
    )
}