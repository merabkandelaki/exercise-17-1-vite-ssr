// import { Counter } from './Counter'
import fetch from 'node-fetch';

export { Page };
async function fetchData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const result = await res.json();
  return result;
}
async function Page() {
  const posts = await fetchData();
  return (
    <div>
      {posts.map((el) => (
        <div key={el.id} className="post">
          <h2>{el.title}</h2>
          <p>{el.body}</p>
        </div>
      ))}
    </div>
  );
}
