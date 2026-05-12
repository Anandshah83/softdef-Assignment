interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionTitle({ children, className = '' }: SectionTitleProps) {
  return (
    <div className={`flex justify-center mb-10 ${className}`}>
      <h2 className="section-title text-white">{children}</h2>
    </div>
  );
}
