
'use client';
import { useState } from 'react';

export default function Contact() {
  const [done, setDone] = useState(false);
  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    await fetch('/api/lead', { method:'POST', body: fd });
    setDone(true);
  }
  return (
    <section className="section max-w-xl">
      <h1 className="h1 mb-4">Contact</h1>
      <form onSubmit={onSubmit} className="space-y-4">
        <input name="name" placeholder="Nom" required className="w-full bg-black border border-zinc-800 p-3 rounded" />
        <input name="email" type="email" placeholder="Email" required className="w-full bg-black border border-zinc-800 p-3 rounded" />
        <textarea name="message" placeholder="Votre besoin" className="w-full bg-black border border-zinc-800 p-3 rounded" rows={5} />
        <button className="btn">Envoyer</button>
      </form>
      {done && <p className="mt-4 text-green-400">Merci, nous revenons vers vous.</p>}
      <p className="mt-8 text-muted">Casablanca • contact@fitstrategy.ma • +212 6 61 415 015</p>
    </section>
  );
}
