import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-[0px_1px_4px_0px_rgba(0,0,0,0.08)]" style={{ width: '100vw', height: '112px', paddingTop: '32px', paddingBottom: '32px' }}>
      <div className="mx-auto flex h-12 items-center justify-between gap-4 px-4" style={{ width: '100%', maxWidth: '1280px' }}>
        <div className="flex h-12 items-center gap-4">
          <Image
            src="/logo.svg"
            alt="SUPER BASE"
            width={140}
            height={45}
            priority
          />
        </div>
        <nav className="flex items-center gap-2 sm:gap-4">
          <a href="#" className="hidden sm:inline" style={{ fontFamily: 'var(--font-public-sans)', fontSize: '15px', fontWeight: 600, lineHeight: '15px', textTransform: 'uppercase', color: '#555555' }}>HOME</a>
          <a href="#" className="hidden lg:inline" style={{ fontFamily: 'var(--font-public-sans)', fontSize: '15px', fontWeight: 600, lineHeight: '15px', textTransform: 'uppercase', color: '#070012' }}>PROGRAMS & SERVICES</a>
          <a href="#" className="hidden sm:inline" style={{ fontFamily: 'var(--font-public-sans)', fontSize: '15px', fontWeight: 600, lineHeight: '15px', textTransform: 'uppercase', color: '#555555' }}>ABOUT</a>
          <a href="#" className="hidden sm:inline" style={{ fontFamily: 'var(--font-public-sans)', fontSize: '15px', fontWeight: 600, lineHeight: '15px', textTransform: 'uppercase', color: '#555555' }}>CONTACT</a>
          <button className="ml-2 sm:ml-4">
            <Image
              src="/shopping_bag.svg"
              alt="Shopping Bag"
              width={24}
              height={24}
            />
          </button>
          <button 
            className="ml-2 text-white transition-all hover:opacity-90 sm:ml-4"
            style={{
              width: '108px',
              height: '48px',
              paddingTop: '12px',
              paddingRight: '24px',
              paddingBottom: '12px',
              paddingLeft: '24px',
              borderRadius: '4px',
              background: 'linear-gradient(317.8deg, #5D06E9 13.21%, #0B23FA 98.3%)',
              fontFamily: 'var(--font-public-sans)',
              fontSize: '15px',
              fontWeight: 600,
              lineHeight: '15px',
              textTransform: 'uppercase',
              letterSpacing: '0%',
            }}
          >
            SIGN IN
          </button>
        </nav>
      </div>
    </header>
  );
}

