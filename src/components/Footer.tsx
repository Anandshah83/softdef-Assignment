'use client';
import { useState } from 'react';
import { Leaf } from 'lucide-react';
export default function Footer() {
  const [email, setEmail] = useState('');

  return (
    <footer style={{
      /* 🖼️ BACKGROUND: public/images/footer-bg.jpg — replace to change footer bg */
      backgroundImage: 'url(/images/footer-bg.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center bottom',
      position: 'relative',
      padding: '60px 40px 28px',
    }}>
      {/* Dark overlay */}
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(6,12,4,0.88)' }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 2 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr 1.6fr', gap: 48, marginBottom: 48 }}>

          {/* ── BRAND ── */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              {/* 🖼️ LOGO: replace Leaf icon with <Image src="/images/logo.png" ...> if needed */}
              <div style={{
                width: 32, height: 32, borderRadius: 9,
                background: 'linear-gradient(135deg, #2a5c2a, #5dde5d)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <img
        src="/images/plant.png"
        alt="Logo"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
              </div>
              <span style={{ fontSize: 17, fontWeight: 600, color: '#fff' }}>FloraVision.</span>
            </div>
            <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', lineHeight: 1.8, maxWidth: 240 }}>
              "From lush indoor greens to vibrant outdoor blooms, our plants are crafted to
              inspire and elevate your living environment."
            </p>
            <div style={{ display: 'flex', gap: 18, marginTop: 20 }}>
              {['FB', 'TW', 'LI'].map(s => (
                <span key={s} style={{ fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.38)', cursor: 'pointer', transition: 'color 0.2s' }}
                  onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = '#fff')}
                  onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.38)')}>
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* ── QUICK LINKS ── */}
          <div>
            <h4 style={{ fontSize: 13, fontWeight: 600, color: '#fff', marginBottom: 16 }}>Quick Link's</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {['Home', 'Types Of plants', 'Contact', 'Privacy'].map(l => (
                <li key={l}>
                  <a href="#" style={{ fontSize: 12, color: 'rgba(255,255,255,0.42)', textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = '#fff')}
                    onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.42)')}>
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── NEWSLETTER ── */}
          <div>
            <h4 style={{ fontSize: 13, fontWeight: 600, color: '#fff', marginBottom: 16 }}>For Every Update.</h4>
            <div style={{ display: 'flex', gap: 8 }}>
              <input
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                style={{
                  flex: 1,
                  background: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  borderRadius: 9, padding: '9px 14px',
                  fontSize: 12, color: '#fff', outline: 'none',
                }}
              />
              <button style={{
                background: '#4ade80', color: '#000', border: 'none',
                padding: '9px 16px', borderRadius: 9,
                fontSize: 11, fontWeight: 700, cursor: 'pointer', whiteSpace: 'nowrap',
              }}>SUBSCRIBE</button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.07)',
          paddingTop: 20, textAlign: 'center',
          fontSize: 12, color: 'rgba(255,255,255,0.25)',
        }}>
          FloraVision © all right reserved
        </div>
      </div>
    </footer>
  );
}
