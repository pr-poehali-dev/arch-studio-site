import Icon from "@/components/ui/icon";

const About = () => {
  const stats = [
    {
      number: "15+",
      label: "Лет опыта",
      icon: "Award",
      gradient: "from-violet-500 to-purple-600",
    },
    {
      number: "200+",
      label: "Реализованных проектов",
      icon: "Building2",
      gradient: "from-orange-500 to-red-500",
    },
    {
      number: "50+",
      label: "Довольных клиентов",
      icon: "Users",
      gradient: "from-pink-500 to-rose-500",
    },
    {
      number: "10",
      label: "Архитекторов в команде",
      icon: "Sparkles",
      gradient: "from-purple-500 to-indigo-600",
    },
  ];

  return (
    <section
      id="about"
      className="py-32 bg-gradient-to-br from-white via-orange-50 to-pink-50 relative overflow-hidden"
    >
      {/* Диагональные секции */}
      <div className="absolute inset-0 transform -skew-y-3 bg-gradient-to-r from-violet-100/50 to-pink-100/50 origin-top-left"></div>
      <div className="absolute top-0 right-0 w-1/3 h-full transform skew-y-3 bg-gradient-to-b from-orange-100/50 to-purple-100/50"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Левая колонка - текст */}
          <div className="space-y-8">
            <div>
              <h2 className="text-6xl lg:text-7xl font-black mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-pink-600">
                  О НАШЕМ
                </span>
                <br />
                <span className="text-slate-900 ml-8">БЮРО</span>
              </h2>
            </div>

            <div className="space-y-6 ml-4">
              <p className="text-xl text-slate-700 leading-relaxed">
                Мы — команда опытных архитекторов, которые создают современные и
                функциональные пространства. Наш подход основан на глубоком
                понимании потребностей клиентов и применении инновационных
                технологий в проектировании.
              </p>

              <p className="text-xl text-slate-700 leading-relaxed">
                От концепции до реализации — мы сопровождаем каждый проект,
                обеспечивая высокое качество архитектурных решений и соблюдение
                всех стандартов.
              </p>
            </div>

            <div className="flex items-center gap-6 bg-gradient-to-r from-violet-100 to-pink-100 p-6 rounded-2xl ml-8">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-pink-500 rounded-2xl flex items-center justify-center">
                <Icon name="Award" size={28} className="text-white" />
              </div>
              <span className="text-slate-800 text-lg font-semibold">
                Лауреаты международных архитектурных премий
              </span>
            </div>
          </div>

          {/* Правая колонка - статистика */}
          <div className="grid grid-cols-2 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`group relative transform hover:scale-110 transition-all duration-500 ${
                  index % 2 === 0
                    ? "rotate-3 hover:rotate-0"
                    : "-rotate-3 hover:rotate-0"
                }`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500`}
                ></div>

                <div className="relative bg-white/90 backdrop-blur-lg p-8 rounded-3xl border border-white/50 shadow-2xl text-center">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${stat.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 transform group-hover:rotate-12 transition-transform duration-500`}
                  >
                    <Icon name={stat.icon} size={24} className="text-white" />
                  </div>

                  <div className="text-4xl lg:text-5xl font-black text-slate-900 mb-2">
                    {stat.number}
                  </div>

                  <div className="text-slate-600 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
