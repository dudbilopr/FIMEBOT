import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { coevaluacionStats, feedbackComments } from '../data/mockData';

export default function Estadisticas() {
  return (
    <div>
      <div style={{ marginBottom: '24px' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 700 }}>Analítica y Text Mining 📊</h1>
        <p style={{ color: 'var(--glass-text-muted)', marginTop: '8px' }}>
          Análisis automatizado de las rúbricas y encuestas de coevaluación del proyecto.
        </p>
      </div>

      <div className="dashboard-grid" style={{ gridTemplateColumns: '1fr' }}>
        <div className="glass-panel" style={{ height: '400px' }}>
          <div className="card-header">
            <h3>Promedios de Coevaluación (FIMEBOT AI)</h3>
          </div>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={coevaluacionStats} margin={{ top: 20, right: 30, left: 20, bottom: 50 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
              <XAxis dataKey="name" stroke="#fff" angle={-45} textAnchor="end" height={60} />
              <YAxis stroke="#fff" domain={[0, 5]} />
              <Tooltip 
                contentStyle={{ backgroundColor: 'rgba(15, 23, 42, 0.9)', border: '1px solid var(--glass-border)', borderRadius: '8px' }}
                itemStyle={{ color: '#fff' }}
              />
              <Bar dataKey="promedio" fill="var(--accent-color)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <h2 style={{ marginTop: '32px', marginBottom: '16px' }}>Text Mining: Análisis de Sentimiento y Alertas</h2>
      <div className="dashboard-grid">
        {feedbackComments.map((fb, i) => (
          <div className="glass-panel" key={i} style={{ borderLeft: fb.sentiment === 'Negativo' ? '4px solid #ef4444' : '4px solid #22c55e' }}>
            <h4 style={{ marginBottom: '8px', color: '#fff' }}>Estudiante: {fb.student}</h4>
            <p style={{ color: 'var(--glass-text-muted)', fontSize: '0.9rem', marginBottom: '12px' }}>"{fb.comment}"</p>
            <div>
              <strong>Sentimiento: </strong> 
              <span style={{ color: fb.sentiment === 'Negativo' ? '#ef4444' : '#22c55e' }}>{fb.sentiment}</span>
            </div>
            <div style={{ marginTop: '8px' }}>
              <strong>Términos Clave: </strong>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '4px' }}>
                {fb.keyTerms.map((term, j) => (
                  <span key={j} style={{ background: 'rgba(255,255,255,0.1)', padding: '4px 8px', borderRadius: '12px', fontSize: '0.8rem' }}>
                    {term}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
