const Footer = (props) => {
  return (
    <div className="w-full bg-blue-500 text-white">
      <div className="flex my-20 justify-center text-sm">
        <div className="flex">
          <div className="m-2">
            <img src="/profile.svg" className="w-12 h-auto mx-auto cursor-pointer" /><img />
          </div>
          <div className="mx-5 text-sm w-72">
            <p className="my-5">Amazing To Do App adalah perusahaan yang 
          bergerak dalam pengembangan aplikasi to do 
          list untuk memudahkan penggunaan dalam 
          mengatur kebutuhan catatan harian.</p>
            <p>Pengalaman kami didasari oleh research dan 
          beberapa fakta lapangan yang menjadikan 
          produk kami lebih unggul dibandingkan produk 
          yang lain.</p>
          </div>
        </div>

        <div className="flex mx-10">
          <div className="m-5">
            <p className="font-bold pb-8">PERUSAHAAN</p>
            <p>Tentang Perusahaan</p>
            <p>Tentang Kami</p>
            <p>Penilitian</p>
            <p>Konsultasi</p>
            <p>Karir</p>
          </div>
          <div className="m-5">
            <p className="font-bold pb-8">TIM AHLI</p>
            <p>Tim Kami</p>
          </div>
          <div className="m-5">
            <p className="font-bold pb-8">KONTAK</p>
            <p>Hubungi Kami</p>
            <p>Lokasi Kantor</p>
            <p>Sosial Media</p>
          </div>
        </div>
      </div>

      <div className="m-6 w-full top-0 right-0 inset-x-auto border-b-2  mx-auto"></div>

      <div className="flex justify-between mx-auto my-auto px-14 py-5">
        <div className="text-xs">
          <p>Amazing To Do App</p>
          <p className="my-2">Copyright © 2020</p>
        </div>
        <div className="flex">
          <a>
            <img
              src={props.facebook}
              className="w-8 h-auto mx-auto cursor-pointer"
              alt="facebook"
            />
          </a>
          <a
            className="mx-3">
              <img
              src={props.instagram}
              className="w-8 h-auto mx-auto cursor-pointer" />
          </a>
          <a>
            <img
            src={props.twitter}
            className="w-8 h-auto mx-auto cursor-pointer" />
          </a>
        </div>
      </div>
    </div>

  )
}

export default Footer;