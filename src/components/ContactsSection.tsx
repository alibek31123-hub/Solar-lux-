import React, { useState } from 'react';
import { MapPin, Phone, MessageCircle, Mail, Send, CheckCircle2, Navigation, Building2 } from 'lucide-react';
import { COMPANY_INFO, createWhatsAppUrl } from '../utils/whatsapp';
import confetti from 'canvas-confetti';

export const ContactsSection: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [facilityType, setFacilityType] = useState('Коммерческий объект / Предприятие');
  const [comment, setComment] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.7 }
    });

    setSubmitted(true);

    const text = `Заявка в ИП Ашенов (Солнечная энергетика):
• Имя: ${name}
• Телефон: ${phone}
• Тип объекта: ${facilityType}
${comment ? `• Дополнительно: ${comment}` : '• Запрос расчета СЭС с двунаправленным учетом и продажей в сеть'}
• Город: Атырау`;

    setTimeout(() => {
      window.open(createWhatsAppUrl(text), '_blank', 'noopener,noreferrer');
    }, 1000);
  };

  const handleDirectWhatsApp = () => {
    const text = 'Здравствуйте! Обращаюсь в ИП Ашенов по вопросу реализации солнечной электростанции под ключ в Атырау.';
    window.open(createWhatsAppUrl(text), '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contacts" className="py-16 lg:py-20 bg-slate-950 text-white border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
            Контакты ИП Ашенов
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Будем рады{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
              сотрудничеству!
            </span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Мы готовы предложить надежное и выгодное решение для перехода на возобновляемые источники энергии с минимальными рисками и максимальной выгодой для клиента.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Contact Details Card */}
          <div className="lg:col-span-5 bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl">
            <div>
              <span className="text-xs uppercase font-bold text-amber-400 tracking-wider">Официальные реквизиты</span>
              <h3 className="text-2xl font-bold text-white mt-1">ИП Ашенов</h3>
              <p className="text-xs text-slate-400 mt-1">Комплексные решения в области солнечной энергетики</p>
            </div>

            {/* Phone & WhatsApp */}
            <div className="flex items-start gap-4 pt-4 border-t border-slate-800">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs uppercase font-bold text-slate-400 mb-0.5">Тел. / WhatsApp:</div>
                <a
                  href={`tel:${COMPANY_INFO.phoneClean}`}
                  className="text-lg font-extrabold text-white hover:text-emerald-400 transition block"
                >
                  8 707 890-07-07
                </a>
                <button
                  type="button"
                  onClick={handleDirectWhatsApp}
                  className="mt-2 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition shadow-sm"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-current" />
                  <span>Написать в WhatsApp</span>
                </button>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4 pt-4 border-t border-slate-800">
              <div className="w-12 h-12 rounded-xl bg-blue-500/15 border border-blue-500/30 text-blue-400 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs uppercase font-bold text-slate-400 mb-0.5">E-mail:</div>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="text-base font-bold text-amber-400 hover:underline block"
                >
                  {COMPANY_INFO.email}
                </a>
                <div className="text-xs text-slate-400 mt-0.5">Для отправки ТЗ и проектной документации</div>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-4 pt-4 border-t border-slate-800">
              <div className="w-12 h-12 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-400 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs uppercase font-bold text-slate-400 mb-0.5">Адрес:</div>
                <div className="text-base font-bold text-white">{COMPANY_INFO.address}</div>
                <div className="flex flex-wrap gap-2 mt-2.5">
                  <a
                    href={COMPANY_INFO.maps2GisUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-slate-950 hover:bg-slate-800 text-[11px] font-semibold text-emerald-400 border border-slate-700 transition"
                  >
                    <Navigation className="w-3 h-3" />
                    2GIS
                  </a>
                  <a
                    href={COMPANY_INFO.mapsYandexUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-slate-950 hover:bg-slate-800 text-[11px] font-semibold text-amber-400 border border-slate-700 transition"
                  >
                    Яндекс Карты
                  </a>
                  <a
                    href={COMPANY_INFO.mapsGoogleUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-slate-950 hover:bg-slate-800 text-[11px] font-semibold text-blue-400 border border-slate-700 transition"
                  >
                    Google Maps
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Consultation & Calculation Request Form */}
          <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl">
            {submitted ? (
              <div className="py-10 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white">Заявка успешно отправлена!</h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
                  Мы получили ваши данные и свяжемся с вами в течение 15 минут для обсуждения технических деталей и подготовки расчета.
                </p>
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-2.5 rounded-xl bg-slate-800 text-xs font-semibold text-slate-300 hover:text-white"
                  >
                    Отправить еще одну заявку
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">
                    Запросить расчет солнечной электростанции
                  </h3>
                  <p className="text-xs text-slate-400">
                    Укажите ваши контактные данные для подготовки индивидуального коммерческого предложения.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase mb-1.5">
                      Ваше имя / Организация: *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Имя или название ТОО"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase mb-1.5">
                      Номер телефона / WhatsApp: *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+7 (707) 890-07-07"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase mb-1.5">
                    Категория объекта:
                  </label>
                  <select
                    value={facilityType}
                    onChange={(e) => setFacilityType(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-500"
                  >
                    <option value="Коммерческий объект / Склад">Коммерческий объект / Склад / База</option>
                    <option value="Промышленное предприятие">Промышленное предприятие / Завод</option>
                    <option value="Частный дом / Коттедж">Частный дом / Коттедж</option>
                    <option value="Крестьянское хозяйство / Ферма">Крестьянское хозяйство / Ферма</option>
                    <option value="Поставка оборудования LONGi / Jinko">Оптовая поставка панелей LONGi / Jinko Solar</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase mb-1.5">
                    Параметры объекта или пожелания:
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Примерная площадь кровли, текущее потребление или желаемая мощность СЭС..."
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-slate-950 font-extrabold text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 transition active:scale-98"
                >
                  <Send className="w-4 h-4" />
                  <span>Отправить заявку в ИП Ашенов</span>
                </button>

                <div className="text-center text-[11px] text-slate-400">
                  Стоимость проекта рассчитывается индивидуально в зависимости от установленной мощности, типа оборудования и сложности объекта.
                </div>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};
