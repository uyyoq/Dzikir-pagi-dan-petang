import { useState } from "react";
import TodoApp from "./todoApp";

const DemoSederhana = ({id}) => {
  return (
    <div id={id} className="flex flex-col pt-20 bg-blue-400 h-full shadow rounded p-6 pb-72 mb-20 justify-center mx-auto w-3/4">
      <div className="flex flex-col justify-center m-8">
        <p className="text-2xl font-medium mb-5 text-white text-center">Demo Sederhana</p>
      </div>

      {/* <div>
        <div className="justify-center my-0 mx-auto">
          <form className="mb-4">
            <input
              type='text'
              className='rounded outline-none shadow border md:px-4 font-Yusei Magic md:py-1'
            />
            <button className='cursor-pointer bg-red-400 hover:bg-blue-300 focus:bg-blue-300 focus:outline-none capitalize mx-1 md:mx-3 px-3 py-1 rounded'>-</button>
          </form>

        </div>

      </div> */}
 
     <TodoApp />
    </div>
  )
}
export default DemoSederhana;