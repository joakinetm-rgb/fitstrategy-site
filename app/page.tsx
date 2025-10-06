
import CTA from '../components/cta-button';

export default function Home() {
  return (
    <>
      <section className="section text-center">
        <h1 className="h1">FITSTRATEGY Consulting</h1>
        <p className="text-muted mt-3">Rentabilité, performance, duplication.</p>
        <div className="mt-6"><CTA href="/contact">Demander un Audit FitProfit™</CTA></div>
      </section>

      <section className="section grid gap-6 md:grid-cols-3">
        <div className="card"><h3 className="h2 mb-2">Audit FitProfit™</h3><p>Diagnostic en 5 jours. Rapport 10 points + plan 30 jours.</p></div>
        <div className="card"><h3 className="h2 mb-2">Programme 90 Jours</h3><p>Transformation ventes, marketing, management.</p></div>
        <div className="card"><h3 className="h2 mb-2">Abonnement Club Partner</h3><p>Suivi mensuel, reporting KPI, coaching.</p></div>
      </section>

      <section className="section grid gap-6 md:grid-cols-3">
        <div className="card"><p className="text-3xl font-bold">+10 ans</p><p className="text-muted">d’expérience</p></div>
        <div className="card"><p className="text-3xl font-bold">+30</p><p className="text-muted">clubs accompagnés</p></div>
        <div className="card"><p className="text-3xl font-bold">+25%</p><p className="text-muted">rentabilité moyenne gagnée</p></div>
      </section>
    </>
  );
}
