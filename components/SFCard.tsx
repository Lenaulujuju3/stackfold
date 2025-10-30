export default function SFCard({
  title,
  children,
}: { title: string; children?: React.ReactNode }) {
  return (
    <div className="snap-start shrink-0 w-[280px] rounded-2xl border border-teal-700/30 bg-teal-600 text-white shadow-lg p-5">
      <h3 className="text-xl font-semibold">{title}</h3>
      {children ? <div className="text-teal-50/90 mt-2">{children}</div> : null}
    </div>
  );
}