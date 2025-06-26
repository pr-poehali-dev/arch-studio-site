const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-50 to-white pt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight">
          Создаем
          <br />
          <span className="text-slate-600">Архитектуру</span>
          <br />
          Будущего
        </h1>
        <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
          Проектируем жилые комплексы, коммерческие здания и социальные объекты
          с вниманием к деталям и инновационным решениям
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-slate-900 text-white px-8 py-3 rounded-lg hover:bg-slate-800 transition-colors">
            Посмотреть проекты
          </button>
          <button className="border border-slate-300 text-slate-700 px-8 py-3 rounded-lg hover:bg-slate-50 transition-colors">
            Связаться с нами
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
