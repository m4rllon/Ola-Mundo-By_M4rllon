import { Link } from "react-router-dom"
import styles from "./style.module.css"

export default function CardPost({post}){

    const capa = require(`../../assets/posts/${post.id}/capa.png`)

    return(
        <Link to={`/post/${post.id}`}>
            <div className={styles.post}>
                <img
                className={styles.capa}
                src={capa}
                alt="Imagem de capa do post"/>
                
                <h2 className={styles.titulo}>
                    {post.titulo}
                </h2>

                <button className={styles.botaoLer}>Ler</button>
            </div>
        </Link>
    )
}