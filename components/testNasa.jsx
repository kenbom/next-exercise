import { useState } from "react";
import { useQuery } from "react-query";
// import { PostDetail } from "./PostDetail";

const maxPostPage = 10;

async function fetchPosts() {
  const response = await fetch(
    // "https://jsonplaceholder.typicode.com/posts?_limit=10&_page=0"
    "https://api.nasa.gov/planetary/earth/imagery?lon=-95.33&lat=29.78&date=2018-01-01&dim=0.15&api_key=DEMO_KEY"
  );
  return response.json();
}

export function TestNasa() {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedPost, setSelectedPost] = useState(null);

  // replace with useQuery
  const { data, isLoading, error, isError } = useQuery("posts", fetchPosts);
  if (isLoading) return <h3>Loading...</h3>;
  if (isError)
    return (
      <>
        <h3>Oops, something goes wrong</h3>
        <p>{error.toString()}</p>
      </>
    );

  return (
    <>
    <p>{data.date}</p>
      {/* <ul>
        {data.map((post) => (
          <li
            key={post.id}
            className="post-title"
            onClick={() => setSelectedPost(post)}>
            {post.title}
          </li>
        ))}
      </ul> */}
      <div className="pages" />
    </>
  );
}
