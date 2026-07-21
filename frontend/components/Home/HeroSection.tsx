"use client";

import { useEffect } from "react";
import { Eye, Phone, ArrowRight, Sparkles, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import image1 from "../../assets/images/1.jpg";

function useBanglaFonts() {
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;500;600;700&family=Noto+Sans+Bengali:wght@400;500;600&display=swap";
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []);
}

function PhotoPlaceholder({ className = "", label = "রোগীর ছবি" }) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-[#0B4F4C]/20 to-[#0B4F4C]/5 ${className}`}
    >
      {/* <Eye className="h-8 w-8 opacity-35" strokeWidth={1.5} />
      <span className="font-['Hind_Siliguri'] text-xs opacity-45">{label}</span> */}
      <img
        src={image1.src}
        alt={label}
        className="h-full w-full object-cover rounded-full"
      />
    </div>
  );
}

export default function HeroSection() {
  useBanglaFonts();

  return (
    <section className="overflow-x-hidden bg-gradient-to-b from-[#EAF4F5] to-white px-5 py-12 font-['Noto_Sans_Bengali'] sm:px-6 md:py-16 lg:py-[72px]">
      <div className="mx-auto grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-14">
        <div className="flex gap-7">
          <div>
            <h1 className="font-['Hind_Siliguri'] text-4xl font-bold leading-tight text-[#0A2540] sm:text-5xl lg:text-6xl">
              আলোর পথে
              <br />
              <span className="relative inline-block">
                আপনার পাশে{" "}
                <svg
                  className="absolute -bottom-1.5 left-0 h-2.5 w-full mb-2"
                  viewBox="0 0 220 10"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 6 Q 55 -2 110 6 T 218 6"
                    stroke="#D98E04"
                    strokeWidth="4"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            <p className="max-w-[440px] mt-3 text-[15px] leading-relaxed text-slate-600 sm:text-base">
              আমরা বিশ্বাস করি দৃষ্টিশক্তি একটি মৌলিক অধিকার। সুবিধাবঞ্চিত ও
              দরিদ্র মানুষদের জন্য স্বল্পমূল্যে উচ্চমানের চক্ষু চিকিৎসা প্রদান
              আমাদের অঙ্গীকার।
            </p>

            <div className="mt-8 flex flex-wrap gap-3.5">
              <Button className="h-auto gap-2 rounded-full bg-[#D98E04] px-5 py-3 text-[13px] font-semibold text-[#2A1B00] hover:bg-[#c17f03] sm:px-6 sm:text-[15px]">
                <Phone className="h-[17px] w-[17px]" />
                Call: +880 01965-051980
              </Button>
              <Button
                variant="outline"
                className="h-auto gap-2 rounded-full border-[#0A2540]/20 px-5 py-3 text-[13px] font-semibold text-[#0A2540] hover:bg-[#0A2540]/5 sm:px-6 sm:text-[15px]"
              >
                সেবাসমূহ দেখুন <ArrowRight className="h-4 w-4" />
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap gap-6 border-t border-[#0A2540]/10 pt-6 sm:gap-7">
              <div>
                <div className="font-['Hind_Siliguri'] text-xl font-bold text-[#0B4F4C]">
                  ৪৮+
                </div>
                <div className="text-xs text-[#5B6B73]">বার্ষিক ক্যাম্প</div>
              </div>
              <div>
                <div className="font-['Hind_Siliguri'] text-xl font-bold text-[#0B4F4C]">
                  ১২,০০০+
                </div>
                <div className="text-xs text-[#5B6B73]">রোগী সেবা</div>
              </div>
              <div>
                <div className="font-['Hind_Siliguri'] text-xl font-bold text-[#0B4F4C]">
                  ৩৫+
                </div>
                <div className="text-xs text-[#5B6B73]">বছরের অভিজ্ঞতা</div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT — phoropter-dial portrait */}
        <div className="relative mx-auto w-full max-w-[min(420px,92vw)]">
          <div className="relative aspect-square">
            <svg
              viewBox="0 0 200 200"
              className="absolute inset-0 h-full w-full"
            >
              <circle
                cx="100"
                cy="100"
                r="97"
                fill="none"
                stroke="#0B4F4C33"
                strokeWidth="1"
              />
              {Array.from({ length: 36 }).map((_, i) => {
                const a = (i * 10 * Math.PI) / 180;
                const long = i % 3 === 0;
                const r1 = 97;
                const r2 = long ? 90 : 93;

                return (
                  <line
                    key={i}
                    x1={(100 + r1 * Math.cos(a)).toFixed(2)}
                    y1={(100 + r1 * Math.sin(a)).toFixed(2)}
                    x2={(100 + r2 * Math.cos(a)).toFixed(2)}
                    y2={(100 + r2 * Math.sin(a)).toFixed(2)}
                    stroke="#0B4F4C55"
                    strokeWidth={long ? 1.5 : 1}
                  />
                );
              })}
            </svg>
            <PhotoPlaceholder
              className="absolute inset-[10%] rounded-full"
              label="ডাক্তার ও রোগীর ছবি"
            />
          </div>

          <div className="absolute left-1 top-3 flex items-center gap-2 rounded-2xl bg-white px-3.5 py-2.5 shadow-lg shadow-[#0A2540]/10 sm:-left-7">
            <Sparkles className="h-4 w-4 text-[#D98E04]" />
            <div>
              <div className="font-['Hind_Siliguri'] text-[15px] font-bold text-[#0A2540]">
                ৪৮+
              </div>
              <div className="text-[10.5px] text-[#5B6B73]">
                বিনামূল্যে ক্যাম্প
              </div>
            </div>
          </div>

          <div className="absolute bottom-5 right-1 flex items-center gap-2 rounded-2xl bg-[#0B4F4C] px-3.5 py-2.5 shadow-lg shadow-[#0B4F4C]/25 sm:-right-6">
            <Users className="h-4 w-4 text-white" />
            <div>
              <div className="font-['Hind_Siliguri'] text-[15px] font-bold text-white">
                ১২,০০০+
              </div>
              <div className="text-[10.5px] text-white/80">রোগী সেবা</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
