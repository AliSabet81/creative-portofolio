import React from "react";

const ProjectLayout = ({ name, description, date, demoLink }) => {
  return (
    <div className="flex items-center justify-between w-full relative rounded-lg overflow-hidden p-6 custom-bg">
      <div className="flex items-center justify-center space-x-2">
        <h2 className="text-foreground">{name}</h2>
        <p className="text-muted">{description}</p>
      </div>
      <div className="self-end flex-1 mx-2 mb-1 bg-transparent border-b border-dashed border-muted" />
      <p className="text-foreground">{new Date(date).toDateString()}</p>
    </div>
  );
};

export default ProjectLayout;
