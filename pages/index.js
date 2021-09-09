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
        <span
          id="circle"
          className=" absolute border-2 w-[60px] h-[60px] rounded-full"
        ></span>
        <Sidebar />
        <div className="flex flex-col pt-6 ml-2">
          <Header />
          {/* <div className=" ml-64 mt-56 "> */}
          <div className="ml-16 mt-16 lg:ml-64 lg:mt-64">
            <Banner />
            <Roadmap />
            <Story />
          </div>
        </div>
      </div>
    </div>
  );
}
