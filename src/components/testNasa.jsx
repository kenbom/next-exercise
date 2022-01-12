import { useState } from "react";
import { useQuery } from "react-query";
import Image from 'next/image'
// import { PostDetail } from "./PostDetail";

const maxPostPage = 10;
const apikey = process.env.NEXT_PUBLIC_API_KEY

async function fetchPosts() {
  const response = await fetch(
`https://api.unsplash.com/photos/random/?client_id=${apikey}&count=6`
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
    <div className="photo-container">
    {data.map((item)=> {
      return (<img key={item.id} src={item.urls.regular} width="70%"/>)
    })}
      <div className="pages" />
      <style jsx>{`
      .photo-container{
          margin-left: auto;
          margin-right: auto;
          max-width: 1000px;
      }
      `}</style>
    </div>
  );
}
