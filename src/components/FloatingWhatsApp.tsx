import React, { useState } from 'react';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';
import { COMPANY_INFO, createWhatsAppUrl } from '../utils/whatsapp';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const quickQuestions = [
    { label: '⚡ Продажа излишков в сеть (ТУ)', text: 'Здравствуйте! Обращаюсь в ИП Ашенов. Интересует механизм продажи излишков электроэнергии в сеть и получение ТУ в АО «Атырау-Жарык».' },
    { label: '☀️ СЭС под ключ (LONGi & Jinko)', text: 'Здравствуйте! Хочу заказать расчет проекта солнечной электростанции под ключ для своего объекта в Атырау.' },
    { label: '📋 Двунаправленный учет и ТУ', text: 'Здравствуйте! Нужна консультация по установке двунаправленного счетчика и параллельной работе с сетью.' },
    { label: '📦 Панели LONGi / Jinko Solar', text: 'Здравствуйте! Интересует поставка солнечных панелей LONGi и Jinko Solar в г. Атырау.' },
  ];

  const handleSelectQuestion = (text: string) => {
    window.open(createWhatsAppUrl(text), '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Popover Panel */}
      {isOpen && (
        <div className="mb-4 bg-slate-900 border border-slate-700 rounded-2xl w-80 sm:w-88 shadow-2xl overflow-hidden animate-fadeIn text-white">
          <div className="bg-gradient-to-r from-emerald-600 to-green-600 p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-white fill-current" />
              </div>
              <div>
                <div className="font-bold text-sm">ИП Ашенов (г. Атырау)</div>
                <div className="text-[11px] text-emerald-100 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse"></span>
                  На связи в WhatsApp: 8 707 890-07-07
                </div>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white p-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-4 bg-slate-950/60 text-xs text-slate-300 border-b border-slate-800">
            Приветствуем! Выберите готовый вопрос или напишите нам в WhatsApp для быстрого ответа:
          </div>

          <div className="p-3 space-y-2">
            {quickQuestions.map((q, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleSelectQuestion(q.text)}
                className="w-full text-left p-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/60 hover:border-emerald-500/50 text-xs text-slate-200 hover:text-white transition flex items-center justify-between group"
              >
                <span>{q.label}</span>
                <Send className="w-3.5 h-3.5 text-emerald-400 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition" />
              </button>
            ))}
          </div>

          <div className="p-3 bg-slate-900 border-t border-slate-800 text-center">
            <a
              href={createWhatsAppUrl('Здравствуйте!')}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-emerald-400 hover:underline flex items-center justify-center gap-1.5"
            >
              <span>Открыть пустой диалог (+7 707 890 07 07)</span>
            </a>
          </div>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="relative group p-4 rounded-full bg-gradient-to-tr from-emerald-500 to-green-500 text-white shadow-xl shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center"
        aria-label="WhatsApp чат"
      >
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-amber-500 text-[9px] font-bold text-slate-950 items-center justify-center">1</span>
        </span>
        <MessageCircle className="w-7 h-7 fill-current" />
      </button>
    </div>
  );
};
