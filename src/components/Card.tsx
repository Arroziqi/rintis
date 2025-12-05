'use client';

interface CardProps {
  type?: 'outlined' | 'fill';
  color?: string;
  children: React.ReactNode;
  className?: string;
}

export default function Card({
  type = 'outlined',
  color,
  children,
  className = '',
}: Readonly<CardProps>) {
  const base = 'p-5 rounded-[20px]';

  return (
    <div
      className={`${base} ${className} ${type === 'outlined' ? 'border border-gray-300 bg-white' : ''}`}
      style={type === 'fill' ? { backgroundColor: color } : {}}
    >
      {children}
    </div>
  );
}
