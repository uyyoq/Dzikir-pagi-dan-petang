import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import ContactSchema from "../Kontak/__contact_schema";
import { Element } from "react-scroll";

const bgMaps = "/bg-cover/maps.svg"

const Kontak = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
    shouldFocusError: true,
    resolver: yupResolver(ContactSchema),
  });
  const onSubmit = (data) => console.log(data);

  return (
    <Element name="kontak">
      <div className="flex my-16 p-20 bg-gradient-to-r from-indigo-400 via-blue-400  to-purple-600 relative rounded shadow-xl w-9/12 justify-between mx-auto">
        <div className="">
          <div className="flex flex-col">
            <p className="text-white text-3xl">
              Tertarik Untuk Mencoba?
              <br /> Kirimkan Kami Pesan
            </p>
            <p className="text-gray-200 text-sm py-5 ">
              Jika anda punya pertanyaan mengenai aplikasi <br />
              kami,anda dapat kirim pesan melalui form di bawah{" "}
            </p>
          </div>

          <div className="flex w-full">
            <form className="flex">
              <div className="flex flex-col mr-16">
                <div className="flex flex-col my-3">
                  <label className="py-2 text-sm text-white font-bold">
                    {" "}
                    NAMA LENGKAP{" "}
                  </label>
                  <input
                    className="appearance-none rounded py-4 px-3 text-sm focus:outline-none w-full"
                    type="text"
                    name="fullName"
                    placeholder="Nama Anda?"
                    {...register("fullName", { required: true })}
                  />
                  {errors.fullName && (
                    <p className="text-red-700 error m-1 text-xs">
                      {errors.fullName.message}
                    </p>
                  )}
                </div>

                <div className="flex flex-col my-3">
                  <label className="py-2 text-sm text-white font-bold">
                    {" "}
                    EMAIL{" "}
                  </label>
                  <input
                    className="appearance-none rounded py-4 px-3 text-sm focus:outline-none w-full"
                    type="email"
                    name="email"
                    placeholder="Masukkan email valid anda"
                    {...register("email", {
                      required: true,
                    })}
                  />
                  {errors.email && (
                    <p className="text-red-700 error m-1 text-xs">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex flex-col">
                <div className="flex flex-col my-3">
                  <label
                    className="py-2 text-sm text-white  font-bold"
                    htmlFor=""
                  >
                    {" "}
                    PESAN ANDA{" "}
                  </label>
                  <textarea
                    className="appearance-none rounded py-4 px-3 text-sm focus:outline-none w-full"
                    type="text"
                    name="message"
                    rows="7"
                    cols="30"
                    placeholder="Ceritakan pertanyaan anda"
                    {...register("message", { required: true })}
                  />
                  {errors.message && (
                    <p className="text-red-700 error m-1 text-xs">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <div className="flex justify-end">
                  <button
                    onClick={handleSubmit(onSubmit)}
                    type="submit"
                    className="focus:bg-blue-700 mt-1 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded py-5 px-8 text-sm focus:outline-none"
                  >
                    Kirim
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="flex bg-maps rounded-3xl shadow-xl float-right w-5/12 h-4/6 left-96 ml-72 z-10 absolute">
          <div className="text-gray-100 justify-end m-10 flex flex-col">
            <p className="font-bold">Kelapa Gading, Jakarta Utara</p>
            <p className="w-8/12 my-3 text-sm">jl.Rima Husada No.3, Kecamatan
              Jeruk Bali, Jakarta Utara 685792
            </p>
            <p className="text-xs">085789666584</p>
          </div>
        </div>
      </div>

      <style jsx>{`
          .bg-maps {
            background-image: url(${bgMaps});
            background-size: cover;
            background-repeat: no-repeat;
          }
        `}</style>

    </Element>
  );
};

export default Kontak;
