import data from "./../../data/push";
import { Link } from "react-router-dom";
import "./Blog.css";
export default function Blog() {
  let article = data;
  return (
    <main className="App__main App__blog">
      <h2 className="App__blog-h2">Blog</h2>
      <ul className="App__blog-list">
        {article.map((a) => {
          return (
            <Link key={a.id} className="App__blog-list-li" to={`/blog/${a.id}`}>
              {a.title}
            </Link>
          );
        })}
      </ul>
    </main>
  );
}
