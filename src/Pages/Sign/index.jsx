const SignIn = () => {
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

          <form className="mt-10 space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                required
                className="mt-2 w-full rounded-lg border border-gray-300 px-5 py-4 text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                required
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
};

export default SignIn;
