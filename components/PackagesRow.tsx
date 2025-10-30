// components/PackagesRow.tsx
import SFCard from "@/components/SFCard";

const packages = [
  { title: "Basic", body: "Access to leads • Basic analytics" },
  { title: "Pro", body: "Full leads access • Advanced indices" },
  { title: "Enterprise", body: "Custom solutions • Dedicated support" },
];

export default function PackagesRow() {
  return (
    <div className="flex gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory px-2 py-2 scroll-smooth">
      {packages.map((p) => (
        <SFCard key={p.title} title={p.title}>
          {p.body}
        </SFCard>
      ))}
    </div>
  );
}