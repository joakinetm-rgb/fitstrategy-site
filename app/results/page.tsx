import SectionPerformance from '../components/section-performance';

export default function Results() {
  const cases = [
    { n: "Passage Fitness Rabat", i: "135% de CA l'année d'ouverture" },
    { n: "Anfa Club Casablanca", i: "+18 % d’adhésions annuelles" },
    { n: "GYM4YOU", i: "Marge nette doublée en 6 mois" }
  ];

  return (
    <>
      <section className="section">
        <h1 className="h1 mb-6">Résultats & Témoignages</h1>
        <div className="grid gap-6 md:grid-cols-2">
          {cases.map(c => (
            <div key={c.n} className="card">
              <h3 className="h2">{c.n}</h3>
              <p className="mt-2">{c.i}</p>
            </div>
          ))}
        </div>
      </section>

      <SectionPerformance />
    </>
  );
}
