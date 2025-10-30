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
    <div className="overflow-x-auto snap-x snap-mandatory flex space-x-4 pb-4 no-scrollbar">
      {items.map((item, idx) => (
        <SFCard key={idx} title={item.title}>
          <div className="text-4xl mb-2">{item.icon}</div>
        </SFCard>
      ))}
    </div>
  );
}