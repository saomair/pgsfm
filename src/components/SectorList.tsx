import { Sector } from '@/lib/data';

interface SectorListProps {
  sectors: Sector[];
  className?: string;
}

export default function SectorList({ sectors, className = "" }: SectorListProps) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${className}`}>
      {sectors.map((sector, index) => (
        <div
          key={index}
          className="bg-white p-6 rounded-2xl shadow-sm border hover:shadow-md transition-shadow duration-300"
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            {sector.name}
          </h3>
          <p className="text-gray-600 leading-relaxed">
            {sector.description}
          </p>
        </div>
      ))}
    </div>
  );
}
