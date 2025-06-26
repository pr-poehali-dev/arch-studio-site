import { useState } from "react";
import Icon from "@/components/ui/icon";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-slate-900">АРХИТЕКТУРА</h1>
          </div>

          <nav className="hidden md:flex space-x-8">
            <a
              href="#home"
              className="text-slate-700 hover:text-slate-900 transition-colors"
            >
              Главная
            </a>
            <a
              href="#services"
              className="text-slate-700 hover:text-slate-900 transition-colors"
            >
              Услуги
            </a>
            <a
              href="#projects"
              className="text-slate-700 hover:text-slate-900 transition-colors"
            >
              Проекты
            </a>
            <a
              href="#about"
              className="text-slate-700 hover:text-slate-900 transition-colors"
            >
              О нас
            </a>
            <a
              href="#contact"
              className="text-slate-700 hover:text-slate-900 transition-colors"
            >
              Контакты
            </a>
          </nav>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Icon name="Menu" size={24} />
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-2">
              <a
                href="#home"
                className="text-slate-700 hover:text-slate-900 py-2"
              >
                Главная
              </a>
              <a
                href="#services"
                className="text-slate-700 hover:text-slate-900 py-2"
              >
                Услуги
              </a>
              <a
                href="#projects"
                className="text-slate-700 hover:text-slate-900 py-2"
              >
                Проекты
              </a>
              <a
                href="#about"
                className="text-slate-700 hover:text-slate-900 py-2"
              >
                О нас
              </a>
              <a
                href="#contact"
                className="text-slate-700 hover:text-slate-900 py-2"
              >
                Контакты
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
