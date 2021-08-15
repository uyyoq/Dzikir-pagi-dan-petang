import { Element } from "react-scroll";

const bgImage = "/bg-cover/todolist.svg";
const Tentang = () => {
  return (
    <Element name="tentang">
      <div className="pt-40 pb-0 bg-gradient-to-b from-blue-400 to-green-500">
        <div className="flex flex-col lg:flex-row justify-between space-y-16 lg:space-y-0">
          <div className="ml-14 relative w-1/2 space-y-5">
            <p className="text-4xl font-bold text-gray-100 lg:w-96">
              Mudahkan Pencatatan Agenda Harianmu
            </p>
            <p className="py-3 text-gray-50 lg:leading-7 lg:pr-28">
              Dengan "to do" app,semua yang akan anda kerjakan akan selalu ada
              dalam genggaman smartphone anda Tingkatkan produktivitas harian
              anda sekarang
            </p>
            <button
              type="submit"
              className="mt-1 bg-blue-600 text-white hover:bg-blue-700 font-bold rounded py-4  text-sm focus:outline-none px-5"
            >
              Pelajari Selengkapnya
            </button>
          </div>
          <div className="flex  mr-14 justify-center lg:justify-end">
            <img
              src={bgImage}
              className="w-10/12 h-auto"
              alt="background todo list"
            />
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Tentang;
