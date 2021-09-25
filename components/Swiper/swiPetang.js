import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Autoplay,
  Virtual,
} from "swiper/core";
import "swiper/swiper-bundle.css";

SwiperCore.use([Navigation, Pagination, Autoplay, Virtual]);

const SwiPetang = () => {
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
              <p className="font-SecularOne font-bold font-xl text-gray-800 pb-3 uppercase">
                membaca Ta'awudz
              </p>
              <p className="my-2 text-xl md:text-2xl">
                أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ
              </p>
              <p className="p-3 font-Montserrat text-xs md:text-sm tracking-wide leading-7">
                A’udzu billahi minasy syaithonir rojiim
              </p>
              <div className="md:w-8/12 shadow rounded bg-gray-100 border-l-8 border-gray-300 p-5 m-5 mx-auto text-left">
                <p className="pb-3 font-semibold text-gray-900 font-mono text-sm md:text-base">
                  Artinya
                </p>
                <p className="text-xs md:text-sm font-RobotoMono italic">
                  “Aku berlindung kepada Allah dari godaan syaitan yang
                  terkutuk.”
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="justify-center w-full lg:w-6/12 mx-auto pb-10 px-10 m-14 md:shadow-xl md:rounded">
              <p className="font-SecularOne font-bold font-xl text-gray-800 pb-3 uppercase">
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
              <p className="font-SecularOne font-bold font-xl text-gray-800 pb-3 uppercase">
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
                أَمْسَيْنَا وَأَمْسَى الْمُلْكُ للهِ، وَالْحَمْدُ للهِ، لَا
                إِلَهَ إِلاَّ اللهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، لَهُ الْمُلْكُ
                وَلَهُ الْحَمْدُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، رَبِّ
                أَسْأَلُكَ خَيْرَ مَا فِي هَذِهِ اللَّيْلَةِ وَخَيْرَ مَا
                بَعْدَهَا، وَأَعُوذُبِكَ مِنْ شَرِّ مَا فِي هَذِهِ اللَّيْلَةِ
                وَشَرِّ مَا بَعْدَهَا، رَبِّ أَعُوذُبِكَ مِنَ الْكَسَلِ وَسُوءِ
                الْكِبَرِ، رَبِّ أَعُوذُبِكَ مِنْ عَذَابٍ فِي النَّارِ وَعَذَابٍ
                فِي الْقَبْرِ
              </p>
              <p className="p-3 font-Montserrat text-xs md:text-sm tracking-wide leading-7">
                Amsaynaa wa amsal mulku lillah walhamdulillah, laa ilaha
                illallah wahdahu laa syarika lah, lahul mulku walahul hamdu wa
                huwa ‘ala kulli syai-in qodir. Robbi as-aluka khoiro maa fii
                hadzihil lailah wa khoiro maa ba’dahaa, wa a’udzu bika min
                syarri maa fii hadzihil lailah wa syarri maa ba’dahaa. Robbi
                a’udzu bika minal kasali wa suu-il kibar. Robbi a’udzu bika min
                ‘adzabin fin naari wa ‘adzabin fil qobri.
              </p>
              <div className="shadow rounded bg-gray-100 border-l-8 border-gray-300 p-5 m-5 mx-auto text-left">
                <p className="pb-3 font-semibold text-gray-900 font-mono text-sm md:text-base">
                  Artinya
                </p>
                <p className="text-xs md:text-sm font-RobotoMono italic">
                  “Kami telah memasuki waktu petang dan kerajaan hanya milik
                  Allah, segala puji bagi Allah. Tidak ada ilah (yang berhak
                  disembah) kecuali Allah semata, tiada sekutu bagi-Nya. Milik
                  Allah kerajaan dan bagi-Nya pujian. Dia-lah Yang Mahakuasa
                  atas segala sesuatu.Wahai Rabbku, aku mohon kepada-Mu kebaikan
                  di malam ini dan kebaikan sesudahnya. Aku berlindung kepadaMu
                  dari kejahatan malam ini dan kejahatan sesudahnya. Wahai
                  Rabbku, aku berlindung kepadaMu dari kemalasan dan kejelekan
                  di hari tua. Wahai Rabbku, aku berlindung kepada-Mu dari
                  siksaan di neraka dan siksaan di kubur.”
                </p>
              </div>

              <div className="border-r-2 border-b-4 bg-blue-100 border-blue-300 m-4 p-5 shadow rounded md:w-8/12 mx-auto">
                <p className="pb-3 font-MarckScript text-base md:text-lg">
                  Faedah:
                </p>
                <p className="text-justify font-lato text-xs md:text-sm">
                  Meminta pada Allah kebaikan di malam ini dan kebaikan
                  sesudahnya, juga agar terhindar dari kejelekan di malam ini
                  dan kejelekan sesudahnya. Di dalamnya berisi pula permintaan
                  agar terhindar dari rasa malas padahal mampu untuk beramal,
                  juga agar terhindar dari kejelekan di masa tua. Di dalamnya
                  juga berisi permintaan agar terselamatkan dari siksa kubur dan
                  siksa neraka yang merupakan siksa terberat di hari kiamat
                  kelak.
                </p>
                <p className="text-xs md:text-sm font-lato py-2">
                  HR. Muslim no. 2723
                </p>
              </div>
            </div>{" "}
          </SwiperSlide>
          <SwiperSlide>
            <div className="justify-center w-full lg:w-6/12 mx-auto pb-10 px-10 m-14 md:shadow-xl md:rounded">
              <p className="my-2 text-xl md:text-2xl">
                اللَّهُمَّ بِكَ أَمْسَيْنَا، وَبِكَ أَصْبَحْنَا،وَبِكَ نَحْيَا،
                وَبِكَ نَمُوتُ، وَإِلَيْكَ الْمَصِيْرُ
              </p>
              <p className="p-3 font-Montserrat text-xs md:text-sm tracking-wide leading-7">
                Allahumma bika amsaynaa wa bika ash-bahnaa wa bika nahyaa wa
                bika namuutu wa ilaikal mashiir.
              </p>
              <div className="shadow rounded bg-gray-100 border-l-8 border-gray-300 p-5 m-5 mx-auto text-left">
                <p className="pb-3 font-semibold text-gray-900 font-mono text-sm md:text-base">
                  Artinya
                </p>
                <p className="text-xs md:text-sm font-RobotoMono italic">
                  “Ya Allah, dengan rahmat dan pertolongan-Mu kami memasuki
                  waktu petang, dan dengan rahmat dan pertolongan-Mu kami
                  memasuki waktu pagi. Dengan rahmat dan pertolonganMu kami
                  hidup dan dengan kehendakMu kami mati. Dan kepada-Mu tempat
                  kembali (bagi semua makhluk).”
                </p>
                <p className="text-xs md:text-sm font-lato py-2">
                  HR. Tirmidzi no. 3391 dan Abu Daud no. 5068
                </p>
              </div>
            </div>{" "}
          </SwiperSlide>
          <SwiperSlide>
            <div className="justify-center w-full lg:w-6/12 mx-auto pb-10 px-10 m-14 md:shadow-xl md:rounded">
              <p className="font-SecularOne font-bold font-xl text-gray-800 pb-3 uppercase">
                Membaca Sayyidul Istighfar
              </p>
              <p className="my-2 text-xl md:text-2xl">
                اَللَّهُمَّ أَنْتَ رَبِّيْ لاَ إِلَـهَ إِلاَّ أَنْتَ،
                خَلَقْتَنِيْ وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ
                مَا اسْتَطَعْتُ، أَعُوْذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوْءُ
                لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوْءُ بِذَنْبِيْ فَاغْفِرْ لِيْ
                فَإِنَّهُ لاَ يَغْفِرُ الذُّنُوْبَ إِلاَّ أَنْتَ.
              </p>
              <p className="p-3 font-Montserrat text-xs md:text-sm tracking-wide leading-7">
                Allahumma anta robbii laa ilaha illa anta, kholaqtanii wa anaa
                ‘abduka wa anaa ‘ala ‘ahdika wa wa’dika mas-tatho’tu. A’udzu
                bika min syarri maa shona’tu. Abu-u laka bi ni’matika ‘alayya wa
                abu-u bi dzambii. Fagh-firlii fainnahu laa yagh-firudz dzunuuba
                illa anta.
              </p>
              <div className="shadow rounded bg-gray-100 border-l-8 border-gray-300 p-5 m-5 mx-auto text-left">
                <p className="pb-3 font-semibold text-gray-900 font-mono text-sm md:text-base">
                  Artinya
                </p>
                <p className="text-xs md:text-sm font-RobotoMono italic">
                  “Ya Allah, Engkau adalah Rabbku, tidak ada ilah yang berhak
                  disembah kecuali Engkau, Engkaulah yang menciptakanku. Aku
                  adalah hamba-Mu. Aku akan setia pada perjanjianku pada-Mu
                  (yaitu aku akan mentauhidkan-Mu) semampuku dan aku yakin akan
                  janji-Mu (berupa surga untukku). Aku berlindung kepada-Mu dari
                  kejelekan yang kuperbuat. Aku mengakui nikmat-Mu kepadaku dan
                  aku mengakui dosaku. Oleh karena itu, ampunilah aku.
                  Sesungguhnya tiada yang mengampuni dosa kecuali Engkau.”
                </p>
              </div>

              <div className="border-r-2 border-b-4 bg-blue-100 border-blue-300 m-4 p-5 shadow rounded md:w-8/12 mx-auto">
                <p className="pb-3 font-MarckScript text-base md:text-lg">
                  Faedah
                </p>
                <p className="text-justify font-lato text-xs md:text-sm">
                  Barangsiapa mengucapkan dzikir ini di siang hari dalam keadaan
                  penuh keyakinan, lalu ia mati pada hari tersebut sebelum
                  petang hari, maka ia termasuk penghuni surga. Barangsiapa yang
                  mengucapkannya di malam hari dalam keadaan penuh keyakinan,
                  lalu ia mati sebelum pagi, maka ia termasuk penghuni surga.
                </p>
                <p className="text-xs md:text-sm font-lato py-2">
                  HR. Bukhari no. 6306
                </p>
              </div>
            </div>{" "}
          </SwiperSlide>
          <SwiperSlide>
            <div className="justify-center w-full lg:w-6/12 mx-auto pb-10 px-10 m-10 md:shadow-xl md:rounded">
              <div className="flex justify-center md:justify-end md:px-5 py-1 md:py-3">
                <p className="bg-blue-800 shadow-md text-white font-bold rounded-xl hover:text-blue-800 hover:bg-white px-2 md:px-3 py-2 my-2 text-xs md:text-sm ">
                  Dibaca 4x
                </p>
              </div>
              <p className="my-2 text-xl md:text-2xl">
                اَللَّهُمَّ إِنِّيْ أَمْسَيْتُ أُشْهِدُكَ وَأُشْهِدُ حَمَلَةَ
                عَرْشِكَ، وَمَلاَئِكَتَكَ وَجَمِيْعَ خَلْقِكَ، أَنَّكَ أَنْتَ
                اللهُ لاَ إِلَـهَ إِلاَّ أَنْتَ وَحْدَكَ لاَ شَرِيْكَ لَكَ،
                وَأَنَّ مُحَمَّدًا عَبْدُكَ وَرَسُوْلُكَ
              </p>
              <p className="p-3 font-Montserrat text-xs md:text-sm tracking-wide leading-7">
                Allahumma inni amsaytu usy-hiduka wa usy-hidu hamalata ‘arsyika
                wa malaa-ikatak wa jami’a kholqik, annaka antallahu laa ilaha
                illa anta wahdaka laa syariika lak, wa anna Muhammadan ‘abduka
                wa rosuuluk.
              </p>
              <div className="shadow rounded bg-gray-100 border-l-8 border-gray-300 p-5 m-5 mx-auto text-left">
                <p className="pb-3 font-semibold text-gray-900 font-mono text-sm md:text-base">
                  Artinya
                </p>
                <p className="text-xs md:text-sm font-RobotoMono italic">
                  “Ya Allah, sesungguhnya aku di waktu petang ini mempersaksikan
                  Engkau, malaikat yang memikul ‘Arys-Mu, malaikat-malaikat dan
                  seluruh makhluk-Mu, bahwa sesungguhnya Engkau adalah Allah,
                  tiada ilah yang berhak disembah kecuali Engkau semata, tiada
                  sekutu bagi-Mu dan sesungguhnya Muhammad adalah hamba dan
                  utusan-Mu.”
                </p>
              </div>

              <div className="border-r-2 border-b-4 bg-blue-100 border-blue-300 m-4 p-5 shadow rounded md:w-6/12 mx-auto">
                <p className="pb-3 font-MarckScript text-base md:text-lg">
                  Faedah
                </p>
                <p className="text-justify font-lato text-xs md:text-sm">
                  Barangsiapa yang mengucapkan dzikir ini ketika pagi dan petang
                  hari sebanyak empat kali, maka Allah akan membebaskan dirinya
                  dari siksa neraka.
                </p>
                <p className="text-xs md:text-sm font-lato py-2">
                  HR. Abu Daud no. 5069
                </p>
              </div>
            </div>{" "}
          </SwiperSlide>
          <SwiperSlide>
            <div className="justify-center w-full lg:w-6/12 mx-auto pb-10 px-10 m-14 md:shadow-xl md:rounded">
              <p className="my-2 text-xl md:text-2xl">
                اَللَّهُمَّ إِنِّيْ أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي
                الدُّنْيَا وَاْلآخِرَةِ، اَللَّهُمَّ إِنِّيْ أَسْأَلُكَ
                الْعَفْوَ وَالْعَافِيَةَ فِي دِيْنِيْ وَدُنْيَايَ وَأَهْلِيْ
                وَمَالِيْ اللَّهُمَّ اسْتُرْ عَوْرَاتِى وَآمِنْ رَوْعَاتِى.
                اَللَّهُمَّ احْفَظْنِيْ مِنْ بَيْنِ يَدَيَّ، وَمِنْ خَلْفِيْ،
                وَعَنْ يَمِيْنِيْ وَعَنْ شِمَالِيْ، وَمِنْ فَوْقِيْ، وَأَعُوْذُ
                بِعَظَمَتِكَ أَنْ أُغْتَالَ مِنْ تَحْتِيْ
              </p>
              <p className="p-3 font-Montserrat text-xs md:text-sm tracking-wide leading-7">
                BAllahumma innii as-alukal ‘afwa wal ‘aafiyah fid dunyaa wal
                aakhiroh. Allahumma innii as-alukal ‘afwa wal ‘aafiyah fii
                diinii wa dun-yaya wa ahlii wa maalii. Allahumas-tur ‘awrootii
                wa aamin row’aatii. Allahummahfazh-nii mim bayni yadayya wa min
                kholfii wa ‘an yamiinii wa ‘an syimaalii wa min fawqii wa a’udzu
                bi ‘azhomatik an ughtala min tahtii.
              </p>
              <div className="shadow rounded bg-gray-100 border-l-8 border-gray-300 p-5 m-5 mx-auto text-left">
                <p className="pb-3 font-semibold text-gray-900 font-mono text-sm md:text-base">
                  Artinya
                </p>
                <p className="text-xs md:text-sm font-RobotoMono italic">
                  “Ya Allah, sesungguhnya aku memohon kebajikan dan keselamatan
                  di dunia dan akhirat. Ya Allah, sesungguhnya aku memohon
                  kebajikan dan keselamatan dalam agama, dunia, keluarga dan
                  hartaku. Ya Allah, tutupilah auratku (aib dan sesuatu yang
                  tidak layak dilihat orang) dan tenteramkanlah aku dari rasa
                  takut. Ya Allah, peliharalah aku dari muka, belakang, kanan,
                  kiri dan atasku. Aku berlindung dengan kebesaran-Mu, agar aku
                  tidak disambar dari bawahku (oleh ular atau tenggelam dalam
                  bumi dan lain-lain yang membuat aku jatuh).”
                </p>
              </div>

              <div className="border-r-2 border-b-4 bg-blue-100 border-blue-300 m-4 p-5 shadow rounded md:w-7/12 mx-auto">
                <p className="pb-3 font-MarckScript text-base md:text-lg">
                  Faedah
                </p>
                <p className="text-justify font-lato text-xs md:text-sm">
                  Rasulullah shallallahu ‘alaihi wa sallam tidaklah pernah
                  meninggalkan do’a ini di pagi dan petang hari. Di dalamnya
                  berisi perlindungan dan keselamatan pada agama, dunia,
                  keluarga dan harta dari berbagai macam gangguan yang datang
                  dari berbagai arah.
                </p>
                <p className="text-xs md:text-sm font-lato py-2">
                  HR. Abu Daud no. 5074 dan Ibnu Majah no. 3871
                </p>
              </div>
            </div>{" "}
          </SwiperSlide>
          <SwiperSlide>
            <div className="justify-center w-full lg:w-6/12 mx-auto pb-10 px-10 m-14 md:shadow-xl md:rounded">
              <p className="my-2 text-xl md:text-2xl">
                اَللَّهُمَّ عَالِمَ الْغَيْبِ وَالشَّهَادَةِ فَاطِرَ
                السَّمَاوَاتِ وَاْلأَرْضِ، رَبَّ كُلِّ شَيْءٍ وَمَلِيْكَهُ،
                أَشْهَدُ أَنْ لاَ إِلَـهَ إِلاَّ أَنْتَ، أَعُوْذُ بِكَ مِنْ
                شَرِّ نَفْسِيْ، وَمِنْ شَرِّ الشَّيْطَانِ وَشِرْكِهِ، وَأَنْ
                أَقْتَرِفَ عَلَى نَفْسِيْ سُوْءًا أَوْ أَجُرَّهُ إِلَى مُسْلِمٍ
              </p>
              <p className="p-3 font-Montserrat text-xs md:text-sm tracking-wide leading-7">
                Allahumma ‘aalimal ghoybi wasy syahaadah faathiros samaawaati
                wal ardh. Robba kulli syai-in wa maliikah. Asyhadu alla ilaha
                illa anta. A’udzu bika min syarri nafsii wa min syarrisy
                syaythooni wa syirkihi, wa an aqtarifa ‘alaa nafsii suu-an aw
                ajurrohu ilaa muslim.
              </p>
              <div className="shadow rounded bg-gray-100 border-l-8 border-gray-300 p-5 m-5 mx-auto text-left">
                <p>Artinya</p>
                <p className="text-xs md:text-sm font-RobotoMono italic">
                  “Ya Allah, Yang Maha Mengetahui yang ghaib dan yang nyata,
                  wahai Rabb pencipta langit dan bumi, Rabb segala sesuatu dan
                  yang merajainya. Aku bersaksi bahwa tidak ada ilah yang berhak
                  disembah kecuali Engkau. Aku berlindung kepadaMu dari
                  kejahatan diriku, setan dan balatentaranya (godaan untuk
                  berbuat syirik pada Allah), dan aku (berlindung kepada-Mu)
                  dari berbuat kejelekan terhadap diriku atau menyeretnya kepada
                  seorang muslim.”
                </p>
              </div>

              <div className="border-r-2 border-b-4 bg-blue-100 border-blue-300 m-4 p-5 shadow rounded md:w-7/12 mx-auto">
                <p className="pb-3 font-MarckScript text-base md:text-lg">
                  Faedah
                </p>
                <p className="text-justify font-lato text-xs md:text-sm">
                  Do’a ini diajarkan oleh Rasulullah shallallahu ‘alaihi wa
                  sallam pada Abu Bakr Ash Shiddiq radhiyallahu ‘anhu untuk
                  dibaca pada pagi, petang dan saat beranjak tidur.
                </p>
                <p className="text-xs md:text-sm font-lato py-2">
                  HR. Tirmidzi no. 3392 dan Abu Daud no. 5067
                </p>
              </div>
            </div>{" "}
          </SwiperSlide>
          <SwiperSlide>
            <div className="justify-center w-full lg:w-6/12 mx-auto pb-10 px-10 m-10 md:shadow-xl md:rounded">
              <div className="flex justify-center md:justify-end md:px-5 py-1 md:py-3">
                <p className="bg-blue-800 shadow-md text-white font-bold rounded-xl hover:text-blue-800 hover:bg-white px-2 md:px-3 py-2 my-2 text-xs md:text-sm ">
                  Dibaca 3x
                </p>
              </div>
              <p className="my-2 text-xl md:text-2xl">
                بِسْمِ اللَّهِ الَّذِى لاَ يَضُرُّ مَعَ اسْمِهِ شَىْءٌ فِى
                الأَرْضِ وَلاَ فِى السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ
              </p>
              <p className="p-3 font-Montserrat text-xs md:text-sm tracking-wide leading-7">
                Bismillahilladzi laa yadhurru ma’asmihi syai-un fil ardhi wa laa
                fis samaa’ wa huwas samii’ul ‘aliim.
              </p>
              <div className="shadow rounded bg-gray-100 border-l-8 border-gray-300 p-5 m-5 mx-auto text-left">
                <p className="pb-3 font-semibold text-gray-900 font-mono text-sm md:text-base">
                  Artinya
                </p>
                <p className="text-xs md:text-sm font-RobotoMono italic">
                  “Dengan nama Allah yang bila disebut, segala sesuatu di bumi
                  dan langit tidak akan berbahaya, Dia-lah Yang Maha Mendengar
                  lagi Maha Mengetahui.”
                </p>
              </div>

              <div className="border-r-2 border-b-4 bg-blue-100 border-blue-300 m-4 p-5 shadow rounded md:w-7/12 mx-auto">
                <p className="pb-3 font-MarckScript text-base md:text-lg">
                  Faedah
                </p>
                <p className="text-justify font-lato text-xs md:text-sm">
                  Barangsiapa yang mengucapkan dzikir tersebut sebanyak tiga
                  kali di pagi hari dan tiga kali di petang hari, maka tidak
                  akan ada bahaya yang tiba-tiba memudaratkannya.
                </p>
                <p className="text-xs md:text-sm font-lato py-2">
                  HR. Abu Daud no. 5088
                </p>
              </div>
            </div>{" "}
          </SwiperSlide>
          <SwiperSlide>
            <div className="justify-center w-full lg:w-6/12 mx-auto pb-10 px-10 m-10 md:shadow-xl md:rounded">
              <div className="flex justify-center md:justify-end md:px-5 py-1 md:py-3">
                <p className="bg-blue-800 shadow-md text-white font-bold rounded-xl hover:text-blue-800 hover:bg-white px-2 md:px-3 py-2 my-2 text-xs md:text-sm ">
                  Dibaca 3x
                </p>
              </div>
              <p className="my-2 text-xl md:text-2xl">
                رَضِيْتُ بِاللهِ رَبًّا، وَبِاْلإِسْلاَمِ دِيْنًا، وَبِمُحَمَّدٍ
                صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ نَبِيًّا
              </p>
              <p className="p-3 font-Montserrat text-xs md:text-sm tracking-wide leading-7">
                Rodhiitu billaahi robbaa wa bil-islaami diinaa, wa bi-muhammadin
                shallallaahu ‘alaihi wa sallama nabiyya.
              </p>
              <div className="shadow rounded bg-gray-100 border-l-8 border-gray-300 p-5 m-5 mx-auto text-left">
                <p className="pb-3 font-semibold text-gray-900 font-mono text-sm md:text-base">
                  Artinya
                </p>
                <p className="text-xs md:text-sm font-RobotoMono italic">
                  “Aku ridha Allah sebagai Rabb, Islam sebagai agama dan
                  Muhammad shallallahu ‘alaihi wa sallam sebagai nabi.”
                </p>
              </div>

              <div className="border-r-2 border-b-4 bg-blue-100 border-blue-300 m-4 p-5 shadow rounded md:w-7/12 mx-auto">
                <p className="pb-3 font-MarckScript text-base md:text-lg">
                  Faedah
                </p>
                <p className="text-justify font-lato text-xs md:text-sm">
                  Barangsiapa yang mengucapkan dzikir ini sebanyak tiga kali di
                  pagi hari dan tiga kali di petang hari, maka pantas baginya
                  mendapatkan ridha Allah.
                </p>
                <p className="text-xs md:text-sm font-lato py-2">
                  HR. Abu Daud no. 5072, Tirmidzi no. 3389
                </p>
              </div>
            </div>{" "}
          </SwiperSlide>
          <SwiperSlide>
            <div className="justify-center w-full lg:w-6/12 mx-auto pb-10 px-10 m-14 md:shadow-xl md:rounded">
              <p className="my-2 text-xl md:text-2xl">
                يَا حَيُّ يَا قَيُّوْمُ بِرَحْمَتِكَ أَسْتَغِيْثُ، وَأَصْلِحْ
                لِيْ شَأْنِيْ كُلَّهُ وَلاَ تَكِلْنِيْ إِلَى نَفْسِيْ طَرْفَةَ
                عَيْنٍ أَبَدًا
              </p>
              <p className="p-3 font-Montserrat text-xs md:text-sm tracking-wide leading-7">
                Yaa Hayyu Yaa Qoyyum, bi-rohmatika as-taghiits, wa ash-lih lii
                sya’nii kullahu wa laa takilnii ilaa nafsii thorfata.
              </p>
              <div className="shadow rounded bg-gray-100 border-l-8 border-gray-300 p-5 m-5 mx-auto text-left">
                <p className="pb-3 font-semibold text-gray-900 font-mono text-sm md:text-base">
                  Artinya
                </p>
                <p className="text-xs md:text-sm font-RobotoMono italic">
                  “Wahai Rabb Yang Maha Hidup, wahai Rabb Yang Berdiri Sendiri
                  (tidak butuh segala sesuatu), dengan rahmat-Mu aku minta
                  pertolongan, perbaikilah segala urusanku dan jangan diserahkan
                  kepadaku sekali pun sekejap mata (tanpa mendapat pertolongan
                  dariMu).”
                </p>
              </div>

              <div className="border-r-2 border-b-4 bg-blue-100 border-blue-300 m-4 p-5 shadow rounded md:w-7/12 mx-auto">
                <p className="pb-3 font-MarckScript text-base md:text-lg">
                  Faedah
                </p>
                <p className="text-justify font-lato text-xs md:text-sm">
                  Dzikir ini diajarkan oleh Nabi shallallahu ‘alaihi wa sallam
                  pada Fathimah supaya diamalkan pagi dan petang.
                </p>
                <p className="text-xs md:text-sm font-lato py-2">
                  HR. Ibnu As Sunni no. 46
                </p>
              </div>
            </div>{" "}
          </SwiperSlide>
          <SwiperSlide>
            <div className="justify-center w-full lg:w-6/12 mx-auto pb-10 px-10 m-10 md:shadow-xl md:rounded">
              <div className="flex justify-center md:justify-end md:px-5 py-1 md:py-3">
                <p className="bg-blue-800 shadow-md text-white font-bold rounded-xl hover:text-blue-800 hover:bg-white px-2 md:px-3 py-2 my-2 text-xs md:text-sm ">
                  Dibaca 100x
                </p>
              </div>
              <p className="my-2 text-xl md:text-2xl">
                سُبْحَانَ اللهِ وَبِحَمْدِهِ
              </p>
              <p className="p-3 font-Montserrat text-xs md:text-sm tracking-wide leading-7">
                Subhanallah wa bi-hamdih.
              </p>
              <div className="shadow rounded bg-gray-100 border-l-8 border-gray-300 p-5 m-5 mx-auto text-left">
                <p className="pb-3 font-semibold text-gray-900 font-mono text-sm md:text-base">
                  Artinya
                </p>
                <p className="text-xs md:text-sm font-RobotoMono italic">
                  “Maha suci Allah, aku memuji-Nya.”
                </p>
              </div>

              <div className="border-r-2 border-b-4 bg-blue-100 border-blue-300 m-4 p-5 shadow rounded md:w-8/12 mx-auto">
                <p className="pb-3 font-MarckScript text-base md:text-lg">
                  Faedah
                </p>
                <p className="text-justify font-lato text-xs md:text-sm">
                  Barangsiapa yang mengucapkan kalimat ‘subhanallah wa bi
                  hamdih’ di pagi dan petang hari sebanyak 100 x, maka tidak ada
                  yang datang pada hari kiamat yang lebih baik dari yang ia
                  lakukan kecuali orang yang mengucapkan semisal atau lebih dari
                  itu.
                </p>
                <p className="text-xs md:text-sm font-lato py-2">
                  HR. Muslim no. 2692
                </p>
              </div>
            </div>{" "}
          </SwiperSlide>
          <SwiperSlide>
            <div className="justify-center w-full lg:w-6/12 mx-auto pb-10 px-10 m-10 md:shadow-xl md:rounded">
              <div className="flex justify-center md:justify-end md:px-5 py-1 md:py-3">
                <p className="bg-blue-800 shadow-md text-white font-bold rounded-xl hover:text-blue-800 hover:bg-white px-2 md:px-3 py-2 my-2 text-xs md:text-sm ">
                  Dibaca 10x
                </p>
              </div>
              <p className="my-2 text-xl md:text-2xl">
                لاَ إِلَـهَ إِلاَّ اللهُ وَحْدَهُ لاَ شَرِيْكَ لَهُ، لَهُ
                الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيْرُ
              </p>
              <p className="p-3 font-Montserrat text-xs md:text-sm tracking-wide leading-7">
                Laa ilaha illallah wahdahu laa syarika lah, lahul mulku walahul
                hamdu wa huwa ‘ala kulli syai-in qodiir.
              </p>
              <div className="shadow rounded bg-gray-100 border-l-8 border-gray-300 p-5 m-5 mx-auto text-left">
                <p className="pb-3 font-semibold text-gray-900 font-mono text-sm md:text-base">
                  Artinya
                </p>
                <p className="text-xs md:text-sm font-RobotoMono italic">
                  “Tidak ada ilah yang berhak disembah selain Allah semata,
                  tidak ada sekutu bagiNya. Bagi-Nya kerajaan dan segala pujian.
                  Dia-lah yang berkuasa atas segala sesuatu.”
                </p>
              </div>

              <div className="border-r-2 border-b-4 bg-blue-100 border-blue-300 m-4 p-5 shadow rounded md:w-9/12 mx-auto">
                <p className="pb-3 font-MarckScript text-base md:text-lg">
                  Faedah
                </p>
                <p className="text-justify font-lato text-xs md:text-sm">
                  Barangsiapa yang membaca dzikir tersebut di pagi hari sebanyak
                  sepuluh kali, Allah akan mencatatkan baginya 10 kebaikan,
                  menghapuskan baginya 10 kesalahan, ia juga mendapatkan
                  kebaikan semisal memerdekakan 10 budak, Allah akan
                  melindunginya dari gangguan setan hingg petang hari. Siapa
                  yang mengucapkannya di petang hari, ia akan mendapatkan
                  keutamaan semisal itu pula.
                </p>
                <p className="text-xs md:text-sm font-lato py-2">
                  HR. An Nasai Al Kubra 6: 10
                </p>
              </div>
            </div>{" "}
          </SwiperSlide>
          <SwiperSlide>
            <div className="justify-center w-full lg:w-6/12 mx-auto pb-10 px-10 m-14 md:shadow-xl md:rounded">
              <div className="flex justify-center md:justify-end md:px-5 py-1 md:py-3">
                <p className="bg-blue-800 shadow-md text-white font-bold rounded-xl hover:text-blue-800 hover:bg-white px-2 md:px-3 py-2 my-2 text-xs md:text-sm ">
                  Dibaca 3x
                </p>
              </div>
              <p className="my-2 text-xl md:text-2xl">
                أَعُوْذُ بِكَلِمَاتِ اللهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ
              </p>
              <p className="p-3 font-Montserrat text-xs md:text-sm tracking-wide leading-7">
                A’udzu bikalimaatillahit-taammaati min syarri maa kholaq.
              </p>
              <div className="shadow rounded bg-gray-100 border-l-8 border-gray-300 p-5 m-5 mx-auto text-left">
                <p className="pb-3 font-semibold text-gray-900 font-mono text-sm md:text-base">
                  Artinya
                </p>
                <p className="text-xs md:text-sm font-RobotoMono italic">
                  “Aku berlindung dengan kalimat-kalimat Allah yang sempurna
                  dari kejahatan makhluk yang diciptakanNya.”
                </p>
              </div>
              <div className="border-r-2 border-b-4 bg-blue-100 border-blue-300 m-4 p-5 shadow rounded md:w-7/12 mx-auto">
                <p className="pb-3 font-MarckScript text-base md:text-lg">
                  Faedah
                </p>
                <p className="text-justify font-lato text-xs md:text-sm">
                  Siapa yang mengucapkannya di petang hari, niscaya tidak ada
                  racun atau binatang (seperti: kalajengking) yang
                  mencelakakannya di malam itu.
                </p>
                <p className="text-xs md:text-sm font-lato py-2">
                  HR. Ahmad 2: 290
                </p>
              </div>
            </div>{" "}
          </SwiperSlide>
        </div>
      </Swiper>
    </div>
  );
};
export default SwiPetang;
