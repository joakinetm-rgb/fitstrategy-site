
import CTA from '../components/cta-button';

export default function Home() {
  return (
    <>
        <section
      className="min-h-screen flex flex-col items-center justify-center text-center bg-cover bg-center"
      style={{ backgroundImage: "url('/background.jpg')" }}
    >
      <div className="bg-black/60 p-10 rounded-2xl">
        <h1 className="text-5xl font-bold text-gold">FITSTRATEGY</h1>
        <p className="mt-4 text-white max-w-xl">
          Accélérez la croissance et la rentabilité de votre business fitness.
        </p>
      </div>
    </section>
  );
}
      <section className="section grid gap-6 md:grid-cols-3">
        <div className="card"><h3 className="h2 mb-2">Audit FitProfit™</h3><p>Diagnostic en 5 jours. Rapport 10 points + plan 30 jours.</p></div>
        <div className="card"><h3 className="h2 mb-2">Programme 90 Jours</h3><p>Transformation ventes, marketing, management.</p></div>
        <div className="card"><h3 className="h2 mb-2">Abonnement Club Partner</h3><p>Suivi mensuel, reporting KPI, coaching.</p></div>
      </section>

      <section className="section grid gap-6 md:grid-cols-3">
        <div className="card"><p className="text-3xl font-bold">+10 ans</p><p className="text-muted">d’expérience</p></div>
        <div className="card"><p className="text-3xl font-bold">+7</p><p className="text-muted">clubs accompagnés</p></div>
        <div className="card"><p className="text-3xl font-bold">+25%</p><p className="text-muted">rentabilité moyenne gagnée</p></div>
      </section>
    </>
  );
}
