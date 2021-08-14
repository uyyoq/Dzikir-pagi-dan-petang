const Footer = () => {
  return (
    <div className="w-full">
      <div className="flex my-20 justify-center text-sm">
        <div className="flex">
          <div className="m-5">
            <img src="/profile.svg" className="w-12 h-auto mx-auto cursor-pointer" /><img />
          </div>
          <div className="mx-5 text-gray-700 text-sm">
            <p className="my-5">Amazing To Do App adalah perusahaan yang <br />
          bergerak dalam pengembangan aplikasi to do <br />
          list untuk memudahkan penggunaan dalam <br />
          mengatur kebutuhan catatan harian.</p>
            <p>Pengalaman kami didasari oleh research dan <br />
          beberapa fakta lapangan yang menjadikan <br />
          produk kami lebih unggul dibandingkan produk <br />
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
        <div className="text-xs text-gray-700">
          <p>Amazing To Do App</p>
          <p className="my-2">Copyright © 2020</p>
        </div>
        <div className="flex">
          <a>
            <img src="/sosial media/facebook.svg" className="w-8 h-auto mx-auto cursor-pointer" />
          </a>
          <a className="mx-3">
            <img src="/sosial media/instagram.svg" className="w-8 h-auto mx-auto cursor-pointer" />
          </a>
          <a>
            <img src="/sosial media/twitter.svg" className="w-8 h-auto mx-auto cursor-pointer" />
          </a>
        </div>
      </div>
    </div>

  )
}

export default Footer;