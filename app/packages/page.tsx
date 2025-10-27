import PackageCard from "@/components/PackageCard";

export default function Packages() {
  return (
    <main className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Packages</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <PackageCard title="Basic" bullets={["Access to basic leads", "Limited analytics"]} />
        <PackageCard title="Pro" bullets={["Full access to leads and indices", "Advanced tools"]} />
        <PackageCard title="Enterprise" bullets={["Customized solutions", "Priority support"]} />
      </div>
    </main>
  );
}
