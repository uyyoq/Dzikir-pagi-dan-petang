import TodoApp from "./todoApp";
import { Element } from "react-scroll";

const DemoSederhana = () => {
  return (
    <Element name="demoSederhana">
      <div className="flex w-full flex-col pt-20 bg-blue-400 h-full shadow rounded p-6 pb-72 mb-20 justify-center mx-auto">
        <div className="flex flex-col justify-center m-8">
          <p className="text-2xl font-medium mb-5 text-white text-center">
            Demo Sederhana
          </p>
        </div>
        <TodoApp />
      </div>
    </Element>
  );
};
export default DemoSederhana;
