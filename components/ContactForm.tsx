export default function ContactForm() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <form>
        <label>Full Name</label><input type="text" className="border block w-full p-2 mb-2" />
        <label>Company</label><input type="text" className="border block w-full p-2 mb-2" />
        <label>Position</label><input type="text" className="border block w-full p-2 mb-2" />
        <label>Email</label><input type="email" className="border block w-full p-2 mb-2" />
        <label>Phone</label><input type="tel" className="border block w-full p-2 mb-2" />
        <label>Message</label><textarea className="border block w-full p-2 mb-2" />
        <button type="submit" className="bg-blue-500 text-white p-2">Send</button>
      </form>
      <form>
        <h2>Request Sample</h2>
        <label><input type="checkbox" /> Indices</label>
        <label><input type="checkbox" /> Leads</label>
        <label><input type="checkbox" /> Leads+Indices</label>
        <label>Company</label><input type="text" className="border block w-full p-2 mb-2" />
        <label>Requester</label><input type="text" className="border block w-full p-2 mb-2" />
        <label>Email</label><input type="email" className="border block w-full p-2 mb-2" />
        <label>Phone</label><input type="tel" className="border block w-full p-2 mb-2" />
        <label>Vertical</label><input type="text" className="border block w-full p-2 mb-2" />
        <button type="submit" className="bg-blue-500 text-white p-2">Request</button>
      </form>
    </div>
  );
}
