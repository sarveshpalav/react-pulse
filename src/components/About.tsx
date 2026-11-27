import { Container } from 'react-bootstrap';

const About = () => {
  return (
    <main className="about-page">
      <Container className="about-content">
        <p className="about-eyebrow">A little about the maker</p>
        <div className="about-intro">
          <h1>Sarvesh Palav<span>.</span></h1>
          <p className="about-summary">
            Building React Pulse, an interactive guide to how React renders,
            updates, and thinks.
          </p>
        </div>

        <section className="project-details" aria-labelledby="project-heading">
          <div className="project-heading-row">
            <div>
              <p className="about-eyebrow">Featured project</p>
              <h2 id="project-heading">React Pulse</h2>
            </div>
            <span className="project-mark" aria-hidden="true">RP</span>
          </div>
          <p className="project-description">
            A hands-on learning project exploring React concepts through clear,
            focused examples. Built with React, TypeScript, and Vite.
          </p>

          <dl className="project-facts">
            <div>
              <dt>Repository</dt>
              <dd><a href="https://github.com/sarveshpalav/react-pulse" target="_blank" rel="noreferrer">github.com/sarveshpalav/react-pulse <span aria-hidden="true">↗</span></a></dd>
            </div>
            <div>
              <dt>Live demo</dt>
              <dd><a href="https://react-pulse-five.vercel.app" target="_blank" rel="noreferrer">react-pulse-five.vercel.app <span aria-hidden="true">↗</span></a></dd>
            </div>
            <div>
              <dt>GitHub profile</dt>
              <dd><a href="https://github.com/sarveshpalav" target="_blank" rel="noreferrer">@sarveshpalav <span aria-hidden="true">↗</span></a></dd>
            </div>
          </dl>
        </section>
      </Container>
    </main>
  );
};

export default About;