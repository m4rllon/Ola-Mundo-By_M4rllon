import React from "react";
import circuloColorido from "../../assets/circulo_colorido.png"
import minhaFoto from "../../assets/file.jpg"

import styles from './style.module.css'

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá, mundo!
                </h1>

                <p className={styles.paragrafo}>
                    Boas vindas a meu espaço pessoal! Me chamo Marllon Fausto Cardoso e sou estudante de Engenharia de Software na Universidade de Brasília.
                </p>
            </div>
            <div className={styles.imagens}>
                <img 
                 className={styles.circuloColorido}
                 src={circuloColorido}
                 aria-hidden={true}/>

                 <img
                  className={styles.minhaFoto}
                  src={minhaFoto}
                  alt="Foto do Marllon Fausto Cardoso"/>
            </div>
        </div>
    )
}