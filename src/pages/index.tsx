import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
// import styles from "../styles/Home.module.css";
import {Posts} from "../components/post"
import {TestNasa} from "../components/testNasa"

const Home: NextPage = () => {
  return (
 <div className="title-container"> 
  <h1 className="big-title">Hello, world!</h1>
  <TestNasa />
  <style jsx>{`
      .title-container{
          margin-left: auto;
          margin-right: auto;
          min-width: 100px;
          max-width: 1000px
      }
      h1{
          color:gray;
          margin-left: auto;
          margin-right: auto;
          text-align: center;
          max-width: 300px;
      }
      `}</style>
</div>
  )
  }

export default Home;
