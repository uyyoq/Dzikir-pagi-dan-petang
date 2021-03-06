import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Autoplay,
  Virtual,
} from "swiper/core";
import "swiper/swiper-bundle.css";
import { ListTidur } from "../DataList/listTidur";

SwiperCore.use([Navigation, Pagination, Autoplay, Virtual]);

const SwiperTidur = () => {
  return (
    <div className="">
      <Swiper
        className="flex"
        spaceBetween={2}
        slidesPerView={1}
        pagination={{
          type: "progressbar",
        }}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <div className="flex flex-wrap mx-auto justify-center">
          <SwiperSlide>
            <div className="justify-center w-full lg:w-8/12 mx-auto pb-10 px-10 m-14 md:shadow-xl md:rounded">
              <p className="font-JosefinSans font-bold text-sm text-gray-800 pb-3 uppercase">
                Membaca surat Al-Ikhlas, Al-Falaq,dan An-Naas
              </p>
              <p className="text-sm md:text-base text-gray-900 mx-0 md:mx-20">
                Mengumpulkan dua telapak tangan. Lalu ditiup dan dibacakan surat
                Al Ikhlas, Al Falaq dan An Naas. Kemudian dua telapak tangan
                tersebut mengusap tubuh yang dapat dijangkau, dimulai dari
                kepala, wajah dan tubuh bagian depan. Semisal itu diulang sampai
                tiga kali.
              </p>
              <div>
                <Swiper
                  slidesPerView={1}
                  // navigation={true}
                  pagination={{
                    dynamicBullets: true,
                  }}
                  onSwiper={(swiper) => console.log(swiper)}
                >
                  <SwiperSlide>
                    <div className="w-full md:w-8/12 mx-auto">
                      <div className="flex flex-col md:flex-row justify-center md:justify-end md:px-1 lg:px-8 py-1 md:py-3">
                        <p className="p-4 md:px-20 uppercase text-indigo-900 font-bold">
                          surat Al-Ikhlas
                        </p>
                        <p className="bg-blue-800 shadow-md text-white font-bold rounded-xl hover:text-blue-800 hover:bg-white my-2 md:my-4 md:mb-2 py-2 md:py-1 md:px-2 mx-20 md:mx-0 text-xs md:text-sm ">
                          Dibaca 3x
                        </p>
                      </div>

                      <p className="my-2 text-2xl md:text-3xl">
                        ???????????? ?????????????? ?????????????????????? ???????????????????? ???????? ???????? ??????????????
                        ???????????? ?????????????? ?????????????????? ???????? ???????????? ???????????? ??????????????
                        ???????????? ?????????? ?????????? ?????????????? ????????????
                      </p>
                      <p className="p-3 font-Montserrat text-xs md:text-sm tracking-wide leading-7">
                        qul huwall??hu a???ad.all??hu???-???amad.lam yalid wa lam
                        y???lad.wa lam yakul lah??? kufuwan a???ad
                      </p>
                      <div className="shadow rounded bg-gray-100 border-l-8 border-gray-300 p-5 m-5 mx-auto text-left">
                        <p className="pb-3 font-semibold text-gray-900 font-mono text-sm md:text-base">
                          Artinya
                        </p>
                        <p className="text-xs md:text-sm font-RobotoMono text-gray-800 italic">
                          ???Dengan menyebut nama Allah Yang Maha Pengasih lagi
                          Maha Penyayang. Katakanlah: Dialah Allah, Yang Maha
                          Esa. Allah adalah ilah yang bergantung kepada-Nya
                          segala urusan. Dia tidak beranak dan tiada pula
                          diperanakkan, dan tidak ada seorang pun yang setara
                          dengan Dia.??? (QS. Al Ikhlas: 1-4)
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    {" "}
                    <div className="w-full md:w-8/12 mx-auto">
                      <div className="flex flex-col md:flex-row justify-center md:justify-end md:px-1 lg:px-8 py-1 md:py-3">
                        <p className="p-4 md:px-20 uppercase text-indigo-900 font-bold">
                          surat Al-Falaq
                        </p>
                        <p className="bg-blue-800 shadow-md text-white font-bold rounded-xl hover:text-blue-800 hover:bg-white my-2 md:my-4 md:mb-2 py-2 md:py-1 md:px-2 mx-20 md:mx-0 text-xs md:text-sm ">
                          Dibaca 3x
                        </p>
                      </div>

                      <p className="my-2 text-2xl md:text-3xl">
                        ???????????? ?????????????? ?????????????????????? ???????????????????? ???????? ??????????????
                        ?????????????? ?????????????????? ?????? ?????????? ?????? ???????????? ?????????? ??????????
                        ?????????????? ?????????? ???????????? ?????????? ?????????? ???????????????????????????? ??????
                        ?????????????????? ?????????? ?????????? ?????????????? ?????????? ????????????
                      </p>
                      <p className="p-3 font-Montserrat text-xs md:text-sm tracking-wide leading-7">
                        qul a'?????u birabbil-falaq.min syarri m?? khalaq.wa min
                        syarri g??siqin i???? waqab.wa min syarrin-naff???????ti
                        fil-'uqad.wa min syarri ?????sidin i???? ???asad.
                      </p>
                      <div className="shadow rounded bg-gray-100 border-l-8 border-gray-300 p-5 m-5 mx-auto text-left">
                        <p className="pb-3 font-semibold text-gray-900 font-mono text-sm md:text-base">
                          Artinya
                        </p>
                        <p className="text-xs md:text-sm font-RobotoMono text-gray-800 italic">
                          ???Dengan menyebut nama Allah Yang Maha Pengasih lagi
                          Maha Penyayang. Katakanlah: Aku berlindung kepada Rabb
                          yang menguasai Shubuh, dari kejahatan makhluk-Nya, dan
                          dari kejahatan malam apabila telah gelap gulita, dan
                          dari kejahatan-kejahatan wanita tukang sihir yang
                          menghembus pada buhul-buhul, dan dari kejahatan orang
                          yang dengki apabila ia dengki???. (QS. Al Falaq: 1-5)
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    {" "}
                    <div className="w-full md:w-8/12 mx-auto">
                      <div className="flex flex-col md:flex-row justify-center md:justify-end md:px-1 lg:px-8 py-1 md:py-3">
                        <p className="p-4 md:px-20 uppercase text-indigo-900 font-bold">
                          surat An-Naas
                        </p>
                        <p className="bg-blue-800 shadow-md text-white font-bold rounded-xl hover:text-blue-800 hover:bg-white my-2 md:my-4 md:mb-2 py-2 md:py-1 md:px-2 mx-20 md:mx-0 text-xs md:text-sm ">
                          Dibaca 3x
                        </p>
                      </div>
                      <p className="my-2 text-2xl md:text-3xl">
                        ???????????? ?????????????? ?????????????????????? ???????????????????? ???????? ??????????????
                        ?????????????? ???????????????? ???????????? ???????????????? ???????????? ???????????????? ??????
                        ?????????? ???????????????????????? ?????????????????????? ?????????????? ???????????????????? ??????
                        ?????????????? ???????????????? ???????? ???????????????????? ???? ????????????????
                      </p>
                      <p className="p-3 font-Montserrat text-xs md:text-sm tracking-wide leading-7">
                        qul a'?????u birabbin-n??s.malikin-n??s.il??hin-n??s.min
                        syarril-wasw??sil-khann??s.alla???? yuwaswisu f??
                        ???ud???rin-n??s.minal-jinnati wan-n??s
                      </p>
                      <div className="shadow rounded bg-gray-100 border-l-8 border-gray-300 p-5 m-5 mx-auto text-left">
                        <p className="pb-3 font-semibold text-gray-900 font-mono text-sm md:text-base">
                          Artinya
                        </p>
                        <p className="text-justify font-PTSerif text-xs md:text-sm">
                          ???Dengan menyebut nama Allah Yang Maha Pengasih lagi
                          Maha Penyayang. Katakanlah: Aku berlindung kepada Rabb
                          manusia. Raja manusia. Sembahan manusia, dari
                          kejahatan (bisikan) syaitan yang biasa bersembunyi,
                          yang membisikkan (kejahatan) ke dalam dada manusia,
                          dari jin dan manusia.??? (QS. An Naas: 1-6)
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className="border-r-2 border-b-4 bg-blue-100 border-blue-300 m-4 p-5 shadow rounded md:w-5/12 mx-auto">
                <p className="text-xs md:text-sm font-PTSerif py-2">
                  HR. Bukhari no. 5017
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="justify-center w-full lg:w-6/12 mx-auto pb-10 px-10 m-14 md:shadow-xl md:rounded">
              <p className="my-2 text-2xl md:text-3xl">
                <p> (33x) ?????????????????? ?????????? </p>
                <p className="py-2"> (33x) ???????????????????? ??????????????</p>
                <p className="pb-2"> (34x) ???????????? ???????????????? </p>
              </p>
              <p className="p-3 font-Montserrat text-xs md:text-sm tracking-wide leading-7">
                Subhanallah (33x), Al hamdulillah (33x), Allahu akbar (34 x)
              </p>
              <div className="shadow rounded bg-gray-100 border-l-8 border-gray-300 p-5 m-5 mx-auto text-left">
                <p className="pb-3 font-semibold text-gray-900 font-mono text-sm md:text-base">
                  Artinya
                </p>
                <p className="text-xs md:text-sm font-RobotoMono text-gray-800 italic">
                  ???Maha Suci Allah (33 x), segala puji bagi Allah (33 x), Allah
                  Maha Besar (34 x)."
                </p>
              </div>

              <div className="border-r-2 border-b-4 bg-blue-100 border-blue-300 m-4 p-5 shadow rounded md:w-8/12 mx-auto">
                <p className="pb-3 font-MarckScript text-base md:text-lg">
                  Faedah
                </p>
                <p className="text-justify font-PTSerif text-xs md:text-sm">
                  Bacaan di atas lebih baik daripada memiliki pembantu di rumah.
                  Demikian dikatakan oleh Nabi shallallahu ???alaihi wa sallam
                  pada puterinya, Fatimah dan istri tercintanya, ???Aisyah
                  radhiyallahu ???anhuma.
                  <p className="text-xs md:text-sm text-center font-PTSerif py-2">
                    HR. Bukhari no. 3705
                  </p>
                </p>
              </div>
            </div>{" "}
          </SwiperSlide>
          {ListTidur.map((list, index) => {
            return (
              <SwiperSlide key={index}>
                <div className={list.classNameCountainer}>
                  <div className={list.classNameCardRepeat}>
                    <p className={list.classNameRepeat}>{list.titleRepeat}</p>
                  </div>
                  <p className={list.classNameTitle}>{list.title}</p>
                  <p className={list.classNameDzikir}>{list.dzikir}</p>
                  <p className={list.classNameLatin}>{list.latin}</p>
                  <div className={list.classNameCardArti}>
                    <p className={list.classNameArtinya}>Artinya:</p>
                    <p className={list.classNameTerjemahan}>
                      {list.terjemahan}
                    </p>
                    <p className={list.classNameHRCard}>{list.HRinCard}</p>
                  </div>

                  <div className={list.classNameCardFaedah}>
                    <p className={list.classNameFaedahtitle}>
                      {list.titleFaedah}
                    </p>
                    <p className={list.classNameIsiFaedah}>{list.faedahnya}</p>
                    <p className={list.classNameHadist}>{list.HR}</p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </div>
      </Swiper>
    </div>
  );
};
export default SwiperTidur;
