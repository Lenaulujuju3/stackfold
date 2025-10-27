import Link from "next/link";

interface Props {
  title: string;
  description?: string;
  bullets?: string[];
  link?: string;
}

export default function PackageCard({ title, description, bullets, link }: Props) {
  const content = (
    <div className="solid-card p-4">
      <h3 className="font-bold">{title}</h3>
      {description && <p>{description}</p>}
      {bullets && (
        <ul className="list-disc pl-4">
          {bullets.map((b, idx) => <li key={idx}>{b}</li>)}
        </ul>
      )}
    </div>
  );

  return link ? <Link href={link}>{content}</Link> : content;
}
