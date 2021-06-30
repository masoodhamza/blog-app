import { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [posts, setPosts] = useState(null);

  useEffect(async () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setPosts(json));
  }, []);

  return (
    <div className="App">
      <h1>Fetch data from API</h1>
      {posts && (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <strong>{post.title}</strong> <br />
              {post.body}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;
