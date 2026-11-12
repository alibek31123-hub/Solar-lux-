import React from 'react';
import { MapPin, Phone, MessageCircle, Mail, Instagram, ArrowUp } from 'lucide-react';
import { COMPANY_INFO, createWhatsAppUrl } from '../utils/whatsapp';
import { SolarLogo } from './SolarLuxLogo';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 text-xs py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
          
          <SolarLogo />

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-300">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              {COMPANY_INFO.address}
            </span>
            <a
              href={`tel:${COMPANY_INFO.phoneClean}`}
              className="flex items-center gap-1.5 hover:text-amber-400 transition"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              {COMPANY_INFO.phoneDisplay}
            </a>
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="flex items-center gap-1.5 text-amber-400 hover:underline"
            >
              <Mail className="w-3.5 h-3.5" />
              {COMPANY_INFO.email}
            </a>
            <a
              href={createWhatsAppUrl('Здравствуйте!')}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-emerald-400 hover:underline"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              WhatsApp: 8 707 890-07-07
            </a>
            <a
              href={COMPANY_INFO.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-pink-400 hover:underline"
            >
              <Instagram className="w-3.5 h-3.5" />
              Instagram
            </a>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white transition"
            title="Наверх"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        <div className="pt-6 text-center text-[11px] text-slate-400 max-w-3xl mx-auto leading-relaxed">
          Компания <strong>ИП Ашенов</strong> предлагает комплексные решения в области солнечной энергетики: поставка оборудования LONGi и Jinko Solar, проектирование, монтаж, получение ТУ в АО «Атырау-Жарык», пусконаладка и оформление договора продажи излишков электроэнергии в сеть.
          <div className="mt-2 text-slate-500">
            © {new Date().getFullYear()} ИП Ашенов. Все права защищены. г. Атырау, ул. Сарсенбаева, 13.
          </div>
        </div>
      </div>
    </footer>
  );
};
