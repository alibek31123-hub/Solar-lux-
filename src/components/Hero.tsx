import React from 'react';
import { ArrowRight, MessageCircle, ShieldCheck, Zap, Award, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO, createWhatsAppUrl } from '../utils/whatsapp';

interface HeroProps {
  onRequestQuote: (context?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onRequestQuote }) => {
  const handleWhatsApp = () => {
    const text = 'Здравствуйте! Обращаюсь в ИП Ашенов. Интересует расчет и реализация солнечной электростанции под ключ в Атырау.';
    window.open(createWhatsAppUrl(text), '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="relative bg-slate-950 text-white overflow-hidden py-14 lg:py-24 border-b border-slate-800">
      <div className="absolute inset-0 solar-grid-pattern opacity-25 pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          
          {/* Company badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-amber-500/40 text-xs sm:text-sm text-slate-200 mb-6 shadow-sm">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
            </span>
            <span className="text-amber-400 font-bold uppercase tracking-wider text-[11px] sm:text-xs">
              ИП Ашенов • г. Атырау
            </span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-300">Солнечная генерация под ключ</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.14] text-white">
            Комплексные решения в области{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-amber-300">
              солнечной энергетики
            </span>
          </h1>

          {/* Core Proposal Paragraph directly from brief */}
          <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed">
            Компания <strong>ИП Ашенов</strong> предлагает поставку оборудования, проектирование, монтаж, ввод в эксплуатацию и полное юридическое сопровождение объектов солнечной генерации для частных, коммерческих и промышленных потребителей с использованием оборудования ведущих мировых брендов <strong className="text-white">LONGi</strong> и <strong className="text-white">Jinko Solar</strong>.
          </p>

          {/* Key Advantages bullets */}
          <div className="mt-6 flex flex-wrap gap-2.5 text-xs sm:text-sm">
            <div className="flex items-center gap-2 bg-slate-900/90 border border-slate-800 px-3 py-2 rounded-xl text-slate-200">
              <Zap className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Двунаправленное подключение к сети</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-900/90 border border-slate-800 px-3 py-2 rounded-xl text-slate-200">
              <Award className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Оборудование LONGi & Jinko Solar</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-900/90 border border-slate-800 px-3 py-2 rounded-xl text-slate-200">
              <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0" />
              <span>ТУ и договор с АО «Атырау-Жарык»</span>
            </div>
          </div>

          {/* Core Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              type="button"
              onClick={handleWhatsApp}
              className="py-3.5 px-6 rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-lg shadow-emerald-600/30 transition transform active:scale-95"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Связаться через WhatsApp (8 707 890-07-07)</span>
            </button>

            <a
              href="#concept"
              className="py-3.5 px-6 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-amber-500/50 text-slate-200 font-semibold text-sm sm:text-base flex items-center justify-center gap-2 transition"
            >
              <span>Суть проекта и принцип работы</span>
              <ArrowRight className="w-4 h-4 text-amber-400" />
            </a>
          </div>

          {/* Contact note */}
          <div className="mt-5 text-xs text-slate-400 flex items-center gap-3">
            <span>📍 г. Атырау, улица Сарсенбаева, 13</span>
            <span>•</span>
            <span>✉️ {COMPANY_INFO.email}</span>
          </div>

        </div>
      </div>
    </section>
  );
};
