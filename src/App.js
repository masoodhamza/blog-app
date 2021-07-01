import { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetch("https://jsonplaceholder.typicode.com/posts")
          .then((response) => response.json())
          .then((json) => setPosts(json));
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Fetching data from API</h1>
      {posts &&
        posts.map((post) => (
          <div className="card" key={post.id}>
            <h2 className="title">{post.title}</h2>
            <p className="body">{post.body}</p>
          </div>
        ))}
    </div>
  );
};

export default App;
