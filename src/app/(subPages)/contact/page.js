import Image from "next/image";
import bg from "../../../../public/background/contact-background.png";
import Form from "@/components/contact/Form";

export default function Contact() {
  return (
    <>
      <Image
        src={bg}
        priority
        sizes="100vw"
        alt="background-image"
        className="-z-50 top-0 left-0 fixed w-full h-full object-cover object-center opacity-40 "
      />
      <article className="relative w-full flex flex-col items-center justify-center py-8 sm:py-0 space-y-8">
        <div className="flex flex-col items-center justify-center space-y-6 w-full sm:w-3/4">
          <h1 className="text-accent font-semibold text-center text-2xl sm:text-4xl capitalize">
            Deploy a Smile: Connect & Collaborate
          </h1>
          <p className="text-center font-light text-sm xs:text-base">
            Venture forth into the realm of boundless collaboration, where
            pixels and code converge. Whether you&apos;re a valiant ally seeking
            to embark on daring joint quests, an inquisitive seeker of the
            arcane secrets behind the digital veil, or a bard eager to exchange
            tales of triumph and tribulation, your missives are cherished
            artifacts in this hallowed cyberspace. Deploy the form below to
            dispatch your communications across the great network, and
            anticipate the hum of a connection in response.
          </p>
        </div>
        <Form />
      </article>
    </>
  );
}
