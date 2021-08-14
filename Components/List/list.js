const List = ({id}) => {
  return (
    <div id={id} className="">
      <p className="text-center mb-14 pt-20 text-2xl">Kenapa Menggunakan <br /> TO DO App? </p>
      <div className="flex flex-wrap w-11/12 mx-auto justify-center">
        <div className="bg-gray-100 justify-center py-10 px-10 m-14 shadow-md rounded">
          <div>
            <img src="/trophy.svg" className="w-16 h-auto"/>
          </div>
          <p className="font-bold py-4 text-lg">Mudah Digunakan.</p>
          <p className="my-2 text-sm">Dirancang dengan berdasarkan pengalaman <br />
           yang ada. Kami menyajikan penggunaan <br /> aplikasi yang friendly dan sangan mudah <br />
           digunakan.Cukup tulis, hapus, edit, apa yang <br /> anda inginkan dan dengan sekejab akan <br />
           membantu kehidupan anda</p>
        </div>
        <div className="bg-gray-100 justify-center py-10 px-10 m-14 shadow-md rounded">
          <div>
            <img src="/paint-palette.svg" className="w-16 h-auto" />
          </div>
          <p className="font-bold py-4 text-lg">Desain Menarik.</p>
          <p className="my-2 text-sm">Anda tidak perlu khawatir dengan kejenuhan <br />
          menggunakan aplikasi ini. Tampilan yang <br /> menarik akan terus membuat anda jatuh cinta <br />
          dalam mengorganisir kegiatan anda sehari-hari.</p>
        </div>
        <div className="bg-gray-100 justify-center py-10 px-10 m-14 shadow-md rounded">
          <div>
            <img src="/map.svg" className="w-16 h-auto" />
          </div>
          <p className="font-bold py-4 text-lg">Tersedia Untuk Seluruh Dunia.</p>
          <p className="my-2 text-sm">Aplikasi kami dapat diakses di manapun,dan <br />
          kapanpun anda berada di belahan dunia <br />manapun.</p>
        </div>
        <div className="bg-gray-100 justify-center py-10 px-10 m-14 shadow-md rounded">
          <div>
            <img src="/magic-hat.svg" className="w-16 h-auto" />
          </div>
          <p className="font-bold py-4 text-lg">Customer Support Super.</p>
          <p className="my-2 text-sm">Kendala apapun itu, tim customer support kami <br />
          akan senantiasa membantu anda dengan <br /> pelayanan yang ramah dan bersahabat. </p>
        </div>
      </div>
      <div className="flex justify-center my-16">
        <button
          type="submit"
          className="focus:bg-blue-700 mt-1 bg-blue-500 text-white font-bold rounded py-5 px-8 text-sm focus:outline-none">Hubungi Kami
        </button>
      </div>


    </div>
  )
}

export default List;