import BannerImage from "../assets/banner-stack.png"


 function Banner() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 py-16 md:grid-cols-[1.5fr_1fr] md:py-20">

        {/* Left Content */}
        <div className="flex flex-col items-start">

          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-slate-900 md:text-5xl">
            Build Your Ideal
            <span className="block bg-linear-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-6 text-slate-600">
            Explore frontend, backend, database, and tooling options,
            compare them side by side, and put together the stack
            that fits your next project.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap items-center gap-3">

            <button className="rounded-md bg-linear-to-r from-orange-500 to-pink-500 px-4 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-md">
              Explore Technologies
            </button>

            <button className="rounded-md border border-gray-200 px-10 py-2.5 text-sm font-medium text-slate-600 transition-colors duration-300 hover:border-gray-400 hover:text-slate-900">
              Learn More
            </button>

          </div>
        </div>

        {/* Right Illustration */}
        <div className="flex justify-center md:justify-end">
          <img
            src={BannerImage}
            alt="Development stack illustration"
            className="w-full max-w-[320px] object-contain"
          />
        </div>

      </div>
    </section>
  );
}

export default Banner;