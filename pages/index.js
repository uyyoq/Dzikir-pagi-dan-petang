import Navbar from "../Components/Navbar/Navbar";
import List from "../Components/List/list";
import Tentang from "../Components/Tentang/tentang";
import DemoSederhana from "../Components/Demo Sederhana/demoSederhana";
import Testimoni from "../Components/Testimoni/testimoni";
import Kontak from "../Components/Kontak/kontak";
import Footer from "../Components/Footer/footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Tentang id="section1"/>
      <List id="section2" />
      <DemoSederhana id="section3" />
      <Testimoni id="section4" />
      <Kontak nama="NAMA LENGKAP" email="ALAMAT EMAIL" pesan="PESAN ANDA" id="section5" />
      <Footer 
      facebook="/sosial media/facebook.svg"
      instagram="/sosial media/instagram.svg"
      twitter="/sosial media/twitter.svg"
      />
    </div>
  )
}

export default Home;
