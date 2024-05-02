import { Link } from 'react-router-dom'
import styles from './style.module.css'
import MenuLink from '../menu-link'

export default function Menu(){

    return (
        <header>
            <nav className={styles.navegacao}>
                <MenuLink to={'/'}>
                    Início
                </MenuLink>
                <MenuLink to={'/sobremim'}>
                    Sobre mim
                </MenuLink>
            </nav>
        </header>
    )
}