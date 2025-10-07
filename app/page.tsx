import CTA from '../components/cta-button';

export default function Home() {
  return (
    <>
      {/* HERO sur toute la largeur, voile léger, FIT doré / STRATEGY blanc */}
      <section
        className="relative bg-cover bg-center"
        style={{ backgroundImage: "url('/background.webp')" }}
      >
        <div className="absolute inset-0 bg-black/30" />
        <div
          className="relative container flex flex-col items-center justify-center text-center"
          style={{ minHeight: '68vh', paddingTop: '2rem', paddingBottom: '2rem' }}
        >
          <h1 className="leading-tight" style={{ fontSize: '56px', fontWeight: 800 }}>
            <span style={{ color: '#D4AF37' }}>FIT</span>
            <span>STRATEGY</span>
          </h1>
          <p className="text-zinc-300" style={{ marginTop: 10, maxWidth: 720 }}>
            Accélérez la croissance et la rentabilité de votre business fitness.
          </p>
          <div style={{ marginTop: 16 }}>
            <CTA href="/contact">Demander un Audit FitProfit™</CTA>
          </div>
        </div>
      </section>

      {/* PROGRAMMES */}
      <section className="section py-16 px-4">
        <h2 className="text-4xl font-semibold mb-8" style={{ color: '#CFAE70' }}>
          Nos Programmes
        </h2>
        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          <div className="card bg-black/60 p-6 rounded-2xl border border-zinc-800">
            <h3 className="text-2xl font-bold mb-2">Audit FitProfit™</h3>
            <p>Diagnostic en 5 jours. Rapport 10 points + plan 30 jours.</p>
          </div>
          <div className="card bg-black/60 p-6 rounded-2xl border border-zinc-800">
            <h3 className="text-2xl font-bold mb-2">Programme 90 Jours</h3>
            <p>Transformation ventes, marketing et management.</p>
          </div>
          <div className="card bg-black/60 p-6 rounded-2xl border border-zinc-800">
            <h3 className="text-2xl font-bold mb-2">Club Partner</h3>
            <p>Suivi mensuel, reporting KPI, formation & coaching.</p>
          </div>
        </div>
      </section>

      {/* RÉSULTATS */}
      <section className="section py-16 px-4">
        <h2 className="text-4xl font-semibold mb-8" style={{ color: '#CFAE70' }}>
          Résultats & Témoignages
        </h2>
        <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
          <div className="card p-6 rounded-2xl border border-zinc-800">
            <h3 className="text-2xl font-bold">Passage Fitness Rabat</h3>
            <p className="mt-2">+135 % de CA dès la première année.</p>
          </div>
          <div className="card p-6 rounded-2xl border border-zinc-800">
            <h3 className="text-2xl font-bold">Anfa Club Casablanca</h3>
            <p className="mt-2">+18 % d’adhésions annuelles.</p>
          </div>
          <div className="card p-6 rounded-2xl border border-zinc-800">
            <h3 className="text-2xl font-bold">GYM4YOU</h3>
            <p className="mt-2">Marge nette doublée en 6 mois.</p>
          </div>
        </div>
      </section>

      {/* CHIFFRES CLÉS */}
      <section className="section py-16 px-4">
        <h2 className="text-4xl font-semibold mb-8" style={{ color: '#CFAE70' }}>
          Chiffres clés
        </h2>
        <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
          <div>
            <p className="text-5xl font-bold" style={{ color: '#CFAE70' }}>+10</p>
            <p className="text-muted">Années d’expérience</p>
          </div>
          <div>
            <p className="text-5xl font-bold" style={{ color: '#CFAE70' }}>+40</p>
            <p className="text-muted">Clubs accompagnés</p>
          </div>
          <div>
            <p className="text-5xl font-bold" style={{ color: '#CFAE70' }}>+25%</p>
            <p className="text-muted">Rentabilité moyenne gagnée</p>
          </div>
        </div>
      </section>
    </>
  );
}
