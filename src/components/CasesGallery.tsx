import React from 'react';
import { Instagram, MapPin, Zap, ExternalLink, MessageCircle } from 'lucide-react';
import { COMPANY_INFO, createWhatsAppUrl } from '../utils/whatsapp';

export const CasesGallery: React.FC = () => {
  const cases = [
    {
      id: 'case-1',
      title: 'Сетевая СЭС 120 кВт для складского комплекса',
      location: 'г. Атырау',
      power: '120 кВт',
      imageUrl: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=800&q=80',
      description: 'Монтаж солнечной электростанции на кровлю складских ангаров. Замещение дневного коммерческого потребления электроэнергии.'
    },
    {
      id: 'case-2',
      title: 'Автономная солнечная станция 35 кВт для фермы',
      location: 'Атырауская область',
      power: '35 кВт',
      imageUrl: 'https://images.unsplash.com/photo-1545209179-a5dc550499d9?auto=format&fit=crop&w=800&q=80',
      description: 'Автономное электроснабжение удаленного крестьянского хозяйства: питание насосов скважины, освещения и оборудования.'
    },
    {
      id: 'case-3',
      title: 'Гибридная СЭС 15 кВт для частного дома',
      location: 'г. Атырау, мкр. Нурсая',
      power: '15 кВт',
      imageUrl: 'https://images.unsplash.com/photo-1508873696983-2df5293cb32b?auto=format&fit=crop&w=800&q=80',
      description: 'Резервное и автономное электроснабжение коттеджа с литиевыми аккумуляторами LiFePO4 на случай отключений сети.'
    },
    {
      id: 'case-4',
      title: 'СЭС 45 кВт для коммерческого автокомплекса',
      location: 'г. Атырау',
      power: '45 кВт',
      imageUrl: 'https://images.unsplash.com/photo-1592833159155-c62df1b65634?auto=format&fit=crop&w=800&q=80',
      description: 'Установка на навесы и кровлю автомойки и магазина. Полная компенсация дорогой коммерческой электроэнергии в дневные часы.'
    }
  ];

  const handleCaseInquiry = (title: string) => {
    const text = `Здравствуйте! Увидел кейс «${title}». Хочу проконсультироваться по установке похожей СЭС в Атырау / Казахстане.`;
    window.open(createWhatsAppUrl(text), '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="instagram" className="py-16 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Instagram Callout Header matching user brief */}
        <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-8 mb-12 shadow-xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-600 p-0.5 flex items-center justify-center shrink-0">
                <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center">
                  <Instagram className="w-7 h-7 text-pink-400" />
                </div>
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-white">
                  Ищите нас также в Instagram
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
                  Для ознакомления с готовыми кейсами, видео процессов монтажа и актуальными ценами на оборудование!
                </p>
              </div>
            </div>

            <a
              href={COMPANY_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 hover:from-purple-500 hover:to-orange-400 text-white font-bold text-xs sm:text-sm shadow-lg shadow-pink-600/20 transition active:scale-95 shrink-0"
            >
              <Instagram className="w-4 h-4" />
              <span>Перейти в Instagram</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </a>
          </div>
        </div>

        {/* 4 Cases Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cases.map((c) => (
            <div
              key={c.id}
              className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden flex flex-col justify-between group hover:border-slate-700 transition"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={c.imageUrl}
                  alt={c.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>

                <div className="absolute top-2.5 left-2.5 bg-amber-500 text-slate-950 text-[11px] font-extrabold px-2.5 py-0.5 rounded-full">
                  {c.power}
                </div>

                <div className="absolute bottom-2.5 left-2.5 flex items-center gap-1 text-[11px] text-slate-300 bg-slate-950/80 px-2 py-0.5 rounded">
                  <MapPin className="w-3 h-3 text-amber-400" />
                  <span>{c.location}</span>
                </div>
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-sm text-white mb-1.5 line-clamp-2">
                    {c.title}
                  </h3>
                  <p className="text-xs text-slate-400 line-clamp-2 mb-3">
                    {c.description}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => handleCaseInquiry(c.title)}
                  className="w-full py-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 text-xs font-semibold flex items-center justify-center gap-1.5 transition"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400 fill-current" />
                  <span>Узнать подробности</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
