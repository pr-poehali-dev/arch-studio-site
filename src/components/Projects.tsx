const Projects = () => {
  const projects = [
    {
      title: "Жилой комплекс «Панорама»",
      category: "Жилые комплексы",
      image:
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      description: "Современный жилой комплекс с развитой инфраструктурой",
      size: "large",
    },
    {
      title: "Загородный дом в Подмосковье",
      category: "Частные дома",
      image:
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Минималистичный дом с панорамными окнами",
      size: "medium",
    },
    {
      title: "Бизнес-центр «Кристалл»",
      category: "Коммерческие здания",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      description: "Современный офисный комплекс класса А",
      size: "large",
    },
    {
      title: "Школа будущего",
      category: "Социальные объекты",
      image:
        "https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Инновационное образовательное пространство",
      size: "medium",
    },
    {
      title: "Культурный центр",
      category: "Культурные объекты",
      image:
        "https://images.unsplash.com/photo-1505577058444-a3dab90d4253?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Архитектурный шедевр современности",
      size: "small",
    },
    {
      title: "Торговый комплекс «Атриум»",
      category: "Торговые центры",
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Инновационное торговое пространство",
      size: "small",
    },
  ];

  return (
    <section
      id="projects"
      className="py-32 bg-gradient-to-br from-violet-900 via-purple-900 to-pink-900 relative overflow-hidden"
    >
      {/* Floating элементы */}
      <div
        className="absolute top-32 left-20 w-4 h-4 bg-orange-400 rounded-full animate-bounce"
        style={{ animationDelay: "0s" }}
      ></div>
      <div
        className="absolute top-64 right-32 w-6 h-6 bg-pink-400 rounded-full animate-bounce"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute bottom-40 left-1/3 w-3 h-3 bg-violet-400 rounded-full animate-bounce"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-6xl lg:text-7xl font-black text-white mb-6">
            ИЗБРАННЫЕ
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-400">
              ПРОЕКТЫ
            </span>
          </h2>
          <p className="text-2xl text-white/80 max-w-3xl mx-auto font-light">
            Примеры наших работ в разных сферах архитектуры
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[200px]">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-3xl cursor-pointer transform hover:scale-105 transition-all duration-700 ${
                project.size === "large"
                  ? "md:col-span-2 md:row-span-2"
                  : project.size === "medium"
                    ? "md:col-span-2 md:row-span-1"
                    : "col-span-1 row-span-1"
              }`}
            >
              {/* Изображение */}
              <div className="absolute inset-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Градиентный overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-violet-900/80 transition-all duration-500"></div>

              {/* Контент */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="mb-2">
                  <span className="inline-block px-3 py-1 bg-gradient-to-r from-orange-500 to-pink-500 text-white text-sm font-semibold rounded-full">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-white font-bold text-lg lg:text-xl mb-2 leading-tight">
                  {project.title}
                </h3>

                <p className="text-white/80 text-sm lg:text-base opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                  {project.description}
                </p>
              </div>

              {/* Floating иконка */}
              <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-lg rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-4 h-4 bg-white rounded-full animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
