import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import {Posts} from "../components/post"
import {TestNasa} from "../components/testNasa"

const Home: NextPage = () => {
  return (
 <> 
  <div>Hello, world</div>
  <TestNasa />
</>
  )
  }

export default Home;
