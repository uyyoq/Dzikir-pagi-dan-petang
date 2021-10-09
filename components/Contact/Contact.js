import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ContactS } from "./__contact_schema";

const everest = "/background.svg";

const Contact = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
    shouldFocusError: true,
    resolver: yupResolver(ContactS),
  });
  const onSubmit = (data) => console.log(data);

  return (
    <div className="bg-everest">
      {/* RESPONSIVE MOBILE */}
      <div className="w-full md:hidden bg-everest">
        <div className="w-full flex flex-col justify-center">
          <p className="font-bold text-gray-800 font-3x text-center font-JosefinSans">
            Hubungi Kami
          </p>
          <form className="mx-10">
            <div className="mt-5">
              <input
                className="appearance-none bg-gray-100 rounded-lg py-4 px-5 text-sm focus:outline-none w-full"
                type="text"
                name="fullName"
                placeholder="Nama Lengkap"
                {...register("fullName", { required: true })}
              />
              {errors.fullName && (
                <p className="text-red-400 error text-xs">
                  {errors.fullName.message}
                </p>
              )}
            </div>

            <div className="my-2">
              <input
                className="appearance-none bg-gray-100 rounded-lg py-4 px-5 text-sm focus:outline-none w-full"
                type="email"
                name="email"
                placeholder="Alamat Email"
                {...register("email", {
                  required: true,
                })}
              />
              {errors.email && (
                <p className="text-red-400 error text-xs">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="my-2">
              <textarea
                className="appearance-none bg-gray-100 rounded-lg py-4 px-3 text-sm focus:outline-none w-full"
                type="text"
                name="message"
                rows="3"
                cols="1"
                placeholder="Tulis Pesan"
                {...register("message", { required: true })}
              />
              {errors.message && (
                <p className="text-red-400 error text-xs">
                  {errors.message.message}
                </p>
              )}
            </div>

            <div className="">
              <button
                onClick={handleSubmit(onSubmit)}
                type="submit"
                className="focus:bg-gray-300 mt-1 bg-gray-100 text-blue-900 font-bold rounded-lg py-2 px-4 text-sm focus:outline-none"
              >
                Kirim
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* RESPONSIVE lAPTOP */}
      <div className="w-full hidden md:flex md:justify-center lg:justify-start">
        <div className="flex w-2/6 justify-end md:mx-1">
          <img src="/mane.svg" className="lg:w-56 md:40 h-auto" alt="man" />
        </div>
        <div className="md:w-1/2 lg:flex lg:flex-col lg:justify-end">
          <p className="font-bold md:text-gray-800 lg:text-gray-200 font-6xl mb-10 font-JosefinSans">
            Hubungi Kami
          </p>
          <form className="flex md:flex-col lg:flex-row md:mx-10 lg:mx-0">
            <div className="lg:mr-16">
              <div className="my-4 md:mt-10 lg:mt-0">
                <input
                  className="appearance-none bg-gray-100 rounded-lg py-4 px-3 text-sm focus:outline-none w-full"
                  type="text"
                  name="fullName"
                  placeholder="Nama Lengkap"
                  {...register("fullName", { required: true })}
                />
                {errors.fullName && (
                  <p className="text-red-400 error text-xs">
                    {errors.fullName.message}
                  </p>
                )}
              </div>

              <div className="my-4">
                <input
                  className="appearance-none bg-gray-100 rounded-lg py-4 px-3 text-sm focus:outline-none w-full"
                  type="email"
                  name="email"
                  placeholder="Alamat Email"
                  {...register("email", {
                    required: true,
                  })}
                />
                {errors.email && (
                  <p className="text-red-400 error text-xs">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>

            <div className="">
              <textarea
                className="appearance-none bg-gray-100 rounded-lg py-4 px-3 text-sm focus:outline-none w-full"
                type="text"
                name="message"
                rows="5"
                cols="35"
                placeholder="Tulis Pesan"
                {...register("message", { required: true })}
              />
              {errors.message && (
                <p className="text-red-400 error text-xs">
                  {errors.message.message}
                </p>
              )}
            </div>
            <div className="lg:mx-10 lg:mt-12 md:mt-3">
              <button
                onClick={handleSubmit(onSubmit)}
                type="submit"
                className="focus:bg-gray-300 mt-1 bg-gray-100 text-blue-900 font-bold rounded-lg py-2 px-4 text-sm focus:outline-none"
              >
                Kirim
              </button>
            </div>
          </form>
        </div>
      </div>
      <style jsx>{`
        .bg-everest {
          background-image: url(${everest});
          background-size: cover;
          background-repeat: no-repeat;
        }
      `}</style>
      ;
    </div>
  );
};

export default Contact;
