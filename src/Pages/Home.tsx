import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import "../Fonts/fonts.css";


import Infinity from "../assets//logo.svg";
import { NavComponent } from "../Components/NavComponent";

type formProps = z.infer<typeof formSchema>;

const formSchema = z
  .object({
    email: z.string().email("invalid email"),
    password: z.string().min(8, "password too short"),
    ConfirmPassword: z.string().min(8, "password too short"),
  })
  .refine((data) => data.password === data.ConfirmPassword, {
    message: "passwords don't match",
    path: ["ConfirmPassword"],
  });

export function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formProps>({
    resolver: zodResolver(formSchema),
  });

  function handleFormSubmit(data: formProps) {
    const parsedData = formSchema.parse(data);
    console.log(parsedData);
  }

  return (
    <>
      <NavComponent />
      <div className=" flex justify-center items-center  w-screen h-screen">
        <div className="border rounded-md border-solid border-[#335AA6]  max-h-[545px] max-w-[469px] h-[545px] w-[469px]  items-center justify-around shadow-2xl md:shadow-lg">
          <div className="flex flex-col items-center mt-5">
            <img src={Infinity} alt="infinito" />
            <h1 className="text-8xl font-medium text-[#335AA6] font-morganite">
              Sign up
            </h1>
          </div>
          <form onSubmit={handleSubmit(handleFormSubmit)}>
            <div className="flex justify-center flex-col mx-5 mt-8">
              <div className="flex justify-start items-start">
                <span className="text-[#335AA6] font-roboto gap-3">
                  E-mail{" "}
                  <small className="justify-center text-[#e17b7b] text-[10px]">
                    {errors.email?.message}
                  </small>
                </span>
              </div>

              <input
                type="text"
                placeholder="jhondoe@gmail.com"
                autoComplete="on"
                {...register("email")}
                className=" border rounded-md mt-2 mb-4 w-auto h-[32px] pl-2 placeholder:italic placeholder:text-slate-400 placeholder:text-center placeholder:from-transparent placeholder:to-transparent"
              />

              <div className="flex justify-start items-start">
                <span className="text-[#335AA6] font-roboto gap-4">
                  Password{" "}
                  <span className="text-[12px] text-[grey]">
                    Min(8)
                    <small className="justify-center text-[#e17b7b] text-[10px] text-center pl-4">{errors.password?.message}</small>
                  </span>
                </span>
              </div>
              <input
                type="password"
                placeholder="*********"
                {...register("password")}
                className=" border rounded-md mt-2 mb-4 w-auto h-[32px] pl-2 placeholder:italic placeholder:text-slate-400 placeholder:text-center placeholder:from-transparent placeholder:to-transparent"
              />
              
              <div className="flex justify-start items-start">
                <span className="text-[#335AA6] font-roboto">
                  Confirm Password
                  <small className="justify-center text-[#e17b7b] text-[10px] pl-4">{errors.ConfirmPassword?.message}</small>
                </span>
              </div>
              <input
                type="password"
                placeholder="*********"
                {...register("ConfirmPassword")}
                className=" border rounded-md mt-2 w-auto h-[32px] pl-2 placeholder:italic placeholder:text-slate-400 placeholder:text-center placeholder:from-transparent placeholder:to-transparent"
              />
              <div className="flex justify-center items-center flex-row gap-3 ">
                <button
                  type="submit"
                  className="bg-[#335AA6] text-[#F2F2F2] rounded-xl px-4  mt-5 hover:bg-[#4668ac] drop-shadow-xl font-roboto"
                >
                  Confirm
                </button>
              </div>
            </div>
          </form>
          <div className="flex flex-col items-center justify-center mb-5">
            <p className="text-[#335AA6] font-thin text-[14px] mx-5 my-2 font-roboto ">
              Already a member?{" "}
              <span className="text-[#335AA6] font-medium ml-0.5 ">
                <Link
                  to={"/login"}
                  className=" underline decoration-[#335AA6] font-roboto"
                >
                  Login!
                </Link>
              </span>
            </p>
          </div>
          <div className="flex flex-row mb-[25px]  text-[#335AA6] font-roboto font-extralight justify-center items-center">
            <p className="text-xs"></p>
          </div>
        </div>
      </div>
    </>
  );
}
