import React from "react";
import Banner from "../../components/banner"

import styles from "./style.module.css"
import posts from "../../assets/json/posts.json"
import PostCard from "../../components/post-card";

export default function Home() {
    return <main>
        <Banner/>
        <ul className={styles.posts}>
            {posts.map((post) => (
                <li key={post.id}>
                    <PostCard post={post}/>
                </li>
            ))}
        </ul>
    </main>
}