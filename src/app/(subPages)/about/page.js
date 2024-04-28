import Image from "next/image";
import bg from "../../../../public/background/about-background.png";
import RenderModel from "@/components/RenderModel";
import { Staff } from "@/components/models/Staff";
import Hat from "@/components/models/Hat";

export default function About() {
  return (
    <>
      <Image
        src={bg}
        alt="background-image"
        className="-z-50 top-0 left-0 fixed w-full h-full object-cover object-center opacity-25 "
      />
      <div className="w-full h-screen absolute top-1/2 -translate-y-1/2 left-0">
        <RenderModel>
          <Hat />
        </RenderModel>
      </div>
    </>
  );
}
