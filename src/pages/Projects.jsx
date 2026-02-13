import ProjectCard from "../components/ProjectCard";

function Projects() {
  return (
    <div className="page">
      <h2>My Projects</h2>

      <div className="projects-grid">

        <ProjectCard
          title="AI Chatbot"
          description="NLP-based chatbot trained on custom dataset."
          image= "/images/project1.webp"
        />

        <ProjectCard
          title="Pathfinding Visualizer"
          description="Interactive visualization of A* and Dijkstra algorithm."
          image= "/images/project2.webp"
        />

        <ProjectCard
          title="DSA Tracker"
          description="Tracks coding progress and performance analytics."
          image= "/images/project3.webp"
        />

        <ProjectCard
          title="Portfolio Website"
          description="Responsive portfolio built using React and Router."
          image= "/images/project4.webp"
        />

        <ProjectCard
          title="Machine Learning Predictor"
          description="Regression model for predictive analysis."
          image= "/images/project5.webp"
        />

        <ProjectCard
          title="College Event Page"
          description="Event management UI with RSVP functionality."
          image= "/images/project6.webp"
        />

      </div>
    </div>
  );
}

export default Projects;
