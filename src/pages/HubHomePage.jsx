import { useEffect } from 'react';
import withBase from '../utils/withBase';

const contentItems = [
  {
    title: 'Documento Placeholder 01',
    description: 'Resumen placeholder del contenido 01. Sustituir por título y descripción reales.',
    href: '#/origins-map',
    status: 'Borrador'
  },
  {
    title: 'Documento Placeholder 02',
    description: 'Resumen placeholder del contenido 02. Sustituir por título y descripción reales.',
    href: '#/benchmark-cmss',
    status: 'Borrador'
  },
  {
    title: 'Documento Placeholder 03',
    description: 'Reservado para próximo contenido del hub.',
    href: null,
    status: 'Próximamente'
  }
];

export default function HubHomePage() {
  useEffect(() => {
    document.title = 'FIK Content Hub';
  }, []);

  return (
    <main className="hub-shell">
      <header className="hub-header">
        <img className="hub-logo" src={withBase('/fik.svg')} alt="FIK Content Hub" />
        <p className="hub-kicker">FIK · Content Hub</p>
        <h1 className="hub-title">Contenidos Estratégicos</h1>
        <p className="hub-subtitle">
          Plantilla de hub para centralizar contenidos estratégicos. Sustituye estos textos por copy definitivo.
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
