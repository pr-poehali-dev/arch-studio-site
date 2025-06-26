import Icon from "@/components/ui/icon";

const Services = () => {
  const services = [
    {
      icon: "Building2",
      title: "Жилые комплексы",
      description:
        "Современные жилые комплексы с продуманной инфраструктурой и комфортной средой для жизни",
      gradient: "from-violet-500 to-purple-600",
      hoverGradient: "from-violet-600 to-purple-700",
    },
    {
      icon: "Home",
      title: "Частные дома",
      description:
        "Индивидуальные проекты загородных домов с уникальным дизайном и функциональностью",
      gradient: "from-orange-500 to-red-500",
      hoverGradient: "from-orange-600 to-red-600",
    },
    {
      icon: "Building",
      title: "Коммерческие здания",
      description:
        "Офисные центры, торговые комплексы и другие коммерческие объекты",
      gradient: "from-pink-500 to-rose-500",
      hoverGradient: "from-pink-600 to-rose-600",
    },
    {
      icon: "School",
      title: "Социальные объекты",
      description:
        "Школы, больницы, культурные центры и другие объекты социальной инфраструктуры",
      gradient: "from-purple-500 to-indigo-600",
      hoverGradient: "from-purple-600 to-indigo-700",
    },
  ];

  return (
    <section
      id="services"
      className="py-32 bg-gradient-to-br from-slate-50 via-white to-violet-50 relative overflow-hidden"
    >
      {/* Декоративные элементы */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-violet-200/30 to-pink-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-orange-200/30 to-purple-200/30 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-pink-600 mb-6">
            НАШИ УСЛУГИ
          </h2>
          <p className="text-2xl text-slate-600 max-w-3xl mx-auto font-light">
            Полный цикл архитектурных услуг от концепции до реализации проекта
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative transform hover:scale-105 transition-all duration-500 ${
                index % 2 === 0
                  ? "rotate-1 hover:rotate-0"
                  : "-rotate-1 hover:rotate-0"
              }`}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500`}
              ></div>

              <div className="relative bg-white/80 backdrop-blur-lg p-10 rounded-3xl border border-white/50 shadow-2xl hover:shadow-3xl transition-all duration-500">
                <div
                  className={`w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-8 transform group-hover:rotate-12 transition-transform duration-500`}
                >
                  <Icon name={service.icon} size={32} className="text-white" />
                </div>

                <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-6">
                  {service.title}
                </h3>

                <p className="text-slate-600 text-lg leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
