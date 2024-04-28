import Image from "next/image";
import bg from "../../../public/background/projects-background.png";
import ProjectList from "@/components/projects";
import { projectsData } from "../data";

export default function Projects() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image
        src={bg}
        alt="background-image"
        fill
        className="-z-50 w-full h-full object-cover object-center opacity-25"
      />
      <ProjectList projects={projectsData} />
    </main>
  );
}
