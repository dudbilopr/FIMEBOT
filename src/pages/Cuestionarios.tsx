import { avancesPreguntas } from '../data/mockData';

export default function Cuestionarios() {
  return (
    <div>
      <div style={{ marginBottom: '24px' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 700 }}>Metodología y Avances 📝</h1>
        <p style={{ color: 'var(--glass-text-muted)', marginTop: '8px' }}>
          Documenta el progreso de tu Máquina de Goldberg respondiendo a las preguntas de cada fase.
        </p>
      </div>

      <div className="dashboard-grid" style={{ gridTemplateColumns: '1fr' }}>
        {avancesPreguntas.map((fase, i) => (
          <div className="glass-panel" key={i} style={{ marginBottom: '24px' }}>
            <div className="card-header">
              <h3 style={{ color: 'var(--accent-hover)' }}>{fase.fase}</h3>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {fase.preguntas.map((pregunta, j) => (
                <div key={j} style={{ background: 'rgba(0,0,0,0.2)', padding: '16px', borderRadius: '8px', border: '1px solid var(--glass-border)' }}>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>{pregunta}</label>
                  {pregunta.includes('Foto') || pregunta.includes('video') ? (
                    <input type="file" className="glass-input" style={{ background: 'transparent', border: '1px dashed var(--glass-border)' }} />
                  ) : (
                    <textarea 
                      className="glass-input" 
                      rows={3} 
                      placeholder="Escribe tu respuesta aquí..."
                      style={{ resize: 'vertical' }}
                    ></textarea>
                  )}
                </div>
              ))}
              <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '16px' }}>
                <button className="glass-button">Guardar Avance</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
