import "./post.css"

import { Route, Routes, useParams } from 'react-router-dom'
import posts from "../../assets/json/posts.json"
import PostModel from '../../components/post-model';
import ReactMarkdown from "react-markdown"
import NotFound from "../not-found";
import PatternPage from "../../components/pattern-page/intes";

export default function Post(){
    const parametros = useParams();
    
    const post = posts.find(post => {
        return post.id === Number(parametros.id)
    })
    
    if(!post){
        return <NotFound/>
    }

    const capaPost = require(`../../assets/posts/${post.id}/capa.png`)


    return(
        <Routes>
            <Route path="*" element={<PatternPage/>}>
                <Route index element={
                    <PostModel photoUrl={capaPost} title={post.titulo}>
                    <div className='post-markdown-container'>
                        <ReactMarkdown>
                            {post.texto}
                        </ReactMarkdown>
                    </div>
                </PostModel>
                } />
            </Route>
            
        </Routes>
    )
}