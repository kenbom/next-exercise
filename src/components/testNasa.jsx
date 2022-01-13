import { useState } from "react";
import { useQuery } from "react-query";
import Image from "next/image";
// import { PostDetail } from "./PostDetail";

const maxPostPage = 10;
const apikey = process.env.NEXT_PUBLIC_API_KEY;

async function fetchPosts(pageNum) {
  const response = await fetch(
    `https://api.unsplash.com/photos/random/?client_id=${apikey}&count=6&page=${pageNum}`
    // `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${pageNum}`
  );
  return response.json();
}

export function TestNasa() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPost, setSelectedPost] = useState(null);
  const [newData, setNewData] = useState([]);

  // replace with useQuery
  // const { data, isLoading, error, isError } = useQuery(["posts", currentPage], fetchPosts(currentPage), {
  //   refetchOnWindowFocus: false,
  // });
  const { data, isLoading, error, isError } = useQuery(
    ["posts", currentPage],
    ()=>fetchPosts(currentPage),
    {
      refetchOnWindowFocus: false,
      staleTime: 600000,
    }
  );
  if (isLoading) return <h3>Loading...</h3>;
  if (isError)
    return (
      <>
        <h3>Oops, something goes wrong</h3>
        <p>{error.toString()}</p>
      </>
    );

  return (
    <div className="photo-container">
      <button
      disabled={currentPage<=1}
        onClick={() => {
          setCurrentPage((currentPage) => currentPage - 1);
        }}
      >
        Prvious
      </button>
      <button
        onClick={() => {
          setCurrentPage((currentPage) => currentPage + 1);
        }}
      >
        Next
      </button>
      {data.map((item) => {
        return <img key={item.id} src={item.urls.regular} width="100%" />;
      })}
      {/* <ul>
        {data.map((post) => (
          <li
            key={post.id}
            className="post-title"
            onClick={() => setSelectedPost(post)}
          >
            {post.title}
          </li>
        ))}
      </ul> */}
      <div className="pages" />

      <style jsx>{`
        .photo-container {
          margin-left: auto;
          margin-right: auto;
          max-width: 90%;
        }
      `}</style>
    </div>
  );
}
