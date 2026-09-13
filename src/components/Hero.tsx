import heroImg from "../assets/banner-stack.png";

function Hero() {
  return (

    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-12">
        

{/* text section */}

        <div className="max-w-xl">
          <h1 className="text-6xl font-black text-slate-900 leading-tight">
            Build Your Ideal <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600">
              Development Stack
            </span>
          </h1>

          <p className="mt-6 text-lg text-slate-500 leading-relaxed">
            Explore frontend, backend, database, and tooling options,
            compare them side by side, and put together the stack that fits your
            next project.
          </p>

{/* hero button */}
          <div className="mt-8 flex items-center gap-4">
            <button className="bg-gradient-to-r from-orange-500 to-pink-500 text-white font-medium px-6 py-3 rounded-lg shadow-md hover:opacity-90">
              Explore Technologies
            </button>
            <button className="bg-white border border-gray-200 text-slate-700 font-medium px-6 py-3 rounded-lg hover:bg-gray-50">
              Learn More
            </button>
          </div>
        </div>



        
{/* image */}
        <div className="flex-1 flex justify-center">
          <img 
            src={heroImg} 
            alt="Development Stack 3D Visual" 
            className="w-full max-w-lg object-contain"
          />
        </div>

      </div>
    </div>
  );
}

export default Hero;