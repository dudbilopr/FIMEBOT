export default function Dashboard() {
  return (
    <div>
      <div style={{ marginBottom: '24px' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 700 }}>Bienvenido de nuevo 👋</h1>
        <p style={{ color: 'var(--glass-text-muted)', marginTop: '8px' }}>
          Este es el inicio de tu plataforma FIMEBOT.
        </p>
      </div>

      <div className="dashboard-grid">
        <div className="glass-panel">
          <div className="card-header">
            <h3>Tutor IA</h3>
          </div>
          <p style={{ color: 'var(--glass-text-muted)', marginBottom: '16px' }}>
            Resuelve tus dudas al instante con Gemini.
          </p>
          <button className="glass-button">Ir al Chat</button>
        </div>

        <div className="glass-panel">
          <div className="card-header">
            <h3>Tus Proyectos</h3>
          </div>
          <p style={{ color: 'var(--glass-text-muted)', marginBottom: '16px' }}>
            Tienes 2 proyectos en curso y 1 tarea pendiente.
          </p>
          <button className="glass-button">Ver Detalles</button>
        </div>

        <div className="glass-panel">
          <div className="card-header">
            <h3>Configuración</h3>
          </div>
          <p style={{ color: 'var(--glass-text-muted)', marginBottom: '16px' }}>
            Ajusta tu perfil y preferencias de Firebase.
          </p>
          <button className="glass-button">Opciones</button>
        </div>
      </div>
    </div>
  );
}
