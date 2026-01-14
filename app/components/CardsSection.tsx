'use client';

import Image from "next/image";

interface Card {
  id: number;
  title: string;
  price: string;
}

interface CardsSectionProps {
  cards: Card[];
  selectedCard: number | null;
  onCardClick: (cardId: number) => void;
}

export default function CardsSection({ cards, selectedCard, onCardClick }: CardsSectionProps) {
  return (
    <div className="mb-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 relative" style={{ width: '100%', gap: '24px', padding: '1px' }}>
      {/* Second Star - On the most right card (4th card) - underlying */}
      <div className="pointer-events-none absolute hidden lg:block" style={{ right: '-85px', top: '40px', width: '98.91px', height: '98.91px', zIndex: 1 }}>
        <Image
          src="/Star 12.svg"
          alt="Star"
          width={98.91}
          height={98.91}
          className="object-contain"
        />
      </div>
      {cards.map((card) => (
        <div
          key={card.id}
          onClick={() => onCardClick(card.id)}
          className="relative flex cursor-pointer flex-col rounded-lg border border-[#DDDDDD] bg-white shadow-[0px_4px_16px_0px_rgba(7,0,18,0.08)] transition-all hover:shadow-[0px_6px_20px_0px_rgba(7,0,18,0.12)]"
          style={{ width: '100%', minHeight: '199px', gap: '16px', padding: '24px', zIndex: 2 }}
        >
          {/* Checkbox */}
          <div className="absolute right-6 top-6">
            <div
              className={`flex items-center justify-center border ${
                selectedCard === card.id
                  ? "border-[#5D06E9] bg-[#5D06E9]"
                  : "border-[#DDDDDD] bg-white"
              }`}
              style={{ width: '18px', height: '18px', borderRadius: '18px' }}
            >
              {selectedCard === card.id && (
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 3L4.5 8.5L2 6"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </div>
          </div>

          {/* Card Image - Centered */}
          <div className="flex h-[100px] w-full items-center justify-center">
            <Image
              src="/card.svg"
              alt="Card"
              width={100}
              height={100}
              className="object-contain"
            />
          </div>

          {/* Card Text */}
          <div className="flex flex-col items-center" style={{ width: '100%', height: '35px', gap: '8px' }}>
            <h3 className="text-black" style={{ fontFamily: 'var(--font-public-sans)', fontSize: '15px', fontWeight: 600, lineHeight: '15px', textTransform: 'uppercase' }}>{card.title}</h3>
            <p className="text-gray-600" style={{ fontFamily: 'var(--font-public-sans)', fontSize: '15px', lineHeight: '15px' }}>{card.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

