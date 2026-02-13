function ProjectCard({ title, description, image }) {
  return (
    <div className="card">
      <div className="card-image">
        {image ? (
          <img src={image} alt={title} />
        ) : (
          <div className="image-placeholder">Project Image</div>
        )}
      </div>

      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
