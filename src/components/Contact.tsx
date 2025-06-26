import Icon from "@/components/ui/icon";

const Contact = () => {
  const contacts = [
    {
      icon: "Phone",
      title: "Телефон",
      info: "+7 (495) 123-45-67",
      gradient: "from-violet-500 to-purple-600",
    },
    {
      icon: "Mail",
      title: "Email",
      info: "info@architecture.ru",
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: "MapPin",
      title: "Адрес",
      info: "Москва, ул. Архитекторов, 15",
      gradient: "from-pink-500 to-rose-500",
    },
  ];

  return (
    <section
      id="contact"
      className="py-32 bg-gradient-to-br from-slate-900 via-violet-900 to-purple-900 relative overflow-hidden"
    >
      {/* Floating элементы */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-orange-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div
        className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-violet-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-6xl lg:text-7xl font-black text-white mb-6">
            СВЯЖИТЕСЬ
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-400">
              С НАМИ
            </span>
          </h2>
          <p className="text-2xl text-white/80 max-w-3xl mx-auto font-light">
            Готовы обсудить ваш проект? Мы всегда открыты для новых идей и
            сотрудничества
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {contacts.map((contact, index) => (
            <div
              key={index}
              className={`group relative transform hover:scale-105 transition-all duration-500 ${
                index === 1
                  ? "-rotate-2 hover:rotate-0"
                  : index === 2
                    ? "rotate-2 hover:rotate-0"
                    : ""
              }`}
            >
              {/* Floating background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${contact.gradient} rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500`}
              ></div>

              <div className="relative bg-white/10 backdrop-blur-lg p-10 rounded-3xl border border-white/20 text-center">
                <div
                  className={`w-20 h-20 bg-gradient-to-br ${contact.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 transform group-hover:rotate-12 transition-transform duration-500`}
                >
                  <Icon name={contact.icon} size={32} className="text-white" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">
                  {contact.title}
                </h3>

                <p className="text-white/80 text-lg">{contact.info}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA секция */}
        <div className="mt-20 text-center">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-12 border border-white/20">
            <h3 className="text-4xl font-bold text-white mb-6">
              Начнем создавать что-то невероятное вместе!
            </h3>
            <button className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-12 py-4 rounded-full text-xl font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300 transform">
              🚀 Обсудить проект
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
