/* eslint-disable @next/next/no-img-element */
import React from "react";
import ItemLayout from "./ItemLayout";

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 xs:gap-6 gap-4 md:gap-8 w-full">
        <ItemLayout className="col-span-full lg:col-span-8 row-span-2 flex-col items-start">
          <h2 className="text-xl md:text-2xl text-left w-full capitalize">
            Architect of Enchantment
          </h2>
          <p className="font-light text-xs sm:text-sm md:text-base">
            My journey in web development is powered by an array of mystical
            tools and languages, with JavaScript casting the core of my
            enchantments. I wield frameworks like React.js and Next.js with
            precision, crafting seamless portals (websites) that connect realms
            (users) across the digital universe. The ancient arts of the
            Jamstack empower me to create fast, secure, and dynamic experiences,
            while my design skills ensure every creation is not only functional
            but visually captivating. Join me as I continue to explore new
            spells and technologies to shape the future of the web.
          </p>
        </ItemLayout>
        <ItemLayout className="col-span-full xs:col-span-6 lg:col-span-4 text-accent">
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            25+ <sub className="font-semibold text-base">clients</sub>
          </p>
        </ItemLayout>
        <ItemLayout className="col-span-full xs:col-span-6 lg:col-span-4 text-accent">
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            1+{" "}
            <sub className="font-semibold text-base">
              1+ years of experience
            </sub>
          </p>
        </ItemLayout>
        <ItemLayout
          className={"col-span-full sm:col-span-6 md:col-span-4 !p-0"}
        >
          <img
            className="w-full h-auto"
            src="https://github-readme-stats.vercel.app/api/top-langs?username=AliSabet81&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false"
            alt="AliSabet"
            loading="lazy"
          />
        </ItemLayout>
        <ItemLayout className={"col-span-full md:col-span-8 !p-0"}>
          <img
            className="w-full h-auto"
            src="https://github-readme-stats.vercel.app/api?username=AliSabet81&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false"
            alt="AliSabet"
            loading="lazy"
          />
        </ItemLayout>
        <ItemLayout className={"col-span-full"}>
          <img
            className="w-full h-auto"
            src="https://skillicons.dev/icons?i=js,html,css,bootstrap,discord,express,git,github,linkedin,materialui,mongodb,nextjs,nodejs,npm,postman,react,stackoverflow,tailwind,ts,vite,vscode,yarn"
            alt="AliSabet"
            loading="lazy"
          />
        </ItemLayout>
        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <img
            className="w-full h-auto"
            src="https://github-readme-streak-stats.herokuapp.com?user=AliSabet81&theme=dark&hide_border=true&type=png&background=EB545400&ring=FEFE5B&currStreakLabel=FEFE5B"
            alt="AliSabet"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <img
            className="w-full h-auto"
            src="https://github-readme-stats.vercel.app/api/pin/?username=AliSabet81&repo=NextJs-Training&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false"
            alt="AliSabet"
            loading="lazy"
          />
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;
