import Image from "next/image";
import { ReactNode } from "react";

interface HeroSectionProps {
  children: ReactNode;
}

export default function HeroSection({ children }: HeroSectionProps) {
  return (
    <section 
      className="relative w-full overflow-hidden" 
      style={{ 
        width: '100vw', 
        minHeight: '535px',
        paddingTop: '96px',
        paddingBottom: '32px',
        background: 'linear-gradient(180deg, rgba(93, 6, 233, 0.02) 0%, rgba(28, 29, 246, 0.13) 100%)',
      }}
    >
      {/* Decorative Background Image - Underlying first card on left side */}
      <div className="pointer-events-none absolute opacity-20 hidden lg:block" style={{ left: '100px', top: '135px', width: '235px', height: '400px', zIndex: 1 }}>
        <Image
          src="/img1.png"
          alt="Decorative"
          width={235}
          height={400}
          className="object-contain"
          style={{ width: '100%', height: '100%', objectFit: 'contain' }}
        />
      </div>

      {/* First Star - Middle just below header border */}
      <div className="pointer-events-none absolute hidden lg:block" style={{ left: '50%', top: '0px', transform: 'translateX(-50%)', width: '49.45px', height: '49.45px', zIndex: 10 }}>
        <Image
          src="/Star 12.svg"
          alt="Star"
          width={49.45}
          height={49.45}
          className="object-contain"
        />
      </div>

      {/* Main Container */}
      <div className="relative mx-auto rounded-lg px-4" style={{ width: '100%', maxWidth: '1280px' }}>
        {/* Question Section */}
        <div className="mb-12">
          <div className="mb-6 flex items-center justify-start gap-2">
            <Image
              src="/Rectangle.svg"
              alt="Back arrow"
              width={7}
              height={12}
              className="object-contain"
            />
            <p className="text-gray-500" style={{ 
              fontFamily: 'var(--font-public-sans)', 
              fontWeight: 300,
              fontSize: '15px', 
              lineHeight: '15px',
              letterSpacing: '0%',
              textAlign: 'left'
            }}>Regular aftercare program</p>
          </div>
          <h1 className="mb-2 text-black" style={{ fontFamily: 'var(--font-public-sans)', fontSize: '32px', fontWeight: 500, lineHeight: '32px' }}>
            How many weeks you like to continue?
          </h1>
          <p className="text-gray-500" style={{ fontFamily: 'var(--font-public-sans)', fontSize: '15px', lineHeight: '15px',fontWeight: 300 }}>
            Based on your selection Mon, Tue, Thu, Fri, Sat
          </p>
        </div>
        
        {children}
      </div>
    </section>
  );
}

