'use client';
import { ShoppingBag } from 'lucide-react';

interface PlantCardProps {
  emoji: string;
  name: string;
  description: string;
  price: string;
  bgGradient?: string;
}

export default function PlantCard({ emoji, name, description, price, bgGradient }: PlantCardProps) {
  return (
    <div className="plant-card p-4 flex flex-col gap-3">
      <div className="w-full h-44 rounded-xl flex items-center justify-center text-6xl"
        style={{ background: bgGradient || 'rgba(255,255,255,0.04)' }}>
        {emoji}
      </div>
      <div>
        <h3 className="font-semibold text-base text-white mb-1">{name}</h3>
        <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>{description}</p>
      </div>
      <div className="flex items-center justify-between mt-auto pt-1">
        <span className="font-bold text-base text-white">{price}</span>
        <button className="w-8 h-8 rounded-lg flex items-center justify-center transition-all hover:scale-110"
          style={{ border: '1px solid rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.06)' }}
          aria-label="Add to cart">
          <ShoppingBag size={14} className="text-white" />
        </button>
      </div>
    </div>
  );
}
