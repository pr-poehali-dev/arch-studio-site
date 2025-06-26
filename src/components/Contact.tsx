import Icon from "@/components/ui/icon";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Свяжитесь с нами</h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Готовы обсудить ваш проект? Мы всегда открыты для новых идей и
            сотрудничества
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mx-auto mb-4">
              <Icon name="Phone" size={24} className="text-slate-900" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Телефон</h3>
            <p className="text-slate-300">+7 (495) 123-45-67</p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mx-auto mb-4">
              <Icon name="Mail" size={24} className="text-slate-900" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Email</h3>
            <p className="text-slate-300">info@architecture.ru</p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mx-auto mb-4">
              <Icon name="MapPin" size={24} className="text-slate-900" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Адрес</h3>
            <p className="text-slate-300">Москва, ул. Архитекторов, 15</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
