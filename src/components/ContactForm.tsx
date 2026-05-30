import { useState } from 'react';

type Status = 'idle' | 'sending' | 'success' | 'error';

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch('/', {
        method: 'POST',
        body: data,
      });
      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <form onSubmit={handleSubmit} name="contact" method="POST" netlify className="space-y-5 max-w-xl mx-auto">
      <input type="hidden" name="form-name" value="contact" />
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-text-dark mb-1">
          Numele tău
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-text-dark mb-1">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-text-dark mb-1">
          Mesaj
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm resize-none"
        />
      </div>
      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full py-3 bg-primary text-white font-bold rounded-xl hover:bg-primary-dark transition-colors disabled:opacity-60"
      >
        {status === 'sending' ? 'Se trimite…' : 'Trimite mesajul'}
      </button>
      {status === 'success' && (
        <p className="text-green-600 text-sm text-center font-medium">
          Mesaj trimis! Te vom contacta în curând.
        </p>
      )}
      {status === 'error' && (
        <p className="text-red-500 text-sm text-center">
          Ceva n-a funcționat. Încearcă din nou sau scrie-ne direct.
        </p>
      )}
    </form>
  );
}
