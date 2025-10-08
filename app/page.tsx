import CTA from '../components/cta-button';

export default function Home() {
  return (
    <main
      className="relative min-h-screen text-center text-white bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('/background.webp')" }}
    >
      {/* Voile noir très léger */}
      <div className="absolute inset-0 bg-gold/30" />

      {/* Contenu global */}
      <div className="relative z-10 flex flex-col items-center justify-start min-h-screen pt-16 pb-20 px-4">

        {/* Titre principal centré plus haut */}
        <div className="text-center mt-12">
          <h1 className="leading-tight" style={{ fontSize: '58px', fontWeight: 800 }}>
            <span style={{ color: '#D4AF37' }}>FIT</span>
            <span>STRATEGY</span>
          </h1>
          <p className="text-zinc-200 mt-3 max-w-xl mx-auto text-lg">
            Accélérez la croissance et la rentabilité de votre business fitness.
          </p>
          <div className="mt-5">
            <CTA href="/contact">Demander un Audit FitProfit™</CTA>
          </div>
        </div>

        {/* Contenu restant de la page (dans le même fond image) */}
        <section className="section py-16 px-4 mt-12 w-full">
          <h2 className="text-4xl font-semibold mb-8" style={{ color: '#CFAE70' }}>Nos Programmes</h2>
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

        <section className="section py-16 px-4 w-full">
          <h2 className="text-4xl font-semibold mb-8" style={{ color: '#CFAE70' }}>Résultats & Témoignages</h2>
          <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
            <div className="card bg-black/60 p-6 rounded-2xl border border-zinc-800">
              <h3 className="text-2xl font-bold">Passage Fitness Rabat</h3>
              <p className="mt-2">+135 % de CA dès la première année.</p>
            </div>
            <div className="card bg-black/60 p-6 rounded-2xl border border-zinc-800">
              <h3 className="text-2xl font-bold">Anfa Club Casablanca</h3>
              <p className="mt-2">+18 % d’adhésions annuelles.</p>
            </div>
            <div className="card bg-black/60 p-6 rounded-2xl border border-zinc-800">
              <h3 className="text-2xl font-bold">GYM4YOU</h3>
              <p className="mt-2">Marge nette doublée en 6 mois.</p>
            </div>
          </div>
        </section>

        <section className="section py-16 px-4 w-full mb-10">
          <h2 className="text-4xl font-semibold mb-8" style={{ color: '#CFAE70' }}>Chiffres clés</h2>
          <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
            <div>
              <p className="text-5xl font-bold" style={{ color: '#CFAE70' }}>+10</p>
              <p className="text-muted">Années d’expérience</p>
            </div>
            <div>
              <p className="text-5xl font-bold" style={{ color: '#CFAE70' }}>+7</p>
              <p className="text-muted">Clubs accompagnés</p>
            </div>
            <div>
              <p className="text-5xl font-bold" style={{ color: '#CFAE70' }}>+25%</p>
              <p className="text-muted">Rentabilité moyenne gagnée</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
