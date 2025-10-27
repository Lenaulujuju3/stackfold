interface Item {
  title: string;
  icon: string;
}

interface Props {
  items: Item[];
}

export default function Carousel({ items }: Props) {
  return (
    <div className="overflow-x-auto snap-x snap-mandatory flex space-x-4 pb-4">
      {items.map((item, idx) => (
        <div key={idx} className="solid-card snap-center min-w-[200px] p-4 text-center">
          <div className="text-4xl mb-2">{item.icon}</div>
          <h3>{item.title}</h3>
        </div>
      ))}
    </div>
  );
}
