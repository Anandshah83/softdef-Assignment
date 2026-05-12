'use client';
import { ShoppingBag } from 'lucide-react';
import Image from 'next/image';

const plants = [
  {
    image: 'images/algonimaPlant.png', 
    name: 'Aglaonema plant',
    desc: 'The Aglaonema plant, commonly known as Chinese Evergreen known for its attractive foliage and easy maintenance.',
    price: 'Rs. 300/-',
  },
  {
    image: 'images/lilies.png', 
    name: 'Plantain Lilies',
    desc: 'Hostas are primarily grown for their lush, decorative leaves, which come in a wide variety of textures.',
    price: 'Rs. 380/-',
  },
  {
    image: 'images/cactus.png', 
    name: 'Cactus',
    desc: 'It is known for their ability to thrive in arid and environmentally harsh conditions.',
    price: 'Rs. 259/-',
  },
  {
    image: 'images/swiss.png', 
    name: 'Swiss cheese Plant',
    desc: 'The Aglaonema plant, commonly known as Chinese Evergreen known for its distinctive, perforated leaves.',
    price: 'Rs. 400/-',
  },
  {
    image: 'images/Sansevieria plant.png', 
    name: 'Sansevieria plant',
    desc: 'It is a popular indoor plant admired for its striking appearance and low-maintenance nature.',
    price: 'Rs. 450/-',
  },
  {
    image: 'images/agave-plant.png', 
    name: 'Agave plant',
    desc: 'The Agave plant is a genus of succulent plants known for their striking rosette of thick, fleshy leaves.',
    price: 'Rs. 359/-',
  },
];

export default function TopSellingPlants() {
  return (
    <section id="more" style={{
      /* 🖼️ BACKGROUND: public/images/topsell-bg.jpg — replace to change section bg */
      backgroundImage: 'url(/images/topsell-bg.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      padding: '80px 40px',
      position: 'relative',
    }}>
      {/* Dark overlay */}
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(10,18,6,0.80)' }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 2 }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <h2 className="section-heading">Our Top Selling Plants</h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 20,
        }}>
          {plants.map((p, i) => (
            <div key={i} className="card-glass" style={{ padding: 18 }}>
              {/* 🖼️ Plant image — replace emoji div with <Image src="/images/plant-xxx.png" ... /> */}
              <div style={{
                width: '100%', height: 160, borderRadius: 14, marginBottom: 14,
                // background: 'rgba(255,255,255,0.05)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 64,
              }}>
                                  <Image
                      src={`/${p.image}`}
                      alt={p.name}
                      width={140}
                      height={140}
                      style={{
                        objectFit: 'contain',
                      }}
                    />
              </div>
              <h3 style={{ fontSize: 15, fontWeight: 600, marginBottom: 6 }}>{p.name}</h3>
              <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65, marginBottom: 14 }}>
                {p.desc}
              </p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: 16, fontWeight: 700 }}>{p.price}</span>
                <button className="cart-icon-btn" aria-label="Add to cart">
                  <ShoppingBag size={15} color="#fff" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
