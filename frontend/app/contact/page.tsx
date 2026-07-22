import { MapPin, Phone, Share2, ArrowUpRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import IconBadge from "@/components/Contact/IconBadge";
import HeadingSection from "@/components/Contact/HeadingSection";
import Map from "@/components/Contact/Map";

const PHONES = [
  { label: "অ্যাপয়েন্টমেন্ট ও সাধারণ তথ্য", number: "+880 01965-051980" },
  { label: "জরুরি সেবা (২৪ ঘন্টা)", number: "+880 01999-787731" },
];

const SOCIALS = [
  {
    label: "Facebook",
    handle: "/BagerhatEyeHospital",
    href: "https://facebook.com/",
    // icon: Facebook,
  },
  {
    label: "Instagram",
    handle: "@bagerhateyehospital",
    href: "https://instagram.com/",
    // icon: Instagram,
  },
  {
    label: "YouTube",
    handle: "Bagerhat Eye Hospital",
    href: "https://youtube.com/",
    // icon: Youtube,
  },
];

export default function ContactPage() {
  return (
    <main className="bg-white">
      <HeadingSection />
      <section className="px-5 pb-16 pt-4 sm:px-6 sm:pb-20 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
          <Card className="rounded-2xl border-[#0A2540]/10 shadow-sm">
            <CardContent className="p-7">
              <IconBadge icon={MapPin} />
              <h2 className="mt-5 font-['Hind_Siliguri'] text-lg font-bold text-[#0A2540]">
                ঠিকানা
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                দশানী ট্রাফিক মোড় (সার্কিট হাউজের পূর্ব পাশে)
                <br />
                বাগেরহাট, খুলনা, বাংলাদেশ
              </p>
              <a
                href="https://maps.app.goo.gl/Ukez9wLzHm6p5s578"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#0B4F4C] hover:underline"
              >
                দিক নির্দেশনা দেখুন
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </CardContent>
          </Card>
          <Card className="rounded-2xl border-[#0A2540]/10 shadow-sm">
            <CardContent className="p-7">
              <IconBadge icon={Phone} tone="amber" />
              <h2 className="mt-5 font-['Hind_Siliguri'] text-lg font-bold text-[#0A2540]">
                ফোন নম্বর
              </h2>
              <div className="mt-3 space-y-4">
                {PHONES.map((p) => (
                  <div key={p.number}>
                    <div className="text-xs text-slate-500">{p.label}</div>
                    <a
                      href={`tel:${p.number.replace(/[^+\d]/g, "")}`}
                      className="mt-0.5 inline-block text-[15px] font-semibold text-[#0A2540] hover:text-[#0B4F4C]"
                    >
                      {p.number}
                    </a>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          {/* <Card className="rounded-2xl border-[#0A2540]/10 shadow-sm">
            <CardContent className="p-7">
              <IconBadge icon={Share2} />
              <h2 className="mt-5 font-['Hind_Siliguri'] text-lg font-bold text-[#0A2540]">
                সামাজিক যোগাযোগ
              </h2>
              <div className="mt-3 flex flex-col gap-1">
                {SOCIALS.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between rounded-xl px-2 py-2.5 transition-colors hover:bg-[#0B4F4C]/5"
                  >
                    <span className="flex items-center gap-3">
                      <s.icon className="h-[18px] w-[18px] text-[#0B4F4C]" />
                      <span>
                        <span className="block text-sm font-semibold text-[#0A2540]">
                          {s.label}
                        </span>
                        <span className="block text-xs text-slate-500">
                          {s.handle}
                        </span>
                      </span>
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-slate-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#0B4F4C]" />
                  </a>
                ))}
              </div>
            </CardContent>
          </Card> */}
        </div>
        <Map />
      </section>
    </main>
  );
}
