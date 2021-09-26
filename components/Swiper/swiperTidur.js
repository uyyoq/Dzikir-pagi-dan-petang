import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Autoplay,
  Virtual,
} from "swiper/core";
import "swiper/swiper-bundle.css";

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
                  Siapa yang membaca ayat Kursi sebelum tidur, maka ia akan
                  terus dijaga oleh Allah dan terlindungi dari gangguan setan
                  hingga pagi hari.
                </p>
                <p className="text-xs md:text-sm font-lato py-2">
                  HR. Bukhari no. 3275
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="justify-center w-full lg:w-8/12 mx-auto pb-10 px-10 m-14 md:shadow-xl md:rounded">
              <p className="font-SecularOne font-bold font-xl text-gray-800 pb-3 uppercase">
                Membaca surat Al-Ikhlas, Al-Falaq,dan An-Naas
              </p>
              <p>
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
                <p className="text-xs md:text-sm font-lato py-2">
                  HR. Bukhari no. 5017 dan Muslim no. 2192
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="justify-center w-full lg:w-6/12 mx-auto pb-10 px-10 m-14 md:shadow-xl md:rounded">
              <p className="font-SecularOne font-bold font-xl text-gray-800 pb-3 uppercase">
                Membaca Surat Al Baqarah ayat 285-286
              </p>
              <p className="my-2 text-xl md:text-2xl">
                آَمَنَ الرَّسُولُ بِمَا أُنْزِلَ إِلَيْهِ مِنْ رَبِّهِ
                وَالْمُؤْمِنُونَ كُلٌّ آَمَنَ بِاللَّهِ وَمَلَائِكَتِهِ
                وَكُتُبِهِ وَرُسُلِهِ لَا نُفَرِّقُ بَيْنَ أَحَدٍ مِنْ رُسُلِهِ
                وَقَالُوا سَمِعْنَا وَأَطَعْنَا غُفْرَانَكَ رَبَّنَا وَإِلَيْكَ
                الْمَصِيرُ * لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلاَّ وُسْعَهَا
                لَهَا مَا كَسَبَتْ وَعَلَيْهَا مَا اكْتَسَبَتْ رَبَّنَا لَا
                تُؤَاخِذْنَا إِنْ نَسِينَا أَوْ أَخْطَأْنَا رَبَّنَا وَلَا
                تَحْمِلْ عَلَيْنَا إِصْرًا كَمَا حَمَلْتَهُ عَلَى الَّذِينَ مِنْ
                قَبْلِنَا رَبَّنَا وَلَا تُحَمِّلْنَا مَا لَا طَاقَةَ لَنَا بِهِ
                وَاعْفُ عَنَّا وَاغْفِرْ لَنَا وَارْحَمْنَا أَنْتَ مَوْلَانَا
                فَانْصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ
              </p>
              <p className="p-3 font-Montserrat text-xs md:text-sm tracking-wide leading-7"></p>
              <div className="shadow rounded bg-gray-100 border-l-8 border-gray-300 p-5 m-5 mx-auto text-left">
                <p className="pb-3 font-semibold text-gray-900 font-mono text-sm md:text-base">
                  Artinya
                </p>
                <p className="text-xs md:text-sm font-RobotoMono italic">
                  “Rasul telah beriman kepada Al-Qur’an yang diturunkan
                  kepadanya dari Rabbnya, demikian pula orang-orang yang
                  beriman. Semuanya beriman kepada Allah, malaikat-malaikat-Nya,
                  kitab-kitab-Nya dan rasul-rasul-Nya. (Mereka mengatakan):
                  “Kami tidak membeda-bedakan antara seorang pun (dengan yang
                  lain) dari rasul-rasul-Nya”, dan mereka mengatakan: “Kami
                  dengar dan kami ta’at”. (Mereka berdoa): “Ampunilah kami ya
                  Rabb kami dan kepada Engkaulah tempat kembali”. Allah tidak
                  membebani seseorang melainkan sesuai dengan kesanggupannya. Ia
                  mendapat pahala (dari kebajikan) yang diusahakannya dan
                  mendapat siksa (dari kejahatan) yang dikerjakannya. (Mereka
                  berdoa): “Ya Rabb kami, janganlah Engkau hukum kami jika kami
                  lupa atau kami bersalah. Ya Rabb kami, janganlah Engkau
                  bebankan kepada kami beban yang berat sebagaimana Engkau
                  bebankan kepada orang-orang yang sebelum kami. Ya Rabb kami,
                  janganlah Engkau pikulkan kepada kami apa yang tak sanggup
                  kami memikulnya. Beri maaflah kami; ampunilah kami; dan
                  rahmatilah kami. Engkaulah Penolong kami, maka tolonglah kami
                  terhadap kaum yang kafir“. (QS. Al Baqarah: 285-286)
                </p>
              </div>

              <div className="border-r-2 border-b-4 bg-blue-100 border-blue-300 m-4 p-5 shadow rounded md:w-8/12 mx-auto">
                <p className="pb-3 font-MarckScript text-base md:text-lg">
                  Faedah:
                </p>
                <p className="text-justify font-lato text-xs md:text-sm">
                  Siapa yang membaca dua ayat tersebut pada malam hari, maka dua
                  ayat tersebut telah memberi kecukupan baginya.
                </p>
                <p className="text-xs md:text-sm font-lato py-2">
                  HR. Bukhari no. 4008 dan Muslim no. 807.
                </p>
              </div>
            </div>{" "}
          </SwiperSlide>
          <SwiperSlide>
            <div className="justify-center w-full lg:w-6/12 mx-auto pb-10 px-10 m-14 md:shadow-xl md:rounded">
              <p className="my-2 text-xl md:text-2xl">
                بِاسْمِكَ رَبِّيْ وَضَعْتُ جَنْبِيْ، وَبِكَ أَرْفَعُهُ، فَإِنْ
                أَمْسَكْتَ نَفْسِيْ فَارْحَمْهَا، وَإِنْ أَرْسَلْتَهَا
                فَاحْفَظْهَا بِمَا تَحْفَظُ بِهِ عِبَادَكَ الصَّالِحِيْنَ
              </p>
              <p className="p-3 font-Montserrat text-xs md:text-sm tracking-wide leading-7">
                Bismika robbi wadho’tu jambii, wa bika arfa’uh, fa-in amsakta
                nafsii farhamhaa, wa in arsaltahaa fahfazh-haa bimaa tahfazh
                bihi ‘ibaadakash shoolihiin
              </p>
              <div className="shadow rounded bg-gray-100 border-l-8 border-gray-300 p-5 m-5 mx-auto text-left">
                <p className="pb-3 font-semibold text-gray-900 font-mono text-sm md:text-base">
                  Artinya
                </p>
                <p className="text-xs md:text-sm font-RobotoMono italic">
                  “Dengan nama Engkau, wahai Rabbku, aku meletakkan lambungku.
                  Dan dengan namaMu pula aku bangun daripadanya. Apabila Engkau
                  menahan rohku (mati), maka berilah rahmat padanya. Tapi,
                  apabila Engkau melepaskannya, maka peliharalah (dari kejahatan
                  setan dan kejelekan dunia), sebagaimana Engkau memelihara
                  hamba-hambaMu yang shalih."
                </p>
              </div>
            </div>
            <div className="border-r-2 border-b-4 bg-blue-100 border-blue-300 m-4 p-5 shadow rounded w-10/12 md:w-8/12 mx-auto">
              <p className="pb-3 font-MarckScript text-base md:text-lg">
                Faedah:
              </p>
              <p className="text-justify font-lato text-xs md:text-sm">
                Apabila akan tidur, maka hendaklah tempat tidur tersebut
                dibersihkan karena siapa tahu ada kotoran yang membahayakan di
                situ, lalu membaca dzikir di atas.
              </p>
              <p className="text-xs md:text-sm font-lato py-2">
                HR. Al-Bukhari no. 6320 dan Muslim no. 2714
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="justify-center w-full lg:w-6/12 mx-auto pb-10 px-10 m-14 md:shadow-xl md:rounded">
              <p className="my-2 text-xl md:text-2xl">
                اَللَّهُمَّ إِنَّكَ خَلَقْتَ نَفْسِيْ وَأَنْتَ تَوَفَّاهَا، لَكَ
                مَمَاتُهَا وَمَحْيَاهَا، إِنْ أَحْيَيْتَهَا فَاحْفَظْهَا، وَإِنْ
                أَمَتَّهَا فَاغْفِرْ لَهَا. اَللَّهُمَّ إِنِّيْ أَسْأَلُكَ
                الْعَافِيَةَ
              </p>
              <p className="p-3 font-Montserrat text-xs md:text-sm tracking-wide leading-7">
                Allahumma innaka kholaqta nafsii wa anta tawaffaahaa, laka
                mamaatuhaa wa mahyaahaa, in ahyaytahaa fahfazh-haa, wa in
                ammatahaa faghfir lahaa. Allahumma innii as-alukal ‘aafiyah.
              </p>
              <div className="shadow rounded bg-gray-100 border-l-8 border-gray-300 p-5 m-5 mx-auto text-left">
                <p className="pb-3 font-semibold text-gray-900 font-mono text-sm md:text-base">
                  Artinya
                </p>
                <p className="text-xs md:text-sm font-RobotoMono italic">
                  “Ya Allah, sesungguhnya Engkau menciptakan diriku, dan
                  Engkaulah yang akan mematikannya. Mati dan hidupnya hanya
                  milik-Mu. Apabila Engkau menghidupkannya, maka peliharalah
                  (dari berbagai kejelekan). Apabila Engkau mematikannya, maka
                  ampunilah. Ya Allah, sesungguhnya aku memohon kepada-Mu
                  keselamatan.”
                </p>
                <p className="text-xs md:text-sm font-lato text-gray-700 text-center py-3">
                  HR. Muslim no. 2712
                </p>
              </div>
            </div>{" "}
          </SwiperSlide>
          <SwiperSlide>
            <div className="justify-center w-full lg:w-6/12 mx-auto pb-10 px-10 m-10 md:shadow-xl md:rounded">
              <p className="my-2 text-xl md:text-2xl">
                اَللَّهُمَّ قِنِيْ عَذَابَكَ يَوْمَ تَبْعَثُ عِبَادَكَ
              </p>
              <p className="p-3 font-Montserrat text-xs md:text-sm tracking-wide leading-7">
                Allahumma qinii ‘adzaabak, yawma tab’atsu ‘ibaadak
              </p>
              <div className="shadow rounded bg-gray-100 border-l-8 border-gray-300 p-5 m-5 mx-auto text-left">
                <p className="pb-3 font-semibold text-gray-900 font-mono text-sm md:text-base">
                  Artinya
                </p>
                <p className="text-xs md:text-sm font-RobotoMono italic">
                  “Ya Allah, jauhkanlah aku dari siksaanMu pada hari Engkau
                  membangkitkan hamba-hambaMu (yaitu pada hari kiamat).”
                </p>
              </div>

              <div className="border-r-2 border-b-4 bg-blue-100 border-blue-300 m-4 p-5 shadow rounded md:w-8/12 mx-auto">
                <p className="pb-3 font-MarckScript text-base md:text-lg">
                  Faedah
                </p>
                <p className="text-justify font-lato text-xs md:text-sm">
                  Apabila Rasulullah shallallahu’alaihi wa sallam hendak tidur,
                  beliau meletakkan tangan kanannya di bawah pipinya, kemudian
                  membaca dzikir di atas.
                </p>

                <p className="text-xs md:text-sm font-lato py-2">
                  HR. Tirmidzi no. 3398 dan Abu Daud no. 5045
                </p>
              </div>
            </div>{" "}
          </SwiperSlide>
          <SwiperSlide>
            <div className="justify-center w-full lg:w-6/12 mx-auto pb-10 px-10 m-14 md:shadow-xl md:rounded">
              <p className="my-2 text-xl md:text-2xl">
                بِاسْمِكَ اللَّهُمَّ أَمُوْتُ وَأَحْيَا
              </p>
              <p className="p-3 font-Montserrat text-xs md:text-sm tracking-wide leading-7">
                Bismika allahumma amuutu wa ahyaa.
              </p>
              <div className="shadow rounded bg-gray-100 border-l-8 border-gray-300 p-5 m-5 mx-auto text-left">
                <p className="pb-3 font-semibold text-gray-900 font-mono text-sm md:text-base">
                  Artinya
                </p>
                <p className="text-xs md:text-sm font-RobotoMono italic">
                  “Dengan namaMu, ya Allah! Aku mati dan hidup.”
                </p>
                <p className="text-xs md:text-sm font-lato text-gray-700 text-center py-3">
                  HR. Bukhari no. 6312 dan Muslim no. 2711
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
                  HR. Tirmidzi no. 3392
                </p>
              </div>
            </div>{" "}
          </SwiperSlide>
          <SwiperSlide>
            <div className="justify-center w-full lg:w-6/12 mx-auto pb-10 px-10 m-14 md:shadow-xl md:rounded">
              <p className="my-2 text-xl md:text-2xl">
                <p> (33x) سُبْحَانَ اللهِ </p>
                <p className="py-2"> (33x) اَلْحَمْدُ لِلَّهِ</p>
                <p className="pb-2"> (34x) اَللهُ أَكْبَرُ </p>
              </p>
              <p className="p-3 font-Montserrat text-xs md:text-sm tracking-wide leading-7">
                Subhanallah (33x) Al hamdulillah (33x) Allahu akbar (34 x)
              </p>
              <div className="shadow rounded bg-gray-100 border-l-8 border-gray-300 p-5 m-5 mx-auto text-left">
                <p className="pb-3 font-semibold text-gray-900 font-mono text-sm md:text-base">
                  Artinya
                </p>
                <p className="text-xs md:text-sm font-RobotoMono italic">
                  “Maha Suci Allah (33 x), segala puji bagi Allah (33 x), Allah
                  Maha Besar (34 x)."
                </p>
              </div>

              <div className="border-r-2 border-b-4 bg-blue-100 border-blue-300 m-4 p-5 shadow rounded md:w-8/12 mx-auto">
                <p className="pb-3 font-MarckScript text-base md:text-lg">
                  Faedah
                </p>
                <p className="text-justify font-lato text-xs md:text-sm">
                  Bacaan di atas lebih baik daripada memiliki pembantu di rumah.
                  Demikian dikatakan oleh Nabi shallallahu ‘alaihi wa sallam
                  pada puterinya, Fatimah dan istri tercintanya, ‘Aisyah
                  radhiyallahu ‘anhuma.
                  <p className="text-xs md:text-sm text-center font-lato py-2">
                    HR. Bukhari no. 3705 dan Muslim no. 2727
                  </p>
                </p>
              </div>
            </div>{" "}
          </SwiperSlide>
          <SwiperSlide>
            <div className="justify-center w-full lg:w-6/12 mx-auto pb-10 px-10 m-10 md:shadow-xl md:rounded">
              <p className="my-2 text-xl md:text-2xl">
                اَللَّهُمَّ رَبَّ السَّمَاوَاتِ السَّبْعِ وَرَبَّ الْعَرْشِ
                الْعَظِيْمِ، رَبَّنَا وَرَبَّ كُلِّ شَيْءٍ، فَالِقَ الْحَبِّ
                وَالنَّوَى، وَمُنْزِلَ التَّوْرَاةِ وَاْلإِنْجِيْلِ
                وَالْفُرْقَانِ، أَعُوْذُ بِكَ مِنْ شَرِّ كُلِّ شَيْءٍ أَنْتَ
                آخِذٌ بِنَاصِيَتِهِ. اَللَّهُمَّ أَنْتَ اْلأَوَّلُ فَلَيْسَ
                قَبْلَكَ شَيْءٌ، وَأَنْتَ اْلآخِرُ فَلَيْسَ بَعْدَكَ شَيْءٌ،
                وَأَنْتَ الظَّاهِرُ فَلَيْسَ فَوْقَكَ شَيْءٌ، وَأَنْتَ
                الْبَاطِنُ فَلَيْسَ دُوْنَكَ شَيْءٌ، اِقْضِ عَنَّا الدَّيْنَ
                وَأَغْنِنَا مِنَ الْفَقْرِ
              </p>
              <p className="p-3 font-Montserrat text-xs md:text-sm tracking-wide leading-7">
                Allahumma robbas-samaawaatis sab’i wa robbal ‘arsyil ‘azhiim,
                robbanaa wa robba kulli syai-in, faaliqol habbi wan-nawaa wa
                munzilat-tawrooti wal injiil wal furqoon. A’udzu bika min syarri
                kulli syai-in anta aakhidzum binaa-shiyatih. Allahumma antal
                awwalu falaysa qoblaka syai-un wa antal aakhiru falaysa ba’daka
                syai-un, wa antazh zhoohiru fa laysa fawqoka syai-un, wa antal
                baathinu falaysa duunaka syai-un, iqdhi ‘annad-dainaa wa
                aghninaa minal faqri.
              </p>
              <div className="shadow rounded bg-gray-100 border-l-8 border-gray-300 p-5 m-5 mx-auto text-left">
                <p className="pb-3 font-semibold text-gray-900 font-mono text-sm md:text-base">
                  Artinya
                </p>
                <p className="text-xs md:text-sm font-RobotoMono italic">
                  “Ya Allah, Rabb yang menguasai langit yang tujuh, Rabb yang
                  menguasai ‘Arsy yang agung, Rabb kami dan Rabb segala sesuatu.
                  Rabb yang membelah butir tumbuh-tumbuhan dan biji buah, Rabb
                  yang menurunkan kitab Taurat, Injil dan Furqan (Al-Qur’an).
                  Aku berlindung kepadaMu dari kejahatan segala sesuatu yang
                  Engkau memegang ubun-ubunnya (semua makhluk atas kuasa Allah).
                  Ya Allah, Engkau-lah yang awal, sebelum-Mu tidak ada sesuatu.
                  Engkaulah yang terakhir, setelahMu tidak ada sesuatu.
                  Engkau-lah yang lahir, tidak ada sesuatu di atasMu. Engkau-lah
                  yang Batin, tidak ada sesuatu yang luput dari-Mu[9]. Lunasilah
                  utang kami dan berilah kami kekayaan (kecukupan) hingga
                  terlepas dari kefakiran.”
                </p>
                <p className="text-xs md:text-sm font-lato text-gray-700 text-center py-3">
                  HR. Muslim no. 2713
                </p>
              </div>
            </div>{" "}
          </SwiperSlide>

          <SwiperSlide>
            <div className="justify-center w-full lg:w-6/12 mx-auto pb-10 px-10 m-10 md:shadow-xl md:rounded">
              <p className="my-2 text-xl md:text-2xl">
                اَللَّهُمَّ أَسْلَمْتُ نَفْسِيْ إِلَيْكَ، وَفَوَّضْتُ أَمْرِيْ
                إِلَيْكَ، وَوَجَّهْتُ وَجْهِيَ إِلَيْكَ، وَأَلْجَأْتُ ظَهْرِيْ
                إِلَيْكَ، رَغْبَةً وَرَهْبَةً إِلَيْكَ، لاَ مَلْجَأَ وَلاَ
                مَنْجَا مِنْكَ إِلاَّ إِلَيْكَ، آمَنْتُ بِكِتَابِكَ الَّذِيْ
                أَنْزَلْتَ وَبِنَبِيِّكَ الَّذِيْ أَرْسَلْتَ
              </p>
              <p className="p-3 font-Montserrat text-xs md:text-sm tracking-wide leading-7">
                Allahumma aslamtu nafsii ilaik, wa fawwadh-tu amrii ilaik, wa
                wajjahtu wajhiya ilaik, wa alja’tu zhohrii ilaik, rogh-batan wa
                rohbatan ilaik, laa malja-a wa laa manjaa minka illa ilaik.
                Aamantu bikitaabikalladzi anzalta wa bi nabiyyikalladzi arsalta.
              </p>
              <div className="shadow rounded bg-gray-100 border-l-8 border-gray-300 p-5 m-5 mx-auto text-left">
                <p className="pb-3 font-semibold text-gray-900 font-mono text-sm md:text-base">
                  Artinya
                </p>
                <p className="text-xs md:text-sm font-RobotoMono italic">
                  “Ya Allah, aku menyerahkan diriku kepadaMu, aku menyerahkan
                  urusanku kepadaMu, aku menghadapkan wajahku kepadaMu, aku
                  menyandarkan punggungku kepadaMu, karena senang (mendapatkan
                  rahmatMu) dan takut pada (siksaanMu, bila melakukan
                  kesalahan). Tidak ada tempat perlindungan dan penyelamatan
                  dari (ancaman)Mu, kecuali kepadaMu. Aku beriman pada kitab
                  yang telah Engkau turunkan, dan (kebenaran) NabiMu yang telah
                  Engkau utus.” Apabila Engkau meninggal dunia (di waktu tidur),
                  maka kamu akan meninggal dunia dengan memegang fitrah (agama
                  Islam).”
                </p>
              </div>

              <div className="border-r-2 border-b-4 bg-blue-100 border-blue-300 m-4 p-5 shadow rounded md:w-7/12 mx-auto">
                <p className="pb-3 font-MarckScript text-base md:text-lg">
                  Faedah
                </p>
                <p className="text-justify font-lato text-xs md:text-sm">
                  Jika seseorang membaca dzikir di atas ketika hendak tidur lalu
                  ia mati, maka ia mati di atas fithrah (mati di atas Islam)
                </p>
                <p className="text-xs md:text-sm font-lato py-2">
                  HR. Al-Bukhari no. 6313 dan Muslim no. 2710
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
        </div>
      </Swiper>
    </div>
  );
};
export default SwiperTidur;
