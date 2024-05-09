import { useParams } from 'react-router-dom'
import CardPost from '../../components/card-post'
import styles from './style.module.css'

export default function Post(){
    const parametros = useParams();

    return(
        <div>
            {parametros.id}
        </div>
    )
}