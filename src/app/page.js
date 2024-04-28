import Image from "next/image";
import bg from "../../public/background/home-background.png";
import RenderModel from "@/components/RenderModel";
import Wizard from "@/components/models/Wizard";
import Navigation from "@/components/navigation";
import Harry from "@/components/models/Harry";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image
        src={bg}
        alt="background-image"
        fill
        className="-z-50 w-full h-full object-cover object-center opacity-25"
      />
      <div className="w-full h-screen">
        <Navigation />
        <RenderModel>
          <Harry />
        </RenderModel>
      </div>
    </main>
  );
}
