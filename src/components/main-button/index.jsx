import styles from "./styles.module.css"

export default function MainButton({text}){
    return (
        <button className={styles.botao}>{text}</button>
    )
}