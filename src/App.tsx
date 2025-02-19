import styles from "./App.module.css";
import { posts } from "./mock";
import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/SideBar";

function App() {
  return (
    <div>
        <Header />
      
        <div className={styles.wrapper}>
            <Sidebar />
            <main>
                {posts.map((post) => (
                    <Post
                        key={post.id}
                        author={post.author}
                        content={post.content}
                        publishedAt={post.publishedAt}
                    />
                ))}
            </main>
        </div>
    </div>
  )
}

export default App
