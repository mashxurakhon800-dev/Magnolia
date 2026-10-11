import React from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import { QrCode, Download, Share2, Sparkles, Smartphone } from 'lucide-react';
import { Language } from '../types/menu';
import { RESTAURANT_INFO } from '../data/menuData';

interface TableQRCodeBannerProps {
  currentLanguage: Language;
  onOpenModal: () => void;
}

const MENU_URL = 'https://remix-magnolia-pan-asian-turkish-ki.vercel.app';

export const TableQRCodeBanner: React.FC<TableQRCodeBannerProps> = ({
  currentLanguage,
  onOpenModal,
}) => {
  const content = {
    ru: {
      tag: 'БЫСТРЫЙ ДОСТУП К МЕНЮ',
      title: 'QR-код для ваших столиков',
      desc: 'Отсканируйте код камерой смартфона, чтобы открыть интерактивное меню ресторана Magnolia прямо за столом.',
      button: 'Открыть и скачать для печати',
      scanNotice: 'Наведите камеру смартфона',
      linkText: 'remix-magnolia-pan-asian-turkish-ki.vercel.app',
    },
    uz: {
      tag: 'MENYUGA TEZKOR KIRISH',
      title: 'Stollaringiz uchun QR-kod',
      desc: 'Magnolia restorani interaktiv menyusini bevosita stol ustida ochish uchun telefon kamerasi bilan kodni skanerlang.',
      button: 'Ochish va chop etish uchun yuklash',
      scanNotice: 'Telefon kamerangizni qarating',
      linkText: 'remix-magnolia-pan-asian-turkish-ki.vercel.app',
    },
    en: {
      tag: 'INSTANT TABLE ACCESS',
      title: 'QR Code for Guest Tables',
      desc: 'Scan with any smartphone camera to open the full Magnolia interactive restaurant menu on your device.',
      button: 'Open & Download for Print',
      scanNotice: 'Point your phone camera',
      linkText: 'remix-magnolia-pan-asian-turkish-ki.vercel.app',
    },
  }[currentLanguage];

  return (
    <section id="qr-section" className="py-10 px-4 md:px-8 max-w-5xl mx-auto w-full">
      <div className="relative overflow-hidden bg-gradient-to-br from-[#380E14] via-[#521721] to-[#26090D] border-2 border-[#8C2D38]/60 rounded-3xl p-6 md:p-10 shadow-2xl">
        {/* Subtle decorative glow */}
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left info column */}
          <div className="flex-1 space-y-4 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#25080D]/80 border border-[#8C2D38] text-[#F4D185] rounded-full text-xs font-semibold tracking-wider">
              <QrCode className="w-3.5 h-3.5" />
              <span>{content.tag}</span>
            </div>

            <h2 className="font-cinzel text-2xl md:text-3xl lg:text-4xl font-bold text-[#FAF5EE] tracking-wide">
              {content.title}
            </h2>

            <p className="text-xs md:text-sm text-[#D8C7B4] leading-relaxed max-w-lg">
              {content.desc}
            </p>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-2">
              <button
                onClick={onOpenModal}
                className="inline-flex items-center gap-2 px-5 py-3 bg-[#FAF5EE] hover:bg-white text-[#521721] font-semibold text-xs md:text-sm rounded-xl shadow-lg transition-transform active:scale-95"
              >
                <QrCode className="w-4 h-4 text-[#8C2D38]" />
                <span>{content.button}</span>
              </button>

              <div className="inline-flex items-center gap-2 px-3 py-2 bg-[#20070B]/60 border border-[#6B2329]/50 rounded-xl text-[11px] text-[#E5C07B] font-mono">
                <Smartphone className="w-3.5 h-3.5 text-[#F4D185]" />
                <span className="truncate max-w-[200px] sm:max-w-xs">{content.linkText}</span>
              </div>
            </div>
          </div>

          {/* Right QR card column */}
          <div className="shrink-0">
            <div 
              onClick={onOpenModal}
              className="group cursor-pointer bg-white p-4 pb-3 rounded-2xl shadow-2xl border-4 border-[#F2DEB9] hover:scale-105 transition-all text-center"
              title="Нажмите, чтобы развернуть QR-код"
            >
              <QRCodeCanvas
                value={MENU_URL}
                size={170}
                level="H"
                fgColor="#5E1B23"
                bgColor="#FFFFFF"
                marginSize={1}
              />
              <div className="mt-2.5 pt-2 border-t border-neutral-100 flex items-center justify-center gap-1.5 text-neutral-800 text-[11px] font-semibold font-sans-body">
                <Smartphone className="w-3.5 h-3.5 text-[#8C2D38]" />
                <span>{content.scanNotice}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
