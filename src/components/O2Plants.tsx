'use client';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';


export default function O2Plants() {
  return (
    <section style={{
      /* 🖼️ BACKGROUND: public/images/o2-bg.jpg — replace to change bg */
      backgroundImage: 'url(/images/o2-bg.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      padding: '80px 40px',
      position: 'relative',
    }}>
      {/* Dark overlay */}
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(10,18,6,0.80)' }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 2 }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <h2 className="section-heading">Our Best o2</h2>
        </div>

        <div className="card-glass" style={{
          padding: '52px 60px',
          display: 'flex',
          alignItems: 'center',
          gap: 48,
          position: 'relative',
          overflow: 'hidden',
        }}>
          {/* Green glow blob */}
          <div style={{
            position: 'absolute', inset: 0, pointerEvents: 'none',
            background: 'radial-gradient(ellipse at 25% 50%, rgba(40,80,20,0.25), transparent 68%)',
          }} />

          
                  <div
                    className="anim-float"
                    style={{
                      flexShrink: 0,
                      position: 'relative',
                      zIndex: 1,
                      width: 220,
                      height: 220,
                    }}
                  >
                    <img
                      src="/images/algonimaPlant.png"
                      alt="Plant"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                        display: 'block',
                      }}
                    />
                  </div>

          <div style={{ flex: 1, position: 'relative', zIndex: 1 }}>
            <h3 style={{ fontSize: 28, fontWeight: 700, lineHeight: 1.3, marginBottom: 16 }}>
              We Have Small And Best O2 Plants Collection's
            </h3>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, marginBottom: 10 }}>
              Oxygen-producing plants, often referred to as "O2 plants," are those that release
              oxygen into the atmosphere through the process of photosynthesis.
            </p>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, marginBottom: 28 }}>
              Many plants can help filter air pollutants and toxins from the air, such as
              formaldehyde, benzene, and trichloroethylene. This makes the air cleaner and
              healthier to breathe.
            </p>
            <button className="btn-white-outline">Explore</button>
          </div>

          {/* Slider arrows */}
          <div style={{ position: 'absolute', bottom: 20, right: 24, display: 'flex', gap: 8, zIndex: 2 }}>
            {[ChevronLeft, ChevronRight].map((Icon, i) => (
              <button key={i} style={{
                width: 32, height: 32, borderRadius: '50%',
                border: '1px solid rgba(255,255,255,0.2)',
                background: 'rgba(255,255,255,0.06)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', transition: 'all 0.2s',
              }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.14)')}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.06)')}>
                <Icon size={15} color="#fff" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
