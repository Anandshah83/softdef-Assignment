'use client';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: 'Shelly Russel',
    init: 'SR',
    color: '#8b6040',
    text: "Just got my hands on some absolutely awesome plants, and I couldn't be happier!",
  },
  {
    name: 'Lula Rolfson',
    init: 'LR',
    color: '#3a6a5a',
    text: "Each one has its own unique charm and personality, and they've already started brightening up my space. The vibrant colors and fresh greenery make such a huge difference in my home.",
  },
  {
    name: 'Carol Hueis',
    init: 'CH',
    color: '#7a3a6a',
    text: "It's like bringing a little piece of nature indoors. Definitely worth the investment—my plant collection has never looked better!",
  },
];

export default function CustomerReviews() {
  return (
    <section id="contact" style={{
      backgroundImage: 'url(/images/review-bg.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      padding: '80px 40px',
      position: 'relative',
    }}>
      {/* Dark overlay */}
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(10,18,6,0.82)' }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 2 }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <h2 className="section-heading">Customer Review</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
          {reviews.map((r, i) => (
            <div key={i} className="card-glass" style={{ padding: '20px 22px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                <div style={{
                  width: 42, height: 42, borderRadius: '50%', background: r.color,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 13, fontWeight: 700, flexShrink: 0,
                }}>{r.init}</div>
                <div>
                  <p style={{ fontSize: 14, fontWeight: 600 }}>{r.name}</p>
                  <div style={{ display: 'flex', gap: 2, marginTop: 3 }}>
                    {[...Array(5)].map((_, j) => <Star key={j} size={11} fill="#facc15" color="#facc15" />)}
                  </div>
                </div>
              </div>
              <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.55)', lineHeight: 1.7 }}>{r.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
