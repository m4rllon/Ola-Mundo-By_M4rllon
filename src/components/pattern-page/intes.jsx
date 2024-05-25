import React from "react";
import Banner from "../banner/index"

import styles from './style.module.css'
import { Outlet } from "react-router-dom";

export default function PatternPage(){
    return(
        <main>
            <Banner/>
            <Outlet/> 
            {/* Esse componente 'Outlet' serve para nós renderizarmos as rotas nessa tela padrão */}
        </main>
    )
}