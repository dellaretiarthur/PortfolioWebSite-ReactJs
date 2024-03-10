import { Link } from "react-router-dom";
import { NavComponent } from "../Components/NavComponent";
import img3d from "../assets/krum.jpeg"

export function LandPage() {
  return (
    <>
      <NavComponent />
      <div className="flex justify-around flex-row items-center w-screen h-screen min-h-screen overflow-hidden ">
        <div className="flex flex-col drop-shadow-xl justify-center max-h-[545px] max-w-[469px] h-[546px] w-[469px] items-center">
          <p className="font-dongpora text-8xl text-[#335AA6] ">
            The future of online portfolio
          </p>
          <p className="font-dongpora text-5xl text-[#335AA6] text-opacity-70 font-thin pt-3 ">
            Your path to the next level start's here
          </p>
          <div className="pt-9 flex justify-start items-start w-full ">
            <Link to={"/home"}>
              <button className="bg-[#335AA6] text-[#FAFAFA] text-2xl rounded-xl px-4  py-2 mb-5 hover:bg-[#4668ac] drop-shadow-xl font-roboto "> Start free trial!
              </button>
            </Link>
          </div>
        </div>
        <div className="flex items-center max-w-[469px] w-[469px] h-[546px] pb-6 ">
          <img src={img3d} alt="logo" className="w-full h-full scale-[1.1] overflow-visible" />
        </div>
      </div>
      
    </>
  );
}
