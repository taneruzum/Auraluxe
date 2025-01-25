import { UserRegisterRequest } from "@/api/forUser";
import { useState } from "react";

export default function SignUp() {

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const FormControl = () => {
    const { username, email, password, confirmPassword } = formData;
    if (!username || !email || !password || !confirmPassword) {
      return false;
    }
    if (password !== confirmPassword) {
      alert('Şifreler uyuşmuyor.');
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (FormControl()) {
      UserRegisterRequest(formData);
      alert('Kayıt işlemi başarılı.');
    } else {
      alert('Tüm alanları doldurunuz.');
    }
  };


  return (
    <div className=" w-full flex items-center justify-center ">
      <div className="flex w-full max-w-screen-lg overflow-hidden bg-white rounded-lg  shadow-lg">
        <figure className="hidden sm:flex items-center justify-center w-full ">
          <img
            src="/decor/kayıt.jpg"
            alt="Kayıt Ol Yan Resim"
            className="rounded-lg rounded-r-3xl overflow-hidden" />
        </figure>

        {/* Sağ Taraf: Kayıt Ol Formu */}
        <div className="flex w-full flex-col justify-center px-6 py-4">
          <h2 className="text-center text-4xl font-bold text-[#F1C6D1]">
            Sign Up
          </h2>
          <p className="mt-4 text-center text-base text-gray-600">
            Create your account to join us!
          </p>

          <form onSubmit={handleSubmit} className="w-full max-w-md">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700" htmlFor="username">
                Username
              </label>
              <input
                type="text"
                name="username"
                id="username"
                value={formData.username}
                onChange={handleChange}
                className="mt-2 w-full rounded-lg border border-gray-300 px-5 py-4 text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
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
                value={formData.password}
                onChange={handleChange}
                className="mt-2 w-full rounded-lg border border-gray-300 px-5 py-4 text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700" htmlFor="confirmPassword">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="mt-2 w-full rounded-lg border border-gray-300 px-5 py-4 text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="w-full rounded-lg bg-[#F1C6D1] py-3 font-bold text-white hover:bg-[#E3A7B2] focus:outline-none focus:ring-2 focus:ring-[#F1C6D1]"
              >
                Sign Up
              </button>
            </div>
          </form>
          <div className="mt-6 text-center text-sm">
            Already have an account?{" "}
            <a href="/signin" className="text-blue-500 hover:underline">
              Sign In
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
