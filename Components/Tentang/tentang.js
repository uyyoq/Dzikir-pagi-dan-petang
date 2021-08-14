const Tentang = ({id}) => {
  return (
    <div id={id} className="pt-20 pb-24">
      <div className="flex justify-between">
        <div className="ml-14 relative w-1/2">
          <p className="text-5xl">Mudahkan <br /> Pencatatan Agenda <br /> Harianmu</p>
          <p className="py-3">Dengan "to do" app,semua yang akan anda kerjakan <br /> akan selalu ada dalam genggaman smartphone anda,<br />
           Tingkatkan produktivitas harian anda sekarang
           </p>
          <button type="submit"
            className="mt-1 bg-blue-600 text-white hover:bg-blue-700 font-bold rounded py-4 px-3 text-sm focus:outline-none">
            Pelajari Selengkapnya</button>
        </div>
        <div className="flex mr-14 justify-end">
          <img src="/bg.svg" className="w-10/12 h-auto" alt="background" />
        </div>
      </div>
    </div>
  )
}

export default Tentang;