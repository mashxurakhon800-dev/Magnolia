import React, { useRef, useState } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import { X, Download, Printer, Copy, Check, QrCode, Sparkles, ExternalLink } from 'lucide-react';
import { Language } from '../types/menu';
import { RESTAURANT_INFO } from '../data/menuData';

interface QRCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLanguage: Language;
}

export const MENU_URL = 'https://remix-magnolia-pan-asian-turkish-ki.vercel.app';

export const QRCodeModal: React.FC<QRCodeModalProps> = ({
  isOpen,
  onClose,
  currentLanguage,
}) => {
  const [copied, setCopied] = useState(false);
  const [qrTheme, setQrTheme] = useState<'burgundy' | 'classic'>('burgundy');
  const qrCanvasRef = useRef<HTMLDivElement>(null);

  if (!isOpen) return null;

  const labels = {
    ru: {
      title: 'QR-код онлайн-меню',
      subtitle: 'Разместите этот код на столах или покажите гостям для быстрого открытия меню',
      scanText: 'Отсканируйте камерой телефона для просмотра меню',
      tableCard: 'Визитка для столика',
      downloadBtn: 'Скачать PNG для печати',
      printBtn: 'Распечатать',
      copyBtn: 'Скопировать ссылку',
      copiedBtn: 'Ссылка скопирована!',
      themeBurgundy: 'Фирменный стиль',
      themeClassic: 'Черно-белый (для печати)',
      openSite: 'Открыть сайт',
    },
    uz: {
      title: 'Onlayn menyu QR-kodi',
      subtitle: 'Ushbu kodni stollarga joylashtiring yoki mehmonlarga ko’rsating',
      scanText: 'Menyuni ko’rish uchun telefon kamerasi bilan skanerlang',
      tableCard: 'Stol uchun karta',
      downloadBtn: 'Chop etish uchun PNG yuklash',
      printBtn: 'Chop etish',
      copyBtn: 'Havolani nusxalash',
      copiedBtn: 'Havola nusxalandi!',
      themeBurgundy: 'Brend dizayn',
      themeClassic: 'Oq-qora (bosmaxona)',
      openSite: 'Saytni ochish',
    },
    en: {
      title: 'Digital Menu QR Code',
      subtitle: 'Display this code on tables or tents for instant smartphone access',
      scanText: 'Scan with your smartphone camera to view menu',
      tableCard: 'Table Tent Preview',
      downloadBtn: 'Download Print-Ready PNG',
      printBtn: 'Print Card',
      copyBtn: 'Copy Link',
      copiedBtn: 'Link Copied!',
      themeBurgundy: 'Signature Wine & Gold',
      themeClassic: 'Black & White (Print)',
      openSite: 'Open Website',
    },
  }[currentLanguage];

  const handleCopyLink = () => {
    navigator.clipboard.writeText(MENU_URL).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleDownloadPNG = () => {
    if (!qrCanvasRef.current) return;
    const canvas = qrCanvasRef.current.querySelector('canvas');
    if (!canvas) return;

    // Create high-res download canvas with frame
    const exportCanvas = document.createElement('canvas');
    const ctx = exportCanvas.getContext('2d');
    if (!ctx) return;

    const width = 1200;
    const height = 1500;
    exportCanvas.width = width;
    exportCanvas.height = height;

    if (qrTheme === 'burgundy') {
      // Elegant dark burgundy background
      ctx.fillStyle = '#6B2329';
      ctx.fillRect(0, 0, width, height);

      // Border outline
      ctx.strokeStyle = '#F2DEB9';
      ctx.lineWidth = 14;
      ctx.strokeRect(30, 30, width - 60, height - 60);

      // Inner thin gold border
      ctx.strokeStyle = '#D4AF37';
      ctx.lineWidth = 3;
      ctx.strokeRect(45, 45, width - 90, height - 90);

      // Header text
      ctx.fillStyle = '#FAF5EE';
      ctx.font = 'bold 58px serif';
      ctx.textAlign = 'center';
      ctx.fillText(RESTAURANT_INFO.name, width / 2, 170);

      ctx.fillStyle = '#F4D185';
      ctx.font = '600 28px sans-serif';
      ctx.letterSpacing = '6px';
      ctx.fillText(RESTAURANT_INFO.subname, width / 2, 230);

      // White rounded background card for QR code
      const qrBgX = width / 2 - 380;
      const qrBgY = 320;
      const qrBgSize = 760;
      ctx.fillStyle = '#FFFFFF';
      ctx.beginPath();
      ctx.roundRect(qrBgX, qrBgY, qrBgSize, qrBgSize, 36);
      ctx.fill();

      // Draw QR image
      ctx.drawImage(canvas, qrBgX + 60, qrBgY + 60, qrBgSize - 120, qrBgSize - 120);

      // Bottom instructions
      ctx.fillStyle = '#FAF5EE';
      ctx.font = 'bold 36px sans-serif';
      ctx.fillText(labels.scanText, width / 2, 1180);

      ctx.fillStyle = '#E5C07B';
      ctx.font = '28px monospace';
      ctx.fillText('remix-magnolia-pan-asian-turkish-ki.vercel.app', width / 2, 1260);

      ctx.fillStyle = '#D8C7B4';
      ctx.font = '24px sans-serif';
      ctx.fillText(RESTAURANT_INFO.workHours[currentLanguage], width / 2, 1340);
    } else {
      // Clean white print version
      ctx.fillStyle = '#FFFFFF';
      ctx.fillRect(0, 0, width, height);

      ctx.strokeStyle = '#111111';
      ctx.lineWidth = 8;
      ctx.strokeRect(30, 30, width - 60, height - 60);

      ctx.fillStyle = '#111111';
      ctx.font = 'bold 64px serif';
      ctx.textAlign = 'center';
      ctx.fillText(RESTAURANT_INFO.name, width / 2, 180);

      ctx.font = '600 30px sans-serif';
      ctx.fillText('ONLINE MENU', width / 2, 240);

      const qrSize = 680;
      ctx.drawImage(canvas, width / 2 - qrSize / 2, 340, qrSize, qrSize);

      ctx.font = 'bold 36px sans-serif';
      ctx.fillText(labels.scanText, width / 2, 1150);

      ctx.font = '28px monospace';
      ctx.fillText('remix-magnolia-pan-asian-turkish-ki.vercel.app', width / 2, 1230);
    }

    const link = document.createElement('a');
    link.download = `magnolia-menu-qr-${qrTheme}.png`;
    link.href = exportCanvas.toDataURL('image/png');
    link.click();
  };

  const handlePrint = () => {
    window.print();
  };

  const fgColor = qrTheme === 'burgundy' ? '#5E1B23' : '#000000';
  const bgColor = '#FFFFFF';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn overflow-y-auto">
      <div 
        className="relative w-full max-w-xl bg-[#240B10] border-2 border-[#6B2329] rounded-2xl shadow-2xl p-6 md:p-8 text-[#FAF5EE] my-auto"
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
            <QrCode className="w-3.5 h-3.5" />
            <span>QR CODE</span>
          </div>
          <h2 className="font-cinzel text-2xl md:text-3xl font-bold text-[#F5EBE1] tracking-wide">
            {labels.title}
          </h2>
          <p className="text-xs md:text-sm text-[#C7B7A3] mt-1 max-w-md mx-auto">
            {labels.subtitle}
          </p>
        </div>

        {/* Theme switcher */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex p-1 bg-[#18070A] border border-[#48161E] rounded-xl text-xs">
            <button
              onClick={() => setQrTheme('burgundy')}
              className={`px-3 py-1.5 rounded-lg transition-colors font-medium ${
                qrTheme === 'burgundy'
                  ? 'bg-[#6B2329] text-white shadow-sm'
                  : 'text-[#9E8B7F] hover:text-white'
              }`}
            >
              {labels.themeBurgundy}
            </button>
            <button
              onClick={() => setQrTheme('classic')}
              className={`px-3 py-1.5 rounded-lg transition-colors font-medium ${
                qrTheme === 'classic'
                  ? 'bg-[#6B2329] text-white shadow-sm'
                  : 'text-[#9E8B7F] hover:text-white'
              }`}
            >
              {labels.themeClassic}
            </button>
          </div>
        </div>

        {/* Printable/Scan Card Container */}
        <div className="relative mx-auto max-w-xs md:max-w-sm rounded-2xl p-6 shadow-2xl transition-all border-4 text-center ${
          qrTheme === 'burgundy' 
            ? 'bg-gradient-to-b from-[#6B2329] to-[#451218] border-[#F2DEB9]/80 text-[#FAF5EE]' 
            : 'bg-white border-[#222222] text-[#111111]'
        }">
          {/* Brand header */}
          <div className="mb-4">
            <h3 className={`font-cinzel text-xl md:text-2xl font-bold tracking-[0.2em] ${
              qrTheme === 'burgundy' ? 'text-[#FAF5EE]' : 'text-[#111111]'
            }`}>
              {RESTAURANT_INFO.name}
            </h3>
            <p className={`text-[10px] tracking-wider uppercase font-semibold ${
              qrTheme === 'burgundy' ? 'text-[#F4D185]' : 'text-[#666666]'
            }`}>
              {RESTAURANT_INFO.subname}
            </p>
          </div>

          {/* QR Code itself */}
          <div 
            ref={qrCanvasRef}
            className="p-3.5 bg-white rounded-xl shadow-lg inline-block border border-neutral-200"
          >
            <QRCodeCanvas
              value={MENU_URL}
              size={220}
              level="H"
              fgColor={fgColor}
              bgColor={bgColor}
              marginSize={2}
            />
          </div>

          {/* Prompt under QR */}
          <div className="mt-4 space-y-1">
            <p className={`text-xs font-semibold ${
              qrTheme === 'burgundy' ? 'text-[#FAF5EE]' : 'text-[#111111]'
            }`}>
              {labels.scanText}
            </p>
            <p className={`font-mono text-[11px] truncate px-2 ${
              qrTheme === 'burgundy' ? 'text-[#E5C07B]' : 'text-[#555555]'
            }`}>
              remix-magnolia-pan-asian-turkish-ki.vercel.app
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-2.5">
          <button
            onClick={handleDownloadPNG}
            className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-[#8C2D38] hover:bg-[#A63D49] text-white font-medium text-xs md:text-sm rounded-xl transition-all shadow-md active:scale-95"
          >
            <Download className="w-4 h-4" />
            <span>{labels.downloadBtn}</span>
          </button>

          <button
            onClick={handleCopyLink}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2.5 bg-[#361117] hover:bg-[#4C1922] text-[#E5D7C7] hover:text-white border border-[#5E1F2A] font-medium text-xs md:text-sm rounded-xl transition-all"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? labels.copiedBtn : labels.copyBtn}</span>
          </button>

          <a
            href={MENU_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-3 py-2.5 bg-[#200B0E] hover:bg-[#301115] text-[#C7B7A3] hover:text-white border border-[#40161E] rounded-xl text-xs transition-all"
            title={labels.openSite}
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};
