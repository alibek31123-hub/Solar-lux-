import React, { useState } from 'react';
import { Phone, MapPin, Mail, Menu, X, MessageCircle } from 'lucide-react';
import { COMPANY_INFO, createWhatsAppUrl } from '../utils/whatsapp';
import { SolarLogo } from './SolarLuxLogo';

interface HeaderProps {
  onRequestQuote: (context?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onRequestQuote }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Суть проекта', href: '#concept' },
    { label: 'Параллельная работа и продажа в сеть', href: '#net-metering' },
    { label: 'Решения под ключ', href: '#turnkey' },
    { label: 'Экономический эффект', href: '#benefits' },
    { label: 'Контакты', href: '#contacts' },
  ];

  const handleWhatsAppClick = () => {
    const text = 'Здравствуйте! Обращаюсь в ИП Ашенов. Интересует расчет и реализация солнечной электростанции под ключ в Атырау.';
    window.open(createWhatsAppUrl(text), '_blank', 'noopener,noreferrer');
  };

  return (
    <header className="sticky top-0 z-50 bg-slate-950/95 backdrop-blur-md border-b border-slate-800 text-white">
      {/* Top Bar with Contacts & Email */}
      <div className="hidden lg:block bg-slate-900/90 border-b border-slate-800/80 text-xs py-2 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-5 text-slate-300">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>{COMPANY_INFO.address}</span>
            </span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-400">
              Официальный интегратор солнечной генерации • г. Атырау
            </span>
          </div>

          <div className="flex items-center gap-5">
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="flex items-center gap-1.5 text-slate-300 hover:text-amber-400 transition"
            >
              <Mail className="w-3.5 h-3.5 text-amber-400" />
              <span>{COMPANY_INFO.email}</span>
            </a>
            <span className="text-slate-700">|</span>
            <a
              href={`tel:${COMPANY_INFO.phoneClean}`}
              className="flex items-center gap-1.5 text-amber-400 font-bold hover:text-amber-300 transition"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Тел./WhatsApp: {COMPANY_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="py-2">
            <SolarLogo />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-6 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-amber-400 transition"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* WhatsApp Direct Action */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              type="button"
              onClick={handleWhatsAppClick}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-md shadow-emerald-700/20 transition active:scale-95"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>WhatsApp: 8 707 890-07-07</span>
            </button>
          </div>

          {/* Mobile hamburger */}
          <div className="flex xl:hidden items-center gap-2">
            <button
              type="button"
              onClick={handleWhatsAppClick}
              className="p-2 rounded-lg bg-emerald-600 text-white"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white"
              aria-label="Меню"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-slate-900 border-b border-slate-800 px-4 pt-3 pb-6 space-y-3">
          <div className="text-xs text-slate-300 pb-2 border-b border-slate-800 space-y-1">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>{COMPANY_INFO.address}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-amber-400" />
              <span>{COMPANY_INFO.email}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-1 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-3 rounded-lg hover:bg-slate-800 text-slate-200 hover:text-amber-400 transition"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                handleWhatsAppClick();
              }}
              className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              Связаться в WhatsApp: 8 707 890-07-07
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
