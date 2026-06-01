import { Outlet, Link, useLocation } from 'react-router-dom';

export default function AppLayout() {
  const location = useLocation();

  return (
    <div className="app-container">
      {/* Background decorative orbs */}
      <div className="bg-orb orb-1"></div>
      <div className="bg-orb orb-2"></div>
      
      <nav className="glass-sidebar">
        <div className="sidebar-header">
          <h2>🤖 FIMEBOT</h2>
        </div>
        <ul className="sidebar-nav">
          <li>
            <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/estadisticas" className={location.pathname === '/estadisticas' ? 'active' : ''}>
              Analítica y Text Mining
            </Link>
          </li>
          <li>
            <Link to="/cuestionarios" className={location.pathname === '/cuestionarios' ? 'active' : ''}>
              Metodología (Avances)
            </Link>
          </li>
          <li>
            <Link to="/tutor" className={location.pathname === '/tutor' ? 'active' : ''}>
              Tutor IA
            </Link>
          </li>
          <li>
            <Link to="/proyectos" className={location.pathname === '/proyectos' ? 'active' : ''}>
              Proyectos
            </Link>
          </li>
        </ul>
      </nav>
      
      <main className="main-content">
        <header className="glass-topbar">
          <div className="user-profile">
            <span className="avatar">👤</span>
            <span>Estudiante</span>
          </div>
        </header>
        <div className="content-area">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
