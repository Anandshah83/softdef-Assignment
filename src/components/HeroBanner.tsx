'use client';
import { Play, Star, ChevronRight } from 'lucide-react';

export default function HeroBanner() {
  return (
    <section id="home" style={{
      minHeight: '100vh',
      /* 🖼️ BACKGROUND: public/images/home.jpg — using the uploaded home.jpg image */
      // backgroundImage: 'url(/images/home.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center top',
      backgroundRepeat: 'no-repeat',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      paddingTop: 64,
    }}>
      {/* Dark overlay for text readability */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(135deg, rgba(15,22,10,0.72) 0%, rgba(10,18,6,0.55) 60%, rgba(5,12,3,0.45) 100%)',
      }} />

      <div style={{
        maxWidth: 1280, margin: '0 auto', padding: '80px 40px',
        width: '100%', position: 'relative', zIndex: 2,
        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center',
      }}>

        {/* ── LEFT CONTENT ── */}
        <div className="anim-up">
          <h1 style={{
            fontSize: 'clamp(48px, 7vw, 82px)', fontWeight: 800,
            lineHeight: 1.05, letterSpacing: '-2.5px', marginBottom: 16,
            textShadow: '0 4px 24px rgba(0,0,0,0.5)',
          }}>
            Earth's Exhale
          </h1>
          <p style={{
            fontSize: 13, color: 'rgba(255,255,255,0.62)', lineHeight: 1.75,
            maxWidth: 370, marginBottom: 32,
          }}>
            "Earth Exhale" symbolizes the purity and vitality of the Earth's natural
            environment and its essential role in sustaining life.
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 48, flexWrap: 'wrap' }}>
            {/* BUY NOW button */}
            <button className="btn-white-outline">Buy Now</button>

            <button style={{
              background: 'none', border: 'none', outline: 'none', boxShadow: 'none',
              cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 10,
              color: 'rgba(255,255,255,0.75)', fontSize: 13, padding: 0, transition: 'color 0.2s',
            }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = '#fff')}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.75)')}>
              <div style={{
                width: 36, height: 36, borderRadius: '50%',
                border: '1.5px solid rgba(255,255,255,0.55)',
                background: 'transparent',
                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
              }}>
                <Play size={13} fill="rgba(255,255,255,0.9)" color="rgba(255,255,255,0.9)" />
              </div>
              Live Demo...
            </button>
          </div>

          {/* ── REVIEW CARD ── */}
          <div className="card-glass anim-up d3" style={{ padding: '16px 18px', maxWidth: 280 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
              <div style={{
                width: 40, height: 40, borderRadius: '50%',
                background: 'linear-gradient(135deg, #7a5c30, #b8903a)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 12, fontWeight: 700, flexShrink: 0,
              }}>RH</div>
              <div>
                <p style={{ fontSize: 13, fontWeight: 600 }}>Ronnie Hamill</p>
                <div style={{ display: 'flex', gap: 2, marginTop: 2 }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={10} fill="#facc15" color="#facc15" />
                  ))}
                </div>
              </div>
            </div>
            <p style={{ fontSize: 11.5, color: 'rgba(255,255,255,0.55)', lineHeight: 1.65 }}>
              I can't express how thrilled I am with my new natural plants! They bring
              such a fresh and vibrant energy to my home.
            </p>
          </div>
        </div>

        {/* ── RIGHT — HERO PLANT + FLOATING CARD ── */}
        <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 400 }}>

          

          {/* ── FLOATING PRODUCT CARD (top-right) ── */}
          <div className="card-glass anim-right d4" style={{
            position: 'absolute', top: '0', right: '0',
            width: 200, padding: '14px',
          }}>
            
            <div style={{
                width: '100%',
                height: 110,
                borderRadius: 12,
                marginBottom: 10,
                // background: 'rgba(255,255,255,0.05)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 56,
              }}>
                <img
                  src="images/algonimaPlant.png"
                  alt="Plant"
                  style={{
                    width: '512px',
                    height: '719px',
                    objectFit: 'contain',
                  }}
                />
              </div>

            <p style={{ fontSize: 10, color: 'rgba(255,255,255,0.45)', marginBottom: 3 }}>Indoor Plant</p>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
              <span style={{ fontSize: 13, fontWeight: 600 }}>Aglaonema plant</span>
              <ChevronRight size={15} color="rgba(255,255,255,0.4)" />
            </div>
            <button className="btn-white-outline" style={{ width: '100%', justifyContent: 'center', padding: '7px', fontSize: 12 }}>
              Buy Now
            </button>
            {/* Slider dots */}
            <div style={{ display: 'flex', gap: 4, justifyContent: 'center', marginTop: 10 }}>
              <div style={{ width: 18, height: 3, borderRadius: 2, background: '#fff' }} />
              <div style={{ width: 6, height: 3, borderRadius: 2, background: 'rgba(255,255,255,0.3)' }} />
              <div style={{ width: 6, height: 3, borderRadius: 2, background: 'rgba(255,255,255,0.3)' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
