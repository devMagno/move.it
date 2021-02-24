import { ExperienceBar } from "../components/ExperienceBar";

import Head from "next/head";


export default function Home() {
  return (
    <div className="container">
    <ExperienceBar />
  </div>
      <Head>
        <title>Início | move.it</title>
      </Head>
  )
}
