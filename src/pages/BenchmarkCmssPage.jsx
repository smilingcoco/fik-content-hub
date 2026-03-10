import { useEffect, useState } from 'react';
import data from '../data/benchmark-cmss.json';
import HeroSection from '../components/HeroSection';
import SectionWrapper from '../components/SectionWrapper';

export default function BenchmarkCmssPage() {
  const [activeSection, setActiveSection] = useState('section-01');
  const [readingProgress, setReadingProgress] = useState(0);

  const navSections = [
    { id: 'section-01', number: '01', title: 'Objetivo' },
    { id: 'section-02', number: '02', title: 'Alcance' },
    { id: 'section-03', number: '03', title: 'Criterios' },
    { id: 'section-04', number: '04', title: 'Benchmark' },
    { id: 'section-05', number: '05', title: 'Recomendaciones' },
    { id: 'section-06', number: '06', title: 'Next Steps' }
  ];

  useEffect(() => {
    document.title = "Benchmark CMS's - Tailor Hub";
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll('[data-nav-section="true"]');
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible?.target?.id) {
          setActiveSection(visible.target.id);
        }
      },
      { rootMargin: '-30% 0px -55% 0px', threshold: 0.05 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY || window.pageYOffset;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? Math.min(100, (scrollTop / maxScroll) * 100) : 0;
      setReadingProgress(progress);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <main className="page-shell">
      <div className="reading-progress" aria-hidden="true">
        <div className="reading-progress-bar" style={{ width: `${readingProgress}%` }} />
      </div>
      <a className="hub-backlink" href="/">
        ← Volver al hub
      </a>

      <div className="app-layout">
        <HeroSection meta={data.meta} />

        <aside className="side-nav" aria-label="Navegación por secciones">
          <div className="side-nav-brand" aria-hidden="true">
            <img src="/isotipo-tailor-black.png" alt="" />
          </div>
          <ul className="side-nav-list">
            {navSections.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={activeSection === item.id ? 'side-nav-link active' : 'side-nav-link'}
                  aria-current={activeSection === item.id ? 'true' : undefined}
                >
                  <span>{item.number}.</span> {item.title}
                </a>
              </li>
            ))}
          </ul>
        </aside>

        <div className="page-content">
          <SectionWrapper id="section-01" number="01" title="Objetivo del benchmark">
            {data.overview.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </SectionWrapper>

          <SectionWrapper id="section-02" number="02" title="Alcance del análisis">
            {data.scope.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </SectionWrapper>

          <SectionWrapper id="section-03" number="03" title="Criterios y pesos">
            <div className="criteria-grid">
              {data.criteria.map((criterion) => (
                <article className="criteria-card" key={criterion.name}>
                  <div className="criteria-top">
                    <h3 className="criteria-name">{criterion.name}</h3>
                    <span className="criteria-weight">{criterion.weight}</span>
                  </div>
                  <p className="criteria-desc">{criterion.desc}</p>
                </article>
              ))}
            </div>
          </SectionWrapper>

          <SectionWrapper id="section-04" number="04" title="Resultado benchmark">
            <div className="signal-table-wrap">
              <table className="signal-table">
                <thead>
                  <tr>
                    <th>CMS</th>
                    <th>Fit principal</th>
                    <th>Score</th>
                    <th>Fortaleza</th>
                    <th>Riesgo</th>
                  </tr>
                </thead>
                <tbody>
                  {data.benchmark.map((item) => (
                    <tr key={item.cms}>
                      <td data-label="CMS">{item.cms}</td>
                      <td data-label="Fit principal">{item.fit}</td>
                      <td data-label="Score">{item.score}</td>
                      <td data-label="Fortaleza">{item.strength}</td>
                      <td data-label="Riesgo">{item.risk}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </SectionWrapper>

          <SectionWrapper id="section-05" number="05" title="Recomendaciones accionables">
            <ul className="action-list">
              {data.recommendations.map((rec, index) => (
                <li key={rec.title}>
                  <span className="action-num">{String(index + 1).padStart(2, '0')}</span>
                  <div className="action-text">
                    <strong>{rec.title}</strong>
                    {rec.body}
                  </div>
                </li>
              ))}
            </ul>
          </SectionWrapper>

          <SectionWrapper id="section-06" number="06" title="Next steps">
            <ul className="next-steps-list">
              {data.nextSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ul>
          </SectionWrapper>
        </div>
      </div>
    </main>
  );
}
