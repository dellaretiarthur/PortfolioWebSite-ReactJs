import { Link } from "react-router-dom";
import { z } from "zod";
import { useForm} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";


import Infinity from '../assets/logo.svg'
import { NavComponent } from "../Components/NavComponent";


type formProps = z.infer<typeof formSchema>;

const formSchema = z
  .object({
    email: z.string().email("invalid email"),
    password: z.string().min(8, "password too short"),
  })



export function Login() {
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
      <div className=" flex justify-center items-center w-screen h-screen">
        <div className="border rounded-md border-solid drop-shadow-xl border-[#335AA6] max-h-[545px] max-w-[469px] h-[546px] w-[469px]  items-center justify-around drop">
          <div className="flex flex-col items-center mt-5">
            <img src={Infinity} alt="infinito" />
            <h1 className="text-8xl font-medium text-[#335AA6] font-morganite">Login</h1>
          </div>
          <form onSubmit={handleSubmit(handleFormSubmit)}>
            <div className="flex justify-center flex-col mx-5 mt-8">
              <div className="flex justify-start items-start">
                <span className="text-[#335AA6] font-roboto">E-mail
                <small className="justify-center text-[#e17b7b] text-[10px] pl-3">
                    {errors.email?.message}
                  </small>
                </span>
              </div>
              <input
                type="text"
                placeholder="jhondoe@gmail.com"
                {...register("email")}
                className=" border rounded-md mt-2 mb-4 w-auto h-[32px] pl-2 placeholder:italic placeholder:text-slate-400 placeholder:text-center placeholder:from-transparent placeholder:to-transparent"
              />
              <div className="flex justify-start items-start">
                <span className="text-[#335AA6] font-roboto">Password
                <small className="justify-center text-[#e17b7b] text-[10px] text-center pl-4">{errors.password?.message}</small>
                </span>
              </div>
              <input
                type="password"
                placeholder="*********"
                {...register("password")}
                className=" border rounded-md mt-2 mb-4 w-auto h-[32px] pl-2 placeholder:italic placeholder:text-slate-400 placeholder:text-center placeholder:from-transparent placeholder:to-transparent"
              />
            </div>
            <div className="flex justify-center items-center">
            <button className="bg-[#335AA6] text-[#FAFAFA] rounded-xl px-4 py-2 mb-5 hover:bg-[#4668ac] drop-shadow-xl font-roboto ">
              Entrar
            </button>
          </div>
          </form>
          <div className="flex flex-col items-center justify-center mb-5">
            <p className="text-[#335AA6] font-thin text-[14px] mx-5 my-2 font-roboto ">
              Not registered yet??{" "}
              <span className="text-[#335AA6] font-medium ml-0.5 ">
                <Link
                  to={"/home"}
                  className=" underline decoration-white font-roboto hover:text-[#335AA6] hover:decoration-[#335AA6]"
                >
                  Register!
                </Link>
              </span>
            </p>
          </div>
          
        </div>
      </div>
    </>
  );
}