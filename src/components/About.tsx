import Icon from "@/components/ui/icon";

const About = () => {
  const stats = [
    { number: "15+", label: "Лет опыта" },
    { number: "200+", label: "Реализованных проектов" },
    { number: "50+", label: "Довольных клиентов" },
    { number: "10", label: "Архитекторов в команде" },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              О нашем бюро
            </h2>
            <p className="text-lg text-slate-600 mb-6">
              Мы — команда опытных архитекторов, которые создают современные и
              функциональные пространства. Наш подход основан на глубоком
              понимании потребностей клиентов и применении инновационных
              технологий в проектировании.
            </p>
            <p className="text-lg text-slate-600 mb-8">
              От концепции до реализации — мы сопровождаем каждый проект,
              обеспечивая высокое качество архитектурных решений и соблюдение
              всех стандартов.
            </p>

            <div className="flex items-center gap-4">
              <Icon name="Award" size={24} className="text-slate-900" />
              <span className="text-slate-700">
                Лауреаты архитектурных премий
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-slate-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
