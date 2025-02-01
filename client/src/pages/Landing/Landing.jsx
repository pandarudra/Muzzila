import { Vortex } from "../../components/Landbg";
import { Piano } from "../../components/Piano/Piano";
import "./Landing.css";
import { Link } from "react-router-dom";
export const Landing = () => {
  return (
    <>
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        baseHue={120}
        className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-screen"
      >
        <div className="w-1/2 h-64  flex flex-col justify-center items-center">
          <h1 className="text-5xl md:text-6xl text-white font-bold">Muzilla</h1>
          <div className="w-full h-1/2 flex gap-3 justify-center items-center">
            <Link
              to="/login"
              className="w-1/4 h-12 bg-blue-500 text-white flex justify-center items-center rounded-md hover:bg-blue-600"
            >
              Login
            </Link>
          </div>
        </div>
        <div
          className={`absolute pianobg  bottom-0 flex flex-col items-center justify-end w-1/2 h-9 hover:h-1/3 `}
        >
          <Piano />
        </div>
      </Vortex>
    </>
  );
};
