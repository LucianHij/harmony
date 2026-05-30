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
    <form onSubmit={handleSubmit} name="contact" method="POST" netlify className="space-y-6 max-w-xl mx-auto">
      <input type="hidden" name="form-name" value="contact" />
      <div className="group">
        <label htmlFor="name" className="block text-sm font-medium text-text-dark mb-2 transition-colors duration-300">
          Numele tău
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-300 hover:border-stone-300 shadow-sm hover:shadow-md group-focus-within:shadow-lg group-focus-within:shadow-primary/10"
          placeholder="e.g. Ioan Popescu"
        />
      </div>
      <div className="group">
        <label htmlFor="email" className="block text-sm font-medium text-text-dark mb-2 transition-colors duration-300">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-300 hover:border-stone-300 shadow-sm hover:shadow-md group-focus-within:shadow-lg group-focus-within:shadow-primary/10"
          placeholder="e.g. ion@example.com"
        />
      </div>
      <div className="group">
        <label htmlFor="message" className="block text-sm font-medium text-text-dark mb-2 transition-colors duration-300">
          Mesaj
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-300 hover:border-stone-300 resize-none shadow-sm hover:shadow-md group-focus-within:shadow-lg group-focus-within:shadow-primary/10"
          placeholder="Spune-ne mai mult despre ce ai în minte..."
        />
      </div>
      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full py-3 bg-primary text-white font-bold rounded-xl hover:bg-primary-dark transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed hover:scale-105 active:scale-95 shadow-md hover:shadow-lg hover:shadow-primary/40 glow-sm"
      >
        {status === 'sending' ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Se trimite…
          </span>
        ) : (
          'Trimite mesajul'
        )}
      </button>
      {status === 'success' && (
        <p className="status-enter text-green-600 text-sm text-center font-medium bg-green-50 rounded-lg p-3 border border-green-200">
          ✓ Mesaj trimis! Te vom contacta în curând.
        </p>
      )}
      {status === 'error' && (
        <p className="status-enter text-red-600 text-sm text-center font-medium bg-red-50 rounded-lg p-3 border border-red-200">
          ✕ Ceva n-a funcționat. Încearcă din nou sau scrie-ne direct.
        </p>
      )}
    </form>
  );
}
