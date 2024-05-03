import { Link, useLocation, NavLink } from 'react-router-dom'
import styles from './style.module.css'

export default function MenuLink({children, to}) {
    // const localizacao = useLocation();



    return(
        // <Link 
        // className={`
        // ${styles.link}${localizacao.pathname === to ? '' : styles.linkDestacado}`}
        // to={to}>
        //     {children}
        // </Link>
        
        <NavLink 
         to={to}
         className={({isActive, isPending}) => 
         [
            isActive ? styles.linkDestacado : '',
            isPending ? styles.link : '',
         ].join('')}
         end>
            {/* A tag 'end' serve pro navegador não achar que as rotas são iguais pq todas começam com o '/' */}
            {children}
        </NavLink>

    )
}