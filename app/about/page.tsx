export default function About() {
  return (
    <main>
      <div className="hero h-96 relative">
        <div className="absolute inset-0 transparent-section flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold">About StackFold</h1>
            <p className="mt-4">StackFold is a leader in data analytics, lead generation, and custom indices creation.</p>
          </div>
        </div>
      </div>
      <div className="wave-divider" />
      <section className="container mx-auto py-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="solid-card p-4">
          <h2>The StackFold Difference</h2>
          <p>Our indices and large-scale signals drive efficiency.</p>
        </div>
        {/* More cards */}
      </section>
    </main>
  );
}
