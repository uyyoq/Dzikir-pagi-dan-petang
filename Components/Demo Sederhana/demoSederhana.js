import TodoApp from "./todoApp";
import { Element } from "react-scroll";

const DemoSederhana = () => {
  return (
    <Element name="demoSederhana">
      <div className="flex w-7/12 flex-col pt-20 bg-blue-400 h-full shadow rounded-3xl p-6 pb-44 mt-32  justify-center mx-auto">
        <div className="flex flex-col justify-center m-8">
          <p className="text-2xl font-bold mb-5 text-gray-100 text-center">
            Demo Sederhana
          </p>
        </div>
        <TodoApp />
      </div>
    </Element>
  );
};
export default DemoSederhana;
