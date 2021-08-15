import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Autoplay,
  Virtual
} from "swiper/core";
import "swiper/swiper-bundle.css";


SwiperCore.use([Navigation, Pagination, Autoplay, Virtual]);


const Testimoni = ({ id }) => {
  return (
    <div id={id} className="pt-20">
      <p className="text-3xl text-center">Testimoni Pengguna</p>
      <Swiper
        spaceBetween={2}
        slidesPerView={2}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <div className="flex flex-wrap w-11/12 mx-auto justify-center">

          <SwiperSlide>
            <div className="justify-center py-10 px-10 mt-2 mb-10 mx-14 shadow-xl rounded">
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
          </SwiperSlide>

          <SwiperSlide>
            <div className="justify-center py-10 px-10 mt-2 mb-10 mx-14 shadow-xl rounded">
              <div className="my-8">
                <img src="/photos/wiliam.jpeg" className="w-16 h-auto shadow-2xl rounded-full" />
              </div>
              <p className="my-2 text-sm text-gray-600">"Aplikasi yang sangat bermanfaat.Saya tidak pernah <br />
          merasa lebih terorganisir sebelum menggunakan <br /> aplikasi ini. Rekomendasi untuk segala
          kalangan yang <br /> ingin produktifitas lebih. Mudah digunakan di <br /> manapun meskipun
          anda tidak pernah menggunakan<br /> apilikasi seperti ini sebelumnya."</p>
              <p className="mt-5 text-blue-700">Budi Santoso</p>
              <p className="m-1 text-bold">Surabaya</p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="justify-center py-10 px-10 mt-2 mb-10 mx-14 shadow-xl rounded">
              <div className="my-8">
                <img src="/photos/nadim.jpg" className="w-16 h-auto shadow-2xl rounded-full" />
              </div>
              <p className="my-2 text-sm text-gray-600">"Pengalaman saya menggunakan aplikasi ini sungguh
          luar biasa. Tampilan yang menarik begitu memikat saya untuk selalu lebih produktif
          dengan bantuan app ini."</p>
              <div>
                <p className="mt-5 text-blue-700">Benrns Sturaro</p>
                <p className="m-1 text-bold">Jakarta</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="justify-center py-10 px-10 mt-2 mb-10 mx-14 shadow-xl rounded">
              <div className="my-8">
                <img src="/photos/wiliam.jpeg" className="w-16 h-auto shadow-2xl rounded-full" />
              </div>
              <p className="my-2 text-sm text-gray-600">"Aplikasi yang sangat bermanfaat.Saya tidak pernah
          merasa lebih terorganisir sebelum menggunakan aplikasi ini. Rekomendasi untuk segala
          kalangan yang ingin produktifitas lebih. Mudah digunakan di manapun meskipun
          anda tidak pernah menggunakan apilikasi seperti ini sebelumnya."</p>
              <p className="mt-5 text-blue-700">Budi Santoso</p>
              <p className="m-1 text-bold">Surabaya</p>
            </div>
          </SwiperSlide>
        </div>
      </Swiper>

    </div>
  )
}
export default Testimoni;