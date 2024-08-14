import Navbar from "../components/Navbar"
import SearchForm from "../components/SearchForm"
import '../App.css'
import '../style/Home.css'
import banner from "../images/banners.png"
import gundambanner from "../images/gundam-banner.png"
import gradebanner from "../images/grade.png"

function Home() {
    return (
      <div className="container">
        <Navbar />
        <header className="Home-header">
          <h1>Welcome to Gunpla Guide</h1>
          <img src={banner} alt="Banner" className="banner-image" />

          <div id="gunpla" className="description">
            <h3> Apa itu Gunpla ?</h3>
            <p> Gunpla adalah kepanjangan dari “Gundam Plastic Model Kit” yang diproduksi oleh Bandai. Kit ini terdiri dari cetakan model plastik yang kemudian harus dipotong sebelum perakitan. 
            Banyak orang pecinta Gundam menikmati proses perakitan Gunpla ini dan kemudian mulai mengoleksinya. </p>
          </div>

          <div className="description">
          <img src={gundambanner} alt="Banner" className="banner-gundam" />
          <h3>Apa itu Gundam?</h3>
          <p>Gundam adalah salah satu seri anime dan manga yang diciptakan oleh Yoshiyuki Tomino dan Sunrise. Gundam dikenal dengan cerita mecha (robot raksasa) yang kompleks dan mendalam, 
            sering kali menampilkan konflik militer dan politik yang realistis. Gundam pertama kali muncul pada tahun 1979 dengan serial TV "Mobile Suit Gundam", yang telah berkembang menjadi franchise besar dengan berbagai seri, film, novel, dan model kit, termasuk Gunpla.</p>
          </div>

          <div id="grade" className="description">
          <img src={gradebanner} alt="Banner" className="banner-grade" />
          <h3>Apa itu Grade pada Gunpla?</h3>
          <p>Grade pada Gunpla adalah sistem yang digunakan untuk mengkategorikan model kit berdasarkan skala, detail, dan tingkat kesulitan perakitan. 
            Beberapa grade yang umum adalah High Grade (HG), Master Grade (MG), dan Perfect Grade (PG).</p>
        </div>

        </header>
      </div>
    );
  }
  
  export default Home;
