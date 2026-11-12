export const COMPANY_INFO = {
  companyName: 'ИП Ашенов',
  fullName: 'ИП «Ашенов»',
  title: 'Солнечная энергетика под ключ',
  phoneDisplay: '+7 (707) 890-07-07',
  phoneClean: '77078900707',
  whatsappNumber: '77078900707',
  email: 'dostyk-arna@mail.ru',
  address: 'г. Атырау, улица Сарсенбаева, 13',
  addressCity: 'г. Атырау',
  addressStreet: 'ул. Сарсенбаева, 13',
  workHours: 'Пн - Сб: 09:00 - 19:00',
  instagramHandle: 'Instagram: готовые кейсы',
  instagramUrl: 'https://instagram.com',
  maps2GisUrl: 'https://2gis.kz/atyrau/search/ул.+Сарсенбаева+13',
  mapsYandexUrl: 'https://yandex.kz/maps/?text=Атырау+улица+Сарсенбаева+13',
  mapsGoogleUrl: 'https://www.google.com/maps/search/?api=1&query=Atyrau+Sarsenbaeva+13'
};

export function createWhatsAppUrl(text: string): string {
  const encodedText = encodeURIComponent(text.trim());
  return `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodedText}`;
}

export function openWhatsApp(message: string): void {
  const url = createWhatsAppUrl(message);
  window.open(url, '_blank', 'noopener,noreferrer');
}
