import React, { useState } from 'react';
import { Sun, ArrowLeftRight, Zap, ArrowDown, ArrowUp, ShieldCheck, CheckCircle2, Battery, Building2, Home } from 'lucide-react';
import { createWhatsAppUrl } from '../utils/whatsapp';

export const ProjectConcept: React.FC = () => {
  const [activeFlow, setActiveFlow] = useState<'surplus' | 'deficit'>('surplus');

  return (
    <section id="concept" className="py-16 lg:py-20 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
            Суть проекта и техническая концепция
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            СЭС с двунаправленным подключением к сети и{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
              продажей излишков
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Реализация солнечной электростанции без отключения от центральной сети с установкой двухнаправленного счетчика: снижайте затраты на электроэнергию и получайте доход от продажи избыточной генерации в энергосеть.
          </p>
        </div>

        {/* Interactive Parallel Operation Diagram Card */}
        <div id="net-metering" className="bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl mb-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800">
            <div>
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">Принцип параллельной работы</span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                Как работает двунаправленный учет и энергообмен
              </h3>
            </div>

            {/* Mode switch */}
            <div className="inline-flex p-1.5 bg-slate-900 rounded-xl border border-slate-700">
              <button
                type="button"
                onClick={() => setActiveFlow('surplus')}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition flex items-center gap-1.5 ${
                  activeFlow === 'surplus'
                    ? 'bg-emerald-500 text-slate-950 shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <ArrowUp className="w-4 h-4" />
                <span>При избытке генерации (Продажа в сеть)</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveFlow('deficit')}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition flex items-center gap-1.5 ${
                  activeFlow === 'deficit'
                    ? 'bg-amber-500 text-slate-950 shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <ArrowDown className="w-4 h-4" />
                <span>При дефиците (Потребление из сети)</span>
              </button>
            </div>
          </div>

          {/* Interactive Flow Visual */}
          <div className="py-8 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            
            {/* Box 1: Solar Generation */}
            <div className="bg-slate-900/90 border border-slate-800 p-6 rounded-2xl text-center relative group">
              <div className="w-14 h-14 rounded-2xl bg-amber-500/20 border border-amber-500/30 text-amber-400 flex items-center justify-center mx-auto mb-3">
                <Sun className="w-7 h-7" />
              </div>
              <h4 className="font-bold text-base text-white">Солнечные панели</h4>
              <p className="text-xs text-slate-400 mt-1">Оборудование LONGi & Jinko Solar</p>
              <div className="mt-3 text-xs font-semibold text-emerald-400 bg-emerald-500/10 py-1.5 px-2.5 rounded-lg border border-emerald-500/20">
                Чистая генерация в дневное время
              </div>
            </div>

            {/* Box 2: Bi-directional Meter & Inverter */}
            <div className="bg-gradient-to-b from-slate-900 to-slate-950 border-2 border-amber-500/40 p-6 rounded-2xl text-center relative shadow-xl">
              <div className="w-14 h-14 rounded-2xl bg-blue-500/20 border border-blue-500/30 text-blue-400 flex items-center justify-center mx-auto mb-3">
                <ArrowLeftRight className="w-7 h-7" />
              </div>
              <h4 className="font-bold text-base text-white">Двунаправленный счетчик</h4>
              <p className="text-xs text-slate-400 mt-1">Учет потребления и генерации</p>

              {/* Status explanation */}
              <div className="mt-4 p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs">
                {activeFlow === 'surplus' ? (
                  <div className="text-emerald-400 font-bold flex items-center justify-center gap-1">
                    <ArrowUp className="w-4 h-4" />
                    <span>Передача излишков в сеть (Продажа)</span>
                  </div>
                ) : (
                  <div className="text-amber-400 font-bold flex items-center justify-center gap-1">
                    <ArrowDown className="w-4 h-4" />
                    <span>Добор недостающей энергии из сети</span>
                  </div>
                )}
              </div>
            </div>

            {/* Box 3: Central Grid */}
            <div className="bg-slate-900/90 border border-slate-800 p-6 rounded-2xl text-center relative">
              <div className="w-14 h-14 rounded-2xl bg-purple-500/20 border border-purple-500/30 text-purple-400 flex items-center justify-center mx-auto mb-3">
                <Zap className="w-7 h-7" />
              </div>
              <h4 className="font-bold text-base text-white">Центральная сеть</h4>
              <p className="text-xs text-slate-400 mt-1">Сеть АО «Атырау-Жарык»</p>
              <div className="mt-3 text-xs font-semibold text-slate-300 bg-slate-800 py-1.5 px-2.5 rounded-lg border border-slate-700">
                Гарантия 100% стабильности питания
              </div>
            </div>

          </div>

          {/* Description of parallel work */}
          <div className="bg-slate-900/80 rounded-2xl p-5 border border-slate-800/80 text-xs sm:text-sm text-slate-300 space-y-2">
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>
                <strong className="text-white">Параллельная работа:</strong> объект получает электроэнергию одновременно от солнечных панелей и от электросети, что обеспечивает максимальную надежность электроснабжения без сбоев.
              </span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>
                <strong className="text-white">При избытке генерации:</strong> солнечная энергия полностью покрывает нужды объекта, а излишки передаются и продаются в сеть, формируя дополнительный доход.
              </span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>
                <strong className="text-white">При дефиците:</strong> в пасмурную погоду или ночью недостающая энергия мгновенно берется из центральной сети без перерывов в электроснабжении.
              </span>
            </div>
          </div>
        </div>

        {/* 4 Types of Solar Power Plants */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            {
              title: 'Сетевые СЭС (On-Grid)',
              badge: 'Максимальный доход',
              desc: 'Работают параллельно с центральной сетью. Идеальны для снижения дневных тарифов и продажи излишков электроэнергии в сеть.'
            },
            {
              title: 'Гибридные СЭС',
              badge: 'Сеть + Резерв АКБ',
              desc: 'Сочетают возможность продажи электроэнергии в сеть с резервным питанием от аккумуляторов при авариях в центральной сети.'
            },
            {
              title: 'Автономные СЭС',
              badge: '100% независимость',
              desc: 'Для удаленных объектов, крестьянских и фермерских хозяйств, где отсутствует подключение к центральным линиям электропередач.'
            },
            {
              title: 'Системы накопления (ESS)',
              badge: 'LiFePO4 накопители',
              desc: 'Промышленные и бытовые накопители энергии для сглаживания пиковых нагрузок и бесперебойного питания ответственных линий.'
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-slate-950 border border-slate-800 p-5 rounded-2xl flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/20">
                  {item.badge}
                </span>
                <h4 className="font-bold text-base text-white mt-3 mb-2">{item.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
