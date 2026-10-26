import React, { useState } from 'react';
import { 
  X, 
  ShoppingBag, 
  Plus, 
  Minus, 
  Trash2, 
  CheckCircle2, 
  Copy, 
  UtensilsCrossed,
  FileText,
  RotateCcw,
  Send
} from 'lucide-react';
import { CartItem, Language } from '../types/menu';

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (dishId: string, delta: number) => void;
  onRemoveItem: (dishId: string) => void;
  onClearCart: () => void;
  currentLanguage: Language;
}

export const CartModal: React.FC<CartModalProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  currentLanguage,
}) => {
  const [tableNumber, setTableNumber] = useState<string>('1');
  const [guestsCount, setGuestsCount] = useState<number>(2);
  const [orderNote, setOrderNote] = useState<string>('');
  const [isWaiterView, setIsWaiterView] = useState<boolean>(false);
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  if (!isOpen) return null;

  const totalSum = items.reduce((sum, item) => sum + item.dish.price * item.quantity, 0);
  const totalCount = items.reduce((sum, item) => sum + item.quantity, 0);

  const toggleCheckItem = (id: string) => {
    setCheckedItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const copyOrderText = () => {
    const lines = [
      `🏛 RESTORAN MAGNOLIA`,
      `📍 Stol: № ${tableNumber} | Mehmonlar: ${guestsCount} kishi`,
      `📅 Sana: ${new Date().toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' })}`,
      `---------------------------------`,
      ...items.map((item, idx) => 
        `${idx + 1}. ${item.dish.title.uz} (${item.dish.title.ru}) x ${item.quantity} = ${(item.dish.price * item.quantity).toLocaleString('ru-RU')} UZS`
      ),
      `---------------------------------`,
      `💰 JAMI SUMMA: ${totalSum.toLocaleString('ru-RU')} UZS`,
    ];
    if (orderNote.trim()) {
      lines.push(`📝 Izoh: ${orderNote.trim()}`);
    }

    navigator.clipboard.writeText(lines.join('\n'));
    alert(currentLanguage === 'uz' ? "Buyurtma nusxalandi! Telegramga yuborishingiz mumkin." : "Заказ скопирован! Можно отправить в Telegram или сохранить.");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-[#1B080B] border border-[#8C2D38] rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between px-5 md:px-7 py-4 border-b border-[#3D141A] bg-[#260B10]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#8C2D38]/40 border border-[#D4AF37]/40 flex items-center justify-center text-[#F4D185]">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-cinzel text-lg md:text-xl font-bold text-[#FAF5EE] flex items-center gap-2">
                <span>{currentLanguage === 'uz' ? 'Buyurtma savati' : 'Корзина заказа'}</span>
                {totalCount > 0 && (
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-full bg-[#D4AF37] text-black">
                    {totalCount}
                  </span>
                )}
              </h2>
              <p className="text-[11px] text-[#A89280]">
                {currentLanguage === 'uz' ? 'Ofitsiant va oshxona uchun tayyor ro\'yxat' : 'Готовый чек для официанта и кухни'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {items.length > 0 && (
              <button
                onClick={() => setIsWaiterView(!isWaiterView)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 border ${
                  isWaiterView
                    ? 'bg-[#D4AF37] text-black border-[#F4D185] shadow-md'
                    : 'bg-[#331117] text-[#FAF5EE] border-[#5A1C25] hover:bg-[#4A1620]'
                }`}
                title="Официант режимини ёқиш / Чек официанта"
              >
                <FileText className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">
                  {isWaiterView ? (currentLanguage === 'uz' ? 'Tahrirlash' : 'Обычный вид') : (currentLanguage === 'uz' ? 'Ofitsiant cheki' : 'Чек официанта')}
                </span>
              </button>
            )}

            <button
              onClick={onClose}
              className="p-1.5 rounded-full text-[#C7B7A3] hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Table & Guest Selection Bar */}
        <div className="px-5 md:px-7 py-3 bg-[#140407] border-b border-[#3D141A] flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <span className="text-[#D4AF37] font-semibold uppercase tracking-wider">
              {currentLanguage === 'uz' ? 'Stol:' : 'Стол:'}
            </span>
            <select
              value={tableNumber}
              onChange={(e) => setTableNumber(e.target.value)}
              className="bg-[#240B10] border border-[#541C25] text-[#FAF5EE] font-bold rounded-lg px-2.5 py-1 focus:outline-none focus:border-[#D4AF37]"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 'VIP 1', 'VIP 2', 'Olib ketish (На вынос)'].map((num) => (
                <option key={String(num)} value={String(num)}>
                  {typeof num === 'number' ? `№ ${num}` : num}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[#A89280]">
              {currentLanguage === 'uz' ? 'Mehmonlar:' : 'Персон:'}
            </span>
            <div className="flex items-center bg-[#240B10] border border-[#541C25] rounded-lg">
              <button
                type="button"
                onClick={() => setGuestsCount(Math.max(1, guestsCount - 1))}
                className="px-2 py-0.5 text-[#C7B7A3] hover:text-white"
              >
                -
              </button>
              <span className="px-2 font-mono font-bold text-[#FAF5EE]">{guestsCount}</span>
              <button
                type="button"
                onClick={() => setGuestsCount(guestsCount + 1)}
                className="px-2 py-0.5 text-[#C7B7A3] hover:text-white"
              >
                +
              </button>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-5 md:p-7 space-y-4">
          {items.length === 0 ? (
            /* Empty State */
            <div className="py-16 text-center space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-[#280C12] border border-[#521C26] flex items-center justify-center text-3xl mx-auto text-[#A89280]">
                <UtensilsCrossed className="w-8 h-8 text-[#A89280]/60" />
              </div>
              <div className="space-y-1">
                <h3 className="font-serif text-lg font-bold text-white">
                  {currentLanguage === 'uz' ? 'Savat hali bo\'sh' : 'Корзина пуста'}
                </h3>
                <p className="text-xs text-[#A89280] max-w-sm mx-auto leading-relaxed">
                  {currentLanguage === 'uz' 
                    ? 'Menyudagi taomlar ustidagi «+» tugmasini bosib savatga qo\'shing. Ofitsiant bu ro\'yxat orqali buyurtmani bir zumda qabul qiladi!'
                    : 'Нажимайте «+» на карточках блюд в меню. Официант откроет этот чек и сразу поймет ваш заказ без лишних записей!'
                  }
                </p>
              </div>
              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#8C2D38] to-[#B33939] text-white text-xs font-bold shadow-lg transition-transform active:scale-95"
              >
                {currentLanguage === 'uz' ? 'Menyuni ko\'rish' : 'Перейти в меню'}
              </button>
            </div>
          ) : isWaiterView ? (
            /* WAITER CHECKLIST VIEW (Large text, high contrast, clean receipt style) */
            <div className="bg-[#FAF8F5] text-[#1A0A0D] p-6 rounded-2xl shadow-xl space-y-4 border border-[#E0D5C1]">
              <div className="text-center border-b border-dashed border-[#1A0A0D]/30 pb-3">
                <div className="font-cinzel text-xl font-bold tracking-[0.2em]">MAGNOLIA</div>
                <div className="text-xs font-medium text-[#6B5E52] mt-0.5">
                  CHEK / ЗАКАЗ СТОЛИКА
                </div>
                <div className="mt-2 inline-flex items-center gap-2 px-3 py-1 bg-[#1A0A0D] text-[#FAF8F5] rounded-lg text-sm font-bold">
                  <span>STOL / СТОЛ: № {tableNumber}</span>
                  <span>·</span>
                  <span>{guestsCount} kishi / чел.</span>
                </div>
              </div>

              <div className="space-y-2.5 divide-y divide-[#1A0A0D]/10">
                {items.map((item) => {
                  const isDone = !!checkedItems[item.dish.id];
                  return (
                    <div 
                      key={item.dish.id}
                      onClick={() => toggleCheckItem(item.dish.id)}
                      className={`pt-2.5 flex items-start justify-between gap-3 cursor-pointer select-none transition-opacity ${
                        isDone ? 'opacity-40 line-through' : 'opacity-100'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className={`w-5 h-5 shrink-0 mt-0.5 ${isDone ? 'text-emerald-600 fill-emerald-100' : 'text-stone-300'}`} />
                        <div>
                          <div className="font-bold text-base text-[#110507] leading-tight">
                            {item.dish.title.uz}
                          </div>
                          <div className="text-xs text-[#5C4F43] italic">
                            {item.dish.title.ru}
                          </div>
                          <div className="text-[11px] text-[#8C7A6B]">
                            {item.dish.portion.uz || item.dish.portion.ru}
                          </div>
                        </div>
                      </div>

                      <div className="text-right shrink-0">
                        <div className="font-mono text-base font-bold text-[#8C2D38]">
                          x {item.quantity}
                        </div>
                        <div className="font-mono text-xs text-[#5C4F43]">
                          {(item.dish.price * item.quantity).toLocaleString('ru-RU')} UZS
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {orderNote.trim() && (
                <div className="pt-3 border-t border-dashed border-[#1A0A0D]/30 text-xs bg-amber-50 p-2.5 rounded-lg border border-amber-200">
                  <span className="font-bold text-amber-900">Izoh / Пожелания: </span>
                  <span className="text-amber-800">{orderNote.trim()}</span>
                </div>
              )}

              <div className="pt-3 border-t-2 border-[#1A0A0D] flex items-center justify-between text-base font-bold">
                <span>JAMI / ИТОГО:</span>
                <span className="font-mono text-xl text-[#8C2D38]">
                  {totalSum.toLocaleString('ru-RU')} UZS
                </span>
              </div>
            </div>
          ) : (
            /* STANDARD CART ITEMS LIST */
            <div className="space-y-3">
              {items.map((item) => (
                <div
                  key={item.dish.id}
                  className="bg-[#240B10] border border-[#4A1620] rounded-2xl p-3.5 flex items-center justify-between gap-3 shadow-sm hover:border-[#8C2D38]/60 transition-colors"
                >
                  {/* Photo & Titles */}
                  <div className="flex items-center gap-3 min-w-0 flex-1">
                    <div className="w-14 h-14 rounded-xl overflow-hidden bg-black/40 border border-white/10 shrink-0">
                      {item.dish.image ? (
                        <img 
                          src={item.dish.image} 
                          alt={item.dish.title[currentLanguage]} 
                          className="w-full h-full object-cover" 
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-xl bg-[#3A1218]">
                          🍽️
                        </div>
                      )}
                    </div>

                    <div className="min-w-0 flex-1">
                      <h4 className="font-serif text-sm font-bold text-[#FAF5EE] truncate leading-tight">
                        {item.dish.title[currentLanguage]}
                      </h4>
                      <p className="text-[11px] text-[#C7B7A3] truncate mt-0.5">
                        {currentLanguage === 'uz' ? item.dish.title.ru : item.dish.title.uz}
                      </p>
                      <div className="flex items-center gap-2 text-[11px] text-[#A89280] mt-1 font-mono">
                        <span>{item.dish.portion[currentLanguage]}</span>
                        <span>·</span>
                        <span className="text-[#D4AF37] font-semibold">
                          {item.dish.price.toLocaleString('ru-RU')} UZS
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Quantity Controls & Remove */}
                  <div className="flex items-center gap-3 shrink-0">
                    <div className="flex items-center bg-[#170508] border border-[#521C26] rounded-xl p-0.5 shadow-inner">
                      <button
                        type="button"
                        onClick={() => onUpdateQuantity(item.dish.id, -1)}
                        className="w-7 h-7 rounded-lg flex items-center justify-center text-[#C7B7A3] hover:text-white hover:bg-white/10 active:scale-95 transition-all"
                        title="Kamaytirish"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>

                      <span className="w-7 text-center font-mono font-bold text-sm text-[#FAF5EE]">
                        {item.quantity}
                      </span>

                      <button
                        type="button"
                        onClick={() => onUpdateQuantity(item.dish.id, 1)}
                        className="w-7 h-7 rounded-lg flex items-center justify-center text-[#F4D185] hover:text-white hover:bg-[#8C2D38] active:scale-95 transition-all"
                        title="Ko'paytirish"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <button
                      type="button"
                      onClick={() => onRemoveItem(item.dish.id)}
                      className="p-2 rounded-xl text-red-400 hover:text-red-300 hover:bg-red-950/60 transition-colors"
                      title="O'chirish"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}

              {/* Order Note input */}
              <div className="pt-2">
                <label className="block text-xs font-semibold text-[#D4AF37] mb-1.5">
                  {currentLanguage === 'uz' ? 'Oshxona va ofitsiant uchun izoh (ixtiyoriy):' : 'Пожелания к заказу (например: без лука, чай сразу):'}
                </label>
                <input
                  type="text"
                  value={orderNote}
                  onChange={(e) => setOrderNote(e.target.value)}
                  placeholder={currentLanguage === 'uz' ? 'Masalan: achchiq bo\'lmasin, muzsiz bo\'lsin...' : 'Например: не острое, соус отдельно...'}
                  className="w-full bg-[#120406] border border-[#521C24] rounded-xl px-3.5 py-2 text-xs text-[#FAF5EE] focus:outline-none focus:border-[#D4AF37]"
                />
              </div>
            </div>
          )}
        </div>

        {/* Footer with Totals & Actions */}
        {items.length > 0 && (
          <div className="px-5 md:px-7 py-4 bg-[#140407] border-t border-[#3D141A] space-y-3">
            {/* Total Row */}
            <div className="flex items-baseline justify-between">
              <div>
                <span className="text-xs text-[#A89280] block">
                  {currentLanguage === 'uz' ? `Jami (${totalCount} ta taom):` : `Итого (${totalCount} блюд):`}
                </span>
                <span className="text-[11px] text-[#D4AF37]">
                  {currentLanguage === 'uz' ? `Stol: № ${tableNumber}` : `Стол: № ${tableNumber}`}
                </span>
              </div>
              <div className="text-right">
                <span className="font-mono text-xl md:text-2xl font-bold text-[#FAF5EE] tabular-nums">
                  {totalSum.toLocaleString('ru-RU')}
                </span>
                <span className="ml-1 text-xs font-semibold text-[#D4AF37]">UZS</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
              <button
                type="button"
                onClick={() => {
                  if (confirm(currentLanguage === 'uz' ? "Buyurtmani tozalab yangi buyurtma boshlamoqchimisiz?" : "Очистить текущий заказ и начать заново?")) {
                    onClearCart();
                    setCheckedItems({});
                  }
                }}
                className="px-3 py-2 rounded-xl bg-red-950/50 hover:bg-red-900/60 text-red-300 border border-red-800/40 text-xs font-semibold flex items-center gap-1.5 transition-colors"
                title="Savatni tozalash"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>{currentLanguage === 'uz' ? 'Tozalash' : 'Очистить'}</span>
              </button>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={copyOrderText}
                  className="px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-[#FAF5EE] border border-white/10 text-xs font-bold flex items-center gap-1.5 transition-colors active:scale-95"
                  title="Telegramga yuborish uchun nusxalash"
                >
                  <Copy className="w-3.5 h-3.5 text-[#F4D185]" />
                  <span>{currentLanguage === 'uz' ? 'Nusxalash' : 'Скопировать'}</span>
                </button>

                <button
                  type="button"
                  onClick={() => setIsWaiterView(!isWaiterView)}
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#F4D185] hover:from-[#E5C158] hover:to-[#FFE082] text-black text-xs font-bold shadow-lg flex items-center gap-1.5 transition-transform active:scale-95"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>
                    {isWaiterView 
                      ? (currentLanguage === 'uz' ? 'Tahrirlashga qaytish' : 'Вернуться к корзине')
                      : (currentLanguage === 'uz' ? 'Ofitsiantga ko\'rsatish' : 'Показать официанту')
                    }
                  </span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
