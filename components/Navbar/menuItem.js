export const MenuItems = [
  {
    src: "/sun.svg",
    url: "/pagi",
    CnameLg: "w-auto h-8",
    CnameSm: "w-auto h-6",
    sm: "flex flex-row active:rounded-xl active:bg-gray-800 px-3 py-2",
    title: "dzikir pagi",
    border: "pb-2 border-b-2 border-fuchsia-900",
  },
  {
    src: "/sunrise.svg",
    url: "/petang",
    CnameLg: "w-auto h-7",
    CnameSm: "w-auto h-5",
    sm: "flex flex-row px-3 py-2 active:rounded-xl active:bg-gray-800",
    title: "dzikir petang",
    border: "py-2 pb-2 border-b-2 border-fuchsia-900",
  },
  {
    src: "/cloud.svg",
    url: "/sholat",
    CnameLg: "w-auto h-9",
    CnameSm: "w-auto h-6",
    sm: "flex flex-row px-3 py-2 active:rounded-xl active:bg-gray-800",
    title: "dzikir setelah sholat",
    border: "py-2 pb-2 border-b-2 items-center border-fuchsia-900",
  },
  {
    src: "/sleep.svg",
    url: "/tidur",
    CnameLg: "w-auto h-7",
    CnameSm: "w-auto h-5",
    sm: "flex flex-row px-3 py-2 active:rounded-xl active:bg-gray-800",
    title: "dzikir sebelum tidur",
    border: "py-2 pb-1",
  },
];

//  <div className="flex flex-wrap mx-auto justify-center">
//    {ListPagi.map((list, index) => {
//      return (
//        <SwiperSlide key={index}>
//          <div className={list.classNameCountainer}>
//            <p className={list.classNameTitle}>{list.title}</p>
//            <p className={list.classNameTitle}>{list.dzikir}</p>
//            <p className={list.classNameLatin}>{list.latin}</p>
//            <div className={list.classNameCardArti}>
//              <p className={list.classNameArtinya}>Artinya:</p>
//              <p className={list.classNameTerjemahan}>{list.terjemahan}</p>
//            </div>

//            <div className={list.classNameCardFaedah}>
//              <p className={list.classNameFaedahtitle}>Faedah</p>
//              <p className={list.classNameIsiFaedah}>{list.faedahnya}</p>
//              <p className={list.classNameHadist}>{list.HR}</p>
//            </div>
//          </div>
//        </SwiperSlide>
//      );
//    })}
//  </div>;
