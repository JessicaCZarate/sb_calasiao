import Image from "next/image";
export default function Card() {
  return (
    <figure className="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
      <a href="#">
        <Image
          className="rounded-lg"
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png"
          alt="image description"
          width={100}
          height={100}
        />
      </a>
      <figcaption className="absolute px-4 text-lg text-white bottom-6">
        <p>
          Do you want to get notified when a new component is added to Flowbite?
        </p>
      </figcaption>
    </figure>
  );
}
