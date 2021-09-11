import Head from "next/head";
import About from "../components/about";
import Banner from "../components/banner";
import ConnectWallet from "../components/connectwallet";
import Countdown from "../components/countdown";
import Faqs from "../components/faqs";
import Footer from "../components/footer";
import Header from "../components/header";
import Mint from "../components/mintbutton";
import Roadmap from "../components/roadmap";
import Sidebar from "../components/sidemenu";
import Story from "../components/story";
export default function mint() {
  return (
    <div className="absolute bg-black h-screen">
      <Head>
        <title>Mint Solanoid</title>
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
          <div className="flex-none md:flex-1 mx-auto overflow-x-scroll ">
            <ConnectWallet />
            <div className="flex-col h-1/2">
              <Countdown />
              <Mint />
            </div>

            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}