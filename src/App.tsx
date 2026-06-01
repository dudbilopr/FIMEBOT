import { Routes, Route } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';
import Dashboard from './pages/Dashboard';
import Estadisticas from './pages/Estadisticas';
import Cuestionarios from './pages/Cuestionarios';

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="estadisticas" element={<Estadisticas />} />
        <Route path="cuestionarios" element={<Cuestionarios />} />
        <Route path="tutor" element={<div className="glass-panel" style={{padding: '32px'}}><h2>Tutor IA (En construcción)</h2></div>} />
        <Route path="proyectos" element={<div className="glass-panel" style={{padding: '32px'}}><h2>Proyectos (En construcción)</h2></div>} />
      </Route>
    </Routes>
  );
}

export default App;
