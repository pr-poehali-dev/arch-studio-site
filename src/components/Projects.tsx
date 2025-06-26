const Projects = () => {
  const projects = [
    {
      title: "Жилой комплекс «Панорама»",
      category: "Жилые комплексы",
      image:
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Современный жилой комплекс с развитой инфраструктурой",
    },
    {
      title: "Загородный дом в Подмосковье",
      category: "Частные дома",
      image:
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Минималистичный дом с панорамными окнами",
    },
    {
      title: "Бизнес-центр «Кристалл»",
      category: "Коммерческие здания",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Современный офисный комплекс класса А",
    },
    {
      title: "Школа будущего",
      category: "Социальные объекты",
      image:
        "https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Инновационное образовательное пространство",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Избранные проекты
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Примеры наших работ в разных сферах архитектуры
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <span className="text-sm text-slate-500 font-medium">
                  {project.category}
                </span>
                <h3 className="text-xl font-semibold text-slate-900 mt-2 mb-3">
                  {project.title}
                </h3>
                <p className="text-slate-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
