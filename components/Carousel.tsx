interface Item {
  title: string;
  icon: string;
}

interface Props {
  items: Item[];
}

export default function Carousel({ items }: Props) {
  return (
    <div className="overflow-x-auto snap-x snap-mandatory flex space-x-4 pb-4 scrollbar-hide">
      {items.map((item, idx) => (
        <div key={idx} className="solid-card snap-center min-w-[200px] p-4 text-center flex-shrink-0 rounded-lg shadow-md">
          <div className="text-4xl mb-2">{item.icon}</div>
          <h3 className="font-bold text-lg">{item.title}</h3>
        </div>
      ))}
    </div>
  );
}