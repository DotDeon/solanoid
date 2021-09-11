import Head from "next/head";
import About from "../components/about";
import Banner from "../components/banner";
import Faqs from "../components/faqs";
import Header from "../components/header";
import Roadmap from "../components/roadmap";
import Sidebar from "../components/sidemenu";
import Story from "../components/story";

export default function Home() {
  return (
    <div className="absolute bg-black h-screen">
      <Head>
        <title>Solanoid</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="flex flex-row bg-black">
        <Sidebar />
        <div className="flex flex-col pt-6 ml-2 w-screen">
          <div className="flex-none md:flex-1 mx-auto overflow-y-scroll ">
            <Banner />
            <Roadmap />
            <Faqs />
            {/* <Story />  */}
          </div>
        </div>
      </div>
    </div>
  );
}
