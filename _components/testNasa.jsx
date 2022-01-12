import { useState } from "react";
import { useQuery } from "react-query";
import { QueryClient, QueryClientProvider } from "react-query";
import Image from 'next/image'
// import { PostDetail } from "./PostDetail";

const maxPostPage = 10;
const apikey = process.env.NEXT_PUBLIC_API_KEY

async function fetchPosts() {
  const response = await fetch(
`https://api.unsplash.com/photos/random/?client_id=${apikey}&count=5`
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
    {data.map((item)=> {
      return (<img key={item.id} src={item.urls.regular} width="300"/>)
    })}
    {/* <img src= {data.url} width="300" height="300"/> */}
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
