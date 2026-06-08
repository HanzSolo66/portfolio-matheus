const technologies = [
  "Next.js",
  "React",
  "TypeScript",
  "Git e GitHub",
  "Playwright",
  "GitHub Actions",
  "Vercel",
  "APIs",
];

const highlights = [
  "30 aulas dinâmicas organizadas em uma trilha gamificada",
  "Progresso salvo localmente no navegador",
  "Quiz, certificado personalizado e vídeos de apoio",
  "Assistente PetroKoblaco com Gemini e fallback local",
  "Layout responsivo para desktop e celular",
  "16 testes automatizados em desktop e mobile",
  "CI no GitHub Actions para validar cada Pull Request",
];

export default function Home() {
  return (
    <main>
      <header className="header">
        <a className="brand" href="#inicio">
          MB
        </a>

        <nav className="nav" aria-label="Navegação principal">
          <a href="#sobre">Sobre</a>
          <a href="#projetos">Projetos</a>
          <a href="#contato">Contato</a>
        </nav>
      </header>

      <section id="inicio" className="hero">
        <div className="heroContent">
          <p className="eyebrow">PORTFÓLIO • TRANSIÇÃO DE CARREIRA</p>

          <h1>
            Olá, eu sou <span>Matheus Batista.</span>
          </h1>

          <p className="heroText">
            Profissional com experiência em atendimento, suporte técnico,
            suporte financeiro e relacionamento com clientes, em transição
            para a área de tecnologia.
          </p>

          <p className="heroText">
            Estou desenvolvendo projetos que conectam tecnologia, experiência
            do usuário, automação e resolução de problemas reais.
          </p>

          <div className="actions">
            <a className="primaryButton" href="#projetos">
              Ver projeto principal
            </a>

            <a
              className="secondaryButton"
              href="https://github.com/HanzSolo66"
              target="_blank"
              rel="noreferrer"
            >
              Ver GitHub
            </a>
          </div>
        </div>

        <aside className="statusCard">
          <p className="eyebrow">OBJETIVO PROFISSIONAL</p>

          <h2>Atuar com tecnologia e suporte ao usuário</h2>

          <p>
            Busco oportunidades em suporte técnico, customer success técnico,
            análise de sistemas, qualidade de software e experiência do
            usuário.
          </p>

          <div className="status">
            <span className="statusDot" />
            Disponível para oportunidades
          </div>
        </aside>
      </section>

      <section id="sobre" className="section">
        <div className="sectionHeading">
          <p className="eyebrow">SOBRE MIM</p>
          <h2>Experiência com pessoas aplicada à tecnologia</h2>
        </div>

        <div className="aboutGrid">
          <article className="card">
            <h3>Minha base profissional</h3>
            <p>
              Minha trajetória foi construída atendendo pessoas em diferentes
              contextos: vendas, suporte, dúvidas técnicas, processos
              financeiros e resolução de problemas.
            </p>
          </article>

          <article className="card">
            <h3>O que estou desenvolvendo</h3>
            <p>
              Estou estudando desenvolvimento web, automação, APIs, testes,
              Git, publicação de aplicações e boas práticas de experiência do
              usuário.
            </p>
          </article>

          <article className="card">
            <h3>Como posso contribuir</h3>
            <p>
              Tenho facilidade para entender necessidades, explicar soluções,
              organizar processos e transformar dificuldades do usuário em
              melhorias práticas.
            </p>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="sectionHeading">
          <p className="eyebrow">TECNOLOGIAS</p>
          <h2>Ferramentas que estou utilizando</h2>
        </div>

        <div className="tags">
          {technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>
      </section>

      <section id="projetos" className="section">
        <div className="sectionHeading">
          <p className="eyebrow">PROJETO PRINCIPAL</p>
          <h2>Suporte Tech 30 Dias</h2>
        </div>

        <article className="projectCard">
          <div className="projectContent">
            <div>
              <p className="projectLabel">WEB APP EDUCACIONAL GAMIFICADO</p>

              <h3>
                Uma trilha prática para transição de carreira em tecnologia
              </h3>

              <p>
                O projeto conecta fundamentos técnicos com situações reais de
                atendimento, suporte, organização de processos e experiência
                do usuário.
              </p>
            </div>

            <div className="projectActions">
              <a
                className="primaryButton"
                href="https://suporte-tech-30-dias-web.vercel.app"
                target="_blank"
                rel="noreferrer"
              >
                Abrir aplicação
              </a>

              <a
                className="secondaryButton"
                href="https://github.com/HanzSolo66/suporte-tech-30-dias"
                target="_blank"
                rel="noreferrer"
              >
                Ver código no GitHub
              </a>
            </div>
          </div>

          <div className="projectDetails">
            <div>
              <p className="eyebrow">PROBLEMA</p>
              <p>
                Pessoas em transição de carreira frequentemente estudam
                conteúdos isolados e têm dificuldade para demonstrar evolução
                prática.
              </p>
            </div>

            <div>
              <p className="eyebrow">SOLUÇÃO</p>
              <p>
                Uma aplicação com aulas, progresso, quizzes, certificado,
                vídeos de apoio e assistência contextual.
              </p>
            </div>

            <div>
              <p className="eyebrow">QUALIDADE</p>
              <p>
                O projeto possui testes automatizados com Playwright e
                validação contínua pelo GitHub Actions.
              </p>
            </div>
          </div>

          <div className="projectHighlights">
            <h4>Principais entregas</h4>

            <ul>
              {highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </div>
        </article>
      </section>

      <section id="contato" className="contactSection">
        <p className="eyebrow">CONTATO</p>

        <h2>Vamos conversar?</h2>

        <p>
          Estou disponível para oportunidades, projetos e conexões na área de
          tecnologia.
        </p>

        <div className="actions">
          <a
            className="primaryButton"
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a
            className="secondaryButton"
            href="https://github.com/HanzSolo66"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </section>

      <footer>
        <p>Matheus Batista • Portfólio em tecnologia</p>
      </footer>
    </main>
  );
}