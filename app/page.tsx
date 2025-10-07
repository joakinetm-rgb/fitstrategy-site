export default function Home() {
  return (
   <section
  className="relative bg-cover bg-center"
  style={{ backgroundImage: "url('/background.webp')" }}
>
  {/* voile noir plus léger */}
  <div className="absolute inset-0 bg-black/40" />

  {/* contenu compact */}
  <div className="relative container flex flex-col items-center justify-center text-center"
       style={{ minHeight: '72vh', paddingTop: '2.5rem', paddingBottom: '2.5rem' }}>
    <h1 className="leading-tight" style={{ fontSize: '56px', fontWeight: 800 }}>
      <span style={{ color: '#CFAE70' }}>FIT</span>
      <span>STRATEGY</span>
    </h1>
    <p className="text-zinc-300"
       style={{ marginTop: '10px', maxWidth: 720 }}>
      Accélérez la croissance et la rentabilité de votre business fitness.
    </p>
  </div>
</section>

        {/* SECTION SERVICES */}
        <section className="section py-16 px-4">
          <h2 className="text-4xl font-semibold mb-8 text-gold">Nos Programmes</h2>
          <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
            <div className="card bg-black/70 p-6 rounded-2xl border border-gold/20">
              <h3 className="text-2xl font-bold mb-2">FitProfit™</h3>
              <p>Diagnostic en 5 jours, rapport 10 points + plan 30 jours.</p>
            </div>
            <div className="card bg-black/70 p-6 rounded-2xl border border-gold/20">
              <h3 className="text-2xl font-bold mb-2">Transformation</h3>
              <p>Ventes, marketing, management, structuration opérationnelle.</p>
            </div>
            <div className="card bg-black/70 p-6 rounded-2xl border border-gold/20">
              <h3 className="text-2xl font-bold mb-2">Club Partner</h3>
              <p>Suivi mensuel, reporting KPI, formation & coaching.</p>
            </div>
          </div>
        </section>

        {/* SECTION RÉSULTATS */}
        <section className="section py-16 px-4 bg-black/70">
          <h2 className="text-4xl font-semibold mb-8 text-gold">Nos Résultats</h2>
          <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
            <div className="card p-6 rounded-2xl border border-gold/20">
              <h3 className="text-2xl font-bold">Passage Fitness Rabat</h3>
              <p className="mt-2">+135 % de CA dès la première année.</p>
            </div>
            <div className="card p-6 rounded-2xl border border-gold/20">
              <h3 className="text-2xl font-bold">Anfa Club Casablanca</h3>
              <p className="mt-2">+18 % d’adhésions annuelles.</p>
            </div>
            <div className="card p-6 rounded-2xl border border-gold/20">
              <h3 className="text-2xl font-bold">GYM4YOU</h3>
              <p className="mt-2">Marge nette doublée en 6 mois.</p>
            </div>
          </div>
        </section>

        {/* SECTION CHIFFRES */}
        <section className="section py-16 px-4">
          <h2 className="text-4xl font-semibold mb-8 text-gold">Nos Chiffres</h2>
          <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
            <div>
              <p className="text-5xl font-bold text-gold">+10</p>
              <p className="text-muted">Années d’expérience</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-gold">+7</p>
              <p className="text-muted">Clubs accompagnés</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-gold">+25%</p>
              <p className="text-muted">Rentabilité moyenne gagnée</p>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
