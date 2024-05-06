import Image from "next/image";
import bg from "../../../../public/background/projects-background.png";
import ProjectList from "@/components/projects";
import { projectsData } from "../../data";
import RenderModel from "@/components/RenderModel";
import { Laptop } from "@/components/models/Laptop";

export default function Projects() {
  return (
    <>
      <Image
        src={bg}
        priority
        sizes="100vw"
        alt="background-image"
        className="-z-50 top-0 left-0 fixed w-full h-full object-cover object-center opacity-40 "
      />
      <ProjectList projects={projectsData} />
      <div className="w-full fixed h-3/5 xs:h-3/4 sm:h-screen top-1/2 -translate-y-1/2 -z-20 -left-0 lg:-left-1/3">
        <RenderModel>
          <Laptop />
        </RenderModel>
      </div>
    </>
  );
}
