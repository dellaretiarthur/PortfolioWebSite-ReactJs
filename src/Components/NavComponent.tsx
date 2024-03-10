import { Link } from "react-router-dom";
import Infinity from "../assets//logo.svg";
import { House, SignIn, UserPlus } from "@phosphor-icons/react";

export function NavComponent() {
    return (
        <>
            <div className="flex justify-between items-center h-[60px] w-screen border-none">
                <div className="flex items-center ml-6">
                    <img src={Infinity} alt="logo" className="color-[#272221]" />
                </div>
                <div className="flex items-center mr-5 gap-3 mt-5 flex-row">
                    <Link
                        to={"/"}
                        className="text-[#335AA6] rounded-xl px-4 py-2 mb-5  drop-shadow-xl font-roboto flex flex-row justify-center items-center gap-2 no-underline hover:overline "
                    >
                        {" "}
                        <House size={24} color="#335AA6" weight="duotone" /> Home
                    </Link>
                    <Link
                        to={"/login"}
                        className="text-[#335AA6] rounded-xl px-4 py-2 mb-5  hover:  drop-shadow-xl font-roboto flex flex-row justify-center items-center gap-2 no-underline hover:overline  "
                    >
                        {" "}
                        <SignIn size={24} color="#335AA6" weight="duotone" /> Login
                    </Link>
                    <Link
                        to={"/home"}
                        className=" text-[#335AA6] rounded-xl px-4 py-2 mb-5  drop-shadow-xl font-roboto flex flex-row justify-center items-center gap-2 no-underline hover:overline "
                    >
                        {" "}
                        <UserPlus size={24} color="#335AA6" weight="duotone" /> Sign up
                    </Link>
                </div>
            </div>
        </>
    );
}
