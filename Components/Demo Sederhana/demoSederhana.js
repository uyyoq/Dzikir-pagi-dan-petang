import { useState } from "react";
import TodoApp from "./todoApp";

const DemoSederhana = ({id}) => {
  return (
    <div id={id} className="flex flex-col pt-20 bg-blue-400 h-full shadow rounded p-6 pb-72 mb-20 justify-center mx-auto w-3/4">
      <div className="flex flex-col justify-center m-8">
        <p className="text-2xl font-medium mb-5 text-white text-center">Demo Sederhana</p>
      </div>
     <TodoApp />
    </div>
  )
}
export default DemoSederhana;