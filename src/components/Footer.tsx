import logoText from "../assets/logo-text.png";

function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6">


{/* Top sec */}
        <div className="flex justify-between items-start gap-12 pb-16">
          


{/* Logo side */}
          <div className="max-w-sm">
            <a href="#home">
              <img src={logoText} alt="Dev Stack" className="h-8 object-contain" />
            </a>
            
            <p className="mt-4 text-xs text-slate-500 leading-relaxed">
              Curated tools, technologies, and resources for developers building modern software.
            </p>



{/*  social media */}
            <div className="mt-6 flex items-center gap-5 text-xs font-semibold text-slate-700">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-gray-300 transition-colors">
                GitHub
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-indigo-700 transition-colors">
                Twitter
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-indigo-700 transition-colors">
                LinkedIn
              </a>
            </div>
          </div>


          <div className="flex gap-20">
            


{/* Product */}
            <div>
              <h4 className="text-xs font-bold tracking-wider text-slate-900 uppercase">
                Product
              </h4>
              <ul className="mt-4 space-y-2.5 text-xs text-slate-500">
                <li><a href="#home" className="hover:text-pink-600 transition-colors">Home</a></li>
                <li><a href="#technologies" className="hover:text-pink-600 transition-colors">Technologies</a></li>
                <li><a href="#projects" className="hover:text-pink-600 transition-colors">Projects</a></li>
              </ul>
            </div>


{/* Company */}
            <div>
              <h4 className="text-xs font-bold tracking-wider text-slate-900 uppercase">
                Company
              </h4>
              <ul className="mt-4 space-y-2.5 text-xs text-slate-500">
                <li><a href="#about" className="hover:text-pink-600 transition-colors">About</a></li>
                <li><a href="#contact" className="hover:text-pink-600 transition-colors">Contact</a></li>
                <li><a href="#careers" className="hover:text-pink-600 transition-colors">Careers</a></li>
              </ul>
            </div>



{/* Legal */}
            <div>
              <h4 className="text-xs font-bold tracking-wider text-slate-900 uppercase">
                Legal
              </h4>
              <ul className="mt-4 space-y-2.5 text-xs text-slate-500">
                <li><a href="#privacy" className="hover:text-pink-600 transition-colors">Privacy Policy</a></li>
                <li><a href="#terms" className="hover:text-pink-600 transition-colors">Terms of Service</a></li>
              </ul>
            </div>

          </div>

        </div>


{/* Privacy and Terms  */}
        <div className="border-t border-gray-100 pt-8 flex justify-between items-center text-xs text-slate-400">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#privacy" className="hover:text-slate-600 transition-colors">Privacy</a>
            <a href="#terms" className="hover:text-slate-600 transition-colors">Terms</a>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;