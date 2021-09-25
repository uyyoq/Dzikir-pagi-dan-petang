import Head from "next/head";
import Pagi from "./pagi";
import Navbar from "../components/Navbar/navbar";
import Footer from "../components/Footer/footer";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Head>
        <title>Dzikir Pagi dan Petang</title>
        <link rel="icon" href="/logoo.svg" />
      </Head>

      <main className="text-current">
        <Navbar />
        <div className="">
          <div className="">
            <Pagi />
          </div>
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
