'use client';
import Image from 'next/image';
import { ShoppingBag } from 'lucide-react';

const plants = [
  {
    image: '/images/trending_plant1.png',
    price: 'Rs. 599/-',
    right: false,
    desc: 'I recently added a beautiful desk decoration plant to my workspace, and it has made such a positive difference!',
  },
  {
   image: '/images/trending_plant2.png',
    // 🖼️ Replace emoji with: <Image src="/images/plant-cactus.png" ... />
    price: 'Rs. 399/-',
    right: true,
    desc: 'The greenery adds a touch of nature and serenity to my desk, making it feel more inviting and calming',
  },
];

export default function TrendingPlants() {
  return (
    <section id="plants" style={{
      backgroundImage: 'url(/images/trending-bg.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      padding: '80px 40px',
      position: 'relative',
    }}>
      {/* Dark overlay */}
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(12,20,8,0.78)' }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 2 }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <h2 className="section-heading">Our Trendy plants</h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          {plants.map((p, i) => (
            <div key={i} className="card-glass" style={{
              padding: '32px 40px',
              display: 'flex',
              alignItems: 'center',
              gap: 40,
              flexDirection: p.right ? 'row-reverse' : 'row',
              borderRadius: '151px', // EDM style rounded edges
            }}>
              {/* Plant image — shows uploaded PNG if available */}
              <div
                style={{
                  width: 220,
                  height: 220,
                  flexShrink: 0,
                  position: 'relative',
                  overflow: 'visible',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {p.image ? (
                  <Image
                    src={p.image}
                    alt="Trending plant"
                    width={601}
                    height={732}
                    style={{
                      width: '260px',
                      height: '320px',
                      objectFit: 'contain',

                      position: 'absolute',
                      top: '-70px',
                      left: '-20px',

                      zIndex: 2,
                    }}
                  />
                ) : (
                  <span style={{ fontSize: 100 }}>{p.image}</span>
                )}
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 10 }}>
                  For Your Desks Decorations
                </h3>
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, maxWidth: 440, marginBottom: 14 }}>
                  {p.desc}
                </p>
                <p style={{ fontSize: 18, fontWeight: 700, marginBottom: 20 }}>{p.price}</p>
                <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                  <button className="btn-white-outline">Explore</button>
                  <button className="cart-icon-btn" aria-label="Add to cart">
                    <ShoppingBag size={16} color="#fff" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
