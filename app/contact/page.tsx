export default function Contact() {
  return (
    <section className="container py-12">
      <h1 className="text-2xl font-bold mb-4">Contact</h1>

      <form className="grid gap-3 max-w-lg" method="POST" action="/api/forms/contact">
        <input className="card" name="name" placeholder="Name" required />
        <input className="card" name="email" type="email" placeholder="Business Email" required />
        <textarea className="card h-40" name="message" placeholder="How can we help?" required />
        <button type="submit" className="btn btn-solid mt-3 w-fit">Send</button>
      </form>
    </section>
  );
}
