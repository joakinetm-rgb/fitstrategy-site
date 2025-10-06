
export default function Services() {
  const blocks = [
    { t:'Audit FitProfit™', d:'Diagnostiquez la rentabilité réelle de votre club en 5 jours.', p:'12 000–15 000 MAD', r:'+20% rentabilité moyenne' },
    { t:'Programme 90 Jours', d:'12 semaines pour transformer ventes, marketing et management.', p:'45 000–60 000 MAD', r:'+25 à +40% de CA' },
    { t:'Formation Sales & Retention', d:'2 jours pour transformer vos équipes en moteurs de croissance.', p:'10 000–12 000 MAD', r:'Certification incluse' },
    { t:'Abonnement Club Partner', d:'Suivi mensuel, reporting KPI, coaching stratégique.', p:'5 000–6 000 MAD / mois', r:'Engagement 6 mois' },
    { t:'Franchise & Expansion', d:'Étude de marché, business plan, manuel de franchise.', p:'70 000–90 000 MAD', r:'Projet clé en main' },
  ];
  return (
    <section className="section">
      <h1 className="h1 mb-6">Nos services</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {blocks.map(b => (
          <div key={b.t} className="card">
            <h2 className="h2">{b.t}</h2>
            <p className="mt-2">{b.d}</p>
            <p className="mt-2 text-muted">Tarif: {b.p} • Résultat: {b.r}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
