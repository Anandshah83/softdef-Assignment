import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  initials: string;
  review: string;
  rating?: number;
  avatarColor?: string;
}

export default function TestimonialCard({ name, initials, review, rating = 5, avatarColor = '#5a7a3a' }: TestimonialCardProps) {
  return (
    <div className="plant-card p-5 flex flex-col gap-3">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
          style={{ background: avatarColor }}>
          {initials}
        </div>
        <div>
          <p className="font-semibold text-sm text-white">{name}</p>
          <div className="flex gap-0.5 mt-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={10} fill={i < rating ? '#facc15' : 'none'} stroke={i < rating ? '#facc15' : '#555'} />
            ))}
          </div>
        </div>
      </div>
      <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>{review}</p>
    </div>
  );
}
