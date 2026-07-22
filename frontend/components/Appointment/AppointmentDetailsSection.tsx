import { Stethoscope, UserRound, Info } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const CONSULTATION_FEES = [
  {
    title: "চক্ষু বিশেষজ্ঞ চিকিৎসক",
    fee: "৫০০",
    icon: Stethoscope,
  },
  {
    title: "এম.বি.বি.এস (পিজিটি-চক্ষু) চিকিৎসক",
    fee: "২০০",
    icon: UserRound,
  },
];

const OPERATIONS = [
  { name: "Indian লেন্সসহ ছানি অপারেশন", cost: "৭,৫০০ – ১০,০০০" },
  { name: "Australian লেন্সসহ ছানি অপারেশন", cost: "৯,৭০০" },
  { name: "American লেন্সসহ ছানি অপারেশন", cost: "১২,০০০ – ১৫,০০০" },
  { name: "নেত্রনালী DCR অপারেশন", cost: "৭,৫০০ – ৮,৫০০" },
  { name: "DCT অপারেশন", cost: "৬,২০০" },
  { name: "টেরিজিয়াম অপারেশন", cost: "৪,২০০" },
  { name: "গ্রাফটিং সহ অপারেশন", cost: "৬,৭০০" },
  { name: "ইনক্লুশন অপারেশন", cost: "৫,২০০" },
  { name: "ইমপ্লান্ট সহ ইনক্লুশন অপারেশন", cost: "৮,৫০০" },
  { name: "কালাজিয়ান অপারেশন", cost: "৩,৭০০" },
  { name: "সিস্ট অপারেশন", cost: "৫,০০০ – ৮,২০০" },
  { name: "গ্লুকোমা (IOL ছাড়া) অপারেশন", cost: "৭,২০০" },
];

export default function AppointmentDetailsSection() {
  return (
    <section className="bg-white px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="mb-4 font-['Hind_Siliguri'] text-lg font-bold text-[#0A2540]">
          রোগী দেখার ফি
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {CONSULTATION_FEES.map((f) => (
            <Card
              key={f.title}
              className="rounded-2xl border-[#0A2540]/10 shadow-sm"
            >
              <CardContent className="flex items-center gap-4 p-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0B4F4C]/10 text-[#0B4F4C]">
                  <f.icon className="h-5 w-5" strokeWidth={2} />
                </div>
                <div className="min-w-0">
                  <div className="truncate text-sm font-medium text-slate-600">
                    {f.title}
                  </div>
                  <div className="font-['Hind_Siliguri'] text-2xl font-bold text-[#0A2540]">
                    {f.fee}
                    <span className="ml-1 text-sm font-medium text-slate-500">
                      টাকা
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <p className="mt-3 text-xs italic text-slate-500">(পরীক্ষা ব্যতীত)</p>

        <div className="mb-4 mt-12 font-['Hind_Siliguri'] text-lg font-bold text-[#0A2540]">
          বিভিন্ন অপারেশনের চার্জসমূহ
        </div>
        <div className="overflow-x-auto rounded-2xl border border-[#0A2540]/10">
          <Table>
            <TableHeader>
              <TableRow className="bg-[#EAF4F5] hover:bg-[#EAF4F5]">
                <TableHead className="font-['Hind_Siliguri'] text-sm font-semibold text-[#0A2540]">
                  অপারেশনের ধরন
                </TableHead>
                <TableHead className="text-right font-['Hind_Siliguri'] text-sm font-semibold text-[#0A2540]">
                  খরচ (টাকা)
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {OPERATIONS.map((op, i) => (
                <TableRow
                  key={op.name}
                  className={i % 2 === 1 ? "bg-[#0B4F4C]/[0.03]" : undefined}
                >
                  <TableCell className="text-[14.5px] text-[#0A2540]">
                    {op.name}
                  </TableCell>
                  <TableCell className="text-right text-[14.5px] font-semibold text-[#0B4F4C]">
                    {op.cost} টাকা
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="mt-8 flex items-start gap-3 rounded-2xl border border-[#D98E04]/25 bg-[#D98E04]/[0.06] p-5">
          <Info className="mt-0.5 h-5 w-5 shrink-0 text-[#D98E04]" />
          <p className="text-sm leading-relaxed text-[#0A2540]/85">
            প্রতিটি অপারেশন খরচের মধ্যে ২৪ ঘণ্টা হাসপাতালে থাকা ও ৩ বেলা খাবারসহ
            অপারেশনকালীন সকল ঔষধ দেওয়া হয়।
          </p>
        </div>
        <div className="mt-8 flex items-start gap-3 rounded-2xl border border-[#D98E04]/25 bg-[#D98E04]/[0.06] p-5">
          <Info className="mt-0.5 h-5 w-5 shrink-0 text-[#D98E04]" />
          <p className="text-sm leading-relaxed text-[#0A2540]/85">
            বি.দ্রঃ শুক্রবার বাদে অন্যান্য দিনে বিশেষজ্ঞ চিকিৎসক দ্বারা চক্ষু
            রোগের চিকিৎসা প্রদান করা হয়ে থাকে। যেমন- মাথা ব্যথা, চোখে কম দেখা,
            চোখের প্রেসার, চশমা নির্ধারণ, চোখ দিয়ে পানি পড়া ও অন্যান্য।
          </p>
        </div>
      </div>
    </section>
  );
}
