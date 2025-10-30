// components/Carousel.tsx
import SFCard from "@/components/SFCard";

interface Item {
  title: string;
  icon: string;
}

interface Props {
  items: Item[];
}

export default function Carousel({ items }: Props) {
  return (
    <div className="flex gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory px-2 py-2 scroll-smooth">
      {items.map((item, idx) => (
        <SFCard key={idx} title={item.title}>
          <div className="text-4xl mb-2">{item.icon}</div>
        </SFCard>
      ))}
    </div>
  );
}