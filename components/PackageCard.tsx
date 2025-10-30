import Link from "next/link";
import SFCard from "@/components/SFCard";

interface Props {
  title: string;
  description?: string;
  bullets?: string[];
  link?: string;
}

export default function PackageCard({ title, description, bullets, link }: Props) {
  const content = (
    <SFCard title={title}>
      {description && <p>{description}</p>}
      {bullets && (
        <ul className="list-disc pl-4">
          {bullets.map((b, idx) => <li key={idx}>{b}</li>)}
        </ul>
      )}
    </SFCard>
  );

  return link ? <Link href={link}>{content}</Link> : content;
}