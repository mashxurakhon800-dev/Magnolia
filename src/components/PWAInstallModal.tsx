import React from 'react';
import { Tablet, X, Share, PlusSquare, Download, CheckCircle2, Sparkles, Smartphone } from 'lucide-react';
import { Language } from '../types/menu';
import { usePWAInstall } from '../hooks/usePWAInstall';

interface PWAInstallModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLanguage: Language;
}

export const PWAInstallModal: React.FC<PWAInstallModalProps> = ({
  isOpen,
  onClose,
  currentLanguage,
}) => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();

  if (!isOpen) return null;

  const content = {
    ru: {
      title: 'Установка на планшет',
      subtitle: 'Превратите меню в полноэкранное приложение без рамок браузера',
      alreadyInstalled: 'Приложение уже установлено и готово к работе!',
      directInstallBtn: 'Установить приложение в 1 клик',
      androidTitle: 'Для Android-планшетов (Samsung, Xiaomi, Lenovo):',
      androidStep1: 'Если кнопка в 1 клик не сработала, откройте меню браузера Chrome (3 точки в правом верхнем углу).',
      androidStep2: 'Выберите пункт «Установить приложение» или «Добавить на главный экран».',
      ipadTitle: 'Для Apple iPad (iPadOS Safari):',
      ipadStep1: 'В верхней панели Safari нажмите кнопку «Поделиться» (иконка квадрата со стрелкой вверх).',
      ipadStep2: 'Прокрутите список вниз и нажмите «На экран „Домой“» (Add to Home Screen).',
      ipadStep3: 'В правом верхнем углу нажмите «Добавить».',
      benefitsTitle: 'Преимущества на планшете:',
      benefit1: 'Работает на весь экран без браузерных кнопок и адресной строки',
      benefit2: 'Мгновенная загрузка и сохранение меню в память планшета',
      benefit3: 'Удобно ставить на стойку или передавать гостям за столиком',
      closeBtn: 'Понятно',
    },
    uz: {
      title: 'Planshetga ilova sifatida o’rnatish',
      subtitle: 'Menyuni brauzer ramkalarisiz to’liq ekranli ilovaga aylantiring',
      alreadyInstalled: 'Ilova allaqachon o’rnatilgan va ishlashga tayyor!',
      directInstallBtn: '1 bosishda o’rnatish',
      androidTitle: 'Android planshetlar uchun (Samsung, Xiaomi va h.k.):',
      androidStep1: 'Chrome brauzerining yuqori o’ng burchagidagi 3 ta nuqtani bosing.',
      androidStep2: '«Ilovani o’rnatish» yoki «Bosh ekranga qo’shish» bandini tanlang.',
      ipadTitle: 'Apple iPad uchun (iPadOS Safari):',
      ipadStep1: 'Safari yuqori panelidagi «Ulashish» (Share — tepaga strelka belgisi) tugmasini bosing.',
      ipadStep2: 'Pastga suring va «Bosh ekranga» (Add to Home Screen) bandini tanlang.',
      ipadStep3: 'Yuqori o’ng burchakdagi «Qo’shish» tugmasini bosing.',
      benefitsTitle: 'Planshetdagi afzalliklari:',
      benefit1: 'Brauzer qatorlarisiz to’liq ekran rejimida ochiladi',
      benefit2: 'Bir zumda yuklanadi va planshet xotirasida saqlanadi',
      benefit3: 'Stol ustiga qo’yish yoki mehmonlarga berish juda qulay',
      closeBtn: 'Tushunarli',
    },
    en: {
      title: 'Install on Tablet as an App',
      subtitle: 'Turn the menu into a distraction-free standalone tablet application',
      alreadyInstalled: 'Application is already installed on this device!',
      directInstallBtn: 'Install App (1-Click)',
      androidTitle: 'For Android Tablets (Samsung, Lenovo, Xiaomi):',
      androidStep1: 'Tap the Chrome menu (three dots in the top-right corner).',
      androidStep2: 'Select "Install app" or "Add to Home screen".',
      ipadTitle: 'For Apple iPad (iPadOS Safari):',
      ipadStep1: 'Tap the Share icon (square with an arrow pointing up) in the Safari toolbar.',
      ipadStep2: 'Scroll down and tap "Add to Home Screen".',
      ipadStep3: 'Tap "Add" in the top right corner.',
      benefitsTitle: 'Tablet app benefits:',
      benefit1: 'Launches full-screen without URL bar or browser tabs',
      benefit2: 'Lightning fast caching and offline resilience',
      benefit3: 'Ideal for dining tables, stands, or passing to customers',
      closeBtn: 'Got it',
    },
  }[currentLanguage];

  const handleDirectInstall = async () => {
    if (isInstallable) {
      const ok = await install();
      if (ok) onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn overflow-y-auto">
      <div 
        className="relative w-full max-w-lg bg-[#220B10] border-2 border-[#6B2329] rounded-2xl shadow-2xl p-6 md:p-8 text-[#FAF5EE] my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#C7B7A3] hover:text-white hover:bg-[#3D141C] rounded-full transition-colors"
          aria-label="Закрыть"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#4A161F] text-[#F4D185] rounded-full text-xs font-semibold mb-2">
            <Tablet className="w-3.5 h-3.5" />
            <span>PWA APP</span>
          </div>
          <h2 className="font-cinzel text-2xl md:text-3xl font-bold text-[#F5EBE1]">
            {content.title}
          </h2>
          <p className="text-xs md:text-sm text-[#C7B7A3] mt-1 max-w-sm mx-auto">
            {content.subtitle}
          </p>
        </div>

        {/* 1-Click install if browser supports it */}
        {isInstallable && (
          <div className="mb-6 p-4 bg-gradient-to-r from-[#6B2329] to-[#8C2D38] rounded-xl border border-[#D4AF37]/40 shadow-lg text-center">
            <button
              onClick={handleDirectInstall}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 bg-[#FAF5EE] hover:bg-white text-[#521721] font-bold text-sm rounded-xl shadow-md transition-all active:scale-95"
            >
              <Download className="w-4 h-4 text-[#8C2D38]" />
              <span>{content.directInstallBtn}</span>
            </button>
          </div>
        )}

        {/* Step-by-step instructions */}
        <div className="space-y-4 text-xs md:text-sm">
          {/* Apple iPad */}
          <div className="p-4 bg-[#18070A] border border-[#48161E] rounded-xl space-y-2">
            <div className="flex items-center gap-2 text-[#F4D185] font-semibold">
              <Share className="w-4 h-4 shrink-0" />
              <span>{content.ipadTitle}</span>
            </div>
            <ol className="list-decimal list-inside space-y-1.5 text-[#D8C7B4] leading-relaxed pl-1">
              <li>{content.ipadStep1}</li>
              <li>{content.ipadStep2}</li>
              <li>{content.ipadStep3}</li>
            </ol>
          </div>

          {/* Android */}
          <div className="p-4 bg-[#18070A] border border-[#48161E] rounded-xl space-y-2">
            <div className="flex items-center gap-2 text-[#E5C07B] font-semibold">
              <Smartphone className="w-4 h-4 shrink-0" />
              <span>{content.androidTitle}</span>
            </div>
            <ol className="list-decimal list-inside space-y-1.5 text-[#D8C7B4] leading-relaxed pl-1">
              <li>{content.androidStep1}</li>
              <li>{content.androidStep2}</li>
            </ol>
          </div>

          {/* Benefits */}
          <div className="p-3.5 bg-[#2B0E14] border border-[#5E1E28] rounded-xl">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#F4D185] block mb-2">
              {content.benefitsTitle}
            </span>
            <div className="space-y-1 text-xs text-[#C7B7A3]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>{content.benefit1}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>{content.benefit2}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>{content.benefit3}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-6 text-center">
          <button
            onClick={onClose}
            className="w-full py-2.5 bg-[#331117] hover:bg-[#4C1922] text-[#FAF5EE] border border-[#5E1F2A] rounded-xl text-xs md:text-sm font-semibold transition-colors"
          >
            {content.closeBtn}
          </button>
        </div>
      </div>
    </div>
  );
};
