import { useState } from "react";
import Icon from "@/components/ui/icon";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-violet-600 via-purple-600 to-pink-500 backdrop-blur-lg bg-opacity-90 fixed w-full top-0 z-50 shadow-2xl">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center transform hover:scale-105 transition-transform duration-300">
            <h1 className="text-3xl font-black text-white tracking-wider">
              АРХИ<span className="text-orange-400">ТЕКТУРА</span>
            </h1>
          </div>

          <nav className="hidden lg:flex items-center space-x-12">
            <a
              href="#home"
              className="text-white/90 hover:text-orange-400 transition-all duration-300 text-lg font-medium relative group"
            >
              Главная
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="#services"
              className="text-white/90 hover:text-pink-400 transition-all duration-300 text-lg font-medium relative group"
            >
              Услуги
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="#projects"
              className="text-white/90 hover:text-orange-400 transition-all duration-300 text-lg font-medium relative group"
            >
              Проекты
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="#about"
              className="text-white/90 hover:text-pink-400 transition-all duration-300 text-lg font-medium relative group"
            >
              О нас
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <button className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
              Контакт
            </button>
          </nav>

          <button
            className="lg:hidden relative w-10 h-10 flex flex-col justify-center items-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span
              className={`w-6 h-0.5 bg-white transform transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-1.5" : ""}`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-white mt-1.5 transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-white mt-1.5 transform transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
            ></span>
          </button>
        </div>

        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${isMenuOpen ? "max-h-96 pb-6" : "max-h-0"}`}
        >
          <nav className="flex flex-col space-y-6 pt-6 border-t border-white/20">
            <a
              href="#home"
              className="text-white/90 hover:text-orange-400 transition-colors text-xl font-medium"
            >
              Главная
            </a>
            <a
              href="#services"
              className="text-white/90 hover:text-pink-400 transition-colors text-xl font-medium"
            >
              Услуги
            </a>
            <a
              href="#projects"
              className="text-white/90 hover:text-orange-400 transition-colors text-xl font-medium"
            >
              Проекты
            </a>
            <a
              href="#about"
              className="text-white/90 hover:text-pink-400 transition-colors text-xl font-medium"
            >
              О нас
            </a>
            <button className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold self-start">
              Контакт
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
