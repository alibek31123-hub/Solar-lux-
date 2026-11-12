import React from 'react';
import { PackageCheck, Wrench, ShieldCheck, FileCheck2, TrendingUp, HandCoins, MessageCircle, FileText } from 'lucide-react';
import { COMPANY_INFO, createWhatsAppUrl } from '../utils/whatsapp';

export const TurnkeyServices: React.FC = () => {
  const steps = [
    {
      num: '01',
      icon: PackageCheck,
      title: '1. Поставка оборудования мировых брендов',
      desc: 'Поставка сертифицированных солнечных панелей ведущих мировых брендов LONGi и Jinko Solar, а также высокоэффективных сетевых и гибридных инверторов напрямую с заводов.'
    },
    {
      num: '02',
      icon: Wrench,
      title: '2. Проектирование и монтаж',
      desc: 'Профессиональное проектирование с расчетом ветровых нагрузок для Прикаспийского региона. Качественный монтаж на любые типы кровель и наземные опорные конструкции.'
    },
    {
      num: '03',
      icon: ShieldCheck,
      title: '3. Пусконаладочные работы и ввод в эксплуатацию',
      desc: 'Комплексные пусконаладочные испытания оборудования, настройка режимов генерации и полное сопровождение при подключении к электрическим сетям.'
    },
    {
      num: '04',
      icon: FileCheck2,
      title: '4. Получение ТУ и согласование с АО «Атырау-Жарык»',
      desc: 'Мы берем на себя полное юридическое сопровождение по документации на подключение, разработку однолинейных схем и официальное согласование проекта с АО «Атырау-Жарык».'
    },
    {
      num: '05',
      icon: HandCoins,
      title: '5. Оформление Договора продажи излишков в сеть',
      desc: 'Консультации по механизму продажи электроэнергии, сопровождение подключения системы двухнаправленного учета, настройка передачи излишков генерации в общую сеть.'
    }
  ];

  const handleConsultWhatsApp = (title: string) => {
    const text = `Здравствуйте! Обращаюсь в ИП Ашенов. Интересует этап «${title}» под ключ в Атырау.`;
    window.open(createWhatsAppUrl(text), '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="turnkey" className="py-16 lg:py-20 bg-slate-950 text-white border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
            Полный цикл реализации
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Реализация СЭС{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
              «под ключ»
            </span>
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            ИП Ашенов берет на себя все технические, монтажные и юридические вопросы взаимодействия с энергоснабжающей организацией.
          </p>
        </div>

        {/* 5 Steps Grid */}
        <div className="space-y-4 mb-16">
          {steps.map((st, i) => {
            const Icon = st.icon;
            return (
              <div
                key={i}
                className="bg-slate-900 border border-slate-800 hover:border-slate-700 p-5 sm:p-6 rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-5 transition"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-400 flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-white mb-1">
                      {st.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
                      {st.desc}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleConsultWhatsApp(st.title)}
                  className="shrink-0 text-xs font-bold text-emerald-400 hover:text-emerald-300 bg-emerald-500/10 hover:bg-emerald-500/20 px-3.5 py-2 rounded-xl border border-emerald-500/30 transition flex items-center gap-1.5"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-current" />
                  <span>Консультация</span>
                </button>
              </div>
            );
          })}
        </div>

        {/* Economic Effect Card */}
        <div id="benefits" className="bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-950 border border-amber-500/30 rounded-3xl p-6 sm:p-8 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            <div className="md:col-span-7 space-y-4">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">Экономический эффект</span>
              <h3 className="text-2xl font-bold text-white">
                Выгода для частных, коммерческих и промышленных потребителей
              </h3>

              <div className="space-y-3 pt-1">
                <div className="flex items-start gap-3 bg-slate-950/80 p-3.5 rounded-xl border border-slate-800">
                  <TrendingUp className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-sm text-white">1. Снижение затрат на электроэнергию</div>
                    <div className="text-xs text-slate-400 mt-0.5">
                      Прямое замещение потребления от электросети собственной бесплатной солнечной генерацией.
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-slate-950/80 p-3.5 rounded-xl border border-slate-800">
                  <HandCoins className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-sm text-white">2. Возможность дополнительного дохода от продажи излишков</div>
                    <div className="text-xs text-slate-400 mt-0.5">
                      Двунаправленный счетчик фиксирует избыточную генерацию, которая передается в сеть по официальному договору.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-5 bg-slate-950 p-6 rounded-2xl border border-slate-800 text-center">
              <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold mb-2">
                Расчет стоимости
              </div>
              <div className="text-lg font-bold text-amber-400 mb-2">
                Индивидуальный расчет
              </div>
              <p className="text-xs text-slate-300 leading-relaxed mb-5">
                Стоимость проекта рассчитывается индивидуально и зависит от установленной мощности, типа оборудования и сложности объекта.
              </p>

              <a
                href={createWhatsAppUrl('Здравствуйте! Обращаюсь в ИП Ашенов. Хочу запросить индивидуальный расчет стоимости солнечной электростанции для своего объекта.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md shadow-emerald-700/20 transition active:scale-95"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Запросить индивидуальный расчет</span>
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
