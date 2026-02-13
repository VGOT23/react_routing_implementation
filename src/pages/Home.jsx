import HeroSection from "../components/HeroSection";

function Home() {
  return (
    <>
      <HeroSection />

      {/* About Section */}
      <section className="section">
        <h2>About Me</h2>
        <p className="section-text">
          I am a third-year Computer Science student focused on AI, ML,
          and full-stack development. I enjoy solving algorithmic problems,
          building scalable web applications, and exploring intelligent systems.
        </p>
      </section>

      {/* Skills Section */}
      <section className="section light-bg">
        <h2>Technical Skills</h2>
        <div className="skills-grid">
          <div className="skill-card">C++</div>
          <div className="skill-card">Data Structures</div>
          <div className="skill-card">React JS</div>
          <div className="skill-card">Machine Learning</div>
          <div className="skill-card">Python</div>
          <div className="skill-card">SQL</div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <h2>Let's Build Something Great</h2>
        <p className="section-text">
          I am actively working on improving my problem-solving and
          development skills to prepare for strong software engineering roles.
        </p>
      </section>
    </>
  );
}

export default Home;
