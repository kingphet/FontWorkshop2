import logo from "../assets/logo.png";
import { useState } from "react";
import axios from "axios";

export default function Login() {
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const SubmitLogin = (e) => {
    e.preventDefault();
    axios.post("https://apiworkshop2.onrender.com/api/login",data)
    .then(res => {
        alert(res.data)
    })
    .catch(err => {
        // console.log(err)
        alert("you can't see me")
    })
  };

  const HandleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center p-6 py-12 lg:px-8">
        <div className="sm:mx-auto text-2xl sm:w-full sm:max-w-sm">
          <img className="mx-auto h-32 w-auto" src={logo} alt="Your Company" />
          {/* <h2 className="mt-10 text-center font-bold leading-9 tracking-tight text-[#4267B2]">
          </h2> */}
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" onSubmit={SubmitLogin}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-bold leading-6 text-gray-700"
              >
                ຊື່ຜູ້ໃຊ້
              </label>
              <div className="mt-2">
                <input
                  placeholder="ຊື່ຜູ້ໃຊ້"
                  name="username"
                  onChange={HandleChange}
                  required
                  className="block w-full rounded-md border-0 bg-gray-200 outline-none px-3 py-1.5 text-gray-700 shadow-sm placeholder:text-gray-400"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-bold leading-6 text-gray-700"
                >
                  ລະຫັດຜ່ານ
                </label>
              </div>
              <div className="mt-2">
                <input
                  placeholder="ລະຫັດຜ່ານ"
                  name="password"
                  type="password"
                  onChange={HandleChange}
                  required
                  className="block w-full rounded-md border-0 bg-gray-200 outline-none px-3 py-2 text-gray-700 shadow-sm placeholder:text-gray-400"
                />
              </div>
            </div>

            <div className="flex justify-center items-center">
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                ເຂົ້າສູ່ລະບົບ
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
