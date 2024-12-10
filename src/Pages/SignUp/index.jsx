const SignUp = () => {
  return (
    <div className="w-full flex items-center justify-center ">
      <div className="flex w-full max-w-screen-lg overflow-hidden bg-white rounded-lg  shadow-lg">
        {/* Sol Taraf: Görsel */}
        
        <figure className="w-full rounded-lg rounded-r-3xl overflow-hidden">
          <img src="/decor/kayıt.jpg" alt="Kayıt Ol Yan Resim" />
        </figure>

        {/* Sağ Taraf: Kayıt Ol Formu */}
        <div className="flex w-full flex-col justify-center px-6">
          <h2 className="text-center text-4xl font-bold text-[#F1C6D1]">
            Sign Up
          </h2>
          <p className="mt-4 text-center text-base text-gray-600">
            Create your account to join us!
          </p>

          <form className="mt-10 space-y-6">
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                required
                className="mt-2 w-full rounded-lg border border-gray-300 px-5 py-4 text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
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

            <div>
              <label
                htmlFor="confirm-password"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirm-password"
                required
                className="mt-2 w-full rounded-lg border border-gray-300 px-5 py-4 text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-[#F1C6D1] py-3 font-bold text-white hover:bg-[#E3A7B2] focus:outline-none focus:ring-2 focus:ring-[#F1C6D1]"
            >
              Sign Up
            </button>
          </form>

          <div className="mt-6 text-center text-sm">
            Already have an account?{" "}
            <a href="/" className="text-blue-500 hover:underline">
              Sign In
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
