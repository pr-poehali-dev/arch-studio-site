const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen relative overflow-hidden flex items-center"
    >
      {/* Фоновое изображение */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-violet-900/80 via-purple-900/60 to-pink-900/80"></div>
      </div>

      {/* Геометрические фигуры */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-32 left-16 w-24 h-24 bg-gradient-to-br from-violet-400 to-purple-500 transform rotate-12 opacity-30"></div>
      <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-gradient-to-br from-pink-400 to-orange-500 rounded-full opacity-25 animate-bounce"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-6xl lg:text-8xl font-black text-white leading-none">
                СОЗДАЕМ
              </h1>
              <h2 className="text-4xl lg:text-6xl font-light text-orange-400 ml-8">
                архитектуру
              </h2>
              <h3 className="text-5xl lg:text-7xl font-black text-pink-400 ml-16">
                БУДУЩЕГО
              </h3>
            </div>

            <p className="text-xl lg:text-2xl text-white/90 max-w-lg ml-4 leading-relaxed">
              Революционные архитектурные решения с использованием передовых
              технологий и невероятного креативного подхода
            </p>

            <div className="flex flex-col sm:flex-row gap-6 ml-8">
              <button className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-10 py-4 rounded-full text-lg font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300 transform">
                🚀 Смотреть проекты
              </button>
              <button className="border-2 border-white text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-white hover:text-violet-900 transition-all duration-300 backdrop-blur-sm">
                💬 Обсудить идею
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="w-96 h-96 bg-gradient-to-br from-violet-500/20 to-pink-500/20 rounded-full absolute -top-10 -right-10 animate-spin-slow"></div>
            <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-orange-400 rounded-full animate-pulse"></div>
                  <span className="text-white/80">15+ лет опыта</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-pink-400 rounded-full animate-pulse"></div>
                  <span className="text-white/80">
                    200+ реализованных проектов
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-violet-400 rounded-full animate-pulse"></div>
                  <span className="text-white/80">Международные награды</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
