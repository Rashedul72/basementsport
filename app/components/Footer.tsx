'use client';

interface FooterProps {
  selectedCard: number | null;
  cards: Array<{ id: number; title: string; price: string }>;
}

export default function Footer({ selectedCard, cards }: FooterProps) {
  return (
    <footer className="w-full border-t border-[#DDDDDD] bg-white" style={{ width: '100vw', minHeight: '112px', paddingTop: '32px', paddingBottom: '64px' }}>
      <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:items-center">
        <div className="text-center text-black sm:text-left" style={{ fontFamily: 'var(--font-public-sans)', fontSize: '13px', fontWeight: 600, lineHeight: '15px', textTransform: 'uppercase' }}>
          {selectedCard
            ? `${cards.find((c) => c.id === selectedCard)?.price} (${selectedCard} ACTIVITY PER DAY)`
            : "$35 FOR 5 DAYS (1 ACTIVITY PER DAY)"}
        </div>
        <div className="flex w-full items-center justify-center gap-4 sm:w-auto sm:gap-6" style={{ minWidth: '174px', height: '48px' }}>
          <button 
            className="rounded text-black transition-colors hover:bg-gray-100"
            style={{
              fontFamily: 'var(--font-public-sans)',
              height: '48px',
              paddingTop: '12px',
              paddingRight: '20px',
              paddingBottom: '12px',
              paddingLeft: '20px',
              fontSize: '13px',
              fontWeight: 600,
              lineHeight: '15px',
              textTransform: 'uppercase',
              letterSpacing: '0%',
            }}
          >
            BACK
          </button>
          <button
            className={`rounded text-white transition-all ${selectedCard ? 'hover:opacity-90' : 'cursor-not-allowed'}`}
            disabled={!selectedCard}
            style={{
              fontFamily: 'var(--font-public-sans)',
              width: '108px',
              height: '48px',
              paddingTop: '12px',
              paddingRight: '24px',
              paddingBottom: '12px',
              paddingLeft: '24px',
              borderRadius: '4px',
              background: selectedCard 
                ? "linear-gradient(317.8deg, #5D06E9 13.21%, #0B23FA 98.3%)"
                : "linear-gradient(180deg, rgba(147, 51, 234, 0.4) 0%, rgba(139, 92, 246, 0.5) 100%)",
              boxShadow: selectedCard 
                ? '0px 10px 10px 0px rgba(102, 93, 170, 0.2)'
                : '0px 4px 8px 0px rgba(102, 93, 170, 0.15)',
              fontSize: '13px',
              fontWeight: 600,
              lineHeight: '15px',
              textTransform: 'uppercase',
              letterSpacing: '0%',
            }}
          >
            NEXT
          </button>
        </div>
      </div>
    </footer>
  );
}

