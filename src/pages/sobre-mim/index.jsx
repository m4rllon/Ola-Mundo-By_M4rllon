import React from "react";
import styles from './style.module.css'
import PostModel from "../../components/post-model";

export default function SobreMim(){

    const fotoCapa = require("../../assets/sobre_mim_capa.png")
    const fotoSobreMim = require("../../assets/file.jpg")

    return<>
    <div>
        <PostModel photoUrl={fotoCapa} title={'Sobre mim'}>
            <h3 className={styles.subtitulo}>Marllon</h3>
            <img className={styles.fotoSobreMim} src={fotoSobreMim} href="foto sobre mim"/>
            <p className={styles.paragrafo}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores mollitia, atque aliquid quidem libero corrupti excepturi placeat! Placeat, culpa fugit veritatis rerum doloremque quos ratione iusto repudiandae, nesciunt esse vitae?
            </p>
            <p className={styles.paragrafo}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, libero est. Amet, illum! Ut reiciendis ab cupiditate porro et. Voluptatum sit cum nemo pariatur laudantium. Beatae suscipit autem et deleniti!
            </p>
            <p className={styles.paragrafo}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quam reiciendis tenetur reprehenderit soluta! Dolorum ab aut, sit, a molestias possimus unde veritatis ut tempora nemo iste nisi itaque doloremque.
            </p>
            <p className={styles.paragrafo}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quam reiciendis tenetur reprehenderit soluta! Dolorum ab aut, sit, a molestias possimus unde veritatis ut tempora nemo iste nisi itaque doloremque.
            </p>
        </PostModel>
    </div>
    </>
}