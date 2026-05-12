'use client';
import { useState } from 'react';
import { Search, ShoppingBag, Menu, X, ChevronDown, Leaf } from 'lucide-react';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Plants Type', href: '#plants', drop: true },
  { label: 'More', href: '#more' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: 'rgba(22, 28, 18, 0.88)',
      backdropFilter: 'blur(16px)',
      borderBottom: '1px solid rgba(255,255,255,0.07)',
      padding: '0 40px',
      height: '64px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    }}>
      {/* Logo */}
      <a href="#home" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
        <div style={{
          width: 32, height: 32, borderRadius: 9,
          background: 'linear-gradient(135deg, #2a5c2a, #5dde5d)',
          display: 'flex', alignItems: 'center', justifyContent: 'center'
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
        <span style={{ color: '#fff', fontWeight: 600, fontSize: 17, letterSpacing: '-0.3px' }}>FloraVision.</span>
      </a>

      {/* Desktop links */}
      <ul style={{ display: 'flex', gap: 36, listStyle: 'none', margin: 0 }} className="hidden md:flex">
        {links.map(l => (
          <li key={l.label}>
            <a href={l.href} style={{
              color: 'rgba(255,255,255,0.72)', fontSize: 14, textDecoration: 'none',
              display: 'flex', alignItems: 'center', gap: 4, transition: 'color 0.2s'
            }}
              onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.72)')}>
              {l.label}{l.drop && <ChevronDown size={13} />}
            </a>
          </li>
        ))}
      </ul>

      {/* Icons */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
        {[Search, ShoppingBag].map((Icon, i) => (
          <button key={i} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.68)', transition: 'color 0.2s', display: 'flex' }}
            onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = '#fff')}
            onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.68)')}>
            <Icon size={20} />
          </button>
        ))}
        <button style={{
          background: 'none', border: 'none', cursor: 'pointer',
          color: 'rgba(255,255,255,0.68)', display: 'flex'
        }} onClick={() => setOpen(!open)} className="flex md:hidden">
          {open ? <X size={22} color="#fff" /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div style={{
          position: 'absolute', top: 64, left: 0, right: 0,
          background: '#161d12', borderBottom: '1px solid rgba(255,255,255,0.08)',
          padding: '20px 32px 24px',
        }}>
          {links.map(l => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)} style={{
              display: 'flex', alignItems: 'center', gap: 6,
              color: 'rgba(255,255,255,0.75)', fontSize: 15, textDecoration: 'none',
              padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.05)'
            }}>
              {l.label}{l.drop && <ChevronDown size={14} />}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
