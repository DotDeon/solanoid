import Head from "next/head";
import Mint from "../components/mintbutton";
import Countdown from "../components/countdown";
import ConnectWallet from "../components/connectwallet";
import Sidebar from "../components/sidemenu";
import Footer from "../components/footer";
import Copyright from "../components/copyright";

export default function mint() {
  return (
    <div className="relative bg-black w-screen h-screen ">
      <span
        id="circle"
        style={{ left: 0, top: 0 }}
        className="absolute border-2 border-white w-14 h-14 rounded-full"
      ></span>
      <Head>
        <title>solanoid</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="flex flex-row min-w-max min-h-screen bg-black">
        <Sidebar />
        <div className="flex flex-col ml-2 bg-black w-screen">
          <div className="flex-none md:flex-1 bg-black mx-auto scrollbar-hide overflow-y-scroll overflow-x-hidden ">
            <ConnectWallet />
            <div className="flex-col h-1/2">
              <Countdown />
              <Mint />
            </div>
            <Footer />
            <Copyright />
          </div>
        </div>
      </div>
    </div>
  );
}
