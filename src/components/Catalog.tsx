import React from 'react';
import { MessageCircle, Check, Award, ArrowRight } from 'lucide-react';
import { COMPANY_INFO, createWhatsAppUrl } from '../utils/whatsapp';

export const Catalog: React.FC = () => {
  const items = [
    {
      id: 'panels-tier1',
      title: 'Солнечные панели LONGi & Jinko Solar',
      badge: 'Мировые бренды №1',
      brandHighlight: 'Официальные поставки сертифицированных модулей',
      desc: 'Высокоэффективные фотопанели ведущих мировых производителей LONGi Solar и Jinko Solar: монокристаллические модули N-Type TOPCon и двусторонние Bifacial панели мощностью 585–670+ Вт.',
      points: [
        'Оборудование ведущих мировых брендов LONGi и Jinko Solar',
        'Высокий КПД модулей до 22.8% и устойчивость к климату Атырау',
        'Гарантия линейной мощности от производителя до 25–30 лет'
      ],
      imageUrl: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'inverters-grid',
      title: 'Сетевые и гибридные инверторы',
      badge: 'Двунаправленная генерация',
      brandHighlight: 'Параллельная работа с сетью',
      desc: 'Специализированные преобразователи тока для параллельной работы с центральной электрической сетью, синхронизацией частоты и передачей излишков генерации через двухнаправленный счетчик.',
      points: [
        'Сетевые On-Grid и гибридные инверторы 220В / 380В',
        'Интеллектуальная защита от перенапряжений и дуги',
        'Круглосуточный мониторинг выработки со смартфона'
      ],
      imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'storage-systems',
      title: 'Системы накопления энергии (ESS)',
      badge: 'Резерв и автономность',
      brandHighlight: 'LiFePO4 аккумуляторы',
      desc: 'Литий-железо-фосфатные накопители для обеспечения бесперебойного энергоснабжения при авариях в сети и накопления солнечной энергии для ночного использования.',
      points: [
        'Пожаробезопасная LiFePO4 химия с ресурсом 6000+ циклов',
        'Встроенная автоматическая BMS плата защиты',
        'Мгновенное переключение при отключении городской сети'
      ],
      imageUrl: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'metering-systems',
      title: 'Узлы учета и комплектующие',
      badge: 'Под ключ',
      brandHighlight: 'Двунаправленный учет',
      desc: 'Комплектное оборудование для согласования с АО «Атырау-Жарык»: двухнаправленные счетчики, защитные щиты DC/AC, УФ-стойкий кабель и анодированные металлоконструкции.',
      points: [
        'Двухнаправленные счетчики электроэнергии (генерация + потребление)',
        'Щиты защиты с УЗИП молниезащитой класса II',
        'Конструкции с расчетом ветровых нагрузок для Атырау'
      ],
      imageUrl: 'https://images.unsplash.com/photo-1508873696983-2df5293cb32b?auto=format&fit=crop&w=800&q=80'
    }
  ];

  const handleInquire = (title: string) => {
    const text = `Здравствуйте! Обращаюсь в ИП Ашенов. Интересует оборудование: «${title}» под проект СЭС в Атырау.`;
    window.open(createWhatsAppUrl(text), '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="catalog" className="py-16 lg:py-20 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
            Оборудование мирового уровня
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Оборудование ведущих мировых брендов{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
              LONGi и Jinko Solar
            </span>
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            ИП Ашенов поставляет сертифицированное оборудование с официальной заводской гарантией и полным пакетом технической документации.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-slate-950 border border-slate-800 hover:border-amber-500/40 rounded-2xl overflow-hidden flex flex-col justify-between transition group shadow-lg"
            >
              <div className="relative h-48 bg-slate-900 overflow-hidden">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500 opacity-90"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>

                <div className="absolute top-3 left-3 bg-slate-900/90 border border-slate-700 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-amber-400">
                  {item.badge}
                </div>

                <div className="absolute bottom-3 left-3 text-[11px] text-slate-300 bg-slate-950/80 backdrop-blur-sm px-2.5 py-1 rounded-md">
                  {item.brandHighlight}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading text-xl font-bold text-white group-hover:text-amber-400 transition mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    {item.desc}
                  </p>

                  <div className="space-y-2 mb-5 text-xs text-slate-300 bg-slate-900/60 p-3.5 rounded-xl border border-slate-800/80">
                    {item.points.map((pt, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800/80">
                  <button
                    type="button"
                    onClick={() => handleInquire(item.title)}
                    className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md shadow-emerald-700/20 transition active:scale-95"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Узнать подробнее в WhatsApp</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
