import React, { useState, useEffect } from 'react';
import { X, MessageCircle, Send, CheckCircle2, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO, createWhatsAppUrl } from '../utils/whatsapp';
import confetti from 'canvas-confetti';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialContext?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose, initialContext = '' }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState(initialContext);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    setMessage(initialContext);
    setIsSuccess(false);
  }, [initialContext, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.6 }
    });

    setIsSuccess(true);

    const waText = `Заявка в ИП Ашенов (Солнечная энергетика):
• Имя: ${name}
• Телефон: ${phone}
• Запрос: ${message || 'Консультация по СЭС и продаже в сеть'}
• г. Атырау`;

    setTimeout(() => {
      window.open(createWhatsAppUrl(waText), '_blank', 'noopener,noreferrer');
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
      <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white transition"
          aria-label="Закрыть"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-white">Запрос успешно отправлен!</h3>
            <p className="text-sm text-slate-300">
              Специалисты ИП Ашенов свяжутся с вами в WhatsApp для обсуждения проекта.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-4 px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold"
            >
              Закрыть окно
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <div className="text-xs uppercase font-bold text-amber-400 tracking-wider mb-1">
                ИП Ашенов • г. Атырау
              </div>
              <h3 className="text-xl font-bold text-white">
                Запросить расчет СЭС под ключ
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Тел./WhatsApp: 8 707 890-07-07 • E-mail: dostyk-arna@mail.ru
              </p>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">
                Ваше имя *
              </label>
              <input
                type="text"
                required
                placeholder="Имя / Название компании"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">
                Телефон / WhatsApp *
              </label>
              <input
                type="tel"
                required
                placeholder="+7 (707) 890-07-07"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">
                Что вас интересует?
              </label>
              <textarea
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Оптовые поставки панелей, инверторы, LiFePO4 аккумуляторы, СЭС под ключ..."
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500 resize-none"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/30 transition"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Отправить и открыть в WhatsApp</span>
              </button>
            </div>

            <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Конфиденциально. Официальный дистрибьютор.</span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
