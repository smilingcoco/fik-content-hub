import { useEffect } from 'react';

const contentItems = [
  {
    title: 'Origins Map',
    description:
      'ICP fase 0: arquetipos, patrones y decisiones accionables construidas sobre historial real de proyectos.',
    href: '/origins-map',
    status: 'Publicado'
  },
  {
    title: 'Tailor Playbook',
    description: 'Próximamente: manual operativo transversal para ventas, delivery y comunicación.',
    href: null,
    status: 'Próximamente'
  },
  {
    title: 'Signal Hunter Reports',
    description: 'Próximamente: panel editorial de señales, hipótesis y activaciones semanales.',
    href: null,
    status: 'Próximamente'
  }
];

export default function HubHomePage() {
  useEffect(() => {
    document.title = 'Tailor Content Hub';
  }, []);

  return (
    <main className="hub-shell">
      <header className="hub-header">
        <img className="hub-logo" src="/isotipo-tailor-black.png" alt="Tailor Hub" />
        <p className="hub-kicker">Tailor Hub · Content Hub</p>
        <h1 className="hub-title">Contenidos Estratégicos</h1>
        <p className="hub-subtitle">
          Un único punto de acceso para los documentos vivos de Tailor. Diseñado para crecer con nuevos assets.
        </p>
      </header>

      <section className="hub-list" aria-label="Listado de contenidos">
        {contentItems.map((item) => (
          <article className="hub-card" key={item.title}>
            <div className="hub-card-top">
              <span className="hub-status">{item.status}</span>
            </div>
            <h2 className="hub-card-title">{item.title}</h2>
            <p className="hub-card-desc">{item.description}</p>
            {item.href ? (
              <a className="hub-card-link" href={item.href}>
                Abrir contenido
              </a>
            ) : (
              <span className="hub-card-link disabled">Disponible pronto</span>
            )}
          </article>
        ))}
      </section>
    </main>
  );
}
