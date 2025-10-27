interface Props {
  type: string;
  title: string;
  summary: string;
}

export default function ProductCard({ type, title, summary }: Props) {
  return (
    <div className="solid-card p-4">
      <h3 className="font-bold">{title}</h3>
      <p>{summary}</p>
      <p>Type: {type}</p>
    </div>
  );
}
