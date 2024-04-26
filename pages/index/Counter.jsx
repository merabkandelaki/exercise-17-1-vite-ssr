// import { useState } from 'react'

export { Counter }

async function fetchData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const result = await res.json();
  return result;
}

async function Counter() {
  const posts = await fetchData();
  return (
    <div>
      <h1>Home Page</h1>
      {posts.map((el) => (
        <div key={el.id} className="post">
          <h2>{el.title}</h2>
          <p>{el.body}</p>
          {/* <Link href={`/post/` + el.id}>Details</Link> */}
        </div>
      ))}
    </div>
  );
}

// function Counter() {
//   const [count, setCount] = useState(0)
//   return (
//     <button type="button" onClick={() => setCount((count) => count + 1)}>
//       Counter {count}
//     </button>
//   )
// }
