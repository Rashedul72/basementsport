'use client';

import Image from "next/image";

interface DatePickerSectionProps {
  selectedCard: number | null;
  cards: Array<{ id: number; title: string; price: string }>;
  startDate: string;
  endDate: string;
  onCalendarClick: () => void;
}

export default function DatePickerSection({ selectedCard, cards, startDate, endDate, onCalendarClick }: DatePickerSectionProps) {
  if (!selectedCard) return null;

  return (
    <div className="mb-6 rounded-lg border border-[#DDDDDD] bg-white p-6" style={{ width: '100%', maxWidth: '1280px', minHeight: '212px', gap: '16px', borderRadius: '8px', padding: '24px' }}>
      <div className="flex h-full flex-col">
        <div className="flex flex-col gap-2 mb-8">
          <p className="text-center text-black" style={{ fontFamily: 'var(--font-public-sans)', fontSize: '15px', fontWeight: 600, lineHeight: '15px', textTransform: 'uppercase', marginTop: '8px' }}>
            {cards.find((c) => c.id === selectedCard)?.title}
          </p>
          <p className="text-center text-gray-600" style={{ fontFamily: 'var(--font-public-sans)', fontSize: '15px', lineHeight: '15px', fontWeight: 400 }}>
            ({selectedCard === 1 && "1 Week X 5 Days"}
            {selectedCard === 2 && "2 Weeks X 5 Days"}
            {selectedCard === 3 && "3 Weeks X 5 Days"}
            {selectedCard === 4 && "4 Weeks X 5 Days"}) = {selectedCard * 5} Days
          </p>
        </div>
        <div className="flex items-center gap-2" style={{ width: '1232px', maxWidth: '100%', gap: '8px' }}>
          <div className={`relative ${endDate ? 'flex-1' : 'w-full'}`}>
            {startDate && (
              <label className="mb-1 block text-sm text-gray-700" style={{ fontFamily: 'var(--font-public-sans)', fontSize: '15px', fontWeight: 600, lineHeight: '15px' }}>Start date</label>
            )}
            <input
              type="text"
              placeholder="Start date"
              value={startDate}
              readOnly
              onClick={onCalendarClick}
              className="w-full rounded border border-[#DDDDDD] px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-[#5D06E9]"
              style={{ 
                fontFamily: 'var(--font-public-sans)', 
                fontSize: '15px', 
                lineHeight: '15px', 
                height: '48px',
                fontWeight: startDate ? 600 : 400
              }}
            />
            <button
              type="button"
              onClick={onCalendarClick}
              className="absolute right-3 flex items-center justify-center cursor-pointer"
              style={{ height: '24px', width: '24px', top: startDate ? 'calc(24px + 18px)' : '50%', transform: 'translateY(-50%)' }}
            >
              <Image
                src="/calender.svg"
                alt="Calendar"
                width={14}
                height={16}
                className="object-contain"
              />
            </button>
          </div>
          {endDate && (
            <div className="relative flex-1">
              <label className="mb-1 block text-sm text-gray-700" style={{ fontFamily: 'var(--font-public-sans)', fontSize: '15px', fontWeight: 600, lineHeight: '15px' }}>End date</label>
              <input
                type="text"
                placeholder="End date"
                value={endDate}
                readOnly
                className="w-full rounded border border-[#DDDDDD] px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-[#5D06E9]"
                style={{ fontFamily: 'var(--font-public-sans)', fontSize: '15px', lineHeight: '15px', height: '48px' }}
              />
              <div className="absolute right-3 flex items-center justify-center pointer-events-none" style={{ height: '24px', width: '24px', top: 'calc(24px + 18px)', transform: 'translateY(-50%)' }}>
                <Image
                  src="/calender.svg"
                  alt="Calendar"
                  width={14}
                  height={16}
                  className="object-contain opacity-50"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

