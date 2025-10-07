'use client';

import Image from 'next/image';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { mois: 'Jan', ca: 120 },
  { mois: 'Fév', ca: 160 },
  { mois: 'Mar', ca: 210 },
  { mois: 'Avr', ca: 250 },
  { mois: 'Mai', ca: 290 },
  { mois: 'Juin', ca: 340 }
];

export default function SectionPerformance() {
  return (
    <section className="section grid gap-8 md:grid-cols-2 items-center">
      <div className="card">
        <Image
          src="/fit-club.jpg"   // place ton image dans public/fit-club.jpg
          alt="Performance FITSTRATEGY"
          width={900}
          height={600}
          className="rounded-xl"
          priority
        />
        <p className="mt-3 text-muted text-sm">
          Étude de cas — +35 % de CA en 6 mois après le programme 90 Jours.
        </p>
      </div>

      <div className="card">
        <h2 className="h2 mb-3">Croissance du chiffre d’affaires</h2>
        <div style={{ width: '100%', height: 280 }}>
          <ResponsiveContainer>
            <LineChart data={data} margin={{ top: 10, right: 10, bottom: 0, left: -20 }}>
              <CartesianGrid stroke="#27272a" strokeDasharray="3 3" />
              <XAxis dataKey="mois" tick={{ fill: '#a1a1aa' }} />
              <YAxis tick={{ fill: '#a1a1aa' }} />
              <Tooltip contentStyle={{ background: '#0B0B0B', border: '1px solid #27272a', color: '#fff' }} />
              <Line type="monotone" dataKey="ca" stroke="#CFAE70" strokeWidth={3} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <p className="mt-3 text-sm text-muted">Source : Dashboard mensuel – échantillon clubs accompagnés.</p>
      </div>
    </section>
  );
}
