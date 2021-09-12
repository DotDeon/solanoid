import Head from "next/head";
import About from "../components/about";
import Banner from "../components/banner";
import Faqs from "../components/faqs";
import Header from "../components/header";
import Roadmap from "../components/roadmap";
import Sidebar from "../components/sidemenu";
import Story from "../components/story";
import { useRouter } from "next/dist/client/router";
import { useState, useEffect, useRef } from "react";
import animateScrollTo from "animated-scroll-to";

export default function Home() {
  const router = useRouter();
  var { s } = router.query;
  // const [state, setState] = useState({ x: 0, y: 0 });

  var mouseX = 0,
    mouseY = 0;
  var xp = 0,
    yp = 0;

  const onMouseMove = (e) => {
    let circle = document.querySelector("#circle");
    mouseX = e.pageX - 30;
    mouseY = e.pageY - 30;
    setTimeout(function () {
      xp += (mouseX - xp) / 6;
      yp += (mouseY - yp) / 6;
      circle.style.left = xp + "px";
      circle.style.top = yp + "px";
    }, 40);
    console.log(e.pageX);
    console.log(circle.style.top);
  };

  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);

    if (s == 1) {
      console.log(s);
      animateScrollTo(document.querySelector(".roadmap"));
      s = 0;
    }
  }, []);

  return (
    <div className="relative bg-black w-screen h-screen">
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
        <div className="flex flex-col ml-10 md:mt-14 bg-black w-screen">
          <div className="flex-none md:flex-1 bg-black mx-auto scrollbar-hide overflow-y-scroll ">
            <Banner />
            <div className="roadmap">
              <Roadmap />
            </div>
            <Faqs />
            {/* <Story />  */}
          </div>
        </div>
      </div>
    </div>
  );
}
