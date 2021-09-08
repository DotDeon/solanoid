import Head from "next/head";
import About from "../components/about";
import Banner from "../components/banner";
import Header from "../components/header";
import Roadmap from "../components/roadmap";
import Sidebar from "../components/sidemenu";
import Story from "../components/story";
export default function Home() {
  return (
    <div className="absolute bg-black overflow-hidden scale-auto">
      <Head>
        <title>Solanoid</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <div className="flex flex-row bg-black">
        <Sidebar />
        <div className="flex flex-col pt-6 ml-2">
          <Header />
          <div className="ml-32 mt-32 ">
            <Banner />
            <Roadmap />
            <Story />
          </div>
        </div>
      </div>
    </div>
  );
}
