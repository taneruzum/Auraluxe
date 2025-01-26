import { UserLoginRequest } from "@/api/forUser";
import { userLogin } from "@/lib/features/user/actions";
import { useAccount } from "@/lib/features/user/hooks";
import { useEffect, useState } from "react";
import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";


export default function SignIn() {

  //const userSessios = useAccount();
  // useEffect(() => {
  //   console.log("Kullanıcı Bilgisi: ", userSessios);
  // }, [userSessios]);

  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const [loginFormData, setLoginFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginFormData({
      ...loginFormData,
      [name]: value
    });
  };

  const LoginFormControl = () => {
    const { email, password } = loginFormData;
    if (!email && !password) {
      alert('E-posta ve şifre boş olamaz.');
      return false;
    }
    if (!email) {
      alert('E-posta boş olamaz.');
      return false;
    }
    if (!password) {
      alert('Şifre boş olamaz.');
      return false;
    }
    return true;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (LoginFormControl()) {
      try {
        const response = await UserLoginRequest(loginFormData);
        userLogin(response.data.user);
        Cookies.set('AuraluxeUserToken', response.data.token);
        //console.log("Kullanıcı Bilgisi: ", response.data);
        enqueueSnackbar("You have successfully logged in.", {
          variant: "success",
        });
        setTimeout(() => {
          navigate('/');
        }, 2700);
      } catch (error) {
        enqueueSnackbar("Your login attempt was unsuccessful.", {
          variant: "error",
        });
      }
    }
    return false;
  }

  return (
    <div className=" w-full flex items-center justify-center ">
      <div className="flex w-full max-w-screen-lg overflow-hidden bg-white rounded-lg  shadow-lg">
        {/* Sol Taraf: Görsel */}
        <figure className="hidden sm:flex items-center justify-center  w-full ">
          <img
            src="/decor/giriş.jpg"
            alt="Giriş Yap Yan Resim"
            className="rounded-lg rounded-r-3xl overflow-hidden" />
        </figure>

        {/* Sağ Taraf: Giriş Yap Formu */}
        <div className="flex w-full flex-col justify-center px-6 py-4">
          <h2 className="text-center text-4xl font-bold text-[#F1C6D1]">
            Sign In
          </h2>
          <p className="mt-4 text-center text-base text-gray-600">
            Welcome back! Please sign in to your account.
          </p>

          <form onSubmit={handleSubmit} className="mt-10 space-y-6">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={loginFormData.email}
                onChange={handleChange}
                className="mt-2 w-full rounded-lg border border-gray-300 px-5 py-4 text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                value={loginFormData.password}
                onChange={handleChange}
                className="mt-2 w-full rounded-lg border border-gray-300 px-5 py-4 text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-[#F1C6D1] py-3 font-bold text-white hover:bg-[#E3A7B2] focus:outline-none focus:ring-2 focus:ring-[#F1C6D1]"
            >
              Sign In
            </button>
          </form>

          <div className="mt-6 text-center text-sm">
            Don&apos;t have an account?{" "}
            <a href="/signup" className="text-blue-500 hover:underline">
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

