import Icon from "@/components/ui/icon";

const Services = () => {
  const services = [
    {
      icon: "Building2",
      title: "Жилые комплексы",
      description:
        "Современные жилые комплексы с продуманной инфраструктурой и комфортной средой для жизни",
    },
    {
      icon: "Home",
      title: "Частные дома",
      description:
        "Индивидуальные проекты загородных домов с уникальным дизайном и функциональностью",
    },
    {
      icon: "Building",
      title: "Коммерческие здания",
      description:
        "Офисные центры, торговые комплексы и другие коммерческие объекты",
    },
    {
      icon: "School",
      title: "Социальные объекты",
      description:
        "Школы, больницы, культурные центры и другие объекты социальной инфраструктуры",
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Наши услуги
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Полный цикл архитектурных услуг от концепции до реализации проекта
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-slate-50 p-8 rounded-xl hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mb-6">
                <Icon name={service.icon} size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                {service.title}
              </h3>
              <p className="text-slate-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
