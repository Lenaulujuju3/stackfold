import Link from "next/link";

interface Props {
  title: string;
  description?: string;
  bullets?: string[];
  link?: string;
}

export default function PackageCard({ title, description, bullets, link }: Props) {
  const content = (
    <div className="solid-card">
      <h3 className="font-bold text-teal">{title}</h3>
      {description && <p className="text-gray-600">{description}</p>}
      {bullets && (
        <ul className="list-disc pl-4 text-gray-600">
          {bullets.map((b, idx) => <li key={idx}>{b}</li>)}
        </ul>
      )}
    </div>
  );

  return link ? <Link href={link} className="block hover:scale-105 transition-transform">{content}</Link> : content;
}