"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const photos = [
  {
    src: "/images/nexo-office.png",
    alt: "Sala de reuniões com mesa de madeira e janelas amplas",
    caption: "Sala de reuniões",
    position: "object-[center_60%]",
  },
  {
    src: "/images/nexo-sala-reuniao.jpg",
    alt: "Sala de reuniões com mesa de madeira e vista para a cidade",
    caption: "Outra vista da sala de reuniões",
    position: "object-center",
  },
  {
    src: "/images/nexo-retrato.jpg",
    alt: "Pessoa de óculos, camisa branca e gravata, diante de uma estante",
    caption: "Retrato ilustrativo",
    position: "object-[center_30%]",
  },
];

const controlClass =
  "grid size-11 place-items-center rounded-md bg-white text-brand-navy shadow-sm hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold";

export default function OfficeCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const photo = photos[activeIndex];

  function changePhoto(direction: -1 | 1) {
    setActiveIndex((current) => {
      return (current + direction + photos.length) % photos.length;
    });
  }

  return (
    <figure aria-label="Galeria da Nexo Legal" className="min-w-0">
      <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-brand-navy shadow-sm md:aspect-[4/5]">
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          sizes="(min-width: 1152px) 528px, (min-width: 768px) 46vw, calc(100vw - 48px)"
          className={`object-cover ${photo.position}`}
        />

        <div className="absolute inset-x-0 bottom-0 flex justify-between gap-3 bg-gradient-to-t from-black/55 to-transparent p-4">
          <button
            type="button"
            aria-label="Foto anterior"
            onClick={() => changePhoto(-1)}
            className={controlClass}
          >
            <ChevronLeft aria-hidden="true" className="size-5" />
          </button>

          <button
            type="button"
            aria-label="Próxima foto"
            onClick={() => changePhoto(1)}
            className={controlClass}
          >
            <ChevronRight aria-hidden="true" className="size-5" />
          </button>
        </div>
      </div>

      <figcaption
        aria-live="polite"
        className="mt-3 flex flex-wrap items-baseline justify-between gap-2 text-sm text-brand-muted"
      >
        <span>{photo.caption}</span>
        <span className="tabular-nums">
          {activeIndex + 1} de {photos.length}
        </span>
      </figcaption>
    </figure>
  );
}
