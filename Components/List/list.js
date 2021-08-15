import { Element } from "react-scroll";

const bgHome = "/bg-cover/home-bg.png";

const List = () => {
  return (
    <Element name="todoApp">
      <div className="bg-home flex flex-col justify-center mx-auto">
        <p className="flex mx-auto text-center mb-14 pt-20 text-2xl w-72 text-gray-500 font-bold leading-9">
          Kenapa Menggunakan TO DO App?{" "}
        </p>
        <div className="flex flex-wrap w-full mx-auto justify-center text-gray-700">
          <div className="w-full lg:w-4/12 bg-white justify-center py-10 px-10 m-14 shadow-md rounded-3xl cursor-pointer hover:shadow-2xl">
            <div>
              <img src="/icon/trophy.svg" className="w-16 h-auto" />
            </div>
            <p className="font-bold py-4 text-lg">Mudah Digunakan</p>
            <p className="my-2 text-sm leading-7 text-gray-500">
              Dirancang dengan berdasarkan pengalaman yang ada. Kami menyajikan
              penggunaan aplikasi yang friendly dan sangan mudah digunakan.Cukup
              tulis, hapus, edit, apa yang anda inginkan dan dengan sekejab akan
              membantu kehidupan anda
            </p>
          </div>
          <div className="w-full lg:w-4/12 bg-white justify-center py-10 px-10 m-14 shadow-md rounded-3xl cursor-pointer hover:shadow-2xl">
            <div>
              <img src="/icon/paint-palette.svg" className="w-16 h-auto" />
            </div>
            <p className="font-bold py-4 text-lg">Desain Menarik</p>
            <p className="my-2 text-sm leading-7 text-gray-500">
              Anda tidak perlu khawatir dengan kejenuhan menggunakan aplikasi
              ini. Tampilan yang menarik akan terus membuat anda jatuh cinta
              dalam mengorganisir kegiatan anda sehari-hari.
            </p>
          </div>
          <div className="w-full lg:w-4/12 bg-white justify-center py-10 px-10 m-14 shadow-md rounded-3xl cursor-pointer hover:shadow-2xl">
            <div>
              <img src="/icon/map.svg" className="w-16 h-auto" />
            </div>
            <p className="font-bold py-4 text-lg">
              Tersedia Untuk Seluruh Dunia
            </p>
            <p className="my-2 text-sm leading-7 text-gray-500">
              Aplikasi kami dapat diakses di manapun,dan kapanpun anda berada di
              belahan dunia manapun.
            </p>
          </div>
          <div className="w-full lg:w-4/12 bg-white justify-center py-10 px-10 m-14 shadow-md rounded-3xl cursor-pointer hover:shadow-2xl">
            <div>
              <img src="/icon/headphones.svg" className="w-16 h-auto" />
            </div>
            <p className="font-bold py-4 text-lg">Customer Support Super</p>
            <p className="my-2 text-sm leading-7 text-gray-500">
              Kendala apapun itu, tim customer support kami akan senantiasa
              membantu anda dengan pelayanan yang ramah dan bersahabat.{" "}
            </p>
          </div>
        </div>
        <div className="flex justify-center mt-10 mb-24">
          <button
            type="submit"
            className="focus:bg-blue-700 mt-1 bg-blue-500 text-white font-bold rounded py-3 px-12 text-sm focus:outline-none"
          >
            Hubungi Kami
          </button>
        </div>

        <style jsx>{`
          .bg-home {
            background-image: url(${bgHome});
            background-size: cover;
            background-repeat: no-repeat;
          }
        `}</style>
      </div>
    </Element>
  );
};

export default List;
