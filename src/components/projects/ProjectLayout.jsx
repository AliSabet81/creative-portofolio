import Link from "next/link";
import React from "react";

const ProjectLayout = ({ name, description, date, demoLink }) => {
  return (
    <Link
      href={demoLink}
      target="_blank"
      className="text-sm md:text-base flex items-center justify-between w-full relative rounded-lg overflow-hidden p-4 md:p-6 custom-bg"
    >
      <div className="flex items-center justify-center space-x-2">
        <h2 className="text-foreground">{name}</h2>
        <p className="text-muted hidden sm:inline-block">{description}</p>
      </div>
      <div className="self-end flex-1 mx-2 mb-1 bg-transparent border-b border-dashed border-muted" />
      <p className="text-muted sm:wtext-foreground">
        {new Date(date).toDateString()}
      </p>
    </Link>
  );
};

export default ProjectLayout;
