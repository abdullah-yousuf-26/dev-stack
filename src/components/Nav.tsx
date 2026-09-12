import logoText from "../assets/logo-text.png";

function Nav() {
  return (


    <div className="sticky top-0 z-50 bg-white border-b border-gray-300">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">




{/* logo dev */}
          <div className="flex items-center">
            <a href="#home">
              <img src={logoText} alt="DevStack Logo" className="h-9" />
            </a>
          </div>



{/* menu list */}

          <div className="flex items-center gap-8">
            <a href="#home" className="text-pink-600 font-medium">Home</a>
            <a href="#technologies" className="text-gray-600 hover:text-pink-600">Technologies</a>
            <a href="#projects" className="text-gray-600 hover:text-pink-600">Projects</a>
            <a href="#about" className="text-gray-600 hover:text-pink-600">About</a>
            <a href="#contact" className="text-gray-600 hover:text-pink-600">Contact</a>
          </div>



{/* daan pssha er  */}
          <div className="flex items-center gap-4">
            <button className="text-gray-700 hover:text-pink-600 font-medium">
              Sign In
            </button>
            <button className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded-full font-medium">
              Sign Up
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Nav;