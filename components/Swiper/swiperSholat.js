import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Autoplay,
  Virtual,
} from "swiper/core";
import "swiper/swiper-bundle.css";

SwiperCore.use([Navigation, Pagination, Autoplay, Virtual]);

const SwiperSholat = () => {
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
            <div className="justify-center w-full lg:w-5/12 mx-auto pb-10 px-10 m-14 md:shadow-xl md:rounded">
              <p className="my-2 text-xl md:text-2xl">
                (3x) أَسْتَغْفِرُ اللهَ <br /> اَللَّهُمَّ أَنْتَ السَّلاَمُ،
                وَمِنْكَ السَّلاَمُ، تَبَارَكْتَ يَا ذَا الْجَلاَلِ
                وَاْلإِكْرَامِ
              </p>
              <p className="p-3 font-Montserrat text-xs md:text-sm tracking-wide leading-7">
                Astagh-firullah 3x Allahumma antas salaam wa minkas salaam
                tabaarokta yaa dzal jalaali wal ikrom.
              </p>
              <div className="md:w-8/12 shadow rounded bg-gray-100 border-l-8 border-gray-300 p-5 m-5 mx-auto text-left">
                <p className="pb-3 font-semibold text-gray-900 font-mono text-sm md:text-base">
                  Artinya
                </p>
                <p className="text-xs md:text-sm font-RobotoMono italic">
                  “Aku minta ampun kepada Allah,” (3x). “Ya Allah, Engkau
                  pemberi keselamatan, dan dariMu keselamatan, Maha Suci Engkau,
                  wahai Tuhan Yang Pemilik Keagungan dan Kemuliaan.”
                </p>
              </div>
              <div className="border-r-2 border-b-4 bg-blue-100 border-blue-300 m-4 p-5 shadow rounded md:w-8/12 mx-auto">
                <p className="pb-3 font-MarckScript text-base md:text-lg">
                  Faedah
                </p>
                <p className="text-justify font-lato text-xs md:text-sm">
                  Rasulullah shallallahu ‘alaihi wa sallam jika selesai dari
                  shalatnya beliau beristighfar sebanyak tiga kali dan membaca
                  dzikir di atas. Al Auza’i menyatakan bahwa bacaan istighfar
                  adalah astaghfirullah, astaghfirullah.
                </p>
                <p className="text-xs md:text-sm font-lato py-2">
                  HR. Muslim no. 591
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="justify-center w-full lg:w-6/12 mx-auto pb-10 px-10 m-14 md:shadow-xl md:rounded">
              <p className="font-JosefinSans font-bold font-xl text-gray-800 pb-3 uppercase">
                membaca Ayat kursi
              </p>
              <p className="my-2 text-xl md:text-2xl">
                اللَّهُ لاَ إِلَهَ إِلاَّ هُوَ الْحَيُّ الْقَيُّومُ، لاَ
                تَأْخُذُهُ سِنَةٌ وَلاَ نَوْمٌ، لَهُ مَا فِي السَّمَاوَاتِ وَمَا
                فِي الْأَرْضِ، مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلاَّ
                بِإِذْنِهِ، يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ،
                وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلاَّ بِمَا شَاءَ،
                وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ، وَلَا يَئُودُهُ
                حِفْظُهُمَا، وَهُوَ الْعَلِيُّ الْعَظِيمُ
              </p>
              <p className="p-3 font-Montserrat text-xs md:text-sm tracking-wide leading-7">
                "Allohu laa ilaaha illaa Huwal Hayyul Qoyyuum, laa ta’khudzuhuu
                sinatuw walaa nauum, la Huu maa fis samawaati wa maa fil ardh,
                mann dzalladzii yasyfa’u ‘inda Huu, illa bi idznih, ya’lamu maa
                bayna aidiihim wa maa kholfahum, wa laa yuhiituuna bisyayim min
                ‘ilmi Hii illaa bi maa syaa’, wa si’a kursiyyuus samaawaati
                walardh, wa laa yauudlu Huu hifdzuhumaa, wa Huwal ‘aliyyul
                ‘adziiim”
              </p>
              <div className="shadow rounded bg-gray-100 border-l-8 border-gray-300 p-5 m-5 mx-auto text-left">
                <p className="pb-3 font-semibold text-gray-900 font-mono text-sm md:text-base">
                  Artinya:
                </p>
                <p className="text-xs md:text-sm font-RobotoMono italic">
                  “Allah, tidak ada ilah (yang berhak disembah) melainkan Dia,
                  yang hidup kekal lagi terus menerus mengurus (makhluk-Nya).
                  Dia tidak mengantuk dan tidak tidur. Kepunyaan-Nya apa yang di
                  langit dan di bumi. Tiada yang dapat memberi syafa’at di
                  sisi-Nya tanpa seizin-Nya. Dia mengetahui apa-apa yang di
                  hadapan mereka dan di belakang mereka. Mereka tidak mengetahui
                  apa-apa dari ilmu Allah melainkan apa yang dikehendaki-Nya.
                  Kursi Allah meliputi langit dan bumi. Dia tidak merasa berat
                  memelihara keduanya. Dan Dia Maha Tinggi lagi Maha besar.”
                  (QS. Al Baqarah: 255)
                </p>
              </div>

              <div className="border-r-2 border-b-4 bg-blue-100 border-blue-300 m-4 p-5 shadow rounded md:w-8/12 mx-auto">
                <p className="pb-3 font-MarckScript text-base md:text-lg">
                  Faedah
                </p>
                <p className="text-justify font-lato text-xs md:text-sm">
                  Siapa yang membacanya ketika petang, maka ia akan dilindungi
                  (oleh Allah dari berbagai gangguan) hingga pagi. Siapa yang
                  membacanya ketika pagi, maka ia akan dilindungi hingga petang.
                </p>
                <p className="text-xs md:text-sm font-lato py-2">
                  HR. Al Hakim (1: 562)
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="justify-center w-full lg:w-8/12 mx-auto pb-10 px-10 m-14 md:shadow-xl md:rounded">
              <p className="font-JosefinSans font-bold font-xl text-gray-800 pb-3 uppercase">
                Membaca surat Al-Ikhlas, Al-Falaq,dan An-Naas
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
                      <div className="flex flex-col md:flex-row justify-center md:justify-end md:px-5 py-1 md:py-3">
                        <p className="p-4 md:px-20 uppercase text-indigo-900 font-bold">
                          surat Al-Ikhlas
                        </p>
                        <p className="bg-blue-800 shadow-md text-white font-bold rounded-xl hover:text-blue-800 hover:bg-white my-2 md:my-4 md:mb-2 py-2 md:py-1 md:px-2 mx-20 md:mx-0 text-xs md:text-sm ">
                          Dibaca 3x
                        </p>
                      </div>

                      <p className="my-2 text-xl md:text-2xl">
                        بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ قُلْ هُوَ اللَّهُ
                        أَحَدٌ اللَّهُ الصَّمَدُ لَمْ يَلِدْ وَلَمْ يُولَدْ
                        وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ
                      </p>
                      <p className="p-3 font-Montserrat text-xs md:text-sm tracking-wide leading-7">
                        qul huwallāhu aḥad.allāhuṣ-ṣamad.lam yalid wa lam
                        yụlad.wa lam yakul lahụ kufuwan aḥad
                      </p>
                      <div className="shadow rounded bg-gray-100 border-l-8 border-gray-300 p-5 m-5 mx-auto text-left">
                        <p className="pb-3 font-semibold text-gray-900 font-mono text-sm md:text-base">
                          Artinya
                        </p>
                        <p className="text-xs md:text-sm font-RobotoMono italic">
                          “Dengan menyebut nama Allah Yang Maha Pengasih lagi
                          Maha Penyayang. Katakanlah: Dialah Allah, Yang Maha
                          Esa. Allah adalah ilah yang bergantung kepada-Nya
                          segala urusan. Dia tidak beranak dan tiada pula
                          diperanakkan, dan tidak ada seorang pun yang setara
                          dengan Dia.” (QS. Al Ikhlas: 1-4)
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    {" "}
                    <div className="w-full md:w-8/12 mx-auto">
                      <div className="flex flex-col md:flex-row justify-center md:justify-end md:px-5 py-1 md:py-3">
                        <p className="p-4 md:px-20 uppercase text-indigo-900 font-bold">
                          surat Al-Falaq
                        </p>
                        <p className="bg-blue-800 shadow-md text-white font-bold rounded-xl hover:text-blue-800 hover:bg-white my-2 md:my-4 md:mb-2 py-2 md:py-1 md:px-2 mx-20 md:mx-0 text-xs md:text-sm ">
                          Dibaca 3x
                        </p>
                      </div>

                      <p className="my-2 text-xl md:text-2xl">
                        بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ قُلْ أَعُوذُ
                        بِرَبِّ الْفَلَقِ مِن شَرِّ مَا خَلَقَ وَمِن شَرِّ
                        غَاسِقٍ إِذَا وَقَبَ وَمِن شَرِّ النَّفَّاثَاتِ فِي
                        الْعُقَدِ وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ
                      </p>
                      <p className="p-3 font-Montserrat text-xs md:text-sm tracking-wide leading-7">
                        qul a'ụżu birabbil-falaq.min syarri mā khalaq.wa min
                        syarri gāsiqin iżā waqab.wa min syarrin-naffāṡāti
                        fil-'uqad.wa min syarri ḥāsidin iżā ḥasad.
                      </p>
                      <div className="shadow rounded bg-gray-100 border-l-8 border-gray-300 p-5 m-5 mx-auto text-left">
                        <p className="pb-3 font-semibold text-gray-900 font-mono text-sm md:text-base">
                          Artinya
                        </p>
                        <p className="text-xs md:text-sm font-RobotoMono italic">
                          “Dengan menyebut nama Allah Yang Maha Pengasih lagi
                          Maha Penyayang. Katakanlah: Aku berlindung kepada Rabb
                          yang menguasai Shubuh, dari kejahatan makhluk-Nya, dan
                          dari kejahatan malam apabila telah gelap gulita, dan
                          dari kejahatan-kejahatan wanita tukang sihir yang
                          menghembus pada buhul-buhul, dan dari kejahatan orang
                          yang dengki apabila ia dengki”. (QS. Al Falaq: 1-5)
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    {" "}
                    <div className="w-full md:w-8/12 mx-auto">
                      <div className="flex flex-col md:flex-row justify-center md:justify-end md:px-5 py-1 md:py-3">
                        <p className="p-4 md:px-20 uppercase text-indigo-900 font-bold">
                          surat An-Naas
                        </p>
                        <p className="bg-blue-800 shadow-md text-white font-bold rounded-xl hover:text-blue-800 hover:bg-white my-2 md:my-4 md:mb-2 py-2 md:py-1 md:px-2 mx-20 md:mx-0 text-xs md:text-sm ">
                          Dibaca 3x
                        </p>
                      </div>
                      <p className="my-2 text-xl md:text-2xl">
                        بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ قُلْ أَعُوذُ
                        بِرَبِّ النَّاسِ مَلِكِ النَّاسِ إِلَهِ النَّاسِ مِن
                        شَرِّ الْوَسْوَاسِ الْخَنَّاسِ الَّذِي يُوَسْوِسُ فِي
                        صُدُورِ النَّاسِ مِنَ الْجِنَّةِ وَ النَّاسِ
                      </p>
                      <p className="p-3 font-Montserrat text-xs md:text-sm tracking-wide leading-7">
                        qul a'ụżu birabbin-nās.malikin-nās.ilāhin-nās.min
                        syarril-waswāsil-khannās.allażī yuwaswisu fī
                        ṣudụrin-nās.minal-jinnati wan-nās
                      </p>
                      <div className="shadow rounded bg-gray-100 border-l-8 border-gray-300 p-5 m-5 mx-auto text-left">
                        <p className="pb-3 font-semibold text-gray-900 font-mono text-sm md:text-base">
                          Artinya
                        </p>
                        <p className="text-justify font-lato text-xs md:text-sm">
                          “Dengan menyebut nama Allah Yang Maha Pengasih lagi
                          Maha Penyayang. Katakanlah: Aku berlindung kepada Rabb
                          manusia. Raja manusia. Sembahan manusia, dari
                          kejahatan (bisikan) syaitan yang biasa bersembunyi,
                          yang membisikkan (kejahatan) ke dalam dada manusia,
                          dari jin dan manusia.” (QS. An Naas: 1-6)
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className="border-r-2 border-b-4 bg-blue-100 border-blue-300 m-4 p-5 shadow rounded md:w-5/12 mx-auto">
                <p className="pb-3 font-MarckScript text-base md:text-lg">
                  Faedah
                </p>
                <p className="text-justify font-lato text-xs md:text-sm">
                  Siapa yang mengucapkannya masing-masing tiga kali ketika pagi
                  dan petang, maka segala sesuatu akan dicukupkan untuknya.
                </p>
                <p className="text-xs md:text-sm font-lato py-2">
                  HR. Abu Daud no. 5082, Tirmidzi no. 3575
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="justify-center w-full lg:w-6/12 mx-auto pb-10 px-10 m-14 md:shadow-xl md:rounded">
              <p className="my-2 text-xl md:text-2xl">
                لاَ إِلَـهَ إِلاَّ اللهُ وَحْدَهُ لاَ شَرِيْكَ لَهُ، لَهُ
                الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيْرُ،
                اَللَّهُمَّ لاَ مَانِعَ لِمَا أَعْطَيْتَ، وَلاَ مُعْطِيَ لِمَا
                مَنَعْتَ، وَلاَ يَنْفَعُ ذَا الْجَدِّ مِنْكَ الْجَدُّ
              </p>
              <p className="p-3 font-Montserrat text-xs md:text-sm tracking-wide leading-7">
                Laa ilaha illallah wahdahu laa syarika lah, lahul mulku wa lahul
                hamdu wa huwa ‘ala kulli syai-in qodiir. Allahumma laa maani’a
                limaa a’thoyta wa laa mu’thiya limaa mana’ta wa laa yanfa’u dzal
                jaddi minkal jaddu.
              </p>
              <div className="shadow rounded bg-gray-100 border-l-8 border-gray-300 p-5 m-5 mx-auto text-left">
                <p className="pb-3 font-semibold text-gray-900 font-mono text-sm md:text-base">
                  Artinya:
                </p>
                <p className="text-xs md:text-sm font-RobotoMono italic">
                  “Tiada Rabb yang berhak disembah selain Allah Yang Maha Esa,
                  tidak ada sekutu bagi-Nya. Bagi-Nya puji dan bagi-Nya
                  kerajaan. Dia Maha Kuasa atas segala sesuatu. Ya Allah, tidak
                  ada yang mencegah apa yang Engkau berikan dan tidak ada yang
                  memberi apa yang Engkau cegah. Tidak berguna kekayaan dan
                  kemuliaan itu bagi pemiliknya (selain iman dan amal shalihnya
                  yang menyelamatkan dari siksaan). Hanya dari-Mu kekayaan dan
                  kemuliaan."
                </p>
                <p className="text-xs md:text-sm font-lato text-gray-700 text-center py-3">
                  HR. Bukhari no. 844 dan Muslim no. 593
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="justify-center w-full lg:w-6/12 mx-auto pb-10 px-10 m-14 md:shadow-xl md:rounded">
              <p className="my-2 text-xl md:text-2xl">
                لاَ إِلَـهَ إِلاَّ اللهُ وَحْدَهُ لاَ شَرِيْكَ لَهُ، لَهُ
                الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيْرُ.
                لاَ حَوْلَ وَلاَ قُوَّةَ إِلاَّ بِاللهِ، لاَ إِلَـهَ إِلاَّ
                اللهُ، وَلاَ نَعْبُدُ إِلاَّ إِيَّاهُ، لَهُ النِّعْمَةُ وَلَهُ
                الْفَضْلُ وَلَهُ الثَّنَاءُ الْحَسَنُ، لاَ إِلَـهَ إِلاَّ اللهُ
                مُخْلِصِيْنَ لَهُ الدِّيْنَ وَلَوْ كَرِهَ الْكَافِرُوْنَ
              </p>
              <p className="p-3 font-Montserrat text-xs md:text-sm tracking-wide leading-7">
                Laa ilaha illallah wahdahu laa syarika lah. Lahul mulku wa lahul
                hamdu wa huwa ‘ala kulli syai-in qodiir. Laa hawla wa laa
                quwwata illa billah. Laa ilaha illallah wa laa na’budu illa
                iyyaah. Lahun ni’mah wa lahul fadhlu wa lahuts tsanaaul hasan.
                Laa ilaha illallah mukhlishiina lahud diin wa law karihal
                kaafiruun.
              </p>
              <div className="shadow rounded bg-gray-100 border-l-8 border-gray-300 p-5 m-5 mx-auto text-left">
                <p className="pb-3 font-semibold text-gray-900 font-mono text-sm md:text-base">
                  Artinya
                </p>
                <p className="text-xs md:text-sm font-RobotoMono italic">
                  “Tiada Rabb (yang berhak disembah) kecuali Allah, Yang Maha
                  Esa, tidak ada sekutu bagi-Nya. Bagi-Nya kerajaan dan pujaan.
                  Dia Mahakuasa atas segala sesuatu. Tidak ada daya dan kekuatan
                  kecuali (dengan pertolongan) Allah. Tiada Rabb (yang hak
                  disembah) kecuali Allah. Kami tidak menyembah kecuali
                  kepada-Nya. Bagi-Nya nikmat, anugerah dan pujaan yang baik.
                  Tiada Rabb (yang hak disembah) kecuali Allah, dengan
                  memurnikan ibadah kepadaNya, sekalipun orang-orang kafir sama
                  benci.”
                </p>
                <p className="text-xs md:text-sm font-lato text-gray-700 text-center py-3">
                  HR. Tirmidzi no. 3391 dan Abu Daud no. 5068
                </p>
              </div>
              <div className="border-r-2 border-b-4 bg-blue-100 border-blue-300 m-4 p-5 shadow rounded md:w-8/12 mx-auto">
                <p className="pb-3 font-MarckScript text-base md:text-lg">
                  Faedah
                </p>
                <p className="text-justify font-lato text-xs md:text-sm">
                  Dikatakan oleh ‘Abdullah bin Zubair, Nabi shallallahu ‘alaihi
                  wa sallam biasa membaca tahlil (laa ilaha illallah) di akhir
                  shalat.
                  <p className="text-xs md:text-sm text-center font-lato py-2">
                    HR. Muslim no. 594.
                  </p>
                </p>
              </div>
            </div>{" "}
          </SwiperSlide>
          <SwiperSlide>
            <div className="justify-center w-full lg:w-6/12 mx-auto pb-10 px-10 m-14 md:shadow-xl md:rounded">
              <p className="my-2 text-xl md:text-2xl">
                <p> (33x) سُبْحَانَ اللهِ </p>
                <p className="py-2"> (33x) اَلْحَمْدُ لِلَّهِ</p>
                <p className="pb-2"> (33x) اَللهُ أَكْبَرُ </p>
                لاَ إِلَـهَ إِلاَّ اللهُ وَحْدَهُ لاَ شَرِيْكَ لَهُ، لَهُ
                الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيْرُ
              </p>
              <p className="p-3 font-Montserrat text-xs md:text-sm tracking-wide leading-7">
                Subhanallah (33x) Al hamdulillah (33x) Allahu akbar (33 x) Laa
                ilaha illallah wahdahu laa syarika lah. Lahul mulku wa lahul
                hamdu wa huwa ‘ala kulli syai-in qodiir.
              </p>
              <div className="shadow rounded bg-gray-100 border-l-8 border-gray-300 p-5 m-5 mx-auto text-left">
                <p className="pb-3 font-semibold text-gray-900 font-mono text-sm md:text-base">
                  Artinya
                </p>
                <p className="text-xs md:text-sm font-RobotoMono italic">
                  “Maha Suci Allah (33 x), segala puji bagi Allah (33 x), Allah
                  Maha Besar (33 x). Tidak ada Rabb (yang berhak disembah)
                  kecuali Allah Yang Maha Esa, tidak ada sekutu bagi-Nya.
                  Bagi-Nya kerajaan. Bagi-Nya pujaan. Dia-lah Yang Mahakuasa
                  atas segala sesuatu.”
                </p>
              </div>

              <div className="border-r-2 border-b-4 bg-blue-100 border-blue-300 m-4 p-5 shadow rounded md:w-8/12 mx-auto">
                <p className="pb-3 font-MarckScript text-base md:text-lg">
                  Faedah
                </p>
                <p className="text-justify font-lato text-xs md:text-sm">
                  Siapa yang membaca dzikir di atas, maka dosa-dosanya diampuni
                  walau sebanyak buih di lautan.[5] Kata Imam Nawawi
                  rahimahullah, tekstual hadits menunjukkan bahwa bacaan
                  Subhanallah, Alhamdulillah, Allahu akbar, masing-masing dibaca
                  33 kali secara terpisah.
                  <p className="text-xs md:text-sm text-center font-lato py-2">
                    Lihat Syarh Shahih Muslim, 5: 84
                  </p>
                </p>
              </div>
            </div>{" "}
          </SwiperSlide>
          <SwiperSlide>
            <div className="justify-center w-full lg:w-6/12 mx-auto pb-10 px-10 m-14 md:shadow-xl md:rounded">
              <p className="my-2 text-xl md:text-2xl">
                اَللَّهُمَّ إِنِّيْ أَسْأَلُكَ عِلْمًا نَافِعًا، وَرِزْقًا
                طَيِّبًا، وَعَمَلاً مُتَقَبَّلاً
              </p>
              <p className="p-3 font-Montserrat text-xs md:text-sm tracking-wide leading-7">
                Allahumma innii as-aluka ‘ilman naafi’a, wa rizqon thoyyibaa, wa
                ‘amalan mutaqobbalaa.
              </p>
              <div className="shadow rounded bg-gray-100 border-l-8 border-gray-300 p-5 m-5 mx-auto text-left">
                <p className="pb-3 font-semibold text-gray-900 font-mono text-sm md:text-base">
                  Artinya
                </p>
                <p className="text-xs md:text-sm font-RobotoMono italic">
                  “Ya Allah, sungguh aku memohon kepada-Mu ilmu yang bermanfaat
                  (bagi diriku dan orang lain), rizki yang halal dan amal yang
                  diterima (di sisi-Mu dan mendapatkan ganjaran yang baik).”
                </p>
                <p className="text-xs md:text-sm font-lato text-gray-700 text-center py-3">
                  HR. Ibnu Majah no. 925 dan Ahmad 6: 305, 322
                </p>
              </div>
            </div>{" "}
          </SwiperSlide>
        </div>
      </Swiper>
    </div>
  );
};
export default SwiperSholat;
