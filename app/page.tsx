import Hero from "@/components/Hero";
import Carousel from "@/components/Carousel";
import PackageCard from "@/components/PackageCard";
import SellForm from "@/components/SellForm";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  const verticals = [
    "Technology", "Finance", "Healthcare", "Education", "Retail", "Manufacturing",
    "Real Estate", "Automotive", "Energy", "Media", "Hospitality", "Telecom",
    "Agriculture", "Transportation", "Entertainment", "Construction"
  ];

  return (
    <main>
      <Hero />
      <div className="wave-divider" />
      <section className="container mx-auto py-8">
        <h2 className="text-2xl font-bold mb-4">The StackFold Difference</h2>
        <p>StackFold leverages large-scale signals and custom indices to drive efficiency in data analytics and lead generation.</p>
      </section>
      <div className="wave-divider" />
      <section className="container mx-auto py-8">
        <h2 className="text-2xl font-bold mb-4">Verticals</h2>
        <Carousel items={verticals.map(v => ({ title: v, icon: "📊" }))} />
      </section>
      <div className="wave-divider" />
      <section className="container mx-auto py-8 flex space-x-4 overflow-x-auto no-scrollbar snap-x snap-mandatory">
        <PackageCard title="Leads" description="High-quality leads for your business." />
        <PackageCard title="Indices" description="Custom market indices." />
        <PackageCard title="Leads+Indices" description="Combined packages for comprehensive insights." />
        <PackageCard title="View Products" description="Explore our catalogue." link="/products" />
      </section>
      <div className="wave-divider" />
      <section className="container mx-auto py-8">
        <h2 className="text-2xl font-bold mb-4">Packages</h2>
        <div className="flex space-x-4 overflow-x-auto no-scrollbar snap-x snap-mandatory">
          <PackageCard title="Basic" bullets={["Access to leads", "Basic analytics"]} />
          <PackageCard title="Pro" bullets={["Full leads access", "Advanced indices"]} />
          <PackageCard title="Enterprise" bullets={["Custom solutions", "Dedicated support"]} />
        </div>
      </section>
      <div className="wave-divider" />
      <section className="container mx-auto py-8">
        <h2 className="text-2xl font-bold mb-4">Seller Portal Application</h2>
        <SellForm />
      </section>
      <div className="wave-divider" />
      <section className="container mx-auto py-8">
        <h2 className="text-2xl font-bold mb-4">Contact</h2>
        <ContactForm />
      </section>
    </main>
  );
}