"use client";

import { useEffect, useRef, useState } from "react";
import { Eye } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const DOCTORS = [
  {
    id: 1,
    name: "ডা. মোহাম্মদ রফিকুল ইসলাম",
    qualification: "FCPS (Ophthalmology) • MS (Eye)",
    specialty: "সিনিয়র চক্ষু বিশেষজ্ঞ ও সার্জন",
  },
  {
    id: 2,
    name: "ডা. মোহাম্মদ রাশেদুল ইসলাম",
    qualification: "MBBS • DO (Ophthalmology)",

    specialty: "শিশু চক্ষু রোগ বিশেষজ্ঞ",
  },
  {
    id: 3,
    name: "ডা. করিম উদ্দিন আহমেদ",
    qualification: "MBBS • MS (Retina)",
    specialty: "রেটিনা ও গ্লুকোমা বিশেষজ্ঞ",
  },
  {
    id: 4,
    name: "ডা. সালমা বেগম",
    qualification: "MBBS • FCPS (Part II)",
    specialty: "ক্যাটারাক্ট ও কর্নিয়া বিশেষজ্ঞ",
  },
  {
    id: 5,
    name: "ডা. সালমা বেগম",
    qualification: "MBBS • FCPS (Part II)",
    specialty: "ক্যাটারাক্ট ও কর্নিয়া বিশেষজ্ঞ",
  },
  {
    id: 6,
    name: "ডা. সালমা বেগম",
    qualification: "MBBS • FCPS (Part II)",
    specialty: "ক্যাটারাক্ট ও কর্নিয়া বিশেষজ্ঞ",
  },
  {
    id: 7,
    name: "ডা. সালমা বেগম",
    qualification: "MBBS • FCPS (Part II)",
    specialty: "ক্যাটারাক্ট ও কর্নিয়া বিশেষজ্ঞ",
  },
];

/** Swap this for a real next/image of each doctor. */
function DoctorPhoto() {
  return (
    <div className="flex aspect-[4/5] w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-[#0B4F4C]/15 to-[#0B4F4C]/5">
      <Eye className="h-9 w-9 opacity-30" strokeWidth={1.5} />
      <span className="font-['Hind_Siliguri'] text-xs opacity-40">
        ডাক্তারের ছবি
      </span>
    </div>
  );
}

export default function DoctorsSection() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const autoplay = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true, stopOnMouseEnter: true }),
  );

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    const onSelect = () => setCurrent(api.selectedScrollSnap());
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <section className="bg-white px-5 py-16 sm:px-6 lg:px-8">
      <div className="services-header fade-in">
        <div className="section-label"> আমাদের চিকিৎসক দল</div>
        <h2 className="font-['Hind_Siliguri'] text-5xl font-bold leading-snug text-[#0A2540] sm:text-4xl">
          অভিজ্ঞ বিশেষজ্ঞদের হাতে
          <br className="hidden sm:block" /> আপনার চোখ
        </h2>
      </div>

      <div className="mx-auto max-w-6xl">
        <Carousel
          setApi={setApi}
          opts={{ align: "center", loop: true }}
          plugins={[autoplay.current]}
        >
          <CarouselContent className="-ml-4 sm:-ml-6">
            {DOCTORS.map((doc) => (
              <CarouselItem
                key={doc.id}
                className="basis-[85%] pl-4 sm:basis-1/2 sm:pl-6 lg:basis-1/3 xl:basis-1/4"
              >
                <Card className="h-full overflow-hidden rounded-2xl border-[#0A2540]/10 pt-0 shadow-sm transition-shadow hover:shadow-md">
                  <DoctorPhoto />
                  <CardContent className="p-5">
                    <div className="font-['Hind_Siliguri'] text-base font-bold text-[#0A2540]">
                      {doc.name}
                    </div>
                    <div className="mt-1 text-sm font-medium text-[#0B4F4C]">
                      {doc.qualification}
                    </div>
                    <div className="mt-1.5 text-xs text-slate-500">
                      {doc.specialty}
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="mt-8 flex w-full flex-wrap items-center justify-center gap-4 sm:justify-between">
            <div className="flex gap-2">
              {Array.from({ length: count }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => api?.scrollTo(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all ${
                    i === current ? "w-6 bg-[#0B4F4C]" : "w-1.5 bg-[#0B4F4C]/25"
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-3">
              <CarouselPrevious className="static translate-y-0 border-[#0A2540]/15 text-[#0A2540] hover:bg-[#0A2540]/5" />
              <CarouselNext className="static translate-y-0 border-[#0A2540]/15 text-[#0A2540] hover:bg-[#0A2540]/5" />
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
}
