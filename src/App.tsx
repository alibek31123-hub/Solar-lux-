/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProjectConcept } from './components/ProjectConcept';
import { TurnkeyServices } from './components/TurnkeyServices';
import { Catalog } from './components/Catalog';
import { CasesGallery } from './components/CasesGallery';
import { ContactsSection } from './components/ContactsSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { QuoteModal } from './components/QuoteModal';

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [quoteContext, setQuoteContext] = useState('');

  const handleOpenQuote = (context: string = '') => {
    setQuoteContext(context);
    setIsQuoteModalOpen(true);
  };

  const handleCloseQuote = () => {
    setIsQuoteModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-amber-500 selection:text-slate-950">
      {/* Шапка сайта ИП Ашенов */}
      <Header onRequestQuote={handleOpenQuote} />

      {/* Основной контент */}
      <main className="flex-1">
        {/* Главный экран: Комплексные решения в области солнечной энергетики */}
        <Hero onRequestQuote={handleOpenQuote} />

        {/* Суть проекта & Техническая концепция: Двунаправленный учет и параллельная работа с сетью */}
        <ProjectConcept />

        {/* 5 этапов СЭС под ключ & Экономический эффект */}
        <TurnkeyServices />

        {/* Оборудование мировых брендов LONGi и Jinko Solar */}
        <Catalog />

        {/* Готовые кейсы & Instagram */}
        <CasesGallery />

        {/* Официальные контакты ИП Ашенов, реквизиты, карта и форма заявки */}
        <ContactsSection />
      </main>

      {/* Подвал ИП Ашенов */}
      <Footer />

      {/* Плавающая кнопка прямого диалога WhatsApp 8 707 890-07-07 */}
      <FloatingWhatsApp />

      {/* Модальное окно быстрой заявки */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={handleCloseQuote}
        initialContext={quoteContext}
      />
    </div>
  );
}
