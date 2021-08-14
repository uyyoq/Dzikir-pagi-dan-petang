const Testimoni = ({id}) => {
  return (
    <div id={id} className="pt-20">
      <p className="text-3xl text-center">Testimoni Pengguna</p>
      <div className="flex flex-wrap w-11/12 mx-auto justify-center">
        <div className="justify-center py-10 px-10 m-20 shadow-xl rounded">
          <div className="my-8">
            <img src="/photos/nadim.jpg" className="w-16 h-auto shadow-2xl rounded-full" />
          </div>
          <p className="my-2 text-sm text-gray-600">"Pengalaman saya menggunakan aplikasi ini sungguh <br />
          luar biasa. Tampilan yang menarik begitu memikat <br /> saya untuk selalu lebih produktif
          dengan bantuan app ini."</p>
          <div>
            <p className="mt-5 text-blue-700">Benrns Sturaro</p>
            <p className="m-1 text-bold">Jakarta</p>
          </div>

        </div>
        <div className="justify-center py-10 px-10 m-14 shadow-xl rounded">
          <div className="my-8">
            <img src="/photos/wiliam.jpeg" className="w-16 h-auto shadow-2xl rounded-full" />
          </div>
          <p className="my-2 text-sm text-gray-600">"Aplikasi yang sangat bermanfaat.Saya tidak pernah <br />
          merasa lebih terorganisir sebelum menggunakan <br /> aplikasi ini. Rekomendasi untuk segala
          kalangan yang <br /> ingin produktifitas lebih. Mudah digunakan di <br /> manapun meskipun
          anda tidak pernah menggunakan<br /> apilikasi seperti ini sebelumnya."</p>
          <p  className="mt-5 text-blue-700">Budi Santoso</p>
          <p className="m-1 text-bold">Surabaya</p>
        </div>
      </div>
    </div>
  )
}
export default Testimoni;