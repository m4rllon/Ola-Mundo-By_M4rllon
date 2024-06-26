import { Link } from "react-router-dom"
import styles from "./style.module.css"
import MainButton from "../main-button"

export default function PostCard({post}){
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

                <MainButton text={"Ler"}/>
            </div>
        </Link>
    )
}